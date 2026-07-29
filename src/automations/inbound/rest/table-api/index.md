---
title: Table API
description: "CRUD operations via REST for any table"
layout: libdoc_page.liquid
eleventyNavigation:
    parent: REST
    key: Table API
    order: 10
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/csh?topicname=c_TableAPI.html&version=latest)

The Table API provides REST endpoints to interact with any ServiceNow table.

## Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/now/table/{tableName}/{sys_id}` | Get single record |
| GET | `/api/now/table/{tableName}` | Get multiple records |
| POST | `/api/now/table/{tableName}` | Create record |
| PATCH | `/api/now/table/{tableName}/{sys_id}` | Update record |
| DELETE | `/api/now/table/{tableName}/{sys_id}` | Delete record |

## Common Query Parameters

- `sysparm_query` - Encoded query string
- `sysparm_limit` - Max records to return
- `sysparm_fields` - Comma-separated field names to return
- `sysparm_display_value` - Return display values (`true`/`false`/`all`)

## REST API Explorer

Use **System Web Services > REST > REST API Explorer** to test endpoints directly in the browser without external tools.
