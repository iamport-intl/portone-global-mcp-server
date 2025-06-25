---
url: "https://docs.portone.cloud/docs/ecpay"
title: "ECPay"
---

### Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/ecpay\#introduction)

ECPay is a leading Taiwanese payment gateway offering a comprehensive suite of services, including credit card processing, ATM transfers, and convenience store payments.

* * *

### Supported Countries   [Skip link to Supported Countries](https://docs.portone.cloud/docs/ecpay\#supported-countries)

- Taiwan 🇹🇼

* * *

### Available Payment Methods   [Skip link to Available Payment Methods](https://docs.portone.cloud/docs/ecpay\#available-payment-methods)

ECPay currently only supports TWD currency.

| Payment Type | Payment Method Key | Integration Status | Refund Supported | Sandbox Availability |
| --- | --- | --- | --- | --- |
| Credit Card | `ECPAY_CREDIT_CARD` | ✅ | ✅ | ✅ |
| ATM Card | `ECPAY_ATM_CARD` | ✅ | ✅ | ✅ |
| CVS | `ECPAY_CVS` | ✅ | ✅ | ✅ |
| Barcode | `ECPAY_BARCODE` | ✅ | ✅ | ✅ |

* * *

### Sandbox   [Skip link to Sandbox](https://docs.portone.cloud/docs/ecpay\#sandbox)

#### Credentials   [Skip link to Credentials](https://docs.portone.cloud/docs/ecpay\#credentials)

| Key | Value |
| --- | --- |
| **Hash IV** | 3002607 |
| **Hash Key** | pwFHCqoQZGmho4w6 |
| **Merchant Id** | 3002607 |

- Ecpay [Dashboard](https://vendor-stage.ecpay.com.tw/User/LogOn_Step1)

| Key | Value |
| --- | --- |
| **Vendor Management System Login ID** | stagetest3 |
| **Vendor Management System Login Password** | test1234 |
| **Vendor Number** | 00000000 |

* * *

### Miscellaneous Details   [Skip link to Miscellaneous Details](https://docs.portone.cloud/docs/ecpay\#miscellaneous-details)

To mark ATM, CVS, or barcode transactions as successful:

1. Go to 一般訂單查詢 (General Order Inquiries) and select 全方位金流訂單 (All-round Cash Flow Orders).
2. Enter the order reference in 廠商訂單編號 (Manufacturer Order Number).
3. In the last column of the table, 模擬付款 (Simulate Payment), click the button to simulate a successful payment.

* * *

### Reference links   [Skip link to Reference links](https://docs.portone.cloud/docs/ecpay\#reference-links)

- [API Docs](https://developers.ecpay.com.tw/?page_id=26797)
- [Test Details](https://developers.ecpay.com.tw/?p=16447)
