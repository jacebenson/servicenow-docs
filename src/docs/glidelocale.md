---
title: GlideLocale
description: A list of all the field attributes that could be found here on the docs.
layout: libdoc_page.liquid
eleventyNavigation:
    key: GlideLocale
    parent: Docs
date: git Last Modified
---

GlideLocale provides the decimal and grouping separators used by the instance locale. Use these when presenting numbers in the locale’s display format.

[Docs](https://www.servicenow.com/docs/r/api-reference/server-api-reference/c_GlideLocaleScopedAPI.html)

## Methods available

| Method | Description |
| ------ | ----------- |
| [getDecimalSeparator](#getdecimalseparator) | Returns the decimal separator for the current locale |
| [getGroupingSeparator](#getgroupingseparator) | Returns the grouping (thousands) separator |

## Detail

### getDecimalSeparator

Returns the character used as the decimal separator in the current locale. Typically `.` in en-US, `,` in many European locales.

```js
var locale = GlideLocale.get();
gs.info(locale.getDecimalSeparator()); // "."
```

### getGroupingSeparator

Returns the character used as the grouping (thousands) separator. Typically `,` in en-US, `.` in many European locales.

```js
var locale = GlideLocale.get();
gs.info(locale.getGroupingSeparator()); // ","
```

For the current user’s date format, see [GlideSystem.getDateFormat](https://www.servicenow.com/docs/r/api-reference/server-api-reference/c_GlideSystemAPI.html).
