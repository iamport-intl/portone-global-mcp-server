---
url: "https://docs.portone.cloud/docs/redirect-parameters"
title: "Redirection Parameters"
---

Merchant will receive following data as query parameters upon redirection after payment completion:

> ## 📘  Note
>
> 1. Refer [Error Codes List](https://docs.portone.cloud/docs/error-codes) for more details.
>
> 2. Refer [Signature Verification](https://docs.portone.cloud/docs/redirect-response) to check for Signature verification of response data received in redirection.

### Parameter list   [Skip link to Parameter list](https://docs.portone.cloud/docs/redirect-parameters\#parameter-list)

##### `amount`   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#amount)

###### _double_   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#double)

The amount of the transaction

* * *

##### `currency`   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#currency)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#string)

The currency of the transaction

* * *

##### `merchant_order_ref`   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#merchant_order_ref)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#string-1)

Order Reference sent by merchant to initiate transaction

* * *

##### `order_ref`   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#order_ref)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#string-2)

PortOne's Order Reference, used further for refund and other disputes

* * *

##### `channel_order_ref`   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#channel_order_ref)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#string-3)

Payment Channel's Order Reference

* * *

##### `link_order_ref`   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#link_order_ref)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#string-4)

Order Reference sent by merchant to initiate payment link

* * *

##### `message`   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#message)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#string-5)

The user message of the transaction

* * *

##### `status`   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#status)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#string-6)

The current status of the transaction

* * *

##### `status_channel_reason`   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#status_channel_reason)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#string-7)

The reason given by the PSP for the status

* * *

##### `status_code`   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#status_code)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#string-8)

The status code of the transaction. Refer [Error Codes List](https://docs.portone.cloud/docs/error-codes) for more details.

* * *

##### `status_reason`   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#status_reason)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#string-9)

The reason for the transaction status

* * *

##### `signature_hash`   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#signature_hash)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#string-10)

Calculate hash as mentioned at [Hash Generation Reference](https://docs.portone.cloud/docs/redirect-response), verify if it is equal to signature\_hash

* * *

##### `buyer_address1`   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#buyer_address1)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#string-11)

The primary address of the buyer

* * *

##### `buyer_address2`   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#buyer_address2)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#string-12)

The secondary address of the buyer

* * *

##### `buyer_city`   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#buyer_city)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#string-13)

The city of the buyer

* * *

##### `buyer_country`   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#buyer_country)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#string-14)

The country code of the buyer

* * *

##### `buyer_email`   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#buyer_email)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#string-15)

The email address of the buyer

* * *

##### `buyer_name`   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#buyer_name)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#string-16)

The name of the buyer

* * *

##### `buyer_phone`   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#buyer_phone)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#string-17)

The phone number of the buyer

* * *

##### `channel_key`   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#channel_key)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#string-18)

The key of the payment channel

* * *

##### `channel_name`   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#channel_name)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#string-19)

The name of the payment channel

* * *

##### `description`   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#description)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#string-20)

The description of the transaction

* * *

##### `lang`   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#lang)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#string-21)

The language code used

* * *

##### `merchant_brand_name`   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#merchant_brand_name)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#string-22)

The brand name of the merchant

* * *

##### `merchant_logo`   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#merchant_logo)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#string-23)

The URL of the merchant's logo

* * *

##### `method_key`   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#method_key)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#string-24)

The key of the payment method used for the transaction

* * *

##### `method_name`   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#method_name)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#string-25)

The name of the payment method used for the transaction

* * *

##### `payment_source`   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#payment_source)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#string-26)

The source of the transaction

* * *

##### `support_email`   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#support_email)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#string-27)

The support email for the transaction

* * *

##### `support_phone`   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#support_phone)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/redirect-parameters\#string-28)

The support phone for the transaction

* * *

Updated8 months ago

* * *

Did this page help you?

Yes

No

![Help](https://cdn.jsdelivr.net/gh/iamport-intl/portone-devx-chatbot-widget@production/public/chat-intro1.svg)