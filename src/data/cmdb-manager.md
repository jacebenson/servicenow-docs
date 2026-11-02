---
title: CMDB Manager
description: TODO:FIXME
layout: libdoc_page.liquid
eleventyNavigation:
    parent: Data Management
    key: CMDB Manager
    order: 2800
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/csh?topicname=cmdb-data-management.html&version=latest)

The CMDB Manager is a UI tool for managing the Configuration Management Database — viewing, editing, and maintaining configuration items without having to dig into the underlying tables directly.

## What It Does

CMDB Manager gives you a curated view of your CMDB with tools specifically designed for CI management:

- **Browse and search** CIs by class, type, or any field
- **Edit** individual CI records with a form tailored to the CI class
- **Create** new CIs with proper class hierarchy
- **View relationships** — see how a CI connects to other CIs (depends on, used by, connected to, etc.)
- **Run data certifications** — schedule reviews to verify CI data accuracy
- **Manage duplicates** — find and merge duplicate CIs
- **View identification and reconciliation results** — see how ServiceNow identified this CI

## Why Use It

The CMDB Manager is safer than writing directly to `cmdb_ci_*` tables because it respects the identification and reconciliation engine. When you create or update a CI through the Manager, it runs through the proper CI identification rules, preventing duplicates and maintaining referential integrity.

## CMDB Manager vs. Table-Level Access

| Approach | Pros | Cons |
|----------|------|------|
| CMDB Manager | Respects identification rules, handles relationships, CI-class-aware forms | Limited bulk operations |
| Direct table access (cmdb_ci_*) | Full control, can script bulk updates | Risk of duplicates, broken references, bypasses reconciliation |

Use the CMDB Manager for manual CI management. Use import sets or Discovery for bulk CI operations.

## Further Reading

- [CMDB data management](https://www.servicenow.com/docs/csh?topicname=cmdb-data-management.html&version=latest)
- [CMDB](/data/cmdb/)
- [Data Management](/data/data-management/)
