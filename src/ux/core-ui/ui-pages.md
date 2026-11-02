---
title: UI Pages
description: TODO:FIXME
layout: libdoc_page.liquid
eleventyNavigation:
    key: UI Pages
    parent: Core UI
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/csh?topicname=r_UIPages.html&version=latest)

UI Pages are custom HTML pages that ServiceNow renders on the server using Jelly templating. Before Service Portal existed, UI Pages were the primary way to build custom interfaces beyond the standard form/list layout.

A UI Page is a record on the `sys_ui_page` table. It has a **body** (Jelly/HTML template), optional **client script** (JavaScript that runs in the browser), and optional **processing script** (server-side code that runs when the page is accessed).

## How They Work

When a user accesses a UI Page, ServiceNow executes the processing script first (on the server), then evaluates the Jelly template with any data from the processing script, and sends the resulting HTML to the browser:

```xml
<?xml version="1.0" encoding="utf-8"?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide">
  <g:evaluate var="jvar_data">
    var gr = new GlideRecord('incident');
    gr.get(request.getParameter('sys_id'));
    gr.getDisplayValue('number');
  </g:evaluate>
  <h1>Incident: ${jvar_data}</h1>
</j:jelly>
```

The client script runs in the user's browser and can use GlideAjax to call server-side Scripted REST APIs or Script Includes.

## When to Use UI Pages

There aren't many reasons to build new UI Pages anymore. Service Portal widgets and UI Builder components cover virtually every use case. But you'll still encounter UI Pages when:

- Working with **public pages** that need to be accessible without authentication
- Maintaining legacy custom interfaces that predate Service Portal
- Building simple admin tools where Service Portal would be overkill
- Integrating with things that expect a URL endpoint that returns HTML (like mid server callbacks)

## Security

UI Pages require explicit access control. By default, they're restricted to users with the `ui_page_admin` role or an ACL on the page. Public pages (accessible without login) are a separate configuration — see [Public Pages](/access/publicpages/).

## Further Reading

- [Docs - Create Custom UI Pages](https://www.servicenow.com/docs/csh?topicname=create-custom-ui-pages.html&version=latest)
- [Docs - Using UI Pages](https://www.servicenow.com/docs/csh?topicname=using-ui-pages.html&version=latest)
