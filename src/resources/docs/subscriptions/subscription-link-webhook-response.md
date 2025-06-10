---
url: "https://docs.portone.cloud/docs/subscription-link-webhook-response"
title: "Subscription Link Webhook Response"
---

To ensure the integrity and authenticity of webhook, you can use signature verification. The signature is a cryptographic hash generated using a secret key and the content of the webhook.

![](https://files.readme.io/393e092c3c53692ff26552831ed670cd0ff6308c35a904994885c5513002279f-Subscription_webhook.png)

## Steps for Signature Verification   [Skip link to Steps for Signature Verification](https://docs.portone.cloud/docs/subscription-link-webhook-response\#steps-for-signature-verification)

1. **Extract Signature**: Extract the signature from the webhook.
2. **Extract Data**: Extract the relevant data fields from the webhook.
3. **Recreate Message**: Recreate the message by concatenating the extracted data fields.
4. **Compute Signature**: Compute the signature using the same algorithm and secret key used for generating the original signature.
5. **Compare Signatures**: Compare the extracted signature with the computed signature.
6. **Compare Collected Amount and Currency**: Compare the collected amount and currency with the details in your DB for the given merchant\_order\_ref
7. **Verification**: If the two signatures match, the webhook is considered valid. Otherwise, it may have been tampered with.

## Example Code   [Skip link to Example Code](https://docs.portone.cloud/docs/subscription-link-webhook-response\#example-code)

### Subscription Link Webhook   [Skip link to Subscription Link Webhook](https://docs.portone.cloud/docs/subscription-link-webhook-response\#subscription-link-webhook)

Code samples to generate and verify signature hash for the data received via **Subscription Link Status** webhooks sent from PortOne servers.

GoPHPNodeC#JavaPython

```rdmd-code lang-go theme-light

package main

import (
	"crypto/hmac"
	"crypto/sha256"
	"encoding/base64"
	"fmt"
	"net/url"
)

type SLWebhookResponse struct {
	Currency         string
	OrderRef         string
	MerchantOrderRef string
	SignatureHash    string
	Status           string
}

func VerifySignature(slWebhookResponse SLWebhookResponse, secretKey string) bool {
	// Create a url.Values map and add the necessary parameters
	params := make(url.Values)
	params.Add("currency", slWebhookResponse.Currency)
	params.Add("order_ref", slWebhookResponse.OrderRef)
	params.Add("merchant_order_ref", slWebhookResponse.MerchantOrderRef)
	params.Add("status", slWebhookResponse.Status)

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
	if hashValue != slWebhookResponse.SignatureHash {
		fmt.Println("Hash verification failed, not from valid source")
		return false
	} else {
		fmt.Println("Hash verification succeeded")
		return true
	}
}

func main() {

	portOneSecret := "PORTONE_SECRET"

	// Define the webhook response struct below with the respective params received in webhook
	slWebhookResponse := SLWebhookResponse{
		Currency:         "currency",
		MerchantOrderRef: "merchant_order_ref",
		OrderRef:         "order_ref",
		SignatureHash:    "signature_hash",
		Status:           "status",
	}

	// Verify the signature
	isValid := VerifySignature(slWebhookResponse, portOneSecret)

	// Output the result of the verification
	if isValid {
		fmt.Println("Subscription Link Webhook response is valid.")
	} else {
		fmt.Println("Subscription Link Webhook response is invalid.")
	}
}

```

```rdmd-code lang-php theme-light

<?php
function VerifySignature($slWebhookResponseObj, $secretKey) {
    // Extract the received signature hash from the slWebhookResponseObj object
    $signature_hash = $slWebhookResponseObj->signature_hash;

    // Create an array with the necessary parameters
    $data = array(
        'order_ref' => $slWebhookResponseObj->order_ref,
        'currency' => $slWebhookResponseObj->currency,
        'merchant_order_ref' => $slWebhookResponseObj->merchant_order_ref,
        'status' => $slWebhookResponseObj->status,
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

    // Define the webhook response struct below with the respective params received in webhook
    $slWebhookResponseObj = (object) [\
        'order_ref' => 'order_ref',\
        'currency' => 'currency',\
        'merchant_order_ref' => 'merchant_order_ref',\
        'status' => 'status',\
        'signature_hash' => 'signature_hash',\
    ];;

    // Verify the signature
    $isValid = VerifySignature($slWebhookResponseObj, $secret_key);

    // Print the result of the verification
    if ($isValid) {
        echo "Subscription Link Webhook response is valid.\n";
    } else {
        echo "Subscription Link Webhook response is invalid.\n";
    }
}

// Call the main function
main();

?>

```

```rdmd-code lang-node theme-light

const crypto = require('crypto');
const { URLSearchParams } = require('url');

function VerifySignature(slWebhookResponseObj, secretKey) {
    const params = new URLSearchParams();
    params.append('currency', slWebhookResponseObj.currency)
    params.append('order_ref', slWebhookResponseObj.order_ref)
    params.append('merchant_order_ref', slWebhookResponseObj.merchant_order_ref)
    params.append('status', slWebhookResponseObj.status)

    params.sort();
    const message = params.toString()
    const hash_value =  crypto.createHmac('sha256', secretKey).update(message).digest('base64');

    if(hash_value !==  slWebhookResponseObj.signature_hash){
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

    // Example slWebhookResponseObj object
    const slWebhookResponseObj = {
        order_ref: 'order_ref',
        currency: 'currency',
        merchant_order_ref: 'merchant_order_ref',
        status: 'status',
        signature_hash: 'signature_hash'
    };

    // Verify the signature
    const isValid = VerifySignature(slWebhookResponseObj, secretKey);

    // Print the result of the verification
    if (isValid) {
        console.log("Subscription Link Webhook response is valid.");
    } else {
        console.log("Subscription Link Webhook response is invalid.");
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
    class SLWebhookResponse
    {
        public string currency;
        public string order_ref;
        public string merchant_order_ref;
        public string status;
        public string signature_hash;
    }

    class ApiSecurityExample
    {
        public static bool VerifySignature(SLWebhookResponse slWebhookResponse, string secret)
        {
            var map = new SortedDictionary<string, string>()
            {
				{ "order_ref", slWebhookResponse.order_ref },
				{ "currency", slWebhookResponse.currency },
				{ "merchant_order_ref", slWebhookResponse.merchant_order_ref },
                { "status", slWebhookResponse.status },
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

            if (hash_value != slWebhookResponse.signature_hash) {
                Console.WriteLine("Hash verification failed, not from valid source");
                return false;
              } else {
                Console.WriteLine("Hash verification succeded");
                return true;
              }
        }
    }

class Program
    {
      static void Main(string[] args)
        {
            string secret = "PORTONE_SECRET";
            SLWebhookResponse slWebhookResponse = new SLWebhookResponse()
            {
				order_ref = "order_ref",
				currency = "currency",
                merchant_order_ref = "merchant_order_ref",
                status = "status",
                signature_hash = "signature_hash"
            };

            bool isValid = ApiSecurityExample.VerifySignature(slWebhookResponse, secret);

            // Print the result
            if (isValid) {
                Console.WriteLine("Subscription Link Webhook response is valid.");
            } else {
                Console.WriteLine("Subscription Link Webhook response is invalid.");
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

        // Create SLWebhookResponse object using setter methods
        SLWebhookResponse slWebhookResponse = new SLWebhookResponse();
        slWebhookResponse.setOrderRef("order_ref");
        slWebhookResponse.setCurrency("currency");
        slWebhookResponse.setMerchantOrderRef("merchant_order_ref");
        slWebhookResponse.setSignature("signature");
        slWebhookResponse.setStatus("status");

        boolean isValid = verifySignature(slWebhookResponse, secret);

        // Print the result
        if (isValid) {
            System.out.println("Subscription Link Webhook response is valid.");
        } else {
            System.out.println("Subscription Link Webhook response is invalid.");
        }
    }

    public static boolean verifySignature(SLWebhookResponse slWebhookResponse, String secretKey) {
        try {
            Map<String, String> params = new TreeMap<>();
            params.put("order_ref", slWebhookResponse.getOrderRef());
            params.put("currency", slWebhookResponse.getCurrency());
            params.put("merchant_order_ref", slWebhookResponse.getMerchantOrderRef());
            params.put("status", slWebhookResponse.getStatus());

            // Encode the parameters
            String data = encodeParams(params);

            byte[] secret = secretKey.getBytes();
            byte[] message = data.getBytes();

            Mac sha256_HMAC = Mac.getInstance("HmacSHA256");
            SecretKeySpec secretKeySpec = new SecretKeySpec(secret, "HmacSHA256");
            sha256_HMAC.init(secretKeySpec);

            byte[] hash = sha256_HMAC.doFinal(message);
            String computedSignature = Base64.getEncoder().encodeToString(hash);
            if (!computedSignature.equals(slWebhookResponse.getSignature())) {
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

class SLWebhookResponse {
    private String orderRef;
    private String currency;
    private String merchantOrderRef;
    private String signature;
    private String status;

    // Default constructor
    public SLWebhookResponse() {
    }

    // Setter methods
    public void setOrderRef(String orderRef) {
        this.orderRef = orderRef;
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

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    // Getter methods
    public String getCurrency() {
        return currency;
    }

    public String getOrderRef() {
        return orderRef;
    }

    public String getMerchantOrderRef() {
        return merchantOrderRef;
    }

    public String getStatus() {
        return status;
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

class SLWebhookResponseObj:
    def __init__(self, currency, order_ref, merchant_order_ref, status, signature_hash):
        # Instance Variables
        self.currency = currency
        self.order_ref = order_ref
        self.merchant_order_ref = merchant_order_ref
        self.signature_hash = signature_hash
        self.status = status

def VerifySignature(slWebhookResponseObj, secretKey):
    f = {
        'currency': slWebhookResponseObj.currency,
        'order_ref': slWebhookResponseObj.order_ref,
        'merchant_order_ref': slWebhookResponseObj.merchant_order_ref,
        'status': slWebhookResponseObj.status,
    }

    f = dict(sorted(f.items()))
    message1 = urllib.parse.urlencode(f)
    message = message1.encode('utf-8')
    secret = secretKey.encode('utf-8')
    signature = base64.b64encode(hmac.new(secret, message, digestmod=hashlib.sha256).digest()).decode('utf-8')
    if signature != slWebhookResponseObj.signature_hash:
        print("Hash verification failed, not from valid source\n")
        return False
    else:
        print("Hash verification succeeded\n")
        return True

# Define constants
secret = 'PORTONE_SECRET'

# Create an instance of SLWebhookResponseObj
slWebhookResponseObj = SLWebhookResponseObj(
    currency='currency',
    order_ref='order_ref',
    merchant_order_ref='merchant_order_ref',
    signature_hash='signature_hash',
    status='status'
)

# Call VerifySignature
isValid = VerifySignature(slWebhookResponseObj, secret)
if isValid:
    print("Subscription Link Webhook response is valid.\n")
else:
    print("Subscription Link Webhook response is invalid.\n")

```

### Parameter list to generate signature   [Skip link to Parameter list to generate signature](https://docs.portone.cloud/docs/subscription-link-webhook-response\#parameter-list-to-generate-signature)

##### `currency`   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-link-webhook-response\#currency)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-link-webhook-response\#string)

The currency of the subscription

* * *

##### `order_ref`   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-link-webhook-response\#order_ref)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-link-webhook-response\#string-1)

The PortOne order reference of the subscription

* * *

##### `merchant_order_ref`   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-link-webhook-response\#merchant_order_ref)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-link-webhook-response\#string-2)

The order reference of the subscription provided by merchant

* * *

##### `status`   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-link-webhook-response\#status)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-link-webhook-response\#string-3)

The status of the subscription

* * *

##### `signature_hash`   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-link-webhook-response\#signature_hash)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-link-webhook-response\#string-4)

Calculate hash as mentioned earlier, verify if it is equal to signature\_hash received in the subscription link webhook response

* * *

> ## 📘  Note
>
> Refer to [Subscription Link Webhook Parameters](https://docs.portone.cloud/docs/subscription-link-webhook) for the complete list of subscription link webhook parameters.

Updated7 months ago

* * *

Did this page help you?

Yes

No

![Help](https://cdn.jsdelivr.net/gh/iamport-intl/portone-devx-chatbot-widget@production/public/chat-intro1.svg)