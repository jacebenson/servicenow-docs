---
title: Import API
description: "Import data via REST using Import Sets"
layout: libdoc_page.liquid
eleventyNavigation:
    parent: REST
    key: Import API
    order: 30
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/r/api-reference/rest-apis/c_ImportSetAPI.html)

The Import API loads data into ServiceNow through Import Sets. Data flows through transform maps to create or update target table records.

## Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/now/import/{import_set_table}` | Get import set records |
| POST | `/api/now/import/{import_set_table}` | Insert record into import set |

## Key Parameters

- `transformAfter` - Run transform after insert (`true`/`false`)
- `source` - Source system identifier
- `sysparm_import_set_name` - Name the import set

## Transform Maps

Import Sets use Transform Maps to map source fields to target tables. The API response includes:
- `transformResult` - Success/failure status
- `targetRecord` - Sys ID of created/updated record

## Common Use Cases

- Bulk data imports from external systems
- Scheduled integrations via REST
- Data synchronization with transform logic
