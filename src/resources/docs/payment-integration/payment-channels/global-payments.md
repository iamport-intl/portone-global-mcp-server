---
url: "https://docs.portone.cloud/docs/global-payments"
title: "Global Payments"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/global-payments\#introduction)

Global Payments Inc. (NYSE: GPN) is a leading worldwide provider of payment and commerce technology solutions. Our

technologies, partnerships and employee expertise enable us to provide a broad range of products and services in markets

around the world. This local expertise and global scale enables Global Payments Oceania to deliver market-leading

technology solutions through our five regional brands - Class Creator, Eway, Ezidebit, Sentral and Storman.

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/global-payments\#supported-countries)

- Australia 🇦🇺

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/global-payments\#available-payment-methods)

GlobalPayments currently only supports AUD currency.

| Payment Type | Payment Method Key | Integration Status | Refund Supported | Sandbox Availability |
| --- | --- | --- | --- | --- |
| Credit/Debit Card | `GLOBAL_PAYMENTS_CREDIT_CARD` | ✅ | ✅ | ❌ |
| PayTo | `GLOBAL_PAYMENTS_PAYTO` | ✅ | ✅ | ❌ |

* * *

### Miscellaneous Details   [Skip link to Miscellaneous Details](https://docs.portone.cloud/docs/global-payments\#miscellaneous-details)

- Name is a required field
- Email is a required field
- Phone is a required field

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/global-payments\#sandbox)

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/global-payments\#credentials)

- This integration does not support sandbox mode.

* * *

#### Use following values in embedded JS code to pay via Global Payments channel   [Skip link to Use following values in embedded JS code to pay via Global Payments channel](https://docs.portone.cloud/docs/global-payments\#use-following-values-in-embedded-js-code-to-pay-via-global-payments-channel)

Text

```rdmd-code lang-text theme-light

    "pmt_channel": "GLOBAL_PAYMENTS",
    "pmt_method": { Any of above given payment method keys },

```

* * *

### Reference links   [Skip link to Reference links](https://docs.portone.cloud/docs/global-payments\#reference-links)

- [API Docs](https://docs.gpaunz.com/docs/api)

Updated4 months ago

* * *

Did this page help you?

Yes

No

![Help](https://cdn.jsdelivr.net/gh/iamport-intl/portone-devx-chatbot-widget@production/public/chat-intro1.svg)