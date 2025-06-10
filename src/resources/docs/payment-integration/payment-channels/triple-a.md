---
url: "https://docs.portone.cloud/docs/triple-a"
title: "Triple A"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/triple-a\#introduction)

TripleA is licensed by MAS (The Monetary Authority of Singapore) and complies with the highest international standards for AML and KYC. Our documentation provides everything you need to start offering cryptocurrency-related services.

With cryptocurrency payments, customers simply send funds (eg. Bitcoin) from their computer or mobile device directly to a (unique one-time-use) payment address. TripleA guarantees your exchange rate and funds due.

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/triple-a\#supported-countries)

- Global 🌏

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/triple-a\#available-payment-methods)

| Payment Type | Payment Method Key | Currency | Status | Sandbox Availability |
| --- | --- | --- | --- | --- |
| Crypto Wallet | `TRIPLEA_CRYPTOCURRENCY` | USD, VND, SGD, THB, INR, PHP, IDR, KRW, EUR, JPY, CNY, GBP, HKD, TWD | ✅ | ✅ |

* * *

### Miscellaneous Details   [Skip link to Miscellaneous Details](https://docs.portone.cloud/docs/triple-a\#miscellaneous-details)

- Refunds can be initialised from the merchant portal.

- **No Short Payments Allowed**
  - TripleA does **not support underpaid transactions**, known as **short payments**.

    **What is a short payment?**
  - Example: If the expected amount is **10002.02**, and the customer pays **10000**, it is considered a **short payment**.
  - Short payments will be **marked as failed** and will not be processed.
- **Refund Process**
  - An **email address is mandatory** while initiating a refund.
  - The **refund link** will be sent to the email provided in the **billing details**.
  - After receiving the link:
    - Open it
    - Enter your **crypto wallet address**
    - Enter the **OTP** received on the same email
    - The refund will be processed after verification


      📘 More info: [TripleA Refunds Guide](https://triplea-technologies.stoplight.io/docs/triplea-api-doc/cc30c8c218ed1-refunds)
- **Required Fields**
  - `payer_id`
  - `payer_email`
- **Phone Number Format**


  - **Phone numbers must include the country code**, starting with a `+` (e.g., `+91XXXXXXXXXX`).
  - If the country code is missing, the number will be considered **invalid** and may be cleared or rejected.
  - **Examples of valid formats:**
    - `+14155552671` (US)
    - `+919876543210` (India)

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/triple-a\#sandbox)

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/triple-a\#credentials)

| Key | Value |
| --- | --- |
| ClientId | oacid-cm74le3d1358svuis7179die0 |
| Client Secret | f495c6ca7000ef19b1709c3e2010c03ab8a83ce4691eefe22bdf289828a3fa6a |
| Merchant Key | mkey-clm05hliw1apaqdishdmr2b6r |

* * *

#### Sandbox Testing   [Skip link to Sandbox Testing](https://docs.portone.cloud/docs/triple-a\#sandbox-testing)

- You can test the payment flow in Sandbox Mode using the Unisat Wallet.


Step-by-step instructions are available here: [TripleA Sandbox Guide](https://triplea-technologies.stoplight.io/docs/triplea-api-doc/f9efc44ed339f-sandbox-mode)

* * *

#### Use following values in embedded JS code to pay via TripleA channel   [Skip link to Use following values in embedded JS code to pay via TripleA channel](https://docs.portone.cloud/docs/triple-a\#use-following-values-in-embedded-js-code-to-pay-via-triplea-channel)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "TRIPLEA",
    "pmt_method": "TRIPLEA_CRYPTOCURRENCY",

```

* * *

### Reference links   [Skip link to Reference links](https://docs.portone.cloud/docs/triple-a\#reference-links)

- [TripleA integration guide](https://triplea-technologies.stoplight.io/docs/triplea-api-doc/ZG9jOjY3NDE3NDI-introduction)

Updatedabout 1 month ago

* * *

Did this page help you?

Yes

No