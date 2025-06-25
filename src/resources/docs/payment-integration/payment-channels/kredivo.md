---
url: "https://docs.portone.cloud/docs/kredivo"
title: "Kredivo"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/kredivo\#introduction)

Kredivo gives customers instant credit financing for ecommerce purchases and personal loans based on real-time decisioning.

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/kredivo\#supported-countries)

- Vietnam 🇻🇳

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/kredivo\#available-payment-methods)

| Payment Type | Payment Method Key | Currency | Status | Sandbox Availability |
| --- | --- | --- | --- | --- |
| BNPL | `KREDIVO_BNPL` | VND | ✅ | ✅ |

* * *

### Miscellaneous Details   [Skip link to Miscellaneous Details](https://docs.portone.cloud/docs/kredivo\#miscellaneous-details)

##### Vietnam   [Skip link to Vietnam](https://docs.portone.cloud/docs/kredivo\#vietnam)

- Refunds can be initialized from the merchant portal, Partial refunds are not supported for VND currency

- In Order details following fields are mandatory:
  - Id
  - Name
  - Quantity
  - Price
  - Additional Details - Type
  - Additional Details - URL
- In Billing details following fields are mandatory:
  - Billing Name
  - Billing Email
  - Billing Phone
- In Shipping details following fields are mandatory:
  - Shipping Name
  - Shipping Phone
  - Shipping Address - Line 1
  - Shipping Address - Line 2
  - Shipping Address - City
  - Shipping Address - State
  - Shipping Address - Country Name
  - Shipping Address - Postal Code
  - Shipping Address - Country Code

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/kredivo\#sandbox)

#### Use following values in embedded JS code to pay via Kredivo channel   [Skip link to Use following values in embedded JS code to pay via Kredivo channel](https://docs.portone.cloud/docs/kredivo\#use-following-values-in-embedded-js-code-to-pay-via-kredivo-channel)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "KREDIVO",
    "pmt_method": { Any of above given payment method keys },

```

* * *

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/kredivo\#credentials)

| country | serverKey |
| --- | --- |
| Vietnam | cHAi\_sAnDbOX |

* * *

#### Test user data for Kredivo BNPL payment method   [Skip link to Test user data for Kredivo BNPL payment method](https://docs.portone.cloud/docs/kredivo\#test-user-data-for-kredivo-bnpl-payment-method)

| Country | Number | PIN | Limit | OTP |
| --- | --- | --- | --- | --- |
| Vietnam | +84-900000000 | 447462 | Unlimited Credit | 4567 |
| Vietnam | +84-900000001 | 447462 | 5 million VND | 4567 |

* * *

#### Sample payload for initiatePayment   [Skip link to Sample payload for initiatePayment](https://docs.portone.cloud/docs/kredivo\#sample-payload-for-initiatepayment)

JavaScript

```rdmd-code lang-javascript theme-light

{
    "key": { portone_key},
    "merchant_order_id": { merchant_order_id },
    "amount":100000,
    "currency": "VND",
    "signature_hash": { signature_hash },
    "order_details": [{\
        "id": "1",\
        "name": "item1",\
        "quantity": 1,\
        "price": 100000,\
        "additional_details":{\
            "type":"item-type",\
            "url":"item-url"\
        }\
    }],
   "billing_details": {
        "billing_name": "First Middle Last",
        "billing_email": "test@portone.com",
        "billing_phone": "+8959893980"
    },
    "shipping_details": {
        "shipping_name": "First Middle Last",
        "shipping_phone": "8959893980",
        "shipping_address": {
            "line_1": "Line 1",
            "line_2":"Line 2",
            "city": "City",
            "postal_code": "400202",
            "state": "State"
            "country_code": "VN",
            "country_name":"Vietnam"
        }
    },
    "success_url": "https://dev-checkout.portone.cloud/success.html",
    "failure_url": "https://dev-checkout.portone.cloud/failure.html",
    "pmt_channel": "KREDIVO",
    "pmt_method": { Any of above given payment method keys },
    "description": "Payment for the order #42140324",
    "environment":"sandbox"
}

```

* * *

#### Sample payload for paymentLink   [Skip link to Sample payload for paymentLink](https://docs.portone.cloud/docs/kredivo\#sample-payload-for-paymentlink)

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
    "currency": "VND",
    "country_code": "VN",
    "merchant_order_id": {merchant_order_id},
    "order_details": [{\
        "id": "1",\
        "name": "item1",\
        "quantity": 1,\
        "price": 100000,\
        "additional_details":{\
            "type":"item-type",\
            "url":"item-url"\
        }\
    }],
   "billing_details": {
        "billing_name": "First Middle Last",
        "billing_email": "test@portone.com",
        "billing_phone": "+8959893980"
    },
    "shipping_details": {
        "shipping_name": "First Middle Last",
        "shipping_phone": "8959893980",
        "shipping_address": {
            "line_1": "Line 1",
            "line_2":"Line 2",
            "city": "City",
            "postal_code": "400202",
            "state": "State",
            "country_code": "VN",
            "country_name":"Vietnam"
        }
    },
    "success_url": "https://dev-checkout.portone.cloud/success.html",
    "failure_url": "https://dev-checkout.portone.cloud/failure.html",
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

### Reference links   [Skip link to Reference links](https://docs.portone.cloud/docs/kredivo\#reference-links)

- [Kredivo Vietnam Integration guide](https://doc-vn.kredivo.com/#getting-started)
