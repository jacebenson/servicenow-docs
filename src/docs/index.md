---
title: Docs
description: TODO:FIXME
layout: libdoc_page.liquid
permalink: docs/index.html
eleventyNavigation:
    key: Docs
    order: 10000
date: git Last Modified
---

This section collects the API reference pages for ServiceNow's server-side and client-side APIs. These aren't the official docs — they're the cheatsheet version. What each class does, what methods matter, and a code snippet so you don't have to dig through the ServiceNow docs site every time.

## Record Operations

| Page | What it covers |
| ---- | -------------- |
| [GlideRecord](/docs/gliderecord/) | The workhorse. Query, read, write, update, delete tables. |
| [GlideRecordSecure](/docs/gliderecordsecure/) | GlideRecord with ACL enforcement baked in. |
| [GlideAggregate](/docs/glideaggregate/) | Aggregation queries — COUNT, SUM, AVG, MIN, MAX. |
| [GlideQuery](/docs/glidequery/) | Modern fluent query builder (San Diego+). |
| [GlideFilter](/docs/glidefilter/) | Filter record data without querying the database. |

## Dates & Time

| Page | What it covers |
| ---- | -------------- |
| [GlideDateTime](/docs/glidedatetime/) | Date-time objects — the one you'll actually use. |
| [GlideDate](/docs/glidedate/) | Date-only objects. Less common, but sometimes that's all you need. |
| [GlideTime](/docs/glidetime/) | Time-only objects (no date). |
| [GlideDuration](/docs/glideduration/) | Time spans — differences between dates, durations. |

## Data Types & Fields

| Page | What it covers |
| ---- | -------------- |
| [GlideElement](/docs/glideelement/) | A single field on a record. |
| [GlideEncrypter](/docs/glideencrypter/) | Encryption/decryption of field values. |
| [Field Attributes](/docs/fieldattributes/) | The attributes you can set on dictionary fields. |
| [Variable Attributes](/docs/variableattributes/) | Attributes for catalog variables. |

## XML & Document Processing

| Page | What it covers |
| ---- | -------------- |
| [XMLDocument2](/docs/xmldocument2/) | Parse and build XML documents. |
| [XMLNodeIterator](/docs/xmlnodeiterator/) | Iterate through XML node lists. |
| [GlideSystem](/docs/glidesystem/) | System-level methods — `gs.*` utilities. |
| [GlideServlet](/docs/glideservlet/) | Working with the servlet request/response. |

## REST & Integration

| Page | What it covers |
| ---- | -------------- |
| [RESTRequest](/docs/restapirequest/) | Inbound REST requests — reading request data. |
| [RESTRequestBody](/docs/restapirequestbody/) | Reading the body of an inbound REST request. |
| [RESTResponse](/docs/restapiresonse/) | Building and sending REST responses. |
| [RESTResponseV2](/docs/restresponsev2/) | Enhanced REST response handling. |
| [RESTMessageV2](/docs/restmessagev2/) | Outbound REST calls — send requests to external systems. |
| [GlideOAuth](/docs/glideoauth/) | OAuth token handling. |
| [ScriptLoader](/docs/scriptloader/) | Load and execute scripts from the database. |

## UI & Portal

| Page | What it covers |
| ---- | -------------- |
| [current](/docs/current/) | The `current` GlideRecord in business rules. |
| [g_user](/docs/g_user/) | The `g_user` object — current user info on the client. |
| [GlideUser](/docs/glideuser/) | Server-side user info. |
| [GlideSession](/docs/glidesession/) | Session data management. |
| [GlideForm](/docs/glideform/) | Client-side form control (`g_form`). |
| [GlideList](/docs/glidelist/) | Client-side list control (`g_list`). |
| [GlideNavigation](/docs/glidenavigation/) | Navigate users to URLs, records, or popups. |
| [GlideOverlay](/docs/glideoverlay/) | Overlay dialogs and popups on the UI. |
| [GlideAjax](/docs/glideajax/) | Client-to-server AJAX calls (`GlideAjax`). |
| [GlideScopedEvaluator](/docs/glidescopedevaluator/) | Execute scripts from strings in a scoped context. |
| [GlideTableHierarchy](/docs/glidetablehierarchy/) | Navigate the table inheritance tree. |
| [GlideSchedule](/docs/glideschedule/) | Work with schedules, holidays, and calendar duration. |
| [CartJS](/docs/cartjs/) | Client-side shopping cart API. |
| [Jelly](/docs/jelly/) | Jelly templating in ServiceNow. |
| [SPModal](/docs/spmodal/) | Service Portal modal dialogs. |
| [SPUtil](/docs/sputil/) | Service Portal utility methods. |
| [GlideSPScriptable](/docs/glidespscriptable/) | Server-side Service Portal scriptable. |
| [GlideSPUserCriteria](/docs/glidespusercriteria/) | User criteria for Service Portal content. |

## Platform & Plugins

| Page | What it covers |
| ---- | -------------- |
| [GlidePluginManager](/docs/glidepluginmanager/) | Check if plugins are activated. |
| [GlideDBFunctionBuilder](/docs/glidedbfunctionbuilder/) | Build database-specific SQL functions. |
| [GlideLocale](/docs/glidelocale/) | Locale-aware formatting for numbers and dates. |
| [Operators](/docs/operators/) | Query operators for filter conditions. |
