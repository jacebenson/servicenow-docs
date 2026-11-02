---
title: Application Files
layout: libdoc_page.liquid
eleventyNavigation:
    parent: Tables
    key: Application Files
    order: 2900
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/csh?topicname=application-files-table.html&version=latest)

The Application Files table (`sys_metadata`) stores files that are part of an application — scripts, style sheets, images, templates, anything that ships with an app. When a file lives here, it's tracked by update sets, source control, and the App Repository.

## What Goes Here

If you're building a scoped application and you create a file that needs to be included when the app is installed or upgraded, it belongs on the `sys_metadata` table. This includes:

- JavaScript files
- CSS stylesheets
- HTML templates
- Images and icons
- XML configuration files
- Any custom file your app needs at runtime

## Why Extend from sys_metadata

If you're creating a custom table where every record needs to be captured in update sets, App Repository changes, or source control commits, extend from `sys_metadata` instead of creating a raw table. Tables that extend `sys_metadata` automatically participate in the application management framework.

Example: Custom Script Includes don't extend `sys_metadata` directly (they have their own table `sys_script_include`), but they inherit update set tracking because they're in the metadata hierarchy.

## Key Fields

| Field | Description |
|-------|-------------|
| `sys_name` | The file name |
| `sys_class_name` | Which type of application file this is |
| `sys_scope` | The application scope it belongs to |
| `sys_package` | The application package (update set, app repo, etc.) |
| `sys_updated_by` / `sys_updated_on` | Audit tracking |

## Further Reading

- [Application Files table](https://www.servicenow.com/docs/csh?topicname=application-files-table.html&version=latest)
- [Tables](/data/tables/)
