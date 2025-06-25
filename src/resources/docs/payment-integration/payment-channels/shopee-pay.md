---
url: "https://docs.portone.cloud/docs/shopee-pay"
title: "Shopee Pay"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/shopee-pay\#introduction)

ShopeePay is the top local eWallet in Vietnam. Follow this guide to integrate and offer ShopeePay payment acceptance on your mobile app or website.

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/shopee-pay\#supported-countries)

- Vietnam 🇻🇳

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/shopee-pay\#available-payment-methods)

ShopeePay PG only supports VND(₫) currency.

| Payment Type | Payment Method Key | Status |
| --- | --- | --- |
| Wallets | `SHOPEEPAY_WALLET` | ✅ |

* * *

### Miscellaneous Details   [Skip link to Miscellaneous Details](https://docs.portone.cloud/docs/shopee-pay\#miscellaneous-details)

- Refunds can be initialized from the merchant portal, for refund status please check the ShopeePay Dashboard

- **Webhook Settings :** Copy the Webhook URL provided in the PortOne Admin Dashboard & share it with ShopeePay team to configure the Webhook URL for your account


* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/shopee-pay\#sandbox)

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/shopee-pay\#credentials)

| Key | Value |
| --- | --- |
| clientId\_Mobile | ~provided by ShopeePay |
| secretKey\_Mobile | ~provided by ShopeePay |
| clientId\_Desktop | ~provided by ShopeePay |
| secretKey\_Desktop | ~provided by ShopeePay |
| merchantExtId | ~provided by ShopeePay |
| storeExtId | ~provided by ShopeePay |

* * *

Please get UAT account details from ShopeePay team

[ShopeePay Sandbox Dashboard](https://business.uat.shopeepay.vn/login)

* * *

#### Test data   [Skip link to Test data](https://docs.portone.cloud/docs/shopee-pay\#test-data)

Get the sample App and test account details from ShopeePay

* * *

#### Use following values in embedded JS code to pay via ShopeePay channel   [Skip link to Use following values in embedded JS code to pay via ShopeePay channel](https://docs.portone.cloud/docs/shopee-pay\#use-following-values-in-embedded-js-code-to-pay-via-shopeepay-channel)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "SHOPEEPAY",
    "pmt_method": { Any of above given payment method keys },

```

* * *

### Reference links   [Skip link to Reference links](https://docs.portone.cloud/docs/shopee-pay\#reference-links)

- Get in touch with ShopeePay team for integration documentation
