---
title: GlideAggregate
description: All the GlideAggregate
layout: libdoc_page.liquid
eleventyNavigation:
    key: GlideAggregate
    parent: Docs
date: git Last Modified
---

The scoped [GlideAggregate](/docs/glideaggregate/) class is an extension of [GlideRecord](/docs/gliderecord/) and allows database aggregation (COUNT, SUM, MIN, MAX, AVG) queries to be done. This can be helpful in creating customized reports or in calculations for calculated fields. The [GlideAggregate](/docs/glideaggregate/) class works only on number fields. Since currency fields are strings, you can't use the [GlideAggregate](/docs/glideaggregate/) class on currency fields.

> **Query Operators:** GlideAggregate uses the same [Query Operators](/docs/operators/) as GlideRecord for filtering records before aggregation.

Official Docs: [GlideAggregate](https://docs.servicenow.com/search?q=GlideAggregate)

## addAggregate
Adds an aggregate
```js
var count = new GlideAggregate('io_set_item');
//parm1: COUNT, MIN, MAX, parm2: field
count.addAggregate('COUNT', 'variable_set');
count.query();
while (count.next()) {
   var set = count.variable_set.getDisplayValue();
   var setCount = count.getAggregate('COUNT', 'variable_set');
   var message = "The are currently " + setCount;
   message += " items with a variable set of " + set;
   gs.print(message);
}
/*Output
[0:00:00.345] Script completed in scope global: script
*** Script: The are currently 1 items with a variable set of Generic Request
*** Script: The are currently 154 items with a variable set of Request For
*/
```

## getAggregate
Gets an aggregate

```js
var count = new GlideAggregate('io_set_item');
//parm1: COUNT, MIN, MAX, parm2: field
count.addAggregate('COUNT', 'variable_set');
count.query();
while (count.next()) {
   var set = count.variable_set.getDisplayValue();
   var setCount = count.getAggregate('COUNT', 'variable_set');
   var message = "The are currently " + setCount;
   message += " items with a variable set of " + set;
   gs.print(message);
}
/*Output
[0:00:00.345] Script completed in scope global: script
*** Script: The are currently 1 items with a variable set of Generic Request
*** Script: The are currently 154 items with a variable set of Request For
*/
```

## getAggregateEncodedQuery
Gets an aggregate’s encoded query.

## orderByAggregate
Orders a-z an aggregate.

## setGroup
Sets whether the results are to be grouped



## next
Moves to the next record in the [GlideAggregate](/docs/glideaggregate/)
## getRowCount
Retrieves the number of rows in the [GlideRecord](/docs/gliderecord/)
## getAggregateEncodedQuery
Gets the query necessary to return the [current](/docs/current/) aggregate
## addAggregate
Adds an aggregate
## query
Issues the query and gets the results
## getTableName
Retrieves the table name associated with this [GlideRecord](/docs/gliderecord/)
## getCategory
Gets the optional category value of the query
## orderBy
Orders the aggregates using the value of the specified field. The field will also be added to the group-by list
## orderByDesc
Sorts the aggregates into descending order based on the specified field
## hasNext
Determines if there are any more results in the [GlideAggregate](/docs/glideaggregate/)
## groupBy
Provides the name of a field to use in grouping the aggregates. May be called numerous times to set multiple group fields
## getEncodedQuery
Retrieves the encoded query
## addNotNullQuery
Adds a NOT NULL query to the aggregate
## orderByAggregate
Sorts the aggregates based on the specified aggregate and field
## addNullQuery
Adds a NULL query to the aggregate
## getValue
Gets the value of a field
## setGroup
Sets whether the results are to be grouped
## addEncodedQuery
Adds a query to the aggregate. Adds an encoded query to the other queries that may have been set for this aggregate
## setCategory
Sets the value of category for the query
## addQuery
Adds a query to the aggregate

