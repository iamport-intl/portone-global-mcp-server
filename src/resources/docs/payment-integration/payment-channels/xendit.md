---
url: "https://docs.portone.cloud/docs/xendit"
title: "Xendit"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/xendit\#introduction)

Xendit is a leading payment gateway for Indonesia, the Philippines and Southeast Asia. With a single integration, enable your business to accept payments in Indonesia and the Philippines. Credit and debit cards, e-Wallets, bank transfer and more.

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/xendit\#supported-countries)

- Indonesia 🇮🇩
- Philippines 🇵🇭

* * *

### Available payment methods   [Skip link to Available payment methods](https://docs.portone.cloud/docs/xendit\#available-payment-methods)

| Payment Type | Payment Method Key | Currency | Status | Sandbox Availability |
| --- | --- | --- | --- | --- |
| Ovo Wallet | `XENDIT_OVO` | IDR | ✅ | ✅ |
| Dana Wallet | `XENDIT_DANA` | IDR | ✅ | ✅ |
| LinkAja Wallet | `XENDIT_LINKAJA` | IDR | ✅ | ✅ |
| ShopeePay Wallet | `XENDIT_SHOPEEPAY` | IDR | ✅ | ✅ |
| Sakuku Wallet | `XENDIT_SAKUKU` | IDR | ✅ | ✅ |
| GrabPay Wallet | `XENDIT_GRABPAY` | PHP | ✅ | ✅ |
| GCash Wallet | `XENDIT_GCASH` | PHP | ✅ | ✅ |
| PayMaya Wallet | `XENDIT_PAYMAYA` | PHP | ✅ | ✅ |
| Internation Credit Cards | `XENDIT_CREDIT_CARD` | IDR, PHP | ✅ | ✅ |
| Virtual Account (Bank Transfer) | `XENDIT_VIRTUAL_ACCOUNT` | IDR | ✅ | ✅ |

* * *

### Miscellaneous Details   [Skip link to Miscellaneous Details](https://docs.portone.cloud/docs/xendit\#miscellaneous-details)

##### Indonesia   [Skip link to Indonesia](https://docs.portone.cloud/docs/xendit\#indonesia)

- Copy the Webhook URL provided in the PortOne Admin Dashboard & paste it to the [Xendit Callbacks Settings](https://dashboard.xendit.co/settings/developers#callbacks) for given products

  - Invoices
  - E-Wallets

##### Philippines   [Skip link to Philippines](https://docs.portone.cloud/docs/xendit\#philippines)

- Copy the Webhook URL provided in the PortOne Admin Dashboard & paste it to the [Xendit Callbacks Settings](https://dashboard.xendit.co/settings/developers#callbacks) for given products

  - E-Wallets

##### Wallet Refunds   [Skip link to Wallet Refunds](https://docs.portone.cloud/docs/xendit\#wallet-refunds)

| Value | OVO<br>🇮🇩 | DANA<br>🇮🇩 | SHOPEEPAY<br>🇮🇩 | LINKAJA<br>🇮🇩 | SAKUKU<br>🇮🇩 | GCASH<br>🇵🇭 | PAYMAYA<br>🇵🇭 | GRABPAY<br>🇵🇭 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Available at Xendit? | ✓ | ✓ | ✓ | Coming Soon! | ✕ | ✓ | ✓ | ✓ |
| Partial Refund Allowed? | ✓ | ✓ | ✕ | - | N/A | ✓ | ✓ <br> (Not on same day) | ✓ |
| Multiple Refunds Allowed? | ✓ | ✓ | ✕ | - | N/A | ✓ <br> (Capped at 7) | ✓ | ✓ |
| Validity Period | 14 Days | 30 Days | 365 Days | - | N/A | 180 Days | 365 Days | 365 Days |
| Transaction Fee Returned? | ✓ | ✕ | ✓ | - | N/A | ✓ | ✓ | ✓ |

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/xendit\#sandbox)

##### [Xendit Dashboard](http://dashboard.xendit.co/)   [Skip link to [object Object]](https://docs.portone.cloud/docs/xendit\#xendit-dashboard)

##### [Test cards](https://docs.xendit.co/credit-cards/integrations/test-scenarios)   [Skip link to [object Object]](https://docs.portone.cloud/docs/xendit\#test-cards)

#### Use following values in embedded JS code to pay via Xendit channel   [Skip link to Use following values in embedded JS code to pay via Xendit channel](https://docs.portone.cloud/docs/xendit\#use-following-values-in-embedded-js-code-to-pay-via-xendit-channel)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "XENDIT",
    "pmt_method": { Any of above given payment method keys },

```

* * *

### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/xendit\#credentials)

#### Indonesia   [Skip link to Indonesia](https://docs.portone.cloud/docs/xendit\#indonesia-1)

| Key | Value |
| --- | --- |
| publicKey | xnd\_public\_development\_Mk7jaloQEpNDe5gecOrrG67ui74uxtTjlFAs22A6A7o9oxiDQZy1orkCugR4qF |
| secretKey | xnd\_development\_HHn1XZXQeOzcaK8PE8RZsRqBRP5d5jze8DwJUhRYesSAWkM4IZ7eryvznhzIMsQo |

#### Philippines   [Skip link to Philippines](https://docs.portone.cloud/docs/xendit\#philippines-1)

| Key | Value |
| --- | --- |
| publicKey | xnd\_public\_development\_XnMtQSHzbxmSU9keByzIb6CxZ3EZxmwaOPS8CypC3c5SOURVvubbA28tudFOZh |
| secretKey | xnd\_development\_uQZdykZI39YoBcWpKS1Vvzx5PXndfwFkr85kMEREBcL9v3kxYBrlFMInqFUukYyH |

* * *

## Reference links   [Skip link to Reference links](https://docs.portone.cloud/docs/xendit\#reference-links)

- [Xendit API Reference](https://developers.xendit.co/api-reference/)
- [Xendit Docs](https://docs.xendit.co/)
