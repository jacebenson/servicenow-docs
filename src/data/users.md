---
title: Users
layout: libdoc_page.liquid
eleventyNavigation:
    parent: Tables
    key: Users
    order: 2800
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/csh?topicname=user-management.html&version=latest)

The `sys_user` table is where every person who can log into your instance lives — employees, contractors, customers, even system accounts. It's one of the oldest and most extended tables on the platform.

## Key Fields

| Field | Description |
|-------|-------------|
| `user_name` | Login name (must be unique) |
| `name` | Display name (First Last) |
| `email` | Email address |
| `phone` / `mobile_phone` | Contact numbers |
| `department` | Reference to `sys_department` |
| `manager` | Reference to another `sys_user` |
| `location` | Reference to `cmn_location` |
| `roles` | Roles assigned directly to the user |
| `active` | Boolean — is this user active? |
| `web_service_access_only` | Boolean — API-only account? |
| `ldap_server` / `source` | Where the user was imported from |
| `password_needs_reset` | Boolean — force password change on next login |

## User Types

- **Internal users** — Employees with full access (ITIL users, admins, etc.)
- **Web service access only** — API accounts that can't log in through the UI
- **External users** — Customers, vendors, partners (typically through portal access)

## Groups and Roles

Users belong to groups (`sys_user_grmember`) and those groups are assigned roles. A user's effective role set is the union of their direct roles plus roles inherited through group membership.

Roles determine what a user can see and do. ACLs, UI Policies, and other access controls check these roles.

## Further Reading

- [User management](https://www.servicenow.com/docs/csh?topicname=user-management.html&version=latest)
- [Groups](/data/groups/)
- [Access Controls](/access/access-controls/)
