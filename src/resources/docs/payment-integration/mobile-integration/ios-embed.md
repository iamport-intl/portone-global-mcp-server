---
title: "iOS Embed"
---

The PortOne iOS SDK offers merchants a seamless way to integrate the PortOne Payment Gateway into their iOS applications, enabling them to accept payments securely and efficiently. This SDK serves as a bridge between a merchant's app and the PortOne Payment Gateway, providing a comprehensive set of features tailored specifically for handling payment transactions.

Follow the below steps to integrate the PortOne iOS SDK with your native iOS Application.

* * *

## Video Tutorial

*Video tutorial links and metadata removed for LLM clarity.*

* * *

## Sample App

Check the sample app to integrate on GitHub: https://github.com/iamport-intl/chaipay-ios-native-demo-app

* * *

## **Prerequisites**

- **Create an account on PortOne:**

Before proceeding with the integration, ensure you have created an account on PortOne to access their services and functionalities.
- **Enable Payment Channels and Methods:**

Customize and enable the specific payment channels and methods that align with your business requirements and preferences.
- **Access API Keys**

Login to the portone portal where you can access the API Keys (client key and secret key) for integrations under Settings -> API tab.
- **iOS application for the integration**

You will need an iOS application in which you intend to integrate the PortOne iOS SDK for payment processing capabilities.
- **Download the framework**

Download the latest framework from: https://github.com/iamport-intl/portone-ios-native-frameworks/releases/tag/2.3.1

* * *

## Integration

Steps to integrate your native iOS application with PortOne iOS SDK.

1. Embed the framework in project
2. Enable deep link in iOS
3. Get JWT Token
4. Generate Signature hash
5. Initialise and Authorise SDK

* * *

### 1. **Embed the framework in project**

1. After downloading the .xcframework inside the version folder, drag and drop it in the project
   - Go to General → Frameworks, Library and Embedded Content and then drop the framework and change the Embed to Embed & sign.
2. Import the PortOneSDK as below at the required places.

```swift
import PortoneSDK
```

* * *

### 2. Enable deep link in iOS

1. To open your application, add the url schemes to the app, Go to **ProjectSettings -> info**
2. Add url schemes and identifier inside the **URL types.**

You can see the scheme and identifier details in **info.plist** as below:

```xml
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

3. To open the other applications, include the url schemes in info.plist

```xml
<key>LSApplicationQueriesSchemes</key>
<array>
  <string>itms-appss</string>
  <string>zalopay</string>
  <string>line</string>
  <string>ascendmoney</string>
</array>
```

LSApplicationQueriesSchemes - Specifies the URL schemes you want the app to be able to use with the canOpenURL: method of the UIApplication class.

4. To support HTTP connections, add this source code in app info.plist

```xml
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

### 3. **Get JWT token from the server**

- Algorithm to use for generating token - "HS256"

To set up the process of obtaining a JWT token from the server, you need to construct a JWT token that accepts the `portoneKey` as input. Here's an outline of the steps involved in setting up this process:

1. **JWT Token Construction:**

Implement the server-side logic to generate a JWT token using the `portoneKey` as a key component of the token payload.

2. **Token Retrieval in iOS App:**
   - Implement logic in your iOS application to make a server request to retrieve the JWT token using the `portoneKey`.
   - Receive and store the returned token securely within the app for subsequent API authentication.

Further information on JWT token generation is described in the link below.

[Authentication | PortOne](https://docs.portone.cloud/docs/jwt-authentication)

* * *

### 4. Generate Signature Hash

- Generate a Signature Hash using HmacSHA256 which needs to be included in the payload.
- To generate a signature hash on the server side using a secret key follow the below steps.

[Payment Request | PortOne](https://docs.portone.cloud/docs/payment-request)

* * *

### 5. Initialise PortOne iOS SDK and authorise it.

1. Import library of portone SDK

```swift
import PortoneSDK
```

2. Initialize the checkout instance to get the available methods in SDK as below

```swift
var checkout = Checkout(delegate: self,
  environment: "sandbox",
  redirectURL: "portone://checkout",
  appIdentifier: "com.flutter.portone")
// redirectURL: your app scheme
// appIdentifier: (unique App identifier) Passing the signature hash can be skipped if you whitelist your domain/IP/App.
```

- Pass the delegate to the initialization
- Implement the delegate methods as below to get the response of failure and success callbacks from the webView.

```swift
extension ViewController: CheckoutDelegate {
  func transactionResponse(response transactionResponse: TransactionResponse?) {
    if let response = transactionResponse {
      // Do the needful with response
    }
  }
  // For webview to be open on top of the View controller.
  // Pass the UINavigation controller
  var viewController: UIViewController? {
    return self
  }
  func transactionErrorResponse(error: Error?) {
    print("Error", error)
  }
}
```

* * *

## **Checkout using web (v3)**

PortOne's Checkout offers a streamlined integration experience, simplifying the process for merchants. This variant involves calling a single method with the essential payload, which results in the PortOne SDK opening a webpage seamlessly. By handling the user interface within the SDK, merchants can focus on the payment flow without concerns about UI intricacies.

To get the payment link to use the SDK checkout UI, call the **checkOutUI** method from SDK as below:

```swift
let token = createJWTToken()
let payload = prepareConfig()
checkout?.checkOutUI(config: payload, jwtToken: token, onCompletionHandler: { (result) in })
```

Sample payload:

```swift
func prepareWebConfig() -> WebTransactionRequest {
  let selectedProducts = [ProductDetailsObject(id: "6BmAKc", title: "Sririri Toes", description: "Special Design", price: 1, currency: self.CURRENCY, imageName: "https://demo.portone.cloud/images/bella-toes.jpg"), ProductDetailsObject(id: "6BmAKcbc", title: "Chikku Loafers", description: "Special Design", price: 15000, currency: self.CURRENCY, imageName: "https://demo.portone.cloud/images/chikku-loafers.jpg")]
  let billingAddress = BillingAddress(city: self.CURRENCY, countryCode: "VN", locale: "en", line1: "address1", line2: "address2", postalCode: "400202", state: "Mah")
  var charges = 110.0
  var promoDiscount = 100.0
  let merchantDetails = MerchantDetails(name: "Downy", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg", backUrl: "https://demo.portone.cloud/checkout.html", promoCode: "Downy350", promoDiscount: Int(promoDiscount), shippingCharges: (charges))
  let billingDetails = BillingDetails(billingName: "Test mark", billingEmail: "markweins@gmail.com", billingPhone: "9913379694", billingAddress: billingAddress)
  let shippingAddress = ShippingAddress(city: "abc", countryCode: "VN", locale: "en", line1: "address_1", line2: "address_2", postalCode: "400202", state: "Mah")
  let shippingDetails = ShippingDetails(shippingName: "xyz", shippingEmail: "xyz@gmail.com", shippingPhone: "1234567890", shippingAddress: shippingAddress)
  var orderDetails:  [OrderDetails] = []
  var totalAmount = 0.0
  for details in selectedProducts {
    let product = OrderDetails(id: details.id ?? "", name: details.title ?? "", price: details.price ?? 0, quantity: 1, imageUrl: details.imageName ?? "")
    orderDetails.append(product)
    totalAmount = totalAmount + ((product.price ?? 1) * Double(product.quantity ?? 1))
  }
  var tA: Double = totalAmount + charges - promoDiscount
  var transactionRequest = WebTransactionRequest(portOneKey: self.PORTONE_KEY, merchantDetails: merchantDetails, merchantOrderId: "MERCHANT\(Int(Date().timeIntervalSince1970 * 1000))", amount: tA, currency: self.CURRENCY, signatureHash: "123", billingAddress: billingDetails, shippingAddress: shippingDetails, orderDetails: orderDetails, successURL: "https://test-checkout.chaiport.io/success.html", failureURL: "https://test-checkout.chaiport.io/failure.html", redirectURL: "portone://checkout", countryCode: "VN", expiryHours: 2, source: "mobile", description: "test dec", showShippingDetails: true, showBackButton: false, defaultGuestCheckout: false, isCheckoutEmbed: false, environment: .sandbox )
  let signatureHash = createWebHash(transactionRequest)
  transactionRequest.signatureHash = signatureHash
  return transactionRequest
}
```

Implement the delegate methods as below to get the response of failure and success callbacks from the webView.

```swift
extension YourViewController: CheckoutDelegate {
  func transactionErrorResponse(_ error: Error?) {
    print("Error", error)
  }
  var viewController: UIViewController? {
    return self
  }
  func transactionResponse(_ webViewResponse: WebViewResponse?) {
    // receives the response of the transaction
    NotificationCenter.default.post(name: NSNotification.Name("webViewResponse"), object: webViewResponse)
    print("webview response", webViewResponse)
  }
}
```

Sample Response:

```json
Success
{
  "merchant_order_ref" : "MERCHANT1630665361511",
  "message" : "",
  "is_success" : "true",
  "order_ref" : "1xcrkpVPNq5vuqQDe3eqrHD3OcG",
  "deep_link" : "",
  "channel_order_ref" : "1xcrkpVPNq5vuqQDe3eqrHD3OcG",
  "additional_data" : null,
  "redirect_url" : ""
}
Failed
{
  "chaipay_order_ref": "1wa0choxhAy2QtE9ix8aNt8T3Mf",
  "channel_order_ref": "0",
  "merchant_order_ref": "MERCHANT1628681469666",
  "status": "Initiated",
  "status_code": "4000",
  "status_reason": "INVALID_TRANSACTION_ERROR"
}
```

### `Payload`

All of the web checkout request's parameters are listed here, along with the appropriate data type.

| Parameters | Data Type |  |
| --- | --- | --- |
| portOneKey | String | mandatory |
| merchantDetails | object MerchantDetails |  |
| merchantOrderId | String | mandatory |
| signatureHash | String | mandatory |
| amount | Double | mandatory |
| currency | String | mandatory |
| countryCode | String | mandatory |
| billingDetails | object BillingDetails | Optional |
| shippingDetails | object ShippingDetails | Optional |
| orderDetails | array [OrderDetail] | Optional |
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
| bankDetails | BankDetails | Optional |
| directBankTransfer | DirectBankTransferDetails | Optional |

**`MerchantDetails`**

| Parameters | Data Type |  |
| --- | --- | --- |
| name | String | Optional |
| logo | String | Optional |
| backUrl | String | Optional |
| promoCode | String | Optional |
| promoDiscount | Int | Optional |
| shippingCharges | Double | Optional |

**ShippingDetails**

| Parameters | Data Type |  |
| --- | --- | --- |
| shippingName | String | Optional |
| shippingEmail | String | Optional |
| shippingPhone | String | Optional |
| shippingAddress | Object Address | Optional |

**BillingDetails**

| Parameters | Data Type |  |
| --- | --- | --- |
| billingName | String | Optional |
| billingEmail | String | Optional |
| billingPhone | String | Optional |
| billingAddress | Object Address | Optional |

**`Address`**

| Parameters | Data Type |  |
| --- | --- | --- |
| city | String | Optional |
| countryCode | String | Optional |
| locale | String | Optional |
| line1 | String | Optional |
| line2 | String | Optional |
| postalCode | String | Optional |
| state | String | Optional |

**Direct Bank transfer details**

| Parameters | Data Type | mandatory |
| --- | --- | --- |
| customerName | String | yes |
| transactionTime | String | yes |
| amountPaid | Double | yes |

**Bank details**

| Parameters | Data Type | mandatory |
| --- | --- | --- |
| bankName | String | yes |
| bankCode | String | yes |
| isMerchantSponsored | bool | yes |
| instalmentPeriod | InstalmentPeriod | yes |

**InstalmentPeriod**

| Parameters | Data Type | mandatory |
| --- | --- | --- |
| month | int | yes |
| interest | double | yes |

**OrderDetail**

| Parameters | Data Type |  |
| --- | --- | --- |
| id | String | Optional |
| price | Double | Optional |
| name | String | Optional |
| quantity | Int | Optional |
| image | String (in the form of web url) | Optional |

* * *

# Probable Errors:

### `INVALID_UNAUTHORIZED_JWT_TOKEN_ERROR`

1. Check whether PortOne Key and the Secret Key are of the same account
2. Check whether the Secret Key is not modified
3. Check whether `Bearer` keyword is added before the generated token with a white space. `Bearer $jwtToken`
4. Verify if the expiration time should be greater than the current time

### `INVALID_UNAUTHORISED_TRANSACTION_SIGNATURE_ERROR`

1. Check whether all params match with the payload/request
2. Check whether the portone key match with the payload and the account

### `INVALID_UNAUTHORISED_TRANSACTION_IAMPORTKEY_ERROR`

1. Check whether the portone key match with the payload and the account

### `INVALID_PAYMENT_CHANNEL`

1. Make sure the payment channels and payment methods which are added in the payload are enable from the portone portal

### `INVALID_ENVIRONMENT`

1. Make sure you have added environment either `sandbox` or `live`

### `Summation of order value, tax, duties, shipping and discount is equal to amount`

1. If items are provided then please verify the values provided should match the total amount: `sum(items price * items quantity) + shipping charge - discount = amount`
2. Mandatory params in payload:

```
price
promo_discount       (0 is also acceptable)
shipping_charges     (0 is also acceptable)
```

* * *

Did this page help you?

Yes

No

# Recipe Title

Recipe Description

​x

# Recipe Title

Recipe Description

​x

![Help](https://cdn.jsdelivr.net/gh/iamport-intl/portone-devx-chatbot-widget@production/public/chat-intro1.svg)