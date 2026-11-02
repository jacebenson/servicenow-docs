---
title: REST
description: Sending REST
layout: libdoc_page.liquid
eleventyNavigation:
    parent: Outbound
    key: REST Outbound
    order: 3450
date: git Last Modified
---
[Docs](https://www.servicenow.com/docs/csh?topicname=c_RESTMessageV2API.html&version=latest)

RESTMessageV2 is how you make outbound REST calls from ServiceNow. It handles the HTTP layer — method, headers, auth, body — and returns the response so you can parse it.

## RESTMessageV2

The API is straightforward: create a message, set the endpoint, configure auth, send it.

```js
var request = new sn_ws.RESTMessageV2();
request.setEndpoint('https://api.example.com/v1/data');
request.setHttpMethod('POST');
request.setRequestHeader('Content-Type', 'application/json');
request.setRequestBody(JSON.stringify({ key: 'value' }));

var response = request.execute();
var body = response.getBody();
var status = response.getStatusCode();
```

### Authentication

RESTMessageV2 supports basic auth, OAuth, mutual auth, and key-based auth. You can hard-code credentials or use an authentication profile.

```js
// Basic auth
request.setBasicAuth('username', 'password');

// OAuth — uses an OAuth entity profile
request.setAuthenticationProfile('my_oauth_profile', 'oauth_token');
```

### Mutual Auth (mTLS)

For mutual authentication, you bind a certificate to the REST message. The MID Server handles the cert at runtime.

```js
request.setMutualAuth('My Certificate Profile');
```

### Running on a MID Server

If your target is internal (not reachable from the instance), route through a MID Server.

```js
request.setMIDServer('mid-server-name');
request.setHttpTimeout(30000); // 30 second timeout on the MID
```

### Advanced Features

- **Set a scripted request body** with `setRequestAttachmentWithBody(sysId)` for attaching records
- **Query parameters** via `setQueryParameter(name, value)`
- **Binary responses** via `getResponseAttachmentSysId()` — saves the response as an attachment and returns the sys_id
- **Error handling** with `getErrorMessage()` — returns the error if the request failed

## RESTMessageV2 vs RESTMessageV1

Always use RESTMessageV2. The V1 API (`RESTMessageV1`) is deprecated and doesn't support OAuth, mutual auth, or MID Server routing properly.

## Scripted REST Messages (Outbound)

You can define REST messages in `sys_rest_message` and `sys_rest_message_fn` tables, then call them by name. This is useful when you have multiple scripts hitting the same endpoint — define it once, reference it everywhere.

```js
var request = new sn_ws.RESTMessageV2('my_message', 'my_function');
var response = request.execute();
```

## Additional Resources

- [ServiceNow REST API Reference](https://developer.servicenow.com/dev.do#!/reference/api/sandiego/rest/c_RESTMessageV2API)
- [Outbound REST](/automations/outbound/rest/flow-designer/) — using REST in Flow Designer
- [Scripted REST](/automations/outbound/rest/scripted/) — programmatic REST calls
- [MIDServers](/automations/midservers/) — routing REST through MID Servers
