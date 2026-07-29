---
title: Batch API
description: "Bundle multiple REST requests into one call"
layout: libdoc_page.liquid
eleventyNavigation:
    parent: REST
    key: Batch API
    order: 20
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/r/api-reference/rest-apis/batch-api.html)

The Batch API bundles multiple REST API requests into a single HTTP request, reducing network overhead and improving performance.

## Endpoint

| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/api/now/v1/batch` | Execute multiple requests in one call |

## Request Body

```json
{
  "batch_request": {
    "rest_requests": [
      {
        "method": "GET",
        "url": "/api/now/table/incident?sysparm_limit=1"
      },
      {
        "method": "POST",
        "url": "/api/now/table/incident",
        "headers": {
          "Content-Type": "application/json"
        },
        "body": {
          "short_description": "New incident"
        }
      }
    ]
  }
}
```

## Key Points

- Max 50 requests per batch
- Each request gets a `request_index` to identify responses
- Responses maintain order of requests
- Supports all standard REST methods (GET, POST, PUT, PATCH, DELETE)
- Individual request failures don't stop other requests
