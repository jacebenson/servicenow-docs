---
title: Tasks
description: TODO:FIXME
layout: libdoc_page.liquid
eleventyNavigation:
    parent: Tables
    key: Tasks
    order: 2800
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/csh?topicname=task-table.html&version=latest)

The `task` table (`[task]`) is the parent of almost every work record in ServiceNow. Incident, Change Request, Problem, Request, and many other core tables all extend from `task`. If you're creating a custom work-management table, you'll probably extend from `task` too.

## Task Table Hierarchy

```
task
├── incident
├── change_request
├── problem
├── sc_request (Service Catalog Request)
├── sc_task (Service Catalog Task)
├── rm_story
├── project_task
├── project
└── ... (your custom tables here)
```

Every table that extends `task` inherits all the task fields: Number, Short Description, Description, State, Priority, Assignment Group, Assigned To, Opened By, Opened At, and so on.

## Key Task Fields

| Field | Description |
|-------|-------------|
| `number` | Display value — e.g., INC0010001, CHG0010002 |
| `short_description` | Brief summary of the work |
| `description` | Full details |
| `state` | Workflow state (depends on the table — 1=New, 2=In Progress, etc.) |
| `priority` | 1 (Critical) to 5 (Planning) |
| `assigned_to` | Reference to sys_user — who's working it |
| `assignment_group` | Reference to sys_user_group — the team responsible |
| `opened_by` | Reference to sys_user — who created it |
| `opened_at` | Date/time it was created |
| `active` | Boolean — is this record still being worked? |

## Why Extend from Task?

Extending from task gives you built-in journal fields, the activity stream, state model support, assignment workflows, and SLA tracking. You get all of that for free. The alternative — creating a brand new root table — means you build all that from scratch.

## Further Reading

- [Working with the Task table](https://www.servicenow.com/docs/csh?topicname=working-with-task-table.html&version=latest)
- [Task table structure](https://www.servicenow.com/docs/csh?topicname=task-table-structure.html&version=latest)
- [Tables](/data/tables/)
