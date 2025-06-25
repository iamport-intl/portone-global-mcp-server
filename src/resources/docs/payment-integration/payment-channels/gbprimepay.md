---
url: "https://docs.portone.cloud/docs/gbprimepay"
title: "GBPrimePay"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/gbprimepay\#introduction)

GB Prime Pay is an online payment platform which enables merchants to receive payments from their customers in a simple and secure way.

Follow this guide to integrate GBPrimePay acceptance on your mobile app or website.

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/gbprimepay\#supported-countries)

- Thailand 🇹🇭

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/gbprimepay\#available-payment-methods)

GBPrimePay PG only supports THB(฿) currency.

| Payment Type | Payment Method Key | Currency | Status | Sandbox Availability |
| --- | --- | --- | --- | --- |
| Credit Cards | `GBPRIMEPAY_CREDIT_CARD` | THB | ✅ | ✅ |
| PromptPay | `GBPRIMEPAY_QRCASH` | THB | ✅ | ✅ |
| QR Credit | `GBPRIMEPAY_QRCREDIT` | THB | ✅ | ❌ |
| TrueMoney Wallet | `GBPRIMEPAY_TRUEMONEY_WALLET` | THB | ✅ | ✅ |
| Rabbit LinePay Wallet | `GBPRIMEPAY_RABBIT_LINEPAY_WALLET` | THB | ✅ | ✅ |
| ShopeePay Wallet | `GBPRIMEPAY_SHOPEEPAY_WALLET` | THB | ✅ | ❌ |
| Wechat Wallet | `GBPRIMEPAY_WECHAT_WALLET` | THB | ✅ | ❌ |
| KPlus Bank | `GBPRIMEPAY_KPLUS_BANK` | THB | ✅ | ✅ |
| Krungsri Bank | `GBPRIMEPAY_KRUNGSRI_BANK` | THB | ✅ | ❌ |
| Krungthai Bank | `GBPRIMEPAY_KRUNGTHAI_BANK` | THB | ✅ | ❌ |
| BBL Bank (Mobile only) | `GBPRIMEPAY_BBL_BANK` | THB | ✅ | ❌ |
| SCB Easy Bank (Mobile only) | `GBPRIMEPAY_SCBEASY_BANK` | THB | ✅ | ❌ |
| Installment | `GBPRIMEPAY_INSTALLMENT` | THB | ✅ | ✅ |
| Atome | `GBPRIMEPAY_ATOME` | THB | ✅ | ❌ |

* * *

### Refund Details   [Skip link to Refund Details](https://docs.portone.cloud/docs/gbprimepay\#refund-details)

| Payment Method | Debit Cards | Credit Cards | Installment | PromptPay | QR Credit | TrueMoney | Rabbit LinePay | ShopeePay | Wechat | KPlus Bank, Krungsri Bank, Krungthai Bank, BBL Bank and SCB Easy Bank | Atome |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Can be voided? (Full refund before settlement of transaction) | ✓ | ✓ | ✓ | ✕ | ✕ | ✕ | ✓ | ✕ | ✕ | ✕ | ✕ |
| Partial Refund Allowed? (Only on settled transactions) | ✓ | ✓ | ✕ | ✕ | ✓ | ✓ | ✓ | ✓ | ✓ | ✕ | ✓ |
| Multiple Refunds Allowed? (Only on settled transactions) | ✓ | ✓ | ✕ | ✕ | ✓ | ✓ | ✓ | ✓ | ✓ | ✕ | ✓ |
| Refund Transfer Period | 30-45 Days | 30-45 Days | 30-45 Days | NA | 30-45 Days | 1-7 Days | Immediate for it's e-wallet ; 30-45 Days for Credit | 1-7 Days | 30-45 Days | NA | 30-45 Days |

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/gbprimepay\#sandbox)

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/gbprimepay\#credentials)

| Key | Value |
| --- | --- |
| MerchantId | gbp10029 |
| Token | L2qWbze20i4Nh4njMubPxBOGTzU3bHHalobxBABUlWlrhwkDCLCAT1CEhlJXI8eUTZLjEbVqUnae0ysqf37889aDbbWlT2ws/yUUAxFuurjt8M7UrZejJdAeOvDIyizWZy5ZeXFgPPxDx0O4uO/47ECGbmEIRvZC/9CQVMy/M5FAzCgt |
| PublicKey | xRYDP9YwQQeYyZH17clSUMe8qoUcnc5a |
| SecretKey | oice7rFTaDQQ6z4PqKstq7bKCp9NLByw |

* * *

[GBPrimePay Dashboard](https://www.globalprimepay.com/th/login)

* * *

#### Test cards data   [Skip link to Test cards data](https://docs.portone.cloud/docs/gbprimepay\#test-cards-data)

| Type | Card number | Name | Valid through | CVV/OTP |
| --- | --- | --- | --- | --- |
| Credit/Debit Card | 4535 0177 1053 5741 | - | 05/28 | 184 |
| Credit/Debit Card | 5258 8606 8990 5862 | - | 02/25 | 950 |

* * *

#### Test Phone details for bank methods and TrueMoney wallet   [Skip link to Test Phone details for bank methods and TrueMoney wallet](https://docs.portone.cloud/docs/gbprimepay\#test-phone-details-for-bank-methods-and-truemoney-wallet)

| Methods | Phone Number | OTP |
| --- | --- | --- |
| GBPRIMEPAY\_KPLUS\_BANK, GBPRIMEPAY\_KRUNGSRI\_BANK, GBPRIMEPAY\_KRUNGTHAI\_BANK, GBPRIMEPAY\_BBL\_BANK, GBPRIMEPAY\_SCBEASY\_BANK | 0830443596 | - |
| GBPRIMEPAY\_TRUEMONEY\_WALLET | 0830443596 | 123456 |

* * *

#### Use following values in embedded JS code to pay via GBPrimePay channel   [Skip link to Use following values in embedded JS code to pay via GBPrimePay channel](https://docs.portone.cloud/docs/gbprimepay\#use-following-values-in-embedded-js-code-to-pay-via-gbprimepay-channel)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "GBPRIMEPAY",
    "pmt_method": { Any of above given payment method keys },

```

* * *

### Reference links   [Skip link to Reference links](https://docs.portone.cloud/docs/gbprimepay\#reference-links)

- [GBPrimePay Integration guide](https://doc.gbprimepay.com/)
- [GBPrimePay QR Scanner tool for QRCASH Method](http://qrtool.globalprimepay.com/qr)
