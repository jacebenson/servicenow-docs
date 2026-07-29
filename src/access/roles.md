---
title: "Roles"
layout: libdoc_page.liquid
eleventyNavigation:
    key: Roles
    parent: Access
    order: 150
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/csh?topicname=ua-creating-roles.html&version=latest)

Roles are assigned to Access Controls, and also to groups.  Users are added to groups and then the roles are inherited by the user.  This is the recommended way to assign roles to users.

That being said contracts vary from customer to customer and often a user with any role has a cost associated with it.  So it is important to understand how roles are assigned to users.

Back in the say ServiceNow only charged for `itil` roled users.  Now they charge for `fulfillers` and `business stakeholders` and `end users` depending on the shopkeepers unit (SKU) you've been entitled.  If you want to group up users, assigning them roles may be the easiest way to do it, it also can be the most expensive.

## Further Reading
- [Prevent direct assignment of licensable roles to user by Maik Skoddow](https://www.servicenow.com/community/now-platform-articles/prevent-direct-assignment-of-licensable-roles-to-users/ta-p/2307963)