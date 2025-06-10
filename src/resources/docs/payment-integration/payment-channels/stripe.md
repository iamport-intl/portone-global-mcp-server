---
url: "https://docs.portone.cloud/docs/stripe"
title: "Stripe"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/stripe\#introduction)

Stripe is a technology company that builds economic infrastructure for the internet. Businesses of every size – from new startups to public companies – use our software to accept payments and manage their businesses online. Millions of businesses of all sizes – from startups to large enterprises – use Stripe's software and APIs to accept payments, send payouts, and manage their businesses online.

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/stripe\#supported-countries)

- Global 🌏

* * *

### Available payment methods   [Skip link to Available payment methods](https://docs.portone.cloud/docs/stripe\#available-payment-methods)

| Payment Type | Payment Method Key | Currency | Status | Sandbox Availability |
| --- | --- | --- | --- | --- |
| Internation Payment (Credit Card) | `STRIPE_CARD` | All including VND, SGD, IDR, MYR, THB, PHP, USD | ✅ | ✅ |
| GrabPay Wallet | `STRIPE_GRABPAY` | SGD, MYR | ✅ | ✅ |
| Klarna BNPL | `STRIPE_KLARNA` | EUR,DKK,GBP,NOK,SEK,NOK,USD,CZK,AUD,NZD,CAD,PLN,CHF | ✅ | ✅ |
| Apple & Google Pay Wallet | `STRIPE_APPLE_GOOGLE_PAY` | EUR,DKK,GBP,NOK,SEK,NOK,USD,CZK,AUD,NZD,CAD,PLN,CHF | ✅ | ✅ |
| Afterpay & Clearpay Wallet | `STRIPE_AFTERPAY_CLEARPAY` | USD,CAD,GBP,AUD,NZD | ✅ | ✅ |
| Amazon Pay Wallet | `STRIPE_AMAZONPAY` | USD | ✅ | ✅ |
| Cash App Pay Wallet | `STRIPE_CASH_APP_PAY` | USD | ✅ | ✅ |
| Alipay Wallet | `STRIPE_ALIPAY` | CNY,AUD,CAD,EUR,GBP,HKD,JPY,SGD,MYR,NZD,USD | ✅ | ✅ |

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/stripe\#sandbox)

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/stripe\#credentials)

For Sandbox Credentials, complete Stripe onboarding through Port One admin dashboard in sandbox mode.

* * *

### Testing   [Skip link to Testing](https://docs.portone.cloud/docs/stripe\#testing)

#### [Stripe Dashboard](https://dashboard.stripe.com/)   [Skip link to [object Object]](https://docs.portone.cloud/docs/stripe\#stripe-dashboard)

#### [Test cards](https://stripe.com/docs/testing\#cards)   [Skip link to [object Object]](https://docs.portone.cloud/docs/stripe\#test-cards)

#### Cards by brand   [Skip link to Cards by brand](https://docs.portone.cloud/docs/stripe\#cards-by-brand)

| Brand | Number | CVC | Date |
| --- | --- | --- | --- |
| Visa | `4242424242424242` | Any 3 digits | Any future date |
| Visa (debit) | `4000056655665556` | Any 3 digits | Any future date |
| Mastercard | `5555555555554444` | Any 3 digits | Any future date |
| Mastercard (2-series) | `2223003122003222` | Any 3 digits | Any future date |
| Mastercard (debit) | `5200828282828210` | Any 3 digits | Any future date |
| Mastercard (prepaid) | `5105105105105100` | Any 3 digits | Any future date |
| American Express | `378282246310005` | Any 4 digits | Any future date |
| American Express | `371449635398431` | Any 4 digits | Any future date |
| Discover | `6011111111111117` | Any 3 digits | Any future date |
| Discover | `6011000990139424` | Any 3 digits | Any future date |
| Discover (debit) | `6011981111111113` | Any 3 digits | Any future date |
| Diners Club | `3056930009020004` | Any 3 digits | Any future date |
| Diners Club (14-digit) | `36227206271667` | Any 3 digits | Any future date |
| BCcard and DinaCard | `6555900000604105` | Any 3 digits | Any future date |
| JCB | `3566002020360505` | Any 3 digits | Any future date |
| UnionPay | `6200000000000005` | Any 3 digits | Any future date |
| UnionPay (debit) | `6200000000000047` | Any 3 digits | Any future date |
| UnionPay (19-digit) | `6205500000000000004` | Any 3 digits | Any future date |

* * *

#### Use following values in embedded JS code to pay via Stripe channel   [Skip link to Use following values in embedded JS code to pay via Stripe channel](https://docs.portone.cloud/docs/stripe\#use-following-values-in-embedded-js-code-to-pay-via-stripe-channel)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "STRIPE",
    "pmt_method": { Any of above given payment method keys },

```

* * *

### Reference links   [Skip link to Reference links](https://docs.portone.cloud/docs/stripe\#reference-links)

- [Stripe API Reference](https://stripe.com/docs/api)
- [Stripe Docs](https://stripe.com/docs)

Updated4 months ago

* * *

Did this page help you?

Yes

No

![Help](https://cdn.jsdelivr.net/gh/iamport-intl/portone-devx-chatbot-widget@production/public/chat-intro1.svg)