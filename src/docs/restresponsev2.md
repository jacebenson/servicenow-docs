---
title: RESTResponseV2
description: The RESTResponseV2 API allows you to use the data returned by an outbound REST message in JavaScript code.
layout: libdoc_page.liquid
eleventyNavigation:
    key: RESTResponseV2
    parent: Docs
date: git Last Modified
---

[Developer Documentation](https://docs.servicenow.com/csh?version=latest&topicname=c_RESTResponseV2API) | [RESTMessageV2 Reference](/docs/restmessagev2/) | [Outbound REST Guide](/automations/outbound/rest/scripted/)

This is generally generated from a RESTMessageV2 call.

## getStatusCode

Get the numeric HTTP status code returned by the REST provider

## getHeaders

Deprecated -- use getAllHeaders instead \|

## waitForResponse

Set the amount of time the instance waits for the response

## getBody

Get the content of the REST response body

## getErrorCode

Get the numeric error code, if there was an error during the REST transaction

## getQueryString

Get the error message if there was an error during the REST transaction

## getAllHeaders

Get all headers returned in the REST response and the associated values

## haveError

Indicate if there was an error during the REST transaction

## getHeader

Get the value for a specified header

## getErrorMessage

Get the query used for this request