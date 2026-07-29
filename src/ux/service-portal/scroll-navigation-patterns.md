---
title: "Scroll navigation patterns in Service Portal"
description: TODO:FIXME
layout: libdoc_page.liquid
eleventyNavigation:
    key: Scroll Navigation Patterns
    parent: Scripts
date: git Last Modified
tags: 
    - stub
    - servicenow
    - service-portal
    - ui-behavior
    - javascript
permalink: "/servicenow/service-portal/scroll-navigation-patterns/"
---

## Overview

Scrolling behavior is a small but important part of the user experience in Service Portal pages.  
Depending on the layout and interaction model, you may want to:

- Force the page back to the top under certain conditions
- Scroll the user to a specific section or container
- Provide “jump” navigation triggered by UI elements

Below are **two alternative implementation patterns**, each solving a slightly different problem. Both are valid in Service Portal contexts, but their behavior and side effects differ.

---

## Option I – Page‑level scroll control

This option focuses on **controlling the overall page scroll position**.  
It reacts to user scroll direction and uses a click target to move the user to the bottom of the page.

### Characteristics

- Intercepts window scroll events
- Forces a scroll back to the top when upward scrolling is detected
- Uses full‑page scrolling (`html, body`)
- Suitable when the **entire page** is the navigation surface

### Example

```js
$(document).ready(function () {

  var lastScrollTop = 0;

  // Monitor scroll direction
  $(window).on("scroll", function () {
    var currentScroll = $(this).scrollTop();

    if (currentScroll < lastScrollTop) {
      // User scrolled up → force back to top
      $("html, body").scrollTop(0);
    }

    lastScrollTop = currentScroll;
  });

  // Delay binding to ensure DOM is ready
  $timeout(function () {
    $(".pointer").on("click", function () {

      var pageBottom = $(document).height();

      $("html, body").animate(
        { scrollTop: pageBottom },
        "fast"
      );

      return false;
    });
  }, 500);

});
```

---

## Option II – Element‑targeted scrolling

This option focuses on **scrolling to a specific container or section**, instead of manipulating the entire page flow.

### Characteristics

- No scroll interception
- Scrolls only when explicitly triggered
- Targets a specific DOM element
- Safer for complex layouts and dynamic content

### Example

```js
$(document).ready(function () {

  $timeout(function () {

    $(".pointer").on("click", function () {

      $timeout(function () {
        var target = document.getElementById("sc_category_page");

        if (target) {
          target.scrollIntoView();
        }

        return false;
      }, 250);

    });

  }, 500);

});
```