---
url: "https://docs.portone.cloud/docs/paynamics"
title: "Paynamics"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/paynamics\#introduction)

Paynamics is the Philippines' most trusted and accessible payments provider. Used by top companies in the Philippines

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/paynamics\#supported-countries)

- Philippines 🇵🇭

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/paynamics\#available-payment-methods)

Paynamics currently supports PHP(₱) currency.

| Payment Type | Payment Method Key | Status | Sandbox Availability |
| --- | --- | --- | --- |
| Credit/Debit Cards via BDO | `PAYNAMICS_CREDIT_CARD` | ✅ | ✅ |
| Wallet | `PAYNAMICS_GCASH` | ✅ | ❌ |
| Wallet | `PAYNAMICS_PAYMAYA` | ✅ | ✅ |
| OTC | `PAYNAMICS_711_OTC` | ✅ | ✅ |
| OTC | `PAYNAMICS_CLIQQ_OTC` | ✅ | ✅ |
| OTC | `PAYNAMICS_DA5_OTC` | ✅ | ✅ |
| OTC | `PAYNAMICS_DRAGONPAY_OTC` | ✅ | ✅ |

* * *

### Miscellaneous Details   [Skip link to Miscellaneous Details](https://docs.portone.cloud/docs/paynamics\#miscellaneous-details)

- First Name & Last Name is a required field

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/paynamics\#sandbox)

#### Use following values in embedded JS code to pay via Paynamics channel   [Skip link to Use following values in embedded JS code to pay via Paynamics channel](https://docs.portone.cloud/docs/paynamics\#use-following-values-in-embedded-js-code-to-pay-via-paynamics-channel)

JSON

```rdmd-code lang-json theme-light

    "pmt_channel" : "PAYNAMICS",
    "pmt_method": {"Any of above given payment method keys"}

```

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/paynamics\#credentials)

| Key | Value |
| --- | --- |
| MerchantId | NA |
| MerchantKey | NA |
| Username | NA |
| Password | NA |

* * *

#### Test cards data   [Skip link to Test cards data](https://docs.portone.cloud/docs/paynamics\#test-cards-data)

| Name | Number | Card Expdate | CVV |
| --- | --- | --- | --- |
| Test card | 4434260000000008 | 01/2039 | 123 |

* * *

[OTC Simulator Android App](https://play.google.com/store/apps/details?id=net.paynamics.paychannelsimulator&hl=en_US)

* * *

#### Paymaya Testing details   [Skip link to Paymaya Testing details](https://docs.portone.cloud/docs/paynamics\#paymaya-testing-details)

_Note: Please choose Express Pay out then use this test account_

| Key | Value |
| --- | --- |
| Username | 09193890579 |
| Password | Password@1 |
| OTP | 123456 |

Updated8 months ago

* * *

Did this page help you?

Yes

No

![Help](https://cdn.jsdelivr.net/gh/iamport-intl/portone-devx-chatbot-widget@production/public/chat-intro1.svg)