---
title: Visual Task Boards
description: TODO:FIXME
layout: libdoc_page.liquid
eleventyNavigation:
    key: Visual Task Boards
    parent: Core UI
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/csh?topicname=c_VisualTaskBoards.html&version=latest)

Visual Task Boards (VTBs) are Kanban-style boards that show work items as cards in columns. They give teams a visual way to track progress — drag a card from "Open" to "In Progress" to "Closed" instead of updating a state field in a form.

They're built on top of the `task` table hierarchy, which means they work with any task table: incidents, changes, problems, catalog tasks, or custom task tables.

## How They Work

A VTB is configured on the `visual_task_board` table. Each board has:

- **Lanes** — Horizontal swimlanes that group cards (e.g., "High Priority," "Normal," "Low")
- **Columns** — Vertical stages that represent states (e.g., "Open," "Work in Progress," "Pending," "Closed")
- **Cards** — Individual records displayed in lanes and columns
- **Queries** — Conditions that determine which records appear in each lane

Cards display key information from the record: number, short description, assignment group, priority, state. You can customize which fields appear on the card.

## Board Configuration

To create or modify a VTB:

1. Navigate to **Visual Task Boards** in the application navigator
2. Click **New** or open an existing board
3. Configure the **source table** (incident, change, task, etc.)
4. Add **columns** mapped to state values
5. Add **lanes** with filter conditions (e.g., priority = 2)
6. Set **card fields** to determine what data shows on each card

Boards can be private (just you) or public (shared with a group or everyone).

## Automation

VTBs aren't just drag-and-drop. You can trigger automations when cards move between columns:

- **State transitions** — Moving a card to "In Progress" updates the record's state field
- **Assignments** — Moving a card to a specific lane can auto-assign it
- **Notifications** — Board events can trigger email or Slack notifications

These are typically done through business rules or Flow Designer flows triggered by the state change.

## VTB vs. Configurable Workspace Boards

Next Experience workspaces also have board-like views, but they're different:

| Aspect | Visual Task Board | Workspace Board |
|---|---|---|
| Platform | Core UI | Next Experience |
| Customization | Table-driven | UI Builder |
| Source | task tables | Any table |
| Future | Maintained | Active development |

If you're building new board views today, use Next Experience workspace boards. If you're maintaining existing boards, VTBs still work fine.

## Further Reading

- [Docs - Using Visual Task Boards](https://www.servicenow.com/docs/csh?topicname=c_VisualTaskBoardUse.html&version=latest)
- [Docs - Visual Task Board Checklists](https://www.servicenow.com/docs/csh?topicname=c_VisualTaskBoardChecklists.html&version=latest)
