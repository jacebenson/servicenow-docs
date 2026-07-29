---
title: "Identify slow widgets on a Service Portal page"
description: "Analyze Service Portal widget performance by visually flagging widgets and measuring refresh time."
layout: libdoc_page.liquid
eleventyNavigation:
    key: "Identify slow Service Portal widgets"
    parent: Tricks & Tips
date: git Last Modified
tags: 
    - stub
    - servicenow
    - service-portal
    - performance
    - tips-and-tricks
    - troubleshooting
---

## Service Portal Performance issues

Service Portal performance issues are often subtle and cumulative: a page might work correctly, yet feel slow or unresponsive for end users.  
This **Tips and Tricks** section focuses on *practical diagnostics* you can run directly in the browser to:

- Identify performance bottlenecks
- Validate the impact of custom widgets
- Support tuning, refactoring, or escalation decisions with concrete data

The goal is not just to “fix what’s slow”, but to **understand why a portal behaves the way it does**.

---

## Overview

One of the most common causes of slow Service Portal pages is **widget execution time** — especially when custom widgets, server calls, or nested widgets are involved.

The approach below allows you to:

- Visually outline every widget rendered on a portal page
- Measure how long each widget takes to refresh
- Quickly spot the widgets that exceed an acceptable performance threshold

This technique is intended for **analysis and troubleshooting**, not continuous monitoring.

---

## Important reference

This diagnostic approach is **inspired by** the ServiceNow Knowledge Base article  
**KB0744521 – “How to identify slow widgets on a Service Portal page”**.

The implementation below is a **customized and adapted version**, written for internal diagnostics and documentation purposes.

> Original reference:  
> https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0744521

---

## When this is useful

Use this technique when:

- A Service Portal page loads noticeably slower than expected
- You suspect one or more widgets are causing delays
- You need evidence before refactoring or escalating to ServiceNow Support
- You want to compare widget performance before and after changes

---

## How to run the profiler

1. Open the target Service Portal page.
2. Open your browser **Developer Tools → Console**.
3. Paste the script below and press **Enter**.
4. Observe:
   - Visual markers added to widgets on the page
   - A performance table printed in the console

> ⚠️ **Recommendation:** run this in sub‑prod first. The script actively refreshes widgets.

---

## Widget performance profiler (browser console)

```js
(async function portalWidgetProfiler() {
  const SLOW_WIDGET_THRESHOLD_MS = 1000;

  const widgetNodes = Array.from(
    document.querySelectorAll('div[widget="widget"]')
  );

  if (!widgetNodes.length) {
    console.warn("No Service Portal widgets detected on this page.");
    return;
  }

  function resolveScope(el) {
    try {
      if (window.angular) {
        return angular.element(el).scope();
      }
    } catch (e) {}
    return null;
  }

  function decorateWidget(el) {
    el.style.position = "relative";
    el.style.border = "1px dashed #d32f2f";
    el.style.paddingTop = "24px";
  }

  function addLabel(el, text, color) {
    const label = document.createElement("div");
    label.textContent = text;
    label.style.position = "absolute";
    label.style.top = "2px";
    label.style.left = "4px";
    label.style.fontSize = "12px";
    label.style.fontWeight = "600";
    label.style.background = "#fff";
    label.style.color = color;
    label.style.padding = "2px 6px";
    label.style.borderRadius = "4px";
    label.style.zIndex = "1000";
    el.appendChild(label);
  }

  const results = [];

  for (let i = 0; i < widgetNodes.length; i++) {
    const el = widgetNodes[i];
    decorateWidget(el);

    const scope = resolveScope(el);
    const widgetMeta = scope?.widget || {};

    const widgetName = widgetMeta.name || `Widget ${i + 1}`;
    const widgetSysId = widgetMeta.sys_id || null;

    let durationMs = null;
    let isNested = Boolean(scope?.$parent?.widget);

    if (!isNested && scope?.server?.refresh) {
      const start = performance.now();
      try {
        await scope.server.refresh();
      } catch (e) {
        console.warn(`Refresh failed for widget: ${widgetName}`);
      }
      durationMs = Math.round(performance.now() - start);
    }

    const labelText = durationMs !== null
      ? `${widgetName} – ${durationMs} ms`
      : `${widgetName} – nested / skipped`;

    const labelColor =
      durationMs !== null && durationMs >= SLOW_WIDGET_THRESHOLD_MS
        ? "#b71c1c"
        : "#2e7d32";

    addLabel(el, labelText, labelColor);

    results.push({
      name: widgetName,
      sys_id: widgetSysId,
      nested: isNested,
      load_time_ms: durationMs
    });
  }

  const ordered = results
    .filter(r => typeof r.load_time_ms === "number")
    .sort((a, b) => b.load_time_ms - a.load_time_ms);

  console.group("Service Portal Widget Performance");
  console.info(`Widgets scanned: ${results.length}`);
  console.info(`Slow threshold: ${SLOW_WIDGET_THRESHOLD_MS} ms`);
  console.table(ordered);

  const slow = ordered.filter(
    r => r.load_time_ms >= SLOW_WIDGET_THRESHOLD_MS
  );

  if (slow.length) {
    console.warn("Widgets exceeding threshold:");
    console.table(slow);
  } else {
    console.info("No widgets exceeded the threshold.");
  }

  console.groupEnd();
})();