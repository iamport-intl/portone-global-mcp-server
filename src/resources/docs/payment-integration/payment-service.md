---
url: "https://docs.portone.cloud/docs/payment-service"
title: "Payment Service"
---

## Overview   [Skip link to Overview](https://docs.portone.cloud/docs/payment-service\#overview)

The Payment Service offers a fully customizable payment flow that gives businesses complete control over the checkout process. Designed for companies that need a branded and flexible payment experience, this service allows you to build a native, seamless checkout directly within your app or website.

**Customizable Payment Flow**

With the Payment Service, merchants can create a branded checkout experience entirely within their environment. The payment process is integrated into the merchant's app or website, allowing for full customization of the user interface and flow.

**Ideal for Full Control**

This service is best suited for businesses that require a custom payment solution tailored to their unique needs. It allows for deep customization, making it ideal for large businesses or apps that need to manage every detail of the payment process.

**Integration Flexibility**

Unlike the Checkout Service, which uses a pre-built hosted page, the Payment Service allows developers to build and control the entire payment experience. This includes managing payment methods, user experience, and handling success or failure responses directly within the app.

**Use Case**

Ideal for large-scale applications, e-commerce platforms, or businesses that require a complex, branded checkout experience with full control over the payment journey.

* * *

## Integration flow   [Skip link to Integration flow](https://docs.portone.cloud/docs/payment-service\#integration-flow)

The sequence diagram below illustrates the flow for integrating Payment service via the Web SDK

![](https://files.readme.io/1f1c255eb614906a8f0971a5efa6f5af8ab34306907a9e7ecf5a39fec29beb07-Paymentserviceusing_WebSDK.png)

Once the user initiates a payment via the Merchant's Checkout:

- The merchant initializes the PortOne SDK and calls PortOne Web JS with the required payment details.
- PortOne Server saves the payment details, sends the request to the PSP Server, and processes the payment.
- The PSP Server returns the payment details, which PortOne pre-processes and converts into a standard response object.
- The response flows back to the merchant’s front end, which can display the result to the user.

> ## 💡  Passing the signature hash can be skipped if you whitelist your domain/IP/App

* * *

## Recipes for a quick start   [Skip link to Recipes for a quick start](https://docs.portone.cloud/docs/payment-service\#recipes-for-a-quick-start)

🔗

Create Payment using Web SDK

Open Recipe

🦉

Generate signature using API

Open Recipe

To generate the signature hash, you can also refer to [Generate Signature Hash](https://docs.portone.cloud/docs/payment-request).

* * *

## Sample code   [Skip link to Sample code](https://docs.portone.cloud/docs/payment-service\#sample-code)

Use the following JS code snippet to initiate the payment using the respective supported payment channels (e.g. MOMO, ZaloPay, Mastercard, etc).

JavaScript

```rdmd-code lang-javascript theme-light

<script>
const portone = new window.PortOne({
    // Your PortOne Key
    portOneKey: 'pptafmcddmszvgXl'
})
portone.paymentService.payment({
    // new uniform payment request format example for Momopay
    "key": "pptafmcddmszvgXl",
    "pmt_channel": "STRIPE",
    "pmt_method": "STRIPE_CARD",
    "merchant_order_id":"MERCHANT1617366877238",
    "signature_hash": "10b664f803035a2146b26949041c2ce8c8693512e4b85159d3c43b001a714af0",
    "amount": 4000,
    "currency": "VND",
    "environment": "live",
    "description": "Product description",
    "response_type": "redirect_url_only",
    "success_url": "https://checkout.portone.cloud/success.html",
    "failure_url": "https://checkout.portone.cloud/failure.html"
})
</script>

```

Detailed script for payment service (including optional fields.)

JavaScript

```rdmd-code lang-javascript theme-light

<script>
const portone = new window.PortOne({
    // Your PortOne Key
    portOneKey: 'pptafmcddmszvgXl'
})
portone.paymentService.payment({
    // new uniform payment request format example for Momopay
    "key": "pptafmcddmszvgXl",
    "pmt_channel": "STRIPE",
    "pmt_method": "STRIPE_CARD",
    "merchant_order_id":"MERCHANT1617366877238",
    "signature_hash": "10b664f803035a2146b26949041c2ce8c8693512e4b85159d3c43b001a714af0",
    "amount": 4000,
    "currency": "VND",
    "environment": "live",
    "description": "Product description",
    "billing_details": {
        "billing_name": "Mark Weins",
        "billing_email": "markweins@gmail.com",
        "billing_phone": "1234567890",
        "billing_address": {
            "city": "Ho Chi Minh City",
            "country_code": "VN",
            "locale": "en",
            "line_1": "address_1",
            "line_2": "address_2",
            "postal_code": "400202",
            "state": "Mah"
        }
    },
    "shipping_details": {
        "shipping_name": "Mark Weins",
        "shipping_email": "markweins@gmail.com",
        "shipping_phone": "1234567890",
        "shipping_address": {
            "city": "Ho Chi Minh City",
            "country_code": "VN",
            "locale": "en",
            "line_1": "address_1",
            "line_2": "address_2",
            "postal_code": "400202",
            "state": "Mah"
        }
    },
    "order_details": [\
        {\
          "id": "1",\
          "price": 2000,\
          "name": "Stubborn Attachments",\
          "quantity": 1,\
          "image":"https://cdn.portone.cloud/item1.png"\
        },\
        {\
          "id": "2",\
          "price": 2000,\
          "name": "Stubborn Attachments",\
          "quantity": 1,\
          "image":"https://cdn.portone.cloud/item2.png"\
        }\
    ],
    "response_type": "redirect_url_only",
    "success_url": "https://checkout.portone.cloud/success.html",
    "failure_url": "https://checkout.portone.cloud/failure.html",
    "pending_url": "https://checkout.portone.cloud/pending.html"
})
</script>

```

* * *

## Parameter list for Payment Service   [Skip link to Parameter list for Payment Service](https://docs.portone.cloud/docs/payment-service\#parameter-list-for-payment-service)

##### `key`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#key)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-span-stylecolorredrequiredspan)

The unique PortOne key for merchant

* * *

##### `merchant_order_id`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#merchant_order_id)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-span-stylecolorredrequiredspan-1)

The unique merchant order reference generated by the merchant

* * *

##### `pmt_channel`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#pmt_channel)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-span-stylecolorredrequiredspan-2)

The Payment Channel Key is listed in PortOne docs

* * *

##### `pmt_method`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#pmt_method)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-span-stylecolorredrequiredspan-3)

The Payment Method Key listed in PortOne docs

* * *

##### `description`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#description)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-span-stylecolorredrequiredspan-4)

The description of the transaction

* * *

##### `environment`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#environment)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-span-stylecolorredrequiredspan-5)

The environment of the transaction is either live OR sandbox

* * *

##### `amount`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#amount)

###### _double · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#double-%C2%B7-span-stylecolorredrequiredspan)

The amount of the transaction can be a floating-point number

* * *

##### `currency`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#currency)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-span-stylecolorredrequiredspan-6)

The currency of the transaction

* * *

##### `signature_hash`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#signature_hash)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-span-stylecolorredrequiredspan-7)

The signature hash of transaction details generated as per [docs](https://docs.portone.cloud/docs/payment-request)

* * *

##### `billing_details`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#billing_details)

###### _object_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#object)

The JSON object for billing details

> ##### `billing_name`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#billing_name)
>
> ###### _string_ · The billing first and middle name   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-the-billing-first-and-middle-name)
>
> ##### `billing_surname`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#billing_surname)
>
> ###### _string_ · The billing last name   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-the-billing-last-name)
>
> ##### `billing_email`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#billing_email)
>
> ###### _string_ · The billing email address   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-the-billing-email-address)
>
> ##### `billing_phone`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#billing_phone)
>
> ###### _string_ · The billing phone number   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-the-billing-phone-number)
>
> ##### `billing_address`\\#\#\#\#\#\# _object_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#billing_address-object)
>
> The JSON object containing full address
>
> > ##### `city`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#city)
> >
> > ###### _string_ · City name   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-city-name)
> >
> > ##### `country_code`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#country_code)
> >
> > ###### _string_ · 2 digit country code   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-2-digit-country-code)
> >
> > ##### `country_name`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#country_name)
> >
> > ###### _string_ · Full country name   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-full-country-name)
> >
> > ##### `locale`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#locale)
> >
> > ###### _string_ · Region locale   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-region-locale)
> >
> > ##### `line_1`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#line_1)
> >
> > ###### _string_ · Line 1 of the address   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-line-1-of-the-address)
> >
> > ##### `line_2`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#line_2)
> >
> > ###### _string_ · Line 2 of the address   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-line-2-of-the-address)
> >
> > ##### `postal_code`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#postal_code)
> >
> > ###### _string_ · Postal code of the area   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-postal-code-of-the-area)
> >
> > ##### `state`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#state)
> >
> > ###### _string_ · State/province of the country   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-stateprovince-of-the-country)

* * *

##### `shipping_details`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#shipping_details)

###### _object_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#object-1)

The JSON object for shipping details

> ##### `shipping_name`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#shipping_name)
>
> ###### _string_ · The shipping first and middle name   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-the-shipping-first-and-middle-name)
>
> ##### `shipping_surname`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#shipping_surname)
>
> ###### _string_ · The shipping last name   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-the-shipping-last-name)
>
> ##### `shipping_email`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#shipping_email)
>
> ###### _string_ · The shipping email address   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-the-shipping-email-address)
>
> ##### `shipping_phone`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#shipping_phone)
>
> ###### _string_ · The shipping phone number   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-the-shipping-phone-number)
>
> ##### `shipping_address`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#shipping_address)
>
> ###### _object_ ·   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#object-%C2%B7)
>
> The JSON object containing full address
>
> > ##### `city`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#city-1)
> >
> > ###### _string_ · City name   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-city-name-1)
> >
> > ##### `country_code`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#country_code-1)
> >
> > ###### _string_ · 2 digit country code   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-2-digit-country-code-1)
> >
> > ##### `country_name`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#country_name-1)
> >
> > ###### _string_ · Full country name   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-full-country-name-1)
> >
> > ##### `locale`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#locale-1)
> >
> > ###### _string_ · Region locale   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-region-locale-1)
> >
> > ##### `line_1`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#line_1-1)
> >
> > ###### _string_ · Line 1 of the address   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-line-1-of-the-address-1)
> >
> > ##### `line_2`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#line_2-1)
> >
> > ###### _string_ · Line 2 of the address   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-line-2-of-the-address-1)
> >
> > ##### `postal_code`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#postal_code-1)
> >
> > ###### _string_ · Postal code of the area   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-postal-code-of-the-area-1)
> >
> > ##### `state`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#state-1)
> >
> > ###### _string_ · State/province of the country   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-stateprovince-of-the-country-1)

* * *

##### `token_params`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#token_params)

###### _object_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#object-2)

The JSON object for initiating transactions using card details

> ##### `token`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#token)
>
> ###### _string_ · The token details by PortOne   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-the-token-details-by-portone)
>
> ##### `partial_card_number`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#partial_card_number)
>
> ###### _string_ · Partial card number used for identification purposes   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-partial-card-number-used-for-identification-purposes)
>
> ##### `expiry_month`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#expiry_month)
>
> ###### _string_ · The expiration month of the card   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-the-expiration-month-of-the-card)
>
> ##### `expiry_year`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#expiry_year)
>
> ###### _string_ · The expiration year of the card   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-the-expiration-year-of-the-card)
>
> ##### `type`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#type)
>
> ###### _string_ · Type of card (e.g. Visa, Mastercard)   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-type-of-card-eg-visa-mastercard)
>
> ##### `save_card`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#save_card)
>
> ###### _boolean_ · Whether to save the card for future use   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#boolean-%C2%B7-whether-to-save-the-card-for-future-use)
>
> ##### `is_channel_token`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#is_channel_token)
>
> ###### _boolean_ · Whether the token is a channel token, the default is false. Used for non-seamless card transactions.   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#boolean-%C2%B7-whether-the-token-is-a-channel-token-the-default-is-false-used-for-non-seamless-card-transactions)

* * *

##### `order_details`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#order_details)

###### _array of objects_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#array-of-objects)

The JSON array for order details

> > ##### `id`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#id)
> >
> > ###### _string_ · The unique identifier of the order-item   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-the-unique-identifier-of-the-order-item)
> >
> > ##### `name`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#name)
> >
> > ###### _string_ · The name of the product   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-the-name-of-the-product)
> >
> > ##### `price`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#price)
> >
> > ###### _double_ · The unit price of the product   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#double-%C2%B7-the-unit-price-of-the-product)
> >
> > ##### `quantity`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#quantity)
> >
> > ###### _integer_ · The quantity of the product   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#integer-%C2%B7-the-quantity-of-the-product)
> >
> > ##### `image`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#image)
> >
> > ###### _string_ · The URL of the product image   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-the-url-of-the-product-image)
> >
> > ##### `additional_details`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#additional_details)
> >
> > ###### _object_ · Additional details about the order (This varies as per PSP specification)   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#object-%C2%B7-additional-details-about-the-order-this-varies-as-per-psp-specification)

* * *

##### `success_url`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#success_url)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-span-stylecolorredrequiredspan-8)

The URL of the success page hosted by the merchant

* * *

##### `failure_url`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#failure_url)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-span-stylecolorredrequiredspan-9)

The URL of the failure page hosted by the merchant

* * *

##### `pending_url`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#pending_url)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string)

The URL of the pending page hosted by the merchant

* * *

##### `routing_enabled`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#routing_enabled)

###### _boolean_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#boolean)

Boolean flag to identify if routing is enabled

* * *

##### `routing_params`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#routing_params)

###### _object_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#object-3)

The JSON object for adding routing details, is only applicable if routing is enabled

> ##### `type`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#type-1)
>
> ###### _string_ · The type of routing ·   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-the-type-of-routing-%C2%B7)
>
> ##### `routing_ref`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#routing_ref)
>
> ###### _string_ · The route ID that is created from the Admin Dashboard   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-the-route-id-that-is-created-from-the-admin-dashboard)
>
> ##### `data`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#data)
>
> ###### _array of objects_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#array-of-objects-1)
>
> This is required if you have not created a routing ID from the dashboard
>
> > ##### `channel_key`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#channel_key)
> >
> > ###### _string_ · The channel key as per PSP documatation   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-the-channel-key-as-per-psp-documatation)
> >
> > ##### `method_key`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#method_key)
> >
> > ###### _string_ · The method key as per PSP documatation   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-%C2%B7-the-method-key-as-per-psp-documatation)
> >
> > ##### `rank`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#rank)
> >
> > ###### _integer_ · The rank of this routing option   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#integer-%C2%B7-the-rank-of-this-routing-option)

* * *

##### `transaction_type`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#transaction_type)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-1)

The type of the transaction to capture (e.g., PURCHASE)

* * *

##### `override_auto_redirect`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#override_auto_redirect)

###### _boolean_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#boolean-1)

Boolean flag to abort auto redirection and use the response

* * *

##### `user_configured_field1`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#user_configured_field1)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-2)

Custom user-configured field 1

* * *

##### `user_configured_field2`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#user_configured_field2)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-3)

Custom user-configured field 2

* * *

##### `user_configured_field3`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#user_configured_field3)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-4)

Custom user-configured field 3

* * *

##### `user_configured_field4`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#user_configured_field4)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-5)

Custom user-configured field 4

* * *

##### `user_configured_field5`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#user_configured_field5)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-service\#string-6)

Custom user-configured field 5

* * *

Updated8 months ago

* * *

Did this page help you?

Yes

No

🦉

# Recipe Title

Recipe Description

​x

```

```

1{"success":true}

🦉

# Recipe Title

Recipe Description

​x

```

```

1{"success":true}

![Help](https://cdn.jsdelivr.net/gh/iamport-intl/portone-devx-chatbot-widget@production/public/chat-intro1.svg)