---
title: Walk Up (Service Portal)
description: TODO:FIXME
layout: libdoc_page.liquid
eleventyNavigation:
    key: Walk Up
    parent: Service Portal
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/csh?topicname=walk-up-experience.html&version=latest)

The Walk-up Experience is ServiceNow's kiosk mode. It lets users walk up to a physical service desk (IT help desk, HR counter, facilities desk) and check in through a touch-screen kiosk or have an agent quickly log their request on their behalf.

It's built on Service Portal but adds specific features: appointment scheduling, queue management, and a kiosk interface optimized for touch screens.

## How It Works

A walk-up kiosk runs in a browser on a tablet or touch screen at a service desk. Users can:

- **Check in** — Select the reason for their visit and enter their name/email
- **Book an appointment** — Schedule a time with a specific service desk agent
- **View wait times** — See how many people are ahead of them

Behind the scenes, the walk-up system creates catalog requests or tasks in ServiceNow, routes them to the right assignment group, and manages the queue of walk-in visitors.

## Key Components

- **Kiosk Portal** — The Service Portal page that runs on the kiosk device. Full-screen, touch-optimized, auto-logout.
- **Appointment Administration** — Manage time slots, agent availability, and appointment types.
- **Queue Management** — The agent's view of who's waiting, what they need, and how long they've been waiting.
- **Walk-up Configurations** — Which catalog items are available, what fields the user fills in, and how the resulting request is routed.

## Configuration

You set up the Walk-up Experience through the **Walk-up Experience** module in the application navigator. Key settings:

- Kiosk portal assignment (which Service Portal page serves as the kiosk)
- Appointment duration and scheduling rules
- Catalog items available for walk-up requests
- Queue display and notification settings

## Further Reading

- [Maik Skoddow - Walk Up](https://www.servicenow.com/community/itsm-articles/itsm-walk-up-experience-knowledge-amp-troubleshooting-resources/ta-p/2602786)
- [Docs - Walk-up Experience](https://www.servicenow.com/docs/csh?topicname=walk-up-experience-overview.html&version=latest)
