---
title: Page
description: Service Portal pages are widget containers accessible across all portals
layout: libdoc_page.liquid
eleventyNavigation:
    key: Page
    parent: Service Portal
date: git Last Modified
tags: []
---

[Official Docs](https://www.servicenow.com/docs/csh?topicname=c_Pages.html&version=latest)

A Service Portal page is a collection of widgets arranged in Bootstrap containers.

## Key Concept: Pages Are Portal-Agnostic

Pages are **not tied to a specific portal**. Create a page once, access it from any portal.

### URL Pattern

| Portal | URL Example |
|--------|-------------|
| Service Portal | `/sp?id=jace_test_page` |
| Employee Center | `/esc?id=jace_test_page` |
| Custom Portal | `/your_portal?id=jace_test_page` |

## What's in a Page?

1. **Widgets** - The functional components
2. **Containers** - Bootstrap grid layout
3. **Page-specific styling** - CSS overrides

## Quick Example

Create a page named `jace_test_page`, then access it:

```
https://instance.service-now.com/sp?id=jace_test_page
https://instance.service-now.com/esc?id=jace_test_page
```

Both URLs render the same page, just through different portal themes.
