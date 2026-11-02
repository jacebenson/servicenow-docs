---
title: Attachments
layout: libdoc_page.liquid
eleventyNavigation:
    parent: Data
    key: Attachments
    order: 2800
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/csh?topicname=attachments.html&version=latest)

Attachments in ServiceNow are weird. They're stored across two tables — one for the metadata, one for the actual file content — and they have their own access control model that doesn't always behave how you'd expect.

## The Attachment Tables

| Table | Purpose |
|-------|---------|
| `sys_attachment` | Metadata — file name, size, content type, which record it's attached to |
| `sys_attachment_doc` | The actual file content (compressed chunks) |

The content is split into chunks and stored in `sys_attachment_doc`. Each chunk has a position and data. ServiceNow reassembles them when someone downloads the file.

## Key sys_attachment Fields

| Field | Description |
|-------|-------------|
| `table_name` | Which table the attachment belongs to (e.g., `incident`) |
| `table_sys_id` | The specific record the attachment is on |
| `file_name` | Original filename |
| `content_type` | MIME type (e.g., `image/png`, `application/pdf`) |
| `size_bytes` | File size in bytes |
| `compressed` | Whether the content is compressed (usually true) |
| `average_image_color` | Dominant color (for thumbnail generation) |

## Attachment Security

Attachments use a two-level security model:

1. **Table-level ACLs** on `sys_attachment` control who can read/delete attachments
2. **The target record's ACLs** — by default, if a user has read access to a record, they can read the attachments on it

This means even if you lock down the attachment table directly, a user can still see attachments through the record they're attached to. The `sys_attachment.read` ACL is checked when someone directly queries the attachment table; the record's ACL is checked when accessing attachments through the form.

## Upload Limits

- Default max file size: 5 MB (configurable via `glide.attachment.max_size`)
- Max uploads per request: 20 (configurable via `glide.attachment.max_count`)
- Total attachment storage is part of your instance's storage allocation

## Working with Attachments in Scripts

```javascript
// Get all attachments on an incident
var gr = new GlideRecord('sys_attachment');
gr.addQuery('table_name', 'incident');
gr.addQuery('table_sys_id', incident_sys_id);
gr.query();
while (gr.next()) {
    gs.info('Attachment: ' + gr.getValue('file_name'));
}
```

## Further Reading

- [Working with images and attachments](https://www.servicenow.com/docs/csh?topicname=working-with-images-and-attachments.html&version=latest)
- [Encrypting fields and attachments](https://www.servicenow.com/docs/csh?topicname=encrypting-fields-and-attachments.html&version=latest)
