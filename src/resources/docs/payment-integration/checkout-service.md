---
url: "https://docs.portone.cloud/docs/checkout-service"
title: "Checkout Service"
---

The Checkout Service provides a pre-built, hosted checkout page that simplifies the payment process for businesses. The Checkout Service is much easier to integrate, requiring minimal code and effort from the merchant’s side. It’s designed for businesses that want to avoid the complexity of building and managing a custom payment flow.

Checkout Service

![](https://cdn.loom.com/avatars/default-avatar.svg)

[Checkout Service](https://www.loom.com/share/a6c3b0ad1576439cba7a3ee1f7332806?source=embed_watch_on_loom_cta "Checkout Service")

3 min

68 views

0

[Open video in Loom](https://www.loom.com/share/a6c3b0ad1576439cba7a3ee1f7332806?source=embed_watch_on_loom_cta "Open video in Loom")

1.2×

3 min⚡️4 min 7 sec3 min 18 sec2 min 45 sec2 min 12 sec1 min 56 sec1 min 39 sec1 min 19 sec

Your user agent does not support the HTML5 Video element.

![](https://cdn.loom.com/avatars/default-avatar.svg)

[Checkout Service](https://www.loom.com/share/a6c3b0ad1576439cba7a3ee1f7332806?source=embed_watch_on_loom_cta "Checkout Service")

3 min

68 views

0

[Open video in Loom](https://www.loom.com/share/a6c3b0ad1576439cba7a3ee1f7332806?source=embed_watch_on_loom_cta "Open video in Loom")

1.2×

3 min⚡️4 min 7 sec3 min 18 sec2 min 45 sec2 min 12 sec1 min 56 sec1 min 39 sec1 min 19 sec

**Hosted Payment Flow**

With the Checkout Service, users are redirected to a secure, hosted checkout page maintained by PortOne, where they can complete the transaction. After payment, they are redirected back to the merchant's site or app.

**Ideal for Quick Setup**

This service is best suited for businesses or applications that need a payment solution up and running quickly without the need for deep customization or development resources.

**Customization Options**

Unlike the Payment Service, which allows for fully customized, branded checkouts, the Checkout Service is designed to be fast and easy to integrate.

While the Checkout Service is more limited in terms of customization compared to the Payment Service, merchants can still adjust certain elements such as branding (logo, colors) to ensure a consistent look.

**Use Case**

Ideal for small to medium businesses or apps that prioritize speed of integration over full control of the user experience.

### Integration flow   [Skip link to Integration flow](https://docs.portone.cloud/docs/checkout-service\#integration-flow)

The sequence diagram below illustrates the flow for integrating the Checkout service via the Web SDK

![](https://files.readme.io/6fcaa82b790878fb810762d83fdb65f445cd517f6e77a5d9c851f9c0ef3ec078-CheckoutserviceusingwebSDK.png)

Once the user initiates checkout via the Merchant's cart page:

- The Merchant (front end) requests a JWT from the Merchant (Back end)
- The Merchant (front end) passes the JWT to initialize the PortOne SDK and then calls PortOne Web JS to create the checkout with payment details.
- PortOne Server saves the request details, generates the checkout link, and returns it to the Merchant (front end).
- Merchants can use this checkout link to redirect the user

> ## 💡  Passing the signature hash can be skipped if you whitelist your domain/IP/App

* * *

### Recipes for a quick start   [Skip link to Recipes for a quick start](https://docs.portone.cloud/docs/checkout-service\#recipes-for-a-quick-start)

🔗

Create Checkout using Web SDK

Open Recipe

🦉

Generate signature using API

Open Recipe

🔑

Create JWT using API

Open Recipe

To generate the signature hash, you can also refer to [Generate Signature Hash](https://docs.portone.cloud/docs/payment-request).

To generate the JWT token, you can also refer to [Generate JWT Token](https://docs.portone.cloud/docs/jwt-authentication).

* * *

### Sample code   [Skip link to Sample code](https://docs.portone.cloud/docs/checkout-service\#sample-code)

Use the following JS code snippet to initiate the payment in the checkout service using the respective supported payment channels (e.g. MomoPay, ZaloPay, Mastercard, etc).

JavaScript

```rdmd-code lang-javascript theme-light

<script>
const portone = new window.PortOne({
    // Your PortOne Key
    portOneKey: 'pptafmcddmszvgXl',
    jwtToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJOUFNrWlpZZWZHeUt2QnhpIiwiaXNzIjoiQ0hBSVBBWSIsImlhdCI6MTYzMzMzOTAzMiwiZXhwIjoxNjczMzM5MDMy',
})
portone.checkoutService.checkout({
    "merchant_details": {
        "name": "Downy",
        "logo": "images/v184_135.png",
        "back_url": "https://demo.chaiport.io/checkout",
        "promo_code": "Downy350",
        "promo_discount": 0.0,
        "shipping_charges": 0.0,
    },
    "merchant_order_id":"MERCHANT1617366877238",
    "signature_hash": "10b664f803035a2146b26949041c2ce8c8693512e4b85159d3c43b001a714af0",
    "amount": 4000,
    "currency": "VND",
    "environment": "live",
    "description": "Product description",
    "country_code": "VN",
    "expiry_hours":24,
    "is_checkout_embed": true,
    "show_back_button": false,
    "show_shipping_details": false,
    "default_guest_checkout": true,
    "show_items": false,
    "success_url": "https://checkout.portone.cloud/success.html",
    "failure_url": "https://checkout.portone.cloud/failure.html"
})
</script>

```

Detailed script for checkout service (including optional fields.)

JavaScript

```rdmd-code lang-javascript theme-light

<script>
const portone = new window.PortOne({
    // Your PortOne Key
    portOneKey: 'pptafmcddmszvgXl',
    jwtToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJOUFNrWlpZZWZHeUt2QnhpIiwiaXNzIjoiQ0hBSVBBWSIsImlhdCI6MTYzMzMzOTAzMiwiZXhwIjoxNjczMzM5MDMy',
})
portone.checkoutService.checkout({
    "merchant_details": {
        "name": "Downy",
        "logo": "images/v184_135.png",
        "back_url": "https://demo.chaiport.io/checkout",
        "promo_code": "Downy350",
        "promo_discount": 0.0,
        "shipping_charges": 0.0,
    },
    "merchant_order_id":"MERCHANT1617366877238",
    "signature_hash": "10b664f803035a2146b26949041c2ce8c8693512e4b85159d3c43b001a714af0",
    "amount": 4000,
    "currency": "VND",
    "environment": "live",
    "description": "Product description",
    "order_details": [{\
        "id":"1",\
        "price": 2000,\
        "name": "Stubborn Attachments",\
        "quantity": 1\
        },\
        {\
            "id":"2",\
        "price": 2000,\
        "name": "Stubborn Attachments",\
        "quantity": 1\
        }\
    ],
    "billing_details": {
        "billing_name": "Test mark",
        "billing_email": "markweins@gmail.com",
        "billing_phone": "9998878788",
        "billing_address": {
          "city": "VND",
          "country_code": "VN",
          "locale": "en",
          "line_1": "address",
          "line_2": "address_2",
          "postal_code": "400202",
          "state": "Mah"
        }
    },
    "shipping_details": {
        "shipping_name": "xyz",
        "shipping_email": "xyz@gmail.com",
        "shipping_phone": "1234567890",
        "shipping_address": {
          "city": "abc",
          "country_code": "VN",
          "locale": "en",
          "line_1": "address_1",
          "line_2": "address_2",
          "postal_code": "400202",
          "state": "Mah"
      }
    },
    "country_code": "VN",
    "expiry_hours":24,
    "is_checkout_embed": true,
    "show_back_button": false,
    "show_shipping_details": false,
    "default_guest_checkout": true,
    "show_items": false,
    "success_url": "https://checkout.portone.cloud/success.html",
    "failure_url": "https://checkout.portone.cloud/failure.html"
})
</script>

```

* * *

### Parameter list for Checkout Service   [Skip link to Parameter list for Checkout Service](https://docs.portone.cloud/docs/checkout-service\#parameter-list-for-checkout-service)

##### `merchant_details`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#merchant_details)

###### _object · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#object-%C2%B7-span-stylecolorredrequiredspan)

The JSON object for merchant details

> ##### `name`· required   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#name%C2%B7-span-stylecolorredrequiredspan)
>
> ###### _string_ · The name of the merchant   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-the-name-of-the-merchant)
>
> ##### `logo`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#logo)
>
> ###### _string_ · The logo of the merchant   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-the-logo-of-the-merchant)
>
> ##### `back_url`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#back_url)
>
> ###### _string_ · The url of the merchant site   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-the-url-of-the-merchant-site)
>
> ##### `promo_code`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#promo_code)
>
> ###### _string_ · The promo code enabled on the order by the merchant   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-the-promo-code-enabled-on-the-order-by-the-merchant)
>
> ##### `promo_discount`· required   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#promo_discount%C2%B7-span-stylecolorredrequiredspan)
>
> ###### _double_ · The promo code discount amount on the order by the merchant   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#double-%C2%B7-the-promo-code-discount-amount-on-the-order-by-the-merchant)
>
> ##### `shipping_charges`· required   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#shipping_charges%C2%B7-span-stylecolorredrequiredspan)
>
> ###### _number_ · The shipping charges set by the merchant   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#number-%C2%B7-the-shipping-charges-set-by-the-merchant)

* * *

##### `merchant_order_id`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#merchant_order_id)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-span-stylecolorredrequiredspan)

The unique merchant order reference generated by the merchant

* * *

##### `signature_hash`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#signature_hash)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-span-stylecolorredrequiredspan-1)

The signature hash of transaction details generated as per [docs](https://docs.portone.cloud/docs/payment-request)

* * *

##### `environment`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#environment)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-span-stylecolorredrequiredspan-2)

The environment of the transaction is either live OR sandbox

* * *

##### `amount`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#amount)

###### _double · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#double-%C2%B7-span-stylecolorredrequiredspan)

The amount of the transaction can be a floating-point number

* * *

##### `currency`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#currency)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-span-stylecolorredrequiredspan-3)

The currency of the transaction

* * *

##### `country_code`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#country_code)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-span-stylecolorredrequiredspan-4)

The country\_code of transaction

* * *

##### `description`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#description)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-span-stylecolorredrequiredspan-5)

The description of the transaction

* * *

##### `billing_details`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#billing_details)

###### _object_   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#object)

The JSON object for billing details

> ##### `billing_name`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#billing_name)
>
> ###### _string_ · The billing first and middle name   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-the-billing-first-and-middle-name)
>
> ##### `billing_surname`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#billing_surname)
>
> ###### _string_ · The billing last name   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-the-billing-last-name)
>
> ##### `billing_email`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#billing_email)
>
> ###### _string_ · The billing email address   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-the-billing-email-address)
>
> ##### `billing_phone`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#billing_phone)
>
> ###### _string_ · The billing phone number   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-the-billing-phone-number)
>
> ##### `billing_address`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#billing_address)
>
> ###### _object_   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#object-1)
>
> The JSON object containing full address
>
> > ##### `city`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#city)
> >
> > ###### _string_ · City name   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-city-name)
> >
> > ##### `country_code`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#country_code-1)
> >
> > ###### _string_ · 2 digit country code   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-2-digit-country-code)
> >
> > ##### `country_name`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#country_name)
> >
> > ###### _string_ · Full country name   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-full-country-name)
> >
> > ##### `locale`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#locale)
> >
> > ###### _string_ · Region locale   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-region-locale)
> >
> > ##### `line_1`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#line_1)
> >
> > ###### _string_ · Line 1 of the address   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-line-1-of-the-address)
> >
> > ##### `line_2`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#line_2)
> >
> > ###### _string_ · Line 2 of the address   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-line-2-of-the-address)
> >
> > ##### `postal_code`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#postal_code)
> >
> > ###### _string_ · Postal code of the area   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-postal-code-of-the-area)
> >
> > ##### `state`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#state)
> >
> > ###### _string_ · State/province of the country   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-stateprovince-of-the-country)

* * *

##### `shipping_details`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#shipping_details)

###### _object_   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#object-2)

The JSON object for shipping details

> ##### `shipping_name`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#shipping_name)
>
> ###### _string_ · The shipping first and middle name   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-the-shipping-first-and-middle-name)
>
> ##### `shipping_surname`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#shipping_surname)
>
> ###### _string_ · The shipping last name   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-the-shipping-last-name)
>
> ##### `shipping_email`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#shipping_email)
>
> ###### _string_ · The shipping email address   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-the-shipping-email-address)
>
> ##### `shipping_phone`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#shipping_phone)
>
> ###### _string_ · The shipping phone number   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-the-shipping-phone-number)
>
> ##### `shipping_address`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#shipping_address)
>
> ###### _object_ ·   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#object-%C2%B7)
>
> The JSON object containing full address
>
> > ##### `city`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#city-1)
> >
> > ###### _string_ · City name   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-city-name-1)
> >
> > ##### `country_code`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#country_code-2)
> >
> > ###### _string_ · 2 digit country code   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-2-digit-country-code-1)
> >
> > ##### `country_name`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#country_name-1)
> >
> > ###### _string_ · Full country name   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-full-country-name-1)
> >
> > ##### `locale`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#locale-1)
> >
> > ###### _string_ · Region locale   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-region-locale-1)
> >
> > ##### `line_1`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#line_1-1)
> >
> > ###### _string_ · Line 1 of the address   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-line-1-of-the-address-1)
> >
> > ##### `line_2`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#line_2-1)
> >
> > ###### _string_ · Line 2 of the address   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-line-2-of-the-address-1)
> >
> > ##### `postal_code`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#postal_code-1)
> >
> > ###### _string_ · Postal code of the area   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-postal-code-of-the-area-1)
> >
> > ##### `state`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#state-1)
> >
> > ###### _string_ · State/province of the country   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-stateprovince-of-the-country-1)

* * *

##### `order_details`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#order_details)

###### _array of objects_   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#array-of-objects)

The JSON array for order details

> ##### `id`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#id)
>
> ###### _string_ · The unique identifier of the order-item   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-the-unique-identifier-of-the-order-item)
>
> ##### `name`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#name)
>
> ###### _string_ · The name of the product   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-the-name-of-the-product)
>
> ##### `price`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#price)
>
> ###### _double_ · The unit price of the product   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#double-%C2%B7-the-unit-price-of-the-product)
>
> ##### `quantity`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#quantity)
>
> ###### _integer_ · The quantity of the product   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#integer-%C2%B7-the-quantity-of-the-product)
>
> ##### `image`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#image)
>
> ###### _string_ · The URL of the product image   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-the-url-of-the-product-image)
>
> ##### `additional_details`\\#\#\#\#\#\# _object_ · Additional details about the order (This varies as per PSP specification)   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#additional_details-object-%C2%B7-additional-details-about-the-order-this-varies-as-per-psp-specification)

* * *

##### `success_url`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#success_url)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-span-stylecolorredrequiredspan-6)

The URL of the success page hosted by the merchant

* * *

##### `failure_url`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#failure_url)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-span-stylecolorredrequiredspan-7)

The URL of the failure page hosted by the merchant

* * *

##### `pending_url`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#pending_url)

###### _string_  [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string)

The URL of the pending page hosted by the merchant.

* * *

##### `expiry_date`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#expiry_date)

###### _string_  [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-1)

Date and time to expire the payment link in UTC format.

* * *

##### `source`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#source)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-%C2%B7-span-stylecolorredrequiredspan-8)

'default', 'api' or 'checkout' -- The Source of Payment Link creation.

* * *

##### `show_shipping_details`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#show_shipping_details)

###### _boolean_   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#boolean)

Boolean flag to show shipping details in Checkout page.

* * *

##### `show_back_button`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#show_back_button)

###### _boolean_   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#boolean-1)

Boolean flag to show back button in Checkout page.

* * *

##### `default_guest_checkout`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#default_guest_checkout)

###### _boolean_   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#boolean-2)

Boolean flag to enable default guest checkout

* * *

##### `is_checkout_embed`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#is_checkout_embed)

###### _boolean_   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#boolean-3)

Boolean flag to enable checkout embedding

* * *

##### `notify_by_email`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#notify_by_email)

###### _boolean_   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#boolean-4)

Boolean flag to notify customer by email

* * *

##### `notify_by_phone`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#notify_by_phone)

###### _boolean_   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#boolean-5)

Boolean flag to notify customers by phone

* * *

##### `override_auto_redirect`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#override_auto_redirect)

###### _boolean_   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#boolean-6)

Boolean flag to abort auto redirection and use the response

* * *

##### `user_configured_field1`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#user_configured_field1)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-2)

Custom user-configured field 1

* * *

##### `user_configured_field2`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#user_configured_field2)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-3)

Custom user-configured field 2

* * *

##### `user_configured_field3`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#user_configured_field3)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-4)

Custom user-configured field 3

* * *

##### `user_configured_field4`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#user_configured_field4)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-5)

Custom user-configured field 4

* * *

##### `user_configured_field5`   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#user_configured_field5)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/checkout-service\#string-6)

Custom user-configured field 5

* * *

### Embedding the checkout using iFrame   [Skip link to Embedding the checkout using iFrame](https://docs.portone.cloud/docs/checkout-service\#embedding-the-checkout-using-iframe)

Embedding a checkout experience within an iFrame provides seamless, uninterrupted payment flows by allowing the checkout interface to load directly on your page. Instead of redirecting customers, the embedded checkout offers an improved user experience by keeping users on your website. Below are the key steps and necessary configuration details to implement the embedded checkout correctly.

#### Step 1: Configure Checkout Payload Settings   [Skip link to Step 1: Configure Checkout Payload Settings](https://docs.portone.cloud/docs/checkout-service\#step-1-configure-checkout-payload-settings)

To ensure the checkout service behaves appropriately for embedding, you must set the following flags in your checkout payload:

JSON

```rdmd-code lang-Text theme-light

is_checkout_embed: true
override_auto_redirect: false

```

#### Step 2: Adding the iFrame to Your Page   [Skip link to Step 2: Adding the iFrame to Your Page](https://docs.portone.cloud/docs/checkout-service\#step-2-adding-the-iframe-to-your-page)

The following HTML code snippet must be added to your webpage to load the embedded checkout UI. This structure ensures that the checkout interface displays properly with appropriate styling, z-index management, and backdrop handling.

HTML

```rdmd-code lang-html theme-light

<div
  class="portone-container"
  id="portone-container"
  style="z-index: 1000000000;position: fixed;top: 0px;display: none;left: 0px;height: 100%;width: 100%;backface-visibility: hidden;overflow-y: visible;"
>
  <div
    class="portone-backdrop"
    style="min-height: 100%; transition: all 0.3s ease-out 0s; position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5);"
  ></div>
  <iframe
    style="opacity: 1; height: 100%; position: relative; background: none; display: block; border: 0px none transparent; margin: 0px; padding: 0px; z-index: 2; width: 100%;"
    allowtransparency="true"
    frameborder="0"
    width="100%"
    height="100%"
    allowpaymentrequest="true"
    src=""
    id="portone-checkout-frame"
    class="portone-checkout-frame"
  ></iframe>
</div>;

```

#### Step 3: Using the Checkout Service   [Skip link to Step 3: Using the Checkout Service](https://docs.portone.cloud/docs/checkout-service\#step-3-using-the-checkout-service)

Once the above code is added to the page, you can implement the checkout service.

#### Key Considerations   [Skip link to Key Considerations](https://docs.portone.cloud/docs/checkout-service\#key-considerations)

- **Cross-Origin Restrictions**


Ensure your iFrame source (src URL) is from a trusted domain to avoid CORS (Cross-Origin Resource Sharing) issues.
- **Browser Compatibility**


While most modern browsers support iFrame embedding, certain restrictions on cookies or third-party scripts may affect the checkout experience. Ensure that `allowpaymentrequest` is enabled for secure payments.
