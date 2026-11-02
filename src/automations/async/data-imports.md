---
title: "Data Imports"
layout: libdoc_page.liquid
eleventyNavigation:
    parent: Async
    key: Data Imports
    order: 2910
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/csh?topicname=configure-data-import.html&version=latest)

Data imports are how you get structured data into ServiceNow from external sources. They run asynchronously because they can process thousands of rows at a time.

## How Data Imports Work

The import process has two phases:

1. **Load** — data is loaded into a staging table (the import set table, `sys_import_set_row`)
2. **Transform** — a transform map copies the staged data from the import set table to the target table, applying field mappings and business logic along the way

This two-phase approach means you can validate data before it hits your production tables. The load runs first, then transformation runs separately.

### Import Set Tables

When you import data (CSV, Excel, XML, JDBC), it lands in an import set table — a staging table with generic columns (`u_number`, `u_name`, `u_value1`, etc.). Each source file creates its own import set.

```js
// Programmatic import
var imp = new GlideImportSetTransformer();
imp.setImportSetRow('sys_id_of_row');
imp.transform();
```

### Transform Maps

Transform maps define the mapping between import set columns and target table fields. They can include:
- **Field maps** — simple `source field → target field` mappings
- **Scripted field maps** — Groovy scripts that transform values during import
- **Coalescing** — use a field to match against existing records (update vs insert)
- **Deduplication** — prevent duplicate records

## Async Processing

Imports are async because they can take a while. The `ImportSetWorker` scheduled job processes import sets in the background. You can monitor progress on the Import Set Rows (`sys_import_set_row`) table.

The async behavior means:
- The user gets a "your import started" response immediately
- The import processes in the background, queueing if other imports are running
- You get a notification when it completes (or fails)
- Large imports can be broken into chunks

## Data Sources

ServiceNow supports importing from:

- **CSV/Excel** — manual upload through the UI
- **JDBC** — direct database connections
- **REST** — the [Import Set API](/automations/inbound/rest/import-api/)
- **Mid Server files** — files on network shares accessed via MID Server

## Additional Resources

- [Docs - Data Import](https://www.servicenow.com/docs/csh?topicname=configure-data-import.html&version=latest)
- [Docs - Import Sets](https://www.servicenow.com/docs/csh?topicname=c_ImportSets.html&version=latest)
- [Docs - Transform Maps](https://www.servicenow.com/docs/csh?topicname=c_TransformMaps.html&version=latest)
- [Import Set API](/automations/inbound/rest/import-api/)
- [MIDServers](/automations/midservers/)
