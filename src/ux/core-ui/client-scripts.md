---
title: Client Scripts
description: The OG way to control a form
layout: libdoc_page.liquid
eleventyNavigation:
    key: Client Scripts
    parent: Core UI
date: git Last Modified
---

Client scripts have existed since ServiceNow has existed.

Before UI policies and data policies the only control you had was client scripts and business rules.

That means that let's talk about the different types of client scripts

1. onLoad
2. onChange
3. onSubmit
4. onCellEdit

## onLoad

Onload client scripts are great you can do a lot of stuff with themmost time people just set default values based on other client attributes or client side stuffbut one thing people can do that they don't often is add extra behaviors like on blur effects.

## onChange

Unchange client scripts are a little weird they actually run on load as wellbut they trigger when the variable named changesit doesn't trigger when somebody types a character into that field but when they change it and then tab away or click away from it.

## onSubmit

Onsmith client scripts is the best way to restrict the ability to submit a form without submitting the formgiving the user immediate feedback that something is wrong and they need to change it.

## onCellEdit

On cell edited client scriptsare less common and they're only used when people make changes to recordsfrom a list view
