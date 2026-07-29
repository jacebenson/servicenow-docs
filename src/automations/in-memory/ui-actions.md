---
title: UI Actions
description: When you just need a button
layout: libdoc_page.liquid
eleventyNavigation:
    parent: In Memory
    key: UI Actions
    order: 2700
date: git Last Modified
---

[Docs](https://www.servicenow.com/docs/csh?topicname=c_UIActions.html&version=latest)

UI actions are strange because they can be both client callable and server callable. What do I mean by that I mean you can have a UI action a button or link that does just client side stuff you can have another UI action that does just server side stuffyou can have a third action that does both client and server side stuff.

Because of thisthese run in memory on the client and on the server.  Depending on the UI you're working in they also need to be called differently for instance in workspace they have a whole different script field versus in core UI.

To run this code server side you need the check for the presence of window if window doesn't exist its running server side.

[Mark Stanger has a great post about this, "Client & Server Code in One UI Action"](https://servicenowguru.com/ui-actions-system-ui/client-server-code-ui-action/) that's over a decade old.

## Additional Resources

[📄 - Maik Skoddow - Useful UI Actions](https://www.servicenow.com/community/developer-articles/my-collected-list-of-useful-ui-actions/ta-p/2911821)