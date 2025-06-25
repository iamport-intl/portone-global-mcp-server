---
url: "https://docs.portone.cloud/docs/chillpay"
title: "ChillPay"
---

# ChillPay Integration   [Skip link to ChillPay Integration](https://docs.portone.cloud/docs/chillpay\#chillpay-integration)

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/chillpay\#introduction)

ChillPay a white-label with T+1 money transfer Payment Gateway, to receive payment from customers who pay for products or services. Suitable for both corporate and ordinary customers, with various payment channels such as Internet Banking, Mobile Banking, Credit Card, e-wallet, Kiosk Machine and QR payment. ChillPay providing services under BOT licences of Ministry of Finance.

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/chillpay\#supported-countries)

- Thailand 🇹🇭

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/chillpay\#available-payment-methods)

Chillpay PG only supports THB currency.

| Payment Type | Payment Method Key | Status | Sandbox Availability |
| --- | --- | --- | --- |
| Credit Card | `CHILLPAY_CREDIT_CARD` | ✅ | ✅ |
| Wallets | `CHILLPAY_LINEPAY` | ✅ | ❌ |
| Wallets | `CHILLPAY_ALIPAY` | ✅ | ❌ |
| Wallets | `CHILLPAY_WECHATPAY` | ✅ | ❌ |
| Wallets | `CHILLPAY_SHOPEEPAY` | ✅ | ❌ |
| Wallets | `CHILLPAY_TRUEMONEY` | ✅ | ❌ |
| QR Code | `CHILLPAY_QRCODE` | ✅ | ✅ |

* * *

### Miscellaneous Details   [Skip link to Miscellaneous Details](https://docs.portone.cloud/docs/chillpay\#miscellaneous-details)

- Refunds can be initialized from the merchant portal, for refund status please check the Chillpay Dashboard

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/chillpay\#sandbox)

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/chillpay\#credentials)

| Key | Value |
| --- | --- |
| merchantCode | M032917 |
| apiKey | 2EcUgNsJsirWlWVuB00fzMvyBn9YIya67kRKrRwxQunjWSPBojYCUqwYz55RJVkw |
| md5Key | 2LGEvgSNLyhweDGyl78NNMBzB9co83k32mWgIEawzDTxaIaeVzWxCkOAes36kGwQDRjooOiCGWScv1y7991YYSEiKxU82HsGpfKk1IXbxV2qHTZMa8U8krCgC5q6WYNWlmOwEdCUlUmzCtTsvVk8UYm573w0LPDx63omR |

* * *

#### Sandbox test   [Skip link to Sandbox test](https://docs.portone.cloud/docs/chillpay\#sandbox-test)

Credit Card details – For Test Credit Card, Pay with points, Installment (Except Krungsri Consumer and Krungsri

First Choice payment channels)

| Type | Card number | Valid through | CVV | SMS Code |
| --- | --- | --- | --- | --- |
| Visa | 4444-4444-4444-4444 | 09/2022 | 123 | NA |
| Master Card | 3333-3333-3333-3333 | 09/2022 | 123 | NA |
| JCB | 2222-2222-2222-2222 | 09/2022 | 123 | NA |
| UnionPay | 4444-4444-4444-4444 | 09/2022 | 123 | 111111 |

Internet Banking

| Username | Password | OTP Pass |
| --- | --- | --- |
| demo01 | 1234 | 123456 |

True Money Wallet

| Telephone Number | OTP Pass | Status |
| --- | --- | --- |
| 0070000020 | 111111 | Test to pay, incase amount in wallet 0 baht |
| 0008683501 | 111111 | Test to success pay |

links

| Key | Value |
| --- | --- |
| Test App | [Chillpay Demo App](https://www.chillpay.co/en/Home/UserManual) |

:::note

Alipay and WeChat Pay Testing Procedures:

- Make an appointment with chillpay customer support via LINE Official
- At the appointment time, please test the payment transaction
- Inform the tested Transaction ID you received from [Chillpay](https://www.chillpay.co/) to the staff for confirmation
- Check the payment transaction on [Chillpay](https://www.chillpay.co/)


:::

* * *

#### Use following values in embedded JS code to pay via ChillPay channel   [Skip link to Use following values in embedded JS code to pay via ChillPay channel](https://docs.portone.cloud/docs/chillpay\#use-following-values-in-embedded-js-code-to-pay-via-chillpay-channel)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "CHILLPAY",
    "pmt_method": { Any of above given payment method keys },

```

* * *

### Reference links   [Skip link to Reference links](https://docs.portone.cloud/docs/chillpay\#reference-links)

- [Chillpay Documentation integration pdf v1.0.0](https://chillpay-uploads.s3.ap-southeast-1.amazonaws.com/documents/ChillPay-API-PayLink-Services-TH_v1.0.0.pdf)
- [Chillpay Integration Manual (English) v1.1.16](https://chillpay-uploads.s3.ap-southeast-1.amazonaws.com/documents/ChillPay-Merchant-Integration-Manual-Document-EN_v1.1.16.pdf)
- [Chillpay Integration Manual (Thai) v1.1.16](https://chillpay-uploads.s3.ap-southeast-1.amazonaws.com/documents/ChillPay-Merchant-Integration-Manual-Document-EN_v1.1.16.pdf)
