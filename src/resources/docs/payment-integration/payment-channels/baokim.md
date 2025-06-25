---
url: "https://docs.portone.cloud/docs/baokim"
title: "Baokim"
---

# Baokim Integration   [Skip link to Baokim Integration](https://docs.portone.cloud/docs/baokim\#baokim-integration)

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/baokim\#introduction)

Bao Kim Payment Platform is an open payment platform, Bao Kim provides a full range of APIs that allow merchants to integrate their application (web/app) with Bao Kim Payment Gateway in order to receive payment for orders. , check your payment reconciliation.

For example merchant can perform the following tasks with Bao Kim API

- Receive payment for orders arising on your application (web/app) by sending orders to Bao Kim and displaying the payment interface for buyers to pay.
- Check and look up information of payment transactions, refund transactions, merchants you manage, payment status of orders to perform reconciliation

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/baokim\#supported-countries)

- Vietnam 🇻🇳

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/baokim\#available-payment-methods)

Baokim PG only supports VND(₫) currency.

| Payment Type | Payment Method Key | Status | Sandbox Availability |
| --- | --- | --- | --- |
| Local ATM Card | `BAOKIM_ATM_CARD` | ✅ | ✅ |
| Credit Card | `BAOKIM_CREDIT_CARD` | ✅ | ✅ |
| Installments by Credit Card | `BAOKIM_INSTALLMENT` | ✅ | ✅ |
| QR Code | `BAOKIM_QR_CODE` | ✅ | ❌ |
| Virtual Account (Bank Transfer) | `BAOKIM_VIRTUAL_ACCOUNT` | ✅ | ❌ |
| MomoPay Wallet | `BAOKIM_MOMOPAY` | ✅ | ❌ |
| ViettelPay Wallet | `BAOKIM_VIETTELPAY` | ✅ | ❌ |
| All methods | `BAOKIM_ALL` | ✅ | ❌ |

* * *

### Refund Details   [Skip link to Refund Details](https://docs.portone.cloud/docs/baokim\#refund-details)

| Payment Method | ATM Cards | Credit Cards | Installments by Credit Card | QR Code | Virtual Account (Bank Transfer) | MomoPay Wallet | ViettelPay Wallet | All method |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Full refund? | ✓ | ✓ | ✕ | ✓ | ✕ | ✓ | ✓ | ✓ |
| Partial Refund Allowed? | ✓ | ✓ | ✕ | ✓ | ✕ | ✓ | ✓ | ✓ |
| Multiple Refunds Allowed? | ✕ | ✕ | ✕ | ✕ | ✕ | ✕ | ✕ | ✕ |
| Refund Transfer Period | 1-14 Days | 1-14 Days | NA | 1-14 Days | NA | 1-14 Days | 1-14 Days | 1-14 Days |

* * *

### Miscellaneous Details   [Skip link to Miscellaneous Details](https://docs.portone.cloud/docs/baokim\#miscellaneous-details)

- Refunds can be initialized from the merchant portal, for refund status please check the Baokim Dashboard
- Multiple-partial refunds are not allowed

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/baokim\#sandbox)

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/baokim\#credentials)

| Key | Value |
| --- | --- |
| Key | a18ff78e7a9e44f38de372e093d87ca1 |
| merchantID | 40002 |
| Secret | 9623ac03057e433f95d86cf4f3bef5cc |

* * *

[Baokim Sandbox Dashboard](https://devtest.baokim.vn:9244/login)

```rdmd-code lang- theme-light
    Email:  2@bk.vn
    Password: 2

```

* * *

#### Test cards data   [Skip link to Test cards data](https://docs.portone.cloud/docs/baokim\#test-cards-data)

| Type | Bank | Card number | Name | Valid through | CVV/OTP |
| --- | --- | --- | --- | --- | --- |
| ATM Card | Saigonbank | 9704 0000 0000 0018 | NGUYEN VAN A | 03/07 | otp |
| Credit Card | Mastercard | 5123 4500 0000 0008 | - | 12/25 | 100 |
| Credit Card | Visa | 4000 0000 0000 0002 | - | 12/25 | 100 |
| Installments | VP Bank | 4541 0700 0000 0000 | - | 12/25 | 100 |

* * *

#### Use following values in embedded JS code to pay via Baokim channel   [Skip link to Use following values in embedded JS code to pay via Baokim channel](https://docs.portone.cloud/docs/baokim\#use-following-values-in-embedded-js-code-to-pay-via-baokim-channel)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "BAOKIM",
    "pmt_method": { Any of above given payment method keys },

```

* * *

### Reference links   [Skip link to Reference links](https://docs.portone.cloud/docs/baokim\#reference-links)

- [Baokim Integration guide](https://payment-docs.baokim.vn/docs/?bash#gii-thiu-bo-kim-api)
