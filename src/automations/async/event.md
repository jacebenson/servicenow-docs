---
title: "Events"
layout: libdoc_page.liquid
eleventyNavigation:
    parent: Async
    key: Events
    order: 100
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/csh?topicname=c_ScheduleEvents.html&version=latest)

Events are a crucial piece of how ServiceNow works.  Any new development ServiceNow has seems to be driven on events.  What do I mean by that?

ServiceNow needs to keep things snappy. To do that if everything ran in current memory of the session your user is on it can seem sluggish.  

On this page I want to cover a few things.

1. Concepts of events in ServiceNow
2. Triggers
3. EventQueues
4. ScriptActions

## Concepts of Events in ServiceNow.

There's a number of other posts about this like [BillMartin's Mastering Queueing Techniques](https://www.servicenow.com/community/developer-forum/mastering-queueing-techniques-for-architects-that-support/td-p/3185898) and [Chris Pearson's Event Based Processing Design Pattern](https://www.servicenow.com/community/developer-blog/event-based-processing-design-pattern/ba-p/3178331).

However, here I'm going to cover this as well.

Events, or the records on `sysevent`, are used by a number of systems in ServiceNow and act as a fundamental building block for other things.  First, lets lay down what they are.  Events are records of something happening.  The record has a name, GlideRecord reference, param1, param2, queue, and when.  

A event by itself doesn't do anything.  Well, that's not exactly true.  An event is processed by the event queues.  How the event queues handle the event are with Script Actions.  When an event gets processed you can have the Script Action send a email, generate a report, run a job, update a record, and so on.

Some systems in ServiceNow have their own handlers.  For instnace, notifications on ServiceNow were originally only based on the events.  Now they use a "condition" field that is actually handled by a generic event.  So they are still event driven, just abstracted a bit.

## Triggers

Triggers control **how often** a queue is run.  You can [make dedicate queues(video)](https://www.youtube.com/watch?v=Z-zcAdMKRyA) [(blog)](https://www.servicenow.com/community/developer-forum/how-to-create-additional-event-processors/m-p/2077955#874843).  Ultimately this just requires the script; 

```javascript
fsScriptName=javascript\:GlideEventManager('queue_name_goes_here').process();
```

These GlideEventManager's handle or process events using some Java process.  This trigger wakes it up.  The Java process then looks at the queue where the process date is in the past and has no claimed by and are in a state of ready, ordered by process on grabbing 100 at a time.  [Source]((https://jace.pro/p/2017-11-29-how-event-processors-work))

## Event Queues

Event queues are just anothe way to talk about the named queue.  These are things talked about above.

## Script Actions

Script actions are one way you can have handle an event and have it do other things like, update a record.