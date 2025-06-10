---
url: "https://docs.portone.cloud/docs/one-pay"
title: "One Pay"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/one-pay\#introduction)

OnePAY is a Leading Payment Processing Company in Vietnam since 2006, providing payment gateway, payment processing, and merchant services, OnePAY is responsible for enabling consumers to pay for transactions on the Internet by linking providers, banks, and consumers.

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/one-pay\#supported-countries)

- Vietnam 🇻🇳

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/one-pay\#available-payment-methods)

ONEPAY PG only supports VND(₫) currency.

| Payment Type | Payment Method Key | Status |
| --- | --- | --- |
| Local ATM Card | `ONEPAY_ATM_CARD` | ✅ |
| Credit Card | `ONEPAY_CREDIT_CARD` | ✅ |
| Wallets | `ONEPAY_Wallet` | ✅ |
| All methods | `ONEPAY_ALL` | ✅ |

* * *

### Miscellaneous Details   [Skip link to Miscellaneous Details](https://docs.portone.cloud/docs/one-pay\#miscellaneous-details)

- Refunds can be initialized from the merchant portal, for refund status please check the ONEPay Dashboard
- Description is a required field

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/one-pay\#sandbox)

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/one-pay\#credentials)

| Key | Value |
| --- | --- |
| Merchant Id | TESTONEPAY |
| AccessCode | 6BEB2546 |
| Secure Secret Key | 6D0870CDE5F24F34F3915FB0045120DB |

**Note**: Use the Merchant Id **TOKENSILENT** for subscription testing

* * *

#### Test cards data   [Skip link to Test cards data](https://docs.portone.cloud/docs/one-pay\#test-cards-data)

| Card type | Type | Card number | Name | Valid through | CVV | Status |
| --- | --- | --- | --- | --- | --- | --- |
| International | Visa | 4000000000000002 | NGUYEN VAN A | 05/24 | 123 | Successful |
| Domestic | The ABB | 9704250000000001 | NGUYEN VAN A | 01/13 | 123 | Successful |

* * *

- OTP - 123456
- Password - 1234

#### Use following values in embedded JS code to pay via ONEPAY channel   [Skip link to Use following values in embedded JS code to pay via ONEPAY channel](https://docs.portone.cloud/docs/one-pay\#use-following-values-in-embedded-js-code-to-pay-via-onepay-channel)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "ONEPAY",
    "pmt_method": { Any of above given payment method keys },

```

* * *

### Reference links   [Skip link to Reference links](https://docs.portone.cloud/docs/one-pay\#reference-links)

- [OnePay domestic integration pdf](https://mtf.onepay.vn/developer/resource/documents/docx/introduction_merchant_integration_local.pdf)
- [Domestic testing data](https://mtf.onepay.vn/developer/?page=modul_quocte)
- [OnePay international integration pdf](https://mtf.onepay.vn/developer/resource/documents/docx/introduction_merchant_integration.pdf)
- [International testing data](https://mtf.onepay.vn/developer/?page=modul_noidia)

Updated6 months ago

* * *

Did this page help you?

Yes

No

![Help](https://cdn.jsdelivr.net/gh/iamport-intl/portone-devx-chatbot-widget@production/public/chat-intro1.svg)