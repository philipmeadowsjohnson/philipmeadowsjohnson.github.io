---
title: Production
---

There is a bash script called `run-scrapers.sh` that is intended to invoke all of the scrapers in "production mode" and then generate statistics that will be committed to GitHub for future reference.  Currently, it looks like this:

```sh
#!/usr/bin/env bash

npm run scrape -- -cf true -s nsf -ml 100
npm run scrape -- -cf true -s simplyhired -ml 1000
npm run scrape -- -cf true -s apple -ml 40
npm run scrape -- -cf true -s ziprecruiter -ml 100
npm run scrape -- -cf true -s cisco -ml 20

npm run statistics -- -cf true

```

