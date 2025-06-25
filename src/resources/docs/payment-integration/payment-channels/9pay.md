---
url: "https://docs.portone.cloud/docs/9pay"
title: "Ninepay"
---

# Ninepay Integration   [Skip link to Ninepay Integration](https://docs.portone.cloud/docs/9pay\#ninepay-integration)

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/9pay\#introduction)

Ninepay is one of Vietnam's leading Payment Gateway providers. It has a comprehensive payment solution with all payment methods: Visa credit card, global MasterCard, ATM cards of 40+ largest banks in Vietnam, Ninepay e-wallet.

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/9pay\#supported-countries)

- Vietnam 🇻🇳

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/9pay\#available-payment-methods)

Ninepay PG only supports VND(₫) currency.

| Payment Type | Payment Method Key | Status |
| --- | --- | --- |
| Local ATM Card | `NINEPAY_ATM_CARD` | ✅ |
| Credit Card | `NINEPAY_CREDIT_CARD` | ✅ |
| Ninepay Wallet | `NINEPAY_WALLET` | ✅ |
| All methods | `NINEPAY_ALL` | ✅ |

### Refund Details   [Skip link to Refund Details](https://docs.portone.cloud/docs/9pay\#refund-details)

| Payment Method | ATM Cards | Credit Cards | Ninepay Wallet | All method |
| --- | --- | --- | --- | --- |
| Full refund? | ✓ | ✓ | ✓ | ✓ |
| Partial Refund Allowed? | ✓ | ✓ | ✓ | ✓ |
| Multiple Refunds Allowed? | ✓ | ✓ | ✓ | ✓ |
| Refund Transfer Period | Depend on Issuing bank (30-40days) | 180 days | 180 days | Depends on payment method |

* * *

### Miscellaneous Details   [Skip link to Miscellaneous Details](https://docs.portone.cloud/docs/9pay\#miscellaneous-details)

- Refunds can be initialized from the merchant portal, refund status can be checked at both merchant portal and Ninepay Dashboard

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/9pay\#sandbox)

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/9pay\#credentials)

| Key | Value |
| --- | --- |
| Merchant Key | WYpuJ1 |
| Secret Key | 5MDbyAgtqCUs7MKWXs5uYeCrcdvFBNcdMDp |
| secretKeyCheckSum | X13MvDJY5OLz0tjLyfgrCdE8nUxokSCa |

#### Test Cards data   [Skip link to Test Cards data](https://docs.portone.cloud/docs/9pay\#test-cards-data)

| Type | Card number | Name | Valid through | CVV | Status |
| --- | --- | --- | --- | --- | --- |
| Credit Card | 9704000000000018 | Nguyen Van A | 03/27 | NA |  |
| Credit Card | 4005555555000009 | Nguyen Van A | 05/25 | 123 |  |

| Bank | Type | Card number | Name | Valid through | Phone Number | otp |
| --- | --- | --- | --- | --- | --- | --- |
| Vietcombank | ATM Card | 9704000000000018 | Nguyen Van A | 03/07 | NA | otp |
| MBBank | ATM Card | 9704222091320309 | AUTOAUTJHWNMQ | 05/21 | 0973214568 | 04111994 |

- OTP - 123456
- Password - 1234

### Download links   [Skip link to Download links](https://docs.portone.cloud/docs/9pay\#download-links)

Download the Sandbox App for making test payments:

- [Android app - staging](https://github.com/iamport-intl/Integration-documents/blob/master/app-stg-release.apk)
  - Phone Number: 0945 666 000
  - Password: 123123
  - Otp: 123456
- [Android app - play store](https://play.google.com/store/apps/details?id=vn.ninepay.ewallet)
  - Phone number: 0389966858
  - Password: 123123
  - Otp: 123456

#### Use the following values in the embedded JS code to pay via the Ninepay channel   [Skip link to Use the following values in the embedded JS code to pay via the Ninepay channel](https://docs.portone.cloud/docs/9pay\#use-the-following-values-in-the-embedded-js-code-to-pay-via-the-ninepay-channel)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "NINEPAY",
    "pmt_method": { Any of above given payment method keys },

```

* * *

### Reference links   [Skip link to Reference links](https://docs.portone.cloud/docs/9pay\#reference-links)

- [Ninepay integration](https://github.com/iamport-intl/Integration-documents/blob/master/%5B9Pay%5D%20API%20Documents.pdf)
