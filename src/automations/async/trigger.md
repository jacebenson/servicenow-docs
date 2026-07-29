---
title: Trigger
layout: libdoc_page.liquid
eleventyNavigation:
    parent: Async
    key: Trigger
    order: 200
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/csh?topicname=c_SystemScheduler.html&version=latest)

Triggers control **how often** a queue is run.  You can [make dedicate queues(video)](https://www.youtube.com/watch?v=Z-zcAdMKRyA) [(blog)](https://www.servicenow.com/community/developer-forum/how-to-create-additional-event-processors/m-p/2077955#874843).  Ultimately this just requires the script; fsScriptName=javascript\\:GlideEventManager('queue_name_goes_here').process();

These GlideEventManager's handle or process events using some Java process.  This trigger wakes it up.  The Java process then looks at the queue where the process date is in the past and has no claimed by and are in a state of ready, ordered by process on grabbing 100 at a time.  [Source]((https://jace.pro/p/2017-11-29-how-event-processors-work))