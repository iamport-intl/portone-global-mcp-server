---
url: "https://docs.portone.cloud/docs/hero-plus"
title: "Hero Plus"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/hero-plus\#introduction)

HeroPlus is a payment gateway that enables merchants to receive payments from their customers in a simple and secure way. Heroplus offers Buy Now Pay Later. Follow this guide to integrate HeroPlus acceptance on your mobile app or website.

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/hero-plus\#supported-countries)

- Thailand 🇹🇭

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/hero-plus\#available-payment-methods)

HeroPlus PG supports THB(฿) currency.

| Payment Type | Payment Method Key | Currency | Status | Sandbox Availability |
| --- | --- | --- | --- | --- |
| BNPL | HEROPLUS\_BNPL | THB | ✅ | ✅ |

### Refund Details   [Skip link to Refund Details](https://docs.portone.cloud/docs/hero-plus\#refund-details)

Refunds are possible from the HeroPlus dashboard. Please contact HeroPlus support for more details.

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/hero-plus\#sandbox)

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/hero-plus\#credentials)

| Key | Value |
| --- | --- |
| AccessId | aee632fe-7d9d-4a31-95c4-6335835a1bdf |
| AccessPublicKey | -----BEGIN PUBLIC KEY----- MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxu1PE9uI5ey4 Cj5/caHVFLeEVv+KpfdX6tBU5O7gl1qke9t6AD+E5OPjvMcw55VSqdMI ouOBxbAH8+AgEDrknJl8VO8DAUHMLPwnrfg7+gFwxjO4S9yMrZzL7ySo J8h3J5pPUj51LbeQZavN5yYT2hgViS+XsDDp6lHuBaNy6LQSKz+pE1pQ IawBxUH0AH3vtB8KYPIp+ct49hXG/zGgo26eRRVsGp8EdZhr+eWi7OZI gO5h6QEt5yVTyMyDOmVffPw0SzeAdCdfNUcSpVrWsw3DIsaf/wBVdXjB WJmO0tMc54anJJm5PhzNNEVGDaRktqSZzQp1oaH2j6NL2zELuwIDAQAB -----END PUBLIC KEY----- |
| EncryptedSharedKey | Shrr5ANwmCXPAs5RvUUONKzjjEOLjmjySgg79uNFdrpxaenka2If5LW5eJwQDcO8LF++HSx+T/X7XVC9GOlT+AsXSl+PL1hVQaZ6V+xx29MErnDHLoIsgjRz2dyp9dIE900pYKsvQZKypsgrU0fXdlE9Czb2i99L1KUtRPHp+0k8BVW7Jol9KsTeCgVZHoZT7oeNTDgFMa9cGknKcWm8aweTOq7jGz6kUjdwIpfrdFfm2SJn4aLAPV00+F23F6Qgtu9Pv7BSWkm8cywMWoSTaHMPlchE0N01vB11dSQPY7lQqPtG5Bpoo8h/msYELbh+VYhUfi68/iMSVbqE2wPgMA== |
| SharedToken | CSOPEoDZBdW9wkF2Jg4z8Cs4 |
| StoreId | 1c75daef-bf65-4415-ae6d-fbcc6430038e |

**Note**: Use AccessPublicKey, a PEM format RSA 2048 bit public key for encryption of SharedToken to produce EncryptedSharedToken for initiate order session

#### Test Wallet   [Skip link to Test Wallet](https://docs.portone.cloud/docs/hero-plus\#test-wallet)

| Key | Value |
| --- | --- |
| Wallet (Test) | [Link](https://play.google.com/apps/test/RQ4TZnagUIM/ahANa-SQju79m7i4mDvLccCy-Mvl4qQl7zud7LyyHcadiFN6mCuUlvBo6OFYGhwjHysqG5Yo8ARPpUUVTt7nueoRvL) |
| Phone Number | (+66) 809635535 |
| OTP | 111111 |

* * *

#### Use following values in embedded JS code to pay via Heroplus channel   [Skip link to Use following values in embedded JS code to pay via Heroplus channel](https://docs.portone.cloud/docs/hero-plus\#use-following-values-in-embedded-js-code-to-pay-via-heroplus-channel)

JavaScript

```rdmd-code lang-javascript theme-light

    "pmt_channel": "HEROPLUS",
    "pmt_method": "HEROPLUS_BNPL",

```

Updated8 months ago

* * *

Did this page help you?

Yes

No

![Help](https://cdn.jsdelivr.net/gh/iamport-intl/portone-devx-chatbot-widget@production/public/chat-intro1.svg)