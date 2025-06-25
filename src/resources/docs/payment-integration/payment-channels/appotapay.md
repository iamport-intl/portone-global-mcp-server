---
url: "https://docs.portone.cloud/docs/appotapay"
title: "AppotaPay"
---

# AppotaPay Integration   [Skip link to AppotaPay Integration](https://docs.portone.cloud/docs/appotapay\#appotapay-integration)

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/appotapay\#introduction)

AppotaPay Payment Platform is the platform for online or offline payment solutions for business. Give your customers flexibility to pay the way they want, including: Appota Wallet Balance, ATM Bank Card, Card Visa / Master Card. They provide many platforms: Desktop Website, Desktop Application, Mobile Website, Mobile Application

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/appotapay\#supported-countries)

- Vietnam 🇻🇳

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/appotapay\#available-payment-methods)

AppotaPay PG only supports VND(₫) currency. The Credit Card method supports USD($) currency.

| Payment Type | Payment Method Key | Integration Status | Partial Refunds | Sandbox Availability |
| --- | --- | --- | --- | --- |
| Local ATM Card | `APPOTAPAY_ATM_CARD` | ✅ | ❌ | ✅ |
| Credit Card | `APPOTAPAY_CREDIT_CARD` | ✅ | ❌ | ✅ |
| Woori Bank Virtual Account | `APPOTAPAY_VA_WOORI` | ✅ | ❌ | ✅ |
| Viet Capital Bank Virtual Account | `APPOTAPAY_VA_VIETCAPITAL` | ✅ | ❌ | ✅ |
| AppotaPay Wallet | `APPOTAPAY_APPOTA_WALLET` | ✅ | ❌ | ❌ |
| Moca GrabPay Wallet | `APPOTAPAY_MOCA_WALLET` | ✅ | ❌ | ❌ |
| VNPT Pay Wallet | `APPOTAPAY_VNPT_WALLET` | ✅ | ❌ | ❌ |
| ShopeePay Wallet | `APPOTAPAY_SHOPEEPAY_WALLET` | ✅ | ❌ | ❌ |
| MomoPay Wallet | `APPOTAPAY_MOMO_WALLET` | ✅ | ❌ | ✅ |
| Zalopay Wallet | `APPOTAPAY_ZALO_WALLET` | ✅ | ❌ | ✅ |
| Mobile Money | `APPOTAPAY_MOBILE_MONEY` | ✅ | ❌ | ❌ |
| Kredivo BNPL | `APPOTAPAY_KREDIVO` | ✅ | ❌ | ✅ |
| REEPAY\_BNPL | `APPOTAPAY_REEPAY` | ✅ | ❌ | ✅ |
| All methods | `APPOTAPAY_ALL` | ✅ | ❌ | ✅ |

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/appotapay\#sandbox)

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/appotapay\#credentials)

| Key | Value |
| --- | --- |
| partnerCode | APPOTAPAY |
| apiKey | FJcmF8uj2ISveL5FvvNk4pnp8xrhINz8 |
| secretKey | XAonJgy14YhtePEITXhyBS2unjfJLAV3 |

* * *

[AppotaPay Dashboard](https://partner.appotapay.com/login)

* * *

#### Test cards data   [Skip link to Test cards data](https://docs.portone.cloud/docs/appotapay\#test-cards-data)

| Type | Bank | Card number | Name | Valid through | CVV/OTP |
| --- | --- | --- | --- | --- | --- |
| Credit Card | VISA | 4220 7600 0990 0010 | - | 03/27 | 123 |
| Credit Card | VISA | 4244 7000 0990 0010 | - | 03/27 | 123 |
| Credit Card | VISA | 4249 4600 0990 0010 | - | 03/27 | 123 |
| Credit Card | VISA | 4440 0000 0990 0010 | - | 03/27 | 123 |

* * *

#### Use following values in embedded JS code to pay via AppotaPay channel   [Skip link to Use following values in embedded JS code to pay via AppotaPay channel](https://docs.portone.cloud/docs/appotapay\#use-following-values-in-embedded-js-code-to-pay-via-appotapay-channel)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "APPOTAPAY",
    "pmt_method": { Any of above given payment method keys },

```

* * *

### Reference links   [Skip link to Reference links](https://docs.portone.cloud/docs/appotapay\#reference-links)

- [Appotapay Integration guide](https://docs.appotapay.com/en/)