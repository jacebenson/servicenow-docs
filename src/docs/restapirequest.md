---
title: RESTAPIRequest
description: The RESTAPIRequest API allows you to access scripted REST API request details in scripts.
layout: libdoc_page.liquid
eleventyNavigation:
    key: RESTAPIRequest
    parent: Docs
date: git Last Modified
---
[Developer Documentation](https://docs.servicenow.com/csh?version=latest&topicname=c_ScriptableServiceRequest)

## headers

All headers from the request

## pathParams

The variable path parameters passed in the request URI as an object

## queryParams

The query parameters from the request as an object

## getRequestedQueryCategory

Get the query category (i.e. read replica category) from query parameter
`sysparm_query_category`

## getSupportedResponseContentTypes

Obtain a set of media types that are common between what the client
request accepts and what this service is able to produce

## body

The body of the request

## queryString

The entire query string from the request URI

## uri

The request URI, excluding domain information

## url

The entire request URL, including domain

## getHeader

Get the value of a specific header from the request
