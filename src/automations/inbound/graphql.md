---
title: "GrahpQL"
description: "The newest type of integration for servicenow"
layout: libdoc_page.liquid
eleventyNavigation:
    parent: Inbound
    key: GraphQL
    order: 3410
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/csh?topicname=scripted-graph-ql.html&version=latest)

GraphQL is fantastic to consume data from however making a grahql endpoint is not for the faint of heart.

The idea behind GraphQL is that you can call one place and describe your payload you want to receive and get it so all calls to graphql are POSTs.

GraphQL uses things called resolvers to help identify what data you're trying to get and what form they take with their schema to make that all work though you have to define all these records in ServiceNow.  It's a lot.

Before Servicenow implemented their own GraphQL implementation they also had something similar that they called batch REST API.  This allowed someone to make a bunch of server set calls with one rest payload which gave you the benefits of the speed performance enhancements that GraphQL might give you without the complexity of configuring it and using it you can literally just wrap a ton of table calls with it.