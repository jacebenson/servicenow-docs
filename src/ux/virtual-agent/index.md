---
title: Virtual Agent
description: TODO:FIXME
layout: libdoc_page.liquid
# eleventyNavigation:
#     key: Virtual Agent
#     parent: User Experiences
date: git Last Modified
---

Virtual Agent is ServiceNow's conversational AI platform. It lets you build chatbots that handle service requests through natural language conversations — a user types "I need a new laptop" and the bot walks them through catalog selection, approval, and fulfillment without ever opening a form.

Virtual Agent runs on **topics** (conversation flows built in Flow Designer), **NLU** (natural language understanding to interpret what users mean), and **conversation channels** (web, mobile, Slack, Teams, etc.).

The platform now also supports **Now Assist for Virtual Agent**, which brings generative AI to conversations — summarization, suggested replies, and LLM-driven topic discovery.

## Key Concepts

- **Topics** — The conversation flows that define how a bot handles a specific request. Built in Flow Designer, topics have a trigger, conversation steps, and resolution.
- **NLU Models** — Natural language models that map user utterances (what they type) to topics and entities (what they're talking about). ServiceNow provides pre-built models and you can train your own.
- **Channels** — Where the conversation happens. Web chat, mobile app, Microsoft Teams, Slack, WhatsApp, and custom channels via the conversation API.
- **Now Assist** — Generative AI integration for Virtual Agent. Automated topic creation from knowledge articles, conversation summarization, and LLM-powered responses.

## Topics vs. Traditional Automation

| Aspect | Virtual Agent | Traditional |
|---|---|---|
| Trigger | User intent (NLU) | Form submission, record action |
| Flow | Conversation branches | Linear process |
| State | Session-scoped | Transaction-scoped |
| Output | Answer or ticket | Database record |

## Further Reading

- [Docs - Virtual Agent](https://www.servicenow.com/docs/csh?topicname=virtual-agent-landing-page.html&version=latest)
- [Maik Skoddow - Virtual Agent](https://www.servicenow.com/community/virtual-agent-articles/platform-virtual-agent-knowledge-amp-troubleshooting/ta-p/2324281)
