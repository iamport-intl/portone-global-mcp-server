---
url: "https://docs.portone.cloud/docs/webhook-configuration"
title: "Webhooks"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/webhook-configuration\#introduction)

Webhooks are a crucial tool for receiving real-time updates about payment-related events directly from PortOne's system. The webhook notifies your server about successful payments, failed transactions, refunds, etc, enabling your system to respond appropriately.

Webhooks eliminate the need to constantly poll PortOne for status updates, providing real-time notifications when key payment events occur.

### How Webhooks Work   [Skip link to How Webhooks Work](https://docs.portone.cloud/docs/webhook-configuration\#how-webhooks-work)

1. **Payment Event Occurs**: A payment-related event (such as payment success or failure) occurs in the payment system.
2. **Webhook is Triggered**: The payment service sends an HTTP request (typically POST) to your predefined webhook endpoint with details of the event.
3. **Receive and Process**: Your server receives the webhook payload, processes the event data, and responds with a confirmation (e.g., 200 OK).
4. **Take Action**: Based on the webhook payload, your system can take actions such as updating the payment status, notifying users, or triggering business logic.

* * *

### Webhook Configuration   [Skip link to Webhook Configuration](https://docs.portone.cloud/docs/webhook-configuration\#webhook-configuration)

- Create a webhook endpoint on your server with POST method.
- Register the webhook endpoint on PortOne Merchant portal in **Settings > Webhooks** section. Refer below for a step by step guide on how to configure a webhook on Port One Merchant portal.

Scribe \| Embed Set\_Up\_Payment\_Status\_Webhook\_in\_Portone\_\_4VuAOtTYQNyr2Xh8\_8nsGw

![backdrop](https://scribehow.com/images/embedBackdrop.svg)

![Portone logo](https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://portone.cloud&size=64)

![](https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://portone.cloud&size=64)

# Configuring a webhook in PortOne

11 Steps

43 seconds

![Portone](https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://portone.cloud&size=64)Portone

Step 0 of 11

Get Started

Made with
![Scribe](https://scribehow.com/images/logo-slate.svg)

[open scrolling step version in new tab for improved accessibility](https://scribehow.com/shared/Configuring_a_webhook_in_PortOne__4VuAOtTYQNyr2Xh8_8nsGw)

### PortOne Webhooks   [Skip link to PortOne Webhooks](https://docs.portone.cloud/docs/webhook-configuration\#portone-webhooks)

Currently following webhook types are supported on PortOne

1. **Payment Webhook**: Triggered when the payment's status changes. Refer [Payment Webhook](https://docs.portone.cloud/docs/payment-webhook) section for more information.
2. **Refund Webhook**: Triggered when the refund's status changes. Refer [Refund Webhook](https://docs.portone.cloud/docs/refund-webhook) section for more information.
3. **Payment Link Webhook**: Triggered when the payment link's status changes. Refer [Payment Link Webhook](https://docs.portone.cloud/docs/payment-link-webhook) section for more information.
4. **Subscription Link Webhook**: Triggered when a subscription link's status changes. Refer [Subscription Link Webhook](https://docs.portone.cloud/docs/subscription-link-webhook) section for more information.
