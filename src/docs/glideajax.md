---
title: GlideAjax
description: Using GlideAjax can be difficult, here's how I get started.
layout: libdoc_page.liquid
eleventyNavigation:
    key: GlideAjax
    parent: Docs
date: git Last Modified
---

When using GlideAjax I have to always look up the example on the wiki. One thing that I’ve learned is if you create a initialize function, it will break the client-callable script include.

Every GlideAjax call has at least two components required. The script include and the client side script.

Below I’ll put down a simple example of how I start up on these things.

## Reasons your GlideAjax might not work

1. You didn't make the Script Include client-callable
2. You added a function to your Script Include called;
  - initialize
  - process
  - newItem
  - getParameter
  - getDocument
  - getRootElement
  - getName
  - getValue
  - getType
  - getChars
  - setAnswer
  - setError
3. You forgot to `return` something from your Script Include's function
4. You returned an object from your Script Include's function instead of a string
5. You didn't use `global.SomeUtil` or `scopedName.SomeUtil` to call your Script Include

## Code

```javascript
var SomeUtil = Class.create();
SomeUtil.prototype = Object.extendsObject(AbstractAjaxProcessor, {
    // If you want to use initialize you can only if you include
    // AbstractAjaxProcessor with something like this;
    /*
    initialize: function(request, responseXML, gc) {
        global.AbstractAjaxProcessor.prototype.initialize.call(this, request, responseXML, gc);
        // Your code
    },
    */
    awesomeFunction: function(){
        var inputObj = JSON.parse(this.getParameter('sysparm_obj'));
        var returnObj = {
            from:"server",
            input: inputObj
        };
        return JSON.stringify(returnObj);
    },
    type: 'SomeUtil'
});
```

```javascript
var ga = new GlideAjax('global.SomeUtil');
ga.addParam('sysparm_name', 'awesomeFunction');
ga.addParam('sysparm_obj', JSON.stringify({"hoo":"raa"}));
ga.getXML(function(response){
    var responseDocument = response.responseXML.documentElement;
    var answer = responseDocument.getAttribute('answer');
    var serverObj = JSON.parse(answer);
    console.log(serverObj);
});
```