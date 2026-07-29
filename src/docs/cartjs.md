---
title: cartJS
description: cartJS allows you to create catalog items easily
layout: libdoc_page.liquid
eleventyNavigation:
    key: cartJS
    parent: Docs
date: git Last Modified
---

CartJS is a class that lets you define in order catalog items. It's very useful when you want to request something programmatically.

## Example code

```js
var developmentLaptop = "3cecd2350a0a0a6a013a3a35a5e41c07";
var cart = new sn_sc.CartJS();
var item = {
  sysparm_id: developmentLaptop,
  sysparm_quantity: "1",
  variables: {
    os_requested: "ubuntu",
    harddrive: "500"
  }
};
var request = cart.orderNow(item);
gs.info(JSON.stringify(request,null,' '));
/**
{
 "sys_id": "c42e097283d332106873b7a6feaad3e4",
 "number": "REQ0010001",
 "request_number": "REQ0010001",
 "request_id": "c42e097283d332106873b7a6feaad3e4",
 "table": "sc_request"
}
**/
```
