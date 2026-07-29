---
title: Email
description: How ServiceNow notifications actually work
layout: libdoc_page.liquid
eleventyNavigation:
    parent: Outbound
    key: Email
    order: 3450
date: git Last Modified
---

[Troubleshooting Notifications](https://jace.pro/blog/notification-troubleshooting/)

## How It Actually Works

All email notifications in ServiceNow use one underlying system: the **`sysevent_email_action`** table (Notification records). This system is built on top of the event system (`sysevent`).

## The Problem with Inline Emails

### Legacy Workflow (The Old Way)
Back in the day, legacy workflow had a "Send Email" activity where you could type free-form text with variable replacement. It seemed convenient until you needed to:
- Allow users to unsubscribe
- Update branding across all notifications
- Find where emails were being sent from

**The emails were scattered everywhere.**

### Flow Designer (The New Old Way)
Flow Designer has the same feature: an inline "Send Email" action. It has the **exact same problem**:
- Hard to find all email actions
- Difficult to make global changes
- No centralized management

## The Right Way: Notification Records

**Always use `sysevent_email_action` records.** These provide:

- **Centralized management** - All notifications in one table
- **Consistent branding** - Update templates in one place
- **Auditability** - Easy to find what's sending emails
- **Subscription control** - Users can unsubscribe properly

## Trigger Options

Notifications fire based on:

1. **Event is fired** - Event created by business rule/script
2. **Record is inserted/updated** - Condition evaluated on table changes

Both ultimately use the event system under the hood.

## Why This Matters

When troubleshooting email issues, you need to find the notification record quickly. If emails are scattered in:
- Flow Designer actions
- Business rules
- Scripts

You'll spend hours hunting. Centralized notifications make debugging **much** easier.

## Quick Reference

| Approach | Maintainable | Findable | Recommended |
|----------|--------------|----------|-------------|
| Notification Records (`sysevent_email_action`) | ✅ | ✅ | ✅ |
| Flow Designer Send Email | ❌ | ❌ | ❌ |
| Script-based (GlideEmailOutbound) | ❌ | ❌ | ❌ |
