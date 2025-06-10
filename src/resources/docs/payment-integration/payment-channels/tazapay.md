---
url: "https://docs.portone.cloud/docs/tazapay"
title: "Tazapay"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/tazapay\#introduction)

Tazapay is a global payments platform enabling companies to seamlessly do cross-border payments. Follow this guide to integrate Tazapay Payment Gateway.

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/tazapay\#supported-countries)

- Global 🌏

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/tazapay\#available-payment-methods)

| Payment Method Key | Currency | Status | Sandbox Availability |
| --- | --- | --- | --- |
| `TAZAPAY_ALL` | AED, ARS, AUD, BDT, BGN, BHD, BND, BOB, BRL, CAD, CHF, CLP, CNY, COP, CRC, DKK, EGP, EUR, GBP, GHS, HKD, HUF, IDR, ILS, INR, ISK, JOD, JPY, KES, KHR, KRW, KWD, LAK, LKR, MAD, MMK, MXN, MYR, NGN, NOK, NPR, NZD, OMR, PEN, PHP, PKR, PLN, PYG, QAR, RON, RWF, SAR, SEK, SGD, THB, TRY, TWD, TZS, UAH, UGX, USD, VND, ZAR | ✅ | ✅ |
| `TAZAPAY_CREDIT_CARD` | AED, ARS, AUD, BDT, BGN, BHD, BND, BOB, BRL, CAD, CHF, CLP, CNY, COP, CRC, DKK, EGP, EUR, GBP, GHS, HKD, HUF, IDR, ILS, INR, ISK, JOD, JPY, KES, KHR, KRW, KWD, LAK, LKR, MAD, MMK, MXN, MYR, NGN, NOK, NPR, NZD, OMR, PEN, PHP, PKR, PLN, PYG, QAR, RON, RWF, SAR, SEK, SGD, THB, TRY, TWD, TZS, UAH, UGX, USD, VND, ZAR | ✅ | ✅ |
| `TAZAPAY_PAYNOW` | SSGD | ✅ | ❌ |
| `TAZAPAY_FPX` | MYR | ✅ | ❌ |
| `TAZAPAY_POLI` | NZD | ✅ | ✅ |
| `TAZAPAY_BANCONTACT` | EUR | ✅ | ✅ |
| `TAZAPAY_INSTANT_BANK_TRANSFER` | EUR | ✅ | ❌ |
| `TAZAPAY_UPI` | INR | ✅ | ✅ |
| `TAZAPAY_QRIS` | IDR | ✅ | ✅ |
| `TAZAPAY_PAYMAYA` | PHP | ✅ | ✅ |
| `TAZAPAY_GRABPAY` | PHP | ✅ | ✅ |
| `TAZAPAY_SHOPEEPAY` | PHP, IDR | ✅ | ✅ |
| `TAZAPAY_OVO` | IDR | ✅ | ✅ |
| `TAZAPAY_DANA` | IDR | ✅ | ✅ |
| `TAZAPAY_NET_BANKING_PH` | PHP | ✅ | ✅ |
| `TAZAPAY_NET_BANKING_ID` | IDR | ✅ | ✅ |

* * *

### Miscellaneous Details   [Skip link to Miscellaneous Details](https://docs.portone.cloud/docs/tazapay\#miscellaneous-details)

- For TazaPay, the **customer's Email**, **Firstname** and **Lastname** are required.
- UPI method does not support partial refunds.
- Refunds can be initialized from the merchant portal, refund status can be checked at both merchant portal and Tazapay


Dashboard

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/tazapay\#sandbox)

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/tazapay\#credentials)

| Key | Value |
| --- | --- |
| Api Key | ak\_test\_4LK7EONA1P823M50QZQT |
| Api Secret | sk\_test\_tGjwPxpYf5jPdPw51eSA8fJYIm0KKkUrPtxcraNYyDicDvDqGW9y6d2stJVkxd4xOndmvKwvcX7lwGTOeGs0Jv5aH7MXFuHVWt8OEk2d6Wh9IfRomcZ2BrOq3Xq7z9bm |

* * *

#### Credentials for testing UPI   [Skip link to Credentials for testing UPI](https://docs.portone.cloud/docs/tazapay\#credentials-for-testing-upi)

| Key | Value |
| --- | --- |
| Api Key | ak\_test\_A4GJLD6ISISWG6JHS9G3 |
| Api Secret | sk\_test\_1E2Ys0TAlfSOIEzhGJVZd0RyMt7ejAd50J85AOUNmBO7YikGIHE6yRXEpq3nS1Pdg91MhJ1quknZskCJCXmkixGUddSrVtOhNHDfpnRpttitUOQrSrxEwwFS0E2ocuHW |

To simulate a successful and failed transaction, use the following UPI IDs:

| UPI ID | Result |
| --- | --- |
| tbridgesuccess@upi | Success |
| tbridgefailure@upi | Failure |

* * *

#### [Tazapay sandbox dashboard](https://dashboard-sandbox.tazapay.com/signin)   [Skip link to [object Object]](https://docs.portone.cloud/docs/tazapay\#tazapay-sandbox-dashboard)

#### [Test cards](https://docs.tazapay.com/reference/test-cards)   [Skip link to [object Object]](https://docs.portone.cloud/docs/tazapay\#test-cards)

#### [Test alternate payment methods](https://docs.tazapay.com/reference/alternate-payment-methods)   [Skip link to [object Object]](https://docs.portone.cloud/docs/tazapay\#test-alternate-payment-methods)

#### Use following values in embedded JS code to pay via Tazapay channel   [Skip link to Use following values in embedded JS code to pay via Tazapay channel](https://docs.portone.cloud/docs/tazapay\#use-following-values-in-embedded-js-code-to-pay-via-tazapay-channel)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "TAZAPAY",
    "pmt_method": { Any of above given payment method keys },

```

* * *

### Reference links   [Skip link to Reference links](https://docs.portone.cloud/docs/tazapay\#reference-links)

- [API Reference](https://docs.tazapay.com/reference/introduction)

Updatedabout 2 months ago

* * *

Did this page help you?

Yes

No

![Help](https://cdn.jsdelivr.net/gh/iamport-intl/portone-devx-chatbot-widget@production/public/chat-intro1.svg)