---
url: "https://docs.portone.cloud/docs/napas"
title: "NAPAS"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/napas\#introduction)

National Payment Corporation of Vietnam (NAPAS) is currently administering and operating a switching system interconnected more than 18,600 ATMs, 261,000 POS machines and 300 electronic payment companies in the fields of aviation, telecommunication, hotel industry and tourism, and serving over 100 million cardholders of 48 domestic and international commercial banks operating in Vietnam.

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/napas\#supported-countries)

- Vietnam 🇻🇳

* * *

### Available payment methods:   [Skip link to Available payment methods:](https://docs.portone.cloud/docs/napas\#available-payment-methods)

Napas PG only supports VND(₫) currency.

| Payment Type | Payment Method Key | Status |
| --- | --- | --- |
| Local ATM Card | `NAPAS_ATM_CARD` | ❌ |
| Credit Card | `NAPAS_CREDIT_CARD` | ❌ |
| Napas all | `NAPAS_ALL` | ❌ |

* * *

### Miscellaneous Details   [Skip link to Miscellaneous Details](https://docs.portone.cloud/docs/napas\#miscellaneous-details)

- Refunds can be initialized from the merchant portal, refund status can be checked at both merchant portal and 9Pay Dashboard

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/napas\#sandbox)

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/napas\#credentials)

| Key | Value |
| --- | --- |
| MerchantId | EoLA0ZbzfKKto1Ne |
| AccessCode | ECAFAB |
| SecretKey | 198BE3F2E8C75A53F38C1C4A5B6DBA27 |

* * *

#### Test cards data   [Skip link to Test cards data](https://docs.portone.cloud/docs/napas\#test-cards-data)

| Type | Card number | Name | Valid through | CVV | Status |
| --- | --- | --- | --- | --- | --- |
| Domestic | 9704000000000018 | NGUYEN VAN A | 03/07 | NA |  |
| Visa | 5123456789012346 | NGUYEN VAN A | 05/17 | 123 |  |

#### Use following values in embedded JS code to pay via Napas channel   [Skip link to Use following values in embedded JS code to pay via Napas channel](https://docs.portone.cloud/docs/napas\#use-following-values-in-embedded-js-code-to-pay-via-napas-channel)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "NAPAS",
    "pmt_method": { Any of above given payment method keys },

```

* * *

### Reference links   [Skip link to Reference links](https://docs.portone.cloud/docs/napas\#reference-links)

- [Napas integration](http://www.hitecha.org/vnt_upload/product/11_2017/NAPASMerchantIntegrationSpecification_2.2.pdf)
