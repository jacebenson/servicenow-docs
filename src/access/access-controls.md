---
title: Access Controls
layout: libdoc_page.liquid
eleventyNavigation:
    key: Access Controls
    parent: Access
    order: 100
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/csh?topicname=access-control-rules.html&version=latest)

Access Controls(ACLs) are the most common way to restrict access to data in Servicenow.  However do not misunderstand.  Access controls do A LOT.

## Access Control Lists

Until recently ACLs only allowed to "grant" or give permission.  however in the last few releases a big change occured to ACLs.  Now there are two types of ACLs.
- Deny-Unless (the default and what has existed since ServiceNow was created)
- Allow-If (Allow access regardless of other ACLs)

I'm going to talk about each of these types and then what I have seen in the field.  First I'll explain How ACLs are evaluated.

### How ACLs are evaluated

Access Controls are expensive.  I mean, they can take a long time to run and that is complicated.

Access controls run from the most broad rules to the most specific.  Let me give an example.

Let's say we looked at the User table and added a custom field called, "Do not rehire".  Now consider the user can generally see his own record.  Let's breakdown the ACLs that would be checked.
- `*` - This is the most broad rule.  It checks if the user can access any table.
- `*.*` - This is the most broad rule for a fields.  It checks if the user can access any field on any table.
- `user` - This checks if the user can access the user table.
- `user.*` - This checks if the user can access any field on the user table.
- `user.do_not_rehire` - This checks if the user can access the do_not_rehire field on the user table.

Now say you loaded a list of 100 users, the ACLs are checked on each row, and each field. So if you're displaying Name, Department, and Do Not Rehire, that's
100 rows * 3 fields * 5 ACLs = 1500 ACL checks.

That being said, ACLs are the most common way to restrict access to data in Servicenow.

### Deny-Unless ACLs

This is the original of what has existed since 2004.  You can and folks have worked with just this kind of ACLs.

There's generally two approaches to restrict access on a table.
1. Use `table.*` to not restrict access and then use `table.field` to lock those fields down.
2. Use `table.*` to restrict access, and then use `table.field` to enable access.

There's ACLs for lots of things now like reports, processors, ui pages, and GlideAjax calls.

That being said, ACLs are not a "deny" mechanism.  You can have multiple ACLs on the same table, and they are all checked.  If any passes, the user is allowed to do take the action.  If none pass, the user is denied.

### Allow-If ACLs

I haven't encountered many of these yet even though they are new.  They will bypass the **Deny-Unless ACLs** so I'd use them with care as they add a new way access can be given.  This will simplify some ACLs that needed a much more complicated way in the past.


## Further Reading

- [Access Controls by Mike Kaufman](https://www.servicenowelite.com/blog/2019/10/2/access-controls)
- [Getting the most out of access controls by Ashok](https://www.servicenow.com/community/in-other-news/security-top-tips-part-4-keeping-to-your-lanes-getting-the-most/ba-p/2268033) [cached](https://web.archive.org/web/20230920050857/https://www.servicenow.com/community/in-other-news/security-top-tips-part-4-keeping-to-your-lanes-getting-the-most/ba-p/2268033)
- [Your ACLs and Business Rules are Broken by Tim Woodruff](https://snprotips.com/blog/2023/4/28/your-servicenow-acls-are-broken)
- [ACLs are like a lock and key](https://blog.wiz0floyd.do/2022/07/acls-are-like-lock-and-key.html)
- [Access Control Lists vs Before Query Business Rules by Jace Benson](https://jace.pro/p/2019-11-30-qbr-vs-acl)
- [Maik Skoddow - Access Controls](https://www.servicenow.com/community/now-platform-articles/administration-security-amp-data-privacy-knowledge-amp/ta-p/2318032#acl)