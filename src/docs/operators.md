---
title: Query Operators
description: A comprehensive reference of query operators used across all ServiceNow query APIs
layout: libdoc_page.liquid
eleventyNavigation:
    key: Query Operators
    parent: Docs
date: git Last Modified
---

# Query Operators

These operators are used across all ServiceNow query APIs to filter and retrieve records. They work consistently whether you're using:

- **[GlideRecord](/docs/gliderecord/)** – The standard server-side API for database operations
- **[GlideRecordSecure](/docs/gliderecordsecure/)** – GlideRecord with ACL enforcement
- **[GlideQuery](/docs/glidequery/)** – The modern, expressive alternative to GlideRecord
- **[GlideAggregate](/docs/glideaggregate/)** – For database aggregation queries (COUNT, SUM, MIN, MAX, AVG)

## Using Operators

### In GlideRecord & GlideRecordSecure
Use operators with `addQuery()` or `addEncodedQuery()`:

```js
var gr = new GlideRecord('incident');
gr.addQuery('priority', '<=', 2);
gr.addQuery('state', 'IN', '1,2');
gr.query();
```

### In GlideQuery
Pass operators as the second argument in `where()`:

```js
new GlideQuery('incident')
  .where('priority', '<=', 2)
  .where('state', 'IN', [1, 2])
  .select();
```

### In GlideAggregate
Operators work the same as GlideRecord:

```js
var ga = new GlideAggregate('incident');
ga.addQuery('priority', '<=', 2);
ga.addAggregate('COUNT');
ga.query();
```

---

## Operator Reference

| Operator label           | Equivalent query operator | Example query                                                                 |
| ------------------------ | ------------------------- | ----------------------------------------------------------------------------- |
| is not                   | `!=`                      | `short_description!=Network storage unavailable`                              |
| and                      | `^`                       | `active=true^CallerISNOTEMPTY`                                                |
| OR filter (new query)    | `^NQ`                     | `active=true^NQactive=false`                                                  |
| OR condition             | `^OR`                     | `short_descriptionISEMPTY^ORdescriptionISEMPTY`                               |
| before                   | `<`                       | `sla_due<javascript:gs.daysAgoStart(0)`                                       |
| less than                | `<`                       | `reassignment_count<2`                                                        |
| at or before             | `<=`                      | `sla_due<=javascript:gs.daysAgoEnd(0)`                                        |
| less than or is          | `<=`                      | `short_description<=s`                                                        |
| is                       | `=`                       | `short_description=Network storage unavailable`                               |
| after                    | `>`                       | `sla_due>javascript:gs.daysAgoEnd(0)`                                         |
| greater than             | `>`                       | `impact>2`                                                                    |
| at or after              | `>=`                      | `sla_due>=javascript:gs.daysAgoStart(0)`                                      |
| greater than or is       | `>=`                      | `short_description>=s`                                                        |
| is anything              | `ANYTHING`                | `short_descriptionANYTHING`                                                   |
| between                  | `BETWEEN`                 | `short_descriptionBETWEENq@t`                                                 |
| between                  | `BETWEEN`                 | `impactBETWEEN1@2`                                                            |
| between                  | `BETWEEN`                 | `sla_dueBETWEENjavascript:gs.daysAgoStart(1)@javascript:gs.daysAgoEnd(0)`     |
| between                  | `BETWEEN`                 | `reassignment_countBETWEEN1@2`                                                |
| changes from             | `CHANGESFROM`             | `stateCHANGESFROM4^EQ`                                                        |
| changes to               | `CHANGESTO`               | `stateCHANGESTO4^EQ`                                                          |
| trend (after)            | `DATEPART`                | `sla_dueDATEPARTMonday@javascript:gs.datePart('dayofweek','monday','GT')`     |
| trend (before)           | `DATEPART`                | `sla_dueDATEPARTMonday@javascript:gs.datePart('dayofweek','monday','LT')`     |
| trend (on or after)      | `DATEPART`                | `sla_dueDATEPARTMonday@javascript:gs.datePart('dayofweek','monday','GE')`     |
| trend (on or before)     | `DATEPART`                | `sla_dueDATEPARTMonday@javascript:gs.datePart('dayofweek','monday','LE')`     |
| trend (on)               | `DATEPART`                | `sla_dueDATEPARTMonday@javascript:gs.datePart('dayofweek','monday','EE')`     |
| is (dyanmic)             | `DYNAMIC`                 | `caller_idDYNAMIC54635e965f510100a9ad2572f2b4774c`                            |
| is empty string          | `EMPTYSTRING`             | `caller_idEMPTYSTRING`                                                        |
| ends with                | `ENDSWITH`                | `short_descriptionENDSWITHoutage`                                             |
| greater than field       | `GT_FIELD`                | `reassignment_countGT_FIELDreopen_count`                                      |
| greater than or is field | `GT_OR_EQUALS_FIELD`      | `reassignment_countGT_OR_EQUALS_FIELDreopen_count`                            |
| is one of                | `IN`                      | `impactIN1,2`                                                                 |
| is empty                 | `ISEMPTY`                 | `short_descriptionISEMPTY`                                                    |
| is not empty             | `ISNOTEMPTY`              | `activeISNOTEMPTY`                                                            |
| is less than             | `LESSTHAN`                | `sla_dueLESSTHANactivity_due@day@before@3`                                    |
| contains                 | `LIKE`                    | `subcategoryLIKEem`                                                           |
| less than field          | `LT_FIELD`                | `reassignment_countLT_FIELDreopen_count`                                      |
| less than or is field    | `LT_OR_EQUALS_FIELD`      | `reassignment_countLT_OR_EQUALS_FIELDreopen_count`                            |
| is more than             | `MORETHAN`                | `sla_dueMORETHANactivity_due@day@before@1`                                    |
| is not one of            | `NOT IN`                  | `subcategoryNOT INdb2,sql server,oracle`                                      |
| does not contain         | `NOT LIKE`                | `subcategoryNOT LIKEem`                                                       |
| not on                   | `NOTONToday`              | `sla_dueNOTONToday@javascript:gs.daysAgoStart(0)@javascript:gs.daysAgoEnd(0)` |
| is different             | `NSAMEAS`                 | `activeNSAMEASmade_sla`                                                       |
| on                       | `ONToday`                 | `sla_dueONToday@javascript:gs.daysAgoStart(0)@javascript:gs.daysAgoEnd(0)`    |
| relative (on)            | `RELATIVEEE`              | `sla_dueRELATIVEEE@hour@ago@1`                                                |
| relative (on or after)   | `RELATIVEGE`              | `sla_dueRELATIVEGE@hour@ago@1`                                                |
| relative (after)         | `RELATIVEGT`              | `sla_dueRELATIVEGT@hour@ago@1`                                                |
| relative (on or before)  | `RELATIVELE`              | `sla_dueRELATIVELE@hour@ago@1`                                                |
| relative (before)        | `RELATIVELT`              | `sla_dueRELATIVELT@hour@ago@1`                                                |
| is same                  | `SAMEAS`                  | `short_descriptionSAMEASdescription`                                          |
| starts with              | `STARTSWITH`              | `subcategorySTARTSWITHem`                                                     |
| changes                  | `VALCHANGES`              | `stateVALCHANGES`                                                             |
