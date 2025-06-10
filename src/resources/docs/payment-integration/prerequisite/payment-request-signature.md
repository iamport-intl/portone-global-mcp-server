---
url: "https://docs.portone.cloud/docs/payment-request"
title: "Payment Request"
---

# Integration Guide: Payment Request Signatures   [Skip link to Integration Guide: Payment Request Signatures](https://docs.portone.cloud/docs/payment-request\#integration-guide-payment-request-signatures)

## Introduction   [Skip link to Introduction](https://docs.portone.cloud/docs/payment-request\#introduction)

PortOne API payment requests are signed to ensure their authenticity and integrity. This document provides guidelines on how to generate signature for a payment requests.

### Steps   [Skip link to Steps](https://docs.portone.cloud/docs/payment-request\#steps)

The sequence diagram below illustrates different methods for generating a signature and using it within the SDK/APIs.

> ## 📘  If the signature is being generated through code, this process must occur on the server side (backend). This is because it involves the use of a secret key, which must remain confidential and secure.

The signature hash can also be generated using [Generate payment request signature API](https://docs.portone.cloud/reference/post_api-merchant-generate-signature) and is illustrated in below sequence diagram

![](https://files.readme.io/0f813920934d96a46cee16c01c76d9bc85dd38e9f06d34586d832a530077c5d0-Signature-Flow-Diagram.png)

#### _Generation signature hash via Code in Merchant Backend_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-request\#generation-signature-hash-via-code-in-merchant-backend)

- When the Merchant(Frontend) initiates a signature generation request:
- The Merchant(Backend) generates the signature using the payment data & PortOne secret and returns the signature hash to the Merchant(Frontend).

#### _Generation signature hash via PortOne API on Merchant Backend_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-request\#generation-signature-hash-via-portone-api-on-merchant-backend)

- The Merchant(Frontend) sends a signature generation request with payload data to the Merchant (Backend).
- The Merchant(Backend) generates a JWT (refer to JWT generation flow) and uses the PortOne signature generation API
- PortOne API processes the request and returns the signature hash to the Merchant (Backend), which forwards it to the Merchant(Frontend).

#### _Generation signature hash via PortOne API on Merchant Frontend (not recommended)_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-request\#generation-signature-hash-via-portone-api-on-merchant-frontend-not-recommended)

- The Merchant(Frontend) requests a JWT from the Merchant(Backend).
- The Merchant(Backend) generates and returns the JWT.
- The Merchant(Frontend) sends the signature generation request with payload data and the JWT to the PortOne Server API.
- PortOne API processes the request and returns the signature hash directly to the Merchant(Frontend).

* * *

## Generate Signature via API   [Skip link to Generate Signature via API](https://docs.portone.cloud/docs/payment-request\#generate-signature-via-api)

Use this API to generate the signature without code.

🦉

Generate signature using API

Open Recipe

* * *

## Generate Signature via Code   [Skip link to Generate Signature via Code](https://docs.portone.cloud/docs/payment-request\#generate-signature-via-code)

To generate a signature for a payment request, follow these steps:

1. Concatenate the required parameters of the payment request into a single string in alphabetical order.
2. Calculate the SHA-256 hash of the resulting string.
3. Base64-encode the hash to obtain the signature.

### Code Examples   [Skip link to Code Examples](https://docs.portone.cloud/docs/payment-request\#code-examples)

GoPHPNodeC#JavaPython

```rdmd-code lang-go theme-light

package main

import (
    "crypto/hmac"
    "crypto/sha256"
    "encoding/base64"
    "fmt"
    "net/url"
    "strconv"
)

type RequestObj struct {
    ClientKey       string
    Currency        string
    Amount          float64
    MerchantOrderId string
    SuccessUrl      string
    FailureUrl      string
}

func GenerateSignature(requestObj RequestObj, portOneSecret string) string {
    // Create a url.Values map and add the necessary parameters
    params := make(url.Values)
    params.Add("client_key", requestObj.ClientKey)
    params.Add("currency", requestObj.Currency)
    params.Add("amount", strconv.FormatFloat(requestObj.Amount, 'f', -1, 64))
    params.Add("merchant_order_id", requestObj.MerchantOrderId)
    params.Add("success_url", requestObj.SuccessUrl)
    params.Add("failure_url", requestObj.FailureUrl)

    // Encode the parameters
    data := params.Encode()
    // fmt.Println("data is:", data)

    // Create the HMAC hash using SHA-256
    secret := []byte(portOneSecret)
    message := []byte(data)
    hash := hmac.New(sha256.New, secret)
    hash.Write(message)

    // Convert the hash to a base64 string
    hashValue := base64.StdEncoding.EncodeToString(hash.Sum(nil))
    return hashValue
}

func main() {

    portOneKey := "PORTONE_KEY"
    portOneSecret := "PORTONE_SECRET"
    // The unique merchant order reference generated by the merchant
    merchantOrderId := ""

    requestObj := RequestObj{
        ClientKey:       portOneKey,
        Currency:        "USD",
        Amount:          100.00,
        MerchantOrderId: merchantOrderId,
        SuccessUrl:      "https://checkout.portone.cloud/success.html",
        FailureUrl:      "https://checkout.portone.cloud/failure.html",
    }

    // Generate the signature
    signature := GenerateSignature(requestObj, portOneSecret)

    // Output the signature
    fmt.Println("Signature is:", signature)
}

```

```rdmd-code lang-php theme-light

<?php
function GenerateSignature($requestObj, $secretKey) {
  $data = array(
      'amount' => $requestObj->Amount,
      'currency' => $requestObj->Currency,
      'failure_url' => $requestObj->FailureUrl,
      'merchant_order_id' => $requestObj->MerchantOrderId,
      'client_key' => $requestObj->ClientKey,
      'success_url' => $requestObj->SuccessUrl
  );
  ksort($data);
  $data = http_build_query($data);
  $message = $data;

  return base64_encode(hash_hmac('sha256', $message, $secretKey, true));
}

function main() {

    $key = "PORTONE_KEY";
    $secret_key = "PORTONE_SECRET";
    // The unique merchant order reference generated by the merchant
    $merchant_order_id = "";
    // Example request object
    $requestObj = (object) [\
        'Amount' => 100.00,\
        'Currency' => 'USD',\
        'FailureUrl' => 'https://checkout.portone.cloud/failure.html',\
        'MerchantOrderId' => $merchant_order_id,\
        'ClientKey' => $key,\
        'SuccessUrl' => 'https://checkout.portone.cloud/success.html'\
    ];

    $signature = GenerateSignature($requestObj, $secret_key);
    echo "Signature: " . $signature;
}

main();
?>

```

```rdmd-code lang-node theme-light

const crypto = require('crypto');
const { URLSearchParams } = require('url');

function GenerateSignature(requestObj, secretKey) {
    const params = new URLSearchParams();

    params.append('amount', requestObj.Amount);
    params.append('currency', requestObj.Currency);
    params.append('failure_url', requestObj.FailureUrl);
    params.append('merchant_order_id', requestObj.MerchantOrderId);
    params.append('client_key', requestObj.ClientKey);
    params.append('success_url', requestObj.SuccessUrl);
    params.sort();

    const message = params.toString();
    const hashValue = crypto.createHmac('sha256', secretKey).update(message).digest('base64');

    return hashValue;
}

const clientKey = 'PORTONE_KEY';
const secretKey = 'PORTONE_SECRET';
// The unique merchant order reference generated by the merchant
const merchantOrderId = '';

const requestObj = {
    Amount: 100.00,
    Currency: 'USD',
    FailureUrl: 'https://checkout.portone.cloud/failure.html',
    MerchantOrderId: merchantOrderId,
    ClientKey: clientKey,
    SuccessUrl: 'https://checkout.portone.cloud/success.html'
};

const signature = GenerateSignature(requestObj, secretKey);
console.log(`Signature: ${signature}\n`);

```

```rdmd-code lang-csharp theme-light

using System;
using System.Collections.Generic;
using System.Text;
using System.Security.Cryptography;

namespace ConsoleApp
{
    class PaymentRequest
    {
        public double Amount;
        public string ClientKey;
        public string Currency;
        public string FailureUrl;
        public string MerchantOrderId;
        public string SuccessUrl;
    }

    class ApiSecurityExample
    {
        public static string GenerateSignature(PaymentRequest paymentRequest, string secret)
        {
            var map = new SortedDictionary<string, string>()
            {
                { "amount", RemoveTrailingZeros(paymentRequest.Amount) },
                { "client_key", paymentRequest.ClientKey },
                { "currency", paymentRequest.Currency },
                { "failure_url", paymentRequest.FailureUrl },
                { "merchant_order_id", paymentRequest.MerchantOrderId },
                { "success_url", paymentRequest.SuccessUrl },
            };

            var stringBuilder = new StringBuilder();
            foreach (var key in map.Keys)
            {
                if (stringBuilder.Length > 0)
                {
                    stringBuilder.Append("&");
                }
                var value = map[key];
                try
                {
                    stringBuilder.Append((key != null ? Uri.EscapeDataString(key) : ""));
                    stringBuilder.Append("=");
                    stringBuilder.Append(value != null ? Uri.EscapeDataString(value) : "");
                }
                catch (ArgumentNullException e)
                {
                    throw new Exception("The key or value is null.", e);
                }
                catch (UriFormatException e)
                {
                    throw new Exception("Invalid format for key or value.", e);
                }
            }

            var message = stringBuilder.ToString();
            // Console.WriteLine("message: " + message);
            var encoding = new ASCIIEncoding();
            byte[] keyByte = encoding.GetBytes(secret);
            byte[] messageBytes = encoding.GetBytes(message);
            var hmacsha256 = new HMACSHA256(keyByte);
            byte[] hashmessage = hmacsha256.ComputeHash(messageBytes);
            string hash_value = Convert.ToBase64String(hashmessage);

            return hash_value;
        }

        private static string RemoveTrailingZeros(double amount)
        {
            return amount.ToString("0.###################");
        }
    }

  class Program
    {
       static void Main(string[] args)
        {
            string key = "PORTONE_KEY";
            string secret = "PORTONE_SECRET";
            // The unique merchant order reference generated by the merchant
            string merchantOrderId = "";
            PaymentRequest paymentRequest = new PaymentRequest()
            {
                Amount = 100.00,
                Currency = "USD",
                FailureUrl = "https://checkout.portone.cloud/failure.html",
                MerchantOrderId = merchantOrderId,
                ClientKey = key,
                SuccessUrl = "https://checkout.portone.cloud/success.html"
            };

            string signature = ApiSecurityExample.GenerateSignature(paymentRequest, secret);

            Console.WriteLine("Signature: " + signature);
        }
    }
}

```

```rdmd-code lang-java theme-light

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.text.DecimalFormat;
import java.util.Map;
import java.util.TreeMap;

public class Main {
    public static void main(String[] args) {
        String key = "PORTONE_KEY";
        String secret = "PORTONE_SECRET";
        // The unique merchant order reference generated by the merchant
        String merchantOrderId = "";
        String currency = "USD";
        Double amount = 100.25;

        // Create an instance of RequestObj using the default constructor
        RequestObj requestObj = new RequestObj();

        // Use setter methods to set the values
        requestObj.setAmount(amount);
        requestObj.setClientKey(key);
        requestObj.setCurrency(currency);
        requestObj.setMerchantOrderId(merchantOrderId);
        requestObj.setSuccessUrl("https://checkout.portone.cloud/success.html");
        requestObj.setFailureUrl("https://checkout.portone.cloud/failure.html");

        String signature = generateSignature(requestObj, secret);
        System.out.println("Signature: " + signature);
    }

    public static String generateSignature(RequestObj requestObj, String secretKey) {
        try {
            Map<String, String> params = new TreeMap<>();
            params.put("amount", requestObj.getAmount());
            params.put("client_key", requestObj.getClientKey());
            params.put("currency", requestObj.getCurrency());
            params.put("failure_url", requestObj.getFailureUrl());
            params.put("merchant_order_id", requestObj.getMerchantOrderId());
            params.put("success_url", requestObj.getSuccessUrl());

            // Encode the parameters
            String data = encodeParams(params);
            // System.out.println("data: " + data);
            Mac sha256_HMAC = Mac.getInstance("HmacSHA256");
            SecretKeySpec secretKeySpec = new SecretKeySpec(secretKey.getBytes(), "HmacSHA256");
            sha256_HMAC.init(secretKeySpec);

            byte[] hash = sha256_HMAC.doFinal(data.getBytes());
            return Base64.getEncoder().encodeToString(hash);
        } catch (Exception e) {
            throw new RuntimeException("Failed to calculate hmac-sha256", e);
        }
    }

    public static String encodeParams(Map<String, String> params) {
        StringBuilder encodedParams = new StringBuilder();

        for (Map.Entry<String, String> entry : params.entrySet()) {
            if (encodedParams.length() > 0) {
                encodedParams.append("&");
            }
            encodedParams.append(URLEncoder.encode(entry.getKey(), StandardCharsets.UTF_8))
                         .append("=")
                         .append(URLEncoder.encode(entry.getValue(), StandardCharsets.UTF_8));
        }

        return encodedParams.toString();
    }
}

class RequestObj {
    private Double amount;
    private String clientKey;
    private String currency;
    private String merchantOrderId;
    private String successUrl;
    private String failureUrl;

    // Default constructor
    public RequestObj() {
    }

    // Setter methods
    public void setClientKey(String clientKey) {
        this.clientKey = clientKey;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public void setMerchantOrderId(String merchantOrderId) {
        this.merchantOrderId = merchantOrderId;
    }

    public void setSuccessUrl(String successUrl) {
        this.successUrl = successUrl;
    }

    public void setFailureUrl(String failureUrl) {
        this.failureUrl = failureUrl;
    }

    // Getter methods
    public String getClientKey() {
        return clientKey;
    }

    public String getCurrency() {
        return currency;
    }

    public String getAmount() {
        DecimalFormat df = new DecimalFormat("0.##");
        return df.format(amount);
    }

    public String getMerchantOrderId() {
        return merchantOrderId;
    }

    public String getSuccessUrl() {
        return successUrl;
    }

    public String getFailureUrl() {
        return failureUrl;
    }
}

```

```rdmd-code lang-python theme-light

#!/usr/bin/python
# -*- coding: utf-8 -*-
import urllib.parse
import hashlib
import hmac
import base64

class RequestObj:
    def __init__(self, Amount, Currency, FailureUrl, MerchantOrderId, ClientKey, SuccessUrl):
        # Instance Variables
        self.Amount = Amount
        self.Currency = Currency
        self.FailureUrl = FailureUrl
        self.MerchantOrderId = MerchantOrderId
        self.ClientKey = ClientKey
        self.SuccessUrl = SuccessUrl

def GenerateSignature(requestObj, secretKey):
    f = {
        'amount': f"{requestObj.Amount:.2f}".rstrip('0').rstrip('.'),
        'client_key': requestObj.ClientKey,
        'currency': requestObj.Currency,
        'failure_url': requestObj.FailureUrl,
        'merchant_order_id': requestObj.MerchantOrderId,
        'success_url': requestObj.SuccessUrl,
    }

    f = dict(sorted(f.items()))
    message1 = urllib.parse.urlencode(f)
    message = message1.encode('utf-8')
    # print(f'message: {message}\n')
    secret = secretKey.encode('utf-8')
    signature = base64.b64encode(hmac.new(secret, message, digestmod=hashlib.sha256).digest()).decode('utf-8')
    return signature

# Define constants
key = 'PORTONE_KEY'
secret = 'PORTONE_SECRET'
# The unique merchant order reference generated by the merchant
merchantOrderId = ''
# Create an instance of RequestObj
requestObj = RequestObj(
    Amount=100.00,
    ClientKey=key,
    Currency='USD',
    FailureUrl='https://checkout.portone.cloud/failure.html',
    MerchantOrderId=merchantOrderId,
    SuccessUrl='https://checkout.portone.cloud/success.html'
)

# Call GenerateSignature
signature = GenerateSignature(requestObj, secret)
print(f'Signature: {signature.decode()}\n')

```

### Parameter list to generate signature   [Skip link to Parameter list to generate signature](https://docs.portone.cloud/docs/payment-request\#parameter-list-to-generate-signature)

##### `client_key`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-request\#client_key)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-request\#string)

The PortOne key of the merchant

* * *

##### `currency`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-request\#currency)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-request\#string-1)

The currency of the transaction

* * *

##### `amount`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-request\#amount)

###### _float64_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-request\#float64)

The amount of the transaction

* * *

##### `merchant_order_id `  [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-request\#merchant_order_id)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-request\#string-2)

Order Reference sent by merchant to initiate transaction

* * *

##### `success_url `  [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-request\#success_url)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-request\#string-3)

The url of success page hosted by merchant

* * *

##### `failure_url `  [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-request\#failure_url)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-request\#string-4)

The url of failure page hosted by merchant

* * *

> ## 📘  Note
>
> Refer to [Payment Request](https://docs.portone.cloud/reference/post_api-initiatepayment) for the complete list of payment request parameters.

Updated8 months ago

* * *

Did this page help you?

Yes

No

🦉

# Recipe Title

Recipe Description

​x

```

```

1{"success":true}

![Help](https://cdn.jsdelivr.net/gh/iamport-intl/portone-devx-chatbot-widget@production/public/chat-intro1.svg)