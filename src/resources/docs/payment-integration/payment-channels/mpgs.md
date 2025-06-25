---
url: "https://docs.portone.cloud/docs/mpgs"
title: "MPGS"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/mpgs\#introduction)

Mastercard payment gateway services provides multiple payment solutions. MPGS provides support for Credit and Debit Card (Visa/Master/JCB) payment options.

Follow this guide to integrate MPGS acceptance on your mobile app or website.

* * *

### Available payment methods   [Skip link to Available payment methods](https://docs.portone.cloud/docs/mpgs\#available-payment-methods)

1. Credit/Debit Cards (Visa, Mastercard, JCB)

Please use following values as Payment\_Method\_Key while initiating payment via MPGS in embedded JS code as mentioned below

JSON

```rdmd-code lang-json theme-light

    "pmt_channel": "MASTERCARD",
    "pmt_method": "MASTERCARD_CARD",

```

### Testing Data   [Skip link to Testing Data](https://docs.portone.cloud/docs/mpgs\#testing-data)

#### Test Merchant Admin Credentials   [Skip link to Test Merchant Admin Credentials](https://docs.portone.cloud/docs/mpgs\#test-merchant-admin-credentials)

[MPGS merchant console](https://test-gateway.mastercard.com/ma/)

| Key | value |
| --- | --- |
| API Password | fed7185ba0e360053670f4d73b671cf3 |
| Merchant ID | 210-M-130522 |
| Notification Secret | 840CBE7839141CF299E2D8CD270F6D5F |

#### Test cards data   [Skip link to Test cards data](https://docs.portone.cloud/docs/mpgs\#test-cards-data)

| Type | Card number |
| --- | --- |
| Mastercard | 5123450000000008 |
| Mastercard | 2223000000000007 |
| Mastercard | 5111111111111118 |
| Visa | 4508750015741019 |
| Visa | 4012000033330026 |
| JCB | 3528000000000007 |
| JCB | 3528111100000001 |

### Reference links   [Skip link to Reference links](https://docs.portone.cloud/docs/mpgs\#reference-links)

- [MPGS testing data](https://na-gateway.mastercard.com/api/documentation/integrationGuidelines/supportedFeatures/testAndGoLive.html?locale=en_US)

- [MPGS APIs](https://ap-gateway.mastercard.com/api/documentation/apiDocumentation/rest-json/version/latest/api.html?locale=en_US)
