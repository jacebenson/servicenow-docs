---
title: "Flow Designer"
layout: libdoc_page.liquid
eleventyNavigation:
    parent: Async
    key: Flow Designer (Event Driven)
    order: 3300
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/csh?topicname=flow-designer.html&version=latest)

Flows are the new most popular way to automate on a recurring basis or after most inserts and updates.

Flow Designer is a low-code way to trigger and handle some inbound things.

Flow's are run on top of the standard event queue. This means 

https://www.servicenow.com/community/servicenow-ai-platform-articles/platform-flow-designer-knowledge-amp-troubleshooting-resources/ta-p/2316818

What is Flow Designer?.  It is a low code tool to let folks create processes that would exist that are small and finite in scope

Flow designers are now used to replace a lot of preexistingsystems in ServiceNow or maybe replaces the wrong word as an alternative to a lot of pre existing systems and ServiceNowtheir triggers include so many things that they span the create business rules update business rules,scheduled jobs, inbound emails, inbound REST calls, I'm sure there are others that I have not listed.

Where flow designers get you in trouble though is when you have problems with themwhere things like a business rule would never corruptflows canand if you need to debug and understand how they workyou will get lostif you write code in one of your stepsthat code is not stored in plain text in the system it's instead base64'd first, and then stored.  I'm sure there's lots of great reasons to do these shenanigans that have been done to make this workbut on top of all of thatflow designer runs on the event queuethe main event queuegranted you can give a flow a priority now so that some flows run ahead of othersbut if for whatever reason you've got I don't knowsome sort of loop happening with inbound emails your flows will also fail to execute.

In flow designer you have things called actionsthese can be ones you've created yourself or these can be out of box oneswhen you use an action you sometimes get a returned object or thing like a user recordto access the items or attributes of the user record those things are called pills and they're selectable on the right hand sideprobably because they look like pillspills can have functions applied to themthese functions you can apply to a pillare not obvious and they fail silently and they also don't tell you how they fail or what they failed.  Because of this I atomically avoid using pillsor the pill functions I should say instead i'll make another action and I'll pipe the value in to that action to handle it

A lot of the features of flow designerare behind paywall like integration hubor different levels of integration hub or now what they call workflow data fabric whatever that is.

## FAQ

### What is the difference between Flow Designer and Workflow?

Well, workflow is the older way to do a set of steps in a process.  Workflow is more akin to playbooks today.  As of Zurich, allegedly, legacy workflow will no longer be available on new instances.  

Workflows are more like Business Rules, and Playbooks are more like Legacy Workflow.

### How can I find what flows are using a specific refernce, or code snippet?

> Jace is on the right track for flows where related inputs and outputs are using v2 functionality: they leverage a JSON object that has been converted to a base64-encoded byte array. There are ways to decode it, but the APIs for that are not publicly documented.
> v1 functionality stored that information in sys_variable_value, related through to specific instances of actions and so on
> You can review if your instance has v1 or v2 more prevalent by reviewing the associated tables for your flow and its actions
>

APIs to decode the base64-encoded byte array are not publicly documented, but you can use the following code to decode it:


[Maik Skoddow - Flow Designer](https://www.servicenow.com/community/now-platform-articles/platform-flow-designer-knowledge-troubleshooting-resources/ta-p/2316818)