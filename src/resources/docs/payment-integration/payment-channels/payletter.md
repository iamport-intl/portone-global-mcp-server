---
url: "https://docs.portone.cloud/docs/payletter"
title: "Payletter Global"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/payletter\#introduction)

Payletter provides overseas payment services to businesses that do not own overseas corporations. Secure overseas

customers through Payletter.

**This integration supports Overseas Payment Service only.**

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/payletter\#supported-countries)

- Global 🌏

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/payletter\#available-payment-methods)

Payletter currently supports USD($), JPY(¥) and KRW(₩) currency.

| Payment Type | Payment Method Key | Integration Status | Refund Supported | Sandbox Availability |
| --- | --- | --- | --- | --- |
| Credit/Debit Card | `PAYLETTER_CREDIT_CARD` | ✅ | ✅ | ✅ |

* * *

### Miscellaneous Details   [Skip link to Miscellaneous Details](https://docs.portone.cloud/docs/payletter\#miscellaneous-details)

- Name is a required field
- Email is a required field
- Can only test unauthorized credit card mode in sandbox mode
- This integration also supports recurring payment for a customer, for more details please connect with PortOne support


team
- KRW does not support decimal amounts

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/payletter\#sandbox)

#### Credentials for USD   [Skip link to Credentials for USD](https://docs.portone.cloud/docs/payletter\#credentials-for-usd)

| Key | Value |
| --- | --- |
| Api Key | cdcfc9d37e47ae13a43ab8411858b396 |
| Store Id | portone\_test |

#### Credentials for JPY   [Skip link to Credentials for JPY](https://docs.portone.cloud/docs/payletter\#credentials-for-jpy)

| Key | Value |
| --- | --- |
| Api Key | 10b94e85b050e7d51a790c1bdb0610b0 |
| Store Id | portoneJP\_test |

#### Credentials for KRW   [Skip link to Credentials for KRW](https://docs.portone.cloud/docs/payletter\#credentials-for-krw)

| Key | Value |
| --- | --- |
| Api Key | 909b68b1d6bb1f1996db4f30efddac36 |
| Store Id | portoneKR\_test |

* * *

#### Test cards data   [Skip link to Test cards data](https://docs.portone.cloud/docs/payletter\#test-cards-data)

As mentioned earlier only unauthorized credit card mode is available in sandbox mode.

1. Please enter credit card number like below.
   - **Visa**: Random number starting with 4
   - **Master**: Random number starting with 51
   - **JCB**: Random number starting with 35
   - **Amex**: Random number starting with 34
2. Please enter any future Expiry date and CVV number randomly.

* * *

#### Use following values in embedded JS code to pay via Payletter channel   [Skip link to Use following values in embedded JS code to pay via Payletter channel](https://docs.portone.cloud/docs/payletter\#use-following-values-in-embedded-js-code-to-pay-via-payletter-channel)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "PAYLETTER",
    "pmt_method": { Any of above given payment method keys },

```

* * *

### Reference links   [Skip link to Reference links](https://docs.portone.cloud/docs/payletter\#reference-links)

- [API Docs](https://www.payletter.com/en/technical/index_global#payletter)

Updated2 months ago

* * *

Did this page help you?

Yes

No