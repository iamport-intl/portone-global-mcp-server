---
url: "https://docs.portone.cloud/docs/6-go-live-checklist"
title: "6. Go Live"
---

Before launching your PortOne integration in a live environment, it’s crucial to ensure that every aspect of your setup is thoroughly validated and ready for production.

The Go-Live Checklist provides a comprehensive guide to verify that all configurations, integrations, and security measures are in place. Following this checklist will help you identify any potential issues, ensuring a smooth transition and a seamless payment experience for your users. Review each item carefully to prepare for a successful go-live.

Go-live Checklist

[Go-live Checklist](https://www.loom.com/share/34e64cbd2a8a490a92fc5c50ca903b04 "Go-live Checklist")

[Go-live Checklist](https://www.loom.com/share/34e64cbd2a8a490a92fc5c50ca903b04 "Go-live Checklist")

## Go Live Checklist   [Skip link to Go Live Checklist](https://docs.portone.cloud/docs/6-go-live-checklist\#go-live-checklist)

### PortOne Onboarding   [Skip link to PortOne Onboarding](https://docs.portone.cloud/docs/6-go-live-checklist\#portone-onboarding)

- [x]  Create a PortOne account at [admin.portone.cloud](https://admin.portone.cloud/).
- [x]  Select Sandbox Mode to initiate Sandbox integration and testing.
- [x]  Follow below steps common for Sandbox and Live integrations.

### Configure Payment channels   [Skip link to Configure Payment channels](https://docs.portone.cloud/docs/6-go-live-checklist\#configure-payment-channels)

- [x]  Register merchant account on required payment channels
- [x]  Add the payment channel credentials in PortOne merchant portal.
- [x] Configure webhook

  - [x]  Configure webhook URL provided by PortOne in the Payment Channel portal.
  - [x]  Refer Payment Channel integration guidelines for more details.
  - [x]  In case of manual configuration, Please request the PSP support team to configure for you.

### Configure Webhook   [Skip link to Configure Webhook](https://docs.portone.cloud/docs/6-go-live-checklist\#configure-webhook)

- [x]  Host a webhook endpoints and add URL in the PortOne merchant portal.
- [x]  Highly recommended adding webhook to receive the transaction statuses. Refer [Webhooks](https://docs.portone.cloud/docs/webhook-configuration) for more details.

### Web-SDK (PortOne-JS) Integration   [Skip link to Web-SDK (PortOne-JS) Integration](https://docs.portone.cloud/docs/6-go-live-checklist\#web-sdk-portone-js-integration)

- [x]  Enable/ Disable the payment methods for the configured payment channels.
- [x]  Mark the payment methods as `Default` for the Credit Cards and ATM Cards options, Review the Checkout UI Preview inside Merchant Portal.
- [x]  Refer [Web Integration](https://docs.portone.cloud/docs/web-sdk-integration-1) for more details.

### Native-SDK Integration   [Skip link to Native-SDK Integration](https://docs.portone.cloud/docs/6-go-live-checklist\#native-sdk-integration)

- [x]  Ensure the environment is correctly specified as prod while initialising the SDK before releasing the App
- [x]  Check the secret key handling is done properly in order to access all SDK functionalities
- [x]  Test all the functionalities before releasing the App
- [x]  Check the correct version of the SDK is being used as per the requirement

### Important checks   [Skip link to Important checks](https://docs.portone.cloud/docs/6-go-live-checklist\#important-checks)

- [x]  Ensure the signature verification for redirection and webhook data is correctly implemented to secure data integrity
- [x]  Store your PortOne API keys securely, such as in environment variables, to prevent unauthorized access

### Pre Go Live Checklist   [Skip link to Pre Go Live Checklist](https://docs.portone.cloud/docs/6-go-live-checklist\#pre-go-live-checklist)

- [x]  Conduct thorough testing for all possible edge cases related to payment acceptance on your platform to ensure smooth operation.
- [x]  Run penny transactions on your live store to verify the payment setup is functioning correctly

### Go Live   [Skip link to Go Live](https://docs.portone.cloud/docs/6-go-live-checklist\#go-live)

- [x]  Move to Live mode and repeat all configurations as above with live account.