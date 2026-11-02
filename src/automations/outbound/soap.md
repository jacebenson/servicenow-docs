---
title: SOAP
description: The OG integration other than email
layout: libdoc_page.liquid
eleventyNavigation:
    parent: Outbound
    key: SOAP Outbound
    order: 3450
date: git Last Modified
---
[Docs](https://www.servicenow.com/docs/csh?topicname=c_SOAPMessageV2API.html&version=latest)

SOAPMessageV2 is the legacy way to make outbound SOAP calls from ServiceNow. If you're integrating with an old system that only speaks SOAP, this is your path. If you have a choice, use REST instead.

## SOAPMessageV2

```js
var request = new sn_ws.SOAPMessageV2();
request.setEndpoint('https://api.example.com/soap/service');
request.setSOAPAction('MyMethod');
request.setRequestBody('<soap:Envelope>...</soap:Envelope>');

var response = request.execute();
var body = response.getBody();
var status = response.getStatusCode();
```

### Setting SOAP Headers

```js
request.setRequestHeader('SOAPAction', 'MyMethod');
request.setBasicAuth('username', 'password');
```

### Using WSDLs

You can import WSDLs into ServiceNow (`wsdl` table) and generate SOAPMessage definitions. Once imported, reference them by name:

```js
var request = new sn_ws.SOAPMessageV2('my_wsdl', 'my_operation');
var response = request.execute();
```

This is cleaner than building SOAP envelopes by hand, but honestly, it's still XML in 2025.

## Key Differences from REST

- SOAP is XML-only — no JSON support
- WSDL-driven — you need a WSDL to call anything meaningful
- Heavier — larger payloads, more overhead
- Stateful SOAP headers for WS-Security, WS-Addressing, etc.
- Less common by the day — most modern APIs are REST or GraphQL

## When to Use SOAP

- **Legacy integration**: Old ERP systems, ticketing systems, mainframes
- **No alternative**: The vendor only exposes SOAP
- **Already have WSDLs**: You imported them and just need to wire it up

If you're starting greenfield, don't reach for SOAP. Use [REST Outbound](/automations/outbound/rest/) instead. If you need SOAP inbound, see [Inbound SOAP](/automations/inbound/soap/).

## Additional Resources

- [Docs - SOAPMessageV2](https://www.servicenow.com/docs/csh?topicname=c_SOAPMessageV2API.html&version=latest)
- [WSDL Imports](https://www.servicenow.com/docs/csh?topicname=c_WSDLImports.html&version=latest)
- [Inbound SOAP](/automations/inbound/soap/) — receiving SOAP calls
