---
url: "https://docs.portone.cloud/docs/payment-webhook-response"
title: "Payment Webhook Response"
---

To ensure the integrity and authenticity of webhook, you can use signature verification. The signature is a cryptographic hash generated using a secret key and the content of the webhook.

![](https://files.readme.io/babe8a3c9ff201ebf5e93b2f135d0697e146a1fa1e95fad6b8bfae69d59f71fa-Portone_SignatureVerification_forwebhook.png)

## Steps for Signature Verification   [Skip link to Steps for Signature Verification](https://docs.portone.cloud/docs/payment-webhook-response\#steps-for-signature-verification)

1. **Extract Signature**: Extract the signature from the webhook.
2. **Extract Data**: Extract the relevant data fields from the webhook.
3. **Recreate Message**: Recreate the message by concatenating the extracted data fields.
4. **Compute Signature**: Compute the signature using the same algorithm and secret key used for generating the original signature.
5. **Compare Signatures**: Compare the extracted signature with the computed signature.
6. **Compare Amount and Currency**: Compare the received amount and currency with the details in your DB for the given merchant\_order\_ref
7. **Verification**: If the two signatures match, the webhook is considered valid. Otherwise, it may have been tampered with.

## Example Code   [Skip link to Example Code](https://docs.portone.cloud/docs/payment-webhook-response\#example-code)

### Payment Webhook   [Skip link to Payment Webhook](https://docs.portone.cloud/docs/payment-webhook-response\#payment-webhook)

Code samples to generate and verify signature hash for the data received via **Payment Status** webhooks sent from PortOne servers.

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

type WebhookResponse struct {
	Amount           float64
	ChannelKey       string
	ChannelOrderRef  string
	CountryCode      string
	Currency         string
	MerchantOrderRef string
	MethodName       string
	OrderRef         string
	SignatureHash    string
	Status           string
}

func VerifySignature(webhookResponse WebhookResponse, secretKey string) bool {
	// Create a url.Values map and add the necessary parameters
	params := make(url.Values)
	params.Add("amount", strconv.FormatFloat(webhookResponse.Amount, 'f', -1, 64))
	params.Add("channel_key", webhookResponse.ChannelKey)
	params.Add("channel_order_ref", webhookResponse.ChannelOrderRef)
	params.Add("country_code", webhookResponse.CountryCode)
	params.Add("currency", webhookResponse.Currency)
	params.Add("merchant_order_ref", webhookResponse.MerchantOrderRef)
	params.Add("method_name", webhookResponse.MethodName)
	params.Add("order_ref", webhookResponse.OrderRef)
	params.Add("status", webhookResponse.Status)

	// Encode the parameters
	data := params.Encode()

	// Create the HMAC hash using SHA-256
	secret := []byte(secretKey)
	message := []byte(data)
	hash := hmac.New(sha256.New, secret)
	hash.Write(message)

	// Convert the hash to a base64 string
	hashValue := base64.StdEncoding.EncodeToString(hash.Sum(nil))

	// Compare the computed hash with the signature received in the payment response
	if hashValue != webhookResponse.SignatureHash {
		fmt.Println("Hash verification failed, not from valid source")
		return false
	} else {
		fmt.Println("Hash verification succeeded")
		return true
	}
}

func main() {

	portOneSecret := "PORTONE_SECRET"

        // Verify the amount and currency received in the webhook matches with data in your system
	var amount float64
	amount = 100.25
        currency := "currency"
        // Define the webhook response struct below with the respective params received in webhook
	webhookResponse := WebhookResponse{
		Amount:           amount,
		ChannelKey:       "channel_key",
		ChannelOrderRef:  "channel_order_ref",
		CountryCode:      "country_code",
		Currency:         currency,
		MerchantOrderRef: "merchant_order_ref",
		MethodName:       "method_name",
		OrderRef:         "order_ref",
		SignatureHash:    "signature_hash",
		Status:           "status",
	}

	// Verify the signature
	isValid := VerifySignature(webhookResponse, portOneSecret)

	// Output the result of the verification
	if isValid {
		fmt.Println("Webhook response is valid.")
	} else {
		fmt.Println("Webhook response is invalid.")
	}
}

```

```rdmd-code lang-php theme-light

<?php
function VerifySignature($webhookResponseObj, $secretKey) {
    // Extract the received signature hash from the webhookResponseObj object
    $signature_hash = $webhookResponseObj->signature_hash;

    // Create an array with the necessary parameters
    $data = array(
        'amount' => $webhookResponseObj->amount,
        'channel_key' => $webhookResponseObj->channel_key,
        'channel_order_ref' => $webhookResponseObj->channel_order_ref,
        'country_code' => $webhookResponseObj->country_code,
        'currency' => $webhookResponseObj->currency,
        'merchant_order_ref' => $webhookResponseObj->merchant_order_ref,
        'method_name' => $webhookResponseObj->method_name,
        'order_ref' => $webhookResponseObj->order_ref,
        'status' => $webhookResponseObj->status,
    );

    // Sort the array by keys
    ksort($data);

    // Build the query string
    $message = http_build_query($data);
    // Generate the HMAC hash using SHA-256 and encode it in base64
    $hash_value = base64_encode(hash_hmac('sha256', $message, $secretKey, true));

    // Compare the generated hash with the received signature hash
    if ($hash_value !== $signature_hash) {
        echo "Hash verification failed, not from valid source\n";
        return false;
    } else {
        echo "Hash verification succeeded\n";
        return true;
    }
}

// Define the main function
function main() {
    $secret_key = "PORTONE_SECRET";
    // Verify the amount and currency received in the webhook matches with data in your system
    $amount = 100.25
    $currency = "currency"

    // Define the webhook response struct below with the respective params received in webhook
    $webhookResponseObj = (object) [\
        'amount' => $amount,\
        'channel_key' => 'channel_key',\
        'channel_order_ref' => 'channel_order_ref',\
        'country_code' => 'country_code',\
        'currency' => $currency,\
        'merchant_order_ref' => 'merchant_order_ref',\
        'method_name' => 'method_name',\
        'order_ref' => 'order_ref',\
        'status' => 'status',\
        'signature_hash' => 'signature_hash',\
    ];

    // Verify the signature
    $isValid = VerifySignature($webhookResponseObj, $secret_key);

    // Print the result of the verification
    if ($isValid) {
        echo "Webhook response is valid.\n";
    } else {
        echo "Webhook response is invalid.\n";
    }
}

// Call the main function
main();

?>

```

```rdmd-code lang-node theme-light

const crypto = require('crypto');
const { URLSearchParams } = require('url');

function VerifySignature(webhookResponseObj, secretKey) {
    const params = new URLSearchParams();
    params.append('currency', webhookResponseObj.currency)
    params.append('amount', webhookResponseObj.amount)
    params.append('order_ref', webhookResponseObj.order_ref)
    params.append('merchant_order_ref', webhookResponseObj.merchant_order_ref)
    params.append('channel_order_ref', webhookResponseObj.channel_order_ref)
    params.append('country_code', webhookResponseObj.country_code)
    params.append('status', webhookResponseObj.status)
    params.append('channel_key', webhookResponseObj.channel_key)
    params.append('method_name', webhookResponseObj.method_name)

    params.sort();
    const message = params.toString()
    const hash_value =  crypto.createHmac('sha256', secretKey).update(message).digest('base64');

    if(hash_value !==  webhookResponseObj.signature_hash){
      console.log("Hash verification failed, not from valid source")
      return false;
    } else{
      console.log("Hash verification succeded")
      return true;
    }
}

// Main function to demonstrate calling VerifySignature
function main() {
    const secretKey = 'PORTONE_SECRET';

    // Verify the amount and currency received in the webhook matches with data in your system
    const amount = 100.25
    const currency = 'currency'

    // Example webhookResponseObj object
    const webhookResponseObj = {
        amount: amount,
        channel_key: 'channel_key',
        channel_order_ref: 'channel_order_ref',
        country_code: 'country_code',
        currency: currency,
        merchant_order_ref: 'merchant_order_ref',
        method_name: 'method_name',
        order_ref: 'order_ref',
        status: 'status',
        signature_hash: 'signature_hash'
    };

    // Verify the signature
    const isValid = VerifySignature(webhookResponseObj, secretKey);

    // Print the result of the verification
    if (isValid) {
        console.log("Webhook response is valid.");
    } else {
        console.log("Webhook response is invalid.");
    }
}

// Call the main function
main();

```

```rdmd-code lang-csharp theme-light

using System;
using System.Collections.Generic;
using System.Text;
using System.Security.Cryptography;

namespace ConsoleApp
{
    class WebhookResponse
    {
	public double amount;
        public string currency;
        public string order_ref;
        public string merchant_order_ref;
        public string country_code;
        public string channel_order_ref;
        public string status;
        public string channel_key;
        public string method_name;
        public string signature_hash;
    }

    class ApiSecurityExample
    {
        public static bool VerifySignature(WebhookResponse webhookResponse, string secret)
        {
            var map = new SortedDictionary<string, string>()
            {
	        { "amount", RemoveTrailingZeros(webhookResponse.amount) },
		{ "channel_key", webhookResponse.channel_key },
		{ "channel_order_ref", webhookResponse.channel_order_ref },
		{ "country_code", webhookResponse.country_code },
		{ "currency", webhookResponse.currency },
		{ "merchant_order_ref", webhookResponse.merchant_order_ref },
		{ "method_name", webhookResponse.method_name },
                { "order_ref", webhookResponse.order_ref },
                { "status", webhookResponse.status },
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

            if (hash_value != webhookResponse.signature_hash) {
                Console.WriteLine("Hash verification failed, not from valid source");
                return false;
              } else {
                Console.WriteLine("Hash verification succeded");
                return true;
              }
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
            string secret = "PORTONE_SECRET";
            // Verify the amount and currency received in the webhook matches with data in your system
            double amount = 100.25;
            string currency = "currency";
            WebhookResponse webhookResponse = new WebhookResponse()
            {
		amount = amount,
		channel_key = "channel_key",
		channel_order_ref = "channel_order_ref",
		country_code = "country_code",
		currency = currency,
                merchant_order_ref = "merchant_order_ref",
		method_name = "method_name",
                order_ref = "order_ref",
                status = "status",
                signature_hash = "signature_hash"
            };

            bool isValid = ApiSecurityExample.VerifySignature(webhookResponse, secret);

            // Print the result
            if (isValid) {
                Console.WriteLine("Webhook response is valid.");
            } else {
                Console.WriteLine("Webhook response is invalid.");
            }
        }
    }
}

```

```rdmd-code lang-java theme-light

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.util.Base64;
import java.util.Map;
import java.util.TreeMap;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.text.DecimalFormat;

public class Main {
    public static void main(String[] args) {
        String secret = "PORTONE_SECRET";

        // Create WebhookResponse object using setter methods
        WebhookResponse webhookResponse = new WebhookResponse();

        // Verify the amount and currency received in the webhook matches with data in your system
        Double amount = 100.25;
        String currency = "currency";
        webhookResponse.setAmount(amount);
        webhookResponse.setChannelKey("channel_key");
        webhookResponse.setChannelOrderRef("channel_order_ref");
        webhookResponse.setCountryCode("country_code");
        webhookResponse.setCurrency(currency);
        webhookResponse.setMerchantOrderRef("merchant_order_ref");
        webhookResponse.setMethodName("method_name");
        webhookResponse.setOrderRef("order_ref");
        webhookResponse.setSignature("signature");
        webhookResponse.setStatus("status");

        boolean isValid = verifySignature(webhookResponse, secret);

        // Print the result
        if (isValid) {
            System.out.println("Webhook response is valid.");
        } else {
            System.out.println("Webhook response is invalid.");
        }
    }

    public static boolean verifySignature(WebhookResponse webhookResponse, String secretKey) {
        try {
            Map<String, String> params = new TreeMap<>();
            params.put("amount", webhookResponse.getAmount());
            params.put("channel_key", webhookResponse.getChannelKey());
            params.put("channel_order_ref", webhookResponse.getChannelOrderRef());
            params.put("country_code", webhookResponse.getCountryCode());
            params.put("currency", webhookResponse.getCurrency());
            params.put("merchant_order_ref", webhookResponse.getMerchantOrderRef());
            params.put("method_name", webhookResponse.getMethodName());
            params.put("order_ref", webhookResponse.getOrderRef());
            params.put("status", webhookResponse.getStatus());

            // Encode the parameters
            String data = encodeParams(params);

            byte[] secret = secretKey.getBytes();
            byte[] message = data.getBytes();

            Mac sha256_HMAC = Mac.getInstance("HmacSHA256");
            SecretKeySpec secretKeySpec = new SecretKeySpec(secret, "HmacSHA256");
            sha256_HMAC.init(secretKeySpec);

            byte[] hash = sha256_HMAC.doFinal(message);
            String computedSignature = Base64.getEncoder().encodeToString(hash);

            if (!computedSignature.equals(webhookResponse.getSignature())) {
                System.out.println("Hash verification failed, not from a valid source");
                return false;
            } else {
                System.out.println("Hash verification succeeded");
                return true;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return false;
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

class WebhookResponse {
    private Double amount;
    private String channelKey;
    private String channelOrderRef;
    private String countryCode;
    private String currency;
    private String merchantOrderRef;
    private String methodName;
    private String orderRef;
    private String signature;
    private String status;

    // Default constructor
    public WebhookResponse() {
    }

    // Setter methods
    public void setOrderRef(String orderRef) {
        this.orderRef = orderRef;
    }

    public void setChannelOrderRef(String channelOrderRef) {
        this.channelOrderRef = channelOrderRef;
    }

    public void setMerchantOrderRef(String merchantOrderRef) {
        this.merchantOrderRef = merchantOrderRef;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setSignature(String signature) {
        this.signature = signature;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public void setChannelKey(String channelKey) {
        this.channelKey = channelKey;
    }

    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public void setMethodName(String methodName) {
        this.methodName = methodName;
    }

    // Getter methods
    public String getCurrency() {
        return currency;
    }

    public String getAmount() {
        DecimalFormat df = new DecimalFormat("0.##");
        return df.format(amount);
    }

    public String getOrderRef() {
        return orderRef;
    }

    public String getMerchantOrderRef() {
        return merchantOrderRef;
    }

    public String getCountryCode() {
        return countryCode;
    }

    public String getChannelOrderRef() {
        return channelOrderRef;
    }

    public String getStatus() {
        return status;
    }

    public String getChannelKey() {
        return channelKey;
    }

    public String getMethodName() {
        return methodName;
    }

    public String getSignature() {
        return signature;
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

class WebhookResponseObj:
    def __init__(self, currency, amount, order_ref, merchant_order_ref, channel_order_ref, country_code, status, channel_key, method_name, signature_hash):
        # Instance Variables
        self.amount = amount
        self.channel_key = channel_key
        self.channel_order_ref = channel_order_ref
        self.country_code = country_code
        self.currency = currency
        self.merchant_order_ref = merchant_order_ref
        self.method_name = method_name
        self.order_ref = order_ref
        self.signature_hash = signature_hash
        self.status = status

def VerifySignature(webhookResponseObj, secretKey):
    f = {
        'amount': f"{webhookResponseObj.amount:.2f}".rstrip('0').rstrip('.'),
        'channel_key': webhookResponseObj.channel_key,
        'channel_order_ref': webhookResponseObj.channel_order_ref,
        'country_code': webhookResponseObj.country_code,
        'currency': webhookResponseObj.currency,
        'merchant_order_ref': webhookResponseObj.merchant_order_ref,
        'method_name': webhookResponseObj.method_name,
        'order_ref': webhookResponseObj.order_ref,
        'status': webhookResponseObj.status,
    }

    f = dict(sorted(f.items()))
    message1 = urllib.parse.urlencode(f)
    message = message1.encode('utf-8')
    secret = secretKey.encode('utf-8')
    signature = base64.b64encode(hmac.new(secret, message, digestmod=hashlib.sha256).digest()).decode('utf-8')

    if signature != webhookResponseObj.signature_hash:
        print("Hash verification failed, not from valid source\n")
        return False
    else:
        print("Hash verification succeeded\n")
        return True

# Define constants
secret = 'PORTONE_SECRET'
# Verify the amount and currency received in the webhook matches with data in your system
amount = 100.25
currency = 'currency'

# Create an instance of WebhookResponseObj
webhookResponseObj = WebhookResponseObj(
    amount=amount,
    channel_key='channel_key',
    channel_order_ref='channel_order_ref',
    country_code='country_code',
    currency=currency,
    merchant_order_ref='merchant_order_ref',
    method_name='method_name',
    order_ref='order_ref',
    signature_hash='signature_hash',
    status='status'
)

# Call VerifySignature
isValid = VerifySignature(webhookResponseObj, secret)
if isValid:
    print("Webhook response is valid.\n")
else:
    print("Webhook response is invalid.\n")

```

### Parameter list to generate signature   [Skip link to Parameter list to generate signature](https://docs.portone.cloud/docs/payment-webhook-response\#parameter-list-to-generate-signature)

##### `amount`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook-response\#amount)

###### _float64_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook-response\#float64)

The amount of the transaction

* * *

##### `channel_key`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook-response\#channel_key)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook-response\#string)

The key of the payment channel

* * *

##### `channel_order_ref`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook-response\#channel_order_ref)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook-response\#string-1)

Payment Channel's Order Reference

* * *

##### `country_code`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook-response\#country_code)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook-response\#string-2)

The country code of the transaction

* * *

##### `currency`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook-response\#currency)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook-response\#string-3)

The currency of the transaction

* * *

##### `merchant_order_ref`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook-response\#merchant_order_ref)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook-response\#string-4)

Order Reference sent by merchant to initiate transaction

* * *

##### `method_name`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook-response\#method_name)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook-response\#string-5)

The name of the payment method used for the transaction

* * *

##### `order_ref`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook-response\#order_ref)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook-response\#string-6)

PortOne's Order Reference, used further for refund and other disputes

* * *

##### `status`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook-response\#status)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook-response\#string-7)

The current status of the transaction

* * *

##### `signature_hash`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook-response\#signature_hash)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-webhook-response\#string-8)

Calculate hash as mentioned earlier, verify if it is equal to signature\_hash received in the payment webhook response

* * *

> ## 📘  Note
>
> Refer to [Payment Webhook Parameters](https://docs.portone.cloud/docs/payment-webhook) for the complete list of payment webhook parameters.
