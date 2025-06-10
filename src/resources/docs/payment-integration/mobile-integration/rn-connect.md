---
url: "https://docs.portone.cloud/docs/rn-connect"
title: "RN Connect"
---

## Integrate with React Native SDK   [Skip link to Integrate with React Native SDK](https://docs.portone.cloud/docs/rn-connect\#integrate-with-react-native-sdk)

The PortOne React Native SDK allows merchants to seamlessly integrate the PortOne Payment Gateway into their React Native applications, enabling secure and efficient payment processing.

The PortOne react native SDK offers merchants a seamless way to integrate the PortOne Payment Gateway into their react native applications, enabling them to accept payments securely and efficiently. This SDK serves as a bridge between a merchant's app and the PortOne Payment Gateway, providing a comprehensive set of features tailored specifically for handling payment transactions.

Follow the below steps to integrate the PortOne react native SDK with your react native Application.

* * *

## Video Tutorial   [Skip link to Video Tutorial](https://docs.portone.cloud/docs/rn-connect\#video-tutorial)

For a detailed guide on integrating the PortOne RN SDK and using a payment method flow, refer to the following video tutorial

ReactNative Connect Flow

![](https://cdn.loom.com/avatars/15700984_bc0cbff67ef047038d09165d3e2a20a4_192.jpg)

[ReactNative Connect Flow](https://www.loom.com/share/3b3ddc7ac84d443da38d7f0ad94b95c2?source=embed_watch_on_loom_cta&t=0 "ReactNative Connect Flow")

5 min

2 views

0

[Open video in Loom](https://www.loom.com/share/3b3ddc7ac84d443da38d7f0ad94b95c2?source=embed_watch_on_loom_cta&t=0 "Open video in Loom")

1×

5 min⚡️5 min 47 sec4 min 37 sec3 min 51 sec3 min 5 sec2 min 43 sec2 min 18 sec1 min 51 sec

Your user agent does not support the HTML5 Video element.

![](https://cdn.loom.com/avatars/15700984_bc0cbff67ef047038d09165d3e2a20a4_192.jpg)

[ReactNative Connect Flow](https://www.loom.com/share/3b3ddc7ac84d443da38d7f0ad94b95c2?source=embed_watch_on_loom_cta&t=0 "ReactNative Connect Flow")

5 min

2 views

0

[Open video in Loom](https://www.loom.com/share/3b3ddc7ac84d443da38d7f0ad94b95c2?source=embed_watch_on_loom_cta&t=0 "Open video in Loom")

1×

5 min⚡️5 min 47 sec4 min 37 sec3 min 51 sec3 min 5 sec2 min 43 sec2 min 18 sec1 min 51 sec

* * *

## Sample App   [Skip link to Sample App](https://docs.portone.cloud/docs/rn-connect\#sample-app)

Check the sample app to integrate on [GitHub](https://github.com/iamport-intl/react-native-demo-app)

# React Native Integration   [Skip link to React Native Integration](https://docs.portone.cloud/docs/rn-connect\#react-native-integration)

* * *

## Prerequisites   [Skip link to Prerequisites](https://docs.portone.cloud/docs/rn-connect\#prerequisites)

1. **Create a PortOne Account**
   - Sign up on PortOne to access services and functionalities.
2. **Access API Keys**
   - Log in to the PortOne portal to obtain API Keys (client key and secret key) under Settings -> API tab.
3. **Enable Payment Channels and Methods**
   - Customize and enable payment channels and methods as per your requirements.
4. **React Native Application**
   - Ensure you have a React Native application ready for SDK integration.

## Integration   [Skip link to Integration](https://docs.portone.cloud/docs/rn-connect\#integration)

Steps to integrate your React native application with PortOne React native SDK.

📱

React Native SDk: Integration

Open Recipe

📱

Checkout: React Native Connect

Open Recipe

### 1\. Enable Deep Link in iOS   [Skip link to 1. Enable Deep Link in iOS](https://docs.portone.cloud/docs/rn-connect\#1-enable-deep-link-in-ios)

1. Add URL schemes and identifier in **info.plist**



XML





```rdmd-code lang-xml theme-light

<key>CFBundleURLTypes</key>
<array>
       <dict>
           <key>CFBundleTypeRole</key>
           <string>Editor</string>
           <key>CFBundleURLName</key>
           <string>checkout</string>
           <key>CFBundleURLSchemes</key>
           <array>
               <string>portone</string>
           </array>
       </dict>
</array>

```

2. Include URL schemes in **info.plist** to open other applications



XML





```rdmd-code lang-xml theme-light

<key>LSApplicationQueriesSchemes</key>
<array>
       <string>itms-appss</string>
       <string>zalopay</string>
       <string>line</string>
       <string>ascendmoney</string>
</array>

```

3. Add HTTP connection support in **info.plist**



XML





```rdmd-code lang-xml theme-light

<key>NSAppTransportSecurity</key>
<dict>
       <key>NSAllowsArbitraryLoads</key>
       <true/>
       <key>NSAllowsLocalNetworking</key>
       <true/>
       <key>NSTemporaryExceptionAllowsInsecureHTTPLoads</key>
       <true/>
</dict>

```


### 2\. Enable Deep Link in Android   [Skip link to 2. Enable Deep Link in Android](https://docs.portone.cloud/docs/rn-connect\#2-enable-deep-link-in-android)

1. Add an intent filter in **AndroidManifest.xml**



XML





```rdmd-code lang-xml theme-light

<intent-filter>
       <action android:name="android.intent.action.VIEW" />
       <category android:name="android.intent.category.DEFAULT" />
       <category android:name="android.intent.category.BROWSABLE" />
       <data android:host="checkout" android:scheme="portone" />
</intent-filter>

```


### 3\. Obtain JWT Token   [Skip link to 3. Obtain JWT Token](https://docs.portone.cloud/docs/rn-connect\#3-obtain-jwt-token)

1. Generate a JWT token using `portoneKey` on the server.

2. Retrieve and store the JWT token securely in your RN app.

For more details, refer to [Authentication \| PortOne](https://www.docs.portone.cloud/docs/integration_guide/jwt_authentication).


### 4\. Generate Signature Hash   [Skip link to 4. Generate Signature Hash](https://docs.portone.cloud/docs/rn-connect\#4-generate-signature-hash)

Generate a Signature Hash using HmacSHA256 for inclusion in the payload. For details, refer to [Payment Request \| PortOne](https://www.docs.portone.cloud/docs/integration_guide/signatures/payment_request).

### 5\. Install the SDK   [Skip link to 5. Install the SDK](https://docs.portone.cloud/docs/rn-connect\#5-install-the-sdk)

1. Download the compressed framework folder from this [link](https://drive.google.com/drive/folders/16TIdv-0IZ86LPkHJ1xwNLy1lpquUqszB?usp=drive_link) (Access will be provided by the portone team)

2. Add the folder directly into your workplace and add the package inside the package.json

3. javascript





```rdmd-code lang-Text theme-light

"dependencies": {
       "portone-sdk": "file:./PaymentSDK",
}

```

4. Install the SDK and peer dependencies



Bash





```rdmd-code lang-bash theme-light

npm install
npm install @react-native-async-storage/async-storage
npm install react-native-localization
npm install react-native-webview
npm install react-native-linear-gradient
npm install react-native-rsa-native

```


### 6\. Initialize PortOne RN SDK   [Skip link to 6. Initialize PortOne RN SDK](https://docs.portone.cloud/docs/rn-connect\#6-initialize-portone-rn-sdk)

1. Import the SDK library



JSX





```rdmd-code lang-jsx theme-light

import { Checkout } from 'portone-sdk';

```

2. Initialize the checkout instance



JSX





```rdmd-code lang-jsx theme-light

<Checkout
       callbackFunction={this.afterCheckout}
       redirectUrl={"portone://"}
       environment={"sandbox"} // Optional
/>

```


3. Handle the web view response in `afterCheckout`


JSX





```rdmd-code lang-Text theme-light

afterCheckout = transactionDetails => {
       console.log('Response from webview', transactionDetails);
};

```


## Payment Methods   [Skip link to Payment Methods](https://docs.portone.cloud/docs/rn-connect\#payment-methods)

### New Credit Card Payment   [Skip link to New Credit Card Payment](https://docs.portone.cloud/docs/rn-connect\#new-credit-card-payment)

1. Collect card details and use the `startPaymentWithNewCard` method



JSX





```rdmd-code lang-jsx theme-light

let response = await Checkout.startPaymentWithNewCard(
       cardDetails,
       payload,
       JWTToken,
       clientKey,
       customerUUID,
       subMerchantKey
);

```

2. Handle the web view response in `afterCheckout`



JSX





```rdmd-code lang-jsx theme-light

afterCheckout = transactionDetails => {
       console.log('Response from webview', transactionDetails);
};

```


### Saved Card Payment   [Skip link to Saved Card Payment](https://docs.portone.cloud/docs/rn-connect\#saved-card-payment)

1. Use the `startPaymentWithSavedCard` method



JSX





```rdmd-code lang-jsx theme-light

let response = await Checkout.startPaymentWithSavedCard(
       cardDetails,
       payload,
       JWTToken,
       clientKey
);

```


### Wallet Payment   [Skip link to Wallet Payment](https://docs.portone.cloud/docs/rn-connect\#wallet-payment)

1. Use the `startPaymentWithWallets` method



JSX





```rdmd-code lang-jsx theme-light

let data = await Checkout.startPaymentWithWallets(payload, subMerchantKey);

```


### Non-Tokenized Payment   [Skip link to Non-Tokenized Payment](https://docs.portone.cloud/docs/rn-connect\#non-tokenized-payment)

1. Use the `startPaymentWithoutTokenization` method



JSX





```rdmd-code lang-jsx theme-light

let data = await Checkout.startPaymentWithoutTokenization(newPayload, subMerchantKey);

```


### Fetch Available Payment Methods   [Skip link to Fetch Available Payment Methods](https://docs.portone.cloud/docs/rn-connect\#fetch-available-payment-methods)

1. Use the `getAvailablePaymentMethods` method



JSX





```rdmd-code lang-jsx theme-light

let data = await Checkout.getAvailablePaymentMethods(portOneKey, currency, subMerchantKey);

```


### Merchant-Centric Card Vault   [Skip link to Merchant-Centric Card Vault](https://docs.portone.cloud/docs/rn-connect\#merchant-centric-card-vault)

The Merchant Centric Card Vault operates by enrolling merchants initially, followed by adding customers specific to each merchant. Cards are then saved based on individual customers, ensuring a personalized and secure card storage system. Several methods are available to facilitate various operations within this card vault setup.

1. _addCardForCustomer_
2. _deleteCardForCustomerId_
3. _fetchCustomerCards_
4. _addCustomer_
5. _getCustomerData_

1. **Add Card for Customer**



JSX





```rdmd-code lang-jsx theme-light

let data = await helpers.addCardForCustomerId(customerId, clientKey, JWTToken, cardData, subMerchantKey);

```

2. **Delete Card for Customer**



JSX





```rdmd-code lang-jsx theme-light

let data = await helpers.deleteCardForCustomerId(customerId, clientKey, JWTToken, cardData, subMerchantKey);

```

3. **Fetch Customer Cards**



JSX





```rdmd-code lang-jsx theme-light

let data = await helpers.fetchCustomerCards(customerId, clientKey, JWTToken, subMerchantKey);

```

4. **Add Customer**



JSX





```rdmd-code lang-jsx theme-light

let data = await helpers.addCustomer(customerData, clientKey, JWTToken, subMerchantKey);

```

5. **Get Customer Data**



JSX





```rdmd-code lang-jsx theme-light

let data = await helpers.getCustomerData(customerID, clientKey, JWTToken);

```


### Failover Routing   [Skip link to Failover Routing](https://docs.portone.cloud/docs/rn-connect\#failover-routing)

Failover routing is a functionality designed to ensure seamless credit card payment processing. This feature allows the configuration of primary and secondary payment channels through the admin portal. If a payment attempt using the primary channel fails for any reason, the system automatically redirects the user to the secondary payment channel.

To support failover routing add the following two parameters to payload:

- isRoutingEnabled= true
- Routing Param type should be failover.

1. Enable failover routing in payload



JSX





```rdmd-code lang-jsx theme-light

let payload = getDefaultPayload();
payload.isRoutingEnabled = true;
payload.routingParams = {
       type: "failover",
       routeRef: "1233"
};

```

2. Fetch list of routes



JSX





```rdmd-code lang-jsx theme-light

let data = await helpers.fetchRoutes(clientKey, JWTToken);

```


### PreAuth and Capture Payment   [Skip link to PreAuth and Capture Payment](https://docs.portone.cloud/docs/rn-connect\#preauth-and-capture-payment)

During Pre-authorization, the transaction is initially approved, and at a later time or within specified days, the payment can be processed using the Capture API.

To designate a transaction for pre-authorization, a specific parameter must be configured in the payload:

**transactionType= PREAUTH \|\| PURCHASE**

1. **Pre-Authorization**



JSX





```rdmd-code lang-jsx theme-light

let payload = getDefaultPayload();
payload.transactionType = "PREAUTH";

```

2. **Capture Payment**



JSX





```rdmd-code lang-jsx theme-light

let data = await helpers.captureTransactionAPI(transactionOrderRef, clientKey, JWTToken);

```


## Payload Parameters   [Skip link to Payload Parameters](https://docs.portone.cloud/docs/rn-connect\#payload-parameters)

| Parameter | Data Type | Mandatory |
| --- | --- | --- |
| portOneKey | String | Yes |
| merchantDetails | Object | No |
| merchantOrderId | String | Yes |
| signatureHash | String | Yes |
| amount | Double | Yes |
| currency | String | Yes |
| countryCode | String | Yes |
| billingDetails | Object | No |
| shippingDetails | Object | No |
| orderDetails | Array | No |
| successUrl | String | Yes |
| failureUrl | String | Yes |
| expiryHours | Int | Yes |
| source | String | Yes |
| description | String | No |
| showShippingDetails | Boolean | No |
| showBackButton | Boolean | No |
| defaultGuestCheckout | Boolean | No |
| isCheckoutEmbed | Boolean | No |
| redirectUrl | String | Yes |
| environment | String | Yes |

**MerchantDetails**

| Parameter | Data Type | Optional |
| --- | --- | --- |
| name | String | Yes |
| logo | String | Yes |
| returnUrl | String | Yes |
| merchantId | String | No |
| mcc | String | No |

**OrderDetails**

| Parameter | Data Type | Optional |
| --- | --- | --- |
| title | String | Yes |
| description | String | Yes |
| quantity | Int | Yes |
| price | Double | Yes |

**BillingDetails**

| Parameter | Data Type | Optional |
| --- | --- | --- |
| address | String | Yes |
| city | String | Yes |
| country | String | Yes |
| postalCode | String | Yes |
| phone | String | Yes |

**ShippingDetails**

| Parameter | Data Type | Optional |
| --- | --- | --- |
| address | String | Yes |
| city | String | Yes |
| country | String | Yes |
| postalCode | String | Yes |
| phone | String | Yes |

## Probable Errors   [Skip link to Probable Errors](https://docs.portone.cloud/docs/rn-connect\#probable-errors)

### `INVALID_UNAUTHORIZED_JWT_TOKEN_ERROR`   [Skip link to [object Object]](https://docs.portone.cloud/docs/rn-connect\#invalid_unauthorized_jwt_token_error)

1. Check whether PortOne Key and the Secret Key are of the same account
2. Check whether the Secret Key is not modified
3. Check whether `Bearer` keyword is added before the generated token with a white space. `Bearer $jwtToken`
4. Verify if the expiration time should be greater than the current time

### `INVALID_UNAUTHORISED_TRANSACTION_SIGNATURE_ERROR`   [Skip link to [object Object]](https://docs.portone.cloud/docs/rn-connect\#invalid_unauthorised_transaction_signature_error)

1. Check whether all params match with the payload/request
2. Check whether the portone key match with the payload and the account

### `INVALID_UNAUTHORISED_TRANSACTION_IAMPORTKEY_ERROR`   [Skip link to [object Object]](https://docs.portone.cloud/docs/rn-connect\#invalid_unauthorised_transaction_iamportkey_error)

1. Check whether the portone key match with the payload and the account

### `INVALID_PAYMENT_CHANNEL`   [Skip link to [object Object]](https://docs.portone.cloud/docs/rn-connect\#invalid_payment_channel)

1. Make sure the payment channels and payment methods which are added in the payload are enable from the portone portal

### `INVALID_ENVIRONMENT`   [Skip link to [object Object]](https://docs.portone.cloud/docs/rn-connect\#invalid_environment)

1. Make sure you have added environment either `sandbox` or `live`

### `Summation of order value, tax, duties, shipping and discount is equal to amount`   [Skip link to [object Object]](https://docs.portone.cloud/docs/rn-connect\#summation-of-order-value-tax-duties-shipping-and-discount-is-equal-to-amount)

1. If items are provided then please verify the values provided should match the total amount: `sum(items price * items quantity) + shipping charge - discount = amount`
2. Mandatory params in payload:

```rdmd-code lang- theme-light
price
promo_discount       (0 is also acceptable)
shipping_charges     (0 is also acceptable)

```

## Support   [Skip link to Support](https://docs.portone.cloud/docs/rn-connect\#support)

For additional support or questions, please contact the PortOne support team.

Updated7 months ago

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