---
url: "https://docs.portone.cloud/docs/atome"
title: "Atome"
---

# Atome Integration   [Skip link to Atome Integration](https://docs.portone.cloud/docs/atome\#atome-integration)

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/atome\#introduction)

Atome is a leading "buy now, pay later" brand in Asia that splits consumers' bills into three equal, zero interest payments over time.

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/atome\#available-payment-methods)

Atome PG only supports the following currency.

| Payment Type | Payment Method Key | Currency | Status | Sandbox Availability |
| --- | --- | --- | --- | --- |
| BNPL | `ATOME_BNPL` | SGD, HKD, MYR, IDR, THB, TWD, VND, PHP, JPY | ✅ | ✅ |

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/atome\#sandbox)

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/atome\#credentials)

| **Country Code** | **Username** | **Password** |
| --- | --- | --- |
| VN | 8ec118417e4748539cf962dff783625c | cc34a3427e61471cb4ea89fd25b03005 |
| ID | 6b2184d746f54aa994428c92ba459df0 | 811f5039048046ae95c7417aa56073a0 |
| SG | d425cbf9a395403291f86326becc0644 | 9cfab00d2cdb449c9f3de5ba39829178 |
| PH | a8b33a2967fe466f9bd6d187ad64a44a | 2bc886a157d545adaeccee29a4a538ef |
| TH | 83f1aa45e2bd4b488a753b7363c79d08 | 18432f0929d6480eb99eef56e63d843c |
| HK | a1b49fd3d99948fb96e747a7e0a9945f | 10bf15b68760429fb35920389cbb2727 |
| MY | 9339df4cf2494e7eab0b7d0d82b3f0f9 | f43285015d5b40c9bac43fa475a830c3 |
| TW | 2e6b001f0f354919ace352bbe77af29e | 3581b494c95941909f780240ffdb153c |
| JP | 3d059028b07f40d58b0351022a26b3dc | 30491cd21077420193fb9ba4661e7641 |

* * *

#### Test app login details   [Skip link to Test app login details](https://docs.portone.cloud/docs/atome\#test-app-login-details)

| **Country Code** | **Success Mobile** | **Success OTP** | **Failure Mobile** | **Failure OTP** |
| --- | --- | --- | --- | --- |
| VN | +84 900002002 | 2421 | - | - |
| ID | +62 8201620001 | 9835 | +62 812345678241 | 1111 |
| SG | +65 80002026 | 8251 | +65 80001500 | 1111 |
| PH | +63 8000002000 | 3234 | +63 8000001500 | 1111 |
| TH | +66 900002001 | 2246 | +66 900001500 | 1111 |
| HK | +852 90002025 | 8609 | +852 90001500 | 1111 |
| MY | +60 180002001 | 6863 | +60 100001500 | 1111 |
| TW | +886 900002002 | 5437 | +886 900001500 | 1111 |
| JP | +81 09000002001 | 8786 | +81 09000001500 | 1111 |

* * *

:::note

In case of VN region e-sign code: 111111, card: ABBbank card no: 9704-2500-0000-0084. Enter all other information randomly (2nd field - Name needs a space), mobile number: enter a random number starting with 08, bank otp : 1111

:::

#### Test app details   [Skip link to Test app details](https://docs.portone.cloud/docs/atome\#test-app-details)

| **Country Code** | **Android App Link** | **IOS App Link** |
| --- | --- | --- |
| VN | [https://www.pgyer.com/hkWA](https://www.pgyer.com/hkWA) | [https://testflight.apple.com/join/VkeLLLEC](https://testflight.apple.com/join/VkeLLLEC) |
| ID | [https://www.pgyer.com/IhxL](https://www.pgyer.com/IhxL) | [https://testflight.apple.com/join/8F3hoqpj](https://testflight.apple.com/join/8F3hoqpj) |
| SG | [https://www.pgyer.com/m4OL](https://www.pgyer.com/m4OL) | [https://testflight.apple.com/join/sWZnRQxH](https://testflight.apple.com/join/sWZnRQxH) |
| PH | [https://www.pgyer.com/fWZ7](https://www.pgyer.com/fWZ7) | [https://testflight.apple.com/join/pitNHnF3](https://testflight.apple.com/join/pitNHnF3) |
| TH | [https://www.pgyer.com/ePY5](https://www.pgyer.com/ePY5) | [https://testflight.apple.com/join/ipKPABbx](https://testflight.apple.com/join/ipKPABbx) |
| HK | [https://www.pgyer.com/R2fk](https://www.pgyer.com/R2fk) | [https://testflight.apple.com/join/BL7ZzCTb](https://testflight.apple.com/join/BL7ZzCTb) |
| MY | [https://www.pgyer.com/vBsC](https://www.pgyer.com/vBsC) | [https://testflight.apple.com/join/SPxKJdnB](https://testflight.apple.com/join/SPxKJdnB) |
| TW | [https://www.pgyer.com/XTue](https://www.pgyer.com/XTue) | [https://testflight.apple.com/join/H6DfcQhL](https://testflight.apple.com/join/H6DfcQhL) |
| JP | [https://www.pgyer.com/su0a](https://www.pgyer.com/su0a) | In-development, available end Q2 '2022 |

#### Use following values in embedded JS code to pay via Atome channel   [Skip link to Use following values in embedded JS code to pay via Atome channel](https://docs.portone.cloud/docs/atome\#use-following-values-in-embedded-js-code-to-pay-via-atome-channel)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "ATOME",
    "pmt_method": { Any of above given payment method keys },

```

* * *

### Reference links   [Skip link to Reference links](https://docs.portone.cloud/docs/atome\#reference-links)

- [Atome Integration guide](https://doc.apaylater.com/v2/)

Updated8 months ago

* * *

Did this page help you?

Yes

No

![Help](https://cdn.jsdelivr.net/gh/iamport-intl/portone-devx-chatbot-widget@production/public/chat-intro1.svg)