---
title: Lists
description: TODO:FIXME
layout: libdoc_page.liquid
date: git Last Modified
eleventyNavigation:
    key: Lists
    parent: Next Experience
---

To change the Lists on the left of a workspace there are a few tables involved and they don't show up in UI Builder.

Cool Beans.

The list configuration in workspaces is entirely data-driven through four tables:

1. **UX List Categories** (`sys_ux_list_category`) — These are the "containers" or what I would have called the "applications" in the classic UI. A category groups related lists together — "Incident Management" might be a category containing lists for open incidents, my incidents, and critical incidents.

2. **UX Lists** (`sys_ux_list`) — These are the actual lists that show up under the categories. Each list has a name, a source table, filter conditions, and column configuration. This is where you define what records show and what columns appear.

3. **Audience** (`sys_ux_applicability_list`) — These define who can see the lists. Audiences can be roles, groups, or user criteria. If a user doesn't match any audience, they don't see the list.

4. **M2M Applicability** (`sys_ux_applicability_m2m_list`) — These connect the lists/categories to audiences. The M2M table links which audience has access to which category or list.

## How to Configure

1. Create a **UX List Category** (or use an existing one)
2. Create **UX Lists** within that category — specify the table, condition, and columns
3. Create or assign **Audiences** to control visibility
4. Link them through the M2M table

The tricky part is that changes here aren't versioned — you're working directly on the instance tables, not in an update set or application scope. Test on a dev instance first.

## Sources

1. [Configuring lists in Configurable Workspace (ServiceNow Community)](https://www.servicenow.com/community/next-experience-articles/configuring-lists-in-configurable-workspace/ta-p/2331983)
2. [Jace Benson - Configuring Workspace Lists](https://jace.pro/blog/configuring-workspace-lists-are-not-hard-when-you-know-where-to-look/)
