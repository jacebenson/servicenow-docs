---
title: UI Policies
description: TODO:FIXME
layout: libdoc_page.liquid
eleventyNavigation:
    key: UI Policies
    parent: Core UI
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/csh?topicname=using-ui-policies.html&version=latest)

UI Policies let you control form fields — make them mandatory, read-only, visible, or hidden — based on conditions evaluated on the client side. They run in the browser, not on the server, which means they can respond instantly when a user changes a field value.

Unlike client scripts, UI Policies don't require JavaScript to set field states. You configure them declaratively: "When field X equals Y, make field Z mandatory and read-only." The platform handles the rest.

## How They Work

A UI Policy record has:

- **Conditions** — When does this policy apply? These evaluate client-side (GlideForm conditions).
- **Actions** — What happens when it applies? Each action targets a field and sets mandatory, visible, or read-only.
- **Order** — When multiple policies apply, the order determines which wins for conflicting actions.
- **Reverse** — When the condition becomes false, the policy reverses (fields go back to their previous state).

You can also write a **UI Policy Script** for complex conditions that the condition builder can't express.

## UI Policies vs. Client Scripts

| Aspect | UI Policy | Client Script |
|---|---|---|
| What it does | Set field states | Run arbitrary JavaScript |
| Complexity | Declarative — no code needed | Full scripting |
| Performance | Lighter — built-in form behavior | Heavier — runs custom code |
| Best for | Show/hide, mandatory, read-only | Calculations, Ajax calls, complex validation |

In general: if you can do it with a UI Policy, do it with a UI Policy. Client scripts are for when UI Policies won't cut it.

## Data Policies (Server Side)

Don't confuse UI Policies with Data Policies. UI Policies are client-side — they only affect the browser. Data Policies are server-side — they enforce mandatory/read-only on the server, which means they apply even when data comes through web services or import sets.

If you need a field to be mandatory regardless of how data enters the system, use a Data Policy. If you only need it on the form, use a UI Policy.

## Further Reading

- [Maik Skoddow - UI Policies](https://www.servicenow.com/community/now-platform-articles/platform-ui-policies-knowledge-amp-troubleshooting/ta-p/2318092)
- [Docs - Create UI Policies](https://www.servicenow.com/docs/csh?topicname=create-ui-policies.html&version=latest)
