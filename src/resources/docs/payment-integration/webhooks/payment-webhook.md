---
url: "https://docs.portone.cloud/docs/payment-webhook"
title: "Payment Webhook"
---

The payment webhook is sent when the status of the payment transaction changes.

Refer below for the sample payload.

JSON

```rdmd-code lang-json theme-light

{
  "currency": "USD",
  "amount": 500,
  "order_ref": "2mbbExY77pp8iC0AQ1ucWymnd3c",
  "channel_order_ref": "20240926HULUNYGP6MA2",
  "merchant_order_ref": "2mbbDi9wX3wAgLUDCnRMbQwkwZm_1",
  "country_code": "US",
  "status": "Success",
  "channel_key": "PAYLETTER",
  "method_name": "Payletter Credit Card",
  "method_key": "PAYLETTER_CREDIT_CARD",
  "method_sub_type": "INT_CREDIT_CARD",
  "buyer_name": "N K",
  "buyer_email": "nitesh@portone.io",
  "buyer_phone": "+919876543210",
  "buyer_address1": "address",
  "buyer_address2": "address_2",
  "buyer_city": "City",
  "buyer_country": "US",
  "signature_hash": "lSzZqm8I4G46b4nDtCqSUQ5/YgAhWn+IsFU893hciFM=",
  "status_code": "2000",
  "status_reason": "SUCCESS",
  "status_channel_reason": "SUCCESS | Transaction is success",
  "created_at": "2024-09-26 10:55:14.573735 +0000 UTC",
  "is_refund_allowed": true,
  "is_multi_refund_allowed": true,
  "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
  "description": "Test payment",
  "ip_address": "103.23.238.249",
  "link_order_ref": "54A42644707B254",
  "payment_link_ref": "2mbbDODqt4ZojDHa14IaiYwM4AM",
  "source": "checkout",
  "payment_method_used": "테스트카드 | ************4242",
  "merchant_name": "ShopCity",
  "merchant_key": "qcFJvupbcbdcyNFg",
  "merchant_email_address": "nitesh@portone.io",
  "channel_name": "PAYLETTER",
  "environment": "sandbox",
  "user_message": "The transaction is successful.",
  "receipt_url": "https://test-merchant.payletter.com/Receipt/OpenReceipt?id=5061796d656e74323031352334215061796c6574746572504f518a125381e51a6fe576e2d9bb88e0f5d9930060ebb3043d158a0afe8d779574a6a13c0544\u0026pgcode=PL",
  "masked_card_number": "************4242",
  "cross_border_data": {},
  "additional_payment_details": {},
  "installment_details": {},
  "is_cross_border_transaction": false
}

```

> ## 📘  Info
>
> Refer to [Payment Webhook Signature](https://docs.portone.cloud/docs/payment-webhook-response) section to verify the signature\_hash received in the webhook
>
> During testing you can use FOSS Webhook server to setup a webhook endpoint. Create a sample webhook endpoint at [webhook.site](https://webhook.site/)

### Parameter list   [Skip link to Parameter list](https://docs.portone.cloud/docs/payment-webhook\#parameter-list)

##### `amount`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#amount)

###### _float64_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#float64)

The amount of the transaction

* * *

##### `currency`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#currency)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string)

The currency of the transaction

* * *

##### `merchant_order_ref`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#merchant_order_ref)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-1)

Order Reference sent by merchant to initiate transaction

* * *

##### `order_ref`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#order_ref)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-2)

PortOne's Order Reference, used further for refund and other disputes

* * *

##### `channel_order_ref`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#channel_order_ref)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-3)

Payment Channel's Order Reference

* * *

##### `payment_link_ref`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#payment_link_ref)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-4)

Payment Link's Order Reference

* * *

##### `link_order_ref`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#link_order_ref)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-5)

Order Reference sent by merchant to initiate payment link

* * *

##### `country_code`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#country_code)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-6)

The country code of the transaction

* * *

##### `user_message`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#user_message)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-7)

The user message of the transaction

* * *

##### `status`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#status)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-8)

The current status of the transaction

* * *

##### `status_channel_reason`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#status_channel_reason)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-9)

The reason given by the PSP for the status

* * *

##### `status_code`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#status_code)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-10)

The status code of the transaction. Refer [Error Codes List](https://docs.portone.cloud/docs/error-codes) for more details.

* * *

##### `status_reason`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#status_reason)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-11)

The reason for the transaction status

* * *

##### `signature_hash`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#signature_hash)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-12)

Calculate hash as mentioned at [Hash Generation Reference](https://docs.portone.cloud/docs/payment-webhook-response), verify if it is equal to signature\_hash received in the webhook

* * *

##### `buyer_address1`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#buyer_address1)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-13)

The primary address of the buyer

* * *

##### `buyer_address2`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#buyer_address2)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-14)

The secondary address of the buyer

* * *

##### `buyer_city`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#buyer_city)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-15)

The city of the buyer

* * *

##### `buyer_country`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#buyer_country)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-16)

The country code of the buyer

* * *

##### `buyer_email`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#buyer_email)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-17)

The email address of the buyer

* * *

##### `buyer_name`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#buyer_name)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-18)

The name of the buyer

* * *

##### `channel_key`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#channel_key)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-19)

The key of the payment channel

* * *

##### `channel_name`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#channel_name)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-20)

The name of the payment channel

* * *

##### `method_key`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#method_key)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-21)

The key of the payment method used for the transaction

* * *

##### `method_name`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#method_name)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-22)

The name of the payment method used for the transaction

* * *

##### `method_sub_type`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#method_sub_type)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-23)

The sub type of the payment method used for the transaction

* * *

##### `merchant_key`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#merchant_key)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-24)

The PortOne key of the merchant

* * *

##### `merchant_name`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#merchant_name)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-25)

The name of the merchant

* * *

##### `merchant_email_address`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#merchant_email_address)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-26)

The email address of the merchant

* * *

##### `source`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#source)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-27)

The source of the transaction

* * *

##### `ip_address`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#ip_address)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-28)

The IP address of the buyer

* * *

##### `user_agent`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#user_agent)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-29)

The user agent of the transaction

* * *

##### `created_at`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#created_at)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-30)

The date and time when the transaction was created

* * *

##### `is_refund_allowed`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#is_refund_allowed)

###### _boolean_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#boolean)

This boolean flag indicates whether a transaction is eligible for a refund, with a value of _true_ meaning the refund can be processed and _false_ meaning refunds are not permitted.

* * *

##### `is_multi_refund_allowed`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#is_multi_refund_allowed)

###### _boolean_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#boolean-1)

This boolean flag indicates whether multiple partial refunds can be issued for a single transaction. A value of _true_ means that the transaction supports multiple refunds, while _false_ means only a single refund or no partial refunds are allowed.

* * *

##### `environment`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#environment)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-31)

The environment of the transaction

* * *

##### `refund_status`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#refund_status)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-32)

The status of the refund

* * *

##### `description`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#description)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-33)

The description of the transaction

* * *

##### `payment_method_used`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#payment_method_used)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-34)

The payment method used for the transaction

* * *

##### `receipt_url`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#receipt_url)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-35)

The URL of the receipt of the transaction

* * *

##### `masked_card_number`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#masked_card_number)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-36)

The masked card number is the partially hidden representation of a credit or debit card number used for the transaction

* * *

##### `is_cross_border_transaction`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#is_cross_border_transaction)

###### _boolean_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#boolean-2)

This Boolean flag indicates if the transaction is a cross border transaction.

* * *

##### `cross_border_data`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#cross_border_data)

###### _object_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#object)

The JSON object for the cross-border data

> ##### `forex_details`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#forex_details)
>
> ###### _object_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#object-1)
>
> > ##### `forex_rate`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#forex_rate)
> >
> > ##### _double_ · The exchange applicable on the transaction   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#double-%C2%B7-the-exchange-applicable-on-the-transaction)
> >
> > ##### `invoice_amount`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#invoice_amount)
> >
> > ##### _double_ · The original amount of the payment link   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#double-%C2%B7-the-original-amount-of-the-payment-link)
> >
> > ##### `invoice_currency`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#invoice_currency)
> >
> > ##### _string_ · The original currency of the payment link   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-%C2%B7-the-original-currency-of-the-payment-link)
> >
> > ##### `payment_amount`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#payment_amount)
> >
> > ##### _double_ · The actual amount paid by the customer in case of DCC   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#double-%C2%B7-the-actual-amount-paid-by-the-customer-in-case-of-dcc)
> >
> > ##### `payment_currency`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#payment_currency)
> >
> > ##### _string_ · The actual currenct used by customer in case of DCC   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string-%C2%B7-the-actual-currenct-used-by-customer-in-case-of-dcc)

* * *

##### `additional_data`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#additional_data)

###### _object_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#object-2)

The additional data of the transaction provided by the payment channel

* * *

##### `installment_details`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#installment_details)

###### _object_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#object-3)

The JSON object of instalment details of the transaction

> ##### `bank_code`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#bank_code)
>
> ###### _string_ · The bank code from which the installment payment was done   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#string--%C2%B7-the-bank-code-from-which-the-installment-payment-was-done)
>
> ##### `interest`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#interest)
>
> ###### _double_ · Applicate interest rate by Bank for the instalment   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#double-%C2%B7-applicate-interest-rate-by-bank-for-the-instalment)
>
> ##### `is_merchant_sponsored`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#is_merchant_sponsored)
>
> ###### _bool_ · Flag to denote if the interest is beared by merchant   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#bool-%C2%B7-flag-to-denote-if-the-interest-is-beared-by-merchant)
>
> ##### `period`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#period)
>
> ##### _integer_ · The number of months for the installment   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook\#integer-%C2%B7-the-number-of-months-for-the-installment)

* * *
