---
url: "https://docs.portone.cloud/docs/flutter-embed"
title: "Flutter Embed"
---

The PortOne Flutter SDK offers merchants a seamless way to integrate the PortOne Payment Gateway into their Flutter applications, enabling them to accept payments securely and efficiently. This SDK serves as a bridge between a merchant's app and the PortOne Payment Gateway, providing a comprehensive set of tools and features tailored specifically for handling payment transactions.

The PortOne Flutter SDK empowers merchants to unlock the full potential of their Flutter applications by seamlessly integrating a reliable and secure payment gateway, enhancing user experience, and driving business growth through efficient payment processing capabilities

integration\_flutter

![](https://cdn.loom.com/avatars/default-avatar.svg)

[integration\_flutter](https://www.loom.com/share/52ab7b8232ce4c5198556b9a2378bf61?source=embed_watch_on_loom_cta "integration_flutter")


Your user agent does not support the HTML5 Video element.

![](https://cdn.loom.com/avatars/default-avatar.svg)

[integration\_flutter](https://www.loom.com/share/52ab7b8232ce4c5198556b9a2378bf61?source=embed_watch_on_loom_cta "integration_flutter")


* * *

## Sample App   [Skip link to Sample App](https://docs.portone.cloud/docs/flutter-embed\#sample-app)

Check the sample app to integrate on [GitHub](https://github.com/iamport-intl/flutter_merchants_demo_app)

* * *

## **Prerequisites**   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#prerequisites)

- **[Create an account](https://docs.portone.cloud/docs/create-an-account) on PortOne:**


Before proceeding with the integration, ensure you have created an account on PortOne to access their services and functionalities.
- **[Enable Payment Channels and Methods](https://docs.portone.cloud/docs/3-payment-channels-configuration)**:


Customize and enable the specific payment channels and methods that align with your business requirements and preferences.
- **[Access API Keys](https://docs.portone.cloud/docs/2-collect-api-keys)**


Login to the portone portal where you can access the API Keys (client key and secret key) for integrations under Settings -> API tab.
- **Flutter application for the integration**:


You will need an Flutter application in which you intend to integrate the PortOne Flutter SDK for payment processing capabilities.

* * *

## Integration   [Skip link to Integration](https://docs.portone.cloud/docs/flutter-embed\#integration)

Steps to integrate your Flutter application with PortOne Flutter SDK.

1. Configure the Flutter SDK with the Flutter App
2. Set the Intent Filters in the manifests
3. Add a listener to listen the payment status
4. Setup to Obtain JWT Token from the Server:
5. Generate a Signature Hash for Payload

📱

Setup & Integration: Flutter SDK

Open Recipe

### 1\. Configure the Flutter SDK with the Flutter App   [Skip link to 1.  Configure the Flutter SDK with the Flutter App](https://docs.portone.cloud/docs/flutter-embed\#1--configure-the-flutter-sdk-with-the-flutter-app)

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

### 2\. Enable deep links   [Skip link to 2. Enable deep links](https://docs.portone.cloud/docs/flutter-embed\#2-enable-deep-links)

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

### 3\. Add a listener to listen the payment status by the callback to `initState()`   [Skip link to 3.  Add a listener to listen the payment status by the callback to ](https://docs.portone.cloud/docs/flutter-embed\#3--add-a-listener-to-listen-the-payment-status-by-the-callback-to-initstate)

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

### 4\. Have a setup to get JWT token from the server   [Skip link to 4. Have a setup to get JWT token from the server](https://docs.portone.cloud/docs/flutter-embed\#4-have-a-setup-to-get-jwt-token-from-the-server)

The PortOne SDK requires a JWT token for authentication. You need to implement a server-side process to generate this token and retrieve it in your app.

**Steps:**

1. Implement server logic to generate a JWT token.
2. In your app, fetch the token to process the checkout.

The process for generating a JWT token can be found in detail [here](https://docs-v2.portone.cloud/docs/jwt-authentication)

### 5\. Generate Signture Hash   [Skip link to 5. Generate Signture Hash](https://docs.portone.cloud/docs/flutter-embed\#5-generate-signture-hash)

To generate a signature hash, create it on the server side using a secret key that will be included in the payload. This ensures secure processing of transactions.

> **Note**: Generating a signature hash is optional if you have whitelisted your app while initializing the checkout. Detailed instructions on this are provided in the checkout setup section.

**Steps:**

1. Implement server logic to generate a signature hash.
2. In your app, fetch the signature hash to process the checkout.

The process for generating a Signature Hash can be found in detail [here](https://docs-v2.portone.cloud/docs/payment-request)

* * *

# Flutter Embed   [Skip link to Flutter Embed](https://docs.portone.cloud/docs/flutter-embed\#flutter-embed)

PortOne's Checkout offers a streamlined integration experience, simplifying the process for merchants. This variant involves calling a single method with the essential payload, which results in the PortOne SDK opening a webpage seamlessly. By handling the user interface within the SDK, merchants can focus on the payment flow without concerns about UI intricacies.

checkout\_flutter\_embed

![](https://cdn.loom.com/avatars/default-avatar.svg)

[checkout\_flutter\_embed](https://www.loom.com/share/d27ab48010ad4d54ba89bb5adf815c8d?source=embed_watch_on_loom_cta "checkout_flutter_embed")

3 min

3 views

0

[Open video in Loom](https://www.loom.com/share/d27ab48010ad4d54ba89bb5adf815c8d?source=embed_watch_on_loom_cta "Open video in Loom")

1.2×

3 min⚡️4 min 5 sec3 min 16 sec2 min 43 sec2 min 10 sec1 min 55 sec1 min 38 sec1 min 18 sec

Your user agent does not support the HTML5 Video element.

![](https://cdn.loom.com/avatars/default-avatar.svg)

[checkout\_flutter\_embed](https://www.loom.com/share/d27ab48010ad4d54ba89bb5adf815c8d?source=embed_watch_on_loom_cta "checkout_flutter_embed")

3 min

3 views

0

[Open video in Loom](https://www.loom.com/share/d27ab48010ad4d54ba89bb5adf815c8d?source=embed_watch_on_loom_cta "Open video in Loom")

1.2×

3 min⚡️4 min 5 sec3 min 16 sec2 min 43 sec2 min 10 sec1 min 55 sec1 min 38 sec1 min 18 sec

📱

Checkout: Flutter Embed

Open Recipe

* * *

## Initialize the SDK   [Skip link to Initialize the SDK](https://docs.portone.cloud/docs/flutter-embed\#initialize-the-sdk)

To begin using the Flutter Embed SDK, create an instance of the `PortOne` SDK in the activity where the payment checkout process will take place. Initialize the SDK by specifying the environment—either `sandbox` for testing or `live` for production.

### Steps   [Skip link to Steps](https://docs.portone.cloud/docs/flutter-embed\#steps)

1. **Create an instance** of the `PortOne` SDK in your activity.
2. **Set the environment** to either `sandbox` for testing or `live` for production based on your use case.

Kotlin

```rdmd-code lang-kotlin theme-light

String environment = "sandbox";            // For Sandbox
String environment = "live";               // For Live

late PortOneImpl portone;
portone = PortOneImpl(context, environment,"com.flutter.example");

```

## Implementation   [Skip link to Implementation](https://docs.portone.cloud/docs/flutter-embed\#implementation)

This is the method that has been utilised to process the web checkout.

Dart

```rdmd-code lang-dart theme-light

CheckoutUsingEmbedRequest embedCheckoutRequest = CheckoutUsingEmbedRequest()
portone.checkoutUsingEmbed(token,
    portoneKey, embedCheckoutRequest);


```

| Parameters | Data Type |  |
| --- | --- | --- |
| token | String | mandatory |
| portoneKey | String | mandatory |
| request | WebCheckoutRequest | mandatory |

### `WebCheckoutRequest()`   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#webcheckoutrequest)

All of the web checkout request's parameters are listed here, along with the appropriate data type.

### Parameter list for CheckoutEmbedDto.CheckoutUsingEmbedRequest   [Skip link to Parameter list for CheckoutEmbedDto.CheckoutUsingEmbedRequest](https://docs.portone.cloud/docs/flutter-embed\#parameter-list-for-checkoutembeddtocheckoutusingembedrequest)

##### portone\_key   [Skip link to portone_key](https://docs.portone.cloud/docs/flutter-embed\#portone_key)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-span-stylecolorredrequiredspan)

The unique PortOne key for the merchant.

* * *

##### merchant\_details   [Skip link to merchant_details](https://docs.portone.cloud/docs/flutter-embed\#merchant_details)

###### _object_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#object)

The JSON object for merchant details

> ##### name   [Skip link to name](https://docs.portone.cloud/docs/flutter-embed\#name)
>
> ###### _string_ · The name of the merchant   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-the-name-of-the-merchant)
>
> ##### logo   [Skip link to logo](https://docs.portone.cloud/docs/flutter-embed\#logo)
>
> ###### _string_ · The logo of the merchant   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-the-logo-of-the-merchant)
>
> ##### back\_url   [Skip link to back_url](https://docs.portone.cloud/docs/flutter-embed\#back_url)
>
> ###### _string_ · The URL of the merchant site   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-the-url-of-the-merchant-site)
>
> ##### promo\_code   [Skip link to promo_code](https://docs.portone.cloud/docs/flutter-embed\#promo_code)
>
> ###### _string_ · The promo code enabled on the order by the merchant   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-the-promo-code-enabled-on-the-order-by-the-merchant)
>
> ##### promo\_discount   [Skip link to promo_discount](https://docs.portone.cloud/docs/flutter-embed\#promo_discount)
>
> ###### _int_ · The promo code discount amount on the order by the merchant   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#int-%C2%B7-the-promo-code-discount-amount-on-the-order-by-the-merchant)
>
> ##### shipping\_charges   [Skip link to shipping_charges](https://docs.portone.cloud/docs/flutter-embed\#shipping_charges)
>
> ###### _double_ · The shipping charges set by the merchant   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#double-%C2%B7-the-shipping-charges-set-by-the-merchant)

* * *

##### merchant\_order\_id   [Skip link to merchant_order_id](https://docs.portone.cloud/docs/flutter-embed\#merchant_order_id)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-span-stylecolorredrequiredspan-1)

The unique merchant order reference generated by the merchant.

* * *

##### signature\_hash   [Skip link to signature_hash](https://docs.portone.cloud/docs/flutter-embed\#signature_hash)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-span-stylecolorredrequiredspan-2)

The signature hash of transaction details.

* * *

##### amount   [Skip link to amount](https://docs.portone.cloud/docs/flutter-embed\#amount)

###### _double · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#double-%C2%B7-span-stylecolorredrequiredspan)

The amount of the transaction.

* * *

##### currency   [Skip link to currency](https://docs.portone.cloud/docs/flutter-embed\#currency)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-span-stylecolorredrequiredspan-3)

The currency of the transaction.

* * *

##### country\_code   [Skip link to country_code](https://docs.portone.cloud/docs/flutter-embed\#country_code)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-span-stylecolorredrequiredspan-4)

The country code of the transaction.

* * *

##### billing\_details   [Skip link to billing_details](https://docs.portone.cloud/docs/flutter-embed\#billing_details)

###### _object_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#object-1)

The JSON object for billing details

> ##### billing\_name   [Skip link to billing_name](https://docs.portone.cloud/docs/flutter-embed\#billing_name)
>
> ###### _string_ · The billing first and middle name   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-the-billing-first-and-middle-name)
>
> ##### billing\_surname   [Skip link to billing_surname](https://docs.portone.cloud/docs/flutter-embed\#billing_surname)
>
> ###### _string_ · The billing last name   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-the-billing-last-name)
>
> ##### billing\_email   [Skip link to billing_email](https://docs.portone.cloud/docs/flutter-embed\#billing_email)
>
> ###### _string_ · The billing email address   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-the-billing-email-address)
>
> ##### billing\_phone   [Skip link to billing_phone](https://docs.portone.cloud/docs/flutter-embed\#billing_phone)
>
> ###### _string_ · The billing phone number   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-the-billing-phone-number)
>
> ##### billing\_address   [Skip link to billing_address](https://docs.portone.cloud/docs/flutter-embed\#billing_address)
>
> ###### _object_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#object-2)
>
> The JSON object containing full address
>
> > ##### city   [Skip link to city](https://docs.portone.cloud/docs/flutter-embed\#city)
> >
> > ###### _string_ · City name   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-city-name)
> >
> > ##### country\_code   [Skip link to country_code](https://docs.portone.cloud/docs/flutter-embed\#country_code-1)
> >
> > ###### _string_ · 2-digit country code   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-2-digit-country-code)
> >
> > ##### country\_name   [Skip link to country_name](https://docs.portone.cloud/docs/flutter-embed\#country_name)
> >
> > ###### _string_ · Full country name   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-full-country-name)
> >
> > ##### locale   [Skip link to locale](https://docs.portone.cloud/docs/flutter-embed\#locale)
> >
> > ###### _string_ · Region locale   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-region-locale)
> >
> > ##### line\_1   [Skip link to line_1](https://docs.portone.cloud/docs/flutter-embed\#line_1)
> >
> > ###### _string_ · Line 1 of the address   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-line-1-of-the-address)
> >
> > ##### line\_2   [Skip link to line_2](https://docs.portone.cloud/docs/flutter-embed\#line_2)
> >
> > ###### _string_ · Line 2 of the address   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-line-2-of-the-address)
> >
> > ##### postal\_code   [Skip link to postal_code](https://docs.portone.cloud/docs/flutter-embed\#postal_code)
> >
> > ###### _string_ · Postal code of the area   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-postal-code-of-the-area)
> >
> > ##### state   [Skip link to state](https://docs.portone.cloud/docs/flutter-embed\#state)
> >
> > ###### _string_ · State/province of the country   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-stateprovince-of-the-country)

* * *

##### shipping\_details   [Skip link to shipping_details](https://docs.portone.cloud/docs/flutter-embed\#shipping_details)

###### _object_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#object-3)

The JSON object for shipping details

> ##### shipping\_name   [Skip link to shipping_name](https://docs.portone.cloud/docs/flutter-embed\#shipping_name)
>
> ###### _string_ · The shipping first and middle name   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-the-shipping-first-and-middle-name)
>
> ##### shipping\_surname   [Skip link to shipping_surname](https://docs.portone.cloud/docs/flutter-embed\#shipping_surname)
>
> ###### _string_ · The shipping last name   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-the-shipping-last-name)
>
> ##### shipping\_email   [Skip link to shipping_email](https://docs.portone.cloud/docs/flutter-embed\#shipping_email)
>
> ###### _string_ · The shipping email address   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-the-shipping-email-address)
>
> ##### shipping\_phone   [Skip link to shipping_phone](https://docs.portone.cloud/docs/flutter-embed\#shipping_phone)
>
> ###### _string_ · The shipping phone number   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-the-shipping-phone-number)
>
> ##### shipping\_address   [Skip link to shipping_address](https://docs.portone.cloud/docs/flutter-embed\#shipping_address)
>
> ###### _object_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#object-4)
>
> The JSON object containing full address
>
> > ##### city   [Skip link to city](https://docs.portone.cloud/docs/flutter-embed\#city-1)
> >
> > ###### _string_ · City name   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-city-name-1)
> >
> > ##### country\_code   [Skip link to country_code](https://docs.portone.cloud/docs/flutter-embed\#country_code-2)
> >
> > ###### _string_ · 2-digit country code   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-2-digit-country-code-1)
> >
> > ##### country\_name   [Skip link to country_name](https://docs.portone.cloud/docs/flutter-embed\#country_name-1)
> >
> > ###### _string_ · Full country name   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-full-country-name-1)
> >
> > ##### locale   [Skip link to locale](https://docs.portone.cloud/docs/flutter-embed\#locale-1)
> >
> > ###### _string_ · Region locale   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-region-locale-1)
> >
> > ##### line\_1   [Skip link to line_1](https://docs.portone.cloud/docs/flutter-embed\#line_1-1)
> >
> > ###### _string_ · Line 1 of the address   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-line-1-of-the-address-1)
> >
> > ##### line\_2   [Skip link to line_2](https://docs.portone.cloud/docs/flutter-embed\#line_2-1)
> >
> > ###### _string_ · Line 2 of the address   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-line-2-of-the-address-1)
> >
> > ##### postal\_code   [Skip link to postal_code](https://docs.portone.cloud/docs/flutter-embed\#postal_code-1)
> >
> > ###### _string_ · Postal code of the area   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-postal-code-of-the-area-1)
> >
> > ##### state   [Skip link to state](https://docs.portone.cloud/docs/flutter-embed\#state-1)
> >
> > ###### _string_ · State/province of the country   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-stateprovince-of-the-country-1)

* * *

##### order\_details   [Skip link to order_details](https://docs.portone.cloud/docs/flutter-embed\#order_details)

###### _array of objects_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#array-of-objects)

The JSON array for order details

> ##### id   [Skip link to id](https://docs.portone.cloud/docs/flutter-embed\#id)
>
> ###### _string_ · The unique identifier of the order item   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-the-unique-identifier-of-the-order-item)
>
> ##### price   [Skip link to price](https://docs.portone.cloud/docs/flutter-embed\#price)
>
> ###### _double_ · The price of the product   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#double-%C2%B7-the-price-of-the-product)
>
> ##### name   [Skip link to name](https://docs.portone.cloud/docs/flutter-embed\#name-1)
>
> ###### _string_ · The name of the product   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-the-name-of-the-product)
>
> ##### quantity   [Skip link to quantity](https://docs.portone.cloud/docs/flutter-embed\#quantity)
>
> ###### _integer_ · The quantity of the product   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#integer-%C2%B7-the-quantity-of-the-product)
>
> ##### image   [Skip link to image](https://docs.portone.cloud/docs/flutter-embed\#image)
>
> ###### _string_ · The URL of the product image   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-the-url-of-the-product-image)

* * *

##### success\_url   [Skip link to success_url](https://docs.portone.cloud/docs/flutter-embed\#success_url)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-span-stylecolorredrequiredspan-5)

The URL of the success page hosted by the merchant.

* * *

##### failure\_url   [Skip link to failure_url](https://docs.portone.cloud/docs/flutter-embed\#failure_url)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-span-stylecolorredrequiredspan-6)

The URL of the failure page hosted by the merchant.

* * *

##### expiry\_hours   [Skip link to expiry_hours](https://docs.portone.cloud/docs/flutter-embed\#expiry_hours)

###### _int · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#int-%C2%B7-span-stylecolorredrequiredspan)

The expiry time in hours for the checkout session.

* * *

##### redirect\_url   [Skip link to redirect_url](https://docs.portone.cloud/docs/flutter-embed\#redirect_url)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-span-stylecolorredrequiredspan-7)

The URL for redirection after the transaction.

* * *

##### environment   [Skip link to environment](https://docs.portone.cloud/docs/flutter-embed\#environment)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#string-%C2%B7-span-stylecolorredrequiredspan-8)

The environment for the transaction, either sandbox or live.

* * *

# Possible Error Scenarios:   [Skip link to Possible Error Scenarios:](https://docs.portone.cloud/docs/flutter-embed\#possible-error-scenarios)

### `INVALID_UNAUTHORIZED_JWT_TOKEN_ERROR`   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#invalid_unauthorized_jwt_token_error)

1. Ensure that the PortOne Key and Secret Key belong to the same account.
2. Confirm that the Secret Key has not been altered.
3. Verify that the `Bearer` keyword precedes the generated token with a space. Example: `Bearer $jwtToken`.
4. Check if the token expiration time is after the current time.

### `INVALID_UNAUTHORIZED_TRANSACTION_SIGNATURE_ERROR`   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#invalid_unauthorized_transaction_signature_error)

1. Validate if all parameters align with the payload/request.
2. Ensure that the PortOne key matches with the payload and the account.

### `INVALID_UNAUTHORIZED_TRANSACTION_IAMPORTKEY_ERROR`   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#invalid_unauthorized_transaction_iamportkey_error)

1. Confirm that the PortOne key matches with the payload and the account.

### `INVALID_PAYMENT_CHANNEL`   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#invalid_payment_channel)

1. Validate that the payment channels and methods included in the payload are enabled in the PortOne portal.

### `INVALID_ENVIRONMENT`   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#invalid_environment)

1. Verify that an environment ( `sandbox` or `live`) has been specified.

### `Summation of order value, tax, duties, shipping, and discount should equal the total amount`   [Skip link to [object Object]](https://docs.portone.cloud/docs/flutter-embed\#summation-of-order-value-tax-duties-shipping-and-discount-should-equal-the-total-amount)

1. If items are provided, ensure that the values match the total amount calculation formula: `sum(items price * items quantity) + shipping charge - discount = amount`.
2. Mandatory parameters in the payload:
   - price
   - promo\_discount (0 accepted)
   - shipping\_charges (0 accepted)
