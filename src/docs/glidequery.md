---
title: GlideQuery
description: GlideQuery is a modern, expressive, safer, and more JavaScript‑native API for querying and manipulating data in ServiceNow
layout: libdoc_page.liquid
eleventyNavigation:
    key: GlideQuery
    parent: Docs
date: git Last Modified
author: Pedro Leite
---

GlideQuery is a modern alternative to **GlideRecord**, created to simplify database operations, reduce errors, and make your scripts more expressive and predictable.

> **Query Operators:** GlideQuery supports the same [Query Operators](/docs/operators/) as GlideRecord for filtering records.

## What is GlideQuery?

`GlideQuery` is a server‑side script include that provides a fluent, chainable, and strongly validated API for querying, modifying, aggregating, and streaming records.

Unlike `GlideRecord`, which can fail silently or behave inconsistently, GlideQuery is designed around:

- **Fail Fast** — catches mistakes early
- **Native JavaScript feel** — streams, objects, chaining
- **Expressiveness** — minimal boilerplate, safer defaults

---

## Methods Available

| Category | Method / Feature | Brief Description |
|----------|------------------|-------------------|
| Query | `where()` | Filter by field value |
| Query | `orWhere()` | OR logic (strict ordering) |
| Query | `whereNull()`, `whereNotNull()` | Null filtering |
| Query | `where('field', 'IN', array)` | IN operator |
| Query | `select()` | Returns Stream of JS objects |
| Query | `selectOne()` | Optional‑wrapped single result |
| Query | `get()` | Extract Optional value |
| Query | `orderByAsc()`, `orderByDesc()` | Sorting |
| Query | `limit()` | Limit result count |
| Aggregates | `count()` | Row count |
| Aggregates | `sum()`, `max()`, `min()`, `avg()` | Built‑in aggregates |
| Grouping | `groupBy()` | Group result sets |
| Grouping | `having()` | Filter grouped results |
| Write | `insert()` | Insert record |
| Write | `update()` | Update matching record |
| Write | `updateMultiple()` | Bulk update |
| Write | `delete()` | Delete matching records |
| Stream | `forEach()` | Iterate over results |
| Stream | `reduce()` | Reduce to value |
| Advanced | `flatMap()` | Nested child queries |
| Advanced | `$DISPLAY` flags | Retrieve display values |

---

## GlideQuery Operators

GlideQuery supports the standard [Query Operators](/docs/operators/). Here are the most commonly used ones:

| Operator | Usage | Example |
|----------|--------|---------|
| `=` | Equals | `.where('active', true)` |
| `!=` | Not equal | `.where('state', '!=', 7)` |
| `>` / `<` | Greater / Less | `.where('priority', '>', 2)` |
| `>=` / `<=` | Greater/less or equal | `.where('impact', '>=', 2)` |
| `IN` | List membership | `.where('state', 'IN', [1,2,3])` |
| `STARTSWITH` | Starts with | `.where('number', 'STARTSWITH', 'INC')` |
| `ENDSWITH` | Ends with | `.where('email', 'ENDSWITH', '@example.com')` |
| `LIKE` | Contains | `.where('short_description', 'LIKE', 'db')` |

For the complete list of operators, see [Query Operators](/docs/operators/).

---

# Examples of GlideQuery Methods


## `where()`
```js
new GlideQuery('sc_request')
  .where('u_criticality', 'high')
  .select('number', 'u_criticality', 'short_description')
  .forEach(r => gs.info(`${r.number} - ${r.u_criticality} - ${r.short_description}`));
```

## `orWhere()`
```js
new GlideQuery('sc_request')
  .where('u_criticality', 'high')
  .orWhere('u_justification', 'LIKE', 'urgent')
  .select('number', 'u_criticality', 'u_justification')
  .forEach(r => gs.info(`${r.number} -> crit=${r.u_criticality} | just=${r.u_justification}`));
```

## `whereNull()` (and) `whereNotNull()`
```js
new GlideQuery('task')
  .whereNull('assigned_to')
  .select('number')
  .forEach(r => gs.info(`Unassigned task: ${r.number}`));

new GlideQuery('task')
  .whereNotNull('assigned_to')
  .select('number', 'assigned_to')
  .forEach(r => gs.info(`Assigned task: ${r.number}`));
```

## `where('field', 'IN', array)` (IN operator)
```js
new GlideQuery('incident')
  .where('u_region', 'IN', ['EMEA', 'AMER'])
  .select('number', 'u_region')
  .forEach(r => gs.info(`${r.number} in ${r.u_region}`));
```

## `select()`
```js
new GlideQuery('u_release_item')
  .where('u_status', 'READY')
  .select('u_component', 'u_status')
  .forEach(row => gs.info(`${row.u_component} => ${row.u_status}`));
```

## `selectOne()` (and) `get()`
```js
var optUser = new GlideQuery('sys_user')
  .where('email', 'LIKE', 'pedro')
  .selectOne('name', 'email');

if (optUser.isPresent()) {
  var user = optUser.get();
  gs.info(`Found: ${user.name} <${user.email}>`);
} else {
  gs.info('No user found for employee id EMP-042');
}
```

## `orderByAsc()`, `orderByDesc()`
```js
new GlideQuery('incident')
  .orderByAsc('u_business_service')
  .orderByDesc('opened_at')
  .select('number', 'u_business_service', 'opened_at')
  .forEach(r => gs.info(`${r.u_business_service} - ${r.number} @ ${r.opened_at}`));
```

## `limit()`
```js
new GlideQuery('change_request')
  .orderByDesc('sys_updated_on')
  .limit(3)
  .select('number', 'short_description')
  .forEach(r => gs.info(`${r.number}: ${r.short_description}`));
```

## `count()`
```js
var openCount = new GlideQuery('incident')
  .where('state', '!=', 7) // not Closed
  .count();
gs.info(`Open incidents: ${openCount}`);
```

## `sum()`, `max()`, `min()`, `avg()`
```js
var totalEffort = new GlideQuery('u_project_task')
  .where('u_program', 'Phoenix')
  .sum('u_planned_effort');
gs.info(`Planned effort (Phoenix): ${totalEffort}`);

var latestPlanned = new GlideQuery('u_project_task')
  .where('u_program', 'Phoenix')
  .max('u_planned_effort');
gs.info(`Max planned effort (Phoenix): ${latestPlanned}`);

var smallestPlanned = new GlideQuery('u_project_task')
  .where('u_program', 'Phoenix')
  .min('u_planned_effort');
gs.info(`Min planned effort (Phoenix): ${smallestPlanned}`);

var avgPlanned = new GlideQuery('u_project_task')
  .where('u_program', 'Phoenix')
  .avg('u_planned_effort');
gs.info(`Avg planned effort (Phoenix): ${avgPlanned}`);
```

## `groupBy()` (and) `having()`
```js
new GlideQuery('incident')
  .groupBy('u_business_service')
  .count('cnt')
  .having('cnt', '>=', 5)
  .select('u_business_service', 'cnt')
  .forEach(r => gs.info(`${r.u_business_service}: ${r.cnt}`));
```

## `insert()`
```js
new GlideQuery('incident')
  .insert({
    short_description: 'User cannot access Unit4 finance app',
    category: 'software',
    impact: 2,
    urgency: 2,
    u_business_service: 'Unit4'
  });
```

## `update()`
```js
new GlideQuery('incident')
  .where('u_business_service', 'Unit4')
  .where('priority', 3)
  .update({ priority: 2, u_support_group: 'Apps Lisbon' });
```

## `updateMultiple()`
```js
new GlideQuery('u_vendor_ticket')
  .where('u_vendor', 'Contoso Telecom')
  .where('state', 'IN', [2, 3]) // In Progress / On Hold
  .updateMultiple({ u_sla_watch: true });
```

## `delete()`
```js
new GlideQuery('u_temp_import')
  .where('u_batch_id', 'B-2026-02-11')
  .delete();
```

## `forEach()`
```js
new GlideQuery('problem')
  .select('number', 'u_root_cause')
  .forEach(p => gs.info(`${p.number} => ${p.u_root_cause || 'TBD'}`));
```

## `reduce()`
```js
var sevScore = new GlideQuery('incident')
  .where('u_major_incident', true)
  .select('impact', 'urgency')
  .reduce(0, (acc, row) => acc + (row.impact * row.urgency));
gs.info(`Aggregate severity score: ${sevScore}`);
```

## `flatMap()`
```js
new GlideQuery('u_release')
  .where('u_cycle', '2026.02')
  .flatMap(rel =>
    new GlideQuery('u_release_item')
      .where('u_release', rel.sys_id)
      .select('u_component', 'u_status')
  )
  .forEach(item => gs.info(`${item.u_component}: ${item.u_status}`));
```

## `$DISPLAY` flags
```js
new GlideQuery('incident')
  .where('caller_id', '$DISPLAY', 'STARTSWITH', 'Klaudia')
  .select('number', 'caller_id$DISPLAY')
  .forEach(r => gs.info(`${r.number} - Caller: ${r['caller_id$DISPLAY']}`));
```
