---
title: User Experiences
description: TODO:FIXME
layout: libdoc_page.liquid
permalink: ux/index.html
eleventyNavigation:
    key: User Experiences
date: git Last Modified
---

ServiceNow has gone through three generations of user interface. Each one still exists, and each handles different use cases. If you're new to the platform the UX story can be confusing — why are there three ways to build a form? — but each exists for real reasons.

## The Three UX Layers

**Core UI** is the classic ServiceNow interface. It's what everyone thinks of when they picture ServiceNow: the blue banner, the application navigator on the left, forms with mandatory field indicators, list views with condition rows. It's been around since 2004 and it's not going anywhere. Most backend administration still happens here.

**Service Portal** (2015) was ServiceNow's first major attempt at a modern, consumer-grade interface. Built on AngularJS, it's widget-based — you compose pages out of reusable widgets. It replaced the old CMS and is still the primary interface for end users doing self-service (submitting catalog requests, browsing the knowledge base).

**Next Experience** (2020+) is the newest UX layer. It's built on modern web components and UI Builder lets you assemble pages visually. Configurable Workspaces (agent workspaces for ITSM, CSM, ITOM, etc.) live here, and ServiceNow is pushing all new UX investment in this direction.

## How They Relate

You don't have to pick one. Many instances run all three simultaneously:

- **Agents** use Next Experience workspaces for their day jobs (incident management, case handling)
- **End users** request services through Service Portal
- **Admins** configure everything in Core UI (though UI Builder is slowly taking over that role too)

Where each fits:

| Use Case | Best Fit |
|---|---|
| Agent productivity | Next Experience (workspaces) |
| Employee self-service | Service Portal / Employee Center |
| Admin configuration | Core UI |
| Public-facing forms | Service Portal |
| Mobile field work | Service Portal / Now Mobile |
| Chat-based service | Virtual Agent |

## In This Section

- **[Core UI](/ux/core-ui/)** — Forms, lists, reports, UI policies, UI macros, UI pages, client scripts, visual task boards
- **[Service Portal](/ux/service-portal/)** — Widgets, portals, service catalog portal, walk-up experience
- **[Next Experience](/ux/next-experience/)** — Workspaces, UI Builder, lists, UI actions
- **[Mobile](/ux/mobile/)** — Now Mobile, mobile apps platform
- **[Virtual Agent](/ux/virtual-agent/)** — Conversational AI, chatbots, topics

## Further Reading

- [Docs - Next Experience UI Overview](https://www.servicenow.com/docs/csh?topicname=next-experience-ui-overview.html&version=latest)
- [Docs - Service Portal](https://www.servicenow.com/docs/csh?topicname=c_ServicePortal.html&version=latest)
