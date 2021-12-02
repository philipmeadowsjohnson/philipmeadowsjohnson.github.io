---
title: The "Test" Scraper
---

As noted in the references section, there are a number of sites that you can visit with your scraper which will assess its configuration and how likely it is to be tagged as a bot.  To facilitate this process, I have created a Test Scraper that visits these sites and takes snapshots of the results.  It generates screenshots with the suffix '.test.png', which are gitignored.

You can run this assessment in the standard way. Here is an example run:

```
$ npm run scrape -- -s test

> scraper@2.0.0 scrape
> ts-node -P tsconfig.buildScripts.json scrape.ts "-s" "test"

11:56:02 WARN TEST Launching TEST scraper
11:56:02 INFO TEST Run checkStealthUsage()
11:56:14 INFO TEST Screenshot at: test-stealthUsage.test.png
11:56:14 INFO TEST Run checkRequestHeaders()
11:56:25 INFO TEST Screenshot at: test-headers.test.png
11:56:25 INFO TEST Run checkBrowserFingerPrint()
11:56:36 INFO TEST Screenshot at: test-browserFingerPrint.test.png
11:56:36 INFO TEST Run checkBotChallenge()
11:57:31 INFO TEST Screenshot at: test-botChallenge.test.png
11:57:31 INFO TEST Run checkProxyVPN()
11:57:40 INFO TEST Screenshot at: test-proxyvpn.test.png
11:57:40 INFO TEST Wrote 0 listings.
11:57:40 INFO TEST Wrote statistics.
```

We can run this periodically to see if our scraper system is "reasonably lifelike".
