---
url: "https://docs.portone.cloud/docs/portone-korea"
title: "PortOne Korea"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/portone-korea\#introduction)

PortOne, is building a fintech ecosystem with the world's leading companies. PortOne is building a new infrastructure of digital payments with a wide range of payment products.

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/portone-korea\#supported-countries)

- Global 🌏
- Korea 🇰🇷
- Japan 🇯🇵

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/portone-korea\#available-payment-methods)

| Payment Type | Payment Method Key | Status | Sandbox Availability | Currency |
| --- | --- | --- | --- | --- |
| Credit Card | `PORTONE_KG_INICIS_CREDIT_CARD` | ✅ | ✅ | KRW |
| Credit Card | `PORTONE_TOSS_CREDIT_CARD` | ✅ | ✅ | KRW |
| Credit Card | `PORTONE_KCP_CREDIT_CARD` | ✅ | ✅ | KRW |
| Credit Card | `PORTONE_NICE_CREDIT_CARD` | ✅ | ✅ | KRW |
| Credit Card | `PORTONE_TOSSPAYMENTS_CREDIT_CARD` | ✅ | ✅ | KRW |
| Credit Card | `PORTONE_NICE_V2_CREDIT_CARD` | ✅ | ✅ | KRW |
| Credit Card | `PORTONE_EXIMBAY_CREDIT_CARD_KRW` | ✅ | ✅ | KRW |
| Credit Card | `PORTONE_PAYMENTWALL_CREDIT_CARD` | ✅ | ✅ | USD, KRW, JPY, EUR, RUB, HKD, AUD, GBP, CAD, THB, TWD, SGD |
| Credit Card | `PORTONE_EXIMBAY_CREDIT_CARD` | ✅ | ✅ | USD, EUR, JPY, SGD, AUD, HKD, THB, GBP, CAD, RUB, TWD, MYR, VND, PHP, MNT, NZD, AED, MOP, BRL, KZT, NOK, SAR, TRY |
| Credit Card | `PORTONE_KCP_KEY_IN_CREDIT_CARD` | ✅ | ❌ | KRW |
| Wallet | `PORTONE_NAVERPAY` | ✅ | ❌ | KRW |
| Wallet | `PORTONE_KCP_NAVERPAY` | ✅ | ❌ | KRW |
| Wallet | `PORTONE_NICE_NAVERPAY ` | ✅ | ❌ | KRW |
| Wallet | `PORTONE_NICE_V2_NAVERPAY ` | ✅ | ❌ | KRW |
| Wallet | `PORTONE_KG_INICIS_NAVERPAY` | ✅ | ✅ | KRW |
| Wallet | `PORTONE_TOSSPAYMENTS_NAVERPAY` | ✅ | ✅ | KRW |
| Wallet | `PORTONE_NICE_KAKAOPAY ` | ✅ | ❌ | KRW |
| Wallet | `PORTONE_NICE_V2_KAKAOPAY ` | ✅ | ❌ | KRW |
| Wallet | `PORTONE_KG_INICIS_KAKAOPAY` | ✅ | ✅ | KRW |
| Wallet | `PORTONE_TOSSPAYMENTS_KAKAOPAY` | ✅ | ✅ | KRW |
| Wallet | `PORTONE_KAKAOPAY` | ✅ | ✅ | KRW |
| Wallet | `PORTONE_KCP_KAKAOPAY` | `✅` | `    ❌` | KRW |
| Wallet | `PORTONE_PAYCO` | ✅ | ✅ | KRW |
| Wallet | `PORTONE_KG_INICIS_PAYCO` | ✅ | ✅ | KRW |
| Wallet | `PORTONE_TOSSPAYMENTS_PAYCO` | `✅` | `    ❌` | KRW |
| Wallet | `PORTONE_TOSSPAY` | ✅ | ✅ | KRW |
| Wallet | `PORTONE_KG_INICIS_TOSSPAY` | ✅ | ✅ | KRW |
| Wallet | `PORTONE_EXIMBAY_ALIPAY` | ✅ | ✅ | KRW,USD |
| Bank Transfer | `PORTONE_PAYMENTWALL_PAYEASY` | ✅ | ❌ | JPY |
| Bank Transfer | `PORTONE_TOSS_BANK_TRANSFER` | ✅ | ✅ | KRW |
| Bank Transfer | `PORTONE_TOSSPAYMENTS_BANK_TRANSFER` | ✅ | ✅ | KRW |
| OTC | `PORTONE_EXIMBAY_ECONTEXT` | ✅ | ✅ | JPY |
| Wallet | `PORTONE_KCP_TOSSPAYMENTS` | ✅ | ❌ | KRW |
| Bank Transfer | `PORTONE_KCP_BANK_TRANSFER` | ✅ | ❌ | KRW |
| Wallet | `PORTONE_KCP_SAMSUNGPAY` | ✅ | ❌ | KRW |
| Wallet | `PORTONE_KCP_APPLEPAY` | ✅ | ❌ | KRW |
| Wallet | `PORTONE_KCP_PAYCO` | ✅ | ❌ | KRW |

* * *

### Refund Details   [Skip link to Refund Details](https://docs.portone.cloud/docs/portone-korea\#refund-details)

- Refunds can be initialized from the merchant portal
- Refunds are not supported for Payeasy Bank Transfers and eContext payment methods.

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/portone-korea\#sandbox)

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/portone-korea\#credentials)

| Key | Value |
| --- | --- |
| Api Key | 2411015418257502 |
| Api Secret | TNNdmjaXUDLKvXEH0bW7XSFRW4GW33yULW2ZYhE3LxSZDVeuYEWyw5F9VFkfQxKk9dLwiN88BqtwLr6x |
| Merchant Id | imp00138464 |

* * *

[Dashboard](https://admin.portone.io/)

* * *

#### Use following values in embedded JS code to pay via I'mport channel   [Skip link to Use following values in embedded JS code to pay via I'mport channel](https://docs.portone.cloud/docs/portone-korea\#use-following-values-in-embedded-js-code-to-pay-via-import-channel)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "PORTONE_KR",
    "pmt_method": { Any of above given payment method keys },

```

* * *

### Reference links   [Skip link to Reference links](https://docs.portone.cloud/docs/portone-korea\#reference-links)

- [Integration guide](https://portone.gitbook.io/docs/)
