---
url: "https://docs.portone.cloud/docs/linepay"
title: "LinePay"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/linepay\#introduction)

LinePay is a convenient smartphone payment service. Follow this guide to integrate LinePay acceptance on your mobile app or website.

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/linepay\#supported-countries)

- Taiwan 🇹🇼
- Thailand 🇹🇭

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/linepay\#available-payment-methods)

LinePay supports THB, TWD currency.

| Payment Type | Payment Method Key | Currency | Status | Sandbox Availability |
| --- | --- | --- | --- | --- |
| Line Pay | `LINEPAY_WALLET` | THB, TWD | ✅ | ✅ |

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/linepay\#sandbox)

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/linepay\#credentials)

| Country | channelID | channelSecretKey |
| --- | --- | --- |
| Taiwan | 2002189677 | ba9805e4751487cd2e84ea7c51672ff4 |
| Thailand | 1656615655 | cfb61b1c999aa6cfaff6ff800d19f6f2 |

* * *

#### Use following values in embedded JS code to pay via LinePay channel   [Skip link to Use following values in embedded JS code to pay via LinePay channel](https://docs.portone.cloud/docs/linepay\#use-following-values-in-embedded-js-code-to-pay-via-linepay-channel)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "LINEPAY",
    "pmt_method": { Any of above given payment method keys },

```

* * *

### Reference links   [Skip link to Reference links](https://docs.portone.cloud/docs/linepay\#reference-links)

- [LinePay Integration guide](https://pay.line.me/tw/developers/apis/onlineApis?locale=en_US)

Updated8 months ago

* * *

Did this page help you?

Yes

No

![Help](https://cdn.jsdelivr.net/gh/iamport-intl/portone-devx-chatbot-widget@production/public/chat-intro1.svg)