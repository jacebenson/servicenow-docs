---
title: Reports
description: TODO:FIXME
layout: libdoc_page.liquid
eleventyNavigation:
    key: Reports
    parent: Core UI
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/csh?topicname=reporting-overview.html&version=latest)

Platform Analytics, formerly known as Reports, is how people can visualize the data in ServiceNow. You take data from tables, turn it into charts, and display those charts on dashboards. Simple on the surface, but there's a lot going on underneath.

## Data Sources

Every report starts with a data source. In its simplest form, that's a table and a condition — "show me all incidents opened in the last 7 days." But you can also use:

- **Database views** — Virtual tables that join multiple tables together
- **Formulas** — Calculated values based on field data
- **Indicators** — Pre-aggregated metrics from Performance Analytics (the engine under Platform Analytics)
- **External data sources** — Data fed into ServiceNow through import sets or integrations

The data source determines everything downstream. A report on the `incident` table grouped by `assignment_group` is different from a report on `incident` grouped by `category`.

## Dashboards

Dashboards are containers for reports. You can organize reports into tabs, size them as charts or lists, and share dashboards with other users or groups.

Key dashboard features:

- **Personal dashboards** — Just for you
- **Public dashboards** — Visible to everyone with the right role
- **Dashboard tabs** — Organize reports into logical groups
- **Auto-refresh** — Dashboards can refresh on a schedule
- **Drill-through** — Clicking a chart element can take you to a filtered list or another report

## Data Visualization

The chart types available have grown over the years:

- Bar, column, line, pie, donut, and area charts (the classics)
- Heat maps and scatter plots (for multidimensional data)
- Single score and gauge (for KPIs)
- Pivot tables (for tabular aggregation)
- List reports (just the data, no chart)

The rule of thumb: if your data has fewer than 10 data points, use a table. If it has more, a chart will tell the story better.

## Embedded Reports

Reports aren't just for dashboards. You can embed them on:

- **Home pages** — Widgets on the ServiceNow home page
- **Forms** — Related reports on a form (like showing the incident trend on a CI form)
- **Portals** — Service Portal pages via the report widget
- **Emails and notifications** — Scheduled report delivery

## Scheduled Reports

You can schedule reports to run on a recurring basis and email the results. Available formats include PDF, CSV, Excel, and image. This is how you automate weekly status reports without anyone having to log in and click "Run."

## Performance Analytics

Platform Analytics is built on top of Performance Analytics (PA). PA collects data in **indicator** buckets on a schedule, pre-aggregating counts and averages so reports don't hammer the transaction tables every time someone opens a dashboard. If you're building reports for large datasets, understanding indicators vs. ad-hoc queries is critical — indicators are fast but require setup, ad-hoc queries are instant setup but slow on large tables.

## Further Reading

- [Maik Skoddow - Platform Analytics](https://www.servicenow.com/community/platform-analytics-articles/platform-platform-analytics-knowledge-amp-troubleshooting/ta-p/3124746)
- [Justin Meadows - Platform Analytics YouTube Playlist](https://www.youtube.com/playlist?list=PLqU_zPknanavZtAf048ZTgCE1vAjVtg_Z)
- [Docs - Administer Reports](https://www.servicenow.com/docs/csh?topicname=c_AdminsteringReports.html&version=latest)
