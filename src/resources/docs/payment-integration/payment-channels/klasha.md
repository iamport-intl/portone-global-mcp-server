---
url: "https://docs.portone.cloud/docs/klasha"
title: "Klasha"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/klasha\#introduction)

Klasha provides frictionless cross-border payment solutions for merchants. Klasha empowers online payments in Africa, offering secure and convenient financial solutions. Follow this guide to integrate Klasha Payment Gateway.

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/klasha\#supported-countries)

- Kenya 🇰🇪
- Nigeria 🇳🇬
- South Africa 🇿🇦

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/klasha\#available-payment-methods)

| Payment Type | Payment Method Key | Currency | Status | Sandbox Availability |
| --- | --- | --- | --- | --- |
| Credit Cards | `KLASHA_CREDIT_CARD` | KES,ZAR | ✅ | ✅ |
| Bank Transfer | `KLASHA_BANK_TRANSFER` | NGN | ✅ | ✅ |
| MPesa | `KLASHA_MPESA` | KES | ✅ | ✅ |

* * *

### Miscellaneous Details   [Skip link to Miscellaneous Details](https://docs.portone.cloud/docs/klasha\#miscellaneous-details)

- **Webhook Settings :** Paste the provided Webhook URL from the PortOne Admin Dashboard into the Klasha portal's webhook configuration section to set up your account's Webhook URL.
- **Webhook Key Settings :** Use the PortOne key as the Webhook Key in the Klasha Portal.
- Refunds cannot be initialized from the PortOne Dashboard.

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/klasha\#sandbox)

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/klasha\#credentials)

| Key | Value |
| --- | --- |
| Merchant private key | p1II2wrbFTjaXN5nTCYmTac+HB7/IV9ASfPlkALurKYW+Dt29xNjPAzYnFQ2Sg+0 |
| Merchant public key | xulVd8LHrTDwGHC/PagMxnCZ7+nqkYiPtRBTd3DSE5ZFKfs3QCy1KVliyDauPKZJ |
| Encryption key | 6JGkQjskay8RDDlU/H+/+vu8R27KTXCN0qG/c07xJug= |
| New encryption key | 6JGkQjskay8RDDlU/H+/+vu8 |

* * *

[Klasha Sandbox Dashboard](https://dev.d1te9ml3wvr2vm.amplifyapp.com/login)

* * *

#### Test cards data   [Skip link to Test cards data](https://docs.portone.cloud/docs/klasha\#test-cards-data)

| Card number | Currency | Valid through | CVV | Pin | OTP |
| --- | --- | --- | --- | --- | --- |
| 4084084084084081 | KES | 01/25 | 408 | - | - |
| 507850785078507812 | KES | 01/25 | 081 | 1111 | - |
| 5060666666666666666 | KES | 01/25 | 123 | 1234 | 123456 |
| 4084080000000409 | KES | 01/25 | 000 | - | - |
| 5399838383838381 | ZAR | 10/31 | 470 | 3310 | 123456 |
| 4187427415564246 | ZAR | 09/32 | 828 | - | - |

* * *

#### Use following values in embedded JS code to pay via Klasha channel   [Skip link to Use following values in embedded JS code to pay via Klasha channel](https://docs.portone.cloud/docs/klasha\#use-following-values-in-embedded-js-code-to-pay-via-klasha-channel)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "KLASHA",
    "pmt_method": { Any of above given payment method keys },

```

Updated8 months ago

* * *

Did this page help you?

Yes

No

![Help](https://cdn.jsdelivr.net/gh/iamport-intl/portone-devx-chatbot-widget@production/public/chat-intro1.svg)