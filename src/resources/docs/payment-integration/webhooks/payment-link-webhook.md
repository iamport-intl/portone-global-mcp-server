---
url: "https://docs.portone.cloud/docs/payment-link-webhook"
title: "Payment Link Webhook"
---

The payment link webhook is sent when the status of the payment link changes.

Refer below for the sample payload.

JSON

```rdmd-code lang-json theme-light

{
  "link_ref": "2mbaHZ6VVokmHJNtKafVCyIZIxv",
  "link": "https://checkout.portone.cloud?ref=2mbaHZ6VVokmHJNtKafVCyIZIxv",
  "currency": "JPY",
  "amount": 500,
  "countryCode": "JP",
  "chaipaykey": "qcFJvupbcbdcyNFg",
  "status": "Success",
  "success_url": "https://checkout.portone.cloud/success.html",
  "cancel_url": "https://checkout.portone.cloud/failure.html",
  "merchant_order_ref": "1779AA6E40071177",
  "is_billing_shipping_same": false,
  "merchant_name": "ShopCity",
  "merchant_logo": "",
  "merchant_back_url": "https://admin.portone.cloud",
  "merchant_shipping_charges": 0,
  "merchant_promo_code": "NA",
  "merchant_promo_discount": 0,
  "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
  "ip_address": "103.23.238.249",
  "expiry_hours": 48,
  "created_at": "2024-09-26T10:47:22.372093Z",
  "source": "default",
  "description": "Payment for Order: 1779AA6E40071177",
  "mobile_redirect_url": "",
  "show_shipping_details": false,
  "show_back_button": true,
  "is_checkout_embed": false,
  "notify_by_email": true,
  "notify_by_phone": true,
  "show_items": true,
  "merchant_key": "qcFJvupbcbdcyNFg",
  "merchant_email_address": "nitesh@portone.io",
  "customer_name": "Nitesh",
  "customer_email_address": "nitesh@portone.io",
  "customer_phone_number": "+819870987690",
  "payment_page_ref": "",
  "unit_amount": 0,
  "stock_quantity": 0,
  "signature_hash": "OEsM7zzpWbZRN/IHJLyqSnZqrF09DrMAv/I9dn1aZHM=",
  "show_saved_cards": true,
  "portone_key": "qcFJvupbcbdcyNFg",
  "user_configured_field1": "",
  "user_configured_field2": "",
  "user_configured_field3": "",
  "user_configured_field4": "",
  "user_configured_field5": ""
}

```

> ## 📘  Info
>
> Refer to [Payment Link Webhook Signature](https://docs.portone.cloud/docs/payment-link-webhook-response) section to verify the signature\_hash received in the webhook
>
> During testing you can use FOSS Webhook server to setup a webhook endpoint. Create a sample webhook endpoint at [webhook.site](https://webhook.site/)

### Parameter list   [Skip link to Parameter list](https://docs.portone.cloud/docs/payment-link-webhook\#parameter-list)

##### `link_ref`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#link_ref)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#string)

The unique ref of the payment link provided by PortOne

* * *

##### `link`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#link)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#string-1)

The payment link where the customer makes the payment

* * *

##### `status`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#status)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#string-2)

The status of the payment link

* * *

##### `amount`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#amount)

###### _float64_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#float64)

The amount of the transaction

* * *

##### `currency`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#currency)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#string-3)

The currency of the transaction

* * *

##### `chaipaykey`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#chaipaykey)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#string-4)

The merchant's PortOne key

* * *

##### `countryCode`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#countrycode)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#string-5)

The country code of the transaction

* * *

##### `success_url`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#success_url)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#string-6)

The success URL provided by the merchant

* * *

##### `cancel_url`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#cancel_url)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#string-7)

The cancel URL provided by the merchant

* * *

##### `merchant_order_ref`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#merchant_order_ref)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#string-8)

Order Reference sent by merchant to initiate payment link

* * *

##### `is_billing_shipping_same`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#is_billing_shipping_same)

###### _boolean_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#boolean)

This boolean flag indicates whether the billing address and the shipping address for a transaction are the same, with _true_ meaning they are identical and _false_ meaning they differ

* * *

##### `merchant_key`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#merchant_key)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#string-9)

The merchant's PortOne key

* * *

##### `merchant_name`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#merchant_name)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#string-10)

The name of the merchant

* * *

##### `merchant_logo`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#merchant_logo)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#string-11)

The logo of the merchant

* * *

##### `merchant_back_url`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#merchant_back_url)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#string-12)

The back URL provided by the merchant during the payment link creation

* * *

##### `merchant_shipping_charges`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#merchant_shipping_charges)

###### _float64_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#float64-1)

The shipping charges amount provided by the merchant during the payment link creation

* * *

##### `merchant_promo_code`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#merchant_promo_code)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#string-13)

The promo code provided by the merchant during the payment link creation

* * *

##### `merchant_promo_discount`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#merchant_promo_discount)

###### _float64_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#float64-2)

The promo discount provided by the merchant during the payment link creation

* * *

##### `user_agent`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#user_agent)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#string-14)

The user agent of the device used to create the payment link

* * *

##### `ip_address`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#ip_address)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#string-15)

The IP address used to create the payment link

* * *

##### `expiry_hours`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#expiry_hours)

###### _integer_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#integer)

The duration of hours the payment link is active to make the payment

* * *

##### `created_at`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#created_at)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#string-16)

Time of creation of the payment link

* * *

##### `source`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#source)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#string-17)

The source from which the payment link was created

* * *

##### `description`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#description)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#string-18)

The description of the payment link

* * *

##### `mobile_redirect_url`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#mobile_redirect_url)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#string-19)

The mobile app url to redirect the customer after the payment is attempted

* * *

##### `show_shipping_details`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#show_shipping_details)

###### _boolean_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#boolean-1)

This boolean flag indicates whether the shipping details should be displayed in the payment link checkout, with _true_ meaning the shipping information will be shown and _false_ meaning it will be hidden

* * *

##### `show_back_button`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#show_back_button)

###### _boolean_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#boolean-2)

This boolean flag indicates whether to show the back button within the payment link checkout, with _true_ meaning the back button will be shown and _false_ meaning it will be hidden

* * *

##### `is_checkout_embed`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#is_checkout_embed)

###### _boolean_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#boolean-3)

This boolean flag indicates whether the payment link checkout was embeded in a site or not, with _true_ meaning the checkout was embeded and _false_ meaning it was not embeded

* * *

##### `notify_by_email`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#notify_by_email)

###### _boolean_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#boolean-4)

This boolean flag indicates whether the payment link is notified to the customer email provided in billing details, with _true_ meaning the customer is notified via email and _false_ meaning it was not

* * *

##### `notify_by_phone`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#notify_by_phone)

###### _boolean_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#boolean-5)

This boolean flag indicates whether the payment link is notified to the customer phone number provided in billing details, with _true_ meaning the customer is notified via email and _false_ meaning it was not

* * *

##### `show_items`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#show_items)

###### _boolean_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#boolean-6)

This boolean flag indicates whether the order details items in the payment link checkout is shown or not, with _true_ meaning the order details items will be shown and _false_ meaning it will be hidden

* * *

##### `merchant_email_address`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#merchant_email_address)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#string-20)

The email address of the merchant

* * *

##### `customer_name`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#customer_name)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#string-21)

The name of the customer

* * *

##### `customer_email_address`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#customer_email_address)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#string-22)

The email address of the customer

* * *

##### `customer_phone_number`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#customer_phone_number)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#string-23)

The phone number of the customer

* * *

##### `payment_page_ref`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#payment_page_ref)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#string-24)

The payment page ref of the payment link

* * *

##### `signature_hash`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#signature_hash)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#string-25)

Calculate hash as mentioned at [Hash Generation Reference](https://docs.portone.cloud/docs/payment-link-webhook-response), verify if it is equal to signature\_hash received in the webhook

* * *

##### `unit_amount`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#unit_amount)

###### _float64_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#float64-3)

The unit amount of the payment link

* * *

##### `stock_quantity`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#stock_quantity)

###### _integer_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#integer-1)

The stock quantity of the item

* * *

##### `show_saved_cards`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#show_saved_cards)

###### _boolean_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#boolean-7)

This boolean flag indicates whether a customer's previously saved cards can be displayed in the payment link checkout with _true_ meaning the saved cards can be shown and _false_ meaning they will be hidden.

* * *

##### `portone_key`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#portone_key)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#string-26)

The merchant's PortOne key

* * *

##### `user_configured_field1`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#user_configured_field1)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#string-27)

The user configured field 1

* * *

##### `user_configured_field2`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#user_configured_field2)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#string-28)

The user configured field 2

* * *

##### `user_configured_field3`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#user_configured_field3)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#string-29)

The user configured field 3

* * *

##### `user_configured_field4`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#user_configured_field4)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#string-30)

The user configured field 4

* * *

##### `user_configured_field5`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#user_configured_field5)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook\#string-31)

The user configured field 5

* * *