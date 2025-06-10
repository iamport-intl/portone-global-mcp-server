---
url: "https://docs.portone.cloud/docs/paymentwall"
title: "Paymentwall"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/paymentwall\#introduction)

Paymentwall is the first payment provider to partner with all major payment methods in 200 local regions, including

Europe & SEA to offer more than 150 local payment methods, including e-wallets, bank transfers, prepaid cards

cards, and cash options.

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/paymentwall\#supported-countries)

- Global 🌏

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/paymentwall\#available-payment-methods)

**Payment method other than credit cards are available in selected countries only and simulated in sandbox mode.**

| Payment Type | Payment Method Key | Integration Status | Refund Supported | Sandbox Availability | Regions Supported |
| --- | --- | --- | --- | --- | --- |
| Credit Card | `PAYMENTWALL_CREDIT_CARD` | ✅ | ✅ | ✅ | GLOBAL |
| FPX payment | `PAYMENTWALL_FPX` | ✅ | ✅ | ❌ | 🇲🇾 |
| Sofort payment | `PAYMENTWALL_SOFORT` | ✅ | ✅ | ❌ | 🇪🇺 |
| iDeal payment | `PAYMENTWALL_IDEAL` | ✅ | ✅ | ❌ | 🇳🇱 |
| Blik payment | `PAYMENTWALL_BLIK` | ✅ | ✅ | ❌ | 🇵🇱 |
| Przelewy24 payment | `PAYMENTWALL_PRZELEWY24` | ✅ | ✅ | ❌ | 🇵🇱 |
| Multibanco payment | `PAYMENTWALL_MULTIBANCO` | ✅ | ✅ | ❌ | 🇵🇹 |
| EPS payment | `PAYMENTWALL_EPS` | ✅ | ✅ | ❌ | 🇦🇹 |
| Bancontact payment | `PAYMENTWALL_BANCONTACT` | ✅ | ✅ | ❌ | 🇧🇪 |
| Payshop payment | `PAYMENTWALL_PAYSHOP` | ✅ | ❌ | ❌ | 🇵🇹 |
| Konbini payment | `PAYMENTWALL_KONBINI` | ✅ | ❌ | ❌ | 🇯🇵 |
| Naver Pay payment | `PAYMENTWALL_NAVERPAY` | ✅ | ✅ | ❌ | 🇰🇷 |
| Kakao Pay payment | `PAYMENTWALL_KAKAOPAY` | ✅ | ✅ | ❌ | 🇰🇷 |
| TossPay Payment | `PAYMENTWALL_TOSSPAY` | ✅ | ✅ | ❌ | 🇰🇷 |
| Touch n Go payment | `PAYMENTWALL_TOUCHNGO` | ✅ | ❌ | ❌ | 🇲🇾 |
| Boost payment | `PAYMENTWALL_BOOST` | ✅ | ❌ | ❌ | 🇲🇾 |
| GrabPay payment for MY | `PAYMENTWALL_GRABPAYMY` | ✅ | ❌ | ❌ | 🇲🇾 |
| GrabPay payment for PH | `PAYMENTWALL_GRABPAYPH` | ✅ | ✅ | ❌ | 🇵🇭 |
| PayNow payment | `PAYMENTWALL_PAYNOW` | ✅ | ❌ | ❌ | 🇸🇬 |
| MyBank payment | `PAYMENTWALL_MYBANK` | ✅ | ✅ | ❌ | 🇮🇹 |
| MB WAY payment | `PAYMENTWALL_MBWAY` | ✅ | ✅ | ❌ | 🇵🇹 |
| SEPA Direct Debit | `PAYMENTWALL_SEPA_DIRECTDEBIT` | ✅ | ✅ | ❌ | 🇪🇺 |
| Bank Transfer Thailand | `PAYMENTWALL_BANK_TRANSFERTH` | ✅ | ❌ | ❌ | 🇹🇭 |
| TrueMoney payment | `PAYMENTWALL_TRUEMONEY` | ✅ | ✅ | ❌ | 🇹🇭 |
| Rabbit LinePay payment | `PAYMENTWALL_LINEPAYTH` | ✅ | ✅ | ❌ | 🇹🇭 |
| PromptPay payment | `PAYMENTWALL_PROMPTPAY` | ✅ | ❌ | ❌ | 🇹🇭 |
| OVO payment | `PAYMENTWALL_OVO` | ✅ | ❌ | ❌ | 🇮🇩 |
| ShopeePay payment | `PAYMENTWALL_SHOPEEPAY` | ✅ | ✅ | ❌ | 🇮🇩 |
| DANA payment | `PAYMENTWALL_DANA` | ✅ | ✅ | ❌ | 🇮🇩 |
| QRIS payment | `PAYMENTWALL_QRIS` | ✅ | ✅ | ❌ | 🇮🇩 |

* * *

### Miscellaneous Details   [Skip link to Miscellaneous Details](https://docs.portone.cloud/docs/paymentwall\#miscellaneous-details)

- **Webhook**: Needs to be configured on the Paymentwall Dashboard

  - Copy the webhook URL from the Paymentwall payment channel in the PortOne dashboard
  - Go to the Paymentwall dashboard, from `My Projects` menu, click on `Settings` for the appropriate project
  - Paste the webhook URL from step 1 into the `Pingback URL` field

    - Make sure the `Pingback type` is set to URL
    - Set the `Pingback signature version` to `2`
    - Add the below params for `Custom Pingback parameters` field

      - Name => `custom` & Value => OWN
      - Name => `merchant_refund_id` & Value => OWN
  - Click on the save button at the bottom to save the changes
- Also, make sure you are using `Widget API - Digital Goods` for `Your API` section of the Project settings
- Customer email is a required field
- APMs can only be simulated in sandbox mode viathe Test method
- This integration also supports recurring payments for a customer. For more details, please connect with PortOne support


team

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/paymentwall\#sandbox)

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/paymentwall\#credentials)

| Key | Value |
| --- | --- |
| Brick Public Key | t\_ca809e2ad04d6b60b22c3abc1f0d77 |
| Brick Private Key | t\_81707eac585a63b5f52316eb459a4e |
| Project Key | 647ae35021a637dfe7c67470686cd2c4 |
| Project Secret Key | 91b991cabee3e2e91b36898b6c75753f |
| Widget Id | p1\_1 |

* * *

#### Test cards data   [Skip link to Test cards data](https://docs.portone.cloud/docs/paymentwall\#test-cards-data)

Test card data can be found [here](https://docs.paymentwall.com/integration/direct/brick/sandbox)

* * *

#### Use the following values in the embedded JS code to pay via the Paymentwall channel   [Skip link to Use the following values in the embedded JS code to pay via the Paymentwall channel](https://docs.portone.cloud/docs/paymentwall\#use-the-following-values-in-the-embedded-js-code-to-pay-via-the-paymentwall-channel)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "PAYMENTWALL",
    "pmt_method": { Any of above given payment method keys },

```

Updatedabout 2 months ago

* * *

Did this page help you?

Yes

No

![Help](https://cdn.jsdelivr.net/gh/iamport-intl/portone-devx-chatbot-widget@production/public/chat-intro1.svg)