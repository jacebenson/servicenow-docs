---
title: GlidePluginManager
description: A list of all the field attributes that could be found here on the docs.
layout: libdoc_page.liquid
eleventyNavigation:
    key: GlidePluginManager
    parent: Docs
date: git Last Modified
---

GlidePluginManager lets you check whether a ServiceNow plugin is installed and active. The most common use case is conditional logic — skip feature-specific code if the plugin isn't available rather than letting it fail silently.

[Docs](https://developer.servicenow.com/dev.do#!/reference/api/latest/server/no-namespace/c_GlidePluginManagerScopedAPI)

## Methods available

| Method | Description |
| ------ | ----------- |
| [isActive](#isactive) | Determines if a plugin is activated |

## Detail

### isActive

Returns `true` if the specified plugin is installed and active. Takes a single string parameter — the plugin ID as found on the Plugin (sys_plugins) table.

```js
var pm = new GlidePluginManager();
if (pm.isActive('com.snc.sla.plugin')) {
    gs.info('SLA management is available');
}
```

Common plugin IDs you'll check for:

| Plugin ID | Description |
| --------- | ----------- |
| `com.snc.sla.plugin` | SLA Management |
| `com.snc.incident` | Incident Management |
| `com.snc.change_management` | Change Management |
| `com.snc.project` | Project Management |
| `com.snc.cmdb` | Configuration Management (CMDB) |
| `com.snc.scoped_v2` | Scoped Applications |
| `com.snc.sm` | Service Catalog |
