---
title: User Criteria
layout: libdoc_page.liquid
eleventyNavigation:
    key: User Criteria
    parent: Access
    order: 900
date: git Last Modified
order: 100
tags: 
    - stub
---

User Criteria is one the "new" ways to control who has access to what.  It is more complicated and allows you to dicate folks in a group or based on location (or other attributes set on their user profile).

User Criteria does not cover all data in ServiceNow.

- Service Portal
    - [Service Portal][SP: Portal]
    - [Service Portal Pages][SP: Page]
    - [Service Portal Widgets][SP: Widget]
    - [Service Portal Widget Instances][SP: Widget Instance]
    - [Service Portal Search Sources][SP: Search Source]
- Knoweldge Management
    - [Knowledge Bases][KB: Knowledge Base]
    - [Knowledge Articles][KB: Knowledge Article]
    - [Knowledge Blocks][KB: Knowledge Block]
- Service Catalog
    - [Catalog Items][SC: Catalog Items]
    - [Catalog Categories][SC: Catalog Categories]
- Next Experience
    - [UI Builder][UIB: User Criteria Property]


## Further Reading

### A deep dive to User Criteria
 
This is a great article that goes into detail about [how to use User Criteria, how it works, and how to extend user criteria](https://www.servicenow.com/community/now-platform-blog/a-deep-dive-to-user-criteria/ba-p/2281285).  It also covers some of the performance implications of using User Criteria.

<details><summary>Cached version, just in case</summary>
  
  ## What is User Criteria?
    User Criteria is an ability to group users based on certain conditions.
    In Service Now, we have User Groups which groups sets of users. But not that might not always satisfy all the usecases.

    Lets say, we want to group all users working in Support organization from New York office.
    We dont have an ability to group these people in Service Now using User Group.
    Thats where User Criteria comes in. User Criteria allows to group user based on multiple conditions.


    **Is User Criteria an alternative to ACL?**
    Short answer, ***NO***.

    To secure anything we need 2 answers
    "What" needs to be secured?
    For "Whom" it needs to be secured?

    User Criteria only answers the "Whom". It has nothing to do with security on its own.
    It is used to group a set of users in the system based on some condition.
    Now, with this group, we can say they have access to a KB article, or a Catalog Item or any widget in Portal.
    All of these are security provided by the Applications using User Criteria as user grouping mechanism, and then securing the respective object. So, User Criteria doesnot provide security, the security is provided by the application which uses User Criteria to answer "Whom".
    We can use User Criteria in ACL script as well to secure say an Incident or Case record as well.


    ### User Criteria applies only on 6 fields. Can I extend to apply on any other field like VIP?

    Yes, User Criteria can be extended to apply on any field in User(`sys_user`) table. Lets say, we want to have a user criteria only for VIP users.
    To do this, add a new field in User Criteria(user_criteria) table with the same name as in `sys_user` table.

    ![/user-criteria-1.png](/assets/user-criteria-1.png)
    

    System takes care of handling "u_" prefix for field name. So, if a field with u_vip doesnot exist in `sys_user` table it will check for field with vip.

    Note: For reference fields, you can use List(glide_list) to refer to multiple records like Company.

    Add the newly added field to the User Criteria form.

    Create a new User Criteria selecting VIP checkbox.

    ![/user-criteria-2.png](/assets/user-criteria-2.png)

    Now this user criteria can be used to group any vip user and can be used in any Application.
    So, we can create a Catalog Item only for VIP users or a KB article only for VIP users.

    Note:
    For performance improvement, user to user criteria association is cached. This allows effective evaluation of user criteria. The caching is done in two level. For non-scripted(non-advanced) user criteria, the cache is in the application.
    This means the cache remains in the system till the node if restarted or the record is updated. If the user criteria is scripted, the caching is on the session. So, after the user logs out the cache is flushed out.
    Hence it is recommended not to use script because it will have performance implications as the cache is only in session.

    For extending the user criteria to a new field in User(`sys_user`), we need to let the system know whenever any user record is updated with VIP field, we need to clean the cache of these users.
    To do so, we need to create/update a property (`glide.cache.flush.user_criteria_cache.sys_user`), and put comma separated field names for whom we want the system to track changes and invalidate the User Criteria cache. The field names need to be from the user(`sys_user`) table and not from user criteria table.

    How to use User Criteria for custom application?

    There are scripts available in the platform which allows us to check if the user is part of a user criteria. Using these scripts one can configure their application to make use of User Criteria grouping.

    API: `sn_uc.UserCriteriaLoader.userMatches(userID, listOfUserCriteriaIDs);`
    Return: Boolean(true/false) Returns true if the user(userId) is part of any of the user criteria

    API: `sn_uc.UserCriteriaLoader.getMatchingCriteria(userID, listOfUserCriteriaIDs);`
    Return: List of user criteria IDs Returns list of criteria IDs what the user(userID) is part of

    With the above 2 APIs, any application can use user criteria in their flow.

    Note:
    Unlike User Group where user membership is stored in a table, user association to a User Criteria is not direct. It could be with multiple combinations like roles, company, location etc. It could also be scripted. Hence to get all users for a given user criteria is not easily available in any table. To evaluate it might be high on performance as one needs to iterate over all Users in the system and evaluate User Criteria usage. So, one should consider changing the ask and evaluate only those user criteria the application needs for the given user.

    Warning:

    ServiceNow community has a few APIs which are non-documented and should not be used as those APIs has the ability to bring down an instance. 
    APIs like `UserCriteriaLoader.getAllUserCriteria()` should never be used.
  </details>
  
  ### Apply effects of User Criteria without the need to log out and back in

  [Apply effects of User Criteria without the need to log out and back in – ServiceNow](https://servicenowthink.wordpress.com/2019/04/07/apply-effects-of-user-criteria-without-the-need-to-log-out-and-back-in-servicenow/)


[SP: Portal]:                   https://www.servicenow.com/docs/csh?topicname=create-user-criteria-record.html&version=latest
[SP: Page]:                     https://www.servicenow.com/docs/csh?topicname=widget-user-criteria.html&version=latest
[SP: Widget]:                   https://www.servicenow.com/docs/csh?topicname=widget-user-criteria.html&version=latest
[SP: Widget Instance]:          https://www.servicenow.com/docs/csh?topicname=widget-user-criteria.html&version=latest
[SP: Search Source]:            https://www.servicenow.com/docs/csh?topicname=user-crit-search-source.html&version=latest
[KB: Knowledge Block]:          https://www.servicenow.com/docs/csh?topicname=select-user-criteria-for-knowledge-block.html&version=latest
[KB: Knowledge Base]:           https://www.servicenow.com/docs/csh?topicname=t_SelectUserCriteria.html&version=latest
[KB: Knowledge Article]:        https://www.servicenow.com/docs/csh?topicname=t_SelectUCArticle.html&version=latest
[SC: Catalog Items]:            https://www.servicenow.com/docs/csh?topicname=t_CreateAUserCriteriaRecord.html&version=latest
[SC: Catalog Categories]:       https://www.servicenow.com/docs/csh?topicname=t_CreateAUserCriteriaRecord.html&version=latest
[UIB: User Criteria Property]:  https://www.servicenow.com/docs/csh?topicname=enable-user-criteria-property.html&version=latest