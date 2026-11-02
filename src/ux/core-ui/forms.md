---
title: Forms
description: TODO:FIXME
layout: libdoc_page.liquid
eleventyNavigation:
    key: Forms
    parent: Core UI
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/csh?topicname=platform-forms-fields-lists.html&version=latest)

Forms are how users interact with data in ServiceNow. Every record in every table has a form. The form lays out the fields in sections, handles mandatory fields, related lists, and the form footer (save, update, submit).

## Form Sections

Forms are organized into sections. Each section groups related fields together visually. You can have multiple sections on a form — for an incident, you might have an "Essentials" section, a "Notes" section, and an "Assignment" section.

Sections are defined on the `sys_ui_section` table. Each section belongs to a form layout (`sys_ui_form`). The order of sections and fields determines how they render.

## Related Lists

Below the form fields, related lists show records from other tables that reference the current record. An incident form shows related tasks, child incidents, and the CI referenced by the form.

You can configure which related lists show up on which form via the Related Lists configuration (right-click the form header → Configure → Related Lists).

## Form Layout

The form layout is controlled by the **Form Layout** configuration. Right-click the form header → **Configure → Form Layout**. This opens the form designer where you can:

- Add, remove, and reorder fields
- Move fields between sections
- Set field labels and visibility
- Configure field-level security

Forms also respect **UI Policies** (which can make fields mandatory, read-only, or visible based on conditions) and **UI Macros** (custom HTML rendering of individual fields).

## Personalization

Users can personalize their own forms without admin access. Right-click a field label → **Personalize → Form Layout**. This creates a personal override that only that user sees. Useful when you want to add a field to your own view but don't want to change it for everyone.

## Further Reading

- [Docs - Administer Forms](https://www.servicenow.com/docs/csh?topicname=administering-forms.html&version=latest)
- [Maik Skoddow - Forms, Fields, and Lists](https://www.servicenow.com/community/now-platform-articles/platform-forms-fields-and-lists-knowledge-amp-troubleshooting/ta-p/2318075)
