---
url: "https://docs.portone.cloud/docs/inicis"
title: "Inicis"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/inicis\#introduction)

Inicis is a leading payment service provider in South Korea, offering comprehensive online payment solutions. Businesses use Inicis to accept a variety of payment methods securely, including credit cards, digital wallets, and convenience store payments, primarily serving the Japanese market.

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/inicis\#supported-countries)

- Japan 🇯🇵

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/inicis\#available-payment-methods)

| Payment Type | Payment Method Key | Currency | Status | Sandbox Availability |
| --- | --- | --- | --- | --- |
| Credit Card | `INICIS_CREDIT_CARD` | JPY | ✅ | ✅ |
| CVS | `INICIS_CVS` | JPY | ✅ | ✅ |
| PayPay | `INICIS_PAYPAY` | JPY | ✅ | ✅ |
| MerPay | `INICIS_MERPAY` | JPY | ✅ | ✅ |
| Amazon Pay | `INICIS_AMAZON_PAY` | JPY | ✅ | ✅ |
| Rakuten Pay | `INICIS_RAKUTEN` | JPY | ✅ | ✅ |
| Docomo | `INICIS_DOCOMO` | JPY | ✅ | ✅ |
| AU | `INICIS_AU` | JPY | ✅ | ✅ |

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/inicis\#sandbox)

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/inicis\#credentials)

| Credential Key | Value |
| --- | --- |
| `iniapi key` | `5AL5Djb1Ipualn0F` |
| `mid` | `CBTTEST001` |
| `merchantNameKana` | `ジーエムオーストア` |
| `merchantNameAlphabet` | `Sample Store` |
| `merchantNameShort` | `sample` |
| `contactPhone` | `0120-123-456` |
| `contactOpeningHours` | `10:00-18:00` |

> **Note:** To test in sandbox mode, merchants must have their frontend server IP whitelisted by the Inicis team.

* * *

### Account Onboarding for Successful Payment   [Skip link to Account Onboarding for Successful Payment](https://docs.portone.cloud/docs/inicis\#account-onboarding-for-successful-payment)

Before processing payments, ensure your account details are fully updated. Follow these steps in your account settings:

#### Profile   [Skip link to Profile](https://docs.portone.cloud/docs/inicis\#profile)

- **Name:** Enter your full name.
- **Phone:** Provide a valid contact number.

#### Account   [Skip link to Account](https://docs.portone.cloud/docs/inicis\#account)

- **Brand Name:** Enter your business or store name.
- **Company Support Email:** Provide your official support email address.
- **Support Contact Number:** Include a dedicated contact number for customer support.

> **Note:** Make sure these details are correctly configured to avoid any payment processing issues.

* * *

### Testing   [Skip link to Testing](https://docs.portone.cloud/docs/inicis\#testing)

Specific test card details are not publicly documented. For testing guidance, contact Inicis support or refer to their official documentation.

* * *

#### Use the following values in embedded JS code to pay via Inicis:   [Skip link to Use the following values in embedded JS code to pay via Inicis:](https://docs.portone.cloud/docs/inicis\#use-the-following-values-in-embedded-js-code-to-pay-via-inicis)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "INICIS",
    "pmt_method": { Any of the above payment method keys },

```

* * *

### Reference Links   [Skip link to Reference Links](https://docs.portone.cloud/docs/inicis\#reference-links)

- [Inicis Official Website](https://inicis.com/)
- [Inicis Documentation](https://manual.inicis.com/jppay/cbtauth.html)
