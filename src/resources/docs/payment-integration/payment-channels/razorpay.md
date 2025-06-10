---
url: "https://docs.portone.cloud/docs/razorpay"
title: "Razorpay"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/razorpay\#introduction)

Razorpay is a comprehensive payment gateway that enables businesses to accept and process payments through various methods, including credit/debit cards, UPI, and net banking.

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/razorpay\#supported-countries)

- India in

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/razorpay\#available-payment-methods)

Razorpay currently only supports INR currency.

| Payment Type | Payment Method Key | Integration Status | Refund Supported | Sandbox Availability |
| --- | --- | --- | --- | --- |
| Cards, UPI, Wallets, Net Banking | `RAZORPAY_ALL` | ✅ | ✅ | ✅ |

### Miscellaneous Details   [Skip link to Miscellaneous Details](https://docs.portone.cloud/docs/razorpay\#miscellaneous-details)

- Doesn't support API flow (only web flow is supported)
- Webhooks are source of truth for razorpay. Make sure

* * *

### Webhooks Configuration   [Skip link to Webhooks Configuration](https://docs.portone.cloud/docs/razorpay\#webhooks-configuration)

To ensure we never miss important payment events and to reconcile payments reliably, you must configure webhooks in the Razorpay Dashboard. Webhooks act as your source of truth for payment state changes (e.g. captures, failures, refunds) and are mandatory for a robust, production-ready integration.

#### 1\. Navigate to Webhooks in Dashboard   [Skip link to 1. Navigate to Webhooks in Dashboard](https://docs.portone.cloud/docs/razorpay\#1-navigate-to-webhooks-in-dashboard)

1. Log in to your Razorpay Dashboard
2. Go to **Accounts & Settings**
3. Click **Webhooks** under **Website and App Settings**

#### 2\. Add a New Webhook Endpoint   [Skip link to 2. Add a New Webhook Endpoint](https://docs.portone.cloud/docs/razorpay\#2-add-a-new-webhook-endpoint)

- **Click**: `+ Add New Webhook`
- **Webhook URL**: Your public HTTPS endpoint (e.g. `https://dev-api.portone.cloud/webhook/razorpay/YOUR_PORTONE_KEY`)
- **Secret**: A strong, unguessable string (could be your `PORTONE_SECRET`)
- **Alert Email**: Email address to receive failure/deactivation alerts

#### 3\. Select Events to Subscribe   [Skip link to 3. Select Events to Subscribe](https://docs.portone.cloud/docs/razorpay\#3-select-events-to-subscribe)

At a minimum, subscribe to the following events:

- `payment.captured` – when a payment succeeds and the amount is captured
- `payment.failed` – when a payment attempt fails
- `refund.processed` – when a refund is successfully issued
- _(Optional)_ `payment.refunded` – for partial or full refund notifications

Razorpay Webhook Docs: [Link](https://razorpay.com/docs/webhooks/)

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/razorpay\#sandbox)

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/razorpay\#credentials)

- Create a account from [razorpay](https://dashboard.razorpay.com/) website
- Get key id and key secret from [settings -> api-keys](https://dashboard.razorpay.com/app/website-app-settings/api-keys)

| Key | Value |
| --- | --- |
| **Key Id** |  |
| **Key Secret** |  |

* * *

#### Use following values in embedded JS code to pay via Global Payments channel   [Skip link to Use following values in embedded JS code to pay via Global Payments channel](https://docs.portone.cloud/docs/razorpay\#use-following-values-in-embedded-js-code-to-pay-via-global-payments-channel)

Text

```rdmd-code lang-text theme-light

    "pmt_channel": "RAZORPAY",
    "pmt_method": "RAZORPAY_ALL",

```

* * *

### Reference links   [Skip link to Reference links](https://docs.portone.cloud/docs/razorpay\#reference-links)

- [API Docs](https://razorpay.com/docs/#home-payments)
- [Test Cards](https://razorpay.com/docs/payments/payments/test-card-details/)
- [Test UPI](https://razorpay.com/docs/payments/payments/test-upi-details/)

Updated18 days ago

* * *

Did this page help you?

Yes

No

![Help](https://cdn.jsdelivr.net/gh/iamport-intl/portone-devx-chatbot-widget@production/public/chat-intro1.svg)