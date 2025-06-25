---
url: "https://docs.portone.cloud/docs/truemoney"
title: "TrueMoney"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/truemoney\#introduction)

TrueMoney is operated by Ascend Money Group with more than 40 million users (in 2018) through the TrueMoney Wallet application and over a network of agents (TrueMoney Center). 65,000 locations in 6 countries.

We have emerged as the leading fintech company in Southeast Asia delivering innovations in electronic payments. and a wide range of financial services covering 6 countries in the region (Thailand, Cambodia, Myanmar, Indonesia, Philippines and Vietnam) to help unlock millions of people with convenient access to financial services. and accessible every day.

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/truemoney\#supported-countries)

- Thailand 🇹🇭

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/truemoney\#available-payment-methods)

TrueMoney PG currently supports THB(฿) currency.

| Payment Type | Payment Method Key | Status | Sandbox Availability |
| --- | --- | --- | --- |
| All methods via mobile app | `TRUEMONEY_ALL` | ✅ | ✅ |

:::note

In case of multiple offerings of same payment method, merchants can configure the payment method from the payment channel of his choice.

- e.g. To integrate `TrueMoney`, merchant can choose the `TRUEMONEY_ALL` payment method by configuring `True Money` or via `Omise` or `Chill Pay` or any other payment channels.
- It will be merchants responsibility to configure appropriate Payment Channels and enable/disable required Payment Methods.

:::

* * *

### Miscellaneous Details   [Skip link to Miscellaneous Details](https://docs.portone.cloud/docs/truemoney\#miscellaneous-details)

- Wallet payments can be refunded in full or multiple partial refunds.
- Other methods like Credit card, ATM card only support full refunds.
- Copy the Webhook URL provided in the PortOne Admin Dashboard and ask TrueMoney team to configure it to receive the webhook notifications

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/truemoney\#sandbox)

#### Use following values in embedded JS code to pay via TrueMoney channel   [Skip link to Use following values in embedded JS code to pay via TrueMoney channel](https://docs.portone.cloud/docs/truemoney\#use-following-values-in-embedded-js-code-to-pay-via-truemoney-channel)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "TRUEMONEY",
    "pmt_method": { Any of above given payment method keys },

```

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/truemoney\#credentials)

| Key | Value |
| --- | --- |
| apiKey | be4722f878304553843ff4cfaddb18a4 |
| merchantId | 010000000028406478969 |
| shopId | 300000000000000550690 |
| privateKey | **Given below** |

- For **Private key** field follow the below steps:

  - Go to the directory where your private key file is located
  - Run the below command to view the contents of the file
  - Copy the content including the `-----BEGIN RSA PRIVATE KEY-----` & `-----END RSA PRIVATE KEY-----`, paste it in the `privateKey` field

Shell

```rdmd-code lang-shell theme-light

demoUser@Demo ~ % cat private.key
-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA24IcaCfDs/vdl9DcrEo2OWzwf5+qBHVDZ9pO66PmE4VJOSKe
0NN+Zq80O9BcHtUTiLFPyPgwiGfqamGYiDdRTmDXFs1KGpioUiPV3gY0wfRH6iTJ
D3yXImNDzj4GTHzrKb6TrkmjpnKldyiJ+DYGj754vI7L7csFp0F9s426S+j/0CJi
DamoRTCVTJmPwur58ii+HKa3AYbWCLqY1oolFWNv6n0jgh1d4by8kqNIiPiAH91U
Xm92wv+zUjEoZRgjzy+HkINZP7OGrhwYGZnlICZ8GBJ5b4ekuZREu1sES4YIeV5O
Sjmv9TBd7IeE1TbW8ER8RECwn2ad61qZz8Kh7wIDAQABAoIBAGwofB7GGSQCInm/
rDwohPdeulHoNjnkHcZ6RxDMvX0424+Pg3mZ/FpUUgR28i0vCGT+GTYJNMDBkzu/
wwy7VRCtns3ZcX4RYj628ZZosG4xE45HedprpXyINMzWuvvNQYJcKSBjoINPUkCY
dQMce7cwPwWJxunwc2SqXGmwl+72gZU2jxOIcFXixEl7fGbIr4U2mTYJKlgGlP7G
lveTHjoeOLevux+dsrX/1MTZvxwzltXt1p//XOIiNw2R+M3yTuWHWKqTEe1n6DR4
YFYWX4XSnn8Jxstg2CUE9IOZ7H2nn+mg52/zovfOxBWgdgNPxmFrUriHRThSnV8q
fs9gFAECgYEA/WDBWbvJfPRkX2mpAQC7AqtR0wZ/XMEOk6PKr+Je6wcflYdDcQho
x2lJVC03UuKW9m69gQNp9p70nVG1Bqiy34mYlG2eJ59gMBAx2hLEdcdzIksse+FP
UB/zYifen1Hn4QFoWc4WzxGcqQUHSe+V//FNl3rq3BP91Y7Rpff0P28CgYEA3ceg
7VllGet1JcaHW8gTsYerxcowGgdBpUHeVBY9w2J8JhDWa6u04u1hJvjC2NdaQIX+
FMKSmx1cCKdGVOrj8aq6kzplHFAdYsJQcHVzX3U5IqyVRbhFbkVdVEk7YwtHmnkg
qSpUg6Hj95aypyCQbphV1ZEIeWE0KUlqHTXmhYECgYBbJyjH+HfHHUDS1nc3ZiTh
E/MO4OKG4uk0khND7UNKeDiTmaLYkjbnrmf0AYRKrDu1EifYtvqy/4Ju6ksexyf6
pUyf8UOZa4u2Hs1gb6n/2S4BY1vwgSEAaU4svL0pQdUSrGf3Dt5Dxkk+wRFbNvcW
qZ/JZC4D2KlT39pqQ+a5vwKBgQDQ6CtxiASQ/tdRpwl37iaG0tp+LG9VBULTzREF
OhIhytJQ9QlVUN/J5nreP/MiWPC92Lm2inWYwXYg/JhmgwAGc6Dd8GKv4dNcZNdq
p2fvIjeYruLJUsOsFJDORVE4gbaIDtMyJhqIB+X6IazVevoyAzLPQpet5l9BCNN5
An3LgQKBgQCNtMS63VP8b1ecgT51dd/QDecF4ulSBSgUXVCdte8gEvviZGk0Bh7o
Vdc02aWBTFTEodBJc1D8QLb31RNv9SnQX940H4QvYFBck7kDacPeWeCWAuVbcgC7
Ai3ulIk4RVdqHYX5wiPqKeypkj3Z7bUDdBLPvO7gywcXydY4L4EauA==
-----END RSA PRIVATE KEY-----

```

* * *

#### Test application details   [Skip link to Test application details](https://docs.portone.cloud/docs/truemoney\#test-application-details)

- For android devices: [Link](https://s3-ap-southeast-1.amazonaws.com/mobile-resource.tewm-staging/thirdparty/index.html)
  - Open the above link from your Android device.
  - Select android version
  - Click install
- For iOS devices: [Link](https://testflight.apple.com/join/FFgcl8kO)
  - Open the above link from your iPhone and click “Install Testflight”. In the App store click “Install” and wait until installation is complete.
  - Open Testflight and click “Continue”, then click “INSTALL”
  - Open the TrueMoney application.

**App login credentials**

- Mobile No : 064-703-4672
- Password: 0000000000Demo (for login app)
- PIN : 000000
- OTP : 123456
