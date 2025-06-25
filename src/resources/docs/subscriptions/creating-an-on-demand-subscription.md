---
url: "https://docs.portone.cloud/docs/creating-an-on-demand-subscription"
title: "Creating an On-Demand Subscription"
---

This document provides a comprehensive guide for creating an **On-Demand Subscription** using the PortOne API. Merchants can generate subscription links and share them with customers for flexible, usage-based billing.

🦉

Subscription: Creating an OnDemand Subscription

Open Recipe

* * *

## **Steps to Create an On-Demand Subscription**   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#steps-to-create-an-on-demand-subscription)

1. **Setup API Credentials**: Ensure you have your `PortOne Key`, `Secret Key`, and `JWT Token` ready for authentication.
2. **Create Payload**: Prepare the JSON request body with all required parameters.
3. **Generate Signature Hash**: Generate the `signature_hash` as per the [Signature Documentation](https://docs.portone.cloud/docs/ondemand-subscription).
4. **Send API Request**: Use the API endpoint with the prepared payload.
5. **Handle API Response**: Handle the response to retrieve the subscription link and its status.

* * *

## **API Endpoint**   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#api-endpoint)

**POST** `https://api.portone.cloud/api/subscription/createSubscription`

* * *

## **Headers**   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#headers)

##### `Content-Type`   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#content-type)

###### _string_ · required   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#string-%C2%B7-span-stylecolorredrequiredspan)

Set to `application/json`.

* * *

##### `X-Portone-Client-Key`   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#x-portone-client-key)

###### _string_ · required   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#string-%C2%B7-span-stylecolorredrequiredspan-1)

The unique PortOne key for the merchant.

* * *

##### `Authorization`   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#authorization)

###### _string_ · required   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#string-%C2%B7-span-stylecolorredrequiredspan-2)

JWT for authenticating API requests. Learn how to generate the token [here](https://docs.portone.cloud/docs/jwt-authentication).

* * *

## **Request Example**   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#request-example)

#### Request Body:   [Skip link to Request Body:](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#request-body)

JSON

```rdmd-code lang-json theme-light

{
  "portone_key": "PORTONE_KEY",
  "merchant_order_ref": "Subscription_1729672233762",
  "source": "api",
  "customer_email_address": "test@gmail.com",
  "customer_name": "NGUYEN VAN A",
  "customer_phone_number": "+919876543210",
  "description": "Product name for the customer's subscription purchase",
  "initial_amount": 100,
  "country_code": "US",
  "currency": "USD",
  "environment": "sandbox",
  "notify_by_email": false,
  "notify_by_phone": false,
  "plan_order_ref": "2mbuAw2lSOkLHfB9cAyuxBxdd2W",
  "subscription_type": "ONDEMAND",
  "notes": [\
    { "key": "special_instructions", "value": "Deliver between 9-11 AM" },\
    { "key": "gift_wrap", "value": "Yes" }\
  ],
  "started_at": "",
  "success_url": "https://subscription.portone.cloud/success.html",
  "failure_url": "https://subscription.portone.cloud/failure.html",
  "pending_url": "https://subscription.portone.cloud/pending.html"
}

```

## **Request Body Parameters**   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#request-body-parameters)

Below are the required and optional parameters for creating an **On-Demand Subscription**:

### **General Parameters**   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#general-parameters)

##### `portone_key`   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#portone_key)

###### _string_ · required   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#string-%C2%B7-span-stylecolorredrequiredspan-3)

The unique PortOne key for the merchant.

* * *

##### `signature_hash`   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#signature_hash)

###### _string_ · required   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#string-%C2%B7-span-stylecolorredrequiredspan-4)

Signature hash generated as per [On-Demand Subscription Request Signature Documentation](https://docs.portone.cloud/docs/ondemand-subscription).

* * *

##### `merchant_order_ref`   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#merchant_order_ref)

###### _string_ · required   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#string-%C2%B7-span-stylecolorredrequiredspan-5)

The unique merchant order reference generated by the merchant.

* * *

##### `description`   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#description)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#string)

Product name for the customer's subscription purchase.

* * *

##### `source`   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#source)

###### _string_ · required   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#string-%C2%B7-span-stylecolorredrequiredspan-6)

The source of creation: `default`, `api`, or `checkout`.

* * *

##### `customer_email_address`   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#customer_email_address)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#string-1)

Email address of the customer.

* * *

##### `customer_name`   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#customer_name)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#string-2)

Name of the customer.

* * *

##### `customer_phone_number`   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#customer_phone_number)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#string-3)

Phone number of the customer in international format (e.g., `+91XXXXXXXXXX`).

* * *

##### `currency`   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#currency)

###### _string_ · required   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#string-%C2%B7-span-stylecolorredrequiredspan-7)

The currency of the subscription (e.g., `USD`).

* * *

##### `environment`   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#environment)

###### _string_ · required   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#string-%C2%B7-span-stylecolorredrequiredspan-8)

Environment of the transaction, either `sandbox` or `live`.

* * *

##### `notify_by_email`   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#notify_by_email)

###### _boolean_   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#boolean)

Specifies if email notifications should be sent ( `true/false`).

* * *

##### `notify_by_phone`   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#notify_by_phone)

###### _boolean_   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#boolean-1)

Specifies if phone notifications should be sent ( `true/false`).

* * *

##### `plan_order_ref`   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#plan_order_ref)

###### _string_ · required   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#string-%C2%B7-span-stylecolorredrequiredspan-9)

The reference ID for the plan order.

* * *

##### `success_url`   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#success_url)

###### _string_ · required   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#string-%C2%B7-span-stylecolorredrequiredspan-10)

The URL to redirect to after a successful subscription.

* * *

##### `failure_url`   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#failure_url)

###### _string_ · required   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#string-%C2%B7-span-stylecolorredrequiredspan-11)

The URL to redirect to after a failed subscription.

* * *

##### `pending_url`   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#pending_url)

###### _string_ · required   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#string-%C2%B7-span-stylecolorredrequiredspan-12)

The URL to redirect to for a pending subscription.

* * *

### **On-Demand Subscription-Specific Parameters**   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#on-demand-subscription-specific-parameters)

##### `subscription_type`   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#subscription_type)

###### _string_ · required   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#string-%C2%B7-span-stylecolorredrequiredspan-13)

The type of subscription. Set to `ONDEMAND`.

* * *

##### `initial_amount`   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#initial_amount)

###### _double_ · required   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#double-%C2%B7-span-stylecolorredrequiredspan)

The amount for the first deduction (can be a floating-point number).

* * *

##### notes   [Skip link to notes](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#notes)

###### _array of objects_   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#array-of-objects)

The JSON array for additional notes

> ##### key   [Skip link to key](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#key)
>
> ###### _string_ · The key describing the note. Example: `special_instructions` or `gift_wrap`.   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#string-%C2%B7-the-key-describing-the-note-example-special_instructions-or-gift_wrap)
>
> ##### value   [Skip link to value](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#value)
>
> ###### _string_ · The value of the note. Example: `Deliver between 9-11 AM` or `Yes`.   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#string-%C2%B7-the-value-of-the-note-example-deliver-between-9-11-am-or-yes)

* * *

##### additional\_costs   [Skip link to additional_costs](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#additional_costs)

###### _array of objects_   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#array-of-objects-1)

The JSON array for additional costs

> ##### key   [Skip link to key](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#key-1)
>
> ###### _string_ · The key describing the additional cost. Example: `tax` or `shipping`.   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#string-%C2%B7-the-key-describing-the-additional-cost-example-tax-or-shipping)
>
> ##### value   [Skip link to value](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#value-1)
>
> ###### _double_ · The value of the additional cost. Example: `50` for tax or `25` for shipping.   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#double-%C2%B7-the-value-of-the-additional-cost-example-50-for-tax-or-25-for-shipping)

* * *

##### `expiry_date`   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#expiry_date)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#string-4)

The expiration date and time of the subscription link.

* * *

## **Response**   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#response)

#### **Success Response**   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#success-response)

JSON

```rdmd-code lang-json theme-light

{
  "is_success": true,
  "merchant_order_ref": "Subscription_1729672233762",
  "order_ref": "2mbuAw2lSOkLHfB9cAyuxBxdd2W",
  "subscription_link": "https://subscription.portone.cloud/?ref=2mbuAw2lSOkLHfB9cAyuxBxdd2W",
  "status_code": "200"
}

```

#### **Error Response**   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#error-response)

JSON

```rdmd-code lang-json theme-light

{
  "is_success": false,
  "message": "The API request failed due to invalid parameters.",
  "status_code": "400",
  "status_reason": "Bad Request"
}

```

## **Best Practices**   [Skip link to [object Object]](https://docs.portone.cloud/docs/creating-an-on-demand-subscription\#best-practices)

- **Environment Selection**: Use `sandbox` for testing and `live` for production.
- **Validation**: Validate all required fields before sending the request.

* * *

This document serves as a comprehensive guide to creating **On-Demand Subscriptions** using the PortOne API.

