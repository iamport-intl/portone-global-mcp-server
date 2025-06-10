---
url: "https://docs.portone.cloud/docs/5-test-the-integration"
title: "5. Test the integration"
---

Testing your integration is a critical step to ensure that all components function as expected and provide a seamless experience for users. By thoroughly validating each part of your payment integration, you can identify and resolve any issues before going live. This section outlines the key areas that should be tested to guarantee a smooth and efficient payment processing system.

### Integration Test Plan   [Skip link to Integration Test Plan](https://docs.portone.cloud/docs/5-test-the-integration\#integration-test-plan)

1. **Payment Flow to Order Creation Journey**


Test the entire payment flow, from initiating a payment to successfully creating an order. This is particularly relevant for eCommerce stores but is applicable to any integration requiring a payment confirmation to trigger order creation.

2. **Payment Confirmation**


Verify that users receive accurate payment confirmations after completing a transaction. Ensure that the confirmation details reflect the correct transaction amount and order information.

3. **Webhooks Received from PortOne**


Test the webhooks to ensure your system correctly receives and processes notifications from PortOne regarding transaction statuses, such as successful payments, failures, and refunds.

4. **Use Test Cards and Wallet Details**


Utilize [PSP test card information](https://docs.portone.cloud/docs/payment-channels) and wallet details provided in the relevant Payment Service Provider (PSP) documentation. This will help you simulate various transaction scenarios without processing real payments.

5. **Signature Verification of Webhooks & Redirection Data**


Ensure the signature verification process for both webhooks and redirection data is implemented correctly. This step is crucial for maintaining data integrity and security.

6. **Refund Flow**


Simulate refund transactions to validate the refund process. Confirm that the refund is processed correctly, and users are notified appropriately.

7. **Transaction Status Check APIs**


Utilize the transaction status check APIs to confirm that your application can accurately retrieve and display the current status of transactions. This ensures transparency for both you and your customers.

8. **Required Methods Activated from Dashboard**


Verify that all required payment methods are activated and functioning as expected in your dashboard. This includes checking for compatibility with various payment channels and ensuring that users can select their preferred payment options.

By meticulously testing these areas, you can ensure that your integration is robust, user-friendly, and ready for a successful go-live.