---
title: Import Sets
layout: libdoc_page.liquid
eleventyNavigation:
    parent: Data
    key: Import Sets
    order: 2800
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/csh?topicname=import-sets.html&version=latest)

Import Sets are ServiceNow's built-in mechanism for getting external data into the platform. You load data into a staging table (the import set table), then run a Transform Map to move it into the actual production tables.

## How Import Sets Work

1. **Define a Data Source** — Tells ServiceNow where the data comes from (file upload, JDBC, web service, email, etc.)
2. **Load into a Staging Table** — The raw data lands in an import set table, one row per record
3. **Run a Transform Map** — Maps fields from the staging table to the target table, with optional scripts for complex logic
4. **Review and Commit** — Check for errors, fix mapping issues, then commit or discard

## Key Tables

| Table | Purpose |
|-------|---------|
| `sys_data_source` | Defines the import source (file, JDBC, web service, etc.) |
| `sys_import_set` | Tracks import set runs — one row per batch load |
| `sys_import_set_row` | One row per record in a loaded import set |
| Your staging table | Auto-created based on the import set definition — e.g., `u_my_import_set` |
| `sys_import_set_queue` | Web service import queue |

## Import Methods

- **File upload** — CSV, Excel, XML (most common starting point)
- **JDBC** — Direct database connection to external systems
- **Web service** — REST/SOAP endpoints that post data directly to an import set
- **Email** — Inbound email can be parsed into an import set
- **MID Server** — For data sources inside your network

## Further Reading

- [Importing data using import sets](https://www.servicenow.com/docs/csh?topicname=importing-data-using-import-sets.html&version=latest)
- [Transform Maps](/data/import-sets-transform-maps/)
- [Robust Transform Maps](/data/import-sets-robust-transform-maps/)
- [Maik Skoddow - Importing and Transforming Data](https://www.servicenow.com/community/servicenow-ai-platform-articles/administration-importing-amp-transforming-of-external-data/ta-p/2373037)

## Additional sources

- <https://www.servicenow.com/docs/csh?topicname=cmdb-data-management.html&version=latest>
