---
url: "https://docs.portone.cloud/docs/overview-new"
title: "Overview"
---

## **Mobile SDK Overview**   [Skip link to [object Object]](https://docs.portone.cloud/docs/overview-new\#mobile-sdk-overview)

We offer Mobile SDKs across four major platforms, each providing integration variants to match the merchant's needs: **Embed**, **Connect**, and **Custom**.

mobile\_sdk\_overview

![](https://cdn.loom.com/avatars/default-avatar.svg)

[mobile\_sdk\_overview](https://www.loom.com/share/cf2b5b2927624b2d9e2d2438d1caee24?source=embed_watch_on_loom_cta "mobile_sdk_overview")

5 min

21 views

0

[Open video in Loom](https://www.loom.com/share/cf2b5b2927624b2d9e2d2438d1caee24?source=embed_watch_on_loom_cta "Open video in Loom")

1.2×

5 min⚡️5 min 39 sec4 min 31 sec3 min 46 sec3 min 1 sec2 min 39 sec2 min 15 sec1 min 48 sec

Your user agent does not support the HTML5 Video element.

![](https://cdn.loom.com/avatars/default-avatar.svg)

[mobile\_sdk\_overview](https://www.loom.com/share/cf2b5b2927624b2d9e2d2438d1caee24?source=embed_watch_on_loom_cta "mobile_sdk_overview")

5 min

21 views

0

[Open video in Loom](https://www.loom.com/share/cf2b5b2927624b2d9e2d2438d1caee24?source=embed_watch_on_loom_cta "Open video in Loom")

1.2×

5 min⚡️5 min 39 sec4 min 31 sec3 min 46 sec3 min 1 sec2 min 39 sec2 min 15 sec1 min 48 sec

* * *

### Overview of SDK Options   [Skip link to Overview of  SDK Options](https://docs.portone.cloud/docs/overview-new\#overview-of--sdk-options)

|  | **Embed** | **Connect** | **Custom** (coming soon) |
| --- | --- | --- | --- |
| **Checkout Type** | **PortOne's pre-built checkout (WebView)** | **Merchant's checkout** | **PortOne’s custom checkout elements** |
| **Experience** | **WebView**-based | Full **Native** UI/UX | **Native** with customizable elements |
| **Ideal For** | Quick, simple integrations | Complex, branded checkouts | Custom flows without full build |
| **Payment Flow** | WebView experience | Native in-app experience | Native with custom UI elements |
| **Use Case** | Simple apps needing fast setup | Large apps with unique needs | Mid-sized apps requiring custom UI |
| **Customization** | Low: pre-built checkout | Full control | High: customizable payment elements |

[**View**: https://www.loom.com/embed/cf2b5b2927624b2d9e2d2438d1caee24?sid=e12d3fd8-ad00-40ea-a47f-73abaa63ecd7](https://www.loom.com/embed/cf2b5b2927624b2d9e2d2438d1caee24?sid=e12d3fd8-ad00-40ea-a47f-73abaa63ecd7)

* * *

## **Platform-Specific Details**   [Skip link to [object Object]](https://docs.portone.cloud/docs/overview-new\#platform-specific-details)

![](https://files.readme.io/866c4cf5c4a7f10807fac5637794d0fa72fdf6b3d277ab81463aa49ec0ef9ea9-diagram_platform.png)

| **SDK Versions** | **Android** | **Flutter** | **iOS** | **React Native** |
| --- | --- | --- | --- | --- |
| **Connect** | [Native](https://docs.portone.cloud/docs/android-connect) | [Native](https://docs.portone.cloud/docs/flutter-connect) | [Native](https://docs.portone.cloud/docs/ios-connect) | [Native](https://docs.portone.cloud/docs/rn-connect) |
| **Embed** | [WebView](https://docs.portone.cloud/docs/android-embed) | [WebView](https://docs.portone.cloud/docs/flutter-embed) | [WebView](https://docs.portone.cloud/docs/ios-embed) | [WebView](https://docs.portone.cloud/docs/rn-embed) |
| **Custom (coming soon)** | Custom UI | Custom UI | Custom UI | Custom UI |

* * *

## **SDK Variants**   [Skip link to [object Object]](https://docs.portone.cloud/docs/overview-new\#sdk-variants)

### **Embed Flow - PortOne's Pre-built Checkout**   [Skip link to [object Object]](https://docs.portone.cloud/docs/overview-new\#embed-flow---portones-pre-built-checkout)

- **Description**: A quick and easy way to add payments by embedding the checkout in a WebView, without needing to build custom UIs. PortOne handles everything inside the WebView.
- **Available On**: Android, iOS, Flutter, React Native
- **Ideal For**: Apps that need a fast, simple integration with minimal customization effort, and where the entire payment flow can occur in a WebView.
- Here is a GIF showing the sample **Portone's pre-built checkout**

#### Overview of the Embed flow   [Skip link to Overview of the Embed flow](https://docs.portone.cloud/docs/overview-new\#section-overview-of-the-embed-flow)

- Displayed the Checkout page created by Portone.
- Opened the Checkout page URL in a WebView.
- Renders the wallet element when the "Wallets" option is selected, and likewise for other payment methods.
- Upon selecting COD and tapping "Pay Now," the transaction is initiated and processed.
- The final confirmation page is shown.
- This entire flow is handled by the SDK.

![Embed Flow](https://i.imgur.com/LeLpvjQ.gif)

### **Connect Flow - Merchant's Checkout**   [Skip link to [object Object]](https://docs.portone.cloud/docs/overview-new\#connect-flow---merchants-checkout)

- **Description**: The **Connect SDK** delivers a fully native experience, giving merchants full control over the checkout process. It allows for UI customization and supports advanced payment flows, including seamless, app-to-app, and web flows, using methods provided by the **Portone SDK**.
- **Available On**: Android, iOS, Flutter, React Native
- **Ideal For**: Apps that require a tailored, fully native payment experience with control over UI/UX and payment processes.
- This is a sample **Merchant's checkout GIF** built by **merchant** using Portone's methods

#### Overview of the Connect flow   [Skip link to Overview of the Connect flow](https://docs.portone.cloud/docs/overview-new\#section-overview-of-the-connect-flow)

- Displays a custom checkout element created by the merchant for users.
- Upon selecting COD and tapping "Pay Now," the transaction is initiated and processed.
- The transaction is handled using the SDK methods.
- Portone's SDK provides all the necessary methods to process transactions with various payment methods.
- The merchant manages all UI elements

![Checkout Process](https://i.imgur.com/wXHUbs6.gif)

### **Custom Flow - PortOne's Custom Checkout Elements** (coming soon)   [Skip link to [object Object]](https://docs.portone.cloud/docs/overview-new\#custom-flow---portones-custom-checkout-elements-coming-soon)

- **Description**: The **Custom SDK** provides maximum flexibility, allowing merchants to design and implement their own checkout flows and payment elements. Developers have full control over every aspect of the payment experience, including UI and transaction logic.
- **Available On**: iOS, Flutter, React Native
- **Ideal For**: Apps that need full control over the payment experience but do not want to build the entire payment logic from scratch.
- Here is a GIF showing the sample **Portone's custom checkout elements**

#### Overview of the Custom flow   [Skip link to Overview of the Custom flow](https://docs.portone.cloud/docs/overview-new\#section-overview-of-the-custom-flow)

- All displayed elements are provided by Portone
- Shows a custom checkout element for users
- Renders the wallet element when the "Wallets" option is tapped
- Displays a customized credit card element when the credit card option is selected
- Initiates mobile flow authentication when saved cards are tapped
- The elements listed above are just a few of the features we offer

![Custom elements](https://i.imgur.com/db61Bmi.gif)

Updated6 months ago

* * *

Did this page help you?

Yes

No

![Help](https://cdn.jsdelivr.net/gh/iamport-intl/portone-devx-chatbot-widget@production/public/chat-intro1.svg)