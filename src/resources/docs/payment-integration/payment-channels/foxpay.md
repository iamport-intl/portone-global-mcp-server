---
url: "https://docs.portone.cloud/docs/foxpay"
title: "FoxPay"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/foxpay\#introduction)

FoxPay electronic payment gateway is integrated in online transaction websites and applications, helping customers pay quickly and easily. Meanwhile, Foxpay e-wallet is an application developed on a high-tech platform that can be installed on any mobile device using iOS and Android operating systems. Payment solutions with e-wallets help users save time and costs compared to traditional forms of transactions.

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/foxpay\#supported-countries)

- Vietnam 🇻🇳

* * *

### Available payment methods:   [Skip link to Available payment methods:](https://docs.portone.cloud/docs/foxpay\#available-payment-methods)

Foxpay PG only supports VND(₫) currency.

| Payment Type | Payment Method Key | Status | Sandbox Availability |
| --- | --- | --- | --- |
| Local ATM Card | `FOXPAY_ATM_CARD` | ✅ | ✅ |
| Foxpay Credit Card | `FOXPAY_CREDIT_CARD` | ✅ | ✅ |
| Foxpay Wallet | `FOXPAY_WALLET` | ✅ | ❌ |
| Foxpay All | `FOXPAY_ALL` | ✅ | ✅ |

* * *

### Miscellaneous Details   [Skip link to Miscellaneous Details](https://docs.portone.cloud/docs/foxpay\#miscellaneous-details)

- Refunds can be initialized from the merchant portal, refund status can be checked at both merchant portal and 9Pay Dashboard

* * *

#### Configure ReturnUrl and IPNUrl   [Skip link to Configure ReturnUrl and IPNUrl](https://docs.portone.cloud/docs/foxpay\#configure-returnurl-and-ipnurl)

Please request FoxPay team to configure ReturnUrl and IPNUrl for your account, Please find IPN URL in Admin portal payment credentials setting page

- RedirectUrl : [https://api.portone.cloud/api/handleShopperRedirect/FOXPAY](https://api.portone.cloud/api/handleShopperRedirect/FOXPAY)
- IPNUrl : [https://api.portone.cloud/webhook/foxpay/${PORTONEKEY}](https://api.portone.cloud/webhook/foxpay/$%7BPORTONEKEY%7D)

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/foxpay\#sandbox)

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/foxpay\#credentials)

| Key | Value |
| --- | --- |
| merchantId | as provided by FoxPay |
| terminalId | as provided by FoxPay |
| secretKey | as provided by FoxPay |

* * *

#### Test Credit cards data   [Skip link to Test Credit cards data](https://docs.portone.cloud/docs/foxpay\#test-credit-cards-data)

| Type | Card number | Name | Valid through | CVV | Password |
| --- | --- | --- | --- | --- | --- |
| Visa | 4000000000000002 | NGUYEN VAN A | 12/22 | 111 | 1234 |

#### Test ATM cards data   [Skip link to Test ATM cards data](https://docs.portone.cloud/docs/foxpay\#test-atm-cards-data)

| Type | Card number | Name | Valid through | OTP |
| --- | --- | --- | --- | --- |
| ATM Card | 9704000000000018 | NGUYEN VAN A | 03/07 | otp |

#### Use following values in embedded JS code to pay via Foxpay channel   [Skip link to Use following values in embedded JS code to pay via Foxpay channel](https://docs.portone.cloud/docs/foxpay\#use-following-values-in-embedded-js-code-to-pay-via-foxpay-channel)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "FOXPAY",
    "pmt_method": { Any of above given payment method keys },

```

* * *

### Reference links   [Skip link to Reference links](https://docs.portone.cloud/docs/foxpay\#reference-links)

NA

Updated8 months ago

* * *

Did this page help you?

Yes

No

![Help](https://cdn.jsdelivr.net/gh/iamport-intl/portone-devx-chatbot-widget@production/public/chat-intro1.svg)