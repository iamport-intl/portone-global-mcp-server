---
url: "https://docs.portone.cloud/docs/connect"
title: "Connect"
---

### **Connect SDK Overview**   [Skip link to [object Object]](https://docs.portone.cloud/docs/connect\#connect-sdk-overview)

The **Connect SDK** offers full control over the payment process, enabling a **native checkout experience** with deep customization. It's ideal for developers aiming for a tailored, seamless UI/UX that aligns with their app's brand. While integration requires more effort, it offers flexibility suited for complex payment needs.

* * *

### **Platform-Specific Integration Overview**   [Skip link to [object Object]](https://docs.portone.cloud/docs/connect\#platform-specific-integration-overview)

| **Aspect** | **Android** | **Flutter** | **iOS** | **React Native** |
| --- | --- | --- | --- | --- |
| Integration Process | [Android](https://docs.portone.cloud/docs/android-connect) | [Flutter](https://dash.readme.com/project/chaiport-docs/v1.0/docs/flutter-connect) | [iOS](https://docs.portone.cloud/docs/ios-connect) | [React Native](https://docs.portone.cloud/docs/rn-connect) |

* * *

### **When to Use Connect SDK**   [Skip link to [object Object]](https://docs.portone.cloud/docs/connect\#when-to-use-connect-sdk)

| **Key Scenario** | **Description** |
| --- | --- |
| **Complete Control** | Design a fully **native checkout** that matches your app’s branding and UX. |
| **Custom Workflows** | Ideal for apps with **complex workflows**, loyalty programs, or multi-step processes. |
| **High Customization** | Customize specific aspects like **payment method**, **authentication**, and more. |

* * *

### **Sequence Diagram**   [Skip link to [object Object]](https://docs.portone.cloud/docs/connect\#sequence-diagram)

![](https://files.readme.io/2cc6efb3533e6b884080da0868d2d6bb33773ca1f4b53aa3199b216485a8d7f9-Connect_Flow.png)

**Seamless Flow**

The Seamless Flow provides a fully integrated in-app payment experience where users stay within the app throughout the payment process. This flow is ideal for providing a smooth and native user experience.

**App-to-App Flow**

The App-to-App Flow is used when the payment method requires the user to complete the payment process in another application (such as a banking or wallet app). After authentication in the external app, the user is redirected back to the merchant app.

**Web Flow**

The Web Flow redirects users to the webView to complete the payment process. After authentication and verification in the web interface, the user is redirected back to the app with the payment result.

|  | **Seamless Flow** | **App-to-App Flow** | **Web Flow** |
| --- | --- | --- | --- |
| **User Stays in App** | Yes | No (Redirect to external app) | Maybe (Redirect to web browser/WebView) |
| **Authentication** | Handled directly within the app | Handled by an external app | Handled via web interface |
| **Redirects** | No | Yes (to and from external app) | Yes (to and from web browser/WebView) |
| **User Experience** | Smooth and uninterrupted | Requires app switching, possible disruption | User is redirected but can complete in-app |

* * *

### **Why Connect SDK?**   [Skip link to [object Object]](https://docs.portone.cloud/docs/connect\#why-connect-sdk)

- **Maximum Flexibility**: Tailor the entire payment flow to fit your app's requirements.
- **Native Experience**: Seamless integration with your app’s UI, providing a consistent and polished user experience.
- **Customization**: Perfect for apps that need unique features like loyalty programs, custom checkout flows, or advanced payment options.

* * *

### **Connect Flow - Merchant's Checkout**   [Skip link to [object Object]](https://docs.portone.cloud/docs/connect\#connect-flow---merchants-checkout)

#### Overview of the Connect flow   [Skip link to Overview of the Connect flow ](https://docs.portone.cloud/docs/connect\#section-overview-of-the-connect-flow)

- Displays a custom checkout element created by the merchant for users.
- Upon selecting COD and tapping "Pay Now," the transaction is initiated and processed.
- The transaction is handled using the SDK methods.
- Portone's SDK provides all the necessary methods to process transactions with various payment methods.
- The merchant manages all UI elements

![Checkout Process](https://i.imgur.com/wXHUbs6.gif)
