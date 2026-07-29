---
title: Widget
description: Service Portal widgets are the building blocks of portal pages
layout: libdoc_page.liquid
eleventyNavigation:
    key: Widget
    parent: Service Portal
date: git Last Modified
tags: []
---

[Official Docs](https://www.servicenow.com/docs/csh?topicname=service-portal-widgets.html&version=latest)

Widgets are the content blocks that make up Service Portal pages. Add them via the Service Portal Designer or access all widgets at **Service Portal > Widgets**.

## Base System vs Custom

| Type | Description |
|------|-------------|
| **Base System** | Read-only widgets that receive future updates. Configure via instance options. |
| **Custom** | Cloned or created from scratch. You own the code but miss future updates. |

## Widget Instances

When you drag a widget onto a page, you create a **widget instance** — a reference with its own location, properties, and CSS. Multiple instances of the same widget can have different configurations.

## Debugging with Context Menu

**Ctrl+Right-click** any widget on a portal page (requires admin or sp_admin role):

| Option | Purpose |
|--------|---------|
| **Instance options** | Configure this specific instance |
| **Widget in Editor** | Open in Widget Editor (HTML, CSS, Client Script) |
| **Log to console: $scope.data** | See server data in browser console |
| **Log to console: $scope** | See entire scope object |
| **Widget performance** | Check load times |

## Quick Debug Trick

Inspect any widget element, then in console:

```javascript
angular.element($0).scope()
```

This shows all variables from the client controller. [Via Travis Toulson](https://www.linkedin.com/events/livecodingafternoontea-withtrav7359215939516604418/theater/)

## Testing Widgets Outside the Portal

Test widgets directly on UI16 pages without building a full portal:

- [Using a SP Widget on UI16](https://jace.pro/blog/using-a-sp-widget-on-ui16/)
- [Portal Widgets on UI Pages](https://snhackery.com/2019/04/10/portal-widgets-on-ui-pages/)

## Widget Editor

Access via **Service Portal > Widgets** or from the context menu. The editor has tabs for:

- **HTML Template** - Widget markup
- **CSS** - Scoped styles
- **Client Script** - Angular controller
- **Server Script** - Data retrieval
- **Demo Data** - Sample data for testing
