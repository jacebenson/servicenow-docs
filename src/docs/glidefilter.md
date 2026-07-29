---
title: GlideFilter
description: Using GlideFilter lets you check if a record meets a critera based on a query.
layout: libdoc_page.liquid
eleventyNavigation:
    key: GlideFilter
    parent: Docs
date: git Last Modified
---

GlideFilter is a neat Class. It lets you check if a record meets a
critera based on a query. Here's the

```javascript
(function executeRule(current, previous /*null when async*/){
    var act = new GlideRecord('table_name');
    act.AddActiveQuery();
    act.query();

    while (action.next()) {
        var match = GlideFilter.checkRecord(act.condition);

        if (match) {
            var rec = new GlideRecord('act.table');
            act.newRecord();
            act.applyEncodedQuery(act.field_values);
            act.insert();
        }
    }
})
```