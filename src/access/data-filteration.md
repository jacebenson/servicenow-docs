---
title: Data Filteration
layout: libdoc_page.liquid
eleventyNavigation:
    key: Data Filtration
    parent: Access
    order: 500
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/csh?topicname=data-filtration.html&version=latest)

I was so very excited for Data Filtration when it was announced because I thought it was another way to do something like [Before Query Business Rules](/access/beforequerybusinessrules).  It however runs after the rows are returned like [Access Controls](/access/accesscontrols).  So it's not a great way to limit access to large tables.  It is however another tool in the security toolbox.  This may be changing but only with the "new" version of it.  I'd steer clear of it for a time until it works as intended.

This has changed some over time and I would call this a RISKY feature as they have remade this once already.

## What is Data Filtration?

Data fitlration is a DENY mechanism.  It allows you to deny access to records that a user should not see.  It is a way to limit access to records that are returned from a query.

Data Filtration adds the ability to restrict access by IP Address which before was complicated to do.  It also lets you restrict access by roles, and groups.

There is one additional feature , Subject Criteria conditions allow you deny access conditionally based on the record.  For example, you could deny access to incidents where the caller is the user's manager.

[Maik Skoddow - Data Filtration](https://www.servicenow.com/community/now-platform-articles/administration-security-amp-data-privacy-knowledge-amp/ta-p/2318032#data_filtration)