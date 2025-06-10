---
url: "https://docs.portone.cloud/docs/payment-link-api"
title: "Create Payment Link via API"
---

## Create Payment Link API   [Skip link to Create Payment Link API](https://docs.portone.cloud/docs/payment-link-api\#create-payment-link-api)

The Create Payment Link API allows merchants to generate payment links that can be sent to customers for processing payments. This API supports various parameters to customize the payment link, including amount, currency, customer details, and more.

### Endpoint   [Skip link to Endpoint](https://docs.portone.cloud/docs/payment-link-api\#endpoint)

```rdmd-code lang- theme-light
POST https://api.portone.cloud/api/paymentLink

```

### Headers   [Skip link to Headers](https://docs.portone.cloud/docs/payment-link-api\#headers)

- `X-Portone-Client-Key`: Unique identifier for the client.
- `Authorization`: Bearer token for authentication.
- `Content-Type`: The content type of the request body (application/json).

### Request Body   [Skip link to Request Body](https://docs.portone.cloud/docs/payment-link-api\#request-body)

The request body should be in JSON format and includes the following parameters:

```rdmd-code lang- theme-light
    {
        "portone_key": "string",                    // PortOne key for the merchant.
        "merchant_details": {                       // Merchant-specific details.
            "name": "string",                       // Name of the merchant account.
            "logo": "string",                       // URL to the merchant's logo (optional).
            "back_url": "string",                   // URL to redirect after payment (optional).
            "promo_code": "string",                 // Promo code if applicable (optional).
            "promo_discount": "number",             // Promo discount amount (optional).
            "shipping_charges": "number"            // Shipping charges if applicable (optional).
        },
        "source": "string",                         // Source of the payment link (e.g., default).
        "description": "string",                    // Description of the payment link.
        "signature_hash": "string",                 // Signature hash for security.
        "amount": "number",                         // Amount to be paid.
        "currency": "string",                       // Currency code (e.g., THB).
        "country_code": "string",                   // Country code (e.g., TH for Thailand).
        "custom_link_ref": "string",                // Custom reference for the link (optional).
        "merchant_order_id": "string",              // Order ID associated with the payment.
        "show_shipping_details": "boolean",         // Flag to show shipping details.
        "billing_details": {                        // Billing details for the customer.
            "billing_name": "string",
            "billing_email": "string",
            "billing_phone": "string",
            "billing_address": {
            "city": "string",
            "country_code": "string",
            "locale": "string",
            "line_1": "string",
            "line_2": "string",
            "postal_code": "string",
            "state": "string"
            }
        },
        "shipping_details": {                       // Shipping details for the customer.
            "shipping_name": "string",
            "shipping_email": "string",
            "shipping_phone": "string",
            "shipping_address": {
            "city": "string",
            "country_code": "string",
            "locale": "string",
            "line_1": "string",
            "line_2": "string",
            "postal_code": "string",
            "state": "string"
            }
        },
        "is_checkout_embed": "boolean",              // Flag to indicate if the checkout is embedded.
        "success_url": "string",                     // URL to redirect on successful payment.
        "failure_url": "string",                     // URL to redirect on failed payment.
        "pending_url": "string",                     // URL to redirect on pending payment.
        "expiry_date": "string",                     // Expiry date of the payment link (ISO 8601 format).
        "customer_details": {                        // Customer details.
            "name": "string",
            "email_address": "string",
            "phone_number": "string"
        },
        "notify_by_email": "boolean",                // Flag to notify customer by email.
        "notify_by_phone": "boolean",                // Flag to notify customer by phone.
        "notes": [                                   // Additional notes for the payment link.\
            {\
            "key": "string",\
            "value": "string"\
            }\
        ],
        "reminder_time": "number",                   // Time to send reminders before expiry.
        "reminder_time_unit": "string",              // Unit of time for reminder (e.g., hours).
        "send_immediately": "boolean",               // Flag to send the link immediately.
        "scheduled_date": "string",                  // Scheduled date to send the link (ISO 8601 format).
        "chosen_payment_methods": [                  // List of payment methods available.\
            {\
            "payment_channel": "string",\
            "payment_method": "string"\
            }\
        ],
        "environment": "string"                      // Environment in which the API is being used (e.g., live OR sandbox).
    }

```

### Example Request   [Skip link to Example Request](https://docs.portone.cloud/docs/payment-link-api\#example-request)

```rdmd-code lang- theme-light
curl 'https://api.portone.cloud/api/paymentLink' \
  -H 'Authorization: Bearer {BEARER_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'X-Portone-Client-Key: {PORTONE_KEY}' \
  --data-raw '{
    "portone_key": "{PORTONE_KEY}",
    "merchant_details": {
      "name": "PortOne Demo Account",
      "logo": "",
      "back_url": "https://admin.portone.cloud",
      "promo_code": "NA",
      "promo_discount": 0,
      "shipping_charges": 0
    },
    "source": "default",
    "description": "test payment link description",
    "signature_hash": "signature_hash",
    "amount": 2500,
    "currency": "THB",
    "country_code": "TH",
    "custom_link_ref": "786283tghjwefdhvsdvbfnvbn",
    "merchant_order_id": "011352FD604A301",
    "show_shipping_details": false,
    "billing_details": {
      "billing_name": "Test Customer Name",
      "billing_email": "testcustomer@gmail.com",
      "billing_phone": "+918767677665",
      "billing_address": {
        "city": "City",
        "country_code": "TH",
        "locale": "TH",
        "line_1": "address",
        "line_2": "address_2",
        "postal_code": "400202",
        "state": "Mah"
      }
    },
    "shipping_details": {
      "shipping_name": "Test Customer Name",
      "shipping_email": "testcustomer@gmail.com",
      "shipping_phone": "+918767677665",
      "shipping_address": {
        "city": "abc",
        "country_code": "TH",
        "locale": "TH",
        "line_1": "address_1",
        "line_2": "address_2",
        "postal_code": "400202",
        "state": "Mah"
      }
    },
    "is_checkout_embed": false,
    "success_url": "https://checkout.portone.cloud/success.html",
    "failure_url": "https://checkout.portone.cloud/failure.html",
    "pending_url": "https://checkout.portone.cloud/pending.html",
    "expiry_date": "2024-07-28T18:30:00.000Z",
    "customer_details": {
      "name": "Test Customer Name",
      "email_address": "testcustomer@gmail.com",
      "phone_number": "+918767677665"
    },
    "notify_by_email": true,
    "notify_by_phone": true,
    "notes": [\
      {"key": "key1", "value": "value1"},\
      {"key": "key2", "value": "value2"}\
    ],
    "reminder_time": 1,
    "reminder_time_unit": "hours",
    "send_immediately": false,
    "scheduled_date": "2024-07-26T18:30:00.000Z",
    "chosen_payment_methods": [\
      {"payment_channel": "GBPRIMEPAY", "payment_method": "GBPRIMEPAY_CREDIT_CARD"},\
      {"payment_channel": "CHILLPAY", "payment_method": "CHILLPAY_QRCODE"},\
      {"payment_channel": "PAYSOLUTIONS", "payment_method": "PS_PROMPTPAY"},\
      {"payment_channel": "GBPRIMEPAY", "payment_method": "GBPRIMEPAY_WECHAT_WALLET"},\
      {"payment_channel": "GBPRIMEPAY", "payment_method": "GBPRIMEPAY_RABBIT_LINEPAY_WALLET"},\
      {"payment_channel": "GBPRIMEPAY", "payment_method": "GBPRIMEPAY_TRUEMONEY_WALLET"},\
      {"payment_channel": "GBPRIMEPAY", "payment_method": "GBPRIMEPAY_SHOPEEPAY_WALLET"}\
    ],
    "environment": "sandbox"
  }'

```

### Responses   [Skip link to Responses](https://docs.portone.cloud/docs/payment-link-api\#responses)

**Success**

- Status Code: 200 OK
- Content-Type: application/json
- Body: Contains the details of the created payment link, including the link URL and status.

**Error**

- Status Code: 400 Bad Request or 401 Unauthorized
- Content-Type: application/json
- Body: Contains error details and message explaining the issue.

**Additional Information**

- Authentication: An Authorization header with a Bearer token is required.
- Environment: Set environment to sandbox for testing purposes.
- For further assistance or questions, please refer to the PortOne support documentation or contact support.

## Summary   [Skip link to Summary](https://docs.portone.cloud/docs/payment-link-api\#summary)

Creating payment links on PortOne is simple and can be done either manually via the Dashboard or automatically via APIs. Follow the above steps to ensure you set up your payment links correctly and efficiently.

For additional support or queries, please refer to the PortOne support resources or contact customer support.

Updated10 months ago

* * *

Did this page help you?

Yes

No

![Help](https://cdn.jsdelivr.net/gh/iamport-intl/portone-devx-chatbot-widget@production/public/chat-intro1.svg)