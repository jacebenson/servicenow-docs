---
title: "Discovery"
layout: libdoc_page.liquid
eleventyNavigation:
    key: Discovery
    parent: Automations
    order: 2700
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/csh?topicname=c_DiscoveryOverview.html&version=latest)

Discovery is ServiceNow's way of finding what's on your network — servers, applications, databases, network gear — and building the Configuration Management Database (CMDB). It runs through [MID Servers](/automations/midservers/) and processes asynchronously.

## What Discovery Does

Discovery probes your network to identify devices and applications, then creates or updates CI records in the CMDB. It's the primary way most organizations populate their CMDB without manually entering everything.

The process:
1. **Discovery Schedule** fires (or you trigger it manually)
2. **MID Server** executes the probes against target IPs or ranges
3. **Results** come back to the instance
4. **Identification & Reconciliation** engine figures out if this is a new CI or an update to an existing one
5. **CMDB** gets populated with the results

## How MID Servers Run Discovery

Discovery is entirely MID Server-driven. The instance sends commands to the MID Server via the `ecc_queue` table (using the publish/subscribe model), the MID Server executes probes against the target, and writes results back to the `ecc_queue`. The instance then processes the results.

The key topics used by Discovery:
- `DiscoveryProbe` — the main probe topic for running discovery commands
- `SystemCommand` — running shell commands on the target
- `RESTProbe` — REST API-based discovery

## Types of Discovery

- **Horizontal Discovery** — scans IP ranges to find devices using SNMP, SSH, WMI
- **Vertical Discovery** — dives into a known device to discover applications, databases, and middleware
- **Cloud Discovery** — discovers cloud resources via provider APIs (AWS, Azure, GCP)
- **Service Mapping** — maps application services and their dependencies (separate license)

## Key Concepts

- **Probes** — the commands and configurations sent to the MID Server
- **Sensors** — the processors that parse probe results on the instance
- **Discovery Schedule** — when and what to discover
- **Identification Rule** — how the system decides "is this the same CI or a new one?"
- **Reconciliation** — what happens when multiple sources disagree about a CI

## Additional Resources

- [📄 - Maik Skoddow - Discovery Knowledge & Troubleshooting Resources](https://www.servicenow.com/community/itom-articles/itom-discovery-knowledge-amp-troubleshooting-resources/ta-p/2560593)
- [Docs - Discovery](https://www.servicenow.com/docs/csh?topicname=c_DiscoveryOverview.html&version=latest)
- [MIDServers](/automations/midservers/) — MID Server setup and configuration
- [Service Mapping](https://www.servicenow.com/docs/csh?topicname=c_ServiceMapping.html&version=latest)
