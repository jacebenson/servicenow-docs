---
title: "Engines"
layout: libdoc_page.liquid
eleventyNavigation:
    key: Engines
    parent: Automations
    order: 2600
date: git Last Modified
---
> Where can I find the meaning (and definition) of the function "setRunEngines(xxx)" (see screenshot below)?
>
> It seems to be a function on a GlideRecord object, but I cannot find any documentation on that, nor can I find the function definition in Service Now. Also, I did not find a matching article in Docs or the Community here..
>
> I guess, that sets the "Approval Engine" for the given table/record - or something like that.
> 
> Any concrete advice on this topic?
> - Dirk [Community Question](https://www.servicenow.com/community/developer-forum/what-does-quot-setrunengine-quot-do-and-where-do-i-find-this/td-p/1420546)

I commented years ago on this and I still think it's useful even though there isn't a lot of documentation around this.

Engines are, I'm guessing here, like lower level business rules.  Probably running on the Java layer.

Below I've listed and linked to anything I could find that may be relevant to each Engine.



Before write (these do not happen in any specific order)
- [Approval Engines](https://www.servicenow.com/docs/csh?topicname=c_ApprovalEngines.html&version=latest)
- [Assignment rules engine](https://www.servicenow.com/docs/csh?topicname=c_DefineAssignmentRules.html&version=latest)
- Escalation engine - [Old SLA Engine](https://www.servicenow.com/docs/csh?topicname=t_ReactivateAnOldSLAEngine.html&version=latest) - [2011 SLA Engine](https://www.servicenow.com/docs/csh?topicname=t_RunSLABusinessRule.html&version=latest)
- [Data policy engine](https://www.servicenow.com/docs/csh?topicname=c_DataPolicy.html&version=latest)
- [Field normalization engine](https://www.servicenow.com/docs/csh?topicname=c_FieldNormalization.html&version=latest)
- Role engine - keeps role changes in sync with sys_user_has_role table (for sys_user, sys_user_group, sys_user_grmember, and sys_user_role tables)
- [Execution plan engine](https://www.servicenow.com/docs/csh?topicname=c_ExecutionPlans.html&version=latest) (for task tables)
- Update version engine - creates version entry when sys_update_xml entry is written (for sys_update_xml table)
- [Data lookup engine](https://www.servicenow.com/docs/csh?topicname=c_DataLookupRules.html&version=latest) inserts or updates
- [Workflow engine](https://www.servicenow.com/docs/csh?topicname=c_WorkflowOverview.html&version=latest) (for default workflows)

After write

[Label engine](https://www.servicenow.com/docs/csh?topicname=c_Tags.html&version=latest) (this is oddly labeled, originally Tags were called Labels, and there is a Label Table to automatically create Labels [Now tags])
Listener engine
Table notifications engine
Role engine - keeps role changes in sync with sys_user_has_role table (for sys_user, sys_user_group, sys_user_grmember and sys_user_role tables)
[Text indexing engine](https://www.servicenow.com/docs/csh?topicname=r_ViewTextIndexingStatsAndStatus.html&version=latest)
Update sync engine
[Workflow engine](https://www.servicenow.com/docs/csh?topicname=c_WorkflowOverview.html&version=latest) (for deferred workflows)
[Trigger engine](https://www.servicenow.com/docs/csh?topicname=flow-designer.html&version=latest) (for all Workflow Studio flows)


Engines are not refered to often in the Docs and officially they are listed here on the [Execution Order of Scripts and Engines](https://www.servicenow.com/docs/csh?topicname=r_ExecutionOrderScriptsAndEngines.html&version=latest)