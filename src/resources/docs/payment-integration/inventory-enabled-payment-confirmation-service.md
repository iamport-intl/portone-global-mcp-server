---
url: "https://docs.portone.cloud/docs/inventory-enabled-payment-confirmation-service"
title: "Inventory-Enabled Payment Confirmation Service"
---

## Overview   [Skip link to Overview](https://docs.portone.cloud/docs/inventory-enabled-payment-confirmation-service\#overview)

This document explains the payment processing flow integrated with an inventory check feature. The process ensures that payments are only completed if the requested items are available in stock. This feature is designed to prevent overselling and ensure a seamless customer experience.

* * *

## Key Components   [Skip link to Key Components](https://docs.portone.cloud/docs/inventory-enabled-payment-confirmation-service\#key-components)

1. **User**: The customer initiating the payment.
2. **PortOne Checkout**: The frontend interface where the user interacts to make a payment.
3. **PortOne Backend (PBE)**: The backend system that handles payment processing and communicates with the PSP and Merchant Backend.
4. **PSP (Payment Service Provider)**: The external payment gateway that authorizes and captures payments.
5. **Merchant Backend**: The merchant's system controls inventory management and order processing.
6. **Pending Page**: A temporary page is displayed to the user while the payment and inventory check are processed.

* * *

## Payment Flow with Inventory Check   [Skip link to Payment Flow with Inventory Check](https://docs.portone.cloud/docs/inventory-enabled-payment-confirmation-service\#payment-flow-with-inventory-check)

![](https://files.readme.io/92bbf8cc72b588fdc035f5a56fcacc2bb0a478d25f1cee2eca887a3688aaca88-Inventory_Flow.png)

### Step-by-Step Process   [Skip link to Step-by-Step Process](https://docs.portone.cloud/docs/inventory-enabled-payment-confirmation-service\#step-by-step-process)

01. **User Initiates Payment**
    - The user clicks "Pay Now" on the PortOne checkout.
02. **Payment Initialization**
    - Checkout sends a request to PBE to initialise the payment.
03. **PSP Authorization**
    - PortOne Backend communicates with the PSP to authorize the payment.
04. **Pending Page Display**
    - Once the PSP authorisation is successful, PBE directs the user to a pending page on checkout while the inventory check is performed.
05. **Inventory Check Trigger**
    - PBE triggers an inventory check by sending a request to the Merchant Backend.
06. **Merchant Backend Processing**
    - Sends a confirmation ("Ok") back to PBE if the inventory is available.
    - **Response Handling**:

      - Check the HTTP response status code.
        - If the status code is `200 OK`, mark the confirmation as successful.
        - If the status code is not `200 OK`, send the `reason` in JSON
    - Recommended


      The Merchant Backend processes the inventory check:


      \- Verifies item availability.


      \- Blocks the item stock to prevent overselling.
07. **Payment Capture**
    - PBE requests the PSP to capture the payment (complete the transaction).
08. **Payment Result**
    - PSP sends the capture result back to PBE.
09. **User Redirection**
    - PBE checks the payment result and redirects the user to the appropriate page (success or failure) on checkout.
10. **Transaction Result Webhook**
    - PBE sends a webhook to the Merchant Backend with the final transaction result.
    - Recommended


      The Merchant Backend updates the inventory:


      \- Marks the item as sold if the payment is successful.


      \- Unblocks the item stock if the payment fails.

* * *

## Benefits for Merchants   [Skip link to Benefits for Merchants](https://docs.portone.cloud/docs/inventory-enabled-payment-confirmation-service\#benefits-for-merchants)

- **Prevents Overselling**: Ensures that payments are only completed if the inventory is available.
- **Real-Time Inventory Management**: Automatically blocks and updates stock based on payment results.
- **Seamless User Experience**: Users are kept informed with a pending page while the system processes their payment and inventory check.
- **Reduced Manual Intervention**: Automates the inventory and payment reconciliation process.

* * *

## Available PSPs   [Skip link to Available PSPs](https://docs.portone.cloud/docs/inventory-enabled-payment-confirmation-service\#available-psps)

1. PayLetter Global

- Seamless Credit Card

* * *

## Integration Requirements   [Skip link to Integration Requirements](https://docs.portone.cloud/docs/inventory-enabled-payment-confirmation-service\#integration-requirements)

To enable this feature, ensure the following:

1. **Merchant Backend API**:

   - Implement an endpoint to handle inventory checks and stock blocking.
   - Implement a webhook endpoint to receive transaction results from PBE.
2. **Inventory Management System**:

   - Ensure real-time inventory tracking and stock-blocking capabilities.
3. **PortOne Dashboard Configuration**:

   - Ensure the merchant's endpoint to handle inventory checks is configured in the PortOne Dashboard in Settings > [Advanced](https://admin.portone.cloud/general-settings?tab=Advanced) page in the Inventory-Enabled Payment Confirmation Service section.
4. **PSP Integration**:

   - Ensure the PSP supports authorization and capture flows.

* * *

## Merchant development   [Skip link to Merchant development](https://docs.portone.cloud/docs/inventory-enabled-payment-confirmation-service\#merchant-development)

To support the inventory confirmation process, merchants are required to implement an **endpoint** in their backend system. PortOne's backend (PBE) will send requests to this endpoint from a specific IP address. The endpoint will receive a JSON payload containing the necessary transaction details. The merchant's backend must process this request and respond with an appropriate HTTP status code and a JSON response.

### Endpoint Requirements   [Skip link to Endpoint Requirements](https://docs.portone.cloud/docs/inventory-enabled-payment-confirmation-service\#endpoint-requirements)

1. **Endpoint Type**:
   - **HTTP Method**: `POST`
   - **Endpoint URL**: Provided by the merchant and configured in the PortOne Dashboard in Settings > [Advanced](https://admin.portone.cloud/general-settings?tab=Advanced) page in the Inventory-Enabled Payment Confirmation Service section (e.g., `https://merchant-backend.com/inventory-confirmation`).
2. **Request Source IP**:
   - PortOne will communicate with the merchant's endpoint using its designated IP address. To ensure secure communication, merchants should whitelist this IP. Please contact your PortOne business partner to obtain the specific IP address for whitelisting.
3. **Request Payload**:

The endpoint will receive a JSON payload with the following structure:



JSON





```rdmd-code lang-json theme-light

{
     "portone_key": "merchant_key_123",
     "merchant_order_ref": "order_ref_456",
     "portone_order_ref": "portone_order_ref_789",
     "amount": 100.50,
     "currency": "USD"
}

```


### Parameter list   [Skip link to Parameter list](https://docs.portone.cloud/docs/inventory-enabled-payment-confirmation-service\#parameter-list)

##### `portone_key`   [Skip link to [object Object]](https://docs.portone.cloud/docs/inventory-enabled-payment-confirmation-service\#portone_key)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/inventory-enabled-payment-confirmation-service\#string)

The PortOne key of the merchant

* * *

##### `merchant_order_ref`   [Skip link to [object Object]](https://docs.portone.cloud/docs/inventory-enabled-payment-confirmation-service\#merchant_order_ref)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/inventory-enabled-payment-confirmation-service\#string-1)

The merchant's order reference while creating the transaction.

This will be the `merchant_order_ref` used to create the payment link/checkout.

* * *

##### `portone_order_ref`   [Skip link to [object Object]](https://docs.portone.cloud/docs/inventory-enabled-payment-confirmation-service\#portone_order_ref)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/inventory-enabled-payment-confirmation-service\#string-2)

The unique order reference generated by PortOne.

* * *

##### `amount`   [Skip link to [object Object]](https://docs.portone.cloud/docs/inventory-enabled-payment-confirmation-service\#amount)

###### _float64_   [Skip link to [object Object]](https://docs.portone.cloud/docs/inventory-enabled-payment-confirmation-service\#float64)

The transaction amount.

* * *

##### `currency`   [Skip link to [object Object]](https://docs.portone.cloud/docs/inventory-enabled-payment-confirmation-service\#currency)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/inventory-enabled-payment-confirmation-service\#string-3)

The currency of the transaction (e.g., USD).

* * *

4. **Response Requirements**:

The merchant's backend must respond with the following:
   - **HTTP Status Code**:

     - `200 OK`: Indicates that the inventory check was successful, and the item is available.
     - Any other status code (e.g., `400 Bad Request`, `500 Internal Server Error`): Indicates a failure in processing the inventory check.
   - **Response Body**:


     If the status code is not `200 OK`, the response body must include a JSON object with a `reason` field explaining the failure. For example:



     JSON





     ```rdmd-code lang-json theme-light

     {
       "reason": "Insufficient inventory"
     }

     ```





      If the status code is `200 OK`, the response body should be empty
5. **Timeout Handling**

PortOne's backend (PBE) will wait for a response from the merchant's endpoint for a maximum of **10 seconds**. If the merchant's endpoint does not respond within this time, the request will be considered timed out, and the payment will be rejected.


* * *

## Example Scenarios   [Skip link to Example Scenarios](https://docs.portone.cloud/docs/inventory-enabled-payment-confirmation-service\#example-scenarios)

### Successful Payment   [Skip link to Successful Payment](https://docs.portone.cloud/docs/inventory-enabled-payment-confirmation-service\#successful-payment)

1. The user pays for an item.
2. Inventory is available.
3. Payment is captured, and the item is marked as sold.

### Failed Payment (Insufficient Inventory)   [Skip link to Failed Payment (Insufficient Inventory)](https://docs.portone.cloud/docs/inventory-enabled-payment-confirmation-service\#failed-payment-insufficient-inventory)

1. The user pays for an item.
2. Inventory is unavailable.
3. Payment is not captured, and the item stock is unblocked.

* * *

## Testing and Validation   [Skip link to Testing and Validation](https://docs.portone.cloud/docs/inventory-enabled-payment-confirmation-service\#testing-and-validation)

Merchants should thoroughly test the endpoint to ensure it:

1. Correctly processes valid requests.
2. Handles invalid or missing fields appropriately.
3. Responds with the correct status codes and messages for various scenarios (e.g., insufficient inventory, internal errors, timeouts).

* * *

By implementing this endpoint, merchants can seamlessly integrate with PortOne's payment processing flow, ensuring that payments are only completed when inventory is available. This enhances the customer experience and prevents overselling.
