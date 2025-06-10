---
url: "https://docs.portone.cloud/docs/momo-pay"
title: "Momopay"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/momo-pay\#introduction)

Momopay is the top local eWallet in Vietnam with 5 million users and more than 70% of the market share. Follow this guide to integrate and offer Momopay acceptance on your mobile app or website

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/momo-pay\#supported-countries)

- Vietnam 🇻🇳

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/momo-pay\#available-payment-methods)

Momopay PG only supports VND(₫) currency.

| Payment Type | Payment Method Key | Status | Sandbox Availability |
| --- | --- | --- | --- |
| Local ATM Card | `MOMOPAY_ATM_CARD` | ✅ | ✅ |
| Momopay Wallet | `MOMOPAY_WALLET` | ✅ | ✅ |

* * *

### Miscellaneous Details   [Skip link to Miscellaneous Details](https://docs.portone.cloud/docs/momo-pay\#miscellaneous-details)

- Refunds can be initialized from the merchant portal, refund status can be checked at both the merchant portal and Momopay Dashboard

> ## 🚧  Caution
>
> In case of multiple offerings of same payment method, merchants can configure the payment method from the payment channel of his choice.
>
> - e.g. To integrate `MOMOPAY`, merchant can choose the `MOMOPAY_WALLET` payment method by configuring `MOMOPAY` or via `EPAY` payment channels.
> - It will be merchants responsibility to configure appropriate Payment Channels and enable/disable required Payment Methods.

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/momo-pay\#sandbox)

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/momo-pay\#credentials)

| Key | Value |
| --- | --- |
| accessKey | ggoaaJa1ECRzBRYC |
| partnerCode | MOMOUDLU20220629 |
| secretkey | nI4o1MBg53oY5MWP3IHnYcxoUD2x2dm8 |

* * *

#### ATM Cards test data   [Skip link to ATM Cards test data](https://docs.portone.cloud/docs/momo-pay\#atm-cards-test-data)

| Name | Number | Card Exp. date | OTP | Test case |
| --- | --- | --- | --- | --- |
| NGUYEN VAN A | 9704000000000018 | 03/07 | OTP | Card Successful |
| NGUYEN VAN A | 9704000000000026 | 03/07 | OTP | Card Lock |
| NGUYEN VAN A | 9704000000000034 | 03/07 | OTP | Not Sufficient funds |
| NGUYEN VAN A | 9704000000000042 | 03/07 | OTP | Card Limit |

* * *

#### [E-Wallet test details](https://developers.momo.vn/v3/docs/payment/onboarding/test-instructions\#e-wallet-test-details)   [Skip link to [object Object]](https://docs.portone.cloud/docs/momo-pay\#e-wallet-test-details)

* * *

##### Use the following values in the payload to pay via the Momopay channel   [Skip link to Use the following values in the payload to pay via the Momopay channel](https://docs.portone.cloud/docs/momo-pay\#use-the-following-values-in-the-payload-to-pay-via-the-momopay-channel)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "MOMOPAY",
    "pmt_method": { Any of above given payment method keys },

```

* * *

### Download links   [Skip link to Download links](https://docs.portone.cloud/docs/momo-pay\#download-links)

- [Android and iOS app](https://test-payment.momo.vn/download/)

### Reference links   [Skip link to Reference links](https://docs.portone.cloud/docs/momo-pay\#reference-links)

- [Momopay Integration guide](https://developers.momo.vn/#/docs/en/testing_information)
- [Momopay Testing Data](https://developers.momo.vn/#/docs/en/testing_information)

Updated8 months ago

* * *

Did this page help you?

Yes

No

![Help](https://cdn.jsdelivr.net/gh/iamport-intl/portone-devx-chatbot-widget@production/public/chat-intro1.svg)