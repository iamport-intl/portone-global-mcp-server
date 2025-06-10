---
url: "https://docs.portone.cloud/docs/zalopay"
title: "ZaloPay"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/zalopay\#introduction)

ZaloPay provides diverse payment solutions including QR payments, Credit Card (Visa/Master), ATM Cards and Bank Transfer Payment options.

Follow this guide to integrate ZaloPay acceptance on your mobile app or website.

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/zalopay\#supported-countries)

- Vietnam 🇻🇳

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/zalopay\#available-payment-methods)

Zalopay PG only supports VND(₫) currency.

| Payment Type | Payment Method Key | Status | Sandbox Availability |
| --- | --- | --- | --- |
| Local ATM Card | `ZALOPAY_ATMCARD` | ✅ | ✅ |
| Credit Card | `ZALOPAY_CREDITCARD` | ✅ | ✅ |
| Zalopay Wallet | `ZALOPAY_WALLET` | ✅ | ✅ |
| ZaloPay All | `ZALOPAY_ALL` | ✅ | ✅ |

> ## 📘  Note
>
> In case of multiple offerings of same payment method, merchants can configure the payment method from the payment channel of his choice.
>
> - e.g. To integrate `ZaloPay`, merchant can choose the `ZALOPAY_WALLET` payment method by configuring `ZaloPay` or via `Baokim` or `EPay` payment channels.
> - It will be merchants responsibility to configure appropriate Payment Channels and enable/disable required Payment Methods.

* * *

### Miscellaneous Details   [Skip link to Miscellaneous Details](https://docs.portone.cloud/docs/zalopay\#miscellaneous-details)

- Refunds can be initialized from the merchant portal, refund status can be checked at both merchant portal and zalopay Dashboard

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/zalopay\#sandbox)

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/zalopay\#credentials)

| Key | Value |
| --- | --- |
| appId | 554 |
| key1 | 8NdU5pG5R2spGHGhyO99HN1OhD8IQJBn |
| key2 | uUfsWgfLkRLzq6W2uNXTCxrfxs51auny |

* * *

#### Test Credit cards data   [Skip link to Test Credit cards data](https://docs.portone.cloud/docs/zalopay\#test-credit-cards-data)

| Type | Card number | Name | Valid through | CVV | Status |
| --- | --- | --- | --- | --- | --- |
| Visa | 4111111111111111 | NGUYEN VAN A | 01/22 | 123 | Success |

#### Test ATM cards data   [Skip link to Test ATM cards data](https://docs.portone.cloud/docs/zalopay\#test-atm-cards-data)

| Type | Card number | Name | Valid through | CVV | Status | Reason |
| --- | --- | --- | --- | --- | --- | --- |
| ATM Card | 9704540000000062 | NGUYEN VAN A | 10/18 | - | Success | - |
| ATM Card | 9704540000000013 | NGUYEN VAN A | 10/18 | - | Failed | Lost Card |
| ATM Card | 9704540000000039 | NGUYEN VAN A | 10/18 | - | Failed | Timeout |
| ATM Card | 9704540000000047 | NGUYEN VAN A | 10/18 | - | Failed | Out of Money |

* * *

#### Test Wallet Details   [Skip link to Test Wallet Details](https://docs.portone.cloud/docs/zalopay\#test-wallet-details)

Please use your Vietnam phone number. Add balance for sandbox environment using this link [Deposit to ZaloPay Account](https://docs.zalopay.vn/en/v1/start/#A-II)

* * *

#### Test Merchant account credentials   [Skip link to Test Merchant account credentials](https://docs.portone.cloud/docs/zalopay\#test-merchant-account-credentials)

[ZaloPay merchant console](https://sbmc.zalopay.vn/){:target="\_blank"}.

| Key | value |
| --- | --- |
| Username | 0925226173 |
| Password | Z@lopay123 |

### Download links   [Skip link to Download links](https://docs.portone.cloud/docs/zalopay\#download-links)

Download ZaloPay Sandbox App for making test payments:

- [Android app](https://dev.zalopay.com.vn/qrcode/public/app/android/merchant.html){:target="\_blank"}.
- [iOS app](https://stcstg.zalopay.com.vn/ps_res/ios/enterprise/sandboxmer/6.3.0/install.html){:target="\_blank"}

### Error code details   [Skip link to Error code details](https://docs.portone.cloud/docs/zalopay\#error-code-details)

- [ZaloPay error codes](https://docs.zalopay.vn/en/v1/general/errors.html){:target="\_blank"}.

### Reference links   [Skip link to Reference links](https://docs.portone.cloud/docs/zalopay\#reference-links)

- [ZaloPay integration](https://docs.zalopay.vn/en/v1/start/){:target="\_blank"}.

Updated8 months ago

* * *

Did this page help you?

Yes

No

![Help](https://cdn.jsdelivr.net/gh/iamport-intl/portone-devx-chatbot-widget@production/public/chat-intro1.svg)