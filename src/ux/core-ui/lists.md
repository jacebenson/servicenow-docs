---
title: Lists
description: TODO:FIXME
layout: libdoc_page.liquid
eleventyNavigation:
    key: Lists
    parent: Core UI
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/csh?topicname=platform-forms-fields-lists.html&version=latest)

List view is the grid that shows multiple records at once. It's the default view when you click a module in the application navigator — you get a table of records with sortable columns, inline editing, and filter conditions at the top.

## List Controls

Every list view has a **Personalize** option. Click the gear icon or right-click a column header → **Personalize → List Columns** to add, remove, and reorder columns. This creates a personal view override — just for you.

The **Condition Builder** at the top lets you filter records. You can add AND/OR conditions on any field. Conditions persist in the URL, so you can bookmark a filtered view and share it with someone.

## Personalization vs. Configuration

There are two levels of list customization:

| Level | Scope | How |
|---|---|---|
| Personal | Just you | Gear icon → Personalize |
| Admin | Everyone | Application Navigator → system property or sys_ui_list |

Admin-level list configuration is done through the `sys_ui_list` table. You can define which columns show by default for a given table, which order they're in, and which conditions are applied.

## Related Lists

On a form, related lists show records from other tables that reference the current record. For example, the incident form shows a related list of child tasks. These are configured separately from the main list — right-click a related list header → **Configure** to change which columns show.

## List Views

You can define multiple **views** for the same table. The default view is "Default view" but you can create views named "Mobile", "Print", or anything you want. Users switch between views using the view dropdown in the list header.

Each view has its own column layout, sort order, and conditions. Views are a clean way to give different groups different perspectives on the same data without building separate interfaces.

## Further Reading

- [Docs - Administer Lists](https://www.servicenow.com/docs/csh?topicname=administering-lists-now-platform.html&version=latest)
