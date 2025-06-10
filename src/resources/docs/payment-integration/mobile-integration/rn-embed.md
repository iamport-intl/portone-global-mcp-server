---
url: "https://docs.portone.cloud/docs/rn-embed"
title: "RN Embed"
---

The PortOne react native SDK offers merchants a seamless way to integrate the PortOne Payment Gateway into their react native applications, enabling them to accept payments securely and efficiently. This SDK serves as a bridge between a merchant's app and the PortOne Payment Gateway, providing a comprehensive set of features tailored specifically for handling payment transactions.

Follow the below steps to integrate the PortOne react native SDK with your react native Application.

* * *

## Video Tutorial   [Skip link to Video Tutorial](https://docs.portone.cloud/docs/rn-embed\#video-tutorial)

The following video tutorials provide a detailed guide on integrating the PortOne RN SDK and using one of the payment method flow with your application to enable seamless payment processing:

Integration + Embed Flow

React Native Integration + Embed(New Docs)

![](https://cdn.loom.com/avatars/15700984_bc0cbff67ef047038d09165d3e2a20a4_192.jpg)

[React Native Integration + Embed(New Docs)](https://www.loom.com/share/6099d1d3b3434181a56412cd61ddbde6?source=embed_watch_on_loom_cta "React Native Integration + Embed(New Docs)")

5 min

2 views

0

[Open video in Loom](https://www.loom.com/share/6099d1d3b3434181a56412cd61ddbde6?source=embed_watch_on_loom_cta "Open video in Loom")

1×

5 min⚡️5 min 49 sec4 min 39 sec3 min 53 sec3 min 6 sec2 min 44 sec2 min 19 sec1 min 51 sec

Your user agent does not support the HTML5 Video element.

![](https://cdn.loom.com/avatars/15700984_bc0cbff67ef047038d09165d3e2a20a4_192.jpg)

[React Native Integration + Embed(New Docs)](https://www.loom.com/share/6099d1d3b3434181a56412cd61ddbde6?source=embed_watch_on_loom_cta "React Native Integration + Embed(New Docs)")

5 min

2 views

0

[Open video in Loom](https://www.loom.com/share/6099d1d3b3434181a56412cd61ddbde6?source=embed_watch_on_loom_cta "Open video in Loom")

1×

5 min⚡️5 min 49 sec4 min 39 sec3 min 53 sec3 min 6 sec2 min 44 sec2 min 19 sec1 min 51 sec

* * *

## Sample App   [Skip link to Sample App](https://docs.portone.cloud/docs/rn-embed\#sample-app)

Check the sample app to integrate on [GitHub](https://github.com/iamport-intl/react-native-demo-app)

* * *

## Prerequisites   [Skip link to Prerequisites](https://docs.portone.cloud/docs/rn-embed\#prerequisites)

1. **Create a PortOne Account**
   - Sign up on PortOne to access services and functionalities.
2. **Access API Keys**
   - Log in to the PortOne portal to obtain API Keys (client key and secret key) under Settings -> API tab.
3. **Enable Payment Channels and Methods**
   - Customize and enable payment channels and methods as per your requirements.
4. **React Native Application**
   - Ensure you have a React Native application ready for SDK integration.

* * *

## Integration   [Skip link to Integration](https://docs.portone.cloud/docs/rn-embed\#integration)

Steps to integrate your React native application with PortOne React native SDK.

📱

React Native SDk: Integration

Open Recipe

📱

Checkout: React Native Embed

Open Recipe

### 1\. Configure iOS for Deep Linking   [Skip link to 1. Configure iOS for Deep Linking](https://docs.portone.cloud/docs/rn-embed\#1-configure-ios-for-deep-linking)

1. To open your application, add the url schemes to the app, Go to **info.plist** and add it in source code



JSON





```rdmd-code lang-json theme-light


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

2. To open the other applications, should include the url schemes in info.plist



JSON





```rdmd-code lang-json theme-light

<key>LSApplicationQueriesSchemes</key>
   	<array>
   		<string>itms-appss</string>
   		<string>zalopay</string>
   		<string>line</string>
   		<string>ascendmoney</string>
   	</array>

```

3. To support HTTP connections, add this source code in app info.plist



JSON





```rdmd-code lang-json theme-light

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


* * *

### 2\. Configure Android for Deep Linking   [Skip link to 2. Configure Android for Deep Linking](https://docs.portone.cloud/docs/rn-embed\#2-configure-android-for-deep-linking)

1. **Update `AndroidManifest.xml`**


````rdmd-code lang- theme-light
- Add intent filter

    ```xml
    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:host="checkout" android:scheme="portone" />
    </intent-filter>
    ```

````

if `redirectionUrl= "**portone://checkout"**` then `host = "**checkout"** and schema = "**portone**" `

* * *

### 3\. **Get JWT token from the server**   [Skip link to 3. ](https://docs.portone.cloud/docs/rn-embed\#3-get-jwt-token-from-the-server)

To set up the process of obtaining a JWT token from the server, you need to construct a JWT token that accepts the `portoneKey` as input. Here's an outline of the steps involved in setting up this process:

1. **JWT Token Construction:**

Implement the server-side logic to generate a JWT token using the `portoneKey` as a key component of the token payload.

2. **Token Retrieval in iOS App:**
   - Implement logic in your iOS application to make a server request to retrieve the JWT token using the `portoneKey`.
   - Receive and store the returned token securely within the app for subsequent API authentication.

Further information on JWT token generation is described in the link below.

[Authentication \| PortOne](https://docs.portone.cloud/docs/jwt-authentication)

* * *

### 4. **Generate Signture Hash**   [Skip link to 4.](https://docs.portone.cloud/docs/rn-embed\#4-generate-signture-hash)

- Generate a Signature Hash using HmacSHA256 which needs to be included in the payload.
- To generate a signature hash on the server side using a secret key follow the below steps.

[Payment Request \| PortOne](https://docs.portone.cloud/docs/payment-request)

* * *

### 5\. Install the SDK   [Skip link to 5. Install the SDK](https://docs.portone.cloud/docs/rn-embed\#5-install-the-sdk)

1. Download the compresses framework folder from this [link](https://drive.google.com/drive/folders/16TIdv-0IZ86LPkHJ1xwNLy1lpquUqszB?usp=drive_link) (Access will be provided by the portone team)

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


* * *

### 6\. Initialise PortOne RN SDK and authorise it.   [Skip link to 6. Initialise PortOne RN SDK and authorise it.](https://docs.portone.cloud/docs/rn-embed\#6-initialise-portone-rn-sdk-and-authorise-it)

1. Import library of portone SDK

JavaScript

```rdmd-code lang-javascript theme-light

import {Checkout} from 'portone-sdk';

```

1. Initialize the checkout instance as below:

JavaScript

```rdmd-code lang-javascript theme-light

<Checkout
          callbackFunction={this.callbackFunction}
          redirectUrl={"portone://"}
          environment={"sanbox"} //Optional
					appIdentifier={"AppUniqueID"} // Optional
/>
//appIdentifier: (unique App identifier) Passing the signature hash can be skipped if you whitelist your domain/IP/App.

// Do the needful in the callback function
callbackFunction = transactionDetails => {
    console.log('Response from webview', transactionDetails);
};

```

* * *

# **Checkout using web (Embed)**   [Skip link to [object Object]](https://docs.portone.cloud/docs/rn-embed\#checkout-using-web-embed)

PortOne's Checkout offers a streamlined integration experience, simplifying the process for merchants. This variant involves calling a single method with the essential payload, which results in the PortOne SDK opening a webpage seamlessly. By handling the user interface within the SDK, merchants can focus on the payment flow without concerns about UI intricacies.

1. To get the payment link to use the SDK checkout UI, call the **openCheckoutUI** method from SDK as below:



JavaScript





```rdmd-code lang-javascript theme-light

Checkout.openWebCheckoutUI(payload, JWTToken);

```

2. Web view response will be given back to the callbackFunction



JavaScript





```rdmd-code lang-javascript theme-light

callbackFunction = transactionDetails => {
       console.log('Response from webview', transactionDetails);
       // Do the needful
     };

```


Sample JWT Token

JavaScript

```rdmd-code lang-javascript theme-light

let jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJDSEFJUEFZIiwic3ViIjoibHpyWUZQZnlNTFJPYWxsWiIsImlhdCI6MTYzMjM5MDkyMCwiZXhwIjoyNzMyMzkwOTIwfQ.IRgiM-zjAdJEVDuPSNfxmDszZQi_csE1q7xjVRvPvoc';

```

Sample Payload Response

JavaScript

```rdmd-code lang-javascript theme-light

let payload = {
      portOneKey: 'SglffyyZgojEdXWL',
      merchantDetails: {
        name: 'PortOne',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
        back_url: 'https://demo.chaipay.io/checkout.html',
        promo_code: 'Downy350',
        promo_discount: 0,
        shipping_charges: 0.0,
      },
      merchantOrderId: 'MERCHANT' + new Date().getTime(),
      signatureHash: 'flDFcPNx4pASRWonw52s0Sec3ee1PJQrdTklDrZGjq0=',
      amount: totalAmount,
      currency: 'VND',
      countryCode: 'VN',
      billingAddress: {
        billing_name: 'Test',
        billing_email: 'markweins@gmail.com',
        billing_phone: '9998878788',
        billing_address: {
          city: 'VND',
          country_code: 'VN',
          locale: 'en',
          line_1: 'address',
          line_2: 'address_2',
          postal_code: '400202',
          state: 'Mah',
        },
      },
      shippingAddress: {
        shipping_name: 'xyz',
        shipping_email: 'xyz@gmail.com',
        shipping_phone: '1234567890',
        shipping_address: {
          city: 'abc',
          country_code: 'VN',
          locale: 'en',
          line_1: 'address_1',
          line_2: 'address_2',
          postal_code: '400202',
          state: 'Mah',
        },
      },
      orderDetails: orderDetails,
      successUrl: 'chaiport://checkout',
      failureUrl: 'chaiport://checkout',
      mobileRedirectUrl: 'chaiport://checkout',
      expiryHours: 2,
      source: 'api',
      description: 'test',
      showShippingDetails: true,
      showBackButton: false,
      defaultGuestCheckout: false,
      isCheckoutEmbed: false,
    };

```

Sample response :

- Success Case

JSON

```rdmd-code lang-json theme-light

{
"is_success": "true",
"status_code": "2000",
"status_reason": "SUCCESS",
"merchant_order_ref": "MERCHANT1234567890",
"channel_order_ref": "PAY-FylBOXjbTMmH52CCNI4OFw"
}

```

- Failure case

JSON

```rdmd-code lang-json theme-light

{
"is_success": "false",
"message": "Received error from Baokim Server: customer_phone=>The customer phone format is invalid., ",
"status_code": "5000",
"status_reason": "PAYMENT_SYSTEM_ERROR"
}

```

### `Payload`   [Skip link to [object Object]](https://docs.portone.cloud/docs/rn-embed\#payload)

All of the web checkout request's parameters are listed here, along with the appropriate data type.

| Parameters | Data Type |  |
| --- | --- | --- |
| portOneKey | String | mandatory |
| merchantDetails | object |  |
| merchantOrderId | String | mandatory |
| signatureHash | String | mandatory |
| amount | Double | mandatory |
| currency | String | mandatory |
| countryCode | String | mandatory |
| billingDetails | object | Optional |
| shippingDetails | object | Optional |
| orderDetails | array | Optional |
| successUrl | String | mandatory |
| failureUrl | String | mandatory |
| expiryHours | Int | mandatory |
| source | String | mandatory |
| description | String | Optional |
| showShippingDetails | Boolean | Optional |
| showBackButton | Boolean | Optional |
| defaultGuestCheckout | Boolean | Optional |
| isCheckoutEmbed | Boolean | Optional |
| redirectUrl | String | mandatory |
| environment | String | mandatory |

`**MerchantDetails**`

| Parameters | Data Type |  |
| --- | --- | --- |
| name | String | Optional |
| logo | String | Optional |
| back\_url | String | Optional |
| promo\_code | String | Optional |
| promoD\_discount | Int | Optional |
| shipping\_charges | Double | Optional |

`**BillingDetails**`

| Parameters | Data Type |  |
| --- | --- | --- |
| shipping\_name | String | Optional |
| shipping\_email | String | Optional |
| shipping\_phone | String | Optional |
| shipping\_address | Object | Optional |

`**ShippingDetails**`

| Parameters | Data Type |  |
| --- | --- | --- |
| billing\_name | String | Optional |
| billing\_email | String | Optional |
| billing\_phone | String | Optional |
| billing\_address | Object | Optional |

`**Address**`

| Parameters | Data Type |  |
| --- | --- | --- |
| city | String | Optional |
| country\_code | String | Optional |
| locale | String | Optional |
| line\_1 | String | Optional |
| line\_2 | String | Optional |
| postal\_code | String | Optional |
| state | String | Optional |

`**OrderDetail**`

| Parameters | Data Type |  |
| --- | --- | --- |
| id | String | Optional |
| price | Double | Optional |
| name | String | Optional |
| quantity | Int | Optional |
| image | String (in the form of web url) | Optional |

* * *

## Probable Errors   [Skip link to Probable Errors](https://docs.portone.cloud/docs/rn-embed\#probable-errors)

### `INVALID_UNAUTHORIZED_JWT_TOKEN_ERROR`   [Skip link to [object Object]](https://docs.portone.cloud/docs/rn-embed\#invalid_unauthorized_jwt_token_error)

1. Check whether PortOne Key and the Secret Key are of the same account
2. Check whether the Secret Key is not modified
3. Check whether `Bearer` keyword is added before the generated token with a white space. `Bearer $jwtToken`
4. Verify if the expiration time should be greater than the current time

### `INVALID_UNAUTHORISED_TRANSACTION_SIGNATURE_ERROR`   [Skip link to [object Object]](https://docs.portone.cloud/docs/rn-embed\#invalid_unauthorised_transaction_signature_error)

1. Check whether all params match with the payload/request
2. Check whether the portone key match with the payload and the account

### `INVALID_UNAUTHORISED_TRANSACTION_IAMPORTKEY_ERROR`   [Skip link to [object Object]](https://docs.portone.cloud/docs/rn-embed\#invalid_unauthorised_transaction_iamportkey_error)

1. Check whether the portone key match with the payload and the account

### `INVALID_PAYMENT_CHANNEL`   [Skip link to [object Object]](https://docs.portone.cloud/docs/rn-embed\#invalid_payment_channel)

1. Make sure the payment channels and payment methods which are added in the payload are enable from the portone portal

### `INVALID_ENVIRONMENT`   [Skip link to [object Object]](https://docs.portone.cloud/docs/rn-embed\#invalid_environment)

1. Make sure you have added environment either `sandbox` or `live`

### `Summation of order value, tax, duties, shipping and discount is equal to amount`   [Skip link to [object Object]](https://docs.portone.cloud/docs/rn-embed\#summation-of-order-value-tax-duties-shipping-and-discount-is-equal-to-amount)

1. If items are provided then please verify the values provided should match the total amount: `sum(items price * items quantity) + shipping charge - discount = amount`
2. Mandatory params in payload:

```rdmd-code lang- theme-light
price
promo_discount       (0 is also acceptable)
shipping_charges     (0 is also acceptable)

```

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