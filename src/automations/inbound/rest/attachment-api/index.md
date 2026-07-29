---
title: Attachment API
description: "RESTful attachment management (requires target record to exist)"
layout: libdoc_page.liquid
eleventyNavigation:
    parent: REST
    key: Attachment API
    order: 50
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/r/api-reference/rest-apis/c_AttachmentAPI.html)

The Attachment API provides REST endpoints for uploading, downloading, and managing file attachments. Introduced in Geneva, this is the modern replacement for the SOAP AttachmentCreator.

## Key Difference

Unlike the [SOAP AttachmentCreator](../soap/attachment-creator/), the target record **must exist** before attaching.

## Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/now/attachment` | List attachments |
| GET | `/api/now/attachment/{sys_id}` | Get attachment metadata |
| GET | `/api/now/attachment/{sys_id}/file` | Download attachment |
| POST | `/api/now/attachment/file` | Upload attachment |
| DELETE | `/api/now/attachment/{sys_id}` | Delete attachment |

## Upload Request

```
POST /api/now/attachment/file?table_name=incident&table_sys_id=9c573169c611228700193229fff72400&file_name=report.pdf
Content-Type: application/pdf

[binary file data]
```

## Upload via Multipart

```
POST /api/now/attachment/upload
Content-Type: multipart/form-data

table_name: incident
table_sys_id: 9c573169c611228700193229fff72400
uploadFile: [binary data]
```

## Query Parameters

- `table_name` - Target table
- `table_sys_id` - Target record sys_id
- `file_name` - Name for the attachment
- `content_type` - MIME type

## When to Use

- Uploading files to existing records
- Modern integrations (Geneva+)
- Better performance and file size support
