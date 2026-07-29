---
title: Scripted REST
description: "Scripted outbound REST API calls using RESTMessageV2"
layout: libdoc_page.liquid
eleventyNavigation:
    parent: REST Outbound
    key: Scripted REST
    order: 10
date: git Last Modified
---

[RESTMessageV2 Reference](/docs/restmessagev2/) | [RESTResponseV2 Reference](/docs/restresponsev2/)

The `RESTMessageV2` API sends outbound REST messages from server-side JavaScript. Use `RESTResponseV2` to handle the response.

## Basic Example

```javascript
var rm = new sn_ws.RESTMessageV2();
rm.setEndpoint('https://api.example.com/data');
rm.setHttpMethod('GET');

var response = rm.execute();
var responseBody = response.getBody();
var statusCode = response.getStatusCode();
```

## Key Methods (RESTMessageV2)

- `setEndpoint(url)` - Target URL
- `setHttpMethod(method)` - GET, POST, PUT, PATCH, DELETE
- `setRequestBody(body)` - Set request body for POST/PUT
- `setRequestHeader(name, value)` - Add HTTP headers
- `setBasicAuth(username, password)` - Basic authentication
- `setQueryParameter(name, value)` - URL query params
- `execute()` - Send the request

## Response Methods (RESTResponseV2)

- `getBody()` - Get response body as string
- `getStatusCode()` - HTTP status code
- `getHeaders()` - Response headers
- `getErrorMessage()` - Error message if request failed

## OAuth Authentication

### Public Endpoints (Built-in)

For public OAuth providers (Salesforce, Microsoft, Google, etc.), use `setAuthenticationProfile()`:

```javascript
var rm = new sn_ws.RESTMessageV2();
rm.setEndpoint('https://api.salesforce.com/data');
rm.setHttpMethod('GET');
rm.setAuthenticationProfile('oauth2', 'oauth_profile_sys_id');
var response = rm.execute();
```

### Internal/Network Endpoints (MID Server + OAuth)

For internal APIs behind your firewall, use a Script Include with `GlideOAuthClient` and MID Server support:

```javascript
var OAuthRestUtil = Class.create();
OAuthRestUtil.prototype = {
    initialize: function(restMessage, restMessageMethod, requestorId, entityProfile, midServer) {
        // Normalize restMessage to always be a sn_ws.RESTMessageV2 object
        if (typeof restMessage == 'string') {
            this.restMessage = new sn_ws.RESTMessageV2(restMessage, restMessageMethod);
        } else if (restMessage instanceof sn_ws.RESTMessageV2) {
            this.restMessage = restMessage;
        } else {
            throw 'First argument must be either a REST Message name (string) or a sn_ws.RESTMessageV2 object';
        }
        
        // Determine if we need MID Server (customize this logic)
        var endpoint = this.restMessage.getEndpoint();
        this.needMidServer = (endpoint && endpoint.toLowerCase().indexOf('intranet') !== -1);
        
        if (this.needMidServer) {
            this.midServer = midServer || new sn_auth.OAuthMidSelector().selectRESTCapableMidServer('all', null);
            this.restMessage.setMIDServer(this.midServer);
        }
        
        // Set the OAuth token as Bearer header
        this.restMessage.setRequestHeader('Authorization', 'Bearer ' + this._getAccessToken(requestorId, entityProfile));
        // Disable default authentication since we're handling it manually
        this.restMessage.setAuthenticationProfile("no_authentication");
    },
    
    _getAccessToken: function(requestorId, entityProfile) {
        var oAuthClient = new sn_auth.GlideOAuthClient();
        // Get cached token
        var token = oAuthClient.getToken(requestorId, entityProfile);
        
        // Refresh if expiring within 60 seconds
        if (token.getExpiresIn() < 60) {
            var tokenRequest = new sn_auth.GlideOAuthClientRequest();
            tokenRequest.setParameter('oauth_requestor_context', 'rest');
            tokenRequest.setParameter('oauth_requestor', requestorId);
            tokenRequest.setParameter('oauth_provider_profile', entityProfile);
            
            // Route token request through MID Server for internal endpoints
            if (this.needMidServer) {
                tokenRequest.setMIDServer(this.midServer);
            }
            
            var tokenResponse = oAuthClient.requestTokenByRequest(null, tokenRequest);
            token = tokenResponse.getToken();
        }
        return token.getAccessToken();
    },
    
    invokeRestMessage: function(payload) {
        this.restMessage.setRequestBody(payload);
        return this.restMessage.execute();
    },
    
    invokeRestMessageAsync: function(payload) {
        this.restMessage.setRequestBody(payload);
        return this.restMessage.executeAsync();
    },
    
    type: 'OAuthRestUtil'
};
```

**Usage:**

```javascript
var util = new OAuthRestUtil('YourRestMessage', 'YourMethod', 
    'requestor_id', 'entity_profile_sys_id');
var response = util.invokeRestMessage('{"key":"value"}');
```

[SN Pro Tips - REST Performance](https://snprotips.com/blog/2026/flow-designer-vs-scripting-rest-message-performance)

| Scenario | Method |
|----------|--------|
| Public SaaS APIs | `setAuthenticationProfile()` |
| Internal/On-prem APIs | Script Include with `GlideOAuthClient` + MID Server |
