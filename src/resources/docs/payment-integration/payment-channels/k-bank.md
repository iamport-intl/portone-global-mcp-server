---
url: "https://docs.portone.cloud/docs/k-bank"
title: "K-Bank"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/k-bank\#introduction)

K- Payment Gateway provided by KASIKORNBANK Public Company Limited is the online payment service to facilitate merchants and offers customers online payment options. Follow this guide to integrate KBank Payment Gateway.

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/k-bank\#supported-countries)

- Thailand 🇹🇭

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/k-bank\#available-payment-methods)

KBank PG supports THB(฿) currency.

| Payment Type | Payment Method Key | Currency | Status | Sandbox Availability |
| --- | --- | --- | --- | --- |
| QR CODE | `KBANK_PROMPTPAY` | THB | ✅ | ✅ |
| Credit Cards | `KBANK_CREDIT_CARD` | THB,USD | ✅ | ✅ |
| Installments by Credit Card | `KBANK_INSTALLMENT` | THB | ✅ | ✅ |
| AliPay Wallet | `KBANK_ALIPAY` | THB | ✅ | ✅ |
| Wechat Pay | `KBANK_WECHAT` | THB | ✅ | ❌ |
| UnionPay | `KBANK_UNIONPAY` | THB | ✅ | ✅ |

* * *

### Miscellaneous Details   [Skip link to Miscellaneous Details](https://docs.portone.cloud/docs/k-bank\#miscellaneous-details)

- **Webhook Settings :** Copy the Webhook URL provided in the PortOne Admin Dashboard & share it with KBank team to configure the Webhook URL for your account.
- **Callback URL Settings :** Share [https://api.portone.cloud/api/handleShopperRedirect/KBANK?callback=true](https://api.portone.cloud/api/handleShopperRedirect/KBANK?callback=true) as Callback URL with KBank team to configure the Callback URL for Card payments, Alipay and UnionPay payment methods.

* * *

### Refund Details   [Skip link to Refund Details](https://docs.portone.cloud/docs/k-bank\#refund-details)

| Payment Method | Credit Cards | Installments | Installments (Merchant Sponsored) | PromptPay | AliPay | UnionPay | WeChat |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Can be voided? (Full refund before settlement of transaction) | ✓ | ✓ | ✓ | ✕ | ✓ | ✓ | ✓ |
| Partial Refund Allowed? (Only on settled transactions) | ✓ | ✓ | ✓ | ✕ | ✕ | ✕ | ✕ |
| Multiple Refunds Allowed? (Only on settled transactions) | ✓ | ✕ | ✓ | ✕ | ✕ | ✕ | ✕ |

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/k-bank\#sandbox)

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/k-bank\#credentials)

| Key | Value |
| --- | --- |
| Public key | pkey\_test\_21555FTFHWDdKh1ypiI29MEAZRNLmQPw4p1B5 |
| Secret key | skey\_test\_21555dD22KoKIBjUFZP70kZD9rgwqcuwPPz2c |
| MID Installments | 401882301190001 |
| MID AliPay | 501772212141001 |
| MID WeChat | 501662212141001 |
| MID Cards(THB) | 401992212141001 |
| MID Cards(USD) | 402992212141001 |

* * *

#### Test cards data (3Ds supported)   [Skip link to Test cards data (3Ds supported)](https://docs.portone.cloud/docs/k-bank\#test-cards-data-3ds-supported)

| Card Brand | Card number | Name | Valid through | CVV | OTP | Result |
| --- | --- | --- | --- | --- | --- | --- |
| MASTERCARD | 5239620007270264 | - | Any | Any | 123456 | Approval |
| MASTERCARD | 5404888000072727 | - | Any | Any | 123456 | Approval |
| MASTERCARD | 5404888005380836 | - | Any | Any | 123456 | Approval |
| MASTERCARD | 5411768003140872 | - | Any | Any | 123456 | Approval |
| VISA | 4417706600005830 | - | Any | Any | 123456 | Approval |
| JCB | 3564580000056476 | - | Any | Any | 123456 | Approval |
| MASTERCARD | 2221000604647064 | - | Any | Any | 123456 | Declined |
| MASTERCARD | 5596886582263266 | - | Any | Any | 123456 | Declined |
| MASTERCARD | 5149504001969007 | - | Any | Any | 123456 | Declined |
| MASTERCARD | 5265434283867885 | - | Any | Any | 123456 | Declined |

* * *

#### Test cards data (Non 3Ds)   [Skip link to Test cards data (Non 3Ds)](https://docs.portone.cloud/docs/k-bank\#test-cards-data-non-3ds)

| Card Brand | Card number | Name | Valid through | CVV | Result |
| --- | --- | --- | --- | --- | --- |
| MASTERCARD | 5431289719925031 | - | Any | Any | Approval |
| MASTERCARD | 5565694828631115 | - | Any | Any | Approval |
| MASTERCARD | 2221000604647064 | - | Any | Any | Declined |
| MASTERCARD | 5596886582263266 | - | Any | Any | Declined |
| VISA | 4024007134786226 | - | Any | Any | Approval |
| VISA | 4485169016314923 | - | Any | Any | Approval |
| VISA | 4877300371267473 | - | Any | Any | Declined |
| VISA | 4147602662715373 | - | Any | Any | Declined |
| JCB | 3536353014086177 | - | Any | Any | Approval |
| JCB | 3540000981507917 | - | Any | Any | Declined |
| JCB | 3528730936342392 | - | Any | Any | Declined |
| JCB | 3532598050794027 | - | Any | Any | Declined |

#### UnionPay Test cards data   [Skip link to UnionPay Test cards data](https://docs.portone.cloud/docs/k-bank\#unionpay-test-cards-data)

| Card Brand | Card number | Valid through | CVV | SMS Code | Pin |
| --- | --- | --- | --- | --- | --- |
| TPN | 6210947764000027 | 10/30 | 456 | - | 111111 |
| TPN | 9100009764000010 | 03/25 | 123 | - | 111111 |
| TPN | 9100008764000025 | 03/25 | 123 | - | 111111 |
| TPN | 9100009764000015 | 03/25 | 123 | - | 111111 |
| TPN | 6250947000000014 | 12/33 | 123 | 111111(PC) or 123456(Mobile) | 111111 |
| TPN | 6250946000000016 | 12/33 | 123 | 111111(PC) or 123456(Mobile) | 111111 |

* * *

#### User login details for accessing KBank sandbox dashboard - QR Simulator   [Skip link to User login details for accessing KBank sandbox dashboard - QR Simulator](https://docs.portone.cloud/docs/k-bank\#user-login-details-for-accessing-kbank-sandbox-dashboard---qr-simulator)

| URL | Username | Password |
| --- | --- | --- |
| [KBank sandbox dashboard](https://dev-kpaymentgateway.kasikornbank.com/portal/v1/index.html) | [admin@chaithai.com](mailto:admin@chaithai.com) | Portone@123 |

* * *

#### AliPay test account details   [Skip link to AliPay test account details](https://docs.portone.cloud/docs/k-bank\#alipay-test-account-details)

| Buyer Account | Login Password | Payment Password |
| --- | --- | --- |
| [sand\_forex\_921246@alitest.com](mailto:sand_forex_921246@alitest.com) | 111111 | 111111 |

* * *

#### Use following values in embedded JS code to pay via KBank channel   [Skip link to Use following values in embedded JS code to pay via KBank channel](https://docs.portone.cloud/docs/k-bank\#use-following-values-in-embedded-js-code-to-pay-via-kbank-channel)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "KBANK",
    "pmt_method": { Any of above given payment method keys },

```
