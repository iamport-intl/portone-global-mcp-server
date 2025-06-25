---
url: "https://docs.portone.cloud/docs/ipay88"
title: "IPay88"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/ipay88\#introduction)

iPay88 is a payment company that offers e-commerce, retail, online banking, e-wallets solutions and more to its merchants.

iPay88 offers merchants comprehensive online payment options such as credit/debit cards, bank transfers and alternative online payments. The payment process uses a redirect approach, customers will be redirected to a secure iPay88 page where they will make a payment and then be returned to your store.

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/ipay88\#supported-countries)

- Indonesia 🇮🇩
- Thailand 🇹🇭

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/ipay88\#available-payment-methods)

| Payment Type | Payment Method Key | Currency | Status | Sandbox Availability |
| --- | --- | --- | --- | --- |
| Ovo Wallet | `IPAY88_OVO` | IDR | ✅ | ❌ |
| Dana Wallet | `IPAY88_DANA` | IDR | ✅ | ✅ |
| LinkAja Wallet | `IPAY88_LINKAJA` | IDR | ✅ | ❌ |
| ShopeePay Wallet | `IPAY88_SHOPEEPAY` | IDR | ✅ | ❌ |
| Maybank Virtual Account | `IPAY88_MAYBANK_VA` | IDR | ✅ | ✅ |
| Permata Virtual Account | `IPAY88_PERMATA_VA` | IDR | ✅ | ✅ |
| Mandiri Virtual Account | `IPAY88_MANDIRI_ATM` | IDR | ✅ | ✅ |
| Akulaku | `IPAY88_AKULAKU` | IDR | ✅ | ❌ |
| GPN | `IPAY88_GPN` | IDR | ✅ | ❌ |
| Nobubank QR | `IPAY88_NOBUBANK_QR` | IDR | ✅ | ❌ |
| ShopeePay QR | `IPAY88_SHOPEEPAY_QR` | IDR | ✅ | ❌ |
| Credit Cards | `IPAY88_CREDIT_CARD` | THB | ✅ | ✅ |
| KBank | `IPAY88_KBANK` | THB | ✅ | ❌ |
| SCB Bank | `IPAY88_SCB` | THB | ✅ | ❌ |
| BAY Bank | `IPAY88_BAY` | THB | ✅ | ❌ |
| BBL Bank | `IPAY88_BBL` | THB | ✅ | ❌ |
| PromptPay | `IPAY88_PROMPT_PAY` | THB | ✅ | ❌ |
| Rabbit LinePay Wallet | `IPAY88_RABBIT_LINE_PAY` | THB | ✅ | ✅ |
| ShopeePay Wallet | `IPAY88_SHOPEEPAY_JUMPAPP` | THB | ✅ | ❌ |
| TrueMoney Wallet | `IPAY88_TRUE_MONEY` | THB | ✅ | ❌ |

* * *

### Miscellaneous Details   [Skip link to Miscellaneous Details](https://docs.portone.cloud/docs/ipay88\#miscellaneous-details)

##### Indonesia   [Skip link to Indonesia](https://docs.portone.cloud/docs/ipay88\#indonesia)

- Merchant needs to register Referer Domain [https://portone.io/](https://portone.io/) with iPay88
- Amount in Decimal value not supported for IDR currency
- Description is mandatory
- In Order details following fields are mandatory:
  - Id
  - Name
  - Quantity
  - Price
- In Billing details and Shipping details following fields are mandatory:
  - Name
  - Surname
  - Phone
  - Email
  - Address - Line 1
  - Address - City
  - Address - State
  - Address - Postal Code
  - Address - Country Code

* * *

##### Thailand   [Skip link to Thailand](https://docs.portone.cloud/docs/ipay88\#thailand)

- Description is mandatory
- In Billing details following fields are mandatory:
  - Name
  - Phone
  - Email

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/ipay88\#sandbox)

#### Use following values in embedded JS code to pay via iPay88 channel   [Skip link to Use following values in embedded JS code to pay via iPay88 channel](https://docs.portone.cloud/docs/ipay88\#use-following-values-in-embedded-js-code-to-pay-via-ipay88-channel)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "IPAY88",
    "pmt_method": { Any of above given payment method keys },

```

* * *

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/ipay88\#credentials)

| country | merchantCode | merchantKey |
| --- | --- | --- |
| Indonesia | ID01829 | pNaUOCSyP4 |
| Thailand | TH00010 | 4SLxHL1j2Y |

* * *

#### Test card data for Thailand Credit Card payment method   [Skip link to Test card data for Thailand Credit Card payment method](https://docs.portone.cloud/docs/ipay88\#test-card-data-for-thailand-credit-card-payment-method)

| Type | Card number | Name | Valid through | CVV/OTP |
| --- | --- | --- | --- | --- |
| Credit Card | 4000 0000 0000 0002 | TEST CARD | 12/22 | 123 |

* * *

#### Test Phone details for Dana wallet   [Skip link to Test Phone details for Dana wallet](https://docs.portone.cloud/docs/ipay88\#test-phone-details-for-dana-wallet)

| Mobile Number | SMS | Password |
| --- | --- | --- |
| 81220202020 | 8888 | 082020 |

* * *

#### Test Virtual Account ATM Simulator   [Skip link to Test Virtual Account ATM Simulator](https://docs.portone.cloud/docs/ipay88\#test-virtual-account-atm-simulator)

[ATM Simulator](https://sandbox.ipay88.co.id/epayment/ATMSimulator)

* * *

#### Sample payload for initiatePayment   [Skip link to Sample payload for initiatePayment](https://docs.portone.cloud/docs/ipay88\#sample-payload-for-initiatepayment)

JavaScript

```rdmd-code lang-javascript theme-light

{
    "key": {portone_key},
    "merchant_order_id": {merchant_order_id},
    "amount": 40000,
    "currency": "IDR",
    "signature_hash": {signature_hash},
    "billing_details": {
        "billing_name": "Test Customer",
        "billing_surname":"Something",
        "billing_email": "markweins@gmail.com",
        "billing_phone": "+7467345493",
        "billing_address": {
            "city": "Jakarta",
            "country_code": "ID",
            "locale": "vi",
            "line_1":"Address line 1",
            "line_2":"Address line 2",
            "postal_code": "400202",
            "state": "Mah",
            "country_name":"Indonesia"
        }
    },
    "shipping_details": {
        "shipping_name": "Test Customer",
        "shipping_surname":"Something",
        "shipping_email": "markweins@gmail.com",
        "shipping_phone": "+4875867484",
        "shipping_address": {
            "city": "abc",
            "country_code": "ID",
            "locale": "vn",
            "line_1": "address_1",
            "line_2": "address_2",
            "postal_code": "400202",
            "state": "Bac Giang"
        }
    },
    "order_details": [\
        {\
            "id": "1",\
            "name": "abc",\
            "quantity": 1,\
            "price": 40000\
        }\
    ],
    "success_url": "https://dev-checkout.portone.cloud/success.html",
    "failure_url": "https://dev-checkout.portone.cloud/failure.html",
    "pmt_channel": "IPAY88",
    "pmt_method": { Any of above given payment method keys },
    "description":"Payment for the order #42140324",
    "environment":"sandbox"
}

```

* * *

#### Sample payload for paymentLink   [Skip link to Sample payload for paymentLink](https://docs.portone.cloud/docs/ipay88\#sample-payload-for-paymentlink)

JavaScript

```rdmd-code lang-javascript theme-light

{
    "portone_key": {portone_key},
    "merchant_details": {
        "name": "Test company",
        "back_url": "https://dev-admin.portone.io",
        "promo_code": "NA",
        "promo_discount": 0,
        "shipping_charges": 0
    },
    "signature_hash": {signature_hash},
    "amount": 20000,
    "currency": "IDR",
    "country_code": "ID",
    "merchant_order_id": {merchant_order_id},
    "billing_details": {
        "billing_name": "Test Customer",
        "billing_surname":"Something",
        "billing_email": "markweins@gmail.com",
        "billing_phone": "+4534283293",
        "billing_address": {
            "city": "Jakarta",
            "country_code": "ID",
            "locale": "vi",
            "line_1":"Address line 1",
            "line_2":"Address line 2",
            "postal_code": "400202",
            "state": "Mah",
            "country_name":"Indonesia"
        }
    },
    "shipping_details": {
        "shipping_name": "Test Customer",
        "shipping_surname":"Something",
        "shipping_email": "markweins@gmail.com",
        "shipping_phone": "+5454934232",
        "shipping_address": {
            "city": "abc",
            "country_code": "ID",
            "locale": "vi",
            "line_1": "address_1",
            "line_2": "address_2",
            "postal_code": "400202",
            "state": "Bac Giang"
        }
    },
    "success_url": "https://dev-checkout.portone.cloud/success.html",
    "failure_url": "https://dev-checkout.portone.cloud/failure.html",
    "expiry_hours": 48,
    "source": "api",
    "description": "Payment for the order #42140324",
    "show_shipping_details": false,
    "show_back_button": true,
    "default_guest_checkout": false,
    "is_checkout_embed": false,
    "environment": "sandbox",
    "order_details": [\
        {\
            "id": "1",\
            "name": "abc",\
            "quantity": 2,\
            "price": 10000\
        }\
    ]
}

```

* * *

#### Sample additional data response for initiatePayment (Thailand)   [Skip link to Sample additional data response for initiatePayment (Thailand)](https://docs.portone.cloud/docs/ipay88\#sample-additional-data-response-for-initiatepayment-thailand)

JavaScript

```rdmd-code lang-javascript theme-light

{
"additional_data": {
        "Amount": "40000.00",
        "BackendURL": "https://api.portone.cloud/webhook/ipay88/"{portone_key}"?country=TH",
        "Currency": "THB",
        "MerchantCode": {Merchant_code},
        "PaymentId": 82,
        "PostingURL": "https://sandbox.ipay88.co.th/epayment/entry.asp",
        "ProdDesc": "Payment for the order #42140324",
        "RefNo": {Order_ref},
        "ResponseURL": "https://api.portone.cloud/api/handleShopperRedirect/IPAY88?country=TH",
        "Signature": "5506cd211a6ac76cca90ab385057fdb70a287c2f434c3ae9f3bd5a9ca1822d68",
        "SignatureType": "SHA256",
        "UserContact": "+7467345493",
        "UserEmail": "markweins@gmail.com",
        "UserName": "Firstname Surname"
    }
}

```

* * *

#### Payment Redirect (Thailand)   [Skip link to Payment Redirect (Thailand)](https://docs.portone.cloud/docs/ipay88\#payment-redirect-thailand)

In the response of initiatePayment API with additional data but no redirect URl or deep link, then the merchants needs to submit the form using form method post.

##### Payment Redirect Sample   [Skip link to Payment Redirect Sample](https://docs.portone.cloud/docs/ipay88\#payment-redirect-sample)

JavaScript

```rdmd-code lang-javascript theme-light

<FORM method="post" name="ePayment" action={PostingURL}>
    <INPUT type="hidden" name="MerchantCode" value={MerchantCode}>
    <INPUT type="hidden" name="PaymentId" value={PaymentId}>
    <INPUT type="hidden" name="RefNo" value={RefNo}>
    <INPUT type="hidden" name="Amount" value={Amount}>
    <INPUT type="hidden" name="Currency" value={Currency}>
    <INPUT type="hidden" name="ProdDesc" value={ProdDesc}>
    <INPUT type="hidden" name="UserName" value={UserName}>
    <INPUT type="hidden" name="UserEmail" value={UserEmail}>
    <INPUT type="hidden" name="UserContact" value={UserContact}>
    <INPUT type="hidden" name="Remark" value="">
    <INPUT type="hidden" name="Lang" value="ISO-8859-1">
    <INPUT type="hidden" name="SignatureType" value={SignatureType}>
    <INPUT type="hidden" name="Signature" value={Signature}>
    <INPUT type="hidden" name="ResponseURL" value={ResponseURL}>
    <INPUT type="hidden" name="BackendURL" value={BackendURL}>
    <INPUT type="submit" value="Proceed with Payment" name="Submit">
</FORM>

```

* * *

#### Sample additional data response for initiatePayment (Indonesia)   [Skip link to Sample additional data response for initiatePayment (Indonesia)](https://docs.portone.cloud/docs/ipay88\#sample-additional-data-response-for-initiatepayment-indonesia)

JavaScript

```rdmd-code lang-javascript theme-light

{
"additional_data": {
        "CheckoutID": "7758028124035bd7baaa33b8d5a3b11803c8b0997a5d2a733affce6f1504f729",
        "Code": "1",
        "PostingURL": "https://sandbox.ipay88.co.id/PG/",
        "RefNo": {Order_ref},
        "Signature": "aa5134dee1343cfaec465f6134d4ce2b57fd92db5ea1cdb7e5321ee007b7d263"
    }
}

```

* * *

#### Payment Redirect (Indonesia)   [Skip link to Payment Redirect (Indonesia)](https://docs.portone.cloud/docs/ipay88\#payment-redirect-indonesia)

In the response of initiatePayment API with additional data but no redirect URl or deep link, then the merchants needs to submit the form using form method post.

##### Payment Redirect Sample   [Skip link to Payment Redirect Sample](https://docs.portone.cloud/docs/ipay88\#payment-redirect-sample-1)

JavaScript

```rdmd-code lang-javascript theme-light

<form method="POST" name="redirect" action={PostingURL}>
<input type="hidden" name="CheckoutID" value={CheckoutID} />
<input type="hidden" name="Signature" value={Signature} />
</form>
<script language=javascript>
document.redirect.submit();
</script>

```

* * *

### Reference links   [Skip link to Reference links](https://docs.portone.cloud/docs/ipay88\#reference-links)

- [iPay88 Indonesia Integration guide](https://ipay88.co.id/docs/pdf/iPay88_API_2.0.9_Technical_Documentation.pdf)
