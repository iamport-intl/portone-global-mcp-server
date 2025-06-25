---
url: "https://docs.portone.cloud/docs/embed"
title: "Embed"
---

### **Embed SDK Overview**   [Skip link to [object Object]](https://docs.portone.cloud/docs/embed\#embed-sdk-overview)

The **Embed SDK** is designed for **rapid integration** across multiple platforms like Android, Flutter, iOS, and React Native. It allows developers to integrate payment processing using a **WebView**, making it ideal for apps that prioritize speed and simplicity over full UI customization.

* * *

### **Platform-Specific Integration Overview**   [Skip link to [object Object]](https://docs.portone.cloud/docs/embed\#platform-specific-integration-overview)

The integration pattern is consistent across platforms, opening a WebView for payment processing. While the steps are similar, code and setup vary slightly based on the platform.

|  | **Android** | **Flutter** | **iOS** | **React Native** |
| --- | --- | --- | --- | --- |
| Integration Type : WebView | ✓ | ✓ | ✓ | ✓ |
| Integration Process | [Android](https://docs.portone.cloud/docs/android-embed) | [Flutter](https://dash.readme.com/project/chaiport-docs/v1.0/docs/flutter-embed) | [iOS](https://docs.portone.cloud/docs/ios-embed) | [React Native](https://docs.portone.cloud/docs/rn-embed) |

* * *

### **When to Use the Embed SDK**   [Skip link to [object Object]](https://docs.portone.cloud/docs/embed\#when-to-use-the-embed-sdk)

| **Use Case** | **Description** |
| --- | --- |
| **Quick Launch** | For projects that need **speed-to-market** with minimal development effort. |
| **Standardized Checkout** | Apps that can rely on **PortOne's pre-designed checkout UI** without customizations. |
| **Unified Experience** | Provides a **consistent payment flow** across different platforms and devices. |

### **Sequence Diagram**   [Skip link to [object Object]](https://docs.portone.cloud/docs/embed\#sequence-diagram)

![](https://files.readme.io/2c22a88c5c77d3baab69d28cf6eed980805b186d8d23aa1c825aecf2e2176f56-Embed_Flow_2.png)

**Normal Flow**

The Normal Flow redirects users to the webView to complete the payment process. After authentication and verification in the web interface, the user is redirected back to the app with the payment result.

**App-to-App Flow**

The App-to-App Flow is used when the payment method requires the user to complete the payment process in another application (such as a banking or wallet app). After authentication in the external app, the user is redirected back to the merchant app.

| **Aspect** | **Normal Flow** | **App-to-App Flow** |
| --- | --- | --- |
| **User Stays in App** | Maybe (Redirect to web browser/WebView) | No (Redirect to external app) |
| **Authentication** | Handled via web interface | Handled by an external app |
| **Redirects** | Yes (to and from web browser/WebView) | Yes (to and from external app) |
| **User Experience** | User is redirected but can complete in-app | Requires app switching, possible disruption |

* * *

### **Why Embed SDK ?**   [Skip link to [object Object]](https://docs.portone.cloud/docs/embed\#why-embed-sdk-)

- **Simple Integration** : Apps that need a fast, simple integration with minimal customization effort, and where the entire payment flow can occur in a WebView.

* * *

### **Embed Flow - PortOne's Pre-built Checkout**   [Skip link to [object Object]](https://docs.portone.cloud/docs/embed\#embed-flow---portones-pre-built-checkout)

#### Overview of the Embed flow   [Skip link to Overview of the Embed flow](https://docs.portone.cloud/docs/embed\#section-overview-of-the-embed-flow)

- Displayed the Checkout page created by Portone.
- Opened the Checkout page URL in a WebView.
- Renders the wallet element when the "Wallets" option is selected, and likewise for other payment methods.
- Upon selecting COD and tapping "Pay Now," the transaction is initiated and processed.
- The final confirmation page is shown.
- This entire flow is handled by the SDK.

![Embed Flow](https://i.imgur.com/LeLpvjQ.gif)
