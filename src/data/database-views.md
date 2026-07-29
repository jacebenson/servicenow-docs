---
title: Database Views
description: TODO:FIXME
layout: libdoc_page.liquid
eleventyNavigation:
    parent: Data
    key: Database Views
    order: 2800
date: git Last Modified
tags: 
    - stub
---
Database views are amazing a very old feature of ServiceNow you can connect one table to another table with a simple script sayingwhere table A is number field matches table B's number field join them together or left join them or right join them so you can get that data how you need it to.

Something not really considered with database views is that you need to set up access controls to them separately from the source table records which gets confusing because it's like an onion and you layer that with scopingor if you're unlucky withdomain separationit becomes really an narly.