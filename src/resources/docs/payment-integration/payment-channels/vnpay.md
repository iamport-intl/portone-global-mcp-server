---
url: "https://docs.portone.cloud/docs/vnpay"
title: "VNPAY"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/vnpay\#introduction)

VNPAY offers QR payments, ATM and Credit Card (Visa/Master) payments. Follow this guide to integrate VNPAY acceptance on your mobile app or website

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/vnpay\#supported-countries)

- Vietnam 🇻🇳

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/vnpay\#available-payment-methods)

VNPAY PG only supports VND(₫) currency.

| Payment Type | Payment Method Key | Status | Sandbox Availability |
| --- | --- | --- | --- |
| Local ATM Card | `VNPAY_ATM_CARD` | ✅ | ✅ |
| Credit Card | `VNPAY_CREDIT_CARD` | ✅ | ✅ |
| Wallets | `VNPAY_WALLET` | ✅ | ✅ |
| QR | `VNPAY_QR` | ✅ | ✅ |
| All methods | `VNPAY_ALL` | ✅ | ✅ |

> ## 📘  Note
>
> In case of multiple offerings of same payment method, merchants can configure the payment method from the payment channel of his choice.
>
> - e.g. To integrate `VNPay`, merchant can choose the `VNPAY_ATM_CARD` payment method by configuring `VNPay` or via `VTCPay` payment channels.
> - It will be merchants responsibility to configure appropriate Payment Channels and enable/disable required Payment Methods.

* * *

### Miscellaneous Details   [Skip link to Miscellaneous Details](https://docs.portone.cloud/docs/vnpay\#miscellaneous-details)

- Refunds can be initialized from the merchant portal

- For domestic cards, the refund time will be from 3-8 days, for international cards, it takes 15-30 days, depending on each bank. **Customers will have to check refund transaction status on their bank accounts** because local banks doesn’t response the refund success status to VNPay.

- **Webhook Settings :** Copy the Webhook URL provided in the PortOne Admin Dashboard & share it with VNPay team to configure the Webhook URL for your account


* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/vnpay\#sandbox)

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/vnpay\#credentials)

| Key | Value |
| --- | --- |
| Merchant Id | CHAIVN01 |
| Secure Secret Key | GMHSLNMDURNWMCRVYLUWLJIOPVRYMMVL |

* * *

You can create the sandbox account:

[VNPAY Sandbox Dashboard](https://sandbox.vnpayment.vn/devreg/)

* * *

#### Test cards data   [Skip link to Test cards data](https://docs.portone.cloud/docs/vnpay\#test-cards-data)

| Type | Bank | Card number | Name | Valid through | CVV | Status |
| --- | --- | --- | --- | --- | --- | --- |
| ATM Card | NCB | 9704198526191432198 | NGUYEN VAN A | 07/15 | 123 | Successful |
| ATM Card | NCB | 9704195798459170488 | NGUYEN VAN A | 07/15 | 123 | Card does not have enough balance |
| ATM Card | NCB | 9704192181368742 | NGUYEN VAN A | 07/15 | 123 | Card not activated |
| ATM Card | NCB | 9704193370791314 | NGUYEN VAN A | 07/15 | 123 | Card is locked |
| ATM Card | NCB | 9704194841945513 | NGUYEN VAN A | 07/15 | 123 | Card expired |

* * *

- OTP - 123456
- Password - 1234

#### Use following values in embedded JS code to pay via VNPAY channel   [Skip link to Use following values in embedded JS code to pay via VNPAY channel](https://docs.portone.cloud/docs/vnpay\#use-following-values-in-embedded-js-code-to-pay-via-vnpay-channel)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "VNPAY",
    "pmt_method": { Any of above given payment method keys },

```

* * *

### Reference links   [Skip link to Reference links](https://docs.portone.cloud/docs/vnpay\#reference-links)

- [VnPay integration](https://sandbox.vnpayment.vn/apis/docs/gioi-thieu/)
- [Additional VnPay testing data](https://github.com/naustudio/node-vn-payments/blob/master/CONTRIBUTING.md)
