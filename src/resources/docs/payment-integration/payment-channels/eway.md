---
url: "https://docs.portone.cloud/docs/eway"
title: "Eway"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/eway\#introduction)

Eway's secure and reliable online payment gateway makes it easy for you to accept credit card payments from anyone, anywhere, from any device.

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/eway\#supported-countries)

- Australia 🇦🇺

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/eway\#available-payment-methods)

| Payment Type | Payment Method Key | Status | Sandbox Availability |
| --- | --- | --- | --- |
| Credit Card | `EWAY_CREDIT_CARD` | ✅ | ✅ |

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/eway\#sandbox)

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/eway\#credentials)

| Key | Value |
| --- | --- |
| Api Key | A1001CMzYiaB9SV/IO1qaeABJ0c5Un9WXbDURLHQaqB+idYxoCPs4WRnavb47rhHQYoKEf |
| Password | n4IhtYgI |

* * *

[Eway Sandbox Dashboard](https://sandbox.myeway.com.au/Login.aspx)

* * *

#### Test card data   [Skip link to Test card data](https://docs.portone.cloud/docs/eway\#test-card-data)

[Eway Test Cards](https://go.eway.io/s/article/Test-Credit-Card-Numbers?language=en_US)

* * *

[Enable and Test 3DS](https://go.eway.io/s/article/How-to-Enable-and-Test-3DS-2-0-in-the-Eway-Sandbox?language=en_US#HowtoforcetheusefoDifferent3DSecureVersions)

* * *

#### Use following values in embedded JS code to pay via EWay channel   [Skip link to Use following values in embedded JS code to pay via EWay channel](https://docs.portone.cloud/docs/eway\#use-following-values-in-embedded-js-code-to-pay-via-eway-channel)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "EWAY",
    "pmt_method": { Any of above given payment method keys },

```
