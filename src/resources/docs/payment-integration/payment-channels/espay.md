---
url: "https://docs.portone.cloud/docs/espay"
title: "Espay"
---

# ESPAY Integration   [Skip link to ESPAY Integration](https://docs.portone.cloud/docs/espay\#espay-integration)

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/espay\#introduction)

Online Payment Solution Espay provides a secure and convenient online payment solution, by providing a variety of payment channels that make your online and and offline business easier.

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/espay\#supported-countries)

- Indonesia 🇮🇩

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/espay\#available-payment-methods)

| Payment Type | Payment Method Key | Currency | Status | Sandbox Availability |
| --- | --- | --- | --- | --- |
| Credit Cards | `ESPAY_CREDIT_CARD` | IDR | ✅ | ✅ |
| BRI Virtual Account | `ESPAY_BRI_VA` | IDR | ✅ | ✅ |
| BRI E-Pay | `ESPAY_BRI_EPAY` | IDR | ✅ | ❌ |
| BRI Direct Debit | `ESPAY_BRI_DIRECT_DEBIT` | IDR | ✅ | ❌ |
| Mandiri Virtual Account | `ESPAY_MANDIRI_VA` | IDR | ✅ | ✅ |
| Permata Virtual Account | `ESPAY_PERMATA_VA` | IDR | ✅ | ✅ |
| Permata NetPay | `ESPAY_PERMATA_NETPAY` | IDR | ✅ | ❌ |
| Danamon Virtual Account | `ESPAY_DANAMON_VA` | IDR | ✅ | ✅ |
| Maybank Virtual Account | `ESPAY_MAYBANK_VA` | IDR | ✅ | ✅ |
| BNI Virtual Account | `ESPAY_BNI_VA` | IDR | ✅ | ❌ |
| CIMB Niaga Virtual Account | `ESPAY_CIMB_NIAGA_VA` | IDR | ✅ | ✅ |
| Maspion Virtual Account | `ESPAY_MASPION_VA` | IDR | ✅ | ✅ |
| Artha Graha Virtual Account | `ESPAY_ARTHA_GRAHA_VA` | IDR | ✅ | ✅ |
| BTN Virtual Account | `ESPAY_BTN_VA` | IDR | ✅ | ✅ |
| BTPN Virtual Account | `ESPAY_BTPN_VA` | IDR | ✅ | ❌ |
| LinkAja wallet | `ESPAY_LINKAJA` | IDR | ✅ | ✅ |
| DANA Wallet | `ESPAY_DANA` | IDR | ✅ | ❌ |
| Ovo Wallet | `ESPAY_OVO` | IDR | ✅ | ✅ |
| ShopeePay Wallet | `ESPAY_SHOPEEPAY` | IDR | ✅ | ❌ |
| CIMB Click | `ESPAY_CIMB_CLICK` | IDR | ✅ | ❌ |
| CIMB Direct Debit | `ESPAY_CIMB_DIRECT_DEBIT` | IDR | ✅ | ❌ |
| Akulaku | `ESPAY_AKULAKU` | IDR | ✅ | ❌ |
| QRIS | `ESPAY_QRIS` | IDR | ✅ | ✅ |

* * *

### Refund Details   [Skip link to Refund Details](https://docs.portone.cloud/docs/espay\#refund-details)

- Multiple Partial Refunds are not supported for ESPAY transactions.
- Only Credit Card Refund (full/partial) can be initialized from the merchant portal. For other payment method refunds please check ESPAY portal.
- For international cards, the refund time will be from 7-14 days, depending on each bank SLA.

* * *

### Miscellaneous Details   [Skip link to Miscellaneous Details](https://docs.portone.cloud/docs/espay\#miscellaneous-details)

- To integrate with **ESPAY QRIS**, merchants are required to whitelist the PortOne IP and get both the PortOne and ESPay Public keys configured from ESPay team for their ESPay MID.

- **Inquiry URL Settings :** Share [https://api.portone.cloud/inquire/espay/{PortOne\_Key}](https://api.portone.cloud/inquire/espay/%7BPortOne_Key%7D) as Inquiry URL with ESPAY team to configure the Inquiry URL for your account.

- **Webhook Settings :** Copy the Webhook URL provided in the PortOne Admin Dashboard & share it with ESPAY team to configure the Webhook URL for your account.

- In Billing details following fields are mandatory:
  - Billing Name
  - Billing Surname
  - Billing Email
  - Billing Phone
- In Shipping details following fields are mandatory:
  - Shipping Name
  - Shipping Surname
  - Shipping Phone
  - Shipping Address - Line 1
  - Shipping Address - Line 2
  - Shipping Address - City
  - Shipping Address - Postal Code
  - Shipping Address - Country Code

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/espay\#sandbox)

#### Use following values in embedded JS code to pay via ESPAY channel   [Skip link to Use following values in embedded JS code to pay via ESPAY channel](https://docs.portone.cloud/docs/espay\#use-following-values-in-embedded-js-code-to-pay-via-espay-channel)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "ESPAY",
    "pmt_method": { Any of above given payment method keys },

```

* * *

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/espay\#credentials)

| Merchant Code | Merchant Name | API Key | Signature | Password |
| --- | --- | --- | --- | --- |
| SGWCHAIPAY | CHAIPAY | aa56978e5564934bce81433b9c2dcc84 | 6w61yuqltr3qh1ej | IMFVI^\|T?G |

* * *

#### Test card data for Credit Card payment method   [Skip link to Test card data for Credit Card payment method](https://docs.portone.cloud/docs/espay\#test-card-data-for-credit-card-payment-method)

| Type | Card number |
| --- | --- |
| Credit Card | 4546335124562623 |
| Credit Card | 5104812441261692 |
| Credit Card | 4111111111111111 |
| Credit Card | 5500296757021801 |
| Credit Card | 3566111111111113 |
| Credit Card | 378282246310005 |
| Credit Card | 4055778918139848 |
| Credit Card | 5188287781273814 |
| Credit Card | 4687407712737112 |

* * *

#### Test Phone details for OVO wallet   [Skip link to Test Phone details for OVO wallet](https://docs.portone.cloud/docs/espay\#test-phone-details-for-ovo-wallet)

| Mobile Number |
| --- |
| 081211111111 |

* * *

#### User login details for accessing ESPAY sandbox dashboard - VA Simulator and Linkaja Wallet Sandbox   [Skip link to User login details for accessing ESPAY sandbox dashboard - VA Simulator and Linkaja Wallet Sandbox](https://docs.portone.cloud/docs/espay\#user-login-details-for-accessing-espay-sandbox-dashboard---va-simulator-and-linkaja-wallet-sandbox)

| URL | Cust ID | User ID | User Name | User Password |
| --- | --- | --- | --- | --- |
| [ESPAY sandbox dashboard](https://sandbox-portal.espay.id/) | CHAIPAY001 | 6287654445 | CHAIPAY | @PortOne123 |

* * *

#### Sample payload for initiatePayment   [Skip link to Sample payload for initiatePayment](https://docs.portone.cloud/docs/espay\#sample-payload-for-initiatepayment)

JavaScript

```rdmd-code lang-javascript theme-light

{
    "key": {portone_key},
    "merchant_order_id": {merchant_order_id},
    "amount": 20000,
    "currency": "IDR",
    "signature_hash": {signature_hash},
    "billing_details": {
        "billing_name": "Firstwewq",
        "billing_surame": "LAst21223",
        "billing_email": "test23@gmail.com",
        "billing_phone": "+34324324",
    },
    "shipping_details": {
        "shipping_name": "First232",
        "shipping_surname":"LAst21223",
        "shipping_email": "test33@gmail.com",
        "shipping_phone": "89359893980",
        "shipping_address": {
            "city": "City3",
            "country_code": "ID",
            "line_1": "Line 1",
            "line_2":"Line 2"
            "postal_code": "400202",
        }
    },
    "success_url": "https://dev-checkout.portone.cloud/success.html",
    "failure_url": "https://dev-checkout.portone.cloud/failure.html",
    "pending_url": "https://dev-checkout.portone.cloud/pending.html",
    "pmt_channel": "ESPAY",
    "pmt_method": { Any of above given payment method keys },
    "description":"Payment for the order #42140324",
    "environment":"sandbox"
}

```

* * *

#### Sample payload for paymentLink   [Skip link to Sample payload for paymentLink](https://docs.portone.cloud/docs/espay\#sample-payload-for-paymentlink)

JavaScript

```rdmd-code lang-javascript theme-light

{
    "portone_key": {portone_key},
    "merchant_details": {
        "name": "Test Company",
        "back_url": "https://dev-admin.portone.io",
        "promo_code": "NA",
        "promo_discount": 0,
        "shipping_charges": 0
    },
    "signature_hash": {signature_hash},
    "amount": 100000,
    "currency": "IDR",
    "country_code": "ID",
    "merchant_order_id": {merchant_order_id},
   "billing_details": {
        "billing_name": "First Middle Last",
        "billing_surame": "LAst21223",
        "billing_email": "test@portone.com",
        "billing_phone": "+8959893980"
    },
    "shipping_details": {
        "shipping_name": "First Middle Last",
        "shipping_surname":"LAst21223",
        "shipping_email": "test33@gmail.com",
        "shipping_phone": "8959893980",
        "shipping_address": {
            "line_1": "Line 1",
            "line_2":"Line 2",
            "city": "City",
            "postal_code": "400202",
            "country_code": "ID"
        }
    },
    "success_url": "https://dev-checkout.portone.cloud/success.html",
    "failure_url": "https://dev-checkout.portone.cloud/failure.html",
    "pending_url": "https://dev-checkout.portone.cloud/pending.html",
    "expiry_hours": 48,
    "source": "api",
    "description": "Payment for the order #42140324",
    "show_shipping_details": false,
    "show_back_button": false,
    "default_guest_checkout": true,
    "is_checkout_embed": false,
    "environment": "sandbox"
}

```

* * *

### Reference links   [Skip link to Reference links](https://docs.portone.cloud/docs/espay\#reference-links)

- [ESPAY Integration guide](https://sandbox-kit.espay.id/docs/v2/docespay/#payment_gateway)
