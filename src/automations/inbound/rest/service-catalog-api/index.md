---
title: Service Catalog API
description: "Order items and manage the service catalog via REST"
layout: libdoc_page.liquid
eleventyNavigation:
    parent: REST
    key: Service Catalog API
    order: 40
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/r/api-reference/rest-apis/c_ServiceCatalogAPI.html)

The Service Catalog API allows external systems to browse categories, view items, and submit requests through the Service Catalog.

## Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/sn_sc/servicecatalog/categories` | List catalog categories |
| GET | `/api/sn_sc/servicecatalog/items` | List catalog items |
| GET | `/api/sn_sc/servicecatalog/items/{sys_id}` | Get item details |
| POST | `/api/sn_sc/servicecatalog/items/{sys_id}/submit` | Submit catalog request |
| GET | `/api/sn_sc/servicecatalog/cart` | View current cart |
| POST | `/api/sn_sc/servicecatalog/cart/add` | Add item to cart |
| POST | `/api/sn_sc/servicecatalog/cart/checkout` | Checkout cart |

## Key Parameters

- `sysparm_category` - Filter by category sys_id
- `sysparm_search` - Search term for items
- `sysparm_order_by` - Sort results

## Variable Submission

Submit requests with variables as JSON:

```json
{
  "sysparm_quantity": 1,
  "variables": {
    "short_description": "Need access",
    "urgency": "2"
  }
}
```
