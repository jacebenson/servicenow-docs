---
title: Transform Maps
layout: libdoc_page.liquid
eleventyNavigation:
    parent: Import Sets
    key: Transform Maps
    order: 2800
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/csh?topicname=robust-import-set-transformers.html&version=latest)

Robust Transform Maps are the next level up from regular Transform Maps. They add multi-stage transform capabilities, conditional mapping, and better error handling for complex imports.

## When to Use Robust

Regular Transform Maps work fine for simple imports — one staging table, one target table, straightforward field mappings. But when you need to:

- Load data from one staging table into **multiple target tables** in a single import
- Run **conditional transforms** (only map these fields if a certain condition is met)
- Handle **complex data relationships** (create a parent record, then link children to it)
- Need **better error recovery** (retry failed records without reprocessing everything)

That's when Robust Transform Maps come in.

## Key Differences

| Feature | Transform Map | Robust Transform Map |
|---------|--------------|---------------------|
| Target tables | One | One or more |
| Multi-stage | No | Yes — chain transforms together |
| Conditional mapping | Limited | Full script conditions |
| Error handling | Basic | Per-stage error handling |
| Field map reuse | Per-map only | Template-based field maps |

## Multi-Stage Transforms

A robust transform can run multiple stages, each with its own target table and mapping. This is useful for:

1. **Stage 1**: Create the parent record (e.g., a user record)
2. **Stage 2**: Create related records (e.g., group memberships)
3. **Stage 3**: Update related records (e.g., asset assignments)

Each stage can depend on the previous stage's output for reference values.

## Further Reading

- [Robust Import Set Transformers](https://www.servicenow.com/docs/csh?topicname=robust-import-set-transformers.html&version=latest)
- [Transform Maps](/data/import-sets-transform-maps/)
- [Import Sets](/data/import-sets/)
