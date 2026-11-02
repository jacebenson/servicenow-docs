---
title: XMLNodeIterator
description: ServiceNow's XMLNodeIterator.
layout: libdoc_page.liquid
eleventyNavigation:
    key: XMLNodeIterator
    parent: Docs
date: git Last Modified
---

XMLNodeIterator walks the child nodes of an XML node. Obtain it with `XMLNode.getChildNodeIterator()` after finding the parent through [`XMLDocument2`](/docs/xmldocument2/).

[Docs](https://www.servicenow.com/docs/r/api-reference/server-api-reference/c_XMLNodeIteratorScopedAPI.html)

## Methods available

| Method | Description |
| ------ | ----------- |
| [hasNext](#hasnext) | Checks if there are more nodes in the iteration |
| [next](#next) | Returns the next XMLNode in the iteration |

## Detail

### hasNext

Returns `true` if there are more nodes available in the iteration. Always call before `next()` when you're iterating an unknown-length list.

### next

Returns the next XMLNode in the iteration. Check `hasNext()` before advancing. Pretty-printed XML can also produce whitespace text nodes.

```js
var xmlString = '<items><item>A</item><item>B</item></items>';
var doc = new XMLDocument2();
doc.parseXML(xmlString);
var parent = doc.getNode('/items');
var it = parent.getChildNodeIterator();
while (it.hasNext()) {
    var node = it.next();
    gs.info(node.getNodeName() + ': ' + node.getTextContent());
}
```

Typical pattern: iterate through matching nodes, extracting values from each. Request a new child-node iterator when starting a new traversal.
