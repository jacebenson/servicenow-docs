---
title: PA Collections
layout: libdoc_page.liquid
# eleventyNavigation:
#     parent: Async
#     key: Performance Analytics Collections
#     order: 2920
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/csh?topicname=c_PerformanceAnalyticsCollectData.html&version=latest)

Performance Analytics (PA) Collections are scheduled data-gathering jobs that pull metrics from your data and store them in the PA data model. They run asynchronously because they can be expensive — scanning thousands of records takes time.

## What PA Collections Do

A collection defines:
- **What** to collect — the table, conditions, and fields
- **When** to collect — the schedule (daily, hourly, custom)
- **How** to collect — the breakdown by time series (day, week, month)

Each collection generates a job that runs on the `pa_jobs` table. The job counts records, aggregates values, and stores the results in `pa_scores` and `pa_snapshots` tables.

## How Collections Run Async

PA Collections are queued and processed by the system's async infrastructure. The `pa_collections_collect` scheduled job picks up due collections and runs them. Each collection runs in its own context — they don't block each other, but they do compete for the same async processing capacity.

```js
// Manually trigger a collection via script
var collector = new PerformanceAnalyticsCollector();
collector.collect('collection_sys_id');
```

## Key Concepts

- **Data Source** — the table and conditions driving the collection
- **Breakdown** — how to slice the data (by category, priority, assignment group, etc.)
- **Time Series** — the granularity of storage (daily, weekly, monthly snapshots)
- **Indicator** — the metric being tracked (count of incidents, average resolution time, etc.)
- **Score** — the actual value stored for a given indicator and time period

## Performance Considerations

PA Collections can be expensive. A collection scanning 100k records with multiple breakdowns generates a lot of work. Be thoughtful about:
- **Collection frequency** — daily is usually enough for most metrics
- **Breakdown count** — each breakdown multiplies the work
- **Data retention** — PA doesn't automatically purge old data; set retention policies

## Additional Resources

- [Docs - PA Data Collection](https://www.servicenow.com/docs/csh?topicname=c_PerformanceAnalyticsCollectData.html&version=latest)
- [Docs - PA Indicators](https://www.servicenow.com/docs/csh?topicname=c_CreateAndEditIndicators.html&version=latest)
- [Async Overview](/automations/async/)
- [Scheduled Jobs](/automations/async/scheduled-jobs/)
