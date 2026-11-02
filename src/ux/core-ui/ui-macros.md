---
title: UI Macros
description: TODO:FIXME
layout: libdoc_page.liquid
eleventyNavigation:
    key: UI Macros
    parent: Core UI
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/csh?topicname=c_UIMacros.html&version=latest)

UI Macros are ServiceNow's original templating system. They're XML/HTML files that use Jelly-like syntax (`<g2:evaluate>`, `<g2:while>`) to render dynamic UI components on forms, lists, and UI pages.

They've been largely replaced by AngularJS templates and web components, but UI Macros still exist in the platform and you'll encounter them in older instances or custom implementations.

## How They Work

A UI Macro is a record on the `sys_ui_macro` table. The macro's body is an XML template with embedded server-side JavaScript:

```xml
<?xml version="1.0" encoding="utf-8"?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:g2="g2">
  <g2:evaluate var="jvar_help_text">
    var gr = new GlideRecord('sys_ui_help');
    gr.addQuery('table', current.getTableName());
    gr.query();
    gr.next() ? gr.getValue('text') : '';
  </g2:evaluate>
  <div class="help-banner">${jvar_help_text}</div>
</j:jelly>
```

The Jelly tags control flow (`<g2:if>`, `<g2:loop>`), evaluate expressions (`<g2:evaluate>`), and render HTML. Server-side code executes during page render, not on the client.

## When You See UI Macros

- **Form field renderers** — Custom field types that need specialized display logic
- **Custom UI Pages** — Embedded as components on `sys_ui_page` records
- **Service Portal widgets** — The widget body can reference a UI Macro
- **List cell renderers** — Custom HTML for a specific column

## The Gotcha

UI Macros render on the server and send HTML to the browser. This means they're **not dynamic** — any interaction requires a full page load or a client script that makes an Ajax call. If you need interactive behavior, you're better off with Service Portal widgets (AngularJS) or UI Builder components (web components).

## Further Reading

- [Docs - Create Custom UI Pages](https://www.servicenow.com/docs/csh?topicname=create-custom-ui-pages.html&version=latest)
- [Docs - UI Macros API](https://www.servicenow.com/docs/csh?topicname=c_UIMacros.html&version=latest)
