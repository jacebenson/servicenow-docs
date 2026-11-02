---
title: Automations
description: TODO:FIXME
layout: libdoc_page.liquid
permalink: automations/index.html
eleventyNavigation:
    key: Automations
date: git Last Modified
---

Automations is the bucket term for everything ServiceNow does automatically when data changes. It's the execution order — the sequence of things that fire when you insert, update, delete, or query a record.

Understanding execution order is the single most important thing you can learn about ServiceNow development. If you don't know what runs when, you'll write code that fights the platform instead of riding it.

## Execution Order

When a database transaction happens, ServiceNow runs things in this order:

1. **[Engines](/automations/engines/)** — The lowest-level Java-layer engines. Approval engines, assignment rules, escalation engines, data policies, workflow engines. These run before and after the database write. You rarely interact with them directly, but they're always there.

2. **[In-Memory](/automations/in-memory/)** — Business rules, UI actions, execution plans, workflows. Code that runs in the instance's memory right now, during the current transaction. This is where most of your custom business logic lives.

3. **[Async](/automations/async/)** — Work that gets queued for later. Async business rules, Flow Designer flows, data imports, scheduled jobs, PA collections, events, triggers. The record saves first, then the async work runs when the system gets to it.

4. **[Inbound](/automations/inbound/)** — Ways to get data *into* ServiceNow. REST APIs, SOAP web services, GraphQL, import sets, processors, email. This is where external systems talk to your instance.

5. **[Outbound](/automations/outbound/)** — Ways to send data *out of* ServiceNow. REST calls, SOAP calls, email. This is where your instance talks to external systems.

## How Things Relate

Execution order matters because each phase can trigger the next. An in-memory business rule can queue an async event. An inbound REST call fires business rules on the table it writes to. An outbound REST notification can kick off from an async flow.

The trick is knowing where your code runs in this stack. If you don't need the result immediately, use async. If you need to guarantee it runs before the response goes back, use in-memory. If you're doing integrations, you're working the inbound and outbound edges.

## Additional Resources

- [Docs - Execution Order of Scripts and Engines](https://www.servicenow.com/docs/csh?topicname=r_ExecutionOrderScriptsAndEngines.html&version=latest)
