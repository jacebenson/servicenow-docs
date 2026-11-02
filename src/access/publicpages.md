---
title: "Public Pages"
layout: libdoc_page.liquid
eleventyNavigation:
    key: Public Pages
    parent: Access
    order: 400
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/csh?topicname=t_MakeAPagePublic.html&version=latest)

This was the original way to expose a UI Page on ServiceNow.  This was useful with the older, now unavailable, Content Management System (CMS).  These are still used for some things around midservers and ServiceNow's own check-ins with instances.

## How a Page Becomes Public

A UI Page (`sys_ui_page`) is public by default if its **Public** checkbox is checked on the UI Page record. When a page is public, ServiceNow serves it at `/<instance>.service-now.com/<page_name>.do` without requiring authentication.

The public flag bypasses the normal ACL checking for that specific page. The processing script still runs with the system user context (not a specific user's context), which has implications for what data the page can access.

## Security Implications

Making a page public means anyone on the internet can access it. This is a deliberate choice and should be treated carefully:

- **No authentication** — The page loads without any login
- **System context** — Scripts run as the system user, which has full access to all data
- **Rate limiting** — Public pages can be crawled or hit repeatedly without warning
- **Data exposure** — Any data the page renders is visible to anyone

The modern equivalent is to use **Service Portal** with **User Criteria** to control access, or to build a public-facing portal page with proper security configuration. If you're building new public-facing functionality, use Service Portal, not public UI Pages.

## What Still Uses Public Pages

- **Mid server setup** — The mid server downloads the validate and update scripts from public pages
- **Instance health checks** — ServiceNow's own monitoring checks hit public pages
- **Webhook callbacks** — Some external integrations expect a URL that returns HTML or XML

## Further Reading

- [Docs - Make a Page Public](https://docs.servicenow.com/csh?version=latest&topicname=t_MakeAPagePublic)
- [Access Controls](/access/access-controls/) — How ACLs control data access

## Historical use

This was the original way to expose a UI Page on ServiceNow.  This was useful with the older, now unavailable, Content Management System (CMS).  These are still used for some things around midservers and ServiceNow's own check-ins with instances.

## Further Reading
- [Docs](https://docs.servicenow.com/csh?version=latest&topicname=t_MakeAPagePublic)
