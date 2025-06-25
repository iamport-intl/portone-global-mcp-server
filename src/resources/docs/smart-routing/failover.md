---
url: "https://docs.portone.cloud/docs/failover"
title: "FailOver Routing"
---

## Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/failover\#introduction)

In the world of online payments, the success or failure of a transaction can have significant implications for both businesses and customers. Payment failures can be broadly classified into two categories

#### Customer-related failures   [Skip link to Customer-related failures](https://docs.portone.cloud/docs/failover\#customer-related-failures)

> **Customer-related failures typically result from unavoidable issues such as incorrect OTP or CVV, payment timeouts, and other similar errors.**

#### Non-customer-related failures   [Skip link to Non-customer-related failures](https://docs.portone.cloud/docs/failover\#non-customer-related-failures)

> **In contrast, non-customer-related failures occur at the payment gateway level and can arise due to factors such as server downtime, maintenance, connectivity issues, or an overloaded gateway.**

## How to address Non-customer-related failures   [Skip link to How to address Non-customer-related failures](https://docs.portone.cloud/docs/failover\#how-to-address-non-customer-related-failures)

To address non-customer-related payment failures, it is crucial to build a smart routing mechanism that can help route transactions appropriately and improve success rates.

We have implemented Failover routing to switch between payment gateways in case of a failure. This type of routing is straightforward and reliable, allowing the system to switch to a backup gateway quickly. Failover routing is ideal for businesses that need to have a backup plan in place to ensure that their transactions can still go through even if their primary payment gateway experiences a failure.

## User Flow for Failover Routing   [Skip link to User Flow for Failover Routing](https://docs.portone.cloud/docs/failover\#user-flow-for-failover-routing)

![](https://files.readme.io/9736004f0df863f90f346d433e7a2080b98ad80c19baf2b13630fb06cbf73dae-Failover_Routing.png)

The payment process is a critical aspect of any business, and ensuring a smooth and seamless payment experience for customers is paramount. At our system, we have implemented a failover routing mechanism that helps to ensure that payment transactions are successful, even in the event of a payment gateway failure.

To understand how the failover routing mechanism works, let's take a look at the user flow that occurs during the payment process:

1. **Transaction Initiation:** When a payment transaction is initiated on our system.
2. **Transaction Success:** If the transaction is successful, our system will redirect to the success URL provided during the payment process. The success URL will contain query parameters that include the relevant information about the transaction.
3. **Transaction Failure:** In case of any errors or failures that may occur during the payment process, our system will categorize the errors and redirect them to an intermediate page. This intermediate page will provide detailed error messages and reasons for the failure, allowing the customer to take appropriate actions.
4. **Intermediate Page:** The intermediate page will contain two buttons:

   - The " **Cancel**" button will redirect to the failure URL, which is also provided during the payment process. This button will not allow any retry attempts.
   - The " **Retry**" button will be enabled based on the error categorization. If the error is determined to be a "User Error", our system will attempt a retry with the same payment service provider (PSP) that was used during the first attempt. If the error is categorized as a "PSP Error", we will retry with another PSP as per the ranking provided.

This payment flow ensures a seamless payment process for customers, while also providing a reliable and fault-tolerant payment system for merchants. By implementing failover routing, we are able to minimize the impact of payment gateway failures on our payment system, providing peace of mind to both businesses and customers alike.

This payment flow ensures a seamless payment process for the customers, while also providing a reliable and fault-tolerant payment system for merchants.\_

### Configuration of Route from Admin Dashboard   [Skip link to Configuration of Route from Admin Dashboard](https://docs.portone.cloud/docs/failover\#configuration-of-route-from-admin-dashboard)

### Parameter for FailOver routing   [Skip link to Parameter for FailOver routing](https://docs.portone.cloud/docs/failover\#parameter-for-failover-routing)

To perform FailOver Routing on a transaction, below is the additional payload that needs to be added in the [Initiate Payment](https://docs.portone.cloud/reference/post_api-initiatepayment)

JSON

```rdmd-code lang-json theme-light

    "routing_enabled": true, //To enable routing. datatype: boolean
    "routing_params": {
        "type": "failover", //Identifier on type of routing. datatype: string
        "route_ref": "Route_2P0qQgyROrPuzJDZebGSIsfYsX4",  // Route reference that can be created from Dashboard. datatype: string
        // if you add route_ref in the payload you can ignore the below parameter
        "data": [\
            {\
                "channel_key": "GBPRIMEPAY", //Channel name from our docs. datatype: string\
                "method_key": "GBPRIMEPAY_CREDIT_CARD", //Method name from our docs. datatype: string\
                "rank": 1 //Rank or priority of the route. datatype: integer\
            },\
            {\
                "channel_key": "OMISE",\
                "method_key": "OMISE_CREDIT_CARD",\
                "rank": 2\
            }\
        ]
    }

```

### Response   [Skip link to Response](https://docs.portone.cloud/docs/failover\#response)

The API response will contain a redirect URL where user action can be performed, a sample response payload is given below

JSON

```rdmd-code lang-json theme-light

{
    "is_success": true,
    "redirect_url": " REDIRECT URL FOR MAKING THE PAYMENT ",
    "channel_order_ref": " PSP TRANSACTION REFERENCE ",
    "merchant_order_ref": " YOUR REFERENCE  ",
    "order_ref": " PORTONE TRANSACTIONS REFERER ",
    "message": "",
    "deep_link": "",
    "additional_data": null
}

```

### Scenarios   [Skip link to Scenarios](https://docs.portone.cloud/docs/failover\#scenarios)

| Scenarios | PSPs Config (Primary & Secondary) | No of Tries | Which PSP Triggered in each | UX flow in Steps | Final Outcome | Response |
| --- | --- | --- | --- | --- | --- | --- |
| Happy Scenario - with 3DS | PSP A & PSP B | 1 | PSP A | 1\. Payment Initiated <br> 2\. Redirect to PSP A<br>3\. 3DS Check<br>4\. Redirect to the Success URL | Payment Successful | Webhook & Redirection - PSP A details |
| PSP Error - Primary Fails | PSP A & PSP B | 2 | PSP A & PSP B | 1\. Payment Initiated<br>2\. Redirect to PSP A<br>3\. PSP A Fails<br>4\. Redirect to Intermediate Page<br>5\. Retry with PSP B | Payment Successful with PSP B | Webhook & Redirection - PSP B details |
| PSP Error - Secondary Also Fails | PSP A & PSP B | 2 | PSP A & PSP B | 1\. Payment Initiated<br>2\. Redirect to PSP A<br>3\. PSP A Fails<br>4\. Redirect to Intermediate Page<br>5\. Retry with PSP B<br>6\. PSP B Fails<br>7\. Redirect to Intermediate Page<br>8\. Cancel | Payment Failed with no Retry Attempts | Webhook & Redirection - PSP B details |
| User Error (e.g OTP incorrect) | PSP A & PSP B | 2 | PSP A | 1\. Payment Initiated<br>2\. Redirect to PSP A<br>3\. 3DS Check<br>4\. Redirect to Intermediate Page<br>5\. Retry with PSP A | Payment Successful with PSP A | Webhook & Redirection - PSP A details |
