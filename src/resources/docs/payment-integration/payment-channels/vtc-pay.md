---
url: "https://docs.portone.cloud/docs/vtc-pay"
title: "VTC Pay"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/vtc-pay\#introduction)

VTC Pay is the best and unique state-owned online payment gateway in Vietnam that has been recognized as the trustworthy for both domestic and international partners. After over 8 years of development, VTC Pay has been a long term partner of more than 2,000 enterprises worldwide.

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/vtc-pay\#supported-countries)

- Vietnam 🇻🇳

* * *

### Available payment methods   [Skip link to Available payment methods](https://docs.portone.cloud/docs/vtc-pay\#available-payment-methods)

VTCPay PG only supports VND(₫) currency.

| Payment Type | Payment Method Key | Status | Sandbox Availability |
| --- | --- | --- | --- |
| Domestic Banks (ATM Card) | `VTCPAY_ATM_CARD` | ✅ | ✅ |
| International Payment (Credit Card) | `VTCPAY_CREDIT_CARD` | ✅ | ✅ |
| VTCPay Wallet | `VTCPAY_WALLET` | ✅ | ✅ |
| VNPay Wallet | `VTCPAY_VNPAY` | ✅ | ❌ |
| ViettelPay Wallet | `VTCPAY_VIETTELPAY` | ✅ | ❌ |
| MomoPay Wallet | `VTCPAY_MOMOPAY` | ✅ | ✅ |
| All methods | `VTCPAY_ALL` | ✅ | ✅ |

* * *

### Miscellaneous Details   [Skip link to Miscellaneous Details](https://docs.portone.cloud/docs/vtc-pay\#miscellaneous-details)

- Copy the Webhook URL provided in the PortOne Admin Dashboard & paste it to the [VTCPay Dashboard](https://vtcpay.vn/) for configuring the webhook notifications

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/vtc-pay\#sandbox)

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/vtc-pay\#credentials)

| Key | Value |
| --- | --- |
| secretKey | aaaaaaaaaaaaaaaabbbbbbbbbCCCCC123 |
| merchantID | 0963465816 |
| websiteID | 56098 |

* * *

#### [VTCPay Sandbox Dashboard](http://alpha1.vtcpay.vn/wallet)   [Skip link to [object Object]](https://docs.portone.cloud/docs/vtc-pay\#vtcpay-sandbox-dashboard)

JavaScript

```rdmd-code lang-javascript theme-light

Account:  0963465816
Password: Aa@123456
OTP: 123456

```

* * *

#### Test cards data   [Skip link to Test cards data](https://docs.portone.cloud/docs/vtc-pay\#test-cards-data)

| Type | Bank | Card number | Name | Valid through | CVV |
| --- | --- | --- | --- | --- | --- |
| ATM Card | Techcombank | 9704 0000 0000 0018 | NGUYEN VAN A | 03/07 | - |
| Credit Card | VISA | 4111 1111 1111 1111 | - | 01/30 | 123 |

* * *

#### Test Wallet Details   [Skip link to Test Wallet Details](https://docs.portone.cloud/docs/vtc-pay\#test-wallet-details)

JavaScript

```rdmd-code lang-javascript theme-light

Account:  0357758300
Password: Abcd1234
OTP: 123456

```

* * *

#### Use following values in embedded JS code to pay via VTCPay channel   [Skip link to Use following values in embedded JS code to pay via VTCPay channel](https://docs.portone.cloud/docs/vtc-pay\#use-following-values-in-embedded-js-code-to-pay-via-vtcpay-channel)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "VTCPAY",
    "pmt_method": { Any of above given payment method keys },

```

* * *

### Reference links   [Skip link to Reference links](https://docs.portone.cloud/docs/vtc-pay\#reference-links)

- [VTCPay Integration guide](https://vtcpay.vn/tai-lieu-tich-hop-website)
- [VTCPay Testing Data](https://vtcpay.vn/tai-lieu-tich-hop-website#phuluc1)

Updated8 months ago

* * *

Did this page help you?

Yes

No

![Help](https://cdn.jsdelivr.net/gh/iamport-intl/portone-devx-chatbot-widget@production/public/chat-intro1.svg)