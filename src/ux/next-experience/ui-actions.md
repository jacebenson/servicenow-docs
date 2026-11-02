---
title: UI Actions
description: TODO:FIXME
layout: libdoc_page.liquid
date: git Last Modified
eleventyNavigation:
    key: UI Actions
    parent: Next Experience
---

[Docs](https://www.servicenow.com/docs/csh?topicname=administering-configurable-workspace.html&version=latest)

UI Actions work differently in Next Experience workspaces than they do in Core UI. In Core UI, a UI Action is a button or link on a form or list — you write a condition and a script, and it shows up when the condition's true. In Next Experience, UI Actions are configured through **UI Builder** and operate as actions that can appear on forms, lists, and record context menus.

## How They Work in Workspaces

A UI Action in a workspace is a record on the `sys_ux_ui_action` table. It has:

- **Name** — The display name of the action
- **Table** — Which table the action applies to
- **Condition** — When the action should be available (a script condition)
- **Action Type** — Server script, client script, or URL redirect
- **Location** — Where the action appears (form button, list context menu, record row action)

UI Actions in workspaces respect roles and ACLs just like Core UI actions do. If a user doesn't have access to the underlying table or operation, the action won't appear.

## UI Actions vs. Workspace Actions

There's a distinction worth understanding:

- **UI Actions** (`sys_ux_ui_action`) — The traditional UI Action system, extended to work with Next Experience workspaces
- **Workspace Actions** — Configured in UI Builder as part of a workspace's component tree. These are more granular and can be specific to a single workspace instance.

For most cases, the `sys_ux_ui_action` table is the right place to start. It keeps the action definition central rather than embedded in a specific workspace layout.

## Further Reading

- [Jace Benson - UI Actions Are Not Hard](https://jace.pro/blog/ux-ui-actions-workspace/)
- [Docs - Configurable Workspace UI Actions](https://www.servicenow.com/docs/csh?topicname=administering-configurable-workspace.html&version=latest)

## Workspace context

Workspaces are pre-built areas that have various lists, forms and other components already built out for you.  You can use these as-is, or you can customize them to fit your needs.
