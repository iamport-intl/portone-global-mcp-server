---
url: "https://docs.portone.cloud/docs/refund-webhook"
title: "Refund Webhook"
---

The refund webhook is sent when the status of the refund transaction changes.

Refer below for the sample payload.

JSON

```rdmd-code lang-json theme-light

{
    "refund_date": "2024-09-26 10:42:24.650023 +0000 UTC",
    "refund_id": "oKYR4vZ7ddvEAbfm9U9w2c",
    "psp_refund_id": "281m16unk3u60obtagljvxhyn",
    "amount": 500,
    "currency": "JPY",
    "refund_status": "SUCCESS",
    "refund_type": "full",
    "refund_reason": "duplicate",
    "merchant_id": "6539",
    "description": "Refund for transaction oKYR4vZ7ddvEAbfm9U9w2c",
    "payment_txn_ref": "2mbZeehV4ZhkLTwVcL2fHukBg4J",
    "payment_channel": "KOMOJU",
    "payment_method": "Alipay wallet via KOMOJU"
}

```

> ## 📘  Info
>
> During testing you can use FOSS Webhook server to setup a webhook endpoint. Create a sample webhook endpoint at [webhook.site](https://webhook.site/)

### Parameter list   [Skip link to Parameter list](https://docs.portone.cloud/docs/refund-webhook\#parameter-list)

##### `refund_date`   [Skip link to [object Object]](https://docs.portone.cloud/docs/refund-webhook\#refund_date)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/refund-webhook\#string)

The date and time when the refund was created

* * *

##### `refund_id`   [Skip link to [object Object]](https://docs.portone.cloud/docs/refund-webhook\#refund_id)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/refund-webhook\#string-1)

The unique ID of the refund provided by merchant

* * *

##### `psp_refund_id`   [Skip link to [object Object]](https://docs.portone.cloud/docs/refund-webhook\#psp_refund_id)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/refund-webhook\#string-2)

The unique ID of the refund provided by PSP

* * *

##### `amount`   [Skip link to [object Object]](https://docs.portone.cloud/docs/refund-webhook\#amount)

###### _float64_   [Skip link to [object Object]](https://docs.portone.cloud/docs/refund-webhook\#float64)

The amount of the refund transaction

* * *

##### `currency`   [Skip link to [object Object]](https://docs.portone.cloud/docs/refund-webhook\#currency)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/refund-webhook\#string-3)

The currency of the refund transaction

* * *

##### `refund_status`   [Skip link to [object Object]](https://docs.portone.cloud/docs/refund-webhook\#refund_status)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/refund-webhook\#string-4)

The status of the refund transaction

* * *

##### `refund_type`   [Skip link to [object Object]](https://docs.portone.cloud/docs/refund-webhook\#refund_type)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/refund-webhook\#string-5)

The type of the refund field indicates whether a _full_ refund or _partial_ refund was requested

* * *

##### `refund_reason`   [Skip link to [object Object]](https://docs.portone.cloud/docs/refund-webhook\#refund_reason)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/refund-webhook\#string-6)

The reason for the refund

* * *

##### `merchant_id`   [Skip link to [object Object]](https://docs.portone.cloud/docs/refund-webhook\#merchant_id)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/refund-webhook\#string-7)

The merchant's id

* * *

##### `description`   [Skip link to [object Object]](https://docs.portone.cloud/docs/refund-webhook\#description)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/refund-webhook\#string-8)

The description of the refund

* * *

##### `payment_txn_ref`   [Skip link to [object Object]](https://docs.portone.cloud/docs/refund-webhook\#payment_txn_ref)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/refund-webhook\#string-9)

The PortOne transaction reference of the transaction against which the refund was requested

* * *

##### `payment_channel`   [Skip link to [object Object]](https://docs.portone.cloud/docs/refund-webhook\#payment_channel)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/refund-webhook\#string-10)

The payment channel used to make the payment for the transaction

* * *

##### `payment_method`   [Skip link to [object Object]](https://docs.portone.cloud/docs/refund-webhook\#payment_method)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/refund-webhook\#string-11)

The payment method used to make the payment for the transaction

* * *

Updated8 months ago

* * *

Did this page help you?

Yes

No

![Help](https://cdn.jsdelivr.net/gh/iamport-intl/portone-devx-chatbot-widget@production/public/chat-intro1.svg)