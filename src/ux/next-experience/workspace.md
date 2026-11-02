---
title: Workspace
description: TODO:FIXME
layout: libdoc_page.liquid
# eleventyNavigation:
#     key: Workspace
#     parent: Next Experience
date: git Last Modified
eleventyNavigation:
    key: Workspace
    parent: Next Experience
---

[Docs](https://www.servicenow.com/docs/csh?topicname=administering-configurable-workspace.html&version=latest)

Workspaces are pre-built areas that have various lists, forms and other components already built out for you. You can use these as-is, or you can customize them to fit your needs.

ServiceNow ships workspaces for every major product area: Service Operations Workspace for ITSM, Configurable Workspace for CSM, Security Incident Response Workspace, and others. Each one comes with a set of lists, forms, and views tailored to that domain.

## Workspace Components

A workspace is made of:

- **Lists** — The left panel showing records relevant to the workspace. Managed through UX List Categories and UX Lists (see [Lists in Next Experience](/ux/next-experience/lists/)).
- **Forms** — The detail view where users interact with individual records. Workspace forms are configured via UI Builder.
- **Views** — Different layouts for different tasks. The default view, a board view (Kanban), a map view — each is a separate configuration.
- **Unified Navigation** — The top bar with search, favorites, history, and the application navigator.

## Customization with UI Builder

Workspace pages are editable through **UI Builder**, the visual page designer for Next Experience. With UI Builder you can:

- Add, remove, and reorder sections on a form
- Add custom components from the component library
- Configure data resources that feed components
- Set up page variants (different layouts for different record types)
- Write client scripts for interactive behavior

## Workspace Builder

Beyond UI Builder, there's **Workspace Builder** — a tool specifically for creating and configuring workspaces at a higher level. It manages which tables a workspace uses, what lists appear in the navigation, and which roles can access the workspace.

## Further Reading

- [Docs - Administer Configurable Workspace](https://www.servicenow.com/docs/csh?topicname=administering-configurable-workspace.html&version=latest)
- [Next Experience UI Framework](https://developer.servicenow.com/dev.do#!/reference/next-experience/zurich/ui-framework/getting-started/introduction)
