---
title: How to manage this site
sidebar_label: Manage this site
---

This site is implemented using [Docusaurus 2](http://v2.docusaurus.io). Here is an abbreviated guide to writing documentation for this site.

## Installation and invocation

You will want to create a local installation of this site in order to develop your documentation.

First, you must have commit/push privileges to internaloha/internaloha.github.io and internaloha/documentation repositories on GitHub.  You can obtain those privileges from Philip Johnson.

Next, download the [InternAloha documentation repository](https://github.com/internaloha/documentation).

Next, cd into the documentation directory and invoke `npm install`.

To bring up the site locally, invoke `npm start`.

You should see the site appear at http://localhost:3000.

## Writing documentation

To write documentation, you should create or modify the files in the docs/ directory.  The docs/ directory contains a set of *.md files organized into subdirectories.

The subdirectory organization mirrors the sidebar organization.

The easiest way to get started is to copy an existing markdown file that seems to contain the kind of markdown you need to use, and then edit it to provide the needed documentation.

Here are some issues to be aware of:

  * Each entry in the sidebar corresponds to a single file name. If you want your documentation to appear as multiple entries in the sidebar, then you must create multiple documentation markdown files.

  * Docusaurus creates a "secondary sidebar" on the right side of the page that essentially provides a table of contents for that page.  This enables rather lengthy top-level documentation files.

  * The docusaurus runtime environment regenerates the documentation each time it notices a file change. So, you can save out your file and the browser page should be refreshed automatically. Note that changes to docusaurus.config.js require you to exit and restart docusaurus to pick up the changes.

## Adding your new documentation to the sidebar

As soon as you start writing your documentation, you'll want to add an entry to the sidebar so that you can easily navigate to it. To do this, edit the sidebars.js file. Just add the name of your file to the appropriate array of file name strings in the appropriate place.

## Adding images

If you want to add images, you should first add the image file to the `static/img` directory.  Feel free to create a new subdirectory to hold your images if you feel that is appropriate. Then, you can insert your image using something like:

```
<img src="/img/Profiles.png"/>
```

## Publishing the site and committing changes

Once your documentation is just exactly perfect, you'll want to publish your changes.

To do this, make sure GIT_USER is set, then run `npm run deploy`. For more information, see [Deploying to GitHub Pages](https://v2.docusaurus.io/docs/deployment#deploying-to-github-pages).

This does not commit your changes to the source files, so be sure to do that after deploying the site.

## Advanced usage

If you want to do more advanced changes to the website, you'll probably want to consult the [docusaurus2 documentation](https://v2.docusaurus.io/docs/introduction).
