---
title: GlideDate
description: Using GlideDate is something to avoid
layout: libdoc_page.liquid
eleventyNavigation:
    key: GlideDate
    parent: Docs
date: git Last Modified
---

GlideDate is the date-only counterpart to [GlideDateTime](/docs/glidedatetime/). It handles year-month-day without a time component. Less common in practice — most date fields store datetime values, so you'll reach for GlideDateTime more often. But when you only need a date, this is the tool.

[Docs](https://developer.servicenow.com/dev.do#!/reference/api/latest/server/no-namespace/c_GlideDateScopedAPI)

## Methods available

| Method | Description |
| ------ | ----------- |
| [getByFormat](#getbyformat) | Returns the date formatted per the given pattern |
| [getDisplayValue](#getdisplayvalue) | Returns the date in the user's display format |
| [getDisplayValueInternal](#getdisplayvalueinternal) | Returns the date as yyyy-MM-dd |
| [getValue](#getvalue) | Returns the date in internal format |
| [getDayOfMonth](#getdayofmonth) | Day of the month (1-31) |
| [getDayOfWeek](#getdayofweek) | Day of the week (0=Sunday, 6=Saturday) |
| [getDayOfYear](#getdayofyear) | Day of the year (1-366) |
| [getMonth](#getmonth) | Month of the year (1-12) |
| [getWeekOfYear](#getweekofyear) | Week number in the year |
| [getYear](#getyear) | Four-digit year |
| [setDisplayValue](#setdisplayvalue) | Set the date from a display format string |
| [setValue](#setvalue) | Set the date from internal format or another GlideDate |
| [valueOf](#valueof) | Milliseconds since epoch |

## Detail

### getByFormat

Returns the date formatted according to the given Java date pattern.

```js
var gd = new GlideDate();
gd.setValue('2024-03-15');
gs.info(gd.getByFormat('MM/dd/yyyy')); // 03/15/2024
gs.info(gd.getByFormat('MMMM dd, yyyy')); // March 15, 2024
```

### getDisplayValue

Returns the date string in the user's session date format (e.g., `yyyy-MM-dd`, `MM/dd/yyyy`).

### getDisplayValueInternal

Returns the date as `yyyy-MM-dd` regardless of user preferences.

### getValue

Returns the date in the internal format (`yyyy-MM-dd`).

### getDayOfMonth

Returns the day of the month as an integer (1-31).

### getDayOfWeek

Returns the day of the week as an integer. 0 = Sunday, 6 = Saturday.

### getDayOfYear

Returns the day of the year as an integer (1-366).

### getMonth

Returns the month as an integer (1 = January, 12 = December).

### getWeekOfYear

Returns the ISO week number as an integer (1-53).

### getYear

Returns the year as a four-digit integer.

### setDisplayValue

Sets the date from a display-format string. Parses using the user's session date format.

```js
var gd = new GlideDate();
gd.setDisplayValue('2024-03-15');
```

### setValue

Sets the date. Accepts either an internal-format date string (`yyyy-MM-dd`) or another GlideDate object.

```js
var gd = new GlideDate();
gd.setValue('2024-03-15');

var gd2 = new GlideDate();
gd2.setValue(gd);
```

### valueOf

Returns the epoch-time value for the date in milliseconds. Since GlideDate has no time component, this represents midnight UTC of the given date.

## Usage note

This is the GlideDate object. It’s used less than the GlideDateTime object.
