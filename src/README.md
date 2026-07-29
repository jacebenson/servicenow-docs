# Eleventy LibDoc

[Eleventy LibDoc website](https://eleventy-libdoc.netlify.app/) | [11ty website](11ty)

Eleventy LibDoc is an easy to use and content focused starter project for [Eleventy][11ty] to craft slick and responsive documentation. It was was developed with accessibility awareness and low-tech mindset which allows to reach good page speed performances. It contains vanilla JS self-made components like search, primary navigation, table of content, code highlighting and sandboxes. Every page created with LibDoc is printable and can work properly even without Javascript by maintaining only essential features

[![Netlify Status](https://api.netlify.com/api/v1/badges/d1986dbf-2272-4614-8dec-c228ba4699ef/deploy-status)](https://app.netlify.com/sites/11ty-libdoc-blank/deploys)

![image](https://github.com/user-attachments/assets/ed2c2d53-5927-473f-852e-e9c8e98aaa5f)

![image](https://github.com/user-attachments/assets/52fc521d-fb51-4174-8ab2-f6114af1abcc)


## Getting started

1. Clone or fork <https://github.com/ita-design-system/eleventy-libdoc>
2. Run `npm install`
3. Enter your own settings in `settings.json`. [Configuration](/content/configuration/index.md).
4. Build `npx @11ty/eleventy --serve` or `npx @11ty/eleventy` (if you already have your own web server).

[View deployment of this repository](https://11ty-libdoc-blank.netlify.app)

## Key features

* **Content focused** <br>LibDoc is easy to install, deploy and use.
* **Accessibility** <br>LibDoc was developed with accessibility awareness.
* **Performance** <br>Low front-end dependencies and vanilla JS self-made components make LibDoc cross-browser compatibility and good performances. <a href="https://developers.google.com/speed/pagespeed/insights/?url=eleventy-libdoc.netlify.app" target="_blank">View performances</a>.
* **Search** <br>Quickly get search results and easily navigate through search occurrences with a dedicated <abbr title="user Interface">UI</abbr>.
* **Smart navigation** <br>On page change, the primary navigation menu keeps its position.
* **Smart table of content** <br>In addition of a pure static table of content, LibDoc generates a floating <abbr title="Table of Content">TOC</abbr> always visible that also displays the current window scroll position.
* **Fallback if no Javascript available** <br>LibDoc can work even without Javascript with reduced features.
* **Image transcoding** <br>LibDoc transcodes and resizes your source images into production ready formats.
* **Printable** <br>Every page created with LibDoc can be printed.
* **Slick code highlighting** <br>Display your code in a nice style and adjust which code languages you really use.
* **Sandboxes** <br>Showcase small demos or full HTML pages into a responsive dual pane.

## Documentation

* [LibDoc’s homepage](https://eleventy-libdoc.netlify.app) <br>The website containing LibDocs’s presentation and comprehensive documentation.
    * [Front matter](https://eleventy-libdoc.netlify.app/front-matter/) <br>Documentation of all front matter settings related to a LibDoc page.
    * [Primary navigation](https://eleventy-libdoc.netlify.app/primary-navigation/) <br>Detailed features of LibDoc’s primary navigation.
    * [SEO](https://eleventy-libdoc.netlify.app/configuration/seo/) <br>How LibDoc’s configuration and pages parameters are applied for Search Engine Optimization.
    * [Credits](https://eleventy-libdoc.netlify.app/configuration/credits/) LibDoc could not work without these resources.

[11ty]: https://www.11ty.dev/
