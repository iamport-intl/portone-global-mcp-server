---
url: "https://docs.portone.cloud/docs/smart-pay"
title: "Smart Pay"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/smart-pay\#introduction)

SmartPay is an electronic wallet application that provides complete cashless payment and banking solutions for individuals and merchants.

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/smart-pay\#supported-countries)

- Vietnam 🇻🇳

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/smart-pay\#available-payment-methods)

| Payment Type | Payment Method Key | Status | Sandbox Availability |
| --- | --- | --- | --- |
| Credit Card | `SMARTPAY_CREDIT_CARD` | ✅ | ✅ |
| QR | `SMARTPAY_QR` | ✅ | ✅ |
| ATM Card | `SMARTPAY_ATM_CARD` | ✅ | ✅ |

* * *

### Miscellaneous Details   [Skip link to Miscellaneous Details](https://docs.portone.cloud/docs/smart-pay\#miscellaneous-details)

- To integrate with SmartPay, merchants are required to whitelist the PortOne IP and get both the PortOne and SmartPay Public keys configured from Smartpay team for their SmartPay MID
- Refunds can be initialized from the merchant portal
- For refunds with an **IN\_QUEUE** status, please verify the status with SmartPay and ensure to update it correctly via the PortOne merchant portal once the refund is processed, indicating whether it was successful or failed.

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/smart-pay\#sandbox)

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/smart-pay\#credentials)

| Key | Value |
| --- | --- |
| Channel | POG |
| Merchant ID | 9800000205 |
| BranchCode | PORT1 |

* * *

[SmartPay Sandbox Dashboard](https://sb-mops.paysmart.com.vn/user/login)

* * *

#### Test Credit card data   [Skip link to Test Credit card data](https://docs.portone.cloud/docs/smart-pay\#test-credit-card-data)

| Type | Bank | Card number | Name | Valid upto | CVV | OTP |
| --- | --- | --- | --- | --- | --- | --- |
| Credit Card | Mastercard | 5200000000001096 | NGUYEN VAN A | 01/24 | 001 | 1234 |

* * *

* * *

#### Test ATM card data   [Skip link to Test ATM card data](https://docs.portone.cloud/docs/smart-pay\#test-atm-card-data)

| Type | Bank | Card number | Name | Valid from | OTP |
| --- | --- | --- | --- | --- | --- |
| ATM Card | Ngân hàng TMCP Sài Gòn Công Thương | 9704000000000018 | NGUYEN VAN A | 03/07 | OTP |

* * *

#### Test APP login   [Skip link to Test APP login](https://docs.portone.cloud/docs/smart-pay\#test-app-login)

- Account - 0937113608
- Password - 111111

#### Use following values in embedded JS code to pay via Smartpay channel   [Skip link to Use following values in embedded JS code to pay via Smartpay channel](https://docs.portone.cloud/docs/smart-pay\#use-following-values-in-embedded-js-code-to-pay-via-smartpay-channel)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "SMARTPAY",
    "pmt_method": { Any of above given payment method keys },

```
