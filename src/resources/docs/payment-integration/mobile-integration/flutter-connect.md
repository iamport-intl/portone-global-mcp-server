---
url: "https://docs.portone.cloud/docs/flutter-connect"
title: "Flutter Connect"
---

The PortOne Flutter SDK offers merchants a seamless way to integrate the PortOne Payment Gateway into their Flutter applications, enabling them to accept payments securely and efficiently. This SDK serves as a bridge between a merchant's app and the PortOne Payment Gateway, providing a comprehensive set of tools and features tailored specifically for handling payment transactions.

The PortOne Flutter SDK empowers merchants to unlock the full potential of their Flutter applications by seamlessly integrating a reliable and secure payment gateway, enhancing user experience, and driving business growth through efficient payment processing capabilities

integration\_flutter

![](https://cdn.loom.com/avatars/default-avatar.svg)

[integration\_flutter](https://www.loom.com/share/52ab7b8232ce4c5198556b9a2378bf61?source=embed_watch_on_loom_cta "integration_flutter")

4 min

13 views

0

[Open video in Loom](https://www.loom.com/share/52ab7b8232ce4c5198556b9a2378bf61?source=embed_watch_on_loom_cta "Open video in Loom")

1.2×

4 min⚡️5 min 32 sec4 min 26 sec3 min 41 sec2 min 57 sec2 min 36 sec2 min 13 sec1 min 46 sec

Your user agent does not support the HTML5 Video element.

![](https://cdn.loom.com/avatars/default-avatar.svg)

[integration\_flutter](https://www.loom.com/share/52ab7b8232ce4c5198556b9a2378bf61?source=embed_watch_on_loom_cta "integration_flutter")

4 min

13 views

0

[Open video in Loom](https://www.loom.com/share/52ab7b8232ce4c5198556b9a2378bf61?source=embed_watch_on_loom_cta "Open video in Loom")

1.2×

4 min⚡️5 min 32 sec4 min 26 sec3 min 41 sec2 min 57 sec2 min 36 sec2 min 13 sec1 min 46 sec

* * *

## Sample App   [Skip link to Sample App](https://docs.portone.cloud/docs/flutter-connect\#sample-app)

Check the sample app to integrate on [GitHub](https://github.com/iamport-intl/flutter_merchants_demo_app)

* * *

## **Prerequisites**   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#prerequisites)

- **[Create an account](https://docs.portone.cloud/docs/create-an-account) on PortOne:**


Before proceeding with the integration, ensure you have created an account on PortOne to access their services and functionalities.
- **[Enable Payment Channels and Methods](https://docs.portone.cloud/docs/3-payment-channels-configuration)**:


Customize and enable the specific payment channels and methods that align with your business requirements and preferences.
- **[Access API Keys](https://docs.portone.cloud/docs/2-collect-api-keys)**


Login to the portone portal where you can access the API Keys (client key and secret key) for integrations under Settings -> API tab.
- **Flutter application for the integration**:


You will need an Flutter application in which you intend to integrate the PortOne Flutter SDK for payment processing capabilities.

* * *

## Integration   [Skip link to Integration](https://docs.portone.cloud/docs/flutter-connect\#integration)

Steps to integrate your Flutter application with PortOne Flutter SDK.

1. Configure the Flutter SDK with the Flutter App
2. Set the Intent Filters in the manifests
3. Add a listener to listen the payment status
4. Setup to Obtain JWT Token from the Server:
5. Generate a Signature Hash for Payload

📱

Setup & Integration: Flutter SDK

Open Recipe

### 1\. Configure the Flutter SDK with the Flutter App   [Skip link to 1.  Configure the Flutter SDK with the Flutter App](https://docs.portone.cloud/docs/flutter-connect\#1--configure-the-flutter-sdk-with-the-flutter-app)

1. Retrieve the Flutter package distributed by the PortOne team and ensure it is placed at the same directory level as your Flutter application within the folder structure.

2. To integrate the necessary dependencies in your Flutter project, you can update the `pubspec.yaml` file with the following configuration:



Dart





```rdmd-code lang-dart theme-light

dependencies:
     flutter:
       sdk: flutter
     portone_flutter_package:
       path: /Users/flutter_app_sdk/flutter_sdk
     app_links: ^6.1.1

```










| Parameters | Description |
| --- | --- |
| portone\_flutter\_package | This is the package where the portone flutter sdk lies and it also has one param name path which requires the path of the sdk.<br>In above code the given path is dummy please put the path where your portone sdk lies. |
| app\_links: ^6.1.1 | The app\_links package plays a crucial role in your application by enabling the reception of intents from deep links or other applications. Its functionality is essential for capturing payment status updates seamlessly within your Flutter app. |


* * *

### 2\. Enable deep links   [Skip link to 2. Enable deep links](https://docs.portone.cloud/docs/flutter-connect\#2-enable-deep-links)

1. **For Android:**


1. Change the project structure to Android from Project or open the android module as project in IDE

2. To add an Intent Filter to the activity in your AndroidManifest.xml file so that users are navigated to a specific activity (default being Checkout Activity) after payment completion



      XML





      ```rdmd-code lang-xml theme-light

      <activity android:name=".CheckoutActivity">
          <intent-filter>
              <action android:name="android.intent.action.VIEW" />
              <category android:name="android.intent.category.DEFAULT" />
              <category android:name="android.intent.category.BROWSABLE" />
              <data
                  android:scheme="portone"
                  android:host="checkout" />
          </intent-filter>
      </activity>


      ```





      In this setup:
      - The `<intent-filter>` block defines the conditions under which the activity should be launched.
      - The `<data>` tag specifies the scheme and host required in the incoming Intent for it to be directed to this activity after payment completion.
      - The `<activity>` tag specifies the activity to which the Intent Filter applies.

Update the activity name (e.g., `.CheckoutActivity`) as per your actual activity name and place this Intent Filter configuration within the corresponding `<activity>` tag in the AndroidManifest.xml file to handle post-payment navigation effectively.

By configuring the scheme as " `portone`" and host as " `checkout`" within the `<data>` tag of the Intent Filter, your Android application will be able to intercept the redirection URL with the format " **portone://checkout**" and navigate the user to the specified activity (e.g., CheckoutActivity) after payment completion. Adjust the activity name in the configuration according to your actual activity name for proper redirection handling.

2. **For iOS:**
1. To open your application, add the url schemes to the app, Go to **ProjectSettings -> info**

2. Add url schemes and identifier inside the **URL types.**

      You can see the scheme and identifier details in **info.plist** as below:


      ```rdmd-code lang- theme-light
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

3. To open the other applications, should include the url schemes in info.plist



      Swift





      ```rdmd-code lang-swift theme-light

      <key>LSApplicationQueriesSchemes</key>
      	<array>
      		<string>itms-appss</string>
      		<string>zalopay</string>
      		<string>line</string>
      		<string>ascendmoney</string>
      	</array>


      ```





      LSApplicationQueriesSchemes - Specifies the URL schemes you want the app to be able to use with the canOpenURL: method of the UIApplication class.

* * *

### 3\. Add a listener to listen the payment status by the callback to `initState()`   [Skip link to 3.  Add a listener to listen the payment status by the callback to ](https://docs.portone.cloud/docs/flutter-connect\#3--add-a-listener-to-listen-the-payment-status-by-the-callback-to-initstate)

1. **Receiving Payment Status:**

a. Set up app-to-app communication to receive a deep link via intent post-checkout.

b. In the root stateful widget, implement `initState()` and `dispose()` methods.

c. Declare variables:



Dart





```rdmd-code lang-dart theme-light

late AppLinks _appLinks;
StreamSubscription<Uri>? _linkSubscription;


```

2. **Initialization in `initState()`:**

a. Initialize `initState()` method to handle payment status reception:



Dart





```rdmd-code lang-dart theme-light

@override
     void initState() {
       super.initState();
       initDeepLinks();
     }

     Future<void> initDeepLinks() async {
       _appLinks = AppLinks();
       _linkSubscription = _appLinks.uriLinkStream.listen((uri) {
         print('onAppLink: $uri');
       });
     }

```

3. **Dispose Method Handling:**

a. To cancel the subscription and avoid memory leaks, implement `dispose()`:



Dart





```rdmd-code lang-dart theme-light

     @override
     void dispose() {
        _linkSubscription?.cancel();
       super.dispose();
     }

```

4. **Adding Payment Status Listener:**

a. Implement the following method in the checkout activity to capture checkout status post-completion:



Dart





```rdmd-code lang-dart theme-light

portone.setPaymentStatusListener(
           callback: (Map<String, dynamic> paymentStatus) {
         print('PortOne_PaymentStatus-> $paymentStatus');
       });


```





By integrating this method, you can effectively capture and process the payment status updates within the checkout activity using the PortOne SDK in your Flutter application.


* * *

### 4\. Have a setup to get JWT token from the server   [Skip link to 4. Have a setup to get JWT token from the server](https://docs.portone.cloud/docs/flutter-connect\#4-have-a-setup-to-get-jwt-token-from-the-server)

The PortOne SDK requires a JWT token for authentication. You need to implement a server-side process to generate this token and retrieve it in your app.

**Steps:**

1. Implement server logic to generate a JWT token.
2. In your app, fetch the token to process the checkout.

The process for generating a JWT token can be found in detail [here](https://docs-v2.portone.cloud/docs/jwt-authentication)

### 5\. Generate Signture Hash   [Skip link to 5. Generate Signture Hash](https://docs.portone.cloud/docs/flutter-connect\#5-generate-signture-hash)

To generate a signature hash, create it on the server side using a secret key that will be included in the payload. This ensures secure processing of transactions.

> **Note**: Generating a signature hash is optional if you have whitelisted your app while initializing the checkout. Detailed instructions on this are provided in the checkout setup section.

**Steps:**

1. Implement server logic to generate a signature hash.
2. In your app, fetch the signature hash to process the checkout.

The process for generating a Signature Hash can be found in detail [here](https://docs-v2.portone.cloud/docs/payment-request)

* * *

# Checkout: Flutter Connect   [Skip link to Checkout: Flutter Connect](https://docs.portone.cloud/docs/flutter-connect\#checkout-flutter-connect)

Flutter SDK Variant V2 empowers merchants with advanced business logic functionalities, focusing solely on core processing capabilities without the inclusion of pre-built user interface components. This design choice offers flexibility to merchants, allowing them the freedom to craft and customize their own unique checkout interface tailored to their brand aesthetics and user experience preferences.

The Flutter SDK V2 provides a detailed breakdown of key functionalities essential for merchants to enhance their payment processing capabilities efficiently. Each point represents a specific feature or action that can be easily referenced for seamless integration and utilization within merchant applications.

checkout\_flutter\_connect

![](https://cdn.loom.com/avatars/default-avatar.svg)

[checkout\_flutter\_connect](https://www.loom.com/share/5c322c02a36f477fbcfd6b187fa78636?source=embed_watch_on_loom_cta "checkout_flutter_connect")

3 min

1 view

0

[Open video in Loom](https://www.loom.com/share/5c322c02a36f477fbcfd6b187fa78636?source=embed_watch_on_loom_cta "Open video in Loom")

1.2×

3 min⚡️4 min 21 sec3 min 28 sec2 min 54 sec2 min 19 sec2 min 2 sec1 min 44 sec1 min 23 sec

Your user agent does not support the HTML5 Video element.

![](https://cdn.loom.com/avatars/default-avatar.svg)

[checkout\_flutter\_connect](https://www.loom.com/share/5c322c02a36f477fbcfd6b187fa78636?source=embed_watch_on_loom_cta "checkout_flutter_connect")

3 min

1 view

0

[Open video in Loom](https://www.loom.com/share/5c322c02a36f477fbcfd6b187fa78636?source=embed_watch_on_loom_cta "Open video in Loom")

1.2×

3 min⚡️4 min 21 sec3 min 28 sec2 min 54 sec2 min 19 sec2 min 2 sec1 min 44 sec1 min 23 sec

## Overview   [Skip link to Overview](https://docs.portone.cloud/docs/flutter-connect\#overview)

1. Initialize the SDK
2. Fetch Enabled Payment Methods and Channels
3. Checkout
4. Checkout Using a New Card
5. Checkout Using Saved Credit/Debit Cards
1. Retrieve Saved Cards Using Phone Number
      1. Fetch OTP for Authentication
      2. Fetch Saved Cards Using Phone Number and OTP
2. Retrieve Saved Cards Using Auth Token
6. Merchant-Centric Card Vault
1. Create a Customer
2. Save a Card for Customer
3. Get Customer Information
4. Fetch a List of Cards for a Customer
5. Delete Card for a Customer
7. PreAuth and Capture
8. Failover Routing

📱

Checkout: Flutter Connect

Open Recipe

* * *

## Methods and Applications   [Skip link to Methods and Applications](https://docs.portone.cloud/docs/flutter-connect\#methods-and-applications)

### 1\. Initialize the SDK   [Skip link to 1. Initialize the SDK](https://docs.portone.cloud/docs/flutter-connect\#1-initialize-the-sdk)

To begin using the Flutter Connect SDK, create an instance of the `PortOne` SDK in the activity where the payment checkout process will take place. Initialize the SDK by specifying the environment—either `sandbox` for testing or `live` for production.

Kotlin

```rdmd-code lang-kotlin theme-light

String environment = "sandbox";            // For Sandbox
String environment = "live";               // For Live

late PortOneImpl portone;
portone = PortOneImpl(context, environment,"com.flutter.example");

```

Parameters:

- `context`: The activity context where the SDK is being initialized.
- `environment`: Defines the environment in which the SDK operates.

  - `"sandbox"` for testing
  - `"live"` for production
- `applicationId`: (Optional) The unique ID of your application.

> **Note**: The `applicationId` parameter is required if the merchant wants to whitelist the app. When an app is whitelisted, the signature hash generation becomes optional, as the app is pre-authorized to securely process payments without it.

* * *

### 2\. Fetch Enabled Payment Methods and Channels   [Skip link to 2. Fetch Enabled Payment Methods and Channels](https://docs.portone.cloud/docs/flutter-connect\#2-fetch-enabled-payment-methods-and-channels)

This method retrieves the available payment channels and methods that can be used for the checkout process.

Kotlin

```rdmd-code lang-kotlin theme-light

 portone.getPaymentMethods(requests.portoneKey, requests.currency, null);

```

For receiving the response, the following listener needs to be added.

Kotlin

```rdmd-code lang-kotlin theme-light

 portone.setPaymentMethodsListener(
        callback: (PaymentMethodResponse response) {
      final json = jsonEncode(response);
      print('Response-> $response--> $json');
    });

```

### Parameter list for Merchant Details   [Skip link to Parameter list for Merchant Details](https://docs.portone.cloud/docs/flutter-connect\#parameter-list-for-merchant-details)

##### portoneKey   [Skip link to portoneKey](https://docs.portone.cloud/docs/flutter-connect\#portonekey)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan)

The merchant's unique identifier.

* * *

##### subMerchantKey   [Skip link to subMerchantKey](https://docs.portone.cloud/docs/flutter-connect\#submerchantkey)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string)

The sub-merchant's identifier.

* * *

##### currency   [Skip link to currency](https://docs.portone.cloud/docs/flutter-connect\#currency)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-1)

The currency for the transaction.

* * *

### 3\. Checkout   [Skip link to 3. Checkout](https://docs.portone.cloud/docs/flutter-connect\#3-checkout)

### Checkout with All Payment Methods   [Skip link to Checkout with All Payment Methods](https://docs.portone.cloud/docs/flutter-connect\#checkout-with-all-payment-methods)

The **Checkout with All Payment Methods** allows you to process payments using various methods, including:

- Wallets
- Saved Cards
- Installments
- Bank Transfers
- Direct Bank Transfers

This method supports multiple payment channels and methods, including customer details (billing/shipping), order details, and redirection URLs for handling success or failure of transactions.

Kotlin

```rdmd-code lang-kotlin theme-light

CheckoutRequest checkoutRequest = CheckoutRequest(
        amount: 50010,
        billingDetails: BillingDetails(
            billingAddress: BillingAddress(
                city: "VND",
                countryCode: "VN",
                line1: "302,Green Street",
                line2: "Town Hall",
                locale: "en",
                postalCode: "400202",
                state: "Taxes"),
            billingEmail: "markweins@gmail.com",
            billingName: "Test mark",
            billingPhone: mobileNo),
        shippingDetails: ShippingDetails(
            shippingAddress: ShippingAddress(
                city: "VND",
                countryCode: "VN",
                line1: "302,Green Street",
                line2: "Town Hall",
                locale: "en",
                postalCode: "400202",
                state: "Taxes"),
            shippingEmail: "markweins@gmail.com",
            shippingName: "Test mark",
            shippingPhone: mobileNo),
        currency: currency,
        failureUrl: "https://www.bing.com",
        portOneKey: portoneKey,
        merchantOrderId: orderId,
        orderDetails: [\
          OrderDetails(\
              id: "product_001",\
              name: "Hand Gloves",\
              image:\
              "https://cdn.moglix.com/p/0DcA3eidlukGq-xxlarge.jpg",\
              price: 19010,\
              quantity: 1)\
        ],
        merchantDetails: MerchantDetails(
            name: "Curo Sports",
            backUrl: "https://demo.chaipay.io/checkout.html",
            logo:
            "https://img.freepik.com/premium-vector/logo-sports-company-that-is-running_695276-2946.jpg",
            promoCode: null,
            promoDiscount: 10000.00,
            shippingCharges: 10000.00),
        signatureHash: signatureHash,
        successUrl: "https://www.google.com",
        source: "mobile",
        redirectUrl: "portonechai://checkout",
        environment: environment);

portone.checkout(checkoutRequest, null);

```

### Parameter list for CheckoutEmbedDto.CheckoutUsingEmbedRequest   [Skip link to Parameter list for CheckoutEmbedDto.CheckoutUsingEmbedRequest](https://docs.portone.cloud/docs/flutter-connect\#parameter-list-for-checkoutembeddtocheckoutusingembedrequest)

##### portone\_key   [Skip link to portone_key](https://docs.portone.cloud/docs/flutter-connect\#portone_key)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-2)

The unique PortOne key for the merchant.

* * *

##### merchant\_details   [Skip link to merchant_details](https://docs.portone.cloud/docs/flutter-connect\#merchant_details)

###### _object_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#object)

The JSON object for merchant details

> ##### name   [Skip link to name](https://docs.portone.cloud/docs/flutter-connect\#name)
>
> ###### _string_ · The name of the merchant   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-the-name-of-the-merchant)
>
> ##### logo   [Skip link to logo](https://docs.portone.cloud/docs/flutter-connect\#logo)
>
> ###### _string_ · The logo of the merchant   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-the-logo-of-the-merchant)
>
> ##### back\_url   [Skip link to back_url](https://docs.portone.cloud/docs/flutter-connect\#back_url)
>
> ###### _string_ · The URL of the merchant site   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-the-url-of-the-merchant-site)
>
> ##### promo\_code   [Skip link to promo_code](https://docs.portone.cloud/docs/flutter-connect\#promo_code)
>
> ###### _string_ · The promo code enabled on the order by the merchant   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-the-promo-code-enabled-on-the-order-by-the-merchant)
>
> ##### promo\_discount   [Skip link to promo_discount](https://docs.portone.cloud/docs/flutter-connect\#promo_discount)
>
> ###### _int_ · The promo code discount amount on the order by the merchant   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#int-%C2%B7-the-promo-code-discount-amount-on-the-order-by-the-merchant)
>
> ##### shipping\_charges   [Skip link to shipping_charges](https://docs.portone.cloud/docs/flutter-connect\#shipping_charges)
>
> ###### _double_ · The shipping charges set by the merchant   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#double-%C2%B7-the-shipping-charges-set-by-the-merchant)

* * *

##### merchant\_order\_id   [Skip link to merchant_order_id](https://docs.portone.cloud/docs/flutter-connect\#merchant_order_id)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-3)

The unique merchant order reference generated by the merchant.

* * *

##### signature\_hash   [Skip link to signature_hash](https://docs.portone.cloud/docs/flutter-connect\#signature_hash)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-4)

The signature hash of transaction details.

* * *

##### amount   [Skip link to amount](https://docs.portone.cloud/docs/flutter-connect\#amount)

###### _double · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#double-%C2%B7-span-stylecolorredrequiredspan)

The amount of the transaction.

* * *

##### currency   [Skip link to currency](https://docs.portone.cloud/docs/flutter-connect\#currency-1)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-5)

The currency of the transaction.

* * *

##### country\_code   [Skip link to country_code](https://docs.portone.cloud/docs/flutter-connect\#country_code)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-6)

The country code of the transaction.

* * *

##### billing\_details   [Skip link to billing_details](https://docs.portone.cloud/docs/flutter-connect\#billing_details)

###### _object_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#object-1)

The JSON object for billing details

> ##### billing\_name   [Skip link to billing_name](https://docs.portone.cloud/docs/flutter-connect\#billing_name)
>
> ###### _string_ · The billing first and middle name   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-the-billing-first-and-middle-name)
>
> ##### billing\_surname   [Skip link to billing_surname](https://docs.portone.cloud/docs/flutter-connect\#billing_surname)
>
> ###### _string_ · The billing last name   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-the-billing-last-name)
>
> ##### billing\_email   [Skip link to billing_email](https://docs.portone.cloud/docs/flutter-connect\#billing_email)
>
> ###### _string_ · The billing email address   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-the-billing-email-address)
>
> ##### billing\_phone   [Skip link to billing_phone](https://docs.portone.cloud/docs/flutter-connect\#billing_phone)
>
> ###### _string_ · The billing phone number   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-the-billing-phone-number)
>
> ##### billing\_address   [Skip link to billing_address](https://docs.portone.cloud/docs/flutter-connect\#billing_address)
>
> ###### _object_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#object-2)
>
> The JSON object containing full address
>
> > ##### city   [Skip link to city](https://docs.portone.cloud/docs/flutter-connect\#city)
> >
> > ###### _string_ · City name   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-city-name)
> >
> > ##### country\_code   [Skip link to country_code](https://docs.portone.cloud/docs/flutter-connect\#country_code-1)
> >
> > ###### _string_ · 2-digit country code   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-2-digit-country-code)
> >
> > ##### country\_name   [Skip link to country_name](https://docs.portone.cloud/docs/flutter-connect\#country_name)
> >
> > ###### _string_ · Full country name   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-full-country-name)
> >
> > ##### locale   [Skip link to locale](https://docs.portone.cloud/docs/flutter-connect\#locale)
> >
> > ###### _string_ · Region locale   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-region-locale)
> >
> > ##### line\_1   [Skip link to line_1](https://docs.portone.cloud/docs/flutter-connect\#line_1)
> >
> > ###### _string_ · Line 1 of the address   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-line-1-of-the-address)
> >
> > ##### line\_2   [Skip link to line_2](https://docs.portone.cloud/docs/flutter-connect\#line_2)
> >
> > ###### _string_ · Line 2 of the address   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-line-2-of-the-address)
> >
> > ##### postal\_code   [Skip link to postal_code](https://docs.portone.cloud/docs/flutter-connect\#postal_code)
> >
> > ###### _string_ · Postal code of the area   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-postal-code-of-the-area)
> >
> > ##### state   [Skip link to state](https://docs.portone.cloud/docs/flutter-connect\#state)
> >
> > ###### _string_ · State/province of the country   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-stateprovince-of-the-country)

* * *

##### shipping\_details   [Skip link to shipping_details](https://docs.portone.cloud/docs/flutter-connect\#shipping_details)

###### _object_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#object-3)

The JSON object for shipping details

> ##### shipping\_name   [Skip link to shipping_name](https://docs.portone.cloud/docs/flutter-connect\#shipping_name)
>
> ###### _string_ · The shipping first and middle name   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-the-shipping-first-and-middle-name)
>
> ##### shipping\_surname   [Skip link to shipping_surname](https://docs.portone.cloud/docs/flutter-connect\#shipping_surname)
>
> ###### _string_ · The shipping last name   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-the-shipping-last-name)
>
> ##### shipping\_email   [Skip link to shipping_email](https://docs.portone.cloud/docs/flutter-connect\#shipping_email)
>
> ###### _string_ · The shipping email address   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-the-shipping-email-address)
>
> ##### shipping\_phone   [Skip link to shipping_phone](https://docs.portone.cloud/docs/flutter-connect\#shipping_phone)
>
> ###### _string_ · The shipping phone number   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-the-shipping-phone-number)
>
> ##### shipping\_address   [Skip link to shipping_address](https://docs.portone.cloud/docs/flutter-connect\#shipping_address)
>
> ###### _object_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#object-4)
>
> The JSON object containing full address
>
> > ##### city   [Skip link to city](https://docs.portone.cloud/docs/flutter-connect\#city-1)
> >
> > ###### _string_ · City name   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-city-name-1)
> >
> > ##### country\_code   [Skip link to country_code](https://docs.portone.cloud/docs/flutter-connect\#country_code-2)
> >
> > ###### _string_ · 2-digit country code   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-2-digit-country-code-1)
> >
> > ##### country\_name   [Skip link to country_name](https://docs.portone.cloud/docs/flutter-connect\#country_name-1)
> >
> > ###### _string_ · Full country name   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-full-country-name-1)
> >
> > ##### locale   [Skip link to locale](https://docs.portone.cloud/docs/flutter-connect\#locale-1)
> >
> > ###### _string_ · Region locale   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-region-locale-1)
> >
> > ##### line\_1   [Skip link to line_1](https://docs.portone.cloud/docs/flutter-connect\#line_1-1)
> >
> > ###### _string_ · Line 1 of the address   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-line-1-of-the-address-1)
> >
> > ##### line\_2   [Skip link to line_2](https://docs.portone.cloud/docs/flutter-connect\#line_2-1)
> >
> > ###### _string_ · Line 2 of the address   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-line-2-of-the-address-1)
> >
> > ##### postal\_code   [Skip link to postal_code](https://docs.portone.cloud/docs/flutter-connect\#postal_code-1)
> >
> > ###### _string_ · Postal code of the area   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-postal-code-of-the-area-1)
> >
> > ##### state   [Skip link to state](https://docs.portone.cloud/docs/flutter-connect\#state-1)
> >
> > ###### _string_ · State/province of the country   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-stateprovince-of-the-country-1)

* * *

##### order\_details   [Skip link to order_details](https://docs.portone.cloud/docs/flutter-connect\#order_details)

###### _array of objects_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#array-of-objects)

The JSON array for order details

> ##### id   [Skip link to id](https://docs.portone.cloud/docs/flutter-connect\#id)
>
> ###### _string_ · The unique identifier of the order item   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-the-unique-identifier-of-the-order-item)
>
> ##### price   [Skip link to price](https://docs.portone.cloud/docs/flutter-connect\#price)
>
> ###### _double_ · The price of the product   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#double-%C2%B7-the-price-of-the-product)
>
> ##### name   [Skip link to name](https://docs.portone.cloud/docs/flutter-connect\#name-1)
>
> ###### _string_ · The name of the product   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-the-name-of-the-product)
>
> ##### quantity   [Skip link to quantity](https://docs.portone.cloud/docs/flutter-connect\#quantity)
>
> ###### _integer_ · The quantity of the product   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#integer-%C2%B7-the-quantity-of-the-product)
>
> ##### image   [Skip link to image](https://docs.portone.cloud/docs/flutter-connect\#image)
>
> ###### _string_ · The URL of the product image   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-the-url-of-the-product-image)

* * *

##### success\_url   [Skip link to success_url](https://docs.portone.cloud/docs/flutter-connect\#success_url)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-7)

The URL of the success page hosted by the merchant.

* * *

##### failure\_url   [Skip link to failure_url](https://docs.portone.cloud/docs/flutter-connect\#failure_url)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-8)

The URL of the failure page hosted by the merchant.

* * *

##### expiry\_hours   [Skip link to expiry_hours](https://docs.portone.cloud/docs/flutter-connect\#expiry_hours)

###### _int · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#int-%C2%B7-span-stylecolorredrequiredspan)

The expiry time in hours for the checkout session.

* * *

##### redirect\_url   [Skip link to redirect_url](https://docs.portone.cloud/docs/flutter-connect\#redirect_url)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-9)

The URL for redirection after the transaction.

* * *

##### environment   [Skip link to environment](https://docs.portone.cloud/docs/flutter-connect\#environment)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-10)

The environment for the transaction, either sandbox or live.

* * *

### Checkout Using a New Credit Card   [Skip link to Checkout Using a New Credit Card](https://docs.portone.cloud/docs/flutter-connect\#checkout-using-a-new-credit-card)

The **Checkout Using a New Credit Card** method is specifically designed for transactions where the customer enters new credit or debit card details.

Kotlin

```rdmd-code lang-kotlin theme-light

CheckoutRequest checkoutRequest = CheckoutRequest();

 ChanexTokenRequest newCard = ChanexTokenRequest(
        cardNumber: "4242424242424242",
        cardType: "Visa",
        cardholderName: "NGUYEN VAN A",
        serviceCode: "123",
        expirationYear: "2025",
        expirationMonth: "05",
        saveCard: true);

portone.checkoutUsingNewCard(
                              requests.getTokenizationRequest(),
                              newCard,
                              "JWT Token",null);

```

### Parameter list for Payment Processing   [Skip link to Parameter list for Payment Processing](https://docs.portone.cloud/docs/flutter-connect\#parameter-list-for-payment-processing)

##### paymentDetails   [Skip link to paymentDetails](https://docs.portone.cloud/docs/flutter-connect\#paymentdetails)

###### _object · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#object-%C2%B7-span-stylecolorredrequiredspan)

The JSON object for main checkout request details

> ##### amount· required   [Skip link to amount· ](https://docs.portone.cloud/docs/flutter-connect\#amount%C2%B7-span-stylecolorredrequiredspan)
>
> ###### _double_ · The total transaction amount.   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#double-%C2%B7-the-total-transaction-amount)
>
> ##### currency· required   [Skip link to currency· ](https://docs.portone.cloud/docs/flutter-connect\#currency%C2%B7-span-stylecolorredrequiredspan)
>
> ###### _string_ · The currency for the transaction (e.g., USD, EUR).   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-the-currency-for-the-transaction-eg-usd-eur)
>
> ##### description   [Skip link to description](https://docs.portone.cloud/docs/flutter-connect\#description)
>
> ###### _string_ · Description of the transaction.   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-description-of-the-transaction)

* * *

##### newCard   [Skip link to newCard](https://docs.portone.cloud/docs/flutter-connect\#newcard)

###### _object · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#object-%C2%B7-span-stylecolorredrequiredspan-1)

The JSON object for ChanexTokenRequest details

> ##### cardNumber· required   [Skip link to cardNumber· ](https://docs.portone.cloud/docs/flutter-connect\#cardnumber%C2%B7-span-stylecolorredrequiredspan)
>
> ###### _string_ · The card number for the transaction.   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-the-card-number-for-the-transaction)
>
> ##### expiryMonth· required   [Skip link to expiryMonth· ](https://docs.portone.cloud/docs/flutter-connect\#expirymonth%C2%B7-span-stylecolorredrequiredspan)
>
> ###### _string_ · The expiration month of the card.   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-the-expiration-month-of-the-card)
>
> ##### expiryYear· required   [Skip link to expiryYear· ](https://docs.portone.cloud/docs/flutter-connect\#expiryyear%C2%B7-span-stylecolorredrequiredspan)
>
> ###### _string_ · The expiration year of the card.   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-the-expiration-year-of-the-card)
>
> ##### cvv· required   [Skip link to cvv· ](https://docs.portone.cloud/docs/flutter-connect\#cvv%C2%B7-span-stylecolorredrequiredspan)
>
> ###### _string_ · The CVV/CVC code for the card.   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-the-cvvcvc-code-for-the-card)

* * *

##### subMerchantKey   [Skip link to subMerchantKey](https://docs.portone.cloud/docs/flutter-connect\#submerchantkey-1)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-1)

Optional sub-merchant key used by master merchants.

* * *

##### token   [Skip link to token](https://docs.portone.cloud/docs/flutter-connect\#token)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-11)

The authentication token for secure processing.

* * *

### 4\. Making a Payment Using Saved Cards   [Skip link to 4. Making a Payment Using Saved Cards](https://docs.portone.cloud/docs/flutter-connect\#4-making-a-payment-using-saved-cards)

To make a payment using saved cards for the first time, this process retrieves cards linked to the user’s phone number. OTP authentication is required, making it a two-step process for initial access. After the initial retrieval, future access can use an authentication token for convenience.

* * *

### 4.1 Retrieving Saved Cards for the First Time   [Skip link to 4.1 Retrieving Saved Cards for the First Time](https://docs.portone.cloud/docs/flutter-connect\#41-retrieving-saved-cards-for-the-first-time)

This method retrieves saved cards by first sending an OTP to the registered phone number, followed by using the OTP for authentication to access the saved cards.

* * *

### Step 1: Send OTP to Registered Phone Number   [Skip link to Step 1: Send OTP to Registered Phone Number](https://docs.portone.cloud/docs/flutter-connect\#step-1-send-otp-to-registered-phone-number)

Kotlin

```rdmd-code lang-kotlin theme-light

 portone.getOTP(phoneNo);

```

### Parameter list for OTP Generation   [Skip link to Parameter list for OTP Generation](https://docs.portone.cloud/docs/flutter-connect\#parameter-list-for-otp-generation)

##### phoneNo   [Skip link to phoneNo](https://docs.portone.cloud/docs/flutter-connect\#phoneno)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-12)

User’s phone number to receive the OTP.

* * *

### Step 2: Retrieve Saved Cards Using OTP   [Skip link to Step 2: Retrieve Saved Cards Using OTP](https://docs.portone.cloud/docs/flutter-connect\#step-2-retrieve-saved-cards-using-otp)

Kotlin

```rdmd-code lang-kotlin theme-light

 portone.getSavedCards(null, portoneKey,phoneNo,otp);

```

Listener :

Kotlin

```rdmd-code lang-kotlin theme-light

portone.setSavedCardsListener(
        callback: (CreditCardDetailsResponse response) {
      final json = jsonEncode(response);
      print('Response-> $response--> $json');
    });

```

### Parameter list for Retrieving Saved Cards   [Skip link to Parameter list for Retrieving Saved Cards](https://docs.portone.cloud/docs/flutter-connect\#parameter-list-for-retrieving-saved-cards)

##### token   [Skip link to token](https://docs.portone.cloud/docs/flutter-connect\#token-1)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-2)

Authentication token, not required for first-time retrieval.

* * *

##### portoneKey   [Skip link to portoneKey](https://docs.portone.cloud/docs/flutter-connect\#portonekey-1)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-13)

Merchant’s unique identifier.

* * *

##### phoneNo   [Skip link to phoneNo](https://docs.portone.cloud/docs/flutter-connect\#phoneno-1)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-14)

User’s phone number for retrieving saved cards.

* * *

##### otp   [Skip link to otp](https://docs.portone.cloud/docs/flutter-connect\#otp)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-15)

OTP sent to the phone for verification.

* * *

### 4.2 Retrieving Saved Cards for Subsequent Access   [Skip link to 4.2 Retrieving Saved Cards for Subsequent Access](https://docs.portone.cloud/docs/flutter-connect\#42-retrieving-saved-cards-for-subsequent-access)

After the initial retrieval, a token is returned in the response. This token can be used instead of an OTP for future card retrievals, allowing a more streamlined authentication process.

Kotlin

```rdmd-code lang-kotlin theme-light

 portone.getSavedCards(token, portoneKey,phoneNo,null);

```

Listener:

Kotlin

```rdmd-code lang-kotlin theme-light

portone.setSavedCardsListener(
        callback: (CreditCardDetailsResponse response) {
      final json = jsonEncode(response);
      print('Response-> $response--> $json');
    });

```

### Parameter list for Subsequent Retrieval of Saved Cards   [Skip link to Parameter list for Subsequent Retrieval of Saved Cards](https://docs.portone.cloud/docs/flutter-connect\#parameter-list-for-subsequent-retrieval-of-saved-cards)

##### token   [Skip link to token](https://docs.portone.cloud/docs/flutter-connect\#token-2)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-16)

Authentication token obtained after initial retrieval.

* * *

##### portoneKey   [Skip link to portoneKey](https://docs.portone.cloud/docs/flutter-connect\#portonekey-2)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-17)

Merchant’s unique identifier.

* * *

##### phoneNo   [Skip link to phoneNo](https://docs.portone.cloud/docs/flutter-connect\#phoneno-2)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-18)

User’s phone number for retrieving saved cards.

* * *

##### otp   [Skip link to otp](https://docs.portone.cloud/docs/flutter-connect\#otp-1)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-3)

Not required for subsequent retrievals; set to `null`.

* * *

## Merchant-Centric Card Vault   [Skip link to Merchant-Centric Card Vault](https://docs.portone.cloud/docs/flutter-connect\#merchant-centric-card-vault)

The Merchant-Centric Card Vault operates by enrolling merchants initially, followed by adding customers specific to each merchant. Cards are then saved based on individual customers, ensuring a personalized and secure card storage system. Several methods are available to facilitate various operations within this card vault setup.

### 1\. Add Customer   [Skip link to 1. Add Customer](https://docs.portone.cloud/docs/flutter-connect\#1-add-customer)

This method is used to add a customer to the Merchant-Centric Card Vault.

Kotlin

```rdmd-code lang-kotlin theme-light

portone.addCustomer("JWTToken",
                     portoneKey,
                     AddCustomerRequest(
                              name: "",
                              customerRef: "",
                              emailAddress: "",
                              phoneNumber: phoneNo));

```

### Parameter list for Customer Registration   [Skip link to Parameter list for Customer Registration](https://docs.portone.cloud/docs/flutter-connect\#parameter-list-for-customer-registration)

##### token   [Skip link to token](https://docs.portone.cloud/docs/flutter-connect\#token-3)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-19)

Authentication token for secure processing.

* * *

##### portoneKey   [Skip link to portoneKey](https://docs.portone.cloud/docs/flutter-connect\#portonekey-3)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-20)

Merchant’s unique identifier.

* * *

##### subMerchantKey   [Skip link to subMerchantKey](https://docs.portone.cloud/docs/flutter-connect\#submerchantkey-2)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-4)

Optional sub-merchant key used by master merchants.

* * *

##### name   [Skip link to name](https://docs.portone.cloud/docs/flutter-connect\#name-2)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-21)

The customer’s full name.

* * *

##### phoneNo   [Skip link to phoneNo](https://docs.portone.cloud/docs/flutter-connect\#phoneno-3)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-22)

The customer’s phone number.

* * *

##### email   [Skip link to email](https://docs.portone.cloud/docs/flutter-connect\#email)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-23)

The customer’s email address.

* * *

##### customerRef   [Skip link to customerRef](https://docs.portone.cloud/docs/flutter-connect\#customerref)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-24)

The unique reference identifier for the customer.

* * *

### 2\. Save a Card for a Customer   [Skip link to 2. Save a Card for a Customer](https://docs.portone.cloud/docs/flutter-connect\#2-save-a-card-for-a-customer)

This method is used to save a specific card for a particular customer.

Kotlin

```rdmd-code lang-kotlin theme-light

 portone.addCardForCustomer(
                          customerUUID,
                          "JWTToken",
                          portoneKey,
                          NewCard(),
                          null);

```

### Parameter list for Customer Registration   [Skip link to Parameter list for Customer Registration](https://docs.portone.cloud/docs/flutter-connect\#parameter-list-for-customer-registration-1)

##### token   [Skip link to token](https://docs.portone.cloud/docs/flutter-connect\#token-4)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-25)

Authentication token for secure processing.

* * *

##### portoneKey   [Skip link to portoneKey](https://docs.portone.cloud/docs/flutter-connect\#portonekey-4)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-26)

Merchant’s unique identifier.

* * *

##### subMerchantKey   [Skip link to subMerchantKey](https://docs.portone.cloud/docs/flutter-connect\#submerchantkey-3)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-5)

Optional sub-merchant key used by master merchants.

* * *

##### name   [Skip link to name](https://docs.portone.cloud/docs/flutter-connect\#name-3)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-27)

The customer’s full name.

* * *

##### phoneNo   [Skip link to phoneNo](https://docs.portone.cloud/docs/flutter-connect\#phoneno-4)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-28)

The customer’s phone number.

* * *

##### email   [Skip link to email](https://docs.portone.cloud/docs/flutter-connect\#email-1)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-29)

The customer’s email address.

* * *

##### customerRef   [Skip link to customerRef](https://docs.portone.cloud/docs/flutter-connect\#customerref-1)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-30)

The unique reference identifier for the customer.

* * *

### `NewCard`   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#newcard-1)

### Parameter list for Card Registration   [Skip link to Parameter list for Card Registration](https://docs.portone.cloud/docs/flutter-connect\#parameter-list-for-card-registration)

##### cardNumber   [Skip link to cardNumber](https://docs.portone.cloud/docs/flutter-connect\#cardnumber)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-31)

The card number to be registered.

* * *

##### cardType   [Skip link to cardType](https://docs.portone.cloud/docs/flutter-connect\#cardtype)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-32)

The type of the card (e.g., VISA, MASTERCARD).

* * *

##### cardholderName   [Skip link to cardholderName](https://docs.portone.cloud/docs/flutter-connect\#cardholdername)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-33)

The name of the cardholder.

* * *

##### serviceCode   [Skip link to serviceCode](https://docs.portone.cloud/docs/flutter-connect\#servicecode)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-34)

The CVV/CVC code of the card.

* * *

##### expiryYear   [Skip link to expiryYear](https://docs.portone.cloud/docs/flutter-connect\#expiryyear)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-35)

The expiration year of the card.

* * *

##### expiryMonth   [Skip link to expiryMonth](https://docs.portone.cloud/docs/flutter-connect\#expirymonth)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-36)

The expiration month of the card.

* * *

##### environment   [Skip link to environment](https://docs.portone.cloud/docs/flutter-connect\#environment-1)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-37)

The environment for the transaction, either `sandbox` or `live`.

* * *

##### portoneKey   [Skip link to portoneKey](https://docs.portone.cloud/docs/flutter-connect\#portonekey-5)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-38)

Merchant’s unique identifier.

* * *

### 3\. Retrieve Stored Cards for a Customer   [Skip link to 3. Retrieve Stored Cards for a Customer](https://docs.portone.cloud/docs/flutter-connect\#3-retrieve-stored-cards-for-a-customer)

This method retrieves the list of cards stored for a specific customer.

Kotlin

```rdmd-code lang-kotlin theme-light

 portone.listCardsForCustomer(customerUUID,
                          "JWTToken", portoneKey);

```

### Parameter list for Customer UUID Verification   [Skip link to Parameter list for Customer UUID Verification](https://docs.portone.cloud/docs/flutter-connect\#parameter-list-for-customer-uuid-verification)

##### customerUUID   [Skip link to customerUUID](https://docs.portone.cloud/docs/flutter-connect\#customeruuid)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-39)

The unique UUID of the customer.

* * *

##### token   [Skip link to token](https://docs.portone.cloud/docs/flutter-connect\#token-5)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-40)

Authentication token for secure processing.

* * *

##### portoneKey   [Skip link to portoneKey](https://docs.portone.cloud/docs/flutter-connect\#portonekey-6)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-41)

Merchant’s unique identifier.

* * *

##### subMerchantKey   [Skip link to subMerchantKey](https://docs.portone.cloud/docs/flutter-connect\#submerchantkey-4)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-6)

Optional sub-merchant key used by master merchants.

* * *

### 4\. Delete a Card for a Customer   [Skip link to 4. Delete a Card for a Customer](https://docs.portone.cloud/docs/flutter-connect\#4-delete-a-card-for-a-customer)

This method deletes a specific card for an individual customer.

Kotlin

```rdmd-code lang-kotlin theme-light

portone.deleteCardForCustomer(
                          customerUUID,
                          "JWTToken",
                          portoneKey,
                          DeleteCardRequest(
                              token: "735eaf72a0a14965aced3e1f9a339b0b"));

```

### Parameter list for Card Token Verification   [Skip link to Parameter list for Card Token Verification](https://docs.portone.cloud/docs/flutter-connect\#parameter-list-for-card-token-verification)

##### customerUUID   [Skip link to customerUUID](https://docs.portone.cloud/docs/flutter-connect\#customeruuid-1)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-42)

The unique UUID of the customer.

* * *

##### token   [Skip link to token](https://docs.portone.cloud/docs/flutter-connect\#token-6)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-43)

Authentication token for secure processing.

* * *

##### portoneKey   [Skip link to portoneKey](https://docs.portone.cloud/docs/flutter-connect\#portonekey-7)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-44)

Merchant’s unique identifier.

* * *

##### subMerchantKey   [Skip link to subMerchantKey](https://docs.portone.cloud/docs/flutter-connect\#submerchantkey-5)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-7)

Optional sub-merchant key used by master merchants.

* * *

##### cardToken   [Skip link to cardToken](https://docs.portone.cloud/docs/flutter-connect\#cardtoken)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-45)

The unique token of the card to be verified.

* * *

### 5\. Get Customer Information   [Skip link to 5. Get Customer Information](https://docs.portone.cloud/docs/flutter-connect\#5-get-customer-information)

This method retrieves information about a specific customer.

Dart

```rdmd-code lang-dart theme-light

portone.getCustomer("JWTToken", portoneKey,
customerUUID);

```

### Parameter list for Customer Identification   [Skip link to Parameter list for Customer Identification](https://docs.portone.cloud/docs/flutter-connect\#parameter-list-for-customer-identification)

##### token   [Skip link to token](https://docs.portone.cloud/docs/flutter-connect\#token-7)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-46)

Authentication token for secure processing.

* * *

##### portOneKey   [Skip link to portOneKey](https://docs.portone.cloud/docs/flutter-connect\#portonekey-8)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-47)

Merchant’s unique identifier.

* * *

##### customerUUID   [Skip link to customerUUID](https://docs.portone.cloud/docs/flutter-connect\#customeruuid-2)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-48)

Unique identifier for the customer.

* * *

## Pre-authorization and Payment Capture   [Skip link to Pre-authorization and Payment Capture](https://docs.portone.cloud/docs/flutter-connect\#pre-authorization-and-payment-capture)

During **Pre-authorization**, the transaction is initially approved, allowing funds to be reserved. At a later time or within specified days, the payment can be finalized using the **Capture API**.

To designate a transaction for pre-authorization, configure the `transactionType` parameter in the payload as shown:

`transactionType = "PREAUTH"`

Kotlin

```rdmd-code lang-kotlin theme-light

CheckoutRequest checkoutRequest = CheckoutRequest();
checkoutRequest.transactionType = "PREAUTH"

```

> ## 💡  Note: Pre-authorization is applicable only for credit card payments and is designed to provide a smooth workflow.

* * *

### Capturing a Pre-authorized Transaction   [Skip link to Capturing a Pre-authorized Transaction](https://docs.portone.cloud/docs/flutter-connect\#capturing-a-pre-authorized-transaction)

Once a transaction has been pre-authorized, the following method is used to capture (finalize) the transaction:

Dart

```rdmd-code lang-dart theme-light

portone.captureTransaction("2SDCUiBEv34oqeIdEDv1pftGeeY", "JWTToken", portoneKey);

```

### Parameter list for Order Reference Validation   [Skip link to Parameter list for Order Reference Validation](https://docs.portone.cloud/docs/flutter-connect\#parameter-list-for-order-reference-validation)

##### orderReference   [Skip link to orderReference](https://docs.portone.cloud/docs/flutter-connect\#orderreference)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-49)

The unique reference for the order.

* * *

##### portoneKey   [Skip link to portoneKey](https://docs.portone.cloud/docs/flutter-connect\#portonekey-9)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-50)

Merchant’s unique identifier.

* * *

##### token   [Skip link to token](https://docs.portone.cloud/docs/flutter-connect\#token-8)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#string-%C2%B7-span-stylecolorredrequiredspan-51)

Authentication token for secure processing.

* * *

## Failover Routing   [Skip link to Failover Routing](https://docs.portone.cloud/docs/flutter-connect\#failover-routing)

**Failover routing** is designed to ensure seamless credit card payment processing. This feature allows the configuration of primary and secondary payment channels through the admin portal. If a payment attempt using the primary channel fails, the system automatically redirects the user to the secondary payment channel.

### Fetching Routes   [Skip link to Fetching Routes](https://docs.portone.cloud/docs/flutter-connect\#fetching-routes)

Use the following method to retrieve routes created in the admin portal:

Kotlin

```rdmd-code lang-kotlin theme-light

portone.getRoutesList(portoneKey,"JWTToken");

```

### Configuring Failover Routing   [Skip link to Configuring Failover Routing](https://docs.portone.cloud/docs/flutter-connect\#configuring-failover-routing)

This method provides the `routeRef` that should be included in the payload as outlined below:

1. Enable routing by setting `isRoutingEnabled` to `true`.
2. Specify the **Routing Param type** as `"failover"`.
3. Include the **Routing Ref**, which is configured in the merchant portal.

Kotlin

```rdmd-code lang-kotlin theme-light

CheckoutRequest checkoutRequest = CheckoutRequest();
checkoutRequest.isRoutingEnabled = true
checkoutRequest.routingParams = RoutingParams(type = "failover", routeRef)

```

* * *

# Possible Error Scenarios:   [Skip link to Possible Error Scenarios:](https://docs.portone.cloud/docs/flutter-connect\#possible-error-scenarios)

### `INVALID_UNAUTHORIZED_JWT_TOKEN_ERROR`   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#invalid_unauthorized_jwt_token_error)

1. Ensure that the PortOne Key and Secret Key belong to the same account.
2. Confirm that the Secret Key has not been altered.
3. Verify that the `Bearer` keyword precedes the generated token with a space. Example: `Bearer $jwtToken`.
4. Check if the token expiration time is after the current time.

### `INVALID_UNAUTHORIZED_TRANSACTION_SIGNATURE_ERROR`   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#invalid_unauthorized_transaction_signature_error)

1. Validate if all parameters align with the payload/request.
2. Ensure that the PortOne key matches with the payload and the account.

### `INVALID_UNAUTHORIZED_TRANSACTION_IAMPORTKEY_ERROR`   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#invalid_unauthorized_transaction_iamportkey_error)

1. Confirm that the PortOne key matches with the payload and the account.

### `INVALID_PAYMENT_CHANNEL`   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#invalid_payment_channel)

1. Validate that the payment channels and methods included in the payload are enabled in the PortOne portal.

### `INVALID_ENVIRONMENT`   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#invalid_environment)

1. Verify that an environment ( `sandbox` or `live`) has been specified.

### `Summation of order value, tax, duties, shipping, and discount should equal the total amount`   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-connect\#summation-of-order-value-tax-duties-shipping-and-discount-should-equal-the-total-amount)

1. If items are provided, ensure that the values match the total amount calculation formula: `sum(items price * items quantity) + shipping charge - discount = amount`.
2. Mandatory parameters in the payload:
   - price
   - promo\_discount (0 accepted)
   - shipping\_charges (0 accepted)

Updated6 months ago

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