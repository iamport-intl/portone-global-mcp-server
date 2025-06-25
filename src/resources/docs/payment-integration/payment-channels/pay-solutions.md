---
url: "https://docs.portone.cloud/docs/pay-solutions"
title: "Pay Solutions"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/pay-solutions\#introduction)

PaySolutions can reach your customers all over the world. Through the many payment channels, both online and offline are available to serve you.

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/pay-solutions\#supported-countries)

- Thailand 🇹🇭

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/pay-solutions\#available-payment-methods)

Pay Solutions PG currently supports THB(฿) currency.

| Payment Type | Payment Method Key | Status | Sandbox Availability |
| --- | --- | --- | --- |
| All methods | `PS_ALL` | ✅ | ❌ |
| Credit Card | `PS_CREDIT_CARD` | ✅ | ✅ |
| AliPay Wallet | `PS_ALIPAY` | ✅ | ❌ |
| Prompt Pay | `PS_PROMPTPAY` | ✅ | ❌ |
| WeChat Pay Wallet | `PS_WECHATPAY` | ✅ | ❌ |
| TrueMoney Wallet | `PS_TRUEMONEY` | ✅ | ❌ |

> ## 📘  Note
>
> In case of multiple offerings of same payment method, merchants can configure the payment method from the payment channel of his choice.
>
> - e.g. To integrate `TrueMoney`, merchant can choose the `PS_TRUEMONEY` payment method by configuring `Pay Solutions` or via `Omise` or `Chill Pay` or any other payment channels.
> - It will be merchants responsibility to configure appropriate Payment Channels and enable/disable required Payment Methods.

### Miscellaneous Details   [Skip link to Miscellaneous Details](https://docs.portone.cloud/docs/pay-solutions\#miscellaneous-details)

- Email address is compulsory to initialize payments
- Refunds cannot be initialized from PortOne

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/pay-solutions\#sandbox)

#### Use following values in embedded JS code to pay via PaySolutions channel   [Skip link to Use following values in embedded JS code to pay via PaySolutions channel](https://docs.portone.cloud/docs/pay-solutions\#use-following-values-in-embedded-js-code-to-pay-via-paysolutions-channel)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "PAYSOLUTIONS",
    "pmt_method": { Any of above given payment method keys },

```

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/pay-solutions\#credentials)

| Key | Value |
| --- | --- |
| apiKey | zamcL2qNipA |
| secretKey | Typn7bJTa2B7tHec23Do |
| merchantID | 73633907 |

* * *

#### Test Credit cards data   [Skip link to Test Credit cards data](https://docs.portone.cloud/docs/pay-solutions\#test-credit-cards-data)

- Available for demo account only

| Type | Card number | Name | Valid through | CVV |
| --- | --- | --- | --- | --- |
| Visa | 4311151009999993 | Test card | 12/25 | 180 |

#### Test Merchant account credentials   [Skip link to Test Merchant account credentials](https://docs.portone.cloud/docs/pay-solutions\#test-merchant-account-credentials)

[Pay Solutions Merchant Console](https://controls.paysolutions.asia/)

| Key | value |
| --- | --- |
| Username | 73633907 |
| Password | jC7DwEaw |

### Reference links   [Skip link to Reference links](https://docs.portone.cloud/docs/pay-solutions\#reference-links)

- [Pay Solutions integration document](https://www.paysolutions.asia/EN/developer/developer.html)
