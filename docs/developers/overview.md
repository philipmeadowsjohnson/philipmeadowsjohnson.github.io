---
title: Overview
---

The InternAloha scraper design involves the following:

  * Typescript rather than Javascript.
  * A Scraper superclass that provides a common structure for implementation of a scraper.
  * Use of [commander](https://www.npmjs.com/package/commander) for top-level CLI processing.
  * Structural support for multiple disciplines (i.e. scraping for computer science, for computer engineering, etc.)
  * Automatic generation of scraper statistics

Most importantly, this version implements a "standard processing workflow" in the form of the scrape() method:

```js
async scrape() {
  try {
    await this.launch();
    await this.login();
    await this.generateListings();
    await this.processListings();
  } catch (error) {
    const message = error['message'];
    this.errorMessages.push(message);
    this.log.error(message);
  } finally {
    await this.close();
    await this.writeListings();
    await this.writeStatistics();
  }
}
```

Basically, you implement a scraper by overriding (or adding functionality to) the methods launch(), login(), generateListings(), etc. You shouldn't need to touch the scrape() method.

The standard processing workflow will catch any errors thrown during launch(), login(), generateListings(), and processListings(). (We don't expect errors during close(), writeListings(), or writeStatistics().) A scraper should not implement try-catch blocks unless they are able to handle the error and continue processing. If an error is encountered, then it will be printed out to the console and indicated in the statistics file generated for that run.

