---
title: Worfklow
description: TODO:FIXME
layout: libdoc_page.liquid
eleventyNavigation:
    parent: In Memory
    key: Legacy Workflow
    order: 2400
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/csh?topicname=c_WorkflowOverview.html&version=latest)

Workflow, or now called, "Legacy Workflow" worked for a very long time in ServiceNow and ran in memory.  This running in memory is why many workflows would have a "Timer" activity as the first activitity as that would force this to run on the event queue giving users back their session.

Many like to compare Workflow to Flow Designer but the comparison is not an apples to apples.  If you want a fair comparison, Workflow vs Playbooks would be more apt and heres why.

1. Workflows would hold entire processes, not just a simple trigger action for it.
2. Flows are more akin to CRUD Business Rules as their supposed to be that level of modularity.

Because ServiceNow presented Flows as a alternative to Workflow, of course there were gaps since they weren't technically the right comparison.


- [Reddit Flow Designer vs Workflow](https://www.reddit.com/r/servicenow/comments/i816rc/flow_designer_vs_workflow/)
- [Servicenow's "Flow Designer vs Workflow"](https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0789014)