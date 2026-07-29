---
title: "Flow Designer (Catalog)"
description: TODO:FIXME
layout: libdoc_page.liquid
eleventyNavigation:
    parent: In Memory
    key: Flow Designer (Catalog)
    order: 2210
date: git Last Modified
---

> 🧠 This operates in memory or syncrounously.  They are not asynchronous.  If you do something slow, it will slow down the user experience.

Flow Designer is a weird piece of technology.  This however may come to you as a suprise.  Flow's don't have to run asyncronously.  They can run syncronously.  This is a huge deal.

I thought this was available in the UI for Flow but alas I don't see that option.  

You can make them run IN MEMORY (syncronously).  

This was meant to be a short item about the business rule `Start FlowDesigner Flow` calling `sn_flow_trigger.FlowTriggerAPI.fireCatalogTrigger(flowName, current)`.  It seems that this likely runs IN MEMORY based on [KB0959777](https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0959777)

> KB0959777: Service Catalog flow with: Invalid target record for notification
>
> ## Description
> Service catalog flow with send notification errors out unexpectedly
>
> ## Steps to Reproduce
> 
> Create a new service catalog flow (Make sure the flow runs in the background)
> Add a Send Notification action
> - Record: Trigger > Requested Item Record
> - Table: sc_req_item
> - Notification: `<create a new notification to use here if one doesn't exist>`
> Trigger the flow from a catalog item
>
> Expected: Flow completes successfully
> Actual: Flow errors with: Invalid target record for notification
> 
> ## Workaround
> 
> 1. Update the Start FlowDesigner Flow Business rule to pass a new GlideRecord 
> ```js
> // Pass a new current record 
> var newCurrent = new GlideRecord("sc_req_item"); 
> newCurrent.get(current.getUniqueValue()); 
> sn_flow_trigger.FlowTriggerAPI.fireCatalogTrigger(flowName, newCurrent);
> ```
> 2. Run the flow in the foreground rather than in the background
> 3. Add a 1 second timer prior to the Send Notification 

Now you might be thinking, but, wait, that doesn't mean it runs in memory.  You know ServiceNow uses a thing called Workflow, and for a long time folks have complained they take a LONG time to run.  The work around for that was to start the workflow with a timer, just like this.  Adding a timer, effectively tells ServiceNow to use it's TRIGGER system to handle it later.