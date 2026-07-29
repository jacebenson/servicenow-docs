---
title: Script Actions
description: Scripts to run on Events
layout: libdoc_page.liquid
eleventyNavigation:
    parent: Async
    key: Script Actions
    order: 300
date: git Last Modified
tags: 
    - stub
---

[Docs](https://www.servicenow.com/docs/csh?topicname=r_ScriptActions.html&version=latest)

Script actions are so powerfulbecause Servicenow has a very robust event driven design.  And the script actions they execute code for any given event.  Script actions run based on those events in those events are the results of triggers.  When I say triggers I mean the cyst trigger table which powers all of the events in service now and all of the scheduled stuff that happens in a queue and ServiceNow.




https://www.servicenow.com/community/developer-articles/script-action-a-practical-example/ta-p/3136671


https://www.linkedin.com/posts/michaelbahr_servicenow-servicenowdev-activity-7010050167122923520-Zjz5/?utm_source=share&utm_medium=member_desktop

> Have you ever had a runaway ASYNC business rule? Me too! Here’s how to stop it dead in its tracks.
> 
> 1. Deactivate the business rule and save it
> 2. Export the business rule to XML
> 3. Delete the business rule
> 4. Go to the sys_trigger table and look for ASYNC: <BR>
> 5. The number of jobs should be decreasing, once they are gone re-import the BR XML
> 
> Questions:
> 
> Why can’t I just deactivate it?
>  A: The train has left the station. At the level the system is performing the operation(s) it doesn’t care. It's pointed to a record and it will try to run whatever it's told to run.
> 
> What if I comment out my code temporarily?
>  A: That ship has set sailed. As long as the sys_trigger is calling a valid sys_id it will keep running. When you temporarily delete the BR in question you break that reference which breaks that infinite loop.

https://www.servicenow.com/community/in-other-news/performance-considerations-when-using-async-business-rules/ba-p/2274036