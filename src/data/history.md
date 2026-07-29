---
title: History
layout: libdoc_page.liquid
eleventyNavigation:
    parent: Data
    key: History
    order: 2800
date: git Last Modified
---
History in ServiceNow are weird.

History, meaning the audited, trackable data when you change values and is sometimes presented in activity streams.

This uses three tables, this is detailed on [KB0744473](https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0744473).  
<details>
<summary>Because I don't trust anyone to keep anyone here's the contents cached</summary>
As of 2025-07-01

> # Issue
> The purpose of this article is to explain how the platform creates a History sets. 
>
> If someone dives into the `sys_history_line` and `sys_history_set` tables without knowing the details, what they see can be confusing.
>
> For a detailed explanation of the difference between Audit and History sets be sure to check the official documentation: Differences Between Audit and History Sets.
> ## History Sets
> Why are History Sets used? Isn't this the same data as `sys_audit`?
>
> To avoid generating a new history list from `sys_audit` data every time someone views a record's history --this would be time-consuming-- the platform uses a concept called 'History sets'.
> 
> These can be considered personalized historical views as they are generated based on user profile information.
> 
> The sets are then saved to the `sys_history_set` and `sys_history_line` tables.
>
> So these tables must be huge, what about performance/space concerns?
>
> As the end goal is to avoid querying the large `sys_audit` table the system limits History Set and History records by:
>
> Having the table cleaner delete History Set records that have not been updated in 30 days.
> Using table rotation to rotate between four History tables every seven days. This means the system drops History records that are older than 28 days.
> How does the System know when to create a new History Set?
> 
> A new history set is created for each possible combination of the following user profile factors:
> 
> - Language
> - Timezone
> - Domain
> - Date/Time Format
> 
> If the date of the last update on the record and the last entry on the sys_history_set table differ then that will also trigger the creation of a new history set.
>
> Example
> Let's take 3 users:
> 
> Mr. White:
> 
> English Language,
> IST Timezone,
> Global Domain,
> dd-MM-yyyy HH:mm:ss Date/Time Format
> Mr. Pink:
> 
> English Language, 
> GMT Timezone,
> Global Domain,
> dd/MM/yyyy HH:mm:ss Date/Time Format
> Mr. Brown:
> 
> English Language, 
> GMT Timezone,
> Global Domain,
> dd/MM/yyyy HH:mm:ss Date/Time Format
> When Mr. White tries to view the historical activity of a record a new history set will be generated according to their profile settings, the same will happen with Mr Pink.
> 
> When Mr. Brown tries to view the historical data, the platform recovers the history set created for Mr Pink instead of generating a new one thus avoiding an expensive query on the sys_audit table.
> 
> Why can this be confusing?
> 
> Let's take a look at the `sys_history_line` table:
> 
> `sys_history_line` list showing multiple identical records due to multiple history sets for the the same record
> 
> As you can see from above the same row is essentially repeated three times and each row is associated to the same History Set.
> The Update time and User name are identical
> So what's going on here?
> 
> Each row corresponds to a different history set permutation although all are grouped under the same history set ID.
> 
> The update time and user name correspond to the `sys_created_on` and the `sys_created_by` fields of the record itself:
> 
> XML for a record showing the `sys_created_on` and `sys_created_by` values are used for the 'update time' and 'user name' fields.
> 
> Related Links
> KB0547662 - Auditing and history sets | How they work together
> 
> KB0832516 - Audit - Frequently Asked Questions

</details>

1. `sys_audit`
2. `sys_history_set`
3. `sys_history_line`