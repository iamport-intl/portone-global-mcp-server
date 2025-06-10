---
url: "https://docs.portone.cloud/docs/komoju"
title: "Komoju"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/komoju\#introduction)

Meet KOMOJU, your gateway to the world of global, cross-border payments and customers all around the world. Trusted by

everybody from large e-commerce giants through to growing online stores.

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/komoju\#supported-countries)

- Japan 🇯🇵

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/komoju\#available-payment-methods)

Komoju PG currently only supports JPY(¥) currency.

| Payment Type | Payment Method Key | Integration Status | Refund Supported | Sandbox Availability |
| --- | --- | --- | --- | --- |
| Credit/Debit Card | `KOMOJU_CREDIT_CARD` | ✅ | ✅ | ❌ |
| Bank transfer | `KOMOJU_BANK_TRANSFER` | ✅ | ❌ | ✅ |
| PayEasy | `KOMOJU_PAY_EASY` | ✅ | ❌ | ✅ |
| Konbini Seven-Eleven | `KOMOJU_KONBINI_711` | ✅ | ❌ | ✅ |
| Konbini Lawson | `KOMOJU_KONBINI_LAWSON` | ✅ | ❌ | ✅ |
| Konbini FamilyMart | `KOMOJU_KONBINI_FAMILY_MART` | ✅ | ❌ | ✅ |
| Konbini MiniStop | `KOMOJU_KONBINI_MINISTOP` | ✅ | ❌ | ✅ |
| Konbini Daily Yamazaki | `KOMOJU_KONBINI_DAILY_YAMAZAKI` | ✅ | ❌ | ✅ |
| Konbini Seicomart | `KOMOJU_KONBINI_SEICOMART` | ✅ | ❌ | ✅ |
| WebMoney prepaid | `KOMOJU_WEB_MONEY` | ✅ | ❌ | ❌ |
| MerPay wallet | `KOMOJU_MERPAY` | ✅ | ✅ | ✅ |
| LinePay wallet | `KOMOJU_LINEPAY` | ✅ | ✅ | ✅ |
| PayPay | `KOMOJU_PAYPAY` | ✅ | ✅ | ✅ |
| Alipay wallet | `KOMOJU_ALIPAY` | ✅ | ✅ | ✅ |
| Rakuten Pay wallet | `KOMOJU_RAKUTEN_PAY` | ✅ | ✅ | ✅ |
| Au Pay wallet | `KOMOJU_AU_PAY` | ✅ | ✅ | ✅ |
| Paidy | `KOMOJU_PAIDY` | ✅ | ❌ | ❌ |

* * *

### Miscellaneous Details   [Skip link to Miscellaneous Details](https://docs.portone.cloud/docs/komoju\#miscellaneous-details)

- **Webhook Settings:** Needs to be configured on the Komoju Dashboard
  - Copy the webhook URL from the Komoju page in the PortOne dashboard
  - Goto the Komoju dashboard, click on `Manage` menu from left and then select `Webhooks` section to add a new webhook.
  - Paste the webhook URL from Step 1 and set the Komoju `Secret Key` as the webhook secret key
  - Enable the below events for webhooks from the Komoju Dashboard
    - `payment.captured`
    - `payment.expired`
    - `payment.cancelled`
    - `payment.refunded`
    - `payment.failed`
- Email is required for the below methods
  - Konbini
  - Credit/Debit Card
- Name and Surname are required for the below methods
  - PayEasy
  - Bank Transfer
  - Paidy
  - Credit/Debit Card
- Phone is required for the Bank Transfer method

- WebMoney prepaid card method is currently not available in sandbox and via Checkout

- Billing or Shipping address is required for below methods
  - Paidy
- We also send `additional_payment_details` field in webhooks and query API in case of Konbini, PayEasy or Bank transfer methods
  - Konbini methods



    JSON





    ```rdmd-code lang-json theme-light

    "additional_payment_details": {
        "confirmation_code": "c9oc7",
        "email": "prashant@chai.finance",
        "instructions_url": "https://komoju.com/en/instructions/dl3oshvcayxlvu6tj8ygi30sc",
        "receipt": "zaixaa0qlh",
        "store": "family-mart",
        "type": "konbini",
        "wellnet_wallet_url": "https://cs.wellnet.jp/payment/mobile-app?payment-number=zaixaa0qlh&confirm-number=c9oc7"
      }

    ```

  - PayEasy



    JSON





    ```rdmd-code lang-json theme-light

    "additional_payment_details": {
        "bank_id": "z85k7",
        "confirmation_id": "m8ww9605vq",
        "customer_id": "6ygcxj3yhf",
        "email": "prashant@chai.finance",
        "instructions_url": "https://komoju.com/en/instructions/4548ldmw0wnlodu0ruska0q5h",
        "payment_url": "https://example.com",
        "type": "pay_easy"
      }

    ```

  - Bank Transfer



    JSON





    ```rdmd-code lang-json theme-light

    "additional_payment_details": {
        "account_branch_name": "TEST BRANCH",
        "account_name": "株式会社DEGICA（カブシキガイシャ デジカ）",
        "account_number": "TEST BANK",
        "account_type": "普通預金",
        "bank_name": "三井住友銀行",
        "email": "prashant@chai.finance",
        "instructions_url": "https://komoju.com/en/instructions/2qx8qlvso318k122whkccuek7",
        "order_id": "Y5368854536",
        "payment_deadline": "2024-10-24T23:59:59.999+09:00",
        "type": "bank_transfer"
      }

    ```

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/komoju\#sandbox)

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/komoju\#credentials)

| Key | Value |
| --- | --- |
| Public Key | pk\_test\_cp6dtxwa6ar9q7tyea5yrhvd |
| Secret Key | sk\_test\_bb1mpwsgqkfhqqook7nugayn |

* * *

[Komoju Dashboard](https://komoju.com/en/sign_in)

* * *

#### Test cards data   [Skip link to Test cards data](https://docs.portone.cloud/docs/komoju\#test-cards-data)

[Test Cards](https://doc.komoju.com/docs/test-cards)

* * *

#### Use following values in embedded JS code to pay via Komoju channel   [Skip link to Use following values in embedded JS code to pay via Komoju channel](https://docs.portone.cloud/docs/komoju\#use-following-values-in-embedded-js-code-to-pay-via-komoju-channel)

Text

```rdmd-code lang-text theme-light

    "pmt_channel": "KOMOJU",
    "pmt_method": { Any of above given payment method keys },

```

* * *

### Reference links   [Skip link to Reference links](https://docs.portone.cloud/docs/komoju\#reference-links)

- [API Docs](https://doc.komoju.com/)

Updated8 months ago

* * *

Did this page help you?

Yes

No

![Help](https://cdn.jsdelivr.net/gh/iamport-intl/portone-devx-chatbot-widget@production/public/chat-intro1.svg)