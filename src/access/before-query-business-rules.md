---
title: Before Query Business Rules
layout: libdoc_page.liquid

eleventyNavigation:
    key: Before Query Business Rules
    parent: Access
    order: 200
date: git Last Modified
---

Before Query rules are the ONE way to restict access to things effeciently.  However, they are scripted and can be difficult to write.

Let's get into it.

## What is a Before Query BR?

A before query business rule applies a filter to a query before it is run.  It cannot be removed by the user and it cannot be bypassed by the user.  It is the most secure way to restrict access to records.

I consider it be akin to Row Level Security in other technologies.

## When to use a Before Query BR?

These are great for limiting large tables to only the records that a user should see.  For example, if you have a table of 1,000,000 records and you want to limit a user to only seeing 500 of them, you can do that with a before query BR.

You could do that with [Access Controls](/access/accesscontrols), but keep in mind, those run AFTER the rows are returned from the database.  So if you're asking for all the employees at ACME Corp (with 100,000,000) users, that query might take a very long time.  If you have a before query BR, you can limit the query to only the users the logged in user can see.

## Further Reading

- [Controlling record access 'before query' business rules by Mark Stanger](https://servicenowguru.com/scripting/business-rules-scripting/controlling-record-access-before-query-business-rules/)
- [Fixing the Fatal Flaw of Before Query Business Rules by Mark Stanger](https://servicenowguru.com/scripting/business-rules-scripting/fixing-before-query-business-rules-flaw/)
<!-- GONE- [Before Query BRs Do Not Run on Database Views by Nia McCash](https://womennow.sn/posts/before-br-dbview)-->
- [Performance Best Practice for Before Query Business Rules by GTSPerformance](https://www.servicenow.com/community/developer-articles/performance-best-practice-for-before-query-business-rules/ta-p/2303806) [cached](https://web.archive.org/save/https://www.servicenow.com/community/developer-articles/performance-best-practice-for-before-query-business-rules/ta-p/2303806)
- [Chuck Tomasi on Before Query Business Rules VIDEO](https://youtu.be/Xtj9nvnryr8?t=580)