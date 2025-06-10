---
url: "https://docs.portone.cloud/docs/asiapay"
title: "AsiaPay"
---

# Asiapay Integration   [Skip link to Asiapay Integration](https://docs.portone.cloud/docs/asiapay\#asiapay-integration)

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/asiapay\#introduction)

Paydollar(Asiapay) eCommerce service is an integrated payment transaction-processing service that allows your business of any size to accept digital payments by credit/debit cards anywhere, anytime through eCommerce and mCommerce, at an affordable price in just days. With a single account, you can accept payment from ranges of credit/debit cards, bank accounts/netbanking, digital wallets, buy now pay later, over-the counters of multi-currencies in various channels.

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/asiapay\#supported-countries)

- Vietnam 🇻🇳
- Thailand 🇹🇭
- Indonesia 🇮🇩
- Singapore 🇸🇬
- Malaysia 🇲🇾
- Taiwan 🇹🇼
- Philippines 🇵🇭
- Global 🌏

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/asiapay\#available-payment-methods)

Asiapay supports many currencies. Please check merchant portal to see all.

| Payment Type | Payment Method Key | Currency | Status | Sandbox Availability |
| --- | --- | --- | --- | --- |
| LinePay Wallet | `ASIAPAY_LINEPAY` | THB,TWD | ✅ | ❌ |
| ShopeePay Wallet | `ASIAPAY_SHOPEEPAY` | THB,IDR,PHP | ✅ | ❌ |
| DANA Wallet | `ASIAPAY_DANA` | IDR | ✅ | ❌ |
| OVO Wallet | `ASIAPAY_OVO` | IDR | ✅ | ❌ |
| GrabPay Wallet | `ASIAPAY_GRABPAY` | SGD,MYR,PHP | ✅ | ❌ |
| Boost Wallet | `ASIAPAY_BOOST` | MYR | ✅ | ❌ |
| Touch n Go Wallet | `ASIAPAY_TOUCHNGO` | MYR | ✅ | ❌ |
| WechatPay Wallet | `ASIAPAY_WECHATPAY` | SGD,THB,PHP | ✅ | ❌ |
| AliPay Wallet | `ASIAPAY_ALIPAY` | VND,SGD,THB,MYR,PHP | ✅ | ❌ |
| UnionPay Wallet | `ASIAPAY_UNIONPAY` | SGD,THB,MYR,TWD | ✅ | ❌ |
| Paypal | `ASIAPAY_PAYPAL` | MYR | ✅ | ❌ |
| Credit Card | `ASIAPAY_CREDIT_CARD` | VND,SGD,THB,MYR,IDR,TWD,PHP,USD | ✅ | ✅ |
| MomoPay Wallet | `ASIAPAY_MOMOPAY` | VND | ✅ | ❌ |
| All methods | `ASIAPAY_ALL` | VND,SGD,THB,MYR,IDR,TWD,PHP | ✅ | ❌ |
| JKOPay wallet | `ASIAPAY_JKOPAY` | TWD | ✅ | ❌ |
| Atome | `ASIAPAY_ATOME` | TWD,MYR | ✅ | ❌ |
| Scan & Pay | `ASIAPAY_SCAN_AND_PAY` | MYR | ✅ | ❌ |
| ShopBack | `ASIAPAY_SHOPBACK` | MYR | ✅ | ❌ |
| Pace | `ASIAPAY_PACE` | MYR | ✅ | ❌ |
| FPX | `ASIAPAY_FPX` | MYR | ✅ | ✅ |
| GCash Wallet | `ASIAPAY_GCASH` | PHP | ✅ | ❌ |
| UnionPay Wallet | `ASIAPAY_UNIONPAY_PH` | PHP | ✅ | ❌ |
| TendoPay | `ASIAPAY_TENDOPAY` | PHP | ✅ | ❌ |
| BDO | `ASIAPAY_BDO` | PHP | ✅ | ❌ |
| BPI | `ASIAPAY_BPI` | PHP | ✅ | ❌ |
| Landbank | `ASIAPAY_LANDBANK` | PHP | ✅ | ❌ |
| Metrobank | `ASIAPAY_METROBANK` | PHP | ✅ | ❌ |
| RCBC | `ASIAPAY_RCBC` | PHP | ✅ | ❌ |
| Unionbank | `ASIAPAY_UNIONBANK` | PHP | ✅ | ❌ |

* * *

### Miscellaneous Details   [Skip link to Miscellaneous Details](https://docs.portone.cloud/docs/asiapay\#miscellaneous-details)

- **Webhook Settings :** Copy the Webhook URL provided in the PortOne Admin Dashboard & put in webhook configuration section in asiapay portal to configure the Webhook URL for your account

* * *

### Refund Details   [Skip link to Refund Details](https://docs.portone.cloud/docs/asiapay\#refund-details)

- Refunds can be initialized from the merchant portal, for refund status please check the Asiapay Dashboard
- Partial Refunds can be requested after 24 hours of the transaction, within 24 hours only Full Refund is possible

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/asiapay\#sandbox)

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/asiapay\#credentials)

| Country | API Password | API Username | Asiapay Entity | Login Id | Merchant Id | Password | Secure Secret | Currency |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Singapore | chai1105 | apichai | PayDollar | admin | 12108635 | E2k$k^N^C#T5 | SC2Al0jnIydO6rWsKkMAPB8gsVa11kab | SGD |
| Vietnam | chaipayvn1234 | apichaipayvn | PayDollar | admin | 74001645 | A!U4T@p6H5e$ | InhcXVnTP07ewFdmiVAifRJFvHkm6SO6 | VND |
| Malaysia | demo1234 | apiChaiPay | PayDollar | admin | 85006409 | E3l5N^u$R1u@ | A5eFnKvtAvp9cNLyOMyNoQxK8wKGFyp8 | MYR |
| Indonesia | demo1234 | demoAPI | PayDollar | adminchaipayid | 36002095 | z4q1p7i!G3g^ | EU4maU50o1SQRadHSFS687bQ03D4LOya | IDR |
| Taiwan | chai2208 | apichai | PayDollar | admin | 91001141 | X@P!F@n!b7j0 | NA | TWD |
| Philippines | pApipass | aApiuser | PesoPay | admin | 18075907 | WDNXMrM@7 | tR4hpfFcZfQcRx7EC1rwGZ5kQxerxFEq | PHP |
| Global | chaipay1234 | apichaipayvn | PayDollar | admin | 74001999 | w^s4k$j$l2x5 | GLAG7BnbcmuHCbtH3C0K3QgiODgDDD0W | USD |

* * *

#### Test cards data   [Skip link to Test cards data](https://docs.portone.cloud/docs/asiapay\#test-cards-data)

- [Test Cards](https://test.pesopay.com/b2cuat/eng/merchant/support/threeDSTestingCardInfo.html)

| Type | Bank | Card number | Name | Valid through | CVV/OTP |
| --- | --- | --- | --- | --- | --- |
| Credit Card | Visa | 4918914107195005 | - | 07/2030 | 123 |
| Credit Card | Mastercard | 5258950000000020 | - | 07/2030 | 123 |
| Credit Card | American Express | 378416000100026 | - | 07/2030 | 1234 |
| Credit Card | JCB | 3528010000010021 | - | 07/2030 | 123 |

* * *

#### Test cards for 3DS   [Skip link to Test cards for 3DS](https://docs.portone.cloud/docs/asiapay\#test-cards-for-3ds)

| Type | Bank | Card number | Name | Valid through | CVV/OTP | One Time Passcode |
| --- | --- | --- | --- | --- | --- | --- |
| Credit Card | Visa | 4335900000140045 | - | 07/2030 | 123 | password |
| Credit Card | Mastercard | 5258950000000012 | - | 07/2030 | 123 | password |
| Credit Card | American Express | 378416000100018 | - | 07/2030 | 1234 | password |
| Credit Card | JCB | 3528010000010013 | - | 07/2030 | 123 | password |

* * *

#### Test Details for FPX   [Skip link to Test Details for FPX](https://docs.portone.cloud/docs/asiapay\#test-details-for-fpx)

| Bank | User ID | Password |
| --- | --- | --- |
| SBI Bank A | 1234 | 1234 |

* * *

#### Use following values in embedded JS code to pay via Asiapay channel   [Skip link to Use following values in embedded JS code to pay via Asiapay channel](https://docs.portone.cloud/docs/asiapay\#use-following-values-in-embedded-js-code-to-pay-via-asiapay-channel)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "ASIAPAY",
    "pmt_method": { Any of above given payment method keys },

```

* * *

### Reference links   [Skip link to Reference links](https://docs.portone.cloud/docs/asiapay\#reference-links)

- [Asiapay Integration guide](http://www.paydollar.com/pdf/op/enpdintguide.pdf)

Updated8 months ago

* * *

Did this page help you?

Yes

No

![Help](https://cdn.jsdelivr.net/gh/iamport-intl/portone-devx-chatbot-widget@production/public/chat-intro1.svg)