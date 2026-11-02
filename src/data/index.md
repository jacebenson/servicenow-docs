---
title: Data
layout: libdoc_page.liquid
eleventyNavigation:
    key: Data
    order: 3100
date: git Last Modified
---

The Data section covers everything about how ServiceNow stores, organizes, and moves data around. Tables are the foundation — every record lives in a table, every table has columns (fields), and relationships between tables are how you connect a user's record to their group memberships, their assigned incidents, and so on.

ServiceNow is fundamentally a platform built on a relational database. Understanding how data works here is understanding how the platform works.

## What's in this section

- **[Tables](/data/tables/)** — Types of tables, custom table limits, and how to create them
- **[Tasks](/data/tasks/)** — The task table hierarchy and how incident, change, problem, and request all extend from task
- **[Users](/data/users/)** — User management, the `sys_user` table, and key user fields
- **[Groups](/data/groups/)** — User groups and role management
- **[CMDB](/data/cmdb/)** — The Configuration Management Database
- **[Import Sets](/data/import-sets/)** — Getting external data into ServiceNow
- **[Attachments](/data/attachments/)** — How file attachments work
- **[Database Views](/data/database-views/)** — Virtual tables that combine data from multiple tables
- **[Remote Tables](/data/remote-tables/)** — Accessing data from external sources
- **[Data Management](/data/data-management/)** — Managing data growth and retention

## Key Concepts

**Tables** are the core data structure. Every table extends from another table, forming a hierarchy. The root is `sys_db_object` (which defines tables themselves), but the practical root you'll work with most is `task` for work records.

**Records** are rows in a table. Each record has a unique `sys_id` that identifies it across the entire instance.

**Relationships** between tables are created through reference fields — a field on one table that points to a record on another table. This is how ServiceNow models real-world relationships: a user has a manager (reference to another user), an incident is assigned to a user, a configuration item belongs to a CI class.

## Further Reading

- [ServiceNow Data Model Overview](https://www.servicenow.com/docs/csh?topicname=tables-and-data.html&version=latest)
- [Tables and Data](https://www.servicenow.com/docs/csh?topicname=tables-and-data.html&version=latest)
