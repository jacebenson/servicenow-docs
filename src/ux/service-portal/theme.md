---
title: Theme
description: Custom themes for Service Portal when Branding Editor isn't enough
layout: libdoc_page.liquid
eleventyNavigation:
    key: Theme
    parent: Service Portal
date: git Last Modified
tags: []
---

[Docs](https://www.servicenow.com/docs/csh?topicname=c_BrandingEditor.html&version=latest)

Create custom themes at **Service Portal > Themes** when you need more control than the Branding Editor provides.

## What a Theme Controls

- Header/Footer widgets (from `sp_header_footer`)
- CSS variables and includes
- JS includes
- Fixed header/footer positioning

## Quick Setup

1. Create theme at **Service Portal > Themes > New**
2. Set CSS variables (colors, spacing)
3. Add CSS/JS includes via related lists
4. Apply theme to your portal

## CSS Includes

Attach stylesheets to your theme:

| Source | Use Case |
|--------|----------|
| Style Sheet | Internal CSS from `sp_css` table |
| URL | External stylesheets (CDN, corporate sites) |

## SCSS Support

- **CSS variables field**: Define variables only (`$sp-logo-margin-x: 15px !default;`)
- **CSS Includes**: Define rules (supports Sass/LESS as of Madrid)

## Note on Lazy Loading

Enable lazy load on CSS includes to improve performance, but only if your portal doesn't have FOUC (flash of unstyled content) issues. Apply consistently to all CSS includes in the theme.