---
url: "https://docs.portone.cloud/docs/till-payments"
title: "Till Payments"
---

# Till Payments Integration   [Skip link to Till Payments Integration](https://docs.portone.cloud/docs/till-payments\#till-payments-integration)

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/till-payments\#introduction)

Till Payments is a global fintech company that provides an all-in-one payments platform designed to simplify payment processes for businesses. Their services enable merchants to accept payments online, in-store, or via mobile channels, offering a seamless and unified experience across various payment methods.

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/till-payments\#supported-countries)

- Australia 🇦🇺

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/till-payments\#available-payment-methods)

Till Payment supports AUD currency.

| Payment Type | Payment Method Key | Integration Status | Refund Supported | Sandbox Availability |
| --- | --- | --- | --- | --- |
| Credit/Debit Card | `TILL_PAYMENT_CREDIT_CARD` | ✅ | ✅ | ✅ |

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/till-payments\#sandbox)

Use the following credentials for sandbox mode:

| Key | Value |
| --- | --- |
| Api Key | AiNgOwltaAPnE8ivQFn5Iqn4QqY4nj |
| Password | W?ZO/Tq.c\_5gVVp06QW2OQ@C!Sc#Z |
| Shared Secret | Ldh33cEotLy2g8zSWzbSYnrPjuoqHL |
| Username | PortOne\_API\_Dev |

* * *

#### Use following values in embedded JS code to pay via Global Payments channe   [Skip link to Use following values in embedded JS code to pay via Global Payments channe](https://docs.portone.cloud/docs/till-payments\#use-following-values-in-embedded-js-code-to-pay-via-global-payments-channe)

Text

```rdmd-code lang-text theme-light

    "pmt_channel": "TILL_PAYMENT",
    "pmt_method": { Any of above given payment method keys },

```

* * *

### Reference links   [Skip link to Reference links](https://docs.portone.cloud/docs/till-payments\#reference-links)

- [API Docs](https://gateway.tillpayments.com/documentation/json-direct-pci-enabled-api?json#transactionwithcard-request-basic-scheme)
- [Test Cards](https://gateway.tillpayments.com/documentation/connectors)

Updated8 months ago

* * *

Did this page help you?

Yes

No

![Help](https://cdn.jsdelivr.net/gh/iamport-intl/portone-devx-chatbot-widget@production/public/chat-intro1.svg)