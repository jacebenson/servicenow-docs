---
title: "CRUD Business Rules"
description: Business Rules are amazing
layout: libdoc_page.liquid
eleventyNavigation:
    parent: In Memory
    key: CRUD Business Rules
    order: 2200
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/csh?topicname=c_BusinessRules.html&version=latest)

> 🧠 These operate in memory or syncrounously.  They are not asynchronous.  If you do something slow, it will slow down the user experience.

This is the Original Gangster of the automations in ServiceNow.  If you're coming from another tool you might know theses as Transformers(Retool/ToolJet), Automations(Honeycode/Airtable).  

## What are they?

These things, conditionally execute code to do things before, and after a create, read, update, and delete.

## Why do I care?

This is a fundamental building block of ServiceNow.  Many things you use in ServiceNow are built on top of these.  Flow Designer(for Catalog Items), Execution Plans, and Workflow, are all kicked off by a business rule.  

## How do I use them?

To use a business rule, you only have to create one that meets the conditons of the CRUD operation.

Let's pretend that anytime someone types in a the text "Password: P@$$w0rd" into a field, we want to change it to "Password: ******".  We can do that with a business rule.

Let's break down WHEN these these rules fire.

## Before Rules

So a before create/read/update/delete rule is going to run before the data is written to the database.  

### Create

Before Create rules are going to run before the record is created.  This is one way to set default values.  Perhaps you need the record has to calculate based on a number of other things, a Before Create rule is a great place to do that.  There are OTHER ways, but this is one of them.

### Read

Before Read rules are pretty useless.  One use case for this is if you want to do some sort of logging.  You could log the fact that someone read a record.  This is not a common use case.

### Update

Like Before Create, Before Update rules are a great place to ensure values are what you expect them to be.  Perhaps you want to ensure that a field is always in all caps.  You could do that in a Before Update rule.

### Delete

Before Delete rules give you an opportunity to stop the delete from happening.  Perhaps you want to ensure that a record can't be deleted if it's in a certain state.  You could do that in a Before Delete rule.

## After Rules

After Rules are going to run after the data is written to the database.

### Create

After Create rules are going to run after the record is created.  This is one way to create related records.  Perhaps you need the record has to calculate based on a number of other things, an After Create rule is a great place to do that.  There are OTHER ways, but this is one of them.

### Read

This is an odd one.  I've dug into this a bit and After Read Rules don't run when you read a record.  They do if you open a record in the Core UI or the Next Experience, but they do NOT run when you call a record from the API.  I'm not sure why this is, but it's a thing.

### Update

Like After Create, After Update rules are a great place to set related records.  Perhaps you want to ensure that a field is always in all caps.  You could do that in a After Update rule.

### Delete

After Delete is a great place to do cleanup.  Perhaps you want to delete related records.  You could do that in a After Delete rule.  You just don't have access to the record that was deleted.

## What are the pros and cons?

| Pros             | Cons           | Notes                                                                                                                       |
| ---------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Runs in memory   | Runs in memory | This is a pro because it's IMMEDIATE, it's a con because if you do a slow operation, it will slow down the user experience. |
| Can do anything  | Scripted       | Business Rules use scripts.  If you're not comfortable with scripting, you may struggle with these.                         |
| Straight forward |                | There isn't a lot of magic here.                                                                                            |

## Additional Resources

[Maik Skoddow - Useful Business Rules](https://www.servicenow.com/community/developer-articles/my-collected-list-of-useful-business-rules/ta-p/2467239)