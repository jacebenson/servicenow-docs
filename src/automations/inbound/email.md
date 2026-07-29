---
title: "Email"
description: "The OG integration"
layout: libdoc_page.liquid
eleventyNavigation:
    parent: Inbound
    key: Email
    order: 3460
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/csh?topicname=inbound-email-landing.html&version=latest)

Inbound emails is one of the first ways folks can interact with ServiceNow from outside of ServiceNow 

Emails are handled through a system called inbound actions. Inbound actions allow you to handle replies, forwards, and new messages differently. One thing they all share in common is that they have to find a user or guest and they will use key-value pairs with the colon separating the field from the value on the right hand side to set fields.

A few important bits about inbound actions is how to stop others from running and debugging them