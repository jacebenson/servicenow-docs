---
title: HR Criteria
layout: libdoc_page.liquid
eleventyNavigation:
    key: HR Criteria
    parent: Access
    order: 950
date: git Last Modified
tags: 
    - stub
---

[Docs](https://www.servicenow.com/docs/csh?topicname=hr-criteria.html&version=latest)

Similar to User Critera but based on the `sn_hr_core_profile`

> HR Criteria and User Criteria are used for securing access to things like Knowledge Bases and Articles, HR Services, Catalog Items/Record Producers.  You can create a User Criteria from HR Criteria, if you need the same conditions in places that use User Criteria only (i.e. "Can Read" on an article).  As far as synchronizing between the two, if you change the associated conditions/criteria, the changes are automatic to associate the correct users that fit the HR and/or User Criteria.  - [Susan Britt](https://www.servicenow.com/community/hrsd-forum/hr-criteria-and-user-criteria-in-servicenow/m-p/1295293/highlight/true#M5671)

> HR criteria defines the audience for HR content, services, or cases. You can make information available to or create an HR case for specific groups, individuals, or to all employees using HR criteria.
>
> HR criteria uses the standard platform condition builder to support complex conditions for controlling the Employee Service Center content that employees see when logged in.
>
> HR criteria contains a script include that can be called from an advanced User criteria.
>
> User criteria enables you to allow access to users based on role, department, group, location, or company. Administrators can control access to pages, widgets, widget instances, announcements, and search sources in a portal by creating and applying user criteria.
>
> User criteria records define conditions that are evaluated against user records. When user criteria is defined, portal records are only visible to users who pass the defined conditions. - [Megha Padale](https://www.servicenow.com/community/hrsd-forum/hr-criteria-and-user-criteria-in-servicenow/m-p/1295295/highlight/true#M5673)

## Further Reading

- [HR Service Delivery Basics Overview by Harneet Sital](https://www.servicenow.com/community/hrsd-articles/hr-service-delivery-basics-overview/ta-p/2311268)
- [What is the best way of using HR Criteria without impacting application performance by Rishi Raj](https://www.servicenow.com/community/hrsd-blog/what-is-the-best-way-of-using-hr-criteria-without-impacting/ba-p/2280409)