---
title: Installation
---

## Install libraries

To install libraries, run

```
npm install
```


## Define config.json

To run the scraper script, you must provide a (git-ignored) configuration file. This file's name defaults to config.json. Currently, this file contains credentials and other configuration information.

You can copy sample.config.json to config.json to create a template version of this file. If you are running scrapers that don't require credentials, then copying the template will be sufficient. Otherwise, you have to edit this file and provide your own credentials to log into the site that will be scraped.

## Fix chromium permissions (MacOS)

On recent versions of MacOS, there is an annoying popup window that appears each time puppeteer runs.  This problem is documented in [https://github.com/puppeteer/puppeteer/issues/4752](https://github.com/puppeteer/puppeteer/issues/4752).

If you are running MacOS, and get this popup, you can run the fix-chromium-permissions.sh script to address this problem. Note that if you reinstall Chromium (due to an update, for example), you will need to re-run the script.

After running the script, you may get the popup one final time.
