---
title: Flow Designer
description: "Low-code outbound REST integration"
layout: libdoc_page.liquid
eleventyNavigation:
    parent: REST Outbound
    key: Flow Designer REST
    order: 30
date: git Last Modified
---

[ServiceNow Community - REST in Flow Designer](https://www.servicenow.com/community/developer-articles/outbound-rest-integration-using-flow-designer/ta-p/2308300)

Flow Designer provides a low-code way to make outbound REST calls without writing scripts.

## Cost Warning

⚠️ Uses **Integration Hub transactions** - check your licensing.

## Setup Steps

1. Create **Connection & Credential Alias** (type: Credential)
2. Add credentials to the alias (Basic Auth, OAuth, etc.)
3. Flow Designer → Action → Add Step → **REST**
4. Configure:
   - Connection Alias
   - Base URL
   - Resource Path
   - HTTP Method
   - Headers
   - Request Content

## Example Configuration

```
Base URL: https://<instance>.service-now.com
Resource Path: /api/now/table/incident
Method: POST
Headers: Accept: application/json
Request Body: {"short_description":"From Flow Designer"}
```

## Parsing Response

Add a **Script** step to parse the REST response:

```javascript
(function execute(inputs, outputs) {
    var responseBody = JSON.parse(inputs.response);
    
    if (inputs.status != 201) {
        var errorMsg = responseBody.error.message;
        throw "Error: " + errorMsg;
    }
    
    outputs.number = responseBody.result.number;
    outputs.short_description = responseBody.result.short_description;
})(inputs, outputs);
```

## Resources

- [MCoffee Blog - Flow Designer REST](https://mtcoffee.github.io/use-rest-action-post-with-servicenow-flow-designer/)
- [ServiceNow KB - REST Step](https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0823218)
