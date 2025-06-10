---
url: "https://docs.portone.cloud/docs/subscription-redirection-response"
title: "Subscription Redirection Response"
---

To ensure the integrity and authenticity of subscription responses, you can use signature verification. The signature is a cryptographic hash generated using a secret key and the content of the subscription response.

![](https://files.readme.io/0c76521060204c8c1aa35bce8a9b1f3385390efab3e4d4ded7818787065e1b0f-Subscription_Redirection.png)

## Steps for Signature Verification   [Skip link to Steps for Signature Verification](https://docs.portone.cloud/docs/subscription-redirection-response\#steps-for-signature-verification)

1. **Extract Signature**: Extract the signature from the payment response.
2. **Extract Data**: Extract the relevant data fields from the payment response.
3. **Recreate Message**: Recreate the message by concatenating the extracted data fields.
4. **Compute Signature**: Compute the signature using the same algorithm and secret key used for generating the original signature.
5. **Compare Signatures**: Compare the extracted signature with the computed signature.
6. **Compare Collected Amount and Currency**: Compare the collected amount, currency with the details in your DB for the given merchant\_order\_ref
7. **Verification**: If the two signatures match, the payment response is considered valid. Otherwise, it may have been tampered with.

## Example Code   [Skip link to Example Code](https://docs.portone.cloud/docs/subscription-redirection-response\#example-code)

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

type SubscriptionResponse struct {
    OrderRef         string
    ChannelOrderRef  string
    MerchantOrderRef string
    Status           string
    SignatureHash    string
}

func VerifySignature(subscriptionResponse SubscriptionResponse, secretKey string) bool {
    // Create a url.Values map and add the necessary parameters
    params := make(url.Values)
    params.Add("order_ref", subscriptionResponse.OrderRef)
    params.Add("channel_order_ref", subscriptionResponse.ChannelOrderRef)
    params.Add("merchant_order_ref", subscriptionResponse.MerchantOrderRef)
    params.Add("status", subscriptionResponse.Status)

    // Encode the parameters
    data := params.Encode()

    // Create the HMAC hash using SHA-256
    secret := []byte(secretKey)
    message := []byte(data)
    hash := hmac.New(sha256.New, secret)
    hash.Write(message)

    // Convert the hash to a base64 string
    hashValue := base64.StdEncoding.EncodeToString(hash.Sum(nil))

    // Compare the computed hash with the signature received in the subscription response
    if hashValue != subscriptionResponse.SignatureHash {
        fmt.Println("Hash verification failed, not from valid source")
        return false
    } else {
        fmt.Println("Hash verification succeeded")
        return true
    }
}

func main() {

    portOneSecret := "PORTONE_SECRET"

    // Verify the collected amount and currency received in the redirection matches with data in your system

    // Define the subscription response struct below with the respective query params received in redirection
    subscriptionResponse := SubscriptionResponse{
        OrderRef:         "order_ref",
        ChannelOrderRef:  "channel_order_ref",
        MerchantOrderRef: "merchant_order_ref",
        Status:           "status",
        SignatureHash:    "signature_hash",
    }

    // Verify the signature
    isValid := VerifySignature(subscriptionResponse, portOneSecret)

    // Output the result of the verification
    if isValid {
        fmt.Println("Subscription response is valid.")
    } else {
        fmt.Println("Subscription response is invalid.")
    }
}

```

```rdmd-code lang-php theme-light

<?php
function VerifySignature($responseObj, $secretKey) {
    // Extract the received signature hash from the response object
    $signature_hash = $responseObj->signature_hash;

    // Create an array with the necessary parameters
    $data = array(
        'order_ref' => $responseObj->order_ref,
        'merchant_order_ref' => $responseObj->merchant_order_ref,
        'channel_order_ref' => $responseObj->channel_order_ref,
        'status' => $responseObj->status,
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

    // Verify the collected amount and currency received in the redirection matches with data in your system

    // Define the subscription response struct below with the respective query params received in redirection
    $responseObj = (object) [\
        'order_ref' => 'order_ref',\
        'merchant_order_ref' => 'merchant_order_ref',\
        'channel_order_ref' => 'channel_order_ref',\
        'status' => 'status',\
        'signature_hash' => 'signature_hash'\
    ];

    // Verify the signature
    $isValid = VerifySignature($responseObj, $secret_key);

    // Print the result of the verification
    if ($isValid) {
        echo "Subscription response is valid.\n";
    } else {
        echo "Subscription response is invalid.\n";
    }
}

// Call the main function
main();

?>

```

```rdmd-code lang-node theme-light

const crypto = require('crypto');
const { URLSearchParams } = require('url');

function VerifySignature(responseObj, secretKey) {
    const params = new URLSearchParams();

    params.append('order_ref', responseObj.order_ref);
    params.append('channel_order_ref', responseObj.channel_order_ref);
    params.append('merchant_order_ref', responseObj.merchant_order_ref);
    params.append('status', responseObj.status);

    params.sort();
    const message = params.toString()
    const hash_value =  crypto.createHmac('sha256', secretKey).update(message).digest('base64');

    if(hash_value !==  responseObj.signature_hash){
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

    // Verify the collected amount and currency received in the redirection matches with data in your system

    // Example response object
    const responseObj = {
        order_ref: 'order_ref',
        merchant_order_ref: 'merchant_order_ref',
        channel_order_ref: 'channel_order_ref',
        status: 'status',
        signature_hash: 'signature_hash'
    };

    // Verify the signature
    const isValid = VerifySignature(responseObj, secretKey);

    // Print the result of the verification
    if (isValid) {
        console.log("Subscription response is valid.");
    } else {
        console.log("Subscription response is invalid.");
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
    class SubscriptionResponse
    {
        public string order_ref;
        public string merchant_order_ref;
        public string channel_order_ref;
        public string status;
        public string signature_hash;
    }

    class ApiSecurityExample
    {
        public static bool VerifySignature(SubscriptionResponse subscriptionResponse, string secret)
        {
            var map = new SortedDictionary<string, string>()
            {
                { "channel_order_ref", subscriptionResponse.channel_order_ref },
                { "merchant_order_ref", subscriptionResponse.merchant_order_ref },
                { "order_ref", subscriptionResponse.order_ref },
                { "status", subscriptionResponse.status },
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

            if (hash_value != subscriptionResponse.signature_hash) {
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

            // Verify the collected amount and currency received in the redirection matches with data in your system

            SubscriptionResponse subscriptionResponse = new SubscriptionResponse()
            {
                order_ref = "order_ref",
                merchant_order_ref = "merchant_order_ref",
                channel_order_ref = "channel_order_ref",
                status = "status",
                signature_hash = "signature_hash"
            };

            bool isValid = ApiSecurityExample.VerifySignature(subscriptionResponse, secret);

            // Print the result
            if (isValid) {
                Console.WriteLine("Subscription response is valid.");
            } else {
                Console.WriteLine("Subscription response is invalid.");
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

public class Main {
    public static void main(String[] args) {
        String secret = "PORTONE_SECRET";

        // Verify the collected amount and currency received in the redirection matches with data in your system

        // Create SubscriptionResponse object using setter methods
        SubscriptionResponse subscriptionResponse = new SubscriptionResponse();
        subscriptionResponse.setChannelOrderRef("channelOrderRef");
        subscriptionResponse.setMerchantOrderRef("merchantOrderRef");
        subscriptionResponse.setOrderRef("orderRef");
        subscriptionResponse.setSignature("signature");
        subscriptionResponse.setStatus("status");

        boolean isValid = verifySignature(subscriptionResponse, secret);

        // Print the result
        if (isValid) {
            System.out.println("Subscription response is valid.");
        } else {
            System.out.println("Subscription response is invalid.");
        }
    }

    public static boolean verifySignature(SubscriptionResponse subscriptionResponse, String secretKey) {
        try {
            Map<String, String> params = new TreeMap<>();
            params.put("order_ref", subscriptionResponse.getOrderRef());
            params.put("channel_order_ref", subscriptionResponse.getChannelOrderRef());
            params.put("merchant_order_ref", subscriptionResponse.getMerchantOrderRef());
            params.put("status", subscriptionResponse.getStatus());

            // Encode the parameters
            String data = encodeParams(params);

            byte[] secret = secretKey.getBytes();
            byte[] message = data.getBytes();

            Mac sha256_HMAC = Mac.getInstance("HmacSHA256");
            SecretKeySpec secretKeySpec = new SecretKeySpec(secret, "HmacSHA256");
            sha256_HMAC.init(secretKeySpec);

            byte[] hash = sha256_HMAC.doFinal(message);
            String computedSignature = Base64.getEncoder().encodeToString(hash);

            // Compare computed signature to the one received in subscription response
            if (!computedSignature.equals(subscriptionResponse.getSignature())) {
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

class SubscriptionResponse {
    private String channelOrderRef;
    private String merchantOrderRef;
    private String orderRef;
    private String signature;
    private String status;

    // Default constructor
    public SubscriptionResponse() {
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

    // Getter methods
    public String getOrderRef() {
        return orderRef;
    }

    public String getChannelOrderRef() {
        return channelOrderRef;
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

class ResponseObj:
    def __init__(self, order_ref, channel_order_ref, merchant_order_ref, status, signature_hash):
        # Instance Variable
        self.order_ref = order_ref
        self.channel_order_ref = channel_order_ref
        self.merchant_order_ref = merchant_order_ref
        self.status = status
        self.signature_hash = signature_hash

def VerifySignature(responseObj, secretKey):
    f = {
        'channel_order_ref': responseObj.channel_order_ref,
        'merchant_order_ref': responseObj.merchant_order_ref,
        'order_ref': responseObj.order_ref,
        'status': responseObj.status,
        }

    f = dict(sorted(f.items()))
    message1 = urllib.parse.urlencode(f)
    message = message1.encode('utf-8')
    secret = secretKey.encode('utf-8')
    signature = base64.b64encode(hmac.new(secret, message, digestmod=hashlib.sha256).digest()).decode('utf-8')

    if signature != responseObj.signature_hash:
        print("Hash verification failed, not from valid source\n")
        return False;
    else:
        print("Hash verification succeded\n")
        return True;

# Define constants
secret = 'PORTONE_SECRET'

# Verify the collected amount and currency received in the redirection matches with data in your system

# Create an instance of ResponseObj
responseObj = ResponseObj(
    order_ref='order_ref',
    channel_order_ref='channel_order_ref',
    merchant_order_ref='merchant_order_ref',
    status='status',
    signature_hash='signature_hash'
)

# Call VerifySignature
isValid = VerifySignature(responseObj, secret)
if isValid:
    print("Subscription response is valid.\n")
else:
    print("Subscription response is invalid.\n")

```

### Parameter list to generate signature   [Skip link to Parameter list to generate signature](https://docs.portone.cloud/docs/subscription-redirection-response\#parameter-list-to-generate-signature)

##### `merchant_order_ref`   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-response\#merchant_order_ref)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-response\#string)

Order Reference of the subscription transaction

* * *

##### `order_ref`   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-response\#order_ref)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-response\#string-1)

PortOne's Order Reference for the subscription transaction

* * *

##### `channel_order_ref`   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-response\#channel_order_ref)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-response\#string-2)

Payment Channel's Order Reference

* * *

##### `status`   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-response\#status)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-response\#string-3)

The current status of the subscription

* * *

##### `signature_hash`   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-response\#signature_hash)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/subscription-redirection-response\#string-4)

Calculate hash as mentioned earlier, verify if it is equal to signature\_hash received in the subscription redirect response

* * *

> ## 📘  Note
>
> Refer to [Subscription Redirection Parameters](https://docs.portone.cloud/docs/subscription-redirect-parameters) for the complete list of redirection parameters.

Updated7 months ago

* * *

Did this page help you?

Yes

No

![Help](https://cdn.jsdelivr.net/gh/iamport-intl/portone-devx-chatbot-widget@production/public/chat-intro1.svg)