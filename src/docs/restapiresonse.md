---
title: RESTAPIResponse
description: The RESTAPIResponse API allows you to build a RESTful response to a scripted REST API request.
layout: libdoc_page.liquid
eleventyNavigation:
    key: RESTAPIResponse
    parent: Docs
date: git Last Modified
---

[Developer Documentation](https://docs.servicenow.com/csh?version=latest&topicname=c_ScriptableServiceResponseBuilder)

## setHeaders

Set response headers from the specified object

## getStreamWriter

Return stream writer. Caller responsible to set proper content type and
status using setStatus and setHeader methods. Caller responsible to
populate all headers on response before actually writing to stream

## setLocation

Set the Location header

## setError

Set Response Error

## setContentType

Set the Content-Type header

## setBody

Use the specified object as the response body

## setStatus

Set response HTTP status code

## setHeader

Set a response header

## RESTAPIResponseStream

### writeStream

Write an InputStream directly to the response stream. Can be called multiple times. Caller responsible for response format and setting proper Content-Type and status code prior to calling

### writeString

Write a string directly to the response stream. Can be called multiple
times. Caller responsible for response format and setting proper Content-Type and status code prior to calling
