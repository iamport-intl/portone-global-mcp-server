---
url: "https://docs.portone.cloud/docs/epay"
title: "EPay"
---

# EPAY Integration   [Skip link to EPAY Integration](https://docs.portone.cloud/docs/epay\#epay-integration)

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/epay\#introduction)

Established in 2008, VNPT-EPAY has more than 10 years of experience in deploying electronic payment solutions based on modern technology, a stable system according to PCI DSS security standards . With more than 5 million transactions processed monthly with an output of more than 3,500 billion VND, we are always confident and ready for new cooperation opportunities because our core value is reflected in the name EPAY : Easy Integration – Professionalism – Advanced Technology & Yes (Always ready for new cooperation opportunities).

Follow this guide to integrate EPAY acceptance on your mobile app or website

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/epay\#supported-countries)

- Vietnam 🇻🇳

* * *

### Available payment methods   [Skip link to Available payment methods](https://docs.portone.cloud/docs/epay\#available-payment-methods)

Epay PG only supports VND(₫) currency.

| Payment Type | Payment Method Key | Status |
| --- | --- | --- |
| MomoPay Wallet | `EPAY_MOMOPAY_WALLET` | ✅ |
| ZaloPay Wallet | `EPAY_ZALOPAY_WALLET` | ✅ |
| Moca Wallet | `EPAY_MOCA_WALLET` | ✅ |
| ShopeePay Wallet | `EPAY_SHOPEEPAY_WALLET` | ✅ |
| ViettelPay Wallet | `EPAY_VIETTELPAY_WALLET` | ✅ |
| Epay all | `EPAY_ALL` | ✅ |
| Local ATM Card | `EPAY_ATM_CARD` | ✅ |
| Credit Card | `EPAY_CREDIT_CARD` | ✅ |
| Epay Virtual Account | `EPAY_VIRTUAL_ACCOUNT` | ✅ |
| Epay Installments | `EPAY_INSTALLMENT` | ✅ |

* * *

### Miscellaneous Details   [Skip link to Miscellaneous Details](https://docs.portone.cloud/docs/epay\#miscellaneous-details)

- Refunds can be initialized from the merchant portal, refund status can be checked at both merchant portal

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/epay\#sandbox)

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/epay\#credentials)

| Key | Value |
| --- | --- |
| merchantId | EPAY000001 |
| encodeKey | rf8whwaejNhJiQG2bsFubSzccfRc/iRYyGUn6SPmT6y/L7A2XABbu9y4GvCoSTOTpvJykFi6b1G0crU8et2O0Q== |
| cancelPw | ZViyRKnVlaXPEpWYqaflY9LPvBiIuSKv4ORACoy6DxO0QsiAD+qfWeZhY1H8d9nGANjx5aEKNyUQx4JV95u+HQ== |

#### Test cards data   [Skip link to Test cards data](https://docs.portone.cloud/docs/epay\#test-cards-data)

Credit Card details

| Type | Card number | Valid through | CVV | 3DS password |
| --- | --- | --- | --- | --- |
| Visa card | 4456530000001005 | 11/23 | 123 | No need for password |
| Master card | 5200000000001005 | 11/23 | 123 | No need for password |
| JCB | 3337000000000008 | 11/23 | 123 | No need for password |
| Visa card | 4456530000001096 | 11/23 | 123 | 1234 |
| Master card | 5200000000001096 | 11/23 | 123 | 1234 |
| JCB | 3337000000200004 | 11/23 | 123 | 1234 |

ATM Card Details

| Type | Card number | Name | Valid through | OTP | Bank Name |
| --- | --- | --- | --- | --- | --- |
| ATM Card | 9704000000000018 | NGUYEN VAN A | 03/07 | Otp | NAPAS |
| ATM Card | 9704250000000001 | NGUYEN VAN A | 12/08 | 123456 | AB Bank |

ViettelPay Wallet

| Username | Password |
| --- | --- |
| 0983725525 | 111111 |

ShopeePay Wallet

- [Link 1](https://webapp.diawi.com/install/bTFk8Z)
- [Link 2](https://webapp.diawi.com/install/Nc28b5)

| Phone Number | Password | OTP |
| --- | --- | --- |
| 097111111 | 135790 | 111111 |
| 0922777777 | 135790 | 111111 |
| 0933888888 | 135790 | 111111 |
| 0933777777 | 135790 | 111111 |
| 0933666666 | 135790 | 111111 |

#### Wallets   [Skip link to Wallets](https://docs.portone.cloud/docs/epay\#wallets)

NOTE: To test wallets, please check respective testing sections. Also, the amount for transaction should be between 1,000 VND to 20,000,000 VND.

#### Use following values in embedded JS code to pay via EPay channel   [Skip link to Use following values in embedded JS code to pay via EPay channel](https://docs.portone.cloud/docs/epay\#use-following-values-in-embedded-js-code-to-pay-via-epay-channel)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "EPAY",
    "pmt_method": { Any of above given payment method keys },

```

* * *

### Error code details   [Skip link to Error code details](https://docs.portone.cloud/docs/epay\#error-code-details)

- [EPAY error codes](https://drive.google.com/file/d/1SdohMqmWkXN7UCiVGc4cE9hstrfuODpy/view)

### Reference links   [Skip link to Reference links](https://docs.portone.cloud/docs/epay\#reference-links)

- [EPAY integration](https://drive.google.com/file/d/1SdohMqmWkXN7UCiVGc4cE9hstrfuODpy/view)
