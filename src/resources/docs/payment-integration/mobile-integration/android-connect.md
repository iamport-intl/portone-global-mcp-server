---
url: "https://docs.portone.cloud/docs/android-connect"
title: "Android Connect"
---

The PortOne Android SDK simplifies the integration of the PortOne Payment Gateway into your Android app, offering a secure, reliable, and efficient way to accept payments. With this SDK, you can seamlessly connect your app to a variety of payment channels, providing a smooth payment experience for users.

integration\_android

![](https://cdn.loom.com/avatars/default-avatar.svg)

[integration\_android](https://www.loom.com/share/d2cedc7893234ec386123e57aead1ccf?source=embed_watch_on_loom_cta "integration_android")

Your user agent does not support the HTML5 Video element.

![](https://cdn.loom.com/avatars/default-avatar.svg)

[integration\_android](https://www.loom.com/share/d2cedc7893234ec386123e57aead1ccf?source=embed_watch_on_loom_cta "integration_android")

* * *

## Sample App   [Skip link to Sample App](https://docs.portone.cloud/docs/android-connect\#sample-app)

Check the sample app to integrate on [GitHub](https://github.com/iamport-intl/chaiport-android-sdk-merchant-demo-app)

* * *

## **Prerequisites**   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#prerequisites)

- **[Create an account](https://docs.portone.cloud/docs/create-an-account) on PortOne:**


Before proceeding with the integration, ensure you have created an account on PortOne to access their services and functionalities.
- **[Enable Payment Channels and Methods](https://docs.portone.cloud/docs/3-payment-channels-configuration)**:


Customize and enable the specific payment channels and methods that align with your business requirements and preferences.
- **Android application for the integration**:


You will need an existing Android application in which you intend to integrate the PortOne Android SDK for payment processing capabilities.
- **`authKey` to access the SDK**:


Obtain an authorization key ( `authKey`) from the PortOne Team, as it is required to securely access and utilize the features of the PortOne SDK in your Android application. `authKey` will be issued by the PortOne Team by sending us email on this **[in.dev@portone.io](mailto:in.dev@portone.io)**

* * *

## Integration   [Skip link to Integration](https://docs.portone.cloud/docs/android-connect\#integration)

Steps to integrate your Android application with PortOne Android SDK.

1. Install PortOne Android SDK and Authorise it.
2. Set the Intent Filters in the Manifests
3. Set Intent Receivers for Payment Status
4. Setup to Obtain JWT Token from the Server
5. Generate a Signature Hash for Payload

📱

Setup & Integration: Android SDK

Open Recipe

* * *

### 1\. Install PortOne Android SDK and Authorise it.   [Skip link to 1. Install PortOne Android SDK and Authorise it.](https://docs.portone.cloud/docs/android-connect\#1-install-portone-android-sdk-and-authorise-it)

To begin, add the PortOne Android SDK to your project by adding the dependency to your build.gradle file.

- In the `build.gradle` (:app) file, add:

Kotlin

```rdmd-code lang-kotlin theme-light

implementation 'com.github.iamport-intl:portone-android-native-sdk:V3.0.48'

```

- Next, add the authKey to your `gradle.properties` file:.

Kotlin

```rdmd-code lang-kotlin theme-light

authKey= XXXXXXXXXXXXXXXXXXXXXX

```

- Authorize the SDK by adding the provided authKey to your `gradle.properties` file, which you can request by emailing the PortOne team at [in.dev@portone.io](mailto:in.dev@portone.io).

Then, configure your `build.gradle` (:Project) or `settings.gradle` to reference the key:

1. **`Build.gradle` (:Project) Setup:**



Kotlin





```rdmd-code lang-kotlin theme-light

repositories {
           maven { url '<https://maven.google.com/>' }
           maven{
               url '<https://jitpack.io>'
               credentials { username authKey }
           }
       }

```

2. **`Settings.gradle` Setup:**



Kotlin





```rdmd-code lang-kotlin theme-light

dependencyResolutionManagement {
       repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
       repositories {
           google()
           maven {
               url 'https://maven.google.com/'
           }
           maven {
               url 'https://jitpack.io'
               credentials { username authKey } // Add your generated authKey here
           }
       }
}

```


Include the necessary code in your `build.gradle ()` file, specifying the project dependency and Kotlin version.

Kotlin

```rdmd-code lang-kotlin theme-light

buildscript {
    ext.kotlin_version = "1.5.10" // Specify the Kotlin version here

    repositories {
        google()
        jcenter()
    }
    dependencies {
        classpath "com.android.tools.build:gradle:4.2.2" // Add the Android Gradle plugin version

        // Add any other dependencies needed for your project setup
    }
}

```

### 2\. Set the Intent Filters in the Manifests   [Skip link to 2. Set the Intent Filters in the Manifests](https://docs.portone.cloud/docs/android-connect\#2-set-the-intent-filters-in-the-manifests)

- Next, you need to add intent filters in your `AndroidManifest.xml` to handle payment status updates and navigate users back to your app after payment.



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


This setup ensures your app can handle the redirection URL after payment completion. For detailed instructions, refer to the deep linking guide [here](https://developer.android.com/training/app-links/deep-linking).

### 3\. Set Intent Receivers for Payment Status:   [Skip link to 3. Set Intent Receivers for Payment Status:](https://docs.portone.cloud/docs/android-connect\#3-set-intent-receivers-for-payment-status)

You’ll need to handle the payment status response using the `onActivityResult` method. Here’s an example:.

Kotlin

```rdmd-code lang-kotlin theme-light

override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)

        if (resultCode == RESULT_CODE && data != null) {
            when (requestCode) {
                PAYOUT_REQUEST_CODE, PAYMENT_STATUS_REQUEST_CODE -> {
                    val paymentStatus: CheckoutConnectDto.UpdatedPaymentStatusResponse? =
                        (data.getSerializableExtra(PAYMENT_STATUS)
                            ?: "Empty") as CheckoutConnectDto.UpdatedPaymentStatusResponse
                }

            }

        }
    }

```

This method receives the payment status and updates the user interface with the payment result.

### 4\. Have a setup to get JWT token from the server   [Skip link to 4. Have a setup to get JWT token from the server](https://docs.portone.cloud/docs/android-connect\#4-have-a-setup-to-get-jwt-token-from-the-server)

The PortOne SDK requires a JWT token for authentication. You need to implement a server-side process to generate this token and retrieve it in your Android app.

**Steps:**

1. Implement server logic to generate a JWT token.
2. In your Android app, fetch the token to process the checkout.

The process for generating a JWT token can be found in detail [here](https://docs-v2.portone.cloud/docs/jwt-authentication)

### 5\. Generate Signture Hash   [Skip link to 5. Generate Signture Hash](https://docs.portone.cloud/docs/android-connect\#5-generate-signture-hash)

To generate a signature hash, create it on the server side using a secret key that will be included in the payload. This ensures secure processing of transactions.

> **Note**: Generating a signature hash is optional if you have whitelisted your app while initializing the checkout. Detailed instructions on this are provided in the checkout setup section.

**Steps:**

1. Implement server logic to generate a signature hash.
2. In your Android app, fetch the signature hash to process the checkout.

The process for generating a Signature Hash can be found in detail [here](https://docs-v2.portone.cloud/docs/payment-request)

* * *

# Android Connect   [Skip link to Android Connect](https://docs.portone.cloud/docs/android-connect\#android-connect)

The **Android Connect SDK** helps merchants add payment features to their Android apps. Unlike other SDKs that come with ready-made user interfaces, the Connect SDK gives you full control to design your own checkout screen to match your brand’s look and feel.

This SDK focuses only on the important payment functions, allowing you to create a unique user experience for your customers. It provides all the tools you need to handle payments efficiently while giving you the flexibility to customize how everything looks and works in your app.

checkout\_android\_connect

![](https://cdn.loom.com/avatars/default-avatar.svg)

[checkout\_android\_connect](https://www.loom.com/share/eeebc28ce25d4140b78207a3b864cb48 "checkout_android_connect")

3 min

0 views

0

[Open video in Loom](https://www.loom.com/share/eeebc28ce25d4140b78207a3b864cb48 "Open video in Loom")

1.2×

3 min⚡️4 min 14 sec3 min 23 sec2 min 49 sec2 min 15 sec1 min 59 sec1 min 41 sec1 min 21 sec

Your user agent does not support the HTML5 Video element.

![](https://cdn.loom.com/avatars/default-avatar.svg)

[checkout\_android\_connect](https://www.loom.com/share/eeebc28ce25d4140b78207a3b864cb48 "checkout_android_connect")

3 min

0 views

0

[Open video in Loom](https://www.loom.com/share/eeebc28ce25d4140b78207a3b864cb48 "Open video in Loom")

1.2×

3 min⚡️4 min 14 sec3 min 23 sec2 min 49 sec2 min 15 sec1 min 59 sec1 min 41 sec1 min 21 sec

## Overview   [Skip link to Overview](https://docs.portone.cloud/docs/android-connect\#overview)

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

Checkout: Android Connect

Open Recipe

* * *

## Methods and Applications   [Skip link to Methods and Applications](https://docs.portone.cloud/docs/android-connect\#methods-and-applications)

### 1\. Initialize the SDK   [Skip link to 1. Initialize the SDK](https://docs.portone.cloud/docs/android-connect\#1-initialize-the-sdk)

To begin using the Android Connect SDK, create an instance of the `PortOne` SDK in the activity where the payment checkout process will take place. Initialize the SDK by specifying the environment—either `sandbox` for testing or `live` for production.

Kotlin

```rdmd-code lang-kotlin theme-light

class CheckoutActivity : AppCompatActivity() {

    // Step 1: Set the environment to "sandbox" for testing or "live" for production
    private var environment = "sandbox" // Set environment to "sandbox" for testing
    // For live environment uncomment the line below and comment the sandbox line
    // private var environment = "live" // Set environment to "live" for production

    // Step 2: Declare the PortOne instance
    private lateinit var portOne: PortOne

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_checkout)

        // Step 3: Initialize the PortOne SDK with the selected environment
        portOne = PortOneImpl(
            context = this,
            environment = environment,
            applicationId = BuildConfig.APPLICATION_ID)
    }
}

```

Parameters:

- `context`: The activity context where the SDK is being initialized.
- `environment`: Defines the environment in which the SDK operates.

  - `"sandbox"` for testing
  - `"live"` for production
- `applicationId`: (Optional) The unique ID of your application.

> **Note**: The `applicationId` parameter is required if the merchant wants to whitelist the app. When an app is whitelisted, the signature hash generation becomes optional, as the app is pre-authorized to securely process payments without it.

* * *

### 2\. Fetch Enabled Payment Methods and Channels   [Skip link to 2. Fetch Enabled Payment Methods and Channels](https://docs.portone.cloud/docs/android-connect\#2-fetch-enabled-payment-methods-and-channels)

This method retrieves the available payment channels and methods that can be used for the checkout process.

Kotlin

```rdmd-code lang-kotlin theme-light

portOne.getPaymentMethods(
    portoneKey = portoneKey,           // Required: Merchant key
    subMerchantKey = subMerchantKey,   // Optional: Sub-merchant key (if applicable)
    currency = currency,               // Required: Currency (e.g., "USD", "KRW")
    object : ApiCallbackInterface<PaymentDto.PaymentMethodResponse> {
        override fun onSucceed(response: PaymentDto.PaymentMethodResponse) {
            LoggerUtil.info("Payment methods retrieved successfully")
        }
        override fun onFailure(errorCode: Int?, status: String?, errorMessage: String, throwable: Throwable) {
            LoggerUtil.info("Failed to retrieve payment methods: $errorMessage")
        }
    }
)

```

| Parameter | Data Type | Description |
| --- | --- | --- |
| `portoneKey` | String | The merchant's unique identifier. (mandatory) |
| `subMerchantKey` | String | The sub-merchant's identifier. (optional) |
| `currency` | String | The currency for the transaction. (mandatory) |

* * *

### 3\. Checkout   [Skip link to 3. Checkout](https://docs.portone.cloud/docs/android-connect\#3-checkout)

### Checkout with All Payment Methods   [Skip link to Checkout with All Payment Methods](https://docs.portone.cloud/docs/android-connect\#checkout-with-all-payment-methods)

The **Checkout with All Payment Methods** allows you to process payments using various methods, including:

- Wallets
- Saved Cards
- Installments
- Bank Transfers
- Direct Bank Transfers

This method supports multiple payment channels and methods, including customer details (billing/shipping), order details, and redirection URLs for handling success or failure of transactions.

Kotlin

```rdmd-code lang-kotlin theme-light

val checkoutRequest = CheckoutConnectDto.CheckoutRequest(
    portoneKey = "your_portone_key",
    paymentChannel = "paymentChannel",
    paymentMethod = "paymentMethod",
    merchantOrderId = "merchant_12345",
    amount = 100.0,
    currency = "USD",
    signatureHash = "example_signature_hash",
    billingDetails = billingDetails,
    shippingDetails = shippingDetails,
    orderDetails = orderDetails,
    successUrl = "https://yourapp.com/payment/success",
    failureUrl = "https://yourapp.com/payment/failure",
    redirectUrl = "https://yourapp.com/redirect",
    environment = "sandbox",
    source = "mobile",
    bankDetails = bankDetails,
    directBankTransferDetails = dbtDetails,
    transactionType = "payment",
    cardDetails = cardDetails,
    description = "Test transaction for order 12345",
    isRoutingEnabled = true,
    routingParams = routingParams
)

portOne.checkout(checkoutRequest)

```

### Parameter list for CheckoutEmbedDto.CheckoutUsingEmbedRequest   [Skip link to Parameter list for CheckoutEmbedDto.CheckoutUsingEmbedRequest](https://docs.portone.cloud/docs/android-connect\#parameter-list-for-checkoutembeddtocheckoutusingembedrequest)

##### portone\_key   [Skip link to portone_key](https://docs.portone.cloud/docs/android-connect\#portone_key)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-span-stylecolorredrequiredspan)

The unique PortOne key for the merchant.

* * *

##### merchant\_details   [Skip link to merchant_details](https://docs.portone.cloud/docs/android-connect\#merchant_details)

###### _object_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#object)

The JSON object for merchant details

> ##### name   [Skip link to name](https://docs.portone.cloud/docs/android-connect\#name)
>
> ###### _string_ · The name of the merchant   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-the-name-of-the-merchant)
>
> ##### logo   [Skip link to logo](https://docs.portone.cloud/docs/android-connect\#logo)
>
> ###### _string_ · The logo of the merchant   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-the-logo-of-the-merchant)
>
> ##### back\_url   [Skip link to back_url](https://docs.portone.cloud/docs/android-connect\#back_url)
>
> ###### _string_ · The URL of the merchant site   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-the-url-of-the-merchant-site)
>
> ##### promo\_code   [Skip link to promo_code](https://docs.portone.cloud/docs/android-connect\#promo_code)
>
> ###### _string_ · The promo code enabled on the order by the merchant   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-the-promo-code-enabled-on-the-order-by-the-merchant)
>
> ##### promo\_discount   [Skip link to promo_discount](https://docs.portone.cloud/docs/android-connect\#promo_discount)
>
> ###### _int_ · The promo code discount amount on the order by the merchant   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#int-%C2%B7-the-promo-code-discount-amount-on-the-order-by-the-merchant)
>
> ##### shipping\_charges   [Skip link to shipping_charges](https://docs.portone.cloud/docs/android-connect\#shipping_charges)
>
> ###### _double_ · The shipping charges set by the merchant   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#double-%C2%B7-the-shipping-charges-set-by-the-merchant)

* * *

##### merchant\_order\_id   [Skip link to merchant_order_id](https://docs.portone.cloud/docs/android-connect\#merchant_order_id)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-span-stylecolorredrequiredspan-1)

The unique merchant order reference generated by the merchant.

* * *

##### signature\_hash   [Skip link to signature_hash](https://docs.portone.cloud/docs/android-connect\#signature_hash)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-span-stylecolorredrequiredspan-2)

The signature hash of transaction details.

* * *

##### amount   [Skip link to amount](https://docs.portone.cloud/docs/android-connect\#amount)

###### _double · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#double-%C2%B7-span-stylecolorredrequiredspan)

The amount of the transaction.

* * *

##### currency   [Skip link to currency](https://docs.portone.cloud/docs/android-connect\#currency)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-span-stylecolorredrequiredspan-3)

The currency of the transaction.

* * *

##### country\_code   [Skip link to country_code](https://docs.portone.cloud/docs/android-connect\#country_code)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-span-stylecolorredrequiredspan-4)

The country code of the transaction.

* * *

##### billing\_details   [Skip link to billing_details](https://docs.portone.cloud/docs/android-connect\#billing_details)

###### _object_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#object-1)

The JSON object for billing details

> ##### billing\_name   [Skip link to billing_name](https://docs.portone.cloud/docs/android-connect\#billing_name)
>
> ###### _string_ · The billing first and middle name   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-the-billing-first-and-middle-name)
>
> ##### billing\_surname   [Skip link to billing_surname](https://docs.portone.cloud/docs/android-connect\#billing_surname)
>
> ###### _string_ · The billing last name   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-the-billing-last-name)
>
> ##### billing\_email   [Skip link to billing_email](https://docs.portone.cloud/docs/android-connect\#billing_email)
>
> ###### _string_ · The billing email address   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-the-billing-email-address)
>
> ##### billing\_phone   [Skip link to billing_phone](https://docs.portone.cloud/docs/android-connect\#billing_phone)
>
> ###### _string_ · The billing phone number   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-the-billing-phone-number)
>
> ##### billing\_address   [Skip link to billing_address](https://docs.portone.cloud/docs/android-connect\#billing_address)
>
> ###### _object_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#object-2)
>
> The JSON object containing full address
>
> > ##### city   [Skip link to city](https://docs.portone.cloud/docs/android-connect\#city)
> >
> > ###### _string_ · City name   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-city-name)
> >
> > ##### country\_code   [Skip link to country_code](https://docs.portone.cloud/docs/android-connect\#country_code-1)
> >
> > ###### _string_ · 2-digit country code   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-2-digit-country-code)
> >
> > ##### country\_name   [Skip link to country_name](https://docs.portone.cloud/docs/android-connect\#country_name)
> >
> > ###### _string_ · Full country name   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-full-country-name)
> >
> > ##### locale   [Skip link to locale](https://docs.portone.cloud/docs/android-connect\#locale)
> >
> > ###### _string_ · Region locale   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-region-locale)
> >
> > ##### line\_1   [Skip link to line_1](https://docs.portone.cloud/docs/android-connect\#line_1)
> >
> > ###### _string_ · Line 1 of the address   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-line-1-of-the-address)
> >
> > ##### line\_2   [Skip link to line_2](https://docs.portone.cloud/docs/android-connect\#line_2)
> >
> > ###### _string_ · Line 2 of the address   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-line-2-of-the-address)
> >
> > ##### postal\_code   [Skip link to postal_code](https://docs.portone.cloud/docs/android-connect\#postal_code)
> >
> > ###### _string_ · Postal code of the area   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-postal-code-of-the-area)
> >
> > ##### state   [Skip link to state](https://docs.portone.cloud/docs/android-connect\#state)
> >
> > ###### _string_ · State/province of the country   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-stateprovince-of-the-country)

* * *

##### shipping\_details   [Skip link to shipping_details](https://docs.portone.cloud/docs/android-connect\#shipping_details)

###### _object_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#object-3)

The JSON object for shipping details

> ##### shipping\_name   [Skip link to shipping_name](https://docs.portone.cloud/docs/android-connect\#shipping_name)
>
> ###### _string_ · The shipping first and middle name   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-the-shipping-first-and-middle-name)
>
> ##### shipping\_surname   [Skip link to shipping_surname](https://docs.portone.cloud/docs/android-connect\#shipping_surname)
>
> ###### _string_ · The shipping last name   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-the-shipping-last-name)
>
> ##### shipping\_email   [Skip link to shipping_email](https://docs.portone.cloud/docs/android-connect\#shipping_email)
>
> ###### _string_ · The shipping email address   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-the-shipping-email-address)
>
> ##### shipping\_phone   [Skip link to shipping_phone](https://docs.portone.cloud/docs/android-connect\#shipping_phone)
>
> ###### _string_ · The shipping phone number   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-the-shipping-phone-number)
>
> ##### shipping\_address   [Skip link to shipping_address](https://docs.portone.cloud/docs/android-connect\#shipping_address)
>
> ###### _object_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#object-4)
>
> The JSON object containing full address
>
> > ##### city   [Skip link to city](https://docs.portone.cloud/docs/android-connect\#city-1)
> >
> > ###### _string_ · City name   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-city-name-1)
> >
> > ##### country\_code   [Skip link to country_code](https://docs.portone.cloud/docs/android-connect\#country_code-2)
> >
> > ###### _string_ · 2-digit country code   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-2-digit-country-code-1)
> >
> > ##### country\_name   [Skip link to country_name](https://docs.portone.cloud/docs/android-connect\#country_name-1)
> >
> > ###### _string_ · Full country name   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-full-country-name-1)
> >
> > ##### locale   [Skip link to locale](https://docs.portone.cloud/docs/android-connect\#locale-1)
> >
> > ###### _string_ · Region locale   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-region-locale-1)
> >
> > ##### line\_1   [Skip link to line_1](https://docs.portone.cloud/docs/android-connect\#line_1-1)
> >
> > ###### _string_ · Line 1 of the address   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-line-1-of-the-address-1)
> >
> > ##### line\_2   [Skip link to line_2](https://docs.portone.cloud/docs/android-connect\#line_2-1)
> >
> > ###### _string_ · Line 2 of the address   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-line-2-of-the-address-1)
> >
> > ##### postal\_code   [Skip link to postal_code](https://docs.portone.cloud/docs/android-connect\#postal_code-1)
> >
> > ###### _string_ · Postal code of the area   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-postal-code-of-the-area-1)
> >
> > ##### state   [Skip link to state](https://docs.portone.cloud/docs/android-connect\#state-1)
> >
> > ###### _string_ · State/province of the country   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-stateprovince-of-the-country-1)

* * *

##### order\_details   [Skip link to order_details](https://docs.portone.cloud/docs/android-connect\#order_details)

###### _array of objects_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#array-of-objects)

The JSON array for order details

> ##### id   [Skip link to id](https://docs.portone.cloud/docs/android-connect\#id)
>
> ###### _string_ · The unique identifier of the order item   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-the-unique-identifier-of-the-order-item)
>
> ##### price   [Skip link to price](https://docs.portone.cloud/docs/android-connect\#price)
>
> ###### _double_ · The price of the product   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#double-%C2%B7-the-price-of-the-product)
>
> ##### name   [Skip link to name](https://docs.portone.cloud/docs/android-connect\#name-1)
>
> ###### _string_ · The name of the product   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-the-name-of-the-product)
>
> ##### quantity   [Skip link to quantity](https://docs.portone.cloud/docs/android-connect\#quantity)
>
> ###### _integer_ · The quantity of the product   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#integer-%C2%B7-the-quantity-of-the-product)
>
> ##### image   [Skip link to image](https://docs.portone.cloud/docs/android-connect\#image)
>
> ###### _string_ · The URL of the product image   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-the-url-of-the-product-image)

* * *

##### success\_url   [Skip link to success_url](https://docs.portone.cloud/docs/android-connect\#success_url)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-span-stylecolorredrequiredspan-5)

The URL of the success page hosted by the merchant.

* * *

##### failure\_url   [Skip link to failure_url](https://docs.portone.cloud/docs/android-connect\#failure_url)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-span-stylecolorredrequiredspan-6)

The URL of the failure page hosted by the merchant.

* * *

##### expiry\_hours   [Skip link to expiry_hours](https://docs.portone.cloud/docs/android-connect\#expiry_hours)

###### _int · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#int-%C2%B7-span-stylecolorredrequiredspan)

The expiry time in hours for the checkout session.

* * *

##### redirect\_url   [Skip link to redirect_url](https://docs.portone.cloud/docs/android-connect\#redirect_url)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-span-stylecolorredrequiredspan-7)

The URL for redirection after the transaction.

* * *

##### environment   [Skip link to environment](https://docs.portone.cloud/docs/android-connect\#environment)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-span-stylecolorredrequiredspan-8)

The environment for the transaction, either sandbox or live.

* * *

### Checkout Using a New Credit Card   [Skip link to Checkout Using a New Credit Card](https://docs.portone.cloud/docs/android-connect\#checkout-using-a-new-credit-card)

The **Checkout Using a New Credit Card** method is specifically designed for transactions where the customer enters new credit or debit card details.

Kotlin

```rdmd-code lang-kotlin theme-light

kotlin
Copy code
val newCard = CheckoutConnectDto.NewCard(
    cardNumber = "4111111111111111",    // Example card number
    cardType = "VISA",                  // Card type, e.g., VISA, MASTERCARD
    cardholderName = "John Doe",        // Cardholder's name
    expiryMonth = "12",                 // Expiration month
    expiryYear = "2025",                // Expiration year
    serviceCode = "123",                // CVV/CVC code
    environment = "sandbox",            // Set environment: sandbox or live
    portoneKey = "your_portone_key"     // Merchant’s unique identifier
)

val checkoutRequest = CheckoutConnectDto.CheckoutRequest()

portOne.checkoutUsingNewCard(
    paymentDetails = checkoutRequest,
    newCard = newCard,
    subMerchantKey = "your_sub_merchant_key",
    token = "your_auth_token"
)

```

| Parameter | Data Type | Description |
| --- | --- | --- |
| `paymentDetails` | CheckoutRequest | Main checkout request details including amount, currency, etc. |
| `newCard` | NewCard | New card details for the payment. |
| `subMerchantKey` | String | Optional sub-merchant key used by master merchants. |
| `token` | String | Authentication token for secure processing. |

### Parameter list for CheckoutConnectDto.NewCard   [Skip link to Parameter list for CheckoutConnectDto.NewCard](https://docs.portone.cloud/docs/android-connect\#parameter-list-for-checkoutconnectdtonewcard)

##### cardNumber   [Skip link to cardNumber](https://docs.portone.cloud/docs/android-connect\#cardnumber)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-span-stylecolorredrequiredspan-9)

The card number to be used for the transaction. Example: `4111111111111111`.

* * *

##### cardType   [Skip link to cardType](https://docs.portone.cloud/docs/android-connect\#cardtype)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-span-stylecolorredrequiredspan-10)

The type of the card (e.g., `VISA`, `MASTERCARD`).

* * *

##### cardholderName   [Skip link to cardholderName](https://docs.portone.cloud/docs/android-connect\#cardholdername)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-span-stylecolorredrequiredspan-11)

The name of the cardholder. Example: `John Doe`.

* * *

##### expiryMonth   [Skip link to expiryMonth](https://docs.portone.cloud/docs/android-connect\#expirymonth)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-span-stylecolorredrequiredspan-12)

The expiration month of the card in two-digit format. Example: `12`.

* * *

##### expiryYear   [Skip link to expiryYear](https://docs.portone.cloud/docs/android-connect\#expiryyear)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-span-stylecolorredrequiredspan-13)

The expiration year of the card in four-digit format. Example: `2025`.

* * *

##### serviceCode   [Skip link to serviceCode](https://docs.portone.cloud/docs/android-connect\#servicecode)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-span-stylecolorredrequiredspan-14)

The CVV/CVC code of the card. Example: `123`.

* * *

##### environment   [Skip link to environment](https://docs.portone.cloud/docs/android-connect\#environment-1)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-span-stylecolorredrequiredspan-15)

The environment to use for the transaction, either `sandbox` or `live`.

* * *

##### portoneKey   [Skip link to portoneKey](https://docs.portone.cloud/docs/android-connect\#portonekey)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#string-%C2%B7-span-stylecolorredrequiredspan-16)

The unique PortOne key for the merchant. Example: `your_portone_key`.

* * *

### 4\. Making a Payment Using Saved Cards   [Skip link to 4. Making a Payment Using Saved Cards](https://docs.portone.cloud/docs/android-connect\#4-making-a-payment-using-saved-cards)

To make a payment using saved cards for the first time, this process retrieves cards linked to the user’s phone number. OTP authentication is required, making it a two-step process for initial access. After the initial retrieval, future access can use an authentication token for convenience.

* * *

### 4.1 Retrieving Saved Cards for the First Time   [Skip link to 4.1 Retrieving Saved Cards for the First Time](https://docs.portone.cloud/docs/android-connect\#41-retrieving-saved-cards-for-the-first-time)

This method retrieves saved cards by first sending an OTP to the registered phone number, followed by using the OTP for authentication to access the saved cards.

* * *

### Step 1: Send OTP to Registered Phone Number   [Skip link to Step 1: Send OTP to Registered Phone Number](https://docs.portone.cloud/docs/android-connect\#step-1-send-otp-to-registered-phone-number)

Kotlin

```rdmd-code lang-kotlin theme-light

portOne.getOTP(
    phoneNo = phoneNo,
    object : ApiCallbackInterface<PaymentDto.OtpResponse> {
        override fun onSucceed(response: PaymentDto.OtpResponse) {
            LoggerUtil.info("OTP sent successfully")
        }
        override fun onFailure(errorCode: Int?, status: String?, errorMessage: String, throwable: Throwable) {
            LoggerUtil.info("Failed to send OTP: $errorMessage")
        }
    }
)

```

| Parameter | Data Type | Description |
| --- | --- | --- |
| `phoneNo` | String | User’s phone number to receive OTP. (mandatory) |

* * *

### Step 2: Retrieve Saved Cards Using OTP   [Skip link to Step 2: Retrieve Saved Cards Using OTP](https://docs.portone.cloud/docs/android-connect\#step-2-retrieve-saved-cards-using-otp)

Kotlin

```rdmd-code lang-kotlin theme-light

portOne.getSavedCards(
    token = null,
    portoneKey = portoneKey,
    phoneNo = phoneNo,
    otp = otp,
    object : ApiCallbackInterface<PaymentDto.CreditCardDetailsResponse> {
        override fun onSucceed(response: PaymentDto.CreditCardDetailsResponse) {
            LoggerUtil.info("Successfully retrieved saved cards")
        }
        override fun onFailure(errorCode: Int?, status: String?, errorMessage: String, throwable: Throwable) {
            LoggerUtil.info("Failed to retrieve saved cards: $errorMessage")
        }
    }
)

```

| Parameter | Data Type | Description |
| --- | --- | --- |
| `token` | String | Authentication token, not required for first-time retrieval. |
| `portoneKey` | String | Merchant’s unique identifier. |
| `phoneNo` | String | User’s phone number for retrieving saved cards. |
| `otp` | String | OTP sent to the phone for verification. |

* * *

### 4.2 Retrieving Saved Cards for Subsequent Access   [Skip link to 4.2 Retrieving Saved Cards for Subsequent Access](https://docs.portone.cloud/docs/android-connect\#42-retrieving-saved-cards-for-subsequent-access)

After the initial retrieval, a token is returned in the response. This token can be used instead of an OTP for future card retrievals, allowing a more streamlined authentication process.

Kotlin

```rdmd-code lang-kotlin theme-light

portOne.getSavedCards(
    token = token,
    portoneKey = portoneKey,
    phoneNo = phoneNo,
    otp = null,
    object : ApiCallbackInterface<PaymentDto.CreditCardDetailsResponse> {
        override fun onSucceed(response: PaymentDto.CreditCardDetailsResponse) {
            LoggerUtil.info("Successfully retrieved saved cards using token")
        }
        override fun onFailure(errorCode: Int?, status: String?, errorMessage: String, throwable: Throwable) {
            LoggerUtil.info("Failed to retrieve saved cards: $errorMessage")
        }
    }
)

```

| Parameter | Data Type | Description |
| --- | --- | --- |
| `token` | String | Authentication token obtained after initial retrieval. |
| `portoneKey` | String | Merchant’s unique identifier. |
| `phoneNo` | String | User’s phone number for retrieving saved cards. |
| `otp` | String | Not required for subsequent retrievals; set to `null`. |

* * *

These methods also fall under the checkout flow but require extra parameters and steps.

### Direct Bank Transfer and Instalments   [Skip link to Direct Bank Transfer and Instalments](https://docs.portone.cloud/docs/android-connect\#direct-bank-transfer-and-instalments)

To process these checkout methods, specific additional parameters and steps in the request process are required.

| Parameters | Data Type |  |
| --- | --- | --- |
| `customerName` | String | mandatory |
| `transactionTime` | String | mandatory |
| `amountPaid` | Double | mandatory |

* * *

## Merchant-Centric Card Vault   [Skip link to Merchant-Centric Card Vault](https://docs.portone.cloud/docs/android-connect\#merchant-centric-card-vault)

The Merchant-Centric Card Vault operates by enrolling merchants initially, followed by adding customers specific to each merchant. Cards are then saved based on individual customers, ensuring a personalized and secure card storage system. Several methods are available to facilitate various operations within this card vault setup.

### 1\. Add Customer   [Skip link to 1. Add Customer](https://docs.portone.cloud/docs/android-connect\#1-add-customer)

This method is used to add a customer to the Merchant-Centric Card Vault.

Kotlin

```rdmd-code lang-kotlin theme-light

portOne.addCustomer(
    token = token,
    portOneKey = portoneKey,
    subMerchantKey = subMerchantKey,
    request = PaymentDto.AddCustomerRequest(
        name = name,
        phoneNo = phoneNo,
        email = email,
        customerRef = customerRef
    ),
    object : ApiCallbackInterface<PaymentDto.AddCustomerResponse> {
        override fun onSucceed(response: PaymentDto.AddCustomerResponse) {
            val gson = Gson()
            val json = gson.toJson(response)
            LoggerUtil.info("Successful")
        }

        override fun onFailure(
            errorCode: Int?,
            status: String?,
            errorMessage: String,
            throwable: Throwable
        ) {
            LoggerUtil.info("Failed")
        }
    })

```

| Parameter | Data Type | Description |
| --- | --- | --- |
| `token` | String | Mandatory |
| `portoneKey` | String | Mandatory |
| `subMerchantKey` | String | Optional |
| `name` | String | Mandatory |
| `phoneNo` | String | Mandatory |
| `email` | String | Mandatory |
| `customerRef` | String | Mandatory |

* * *

### 2\. Save a Card for a Customer   [Skip link to 2. Save a Card for a Customer](https://docs.portone.cloud/docs/android-connect\#2-save-a-card-for-a-customer)

This method is used to save a specific card for a particular customer.

Kotlin

```rdmd-code lang-kotlin theme-light

portOne.addCardForCustomer(
    customerUUID = customerUUID,
    token = token,
    portoneKey = portoneKey,
    subMerchantKey = subMerchantKey,
    request = PaymentDto.NewCard(),
    object : ApiCallbackInterface<PaymentDto.AddCardsResponse> {
        override fun onSucceed(response: PaymentDto.AddCardsResponse) {
            LoggerUtil.info("Successful")
        }

        override fun onFailure(
            errorCode: Int?,
            status: String?,
            errorMessage: String,
            throwable: Throwable
        ) {
            LoggerUtil.info("Failed")
        }
    })

```

| Parameter | Data Type | Description |
| --- | --- | --- |
| `customerUUID` | String | Mandatory |
| `token` | String | Mandatory |
| `portoneKey` | String | Mandatory |
| `subMerchantKey` | String | Optional |

### `PaymentDto.NewCard`   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#paymentdtonewcard)

| Parameter | Data Type | Description |
| --- | --- | --- |
| `cardNumber` | String | Mandatory |
| `cardType` | String | Mandatory |
| `cardholderName` | String | Mandatory |
| `serviceCode` | String | Mandatory |
| `expiryYear` | String | Mandatory |
| `expiryMonth` | String | Mandatory |
| `environment` | String | Mandatory |
| `portoneKey` | String | Mandatory |

* * *

### 3\. Retrieve Stored Cards for a Customer   [Skip link to 3. Retrieve Stored Cards for a Customer](https://docs.portone.cloud/docs/android-connect\#3-retrieve-stored-cards-for-a-customer)

This method retrieves the list of cards stored for a specific customer.

Kotlin

```rdmd-code lang-kotlin theme-light

portOne.listCardsForCustomer(
    customerUUID = customerUUID,
    token = token,
    portoneKey = portoneKey,
    subMerchantKey = subMerchantKey,
    object : ApiCallbackInterface<PaymentDto.ListCardsForCustomerResponse> {
        override fun onSucceed(response: PaymentDto.ListCardsForCustomerResponse) {
            LoggerUtil.info("Successful")
        }

        override fun onFailure(
            errorCode: Int?,
            status: String?,
            errorMessage: String,
            throwable: Throwable
        ) {
            LoggerUtil.info("Failed")
        }
    })

```

| Parameter | Data Type | Description |
| --- | --- | --- |
| `customerUUID` | String | Mandatory |
| `token` | String | Mandatory |
| `portoneKey` | String | Mandatory |
| `subMerchantKey` | String | Optional |

* * *

### 4\. Delete a Card for a Customer   [Skip link to 4. Delete a Card for a Customer](https://docs.portone.cloud/docs/android-connect\#4-delete-a-card-for-a-customer)

This method deletes a specific card for an individual customer.

Kotlin

```rdmd-code lang-kotlin theme-light

portOne.deleteCardForCustomer(
    customerUUID = customerUUID,
    token = token,
    portoneKey = portoneKey,
    subMerchantKey = subMerchantKey,
    request = PaymentDto.DeleteCardRequest(token = cardToken),
    object : ApiCallbackInterface<PaymentDto.GenericResponse> {
        override fun onSucceed(response: PaymentDto.GenericResponse) {
            LoggerUtil.info("Successful")
        }

        override fun onFailure(
            errorCode: Int?,
            status: String?,
            errorMessage: String,
            throwable: Throwable
        ) {
            LoggerUtil.info("Failed")
        }
    })

```

| Parameter | Data Type | Description |
| --- | --- | --- |
| `customerUUID` | String | Mandatory |
| `token` | String | Mandatory |
| `portoneKey` | String | Mandatory |
| `subMerchantKey` | String | Optional |
| `cardToken` | String | Mandatory |

* * *

### 5\. Get Customer Information   [Skip link to 5. Get Customer Information](https://docs.portone.cloud/docs/android-connect\#5-get-customer-information)

This method retrieves information about a specific customer.

Kotlin

```rdmd-code lang-kotlin theme-light

portOne.getCustomer(
    token = token,
    portOneKey = portoneKey,
    customerUUID = customerUUID,
    getCustomerCallback = object : ApiCallbackInterface<CheckoutConnectDto.GetCustomerDataResponse> {
        override fun onSucceed(response: CheckoutConnectDto.GetCustomerDataResponse) {
            LoggerUtil.info("Successfully retrieved customer data")
        }

        override fun onFailure(
            errorCode: Int?,
            status: String?,
            errorMessage: String,
            throwable: Throwable
        ) {
            LoggerUtil.info("Failed to retrieve customer data: $errorMessage")
        }
    }
)

```

| Parameter | Data Type | Description |
| --- | --- | --- |
| `token` | String | Mandatory |
| `portOneKey` | String | Mandatory |
| `customerUUID` | String | Unique identifier for the customer |

* * *

## Pre-authorization and Payment Capture   [Skip link to Pre-authorization and Payment Capture](https://docs.portone.cloud/docs/android-connect\#pre-authorization-and-payment-capture)

During **Pre-authorization**, the transaction is initially approved, allowing funds to be reserved. At a later time or within specified days, the payment can be finalized using the **Capture API**.

To designate a transaction for pre-authorization, configure the `transactionType` parameter in the payload as shown:

`transactionType = "PREAUTH"`

Kotlin

```rdmd-code lang-kotlin theme-light

kotlin
Copy code
val paymentDetails = PaymentDto.CheckoutUsingTokenizationRequest()
paymentDetails.transactionType = "PREAUTH"

```

> ## 💡  Note: Pre-authorization is applicable only for credit card payments and is designed to provide a smooth workflow.

* * *

### Capturing a Pre-authorized Transaction   [Skip link to Capturing a Pre-authorized Transaction](https://docs.portone.cloud/docs/android-connect\#capturing-a-pre-authorized-transaction)

Once a transaction has been pre-authorized, the following method is used to capture (finalize) the transaction:

Kotlin

```rdmd-code lang-kotlin theme-light

portOne.captureTransaction(
    orderReference = orderReference,
    portoneKey = portoneKey,
    token = token,
    object : ApiCallbackInterface<PaymentDto.GenericResponse> {
        override fun onSucceed(response: PaymentDto.GenericResponse) {
            LoggerUtil.info("Successful")
        }

        override fun onFailure(
            errorCode: Int?,
            status: String?,
            errorMessage: String,
            throwable: Throwable
        ) {
            LoggerUtil.info("Failed")
        }
    }
)

```

| Parameter | Data Type | Description |
| --- | --- | --- |
| `orderReference` | String | Mandatory |
| `portoneKey` | String | Mandatory |
| `token` | String | Mandatory |

* * *

## Failover Routing   [Skip link to Failover Routing](https://docs.portone.cloud/docs/android-connect\#failover-routing)

**Failover routing** is designed to ensure seamless credit card payment processing. This feature allows the configuration of primary and secondary payment channels through the admin portal. If a payment attempt using the primary channel fails, the system automatically redirects the user to the secondary payment channel.

### Fetching Routes   [Skip link to Fetching Routes](https://docs.portone.cloud/docs/android-connect\#fetching-routes)

Use the following method to retrieve routes created in the admin portal:

Kotlin

```rdmd-code lang-kotlin theme-light

portOne.getRoutesList(
    token = token,
    portoneKey = portoneKey,
    object : ApiCallbackInterface<PaymentDto.RoutesListResponse> {
        override fun onSucceed(response: PaymentDto.RoutesListResponse) {
            val gson = Gson()
            val json = gson.toJson(response)
            LoggerUtil.info("Successful")
        }

        override fun onFailure(
            errorCode: Int?,
            status: String?,
            errorMessage: String,
            throwable: Throwable
        ) {
            LoggerUtil.info("Failed")
        }
    }
)

```

### Configuring Failover Routing   [Skip link to Configuring Failover Routing](https://docs.portone.cloud/docs/android-connect\#configuring-failover-routing)

This method provides the `routeRef` that should be included in the payload as outlined below:

1. Enable routing by setting `isRoutingEnabled` to `true`.
2. Specify the **Routing Param type** as `"failover"`.
3. Include the **Routing Ref**, which is configured in the merchant portal.

Kotlin

```rdmd-code lang-kotlin theme-light

val paymentDetails = PaymentDto.CheckoutUsingTokenizationRequest()
paymentDetails.isRoutingEnabled = true     // true or false
paymentDetails.routingParams =
PaymentDto.RoutingParams(type = "failover", routeRef)

```

* * *

# Possible Error Scenarios:   [Skip link to Possible Error Scenarios:](https://docs.portone.cloud/docs/android-connect\#possible-error-scenarios)

### `INVALID_UNAUTHORIZED_JWT_TOKEN_ERROR`   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#invalid_unauthorized_jwt_token_error)

1. Ensure that the PortOne Key and Secret Key belong to the same account.
2. Confirm that the Secret Key has not been altered.
3. Verify that the `Bearer` keyword precedes the generated token with a space. Example: `Bearer $jwtToken`.
4. Check if the token expiration time is after the current time.

### `INVALID_UNAUTHORIZED_TRANSACTION_SIGNATURE_ERROR`   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#invalid_unauthorized_transaction_signature_error)

1. Validate if all parameters align with the payload/request.
2. Ensure that the PortOne key matches with the payload and the account.

### `INVALID_UNAUTHORIZED_TRANSACTION_IAMPORTKEY_ERROR`   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#invalid_unauthorized_transaction_iamportkey_error)

1. Confirm that the PortOne key matches with the payload and the account.

### `INVALID_PAYMENT_CHANNEL`   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#invalid_payment_channel)

1. Validate that the payment channels and methods included in the payload are enabled in the PortOne portal.

### `INVALID_ENVIRONMENT`   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#invalid_environment)

1. Verify that an environment ( `sandbox` or `live`) has been specified.

### `Summation of order value, tax, duties, shipping, and discount should equal the total amount`   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-connect\#summation-of-order-value-tax-duties-shipping-and-discount-should-equal-the-total-amount)

1. If items are provided, ensure that the values match the total amount calculation formula: `sum(items price * items quantity) + shipping charge - discount = amount`.
2. Mandatory parameters in the payload:
   - price
   - promo\_discount (0 accepted)
   - shipping\_charges (0 accepted)
