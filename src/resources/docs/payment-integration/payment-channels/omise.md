---
url: "https://docs.portone.cloud/docs/omise"
title: "Omise"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/omise\#introduction)

OMISE is a payment gateway for Thailand, Japan and Singapore; providing both online and offline payment solutions to merchants - from startups to large enterprises.

Follow this guide to integrate OMISE acceptance on your mobile app or website.

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/omise\#supported-countries)

- Thailand 🇹🇭
- Singapore 🇸🇬
- Malaysia 🇲🇾

* * *

### Available payment methods   [Skip link to Available payment methods](https://docs.portone.cloud/docs/omise\#available-payment-methods)

| Payment Type | Payment Method Key | Currency | Status | Sandbox Availability |
| --- | --- | --- | --- | --- |
| PayNow | `OMISE_PAYNOW` | SGD | ✅ | ✅ |
| International Credit Cards | `OMISE_CREDIT_CARD` | THB, SGD, MYR | ✅ | ✅ |
| TrueMoney Wallet | `OMISE_TRUEMONEY` | THB | ✅ | ✅ |
| AliPay Wallet | `OMISE_ALIPAY` | THB | ✅ | ✅ |
| AliPay+ Wallet | `OMISE_ALIPAY_CN` | SGD | ✅ | ✅ |
| PromptPay | `OMISE_PROMPTPAY` | THB | ✅ | ✅ |
| Rabbit LinePay Wallet | `OMISE_RABBIT_LINEPAY` | THB | ✅ | ✅ |
| Installment | `OMISE_INSTALLMENT` | THB | ✅ | ✅ |
| Installment | `OMISE_INSTALLMENT` | THB | ✅ | ✅ |
| GrabPay Wallet | `OMISE_GRABPAY` | MYR | ✅ | ✅ |
| Boost Wallet | `OMISE_BOOST` | MYR | ✅ | ✅ |
| Touch 'n Go Wallet | `OMISE_TOUCHNGO` | MYR | ✅ | ✅ |
| DuitNOW QR | `OMISE_DUITNOW_QR` | MYR | ✅ | ✅ |
| DuitNOW Online Banking/Wallets | `OMISE_DUITNOW_OBW` | MYR | ✅ | ✅ |

* * *

### Miscellaneous Details   [Skip link to Miscellaneous Details](https://docs.portone.cloud/docs/omise\#miscellaneous-details)

- Copy the Webhook URL provided in the PortOne Admin Dashboard & paste it to the [Omise Webhoook Settings](https://dashboard.omise.co/webhooks) for given products

  - CreditCard Payments
  - E-Wallets

##### Refunds   [Skip link to Refunds](https://docs.portone.cloud/docs/omise\#refunds)

- Refunds can be initialized from the merchant portal, for refund status please check the Omise [Dashboard](https://dashboard.omise.co/refunds)

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/omise\#sandbox)

##### [Omise Dashboard](https://dashboard.omise.co/)   [Skip link to [object Object]](https://docs.portone.cloud/docs/omise\#omise-dashboard)

##### [Test cards](https://www.omise.co/api-testing)   [Skip link to [object Object]](https://docs.portone.cloud/docs/omise\#test-cards)

#### Use following values in embedded JS code to pay via Omise channel   [Skip link to Use following values in embedded JS code to pay via Omise channel](https://docs.portone.cloud/docs/omise\#use-following-values-in-embedded-js-code-to-pay-via-omise-channel)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "OMISE",
    "pmt_method": { Any of above given payment method keys },

```

* * *

### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/omise\#credentials)

#### Thailand   [Skip link to Thailand](https://docs.portone.cloud/docs/omise\#thailand)

| Key | Value |
| --- | --- |
| publicKey | pkey\_test\_5oocaw8wfg3fp5dtm6v |
| secretKey | skey\_test\_5n73f94m53eqkehbkee |

#### Singapore   [Skip link to Singapore](https://docs.portone.cloud/docs/omise\#singapore)

| Key | Value |
| --- | --- |
| publicKey | pkey\_test\_5p9y3kx6sczecdxmi87 |
| secretKey | skey\_test\_5p9y3kx70ofsvr8az0c |

#### Malaysia   [Skip link to Malaysia](https://docs.portone.cloud/docs/omise\#malaysia)

| Key | Value |
| --- | --- |
| publicKey | pkey\_test\_5vns2fb3foc39rnc74p |
| secretKey | skey\_test\_5vns2fc9kuiozfx2eyz |

* * *

## Reference links   [Skip link to Reference links](https://docs.portone.cloud/docs/omise\#reference-links)

- [Omise Docs](https://www.omise.co/docs)
- [OMISE error codes](https://www.omise.co/api-errors)
