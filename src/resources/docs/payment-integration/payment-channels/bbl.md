---
url: "https://docs.portone.cloud/docs/bbl"
title: "BBL"
---

# BBL Integration   [Skip link to BBL Integration](https://docs.portone.cloud/docs/bbl\#bbl-integration)

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/bbl\#introduction)

Bangkok Bank is a leading bank in Thailand and a major regional bank in Southeast Asia, a market leader in corporate and business banking, with a large retail customer base.

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/bbl\#supported-countries)

- Thailand 🇹🇭

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/bbl\#available-payment-methods)

BBL PG supports THB(฿) currency.

| Payment Type | Payment Method Key | Currency | Status | Sandbox Availability |
| --- | --- | --- | --- | --- |
| PromptPay | `BBL_PROMPTPAY` | THB | ✅ | ❌ |

* * *

#### Use following values in embedded JS code to pay via BBL channel   [Skip link to Use following values in embedded JS code to pay via BBL channel](https://docs.portone.cloud/docs/bbl\#use-following-values-in-embedded-js-code-to-pay-via-bbl-channel)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "BBL",
    "pmt_method": { Any of above given payment method keys },

```
