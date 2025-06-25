---
url: "https://docs.portone.cloud/docs/instamojo"
title: "Instamojo"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/instamojo\#introduction)

We are India’s simplest all-in-one #D2CTech platform powering independent eCommerce brands and startups with online

stores, landing pages and payment solutions to help every seller start, manage and scale their online business

successfully.

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/instamojo\#supported-countries)

- India 🇮🇳

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/instamojo\#available-payment-methods)

Instamojo currently supports INR(₹) currency.

| Payment Type | Payment Method Key | Status | Sandbox Availability |
| --- | --- | --- | --- |
| All methods (Credit/Debit cards, Wallets, UPI, Net Banking and more) | `INSTAMOJO_ALL` | ✅ | ✅ |

* * *

### Miscellaneous Details   [Skip link to Miscellaneous Details](https://docs.portone.cloud/docs/instamojo\#miscellaneous-details)

- Only Cards methods available for sandbox testing

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/instamojo\#sandbox)

#### Use following values in embedded JS code to pay via Instamojo channel   [Skip link to Use following values in embedded JS code to pay via Instamojo channel](https://docs.portone.cloud/docs/instamojo\#use-following-values-in-embedded-js-code-to-pay-via-instamojo-channel)

JSON

```rdmd-code lang-json theme-light

    "pmt_channel" : "INSTAMOJO",
    "pmt_method" :{ "Any of above given payment method keys" }

```

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/instamojo\#credentials)

| Key | Value |
| --- | --- |
| clientId | test\_LB7tp9aOH0Zfmvt6luC78n2xzmAoycV2Vmv |
| clientSecret | test\_G9t0Fvg3pGpXzqtnLS4kutY8cMWcTHiicAO0tLdVBDj50RU95rWyXA9nc0wg9WTnDxBZysUlXa12iZ0VV23kaWovKFOAwAXGXzlMKZfHOmQawHhG4damCHWeMBx |
| salt | f26a1bf6d186481a9ac3c2c96db649c6 |

* * *

#### Test application details   [Skip link to Test application details](https://docs.portone.cloud/docs/instamojo\#test-application-details)

- [Test card](https://support.instamojo.com/hc/en-us/articles/208485675-Test-or-Sandbox-Account)
