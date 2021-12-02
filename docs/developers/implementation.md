---
title: Implementation
---

## Review existing implementations

Before starting to implement your own scraper, check to make sure that you can run the NSF scraper successfully in your own environment. I suggest you read through the `Scraper.ts` and `Scraper.nsf.ts` files and make sure you understand the superclass and subclass relationship.  Notice how the NSF scraper methods frequently call the superclass method initially, then augment this behavior with additional code.

## Copy the template

Next, make a copy of `scrapers/Scraper.template.ts`, and replace 'template' by the name of your scraper. So, for example, `Scraper.glassdoor.ts`. Edit the file as follows:

  * Fix the class name (for example, to "GlassDoorScraper")
  * Fix the name field on line 7 from 'template' to your scraper name (for example, to 'glassdoor'). Keep the scraper name lower case, all one word, no hyphens. This will make it easier for the CLI.

## Add your scraper to the CLI

Next, update `main.ts` so that the CLI knows about your scraper. Edit the file as follows:

  * Add an import of your new scraper (for example, `import { GlassDoorScraper } from './scrapers/Scraper.glassdoor';`)
  * Update the `scrapers` object definition to include a new field and value for your scraper. For example, `glassdoor: new GlassDoorScraper(),`

Next, test the CLI to see if it understands your scraper. For example:

```
npm run scrape -- -s glassdoor -l debug
```

You should get a few lines of output and no errors.

## Implement the behavior

Finally, the "easy" part. Migrate the scraper code from the old version of the system into this new format.  There are some CLI options to help you, such as `--no-headless`, `--devtools`, `--slowmo`, and so forth.

Check out the nsf scraper for hints.  There is some code (such as the array spread operator) which works in the old version of the system, but which I had to replace with a call to forEach in version 2 since the new version uses Typescript.  If you run into difficulties where code works in the old version but not here and you can't figure it out, don't hesitate to ask for help.

To see if your scraper is working, compare the output file it writes into the listings directory to the output file in scraper/data/canonical. Note that there are a few fields (start, end, compensation, qualifications, skills, remote) that are not currently of interest.  Use the type definition of the Listing object to see what fields we are currently hoping to extract.

Make sure that your code passes lint:

```
npm run lint
```
