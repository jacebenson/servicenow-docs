---
title: Robust Transform Maps
layout: libdoc_page.liquid
eleventyNavigation:
    parent: Import Sets
    key: Robust Transform Maps
    order: 2800
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/csh?topicname=transform-maps.html&version=latest)

A Transform Map is the bridge between your import set staging table and the actual production table. It tells ServiceNow which staging columns map to which target fields, and what to do when things don't line up perfectly.

## How Field Mapping Works

Each Transform Map has **Field Maps** — one per target field. A field map says "take the value from staging column X and put it in target field Y."

Example: If your CSV has a column `Full Name` and your `sys_user` table has `name`, you create a field map from `Full Name` → `name`.

## What a Transform Map Does

- **Maps fields** — Source column to target field
- **Runs scripts** — Before/after map scripts for data transformation
- **Handles duplicates** — Choose whether to insert, update, or insert-or-update (coalesce)
- **Validates data** — Script-based validation that can skip records
- **Creates relationships** — Auto-map reference fields using coalesce

## Coalesce

Coalesce is the dedup mechanism. Mark a field as the coalesce field, and ServiceNow will look for an existing record with the same value in that target field. If found, it updates the record. If not found, it inserts a new one.

Common coalesce fields:
- `email` for users
- `number` for incidents
- `name` for CI records
- `serial_number` for assets

## Field Map Scripts

You can write a script on any field map to transform the value:

```javascript
// Example: Transform a phone number format
(function transformValue(source, target, value) {
    var cleaned = value.replace(/[^0-9]/g, '');
    return '(' + cleaned.substring(0,3) + ') ' + cleaned.substring(3,6) + '-' + cleaned.substring(6,10);
})(source, target, value);
```

## Further Reading

- [Working with Transform Maps](https://www.servicenow.com/docs/csh?topicname=working-with-transform-maps.html&version=latest)
- [Robust Transform Maps](/data/import-sets-robust-transform-maps/)
- [Import Sets](/data/import-sets/)
