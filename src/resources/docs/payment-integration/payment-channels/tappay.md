---
url: "https://docs.portone.cloud/docs/tappay"
title: "TapPay"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/tappay\#introduction)

TapPay is an important payment product of Cherri Tech, Inc., committed to creating payment services. Over 10,000 e-commerce and 50 banks have adopted TapPay payment services.

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/tappay\#supported-countries)

- Taiwan 🇹🇼

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/tappay\#available-payment-methods)

| Payment Method Key | Currency | Status | Sandbox Availability |
| --- | --- | --- | --- |
| `TAPPAY_CREDIT_CARD` | TWD | ✅ | ✅ |
| `TAPPAY_APPLEPAY` | TWD | ✅ | ❌ |
| `TAPPAY_SAMSUNGPAY` | TWD | ✅ | ❌ |
| `TAPPAY_GOOGLEPAY` | TWD | ✅ | ❌ |
| `TAPPAY_BANK_TRANSFER` | TWD | ✅ | ✅ |

* * *

### Miscellaneous Details   [Skip link to Miscellaneous Details](https://docs.portone.cloud/docs/tappay\#miscellaneous-details)

- For TapPay, the **customer's email**, **first name**, **last name** and **phone number** are required
- The customer's **phone number** should either start with 09 or + followed by numbers.
- To enable **ApplePay**, share the Apple on the Web `apple-developer-merchantid-domain-association` file with the PortOne team and whitelist `checkout.portone.cloud` domain
- This payment channel cannot be used without payment links

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/tappay\#sandbox)

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/tappay\#credentials)

| Key | Value |
| --- | --- |
| App ID | 156068 |
| App Key | app\_ZeqfRVMb3JCtlSwzrpDYInQnOW90NeSHAwMvRHIQjEEwW8ynWJ9TzQjA8MGh |
| Partner Key | partner\_pZhMCoReWq1qa7Ziwvseqe9jPxnmsjgqa5IyVjgbpV80fDFiLnOepRRE |
| Atm Merchant ID | portone\_ATM |
| ApplePay Merchant ID | portone\_CTBC |
| GooglePay Merchant ID | portone\_CTBC |
| Credit Card Merchant ID | portone\_CTBC |
| Samsung Pay Merchant ID | portone\_CTBC |
| ApplePay Merchant Identifier | APMEFHQpVq9bkh9hQBCq |

* * *

#### Test Card   [Skip link to Test Card](https://docs.portone.cloud/docs/tappay\#test-card)

| Test Card | Expiry Date | CVV |
| --- | --- | --- |
| 4242424242424242 | Any future date | Any 3-digit number |

* * *

#### Test API to simulate successful Bank Transfer   [Skip link to Test API to simulate successful Bank Transfer](https://docs.portone.cloud/docs/tappay\#test-api-to-simulate-successful-bank-transfer)

curl

```rdmd-code lang-curl theme-light

curl --location 'https://sandbox.tappaysdk.com/tpc/simulate/paid' \
--header 'x-api-key: partner_pZhMCoReWq1qa7Ziwvseqe9jPxnmsjgqa5IyVjgbpV80fDFiLnOepRRE' \
--header 'Content-Type: application/json' \
--data '{
    "partner_key": "partner_pZhMCoReWq1qa7Ziwvseqe9jPxnmsjgqa5IyVjgbpV80fDFiLnOepRRE",
    "rec_trade_id": "{{channel_order_ref}}"
}'

```

* * *

### Reference links   [Skip link to Reference links](https://docs.portone.cloud/docs/tappay\#reference-links)

- [Integration documentation](https://docs.tappaysdk.com/tutorial/zh/home.html)

Updated6 months ago

* * *

Did this page help you?

Yes

No

![Help](https://cdn.jsdelivr.net/gh/iamport-intl/portone-devx-chatbot-widget@production/public/chat-intro1.svg)