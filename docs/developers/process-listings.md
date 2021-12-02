---
title: Developing processListings()
---

## Motivation

The standard scraper workflow involves:

  * generateListings(): scrape the website and create a single Listings object containing a set of Listing objects.
  * processListings(): run through the individual Listing objects and improve them. For example, replace non-breaking space characters by regular spaces, or reduce 4 newlines to 2, or filter listings that don't contain "Computer Science" or other important keywords.

This workflow is problematic during development. Let's say it takes 30 minutes for generateListings() to scrape the site.  It is frustrating to have to wait 30 minutes each time you want to test out a minor change to processListings().

To simplify development of processListings(), the scrape script includes a `--process-listings-file` option, which takes a file name as its value. When this option is provided, the script does not invoke generateListings(), but instead initializes the Listings object directly from the passed file.  This enables you to repeatedly run and refine the processListings() method without having to re-scrape the site each time.


## Workflow

Here is how to use the --process-listings-file option to support development of the processListings() method.

### 1. Run the scraper, and generate the "unprocessed" Listings file.

To start, run your chosen scraper to generate its listings file. It's best to comment out the processListings() method at this point, so the generated listings file does not contain any post-processing.

For example, let's assume we are developing the processListings() method for the NSF scraper. We can start by running the scraper without an NSF-specific processListings() method:

```
$ npm run scrape -- -s nsf

> scraper@2.0.0 scrape
> ts-node -P tsconfig.buildScripts.json scrape.ts "-s" "nsf"

12:39:32 WARN NSF Launching NSF scraper
12:39:37 INFO NSF Wrote 100 listings to ./listings/compsci/nsf.dev.json.
12:39:37 INFO NSF Wrote statistics.
```

### 2. Determine what you want to "process"

When we examine at the Listings file (nsf.dev.json), we notice the following:

```
 "description": "Research Topics/Keywords: ..
```

Let's say we actually want the description field to say "Research Topics and Keywords". So, we need a processListings() method to fix the description field.

### 3. Make a copy of the "unprocessed" listings file

The next step is to make a copy of the unprocessed listings file:

```
$ cp nsf.dev.json nsf.test.dev.json
```

### 4. Implement your initial version of processListings()

Now start the implementation of your processListings() method. For example:

```js
fixDescription(description) {
  return description.replace('Research Topics/Keywords', ' Research Topics and Keywords');
}

async processListings() {
  await super.processListings();
  this.listings.forEach(listing => { listing.description = this.fixDescription(listing.description); });
}
```

### 5. Run the scrape script as many times as necessary with --process-listings-file

Now run your scraper, passing your test file as the argument to --process-listings-file. For example:

```
$ npm run scrape -- -s nsf --process-listings-file nsf.test.dev.json

> scraper@2.0.0 scrape
> ts-node -P tsconfig.buildScripts.json scrape.ts "-s" "nsf" "--process-listings-file" "nsf.test.dev.json"

12:54:47 WARN NSF Launching NSF scraper
12:54:47 INFO NSF Reading listings from ./listings/compsci/nsf.test.dev.json
12:54:47 INFO NSF Wrote 100 listings to ./listings/compsci/nsf.dev.json.
12:54:47 INFO NSF Wrote statistics.
```

This script reads in listings from nsf.test.dev.json, initializes the Listings object in the NSF scraper with that data, skips over generateListings(), then calls processListings() and writes out the results.

You can now compare the contents of your "test" file (nsf.test.dev.json) to the file written after calling processListings() (nsf.dev.json).  If it's not correct, just edit your processListings() code and rerun the above command.  The "test" file is not changed by this command, so you don't have to regenerate it.

Keep rerunning this command until your processListings() code produces a Listings file the way that you want it.

In this example, we inspect the nsf.dev.json file and notice that our description field is now the way we want it:

```
 "description": " Research Topics and Keywords:
```

### 6. Run your scraper one last time to verify processListings()

Before committing your code, you might want to run your scraper a final time to ensure that processListings() is working correctly:

```
$ npm run scrape -- -s nsf

> scraper@2.0.0 scrape
> ts-node -P tsconfig.buildScripts.json scrape.ts "-s" "nsf"

13:02:02 WARN NSF Launching NSF scraper
13:02:09 INFO NSF Wrote 100 listings to ./listings/compsci/nsf.dev.json.
13:02:09 INFO NSF Wrote statistics.
```








