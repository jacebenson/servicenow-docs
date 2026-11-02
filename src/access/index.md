---
title: Access
layout: libdoc_page.liquid
permalink: access/index.html
eleventyNavigation:
    key: Access
date: git Last Modified
---
Access is the part of ServiceNow that determines who can see what and who can do what. It's not one thing — it's a layered system of ACLs, roles, criteria, and before-query business rules that all interact in sometimes surprising ways.

Understanding how these layers interact is critical. A common mistake is to think "I set an ACL, I'm done" without realizing that a before-query business rule or user criteria is also filtering the same data. The most restrictive layer always wins for reads; for writes, the first layer that explicitly denies stops the transaction.

## What's in this section

- **[Access Controls](/access/access-controls/)** — ACLs, Deny-Unless vs Allow-If, evaluation order
- **[Public Pages](/access/publicpages/)** — Exposing UI Pages without authentication

## Key Concepts

- **ACLs (Access Control Lists)** — The primary mechanism for restricting read, write, create, delete, and execute operations on tables, fields, and records. They evaluate from broadest to most specific.
- **Roles** — Named sets of permissions assigned to users. An ACL can require one or more roles. Roles can be inherited through group membership.
- **User Criteria** — Conditions based on user properties (department, location, manager) used to control visibility. Common in Service Portal and Employee Center.
- **Before Query Business Rules** — Query business rules that can add conditions to any database query, effectively filtering what users see — often without their knowledge. BQ BRs apply *before* ACLs are checked.
- **High Security Settings** — Instance-level switches (glide.ui.undo, glide.authenticate) that disable features or require authentication.

## Further Reading

- [Docs - Security](https://www.servicenow.com/docs/csh?topicname=product-security.html&version=latest)
