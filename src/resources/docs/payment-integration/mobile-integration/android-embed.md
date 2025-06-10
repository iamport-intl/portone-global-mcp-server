---
url: "https://docs.portone.cloud/docs/android-embed"
title: "Android Embed"
---

The PortOne Android SDK simplifies the integration of the PortOne Payment Gateway into your Android app, offering a secure, reliable, and efficient way to accept payments. With this SDK, you can seamlessly embed your app to a variety of payment channels, providing a smooth payment experience for users

integration\_android

![](https://cdn.loom.com/avatars/default-avatar.svg)

[integration\_android](https://www.loom.com/share/d2cedc7893234ec386123e57aead1ccf?source=embed_watch_on_loom_cta "integration_android")

3 min

0 views

0

[Open video in Loom](https://www.loom.com/share/d2cedc7893234ec386123e57aead1ccf?source=embed_watch_on_loom_cta "Open video in Loom")

1.2×

3 min⚡️4 min 21 sec3 min 28 sec2 min 54 sec2 min 19 sec2 min 2 sec1 min 44 sec1 min 23 sec

Your user agent does not support the HTML5 Video element.

![](https://cdn.loom.com/avatars/default-avatar.svg)

[integration\_android](https://www.loom.com/share/d2cedc7893234ec386123e57aead1ccf?source=embed_watch_on_loom_cta "integration_android")

3 min

0 views

0

[Open video in Loom](https://www.loom.com/share/d2cedc7893234ec386123e57aead1ccf?source=embed_watch_on_loom_cta "Open video in Loom")

1.2×

3 min⚡️4 min 21 sec3 min 28 sec2 min 54 sec2 min 19 sec2 min 2 sec1 min 44 sec1 min 23 sec

* * *

## Sample App   [Skip link to Sample App](https://docs.portone.cloud/docs/android-embed\#sample-app)

Check the sample app to integrate on [GitHub](https://github.com/iamport-intl/chaiport-android-sdk-merchant-demo-app)

* * *

## **Prerequisites**   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#prerequisites)

- **[Create an account](https://docs.portone.cloud/docs/create-an-account) on PortOne:**


Before proceeding with the integration, ensure you have created an account on PortOne to access their services and functionalities.
- **[Enable Payment Channels and Methods](https://docs.portone.cloud/docs/3-payment-channels-configuration)**:


Customize and enable the specific payment channels and methods that align with your business requirements and preferences.
- **Android application for the integration**:


You will need an existing Android application in which you intend to integrate the PortOne Android SDK for payment processing capabilities.
- **`authKey` to access the SDK**:


Obtain an authorization key ( `authKey`) from the PortOne Team, as it is required to securely access and utilize the features of the PortOne SDK in your Android application. `authKey` will be issued by the PortOne Team by sending us email on this \*\* [in.dev@portone.io](mailto:in.dev@portone.io)

* * *

## Integration   [Skip link to Integration](https://docs.portone.cloud/docs/android-embed\#integration)

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

### 1\. Install PortOne Android SDK and Authorise it.   [Skip link to 1. Install PortOne Android SDK and Authorise it.](https://docs.portone.cloud/docs/android-embed\#1-install-portone-android-sdk-and-authorise-it)

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

### 2\. Set the Intent Filters in the Manifests   [Skip link to 2. Set the Intent Filters in the Manifests](https://docs.portone.cloud/docs/android-embed\#2-set-the-intent-filters-in-the-manifests)

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

### 3\. Set Intent Receivers for Payment Status:   [Skip link to 3. Set Intent Receivers for Payment Status:](https://docs.portone.cloud/docs/android-embed\#3-set-intent-receivers-for-payment-status)

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

### 4\. Have a setup to get JWT token from the server   [Skip link to 4. Have a setup to get JWT token from the server](https://docs.portone.cloud/docs/android-embed\#4-have-a-setup-to-get-jwt-token-from-the-server)

The PortOne SDK requires a JWT token for authentication. You need to implement a server-side process to generate this token and retrieve it in your Android app.

**Steps:**

1. Implement server logic to generate a JWT token.
2. In your Android app, fetch the token to process the checkout.

The process for generating a JWT token can be found in detail [here](https://docs-v2.portone.cloud/docs/jwt-authentication)

### 5\. Generate Signture Hash   [Skip link to 5. Generate Signture Hash](https://docs.portone.cloud/docs/android-embed\#5-generate-signture-hash)

To generate a signature hash, create it on the server side using a secret key that will be included in the payload. This ensures secure processing of transactions.

> **Note**: Generating a signature hash is optional if you have whitelisted your app while initializing the checkout. Detailed instructions on this are provided in the checkout setup section.

**Steps:**

1. Implement server logic to generate a signature hash.
2. In your Android app, fetch the signature hash to process the checkout.

The process for generating a Signature Hash can be found in detail [here](https://docs-v2.portone.cloud/docs/payment-request)

* * *

# Android Embed   [Skip link to Android Embed](https://docs.portone.cloud/docs/android-embed\#android-embed)

PortOne's Checkout offers a streamlined integration experience, simplifying the process for merchants. This variant involves calling a single method with the essential payload, which results in the PortOne SDK opening a webpage seamlessly. By handling the user interface within the SDK, merchants can focus on the payment flow without concerns about UI intricacies.

checkout\_android\_embed

![](https://cdn.loom.com/avatars/default-avatar.svg)

[checkout\_android\_embed](https://www.loom.com/share/01c1c4ad2a7f460e83793329d2b028b8?source=embed_watch_on_loom_cta "checkout_android_embed")

4 min

0 views

0

[Open video in Loom](https://www.loom.com/share/01c1c4ad2a7f460e83793329d2b028b8?source=embed_watch_on_loom_cta "Open video in Loom")

1.2×

4 min⚡️4 min 56 sec3 min 57 sec3 min 17 sec2 min 38 sec2 min 19 sec1 min 58 sec1 min 34 sec

Your user agent does not support the HTML5 Video element.

![](https://cdn.loom.com/avatars/default-avatar.svg)

[checkout\_android\_embed](https://www.loom.com/share/01c1c4ad2a7f460e83793329d2b028b8?source=embed_watch_on_loom_cta "checkout_android_embed")

4 min

0 views

0

[Open video in Loom](https://www.loom.com/share/01c1c4ad2a7f460e83793329d2b028b8?source=embed_watch_on_loom_cta "Open video in Loom")

1.2×

4 min⚡️4 min 56 sec3 min 57 sec3 min 17 sec2 min 38 sec2 min 19 sec1 min 58 sec1 min 34 sec

📱

Checkout: Android Embed

Open Recipe

* * *

## Initialization   [Skip link to Initialization](https://docs.portone.cloud/docs/android-embed\#initialization)

To begin using the PortOne SDK, initialize the PortOne SDK instance in your activity. Set the environment to either `"sandbox"` for testing or `"live"` for production.

Kotlin

```rdmd-code lang-kotlin theme-light

portOne = PortOneImpl(
            context = this,
            environment = RequestBodies.environment,
            applicationId = BuildConfig.APPLICATION_ID)

```

Parameters:

- `context`: The activity context where the SDK is being initialized.
- `environment`: Defines the environment in which the SDK operates.

  - `"sandbox"` for testing
  - `"live"` for production
- `applicationId`: (Optional) The unique ID of your application.

> **Note**: The `applicationId` parameter is required if the merchant wants to whitelist the app. When an app is whitelisted, the signature hash generation becomes optional, as the app is pre-authorized to securely process payments without it.

* * *

## Update Payment Status   [Skip link to Update Payment Status](https://docs.portone.cloud/docs/android-embed\#update-payment-status)

As part of the setup for app-to-app flow, a deep link is configured to handle the transaction response. When the payment process completes, the app receives an intent with payment status data. It’s essential to check if this intent is available, and if so, pass its content to the SDK to update the transaction status.

Kotlin

```rdmd-code lang-kotlin theme-light

if (null != intent && null != intent.data) {
    val paymentStatus = intent.data.toString()
    portOne.updatePaymentStatus(paymentStatus)
}

```

> **Note**:This step is crucial for completing the transaction in the app-to-app flow, as it synchronizes the payment status with the server.

* * *

## Implementation   [Skip link to Implementation](https://docs.portone.cloud/docs/android-embed\#implementation)

This is the method that has been utilised to process the web checkout.

Kotlin

```rdmd-code lang-kotlin theme-light

val checkoutDetails = CheckoutEmbedDto.CheckoutUsingEmbedRequest()
portOne.checkoutUsingEmbed(
            token = token,
            clientKey = portoneKey,
            request = getEmbedCheckoutRequest()
        )

```

| Parameters | Data Type |  |
| --- | --- | --- |
| token | String | mandatory |
| portoneKey | String | mandatory |
| request | CheckoutEmbedDto.CheckoutUsingEmbedRequest | mandatory |

### Parameter list for CheckoutEmbedDto.CheckoutUsingEmbedRequest   [Skip link to Parameter list for CheckoutEmbedDto.CheckoutUsingEmbedRequest](https://docs.portone.cloud/docs/android-embed\#parameter-list-for-checkoutembeddtocheckoutusingembedrequest)

##### portone\_key   [Skip link to portone_key](https://docs.portone.cloud/docs/android-embed\#portone_key)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-span-stylecolorredrequiredspan)

The unique PortOne key for the merchant.

* * *

##### merchant\_details   [Skip link to merchant_details](https://docs.portone.cloud/docs/android-embed\#merchant_details)

###### _object_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#object)

The JSON object for merchant details

> ##### name   [Skip link to name](https://docs.portone.cloud/docs/android-embed\#name)
>
> ###### _string_ · The name of the merchant   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-the-name-of-the-merchant)
>
> ##### logo   [Skip link to logo](https://docs.portone.cloud/docs/android-embed\#logo)
>
> ###### _string_ · The logo of the merchant   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-the-logo-of-the-merchant)
>
> ##### back\_url   [Skip link to back_url](https://docs.portone.cloud/docs/android-embed\#back_url)
>
> ###### _string_ · The URL of the merchant site   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-the-url-of-the-merchant-site)
>
> ##### promo\_code   [Skip link to promo_code](https://docs.portone.cloud/docs/android-embed\#promo_code)
>
> ###### _string_ · The promo code enabled on the order by the merchant   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-the-promo-code-enabled-on-the-order-by-the-merchant)
>
> ##### promo\_discount   [Skip link to promo_discount](https://docs.portone.cloud/docs/android-embed\#promo_discount)
>
> ###### _int_ · The promo code discount amount on the order by the merchant   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#int-%C2%B7-the-promo-code-discount-amount-on-the-order-by-the-merchant)
>
> ##### shipping\_charges   [Skip link to shipping_charges](https://docs.portone.cloud/docs/android-embed\#shipping_charges)
>
> ###### _double_ · The shipping charges set by the merchant   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#double-%C2%B7-the-shipping-charges-set-by-the-merchant)

* * *

##### merchant\_order\_id   [Skip link to merchant_order_id](https://docs.portone.cloud/docs/android-embed\#merchant_order_id)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-span-stylecolorredrequiredspan-1)

The unique merchant order reference generated by the merchant.

* * *

##### signature\_hash   [Skip link to signature_hash](https://docs.portone.cloud/docs/android-embed\#signature_hash)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-span-stylecolorredrequiredspan-2)

The signature hash of transaction details.

* * *

##### amount   [Skip link to amount](https://docs.portone.cloud/docs/android-embed\#amount)

###### _double · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#double-%C2%B7-span-stylecolorredrequiredspan)

The amount of the transaction.

* * *

##### currency   [Skip link to currency](https://docs.portone.cloud/docs/android-embed\#currency)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-span-stylecolorredrequiredspan-3)

The currency of the transaction.

* * *

##### country\_code   [Skip link to country_code](https://docs.portone.cloud/docs/android-embed\#country_code)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-span-stylecolorredrequiredspan-4)

The country code of the transaction.

* * *

##### billing\_details   [Skip link to billing_details](https://docs.portone.cloud/docs/android-embed\#billing_details)

###### _object_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#object-1)

The JSON object for billing details

> ##### billing\_name   [Skip link to billing_name](https://docs.portone.cloud/docs/android-embed\#billing_name)
>
> ###### _string_ · The billing first and middle name   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-the-billing-first-and-middle-name)
>
> ##### billing\_surname   [Skip link to billing_surname](https://docs.portone.cloud/docs/android-embed\#billing_surname)
>
> ###### _string_ · The billing last name   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-the-billing-last-name)
>
> ##### billing\_email   [Skip link to billing_email](https://docs.portone.cloud/docs/android-embed\#billing_email)
>
> ###### _string_ · The billing email address   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-the-billing-email-address)
>
> ##### billing\_phone   [Skip link to billing_phone](https://docs.portone.cloud/docs/android-embed\#billing_phone)
>
> ###### _string_ · The billing phone number   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-the-billing-phone-number)
>
> ##### billing\_address   [Skip link to billing_address](https://docs.portone.cloud/docs/android-embed\#billing_address)
>
> ###### _object_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#object-2)
>
> The JSON object containing full address
>
> > ##### city   [Skip link to city](https://docs.portone.cloud/docs/android-embed\#city)
> >
> > ###### _string_ · City name   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-city-name)
> >
> > ##### country\_code   [Skip link to country_code](https://docs.portone.cloud/docs/android-embed\#country_code-1)
> >
> > ###### _string_ · 2-digit country code   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-2-digit-country-code)
> >
> > ##### country\_name   [Skip link to country_name](https://docs.portone.cloud/docs/android-embed\#country_name)
> >
> > ###### _string_ · Full country name   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-full-country-name)
> >
> > ##### locale   [Skip link to locale](https://docs.portone.cloud/docs/android-embed\#locale)
> >
> > ###### _string_ · Region locale   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-region-locale)
> >
> > ##### line\_1   [Skip link to line_1](https://docs.portone.cloud/docs/android-embed\#line_1)
> >
> > ###### _string_ · Line 1 of the address   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-line-1-of-the-address)
> >
> > ##### line\_2   [Skip link to line_2](https://docs.portone.cloud/docs/android-embed\#line_2)
> >
> > ###### _string_ · Line 2 of the address   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-line-2-of-the-address)
> >
> > ##### postal\_code   [Skip link to postal_code](https://docs.portone.cloud/docs/android-embed\#postal_code)
> >
> > ###### _string_ · Postal code of the area   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-postal-code-of-the-area)
> >
> > ##### state   [Skip link to state](https://docs.portone.cloud/docs/android-embed\#state)
> >
> > ###### _string_ · State/province of the country   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-stateprovince-of-the-country)

* * *

##### shipping\_details   [Skip link to shipping_details](https://docs.portone.cloud/docs/android-embed\#shipping_details)

###### _object_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#object-3)

The JSON object for shipping details

> ##### shipping\_name   [Skip link to shipping_name](https://docs.portone.cloud/docs/android-embed\#shipping_name)
>
> ###### _string_ · The shipping first and middle name   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-the-shipping-first-and-middle-name)
>
> ##### shipping\_surname   [Skip link to shipping_surname](https://docs.portone.cloud/docs/android-embed\#shipping_surname)
>
> ###### _string_ · The shipping last name   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-the-shipping-last-name)
>
> ##### shipping\_email   [Skip link to shipping_email](https://docs.portone.cloud/docs/android-embed\#shipping_email)
>
> ###### _string_ · The shipping email address   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-the-shipping-email-address)
>
> ##### shipping\_phone   [Skip link to shipping_phone](https://docs.portone.cloud/docs/android-embed\#shipping_phone)
>
> ###### _string_ · The shipping phone number   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-the-shipping-phone-number)
>
> ##### shipping\_address   [Skip link to shipping_address](https://docs.portone.cloud/docs/android-embed\#shipping_address)
>
> ###### _object_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#object-4)
>
> The JSON object containing full address
>
> > ##### city   [Skip link to city](https://docs.portone.cloud/docs/android-embed\#city-1)
> >
> > ###### _string_ · City name   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-city-name-1)
> >
> > ##### country\_code   [Skip link to country_code](https://docs.portone.cloud/docs/android-embed\#country_code-2)
> >
> > ###### _string_ · 2-digit country code   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-2-digit-country-code-1)
> >
> > ##### country\_name   [Skip link to country_name](https://docs.portone.cloud/docs/android-embed\#country_name-1)
> >
> > ###### _string_ · Full country name   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-full-country-name-1)
> >
> > ##### locale   [Skip link to locale](https://docs.portone.cloud/docs/android-embed\#locale-1)
> >
> > ###### _string_ · Region locale   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-region-locale-1)
> >
> > ##### line\_1   [Skip link to line_1](https://docs.portone.cloud/docs/android-embed\#line_1-1)
> >
> > ###### _string_ · Line 1 of the address   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-line-1-of-the-address-1)
> >
> > ##### line\_2   [Skip link to line_2](https://docs.portone.cloud/docs/android-embed\#line_2-1)
> >
> > ###### _string_ · Line 2 of the address   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-line-2-of-the-address-1)
> >
> > ##### postal\_code   [Skip link to postal_code](https://docs.portone.cloud/docs/android-embed\#postal_code-1)
> >
> > ###### _string_ · Postal code of the area   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-postal-code-of-the-area-1)
> >
> > ##### state   [Skip link to state](https://docs.portone.cloud/docs/android-embed\#state-1)
> >
> > ###### _string_ · State/province of the country   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-stateprovince-of-the-country-1)

* * *

##### order\_details   [Skip link to order_details](https://docs.portone.cloud/docs/android-embed\#order_details)

###### _array of objects_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#array-of-objects)

The JSON array for order details

> ##### id   [Skip link to id](https://docs.portone.cloud/docs/android-embed\#id)
>
> ###### _string_ · The unique identifier of the order item   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-the-unique-identifier-of-the-order-item)
>
> ##### price   [Skip link to price](https://docs.portone.cloud/docs/android-embed\#price)
>
> ###### _double_ · The price of the product   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#double-%C2%B7-the-price-of-the-product)
>
> ##### name   [Skip link to name](https://docs.portone.cloud/docs/android-embed\#name-1)
>
> ###### _string_ · The name of the product   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-the-name-of-the-product)
>
> ##### quantity   [Skip link to quantity](https://docs.portone.cloud/docs/android-embed\#quantity)
>
> ###### _integer_ · The quantity of the product   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#integer-%C2%B7-the-quantity-of-the-product)
>
> ##### image   [Skip link to image](https://docs.portone.cloud/docs/android-embed\#image)
>
> ###### _string_ · The URL of the product image   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-the-url-of-the-product-image)

* * *

##### success\_url   [Skip link to success_url](https://docs.portone.cloud/docs/android-embed\#success_url)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-span-stylecolorredrequiredspan-5)

The URL of the success page hosted by the merchant.

* * *

##### failure\_url   [Skip link to failure_url](https://docs.portone.cloud/docs/android-embed\#failure_url)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-span-stylecolorredrequiredspan-6)

The URL of the failure page hosted by the merchant.

* * *

##### expiry\_hours   [Skip link to expiry_hours](https://docs.portone.cloud/docs/android-embed\#expiry_hours)

###### _int · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#int-%C2%B7-span-stylecolorredrequiredspan)

The expiry time in hours for the checkout session.

* * *

##### redirect\_url   [Skip link to redirect_url](https://docs.portone.cloud/docs/android-embed\#redirect_url)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-span-stylecolorredrequiredspan-7)

The URL for redirection after the transaction.

* * *

##### environment   [Skip link to environment](https://docs.portone.cloud/docs/android-embed\#environment)

###### _string · required_   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#string-%C2%B7-span-stylecolorredrequiredspan-8)

The environment for the transaction, either sandbox or live.

* * *

### **Response:**   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#response)

Receiving the payment status within the override method `onActivityResult` is a common practice in integration to handle payment callbacks. By implementing this method during the integration process, developers can capture and process the payment status information returned by the payment gateway or SDK. This allows for real-time feedback on the payment's success or failure, enabling further actions to be taken based on the outcome of the transaction.

* * *

# Possible Error Scenarios:   [Skip link to Possible Error Scenarios:](https://docs.portone.cloud/docs/android-embed\#possible-error-scenarios)

### `INVALID_UNAUTHORIZED_JWT_TOKEN_ERROR`   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#invalid_unauthorized_jwt_token_error)

1. Ensure that the PortOne Key and Secret Key belong to the same account.
2. Confirm that the Secret Key has not been altered.
3. Verify that the `Bearer` keyword precedes the generated token with a space. Example: `Bearer $jwtToken`.
4. Check if the token expiration time is after the current time.

### `INVALID_UNAUTHORIZED_TRANSACTION_SIGNATURE_ERROR`   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#invalid_unauthorized_transaction_signature_error)

1. Validate if all parameters align with the payload/request.
2. Ensure that the PortOne key matches with the payload and the account.

### `INVALID_UNAUTHORIZED_TRANSACTION_IAMPORTKEY_ERROR`   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#invalid_unauthorized_transaction_iamportkey_error)

1. Confirm that the PortOne key matches with the payload and the account.

### `INVALID_PAYMENT_CHANNEL`   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#invalid_payment_channel)

1. Validate that the payment channels and methods included in the payload are enabled in the PortOne portal.

### `INVALID_ENVIRONMENT`   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#invalid_environment)

1. Verify that an environment ( `sandbox` or `live`) has been specified.

### `Summation of order value, tax, duties, shipping, and discount should equal the total amount`   [Skip link to [object Object]](https://docs.portone.cloud/docs/android-embed\#summation-of-order-value-tax-duties-shipping-and-discount-should-equal-the-total-amount)

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