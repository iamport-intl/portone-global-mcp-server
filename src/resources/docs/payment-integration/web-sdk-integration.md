---
url: "https://docs.portone.cloud/docs/web-sdk-integration"
title: "Web Integration"
---

## What is a Web SDK?   [Skip link to What is a Web SDK?](https://docs.portone.cloud/docs/web-sdk-integration\#what-is-a-web-sdk)

A Web SDK (Software Development Kit) allows developers to easily integrate payment services into their websites or applications, enabling a seamless payment experience for users.

## What does PortOne provide in its Web SDK?   [Skip link to What does PortOne provide in its Web SDK?](https://docs.portone.cloud/docs/web-sdk-integration\#what-does-portone-provide-in-its-web-sdk)

PortOne offers two main options in its Web SDK:

- **Payment Service**: Ideal for large apps needing complex, branded checkouts, with full control over the payment flow.
- **Checkout Service**: A pre-built, hosted solution for simpler apps requiring quick integration and a fast setup.

### Overview of Web SDK Options   [Skip link to Overview of  Web SDK Options](https://docs.portone.cloud/docs/web-sdk-integration\#overview-of--web-sdk-options)

|  | **Payment Service** | **Checkout Service** |
| --- | --- | --- |
| **Checkout Type** | **Merchant’s checkout** | **PortOne’s pre-built checkout** |
| **Ideal For** | Complex, branded checkouts | Quick, simple integrations |
| **Payment Flow** | Native in-app experience | Hosted Checkout experience |
| **Use Case** | Large apps with unique needs | Simple apps needing fast setup |
| **Customization** | Full control | Possible |

* * *

> ## 📘  Note
>
> 1. Both `Sandbox` and `Production` mode integration can be managed via the same APIs and same account on the PortOne platform.
> 2. Please refer following instructions to use the appropriate `environment` flags while integration.

### Embed Script   [Skip link to Embed Script](https://docs.portone.cloud/docs/web-sdk-integration\#embed-script)

Embed the following JS snippet in your Checkout UI

#### Setup details   [Skip link to Setup details](https://docs.portone.cloud/docs/web-sdk-integration\#setup-details)

For integration embed the following scripts in your Checkout UI code.

JavaScript

```rdmd-code lang-javascript theme-light

<script src="https://static.portone.cloud/portone.js"></script>

```

> ## 📘  Tip
>
> Refer to [Payment channels](https://docs.portone.cloud/docs/payment-channels) to check the extensive list of available Payment Channels & Payment Methods for Integration in your country.

* * *

#### Environment Flag   [Skip link to Environment Flag](https://docs.portone.cloud/docs/web-sdk-integration\#environment-flag)

Pass the `environment` flag in above payload. Environment is the mandatory field, by default the value of environment is `sandbox` while initiating payment.

**Production**

JavaScript

```rdmd-code lang-javascript theme-light

    "environment": "live"

```

**Sandbox**

JavaScript

```rdmd-code lang-javascript theme-light

    "environment": "sandbox"

```

Updated7 months ago

* * *

Did this page help you?

Yes

No

![Help](https://cdn.jsdelivr.net/gh/iamport-intl/portone-devx-chatbot-widget@production/public/chat-intro1.svg)