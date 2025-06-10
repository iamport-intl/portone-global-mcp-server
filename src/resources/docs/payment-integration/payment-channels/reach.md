---
url: "https://docs.portone.cloud/docs/reach"
title: "Reach"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/reach\#introduction)

Reach is a Merchant of Record that helps you scale in international markets, reduce risk and complexity, increase conversions and lower fees.

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/reach\#supported-countries)

- Global 🌏
- Netherlands 🇳🇱

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/reach\#available-payment-methods)

| Payment Method Key | Currency | Status | Sandbox Availability |
| --- | --- | --- | --- |
| `REACH_CREDIT_CARD` | AED, AUD, CAD, EUR, GBP, IDR, INR, JPY, KRW, MYR, PHP, SGD, THB, USD, VND, ZAR, SAR, PEN, KWD, HKD, MXN, NOK, NZD, SEK, DKK, CHF, PLN, KZT, COP, BHD, OMR, RON, HUF, TRY, ARS, TWD, EGP, TZS, BRL, CZK, CLP, ILS, CNY, QAR, ISK, XPF, AWG, XCD, BMD, CRC, XOF, TTD, JEP, KHR, BGN, JOD, GEL, IQD, DOP, MVR, KYD, SCR, MUR | ✅ | ✅ |
| `REACH_IDEAL` | EUR | ✅ | ✅ |

* * *

### Miscellaneous Details   [Skip link to Miscellaneous Details](https://docs.portone.cloud/docs/reach\#miscellaneous-details)

- For Reach, the **Customer's Name**, **Email**, **Address** and **Order details** are required.
- Refunds can be initialized from the merchant portal, refund status can be checked at both merchant portal and Reach Dashboard
- For Reach **iDEAL** payment method, the supported countries are **Netherlands(NL)**

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/reach\#sandbox)

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/reach\#credentials)

| Key | Value |
| --- | --- |
| MerchantId | 3da24c22-be6d-4ad1-a130-97b3aebca04b |
| SecretKey | CqB5wFDFJoYD8jz1x8MK3nbTkPr9n88r99dRhhsMFmrkUqhSvpm6ef06HPdSqmsV |

#### [Reach sandbox dashboard](https://admin.rch.how/)   [Skip link to [object Object]](https://docs.portone.cloud/docs/reach\#reach-sandbox-dashboard)

#### [Test cards](https://docs.google.com/spreadsheets/d/1lfshnTX0KWswf1PX9GUDYW99nnqtUtdZxCMrPpesZok/edit?usp=sharing)   [Skip link to [object Object]](https://docs.portone.cloud/docs/reach\#test-cards)

#### Use following values in embedded JS code to pay via Reach channel   [Skip link to Use following values in embedded JS code to pay via Reach channel](https://docs.portone.cloud/docs/reach\#use-following-values-in-embedded-js-code-to-pay-via-reach-channel)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "REACH",
    "pmt_method": { Any of above given payment method keys },

```

* * *

### Reference links   [Skip link to Reference links](https://docs.portone.cloud/docs/reach\#reference-links)

- [API Reference](https://docs.withreach.com/docs)

Updated8 months ago

* * *

Did this page help you?

Yes

No

![Help](https://cdn.jsdelivr.net/gh/iamport-intl/portone-devx-chatbot-widget@production/public/chat-intro1.svg)