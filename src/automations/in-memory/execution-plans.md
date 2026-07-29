---
title: "Execution Plans"
description: The first workflow engine
layout: libdoc_page.liquid
eleventyNavigation:
    parent: In Memory
    key: Execution Plans
    order: 2300
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/csh?topicname=c_ExecutionPlans.html&version=latest)

> 🧠 These operate in memory or syncrounously.  They are not asynchronous.  If you do something slow, it will slow down the user experience.

Execution plans were the first automation beyond business rules.  They deserve a special place in the documentation.

That being said, they are not used very often.  It's funny though the longer I work with SerivceNow the more we try to recreate these.  

## What are they?

Execution plans are a way to run a series of tasks and approvals in order.  They do not use a flow, or workflow.  

## Why do I care?

If you understand what theses are you can see new things that use ideas from it and you may find flaws in them.

## How do I use them?

You can create an execution plan by going looking for `Execution Plans` in the navigator.

Execution plans, (also known as Delievery plans) are only available for catalog items.  They are not available for any other table.

## How do they work?

Well, they are triggered by a business rule `Create Request Item Child Tasks`.  This rule says, run after insert, when the Delivery plan is not empty.

Then is executes this script:

```js
(function executeRule(current, previous /*null when async*/ ) {
    var plan = GlideappDeliveryPlan.get(current.delivery_plan);
    gs.include('CatalogTaskGenerator');
    var gr = new GlideRecord(current.getRecordClassName());
    gr.get(current.getUniqueValue());
    var gen = new CatalogTaskGenerator(plan, gr);
    gen.createTasks();
})(current, previous);
```

This generates all the tasks and approvals in the pending state and as the lowest ordered items get completed, the next highest ordered item is set from pending to their appropriate state.

## What are the pros and cons?

| Pros               | Cons                                             | Notes |
| ------------------ | ------------------------------------------------ | ----- |
| Easy to use        | Only available for catalog items                 |       |
| Easy to understand | Very old way of doing things                     |       |
|                    | Not very flexible                                |       |
|                    | Stages are orderd by `sys_id` when order is tied |
