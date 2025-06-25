---
url: "https://docs.portone.cloud/docs/eximbay"
title: "Eximbay"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/eximbay\#introduction)

Eximbay is a South Korean global payment service provider specializing in cross-border transactions. It offers integrated online and offline payment gateway solutions, supporting businesses of all sizes. Eximbay enables secure and efficient international payments.

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/eximbay\#supported-countries)

- Global 🌏

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/eximbay\#available-payment-methods)

Eximbay currently supports JPY(¥) currency.

| Payment Type | Payment Method Key | Integration Status | Refund Supported | Sandbox Availability |
| --- | --- | --- | --- | --- |
| Paypay Payment | `EXIMBAY_PAYPAY` | ✅ | ✅ | ✅ |

* * *

### Miscellaneous Details   [Skip link to Miscellaneous Details](https://docs.portone.cloud/docs/eximbay\#miscellaneous-details)

- Name is a required field
- Email is a required field
- Order details is a required field

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/eximbay\#sandbox)

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/eximbay\#credentials)

| Key | Value |
| --- | --- |
| apiKey | test\_CF3309AD198AAE5BEC4F |
| mid | CF3309AD19 |

* * *

#### Use following values in embedded JS code to pay via Payletter channel   [Skip link to Use following values in embedded JS code to pay via Payletter channel](https://docs.portone.cloud/docs/eximbay\#use-following-values-in-embedded-js-code-to-pay-via-payletter-channel)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "EXIMBAY",
    "pmt_method": { Any of above given payment method keys },

```

* * *

### Reference links   [Skip link to Reference links](https://docs.portone.cloud/docs/eximbay\#reference-links)

- [API Docs](https://developer.eximbay.com/eximbay/api_list/reference.html)
