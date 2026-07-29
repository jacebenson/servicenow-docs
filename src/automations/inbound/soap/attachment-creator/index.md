---
title: AttachmentCreator
description: "SOAP-based attachment creation without requiring target record"
layout: libdoc_page.liquid
eleventyNavigation:
    parent: SOAP
    key: AttachmentCreator
    order: 10
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/r/zurich/api-reference/web-services/r_AttachmentCreatorSOAPWebService.html)

The AttachmentCreator SOAP service creates attachments via the **ECC Queue**. Unlike the REST Attachment API, this does **not** require the target record to exist beforehand.

## Use Case

Attach files to records that haven't been created yet, or when you don't want to verify the target exists.

## How It Works

1. POST to `ecc_queue.do?JSON` (or `JSONv2` on newer instances)
2. ServiceNow processes the ECC Queue entry
3. Attachment is created and linked to the target record

## Request Format

```json
{
  "agent": "AttachmentCreator",
  "topic": "AttachmentCreator",
  "name": "filename.ext:mime/type",
  "source": "table_name:sys_id",
  "payload": "base64_encoded_file_content"
}
```

## Example

```json
{
  "agent": "AttachmentCreator",
  "topic": "AttachmentCreator",
  "name": "report.pdf:application/pdf",
  "source": "incident:9c573169c611228700193229fff72400",
  "payload": "JVBERi0xLjQKJ..."
}
```

## REST Alternative

This same SOAP service can be called via REST:

```
POST /ecc_queue.do?JSON&sysparm_action=insert
```

## Note

- For Geneva and later, prefer the [REST Attachment API](../rest/attachment-api/)
- Requires `rest_service` role and ECC Queue create ACL
