---
url: "https://docs.portone.cloud/docs/subscription-redirection-parameters"
title: "Subscription Redirection Parameters"
---

Merchant will receive following data as query parameters upon redirection after payment completion:

> ## 📘  Note
>
> 1. Refer [Error Codes List](https://docs.portone.cloud/docs/error-codes) for more details.
>
> 2. Refer [Signature Verification](https://docs.portone.cloud/docs/subscription-redirect-response) to check for Signature verification of response data received in the subscription redirection.

### Parameter List   [Skip link to Parameter List](https://docs.portone.cloud/docs/subscription-redirection-parameters\#parameter-list)

##### `amount`   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#amount)

###### _double_   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#double)

The amount for the first deduction in a REGULAR subscription. This field does not apply to ONDEMAND subscriptions.

* * *

##### `channel_order_ref`   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#channel_order_ref)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#string)

Payment Channel's Order Reference

* * *

##### `currency`   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#currency)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#string-1)

The currency of the subscription

* * *

##### `frequency`   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#frequency)

###### _integer_   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#integer)

The frequency of the subscription

* * *

##### `initial_amount`   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#initial_amount)

###### _double_   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#double-1)

The amount of the first deduction in an ONDEMAND subscription. This field does not apply to REGULAR subscriptions.

* * *

##### `lang`   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#lang)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#string-2)

The language preference for the transaction (e.g., "en" for English).

* * *

##### `link_order_ref`   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#link_order_ref)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#string-3)

The merchant order reference of the subscription link

* * *

##### `merchant_brand_name`   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#merchant_brand_name)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#string-4)

The brand name of the merchant

* * *

##### `merchant_logo`   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#merchant_logo)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#string-5)

The URL link to the merchant's logo image.

* * *

##### `merchant_order_ref`   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#merchant_order_ref)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#string-6)

Unique reference ID for the subscription payment attempt by the customer.

* * *

##### `message`   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#message)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#string-7)

A message indicating the result of the subscription

* * *

##### `next_deduction_date`   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#next_deduction_date)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#string-8)

The date for the next deduction in the subscription cycle, in UTC format for a REGULAR subscription. This field does not apply to ONDEMAND subscriptions.

* * *

##### `order_ref`   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#order_ref)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#string-9)

Unique PortOne reference ID for the subscription payment attempted by the customer.

* * *

##### `payment_source`   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#payment_source)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#string-10)

The source of the subscription

* * *

##### `period`   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#period)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#string-11)

The period of the subscription for a REGULAR subscription. This field does not apply to ONDEMAND subscriptions.

* * *

##### `recurrance_amount`   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#recurrance_amount)

###### _double_   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#double-2)

The recurring amount for each cycle of a REGULAR subscription. This field does not apply to ONDEMAND subscriptions.

* * *

##### `recurrance_count`   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#recurrance_count)

###### _integer_   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#integer-1)

The total number of recurrence cycles for a REGULAR subscription. This field does not apply to ONDEMAND subscriptions.

* * *

##### `signature_hash`   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#signature_hash)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#string-12)

A hash signature for validating the authenticity of the subscription.

* * *

##### `status`   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#status)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#string-13)

The current status of the subscription.

* * *

##### `status_channel_reason`   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#status_channel_reason)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#string-14)

The reason provided by the channel for the subscription status

* * *

##### `status_code`   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#status_code)

###### _integer_   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#integer-2)

The code representing the subscription status

* * *

##### `status_reason`   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#status_reason)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#string-15)

A description of the reason for the subscription

* * *

##### `subscription_order_ref`   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#subscription_order_ref)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#string-16)

The PortOne order reference of the subscription

* * *

##### `subscription_type`   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#subscription_type)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#string-17)

The type of subscription (e.g., "REGULAR").

* * *

##### `total_additional_cost`   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#total_additional_cost)

###### _double_   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#double-3)

The total additional cost associated with the subscription.

* * *

##### `total_amount`   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#total_amount)

###### _double_   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-parameters\#double-4)

The total amount of the subscription, including additional costs.

* * *

Updated5 months ago

* * *

Did this page help you?

Yes

No

![Help](https://cdn.jsdelivr.net/gh/iamport-intl/portone-devx-chatbot-widget@production/public/chat-intro1.svg)