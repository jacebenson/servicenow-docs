---
title: Async
layout: libdoc_page.liquid
eleventyNavigation:
    key: Async
    parent: Automations
    order: 3100
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/csh?topicname=c_SchedulingScripts.html&version=latest)

Async processing is work that runs outside the current database transaction. The record saves, the response goes back to the user, and the async work runs when the system gets to it. It's the "do this later" mechanism of ServiceNow.

## When to Use Async

- **Slow operations** — sending emails, making outbound REST calls, generating reports
- **Fire-and-forget** — you don't need the result before the user gets their response
- **Heavy processing** — PA collections, data imports, bulk record operations
- **Decoupling** — you want the main transaction to be fast and reliable, and defer expensive work

Don't use async when you need the result immediately — use [in-memory](/automations/in-memory/) for that. Don't use async for simple operations that run in a few milliseconds — you're just adding queue overhead for no benefit.

## How Async Works

Async work is queued on the `sys_trigger` table (scheduled jobs, events) or the `sys_execution_queue` table (flows, script actions). The system processes these queues based on:

- **Scheduled time** — run at a specific time or interval
- **Event queue** — fire when a GlideEvent is triggered
- **Flow queue** — process Flow Designer executions asynchronously
- **Script queue** — script actions from the `sys_script_queue` table

## Async Types

- [Async Business Rules](/automations/async/async-business-rules/) — business rules that run after the transaction commits
- [Scheduled Jobs](/automations/async/scheduled-jobs/) — run at specified intervals (daily, hourly, custom)
- [Scheduled Scripts](/automations/async/scheduled-scripts/) — one-off or recurring script execution
- [Events](/automations/async/event/) — GlideEvent-based triggers and listeners
- [Flow Designer](/automations/async/flow-designer/) — flows that run async
- [Data Imports](/automations/async/data-imports/) — loading data asynchronously
- [PA Collections](/automations/async/performance-analytics-collections/) — Performance Analytics data collection
- [Script Actions](/automations/async/script-actions/) — reusable async scripts triggered by conditions

## Additional Resources

- [Docs - Script Scheduling](https://www.servicenow.com/docs/csh?topicname=c_SchedulingScripts.html&version=latest)
- [Docs - Async Processing](https://www.servicenow.com/docs/csh?topicname=c_AsyncProcessing.html&version=latest)
