---
url: "https://docs.portone.cloud/docs/payment-link-webhook-response"
title: "Payment Link Webhook Response"
---

To ensure the integrity and authenticity of webhook, you can use signature verification. The signature is a cryptographic hash generated using a secret key and the content of the webhook.

![](https://files.readme.io/babe8a3c9ff201ebf5e93b2f135d0697e146a1fa1e95fad6b8bfae69d59f71fa-Portone_SignatureVerification_forwebhook.png)

## Steps for Signature Verification   [Skip link to Steps for Signature Verification](https://docs.portone.cloud/docs/payment-link-webhook-response\#steps-for-signature-verification)

1. **Extract Signature**: Extract the signature from the webhook.
2. **Extract Data**: Extract the relevant data fields from the webhook.
3. **Recreate Message**: Recreate the message by concatenating the extracted data fields.
4. **Compute Signature**: Compute the signature using the same algorithm and secret key used for generating the original signature.
5. **Compare Signatures**: Compare the extracted signature with the computed signature.
6. **Compare Amount and Currency**: Compare the received amount and currency with the details in your DB for the given merchant\_order\_ref
7. **Verification**: If the two signatures match, the webhook is considered valid. Otherwise, it may have been tampered with.

## Example Code   [Skip link to Example Code](https://docs.portone.cloud/docs/payment-link-webhook-response\#example-code)

### Payment Link Webhook   [Skip link to Payment Link Webhook](https://docs.portone.cloud/docs/payment-link-webhook-response\#payment-link-webhook)

Code samples to generate and verify signature hash for the data received via **Payment Link Status** webhooks sent from PortOne servers.

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

type PLWebhookResponse struct {
	Amount           float64
	CountryCode      string
	Currency         string
	LinkRef          string
	MerchantOrderRef string
	SignatureHash    string
	Status           string
}

func VerifySignature(plWebhookResponse PLWebhookResponse, secretKey string) bool {
	// Create a url.Values map and add the necessary parameters
	params := make(url.Values)
	params.Add("amount", strconv.FormatFloat(plWebhookResponse.Amount, 'f', -1, 64))
	params.Add("country_code", plWebhookResponse.CountryCode)
	params.Add("currency", plWebhookResponse.Currency)
	params.Add("link_ref", plWebhookResponse.LinkRef)
	params.Add("merchant_order_ref", plWebhookResponse.MerchantOrderRef)
	params.Add("status", plWebhookResponse.Status)

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
	if hashValue != plWebhookResponse.SignatureHash {
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
	plWebhookResponse := PLWebhookResponse{
		Amount:           amount,
		CountryCode:      "country_code",
		Currency:         currency,
		MerchantOrderRef: "merchant_order_ref",
		LinkRef:          "link_ref",
		SignatureHash:    "signature_hash",
		Status:           "status",
	}

	// Verify the signature
	isValid := VerifySignature(plWebhookResponse, portOneSecret)

	// Output the result of the verification
	if isValid {
		fmt.Println("Payment Link Webhook response is valid.")
	} else {
		fmt.Println("Payment Link Webhook response is invalid.")
	}
}

```

```rdmd-code lang-php theme-light

<?php
function VerifySignature($plWebhookResponseObj, $secretKey) {
    // Extract the received signature hash from the plWebhookResponseObj object
    $signature_hash = $plWebhookResponseObj->signature_hash;

    // Create an array with the necessary parameters
    $data = array(
        'amount' => $plWebhookResponseObj->amount,
        'link_ref' => $plWebhookResponseObj->link_ref,
        'country_code' => $plWebhookResponseObj->country_code,
        'currency' => $plWebhookResponseObj->currency,
        'merchant_order_ref' => $plWebhookResponseObj->merchant_order_ref,
        'status' => $plWebhookResponseObj->status,
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
    $plWebhookResponseObj = (object) [\
        'amount' => $amount,\
        'link_ref' => 'link_ref',\
        'country_code' => 'country_code',\
        'currency' => $currency,\
        'merchant_order_ref' => 'merchant_order_ref',\
        'status' => 'status',\
        'signature_hash' => 'signature_hash',\
    ];;

    // Verify the signature
    $isValid = VerifySignature($plWebhookResponseObj, $secret_key);

    // Print the result of the verification
    if ($isValid) {
        echo "Payment Link Webhook response is valid.\n";
    } else {
        echo "Payment Link Webhook response is invalid.\n";
    }
}

// Call the main function
main();

?>

```

```rdmd-code lang-node theme-light

const crypto = require('crypto');
const { URLSearchParams } = require('url');

function VerifySignature(plWebhookResponseObj, secretKey) {
    const params = new URLSearchParams();
    params.append('currency', plWebhookResponseObj.currency)
    params.append('amount', plWebhookResponseObj.amount)
    params.append('link_ref', plWebhookResponseObj.link_ref)
    params.append('merchant_order_ref', plWebhookResponseObj.merchant_order_ref)
    params.append('country_code', plWebhookResponseObj.country_code)
    params.append('status', plWebhookResponseObj.status)

    params.sort();
    const message = params.toString()
    const hash_value =  crypto.createHmac('sha256', secretKey).update(message).digest('base64');

    if(hash_value !==  plWebhookResponseObj.signature_hash){
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

    // Example plWebhookResponseObj object
    const plWebhookResponseObj = {
        amount: amount,
        link_ref: 'link_ref',
        country_code: 'country_code',
        currency: currency,
        merchant_order_ref: 'merchant_order_ref',
        status: 'status',
        signature_hash: 'signature_hash'
    };

    // Verify the signature
    const isValid = VerifySignature(plWebhookResponseObj, secretKey);

    // Print the result of the verification
    if (isValid) {
        console.log("Payment Link Webhook response is valid.");
    } else {
        console.log("Payment Link Webhook response is invalid.");
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
    class PLWebhookResponse
    {
	public double amount;
        public string currency;
        public string link_ref;
        public string merchant_order_ref;
        public string country_code;
        public string status;
        public string signature_hash;
    }

    class ApiSecurityExample
    {
        public static bool VerifySignature(PLWebhookResponse plWebhookResponse, string secret)
        {
            var map = new SortedDictionary<string, string>()
            {
		{ "amount", RemoveTrailingZeros(plWebhookResponse.amount) },
		{ "link_ref", plWebhookResponse.link_ref },
		{ "country_code", plWebhookResponse.country_code },
		{ "currency", plWebhookResponse.currency },
		{ "merchant_order_ref", plWebhookResponse.merchant_order_ref },
                { "status", plWebhookResponse.status },
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

            if (hash_value != plWebhookResponse.signature_hash) {
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

            PLWebhookResponse plWebhookResponse = new PLWebhookResponse()
            {
		amount = amount,
		link_ref = "link_ref",
		country_code = "country_code",
		currency = currency,
                merchant_order_ref = "merchant_order_ref",
                status = "status",
                signature_hash = "signature_hash"
            };

            bool isValid = ApiSecurityExample.VerifySignature(plWebhookResponse, secret);

            // Print the result
            if (isValid) {
                Console.WriteLine("Payment Link Webhook response is valid.");
            } else {
                Console.WriteLine("Payment Link Webhook response is invalid.");
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

        // Verify the amount and currency received in the webhook matches with data in your system
        Double amount = 100.25;
        String currency = "currency";

        // Create PLWebhookResponse object using setter methods
        PLWebhookResponse plWebhookResponse = new PLWebhookResponse();
        plWebhookResponse.setAmount(amount);
        plWebhookResponse.setLinkRef("link_ref");
        plWebhookResponse.setCountryCode("country_code");
        plWebhookResponse.setCurrency(currency);
        plWebhookResponse.setMerchantOrderRef("merchant_order_ref");
        plWebhookResponse.setSignature("signature");
        plWebhookResponse.setStatus("status");

        boolean isValid = verifySignature(plWebhookResponse, secret);

        // Print the result
        if (isValid) {
            System.out.println("Payment Link Webhook response is valid.");
        } else {
            System.out.println("Payment Link Webhook response is invalid.");
        }
    }

    public static boolean verifySignature(PLWebhookResponse plWebhookResponse, String secretKey) {
        try {
            Map<String, String> params = new TreeMap<>();
            params.put("amount", plWebhookResponse.getAmount());
            params.put("link_ref", plWebhookResponse.getLinkRef());
            params.put("country_code", plWebhookResponse.getCountryCode());
            params.put("currency", plWebhookResponse.getCurrency());
            params.put("merchant_order_ref", plWebhookResponse.getMerchantOrderRef());
            params.put("status", plWebhookResponse.getStatus());

            // Encode the parameters
            String data = encodeParams(params);

            byte[] secret = secretKey.getBytes();
            byte[] message = data.getBytes();

            Mac sha256_HMAC = Mac.getInstance("HmacSHA256");
            SecretKeySpec secretKeySpec = new SecretKeySpec(secret, "HmacSHA256");
            sha256_HMAC.init(secretKeySpec);

            byte[] hash = sha256_HMAC.doFinal(message);
            String computedSignature = Base64.getEncoder().encodeToString(hash);
            if (!computedSignature.equals(plWebhookResponse.getSignature())) {
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

class PLWebhookResponse {
    private Double amount;
    private String linkRef;
    private String countryCode;
    private String currency;
    private String merchantOrderRef;
    private String signature;
    private String status;

    // Default constructor
    public PLWebhookResponse() {
    }

    // Setter methods
    public void setLinkRef(String linkRef) {
        this.linkRef = linkRef;
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

    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    // Getter methods
    public String getCurrency() {
        return currency;
    }

    public String getAmount() {
        DecimalFormat df = new DecimalFormat("0.##");
        return df.format(amount);
    }

    public String getLinkRef() {
        return linkRef;
    }

    public String getMerchantOrderRef() {
        return merchantOrderRef;
    }

    public String getCountryCode() {
        return countryCode;
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

class PLWebhookResponseObj:
    def __init__(self, currency, amount, link_ref, merchant_order_ref, country_code, status, signature_hash):
        # Instance Variables
        self.amount = amount
        self.country_code = country_code
        self.currency = currency
        self.link_ref = link_ref
        self.merchant_order_ref = merchant_order_ref
        self.signature_hash = signature_hash
        self.status = status

def VerifySignature(plWebhookResponseObj, secretKey):
    f = {
        'amount': f"{plWebhookResponseObj.amount:.2f}".rstrip('0').rstrip('.'),
        'country_code': plWebhookResponseObj.country_code,
        'currency': plWebhookResponseObj.currency,
        'link_ref': plWebhookResponseObj.link_ref,
        'merchant_order_ref': plWebhookResponseObj.merchant_order_ref,
        'status': plWebhookResponseObj.status,
    }

    f = dict(sorted(f.items()))
    message1 = urllib.parse.urlencode(f)
    message = message1.encode('utf-8')
    secret = secretKey.encode('utf-8')
    signature = base64.b64encode(hmac.new(secret, message, digestmod=hashlib.sha256).digest()).decode('utf-8')
    if signature != plWebhookResponseObj.signature_hash:
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
# Create an instance of PLWebhookResponseObj
plWebhookResponseObj = PLWebhookResponseObj(
    amount=amount,
    country_code='country_code',
    currency=currency,
    link_ref='link_ref',
    merchant_order_ref='merchant_order_ref',
    signature_hash='signature_hash',
    status='status'
)

# Call VerifySignature
isValid = VerifySignature(plWebhookResponseObj, secret)
if isValid:
    print("Payment Link Webhook response is valid.\n")
else:
    print("Payment Link Webhook response is invalid.\n")

```

### Parameter list to generate signature   [Skip link to Parameter list to generate signature](https://docs.portone.cloud/docs/payment-link-webhook-response\#parameter-list-to-generate-signature)

##### `amount`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook-response\#amount)

###### _float64_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook-response\#float64)

The amount of the transaction

* * *

##### `country_code`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook-response\#country_code)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook-response\#string)

The country code of the transaction

* * *

##### `currency`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook-response\#currency)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook-response\#string-1)

The currency of the transaction

* * *

##### `link_ref`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook-response\#link_ref)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook-response\#string-2)

The unique ref of the payment link provided by PortOne

* * *

##### `merchant_order_ref`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook-response\#merchant_order_ref)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook-response\#string-3)

Order Reference sent by merchant to initiate payment link

* * *

##### `status`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook-response\#status)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook-response\#string-4)

The current status of the payment link

* * *

##### `signature_hash`   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook-response\#signature_hash)

###### _string_   [Skip link to [object Object]](https://docs.portone.cloud/docs/payment-link-webhook-response\#string-5)

Calculate hash as mentioned earlier, verify if it is equal to signature\_hash received in the payment link webhook response

* * *

> ## 📘  Note
>
> Refer to [Payment Link Webhook Parameters](https://docs.portone.cloud/docs/payment-link-webhook) for the complete list of payment link webhook parameters.

Updated8 months ago

* * *

Did this page help you?

Yes

No

![Help](https://cdn.jsdelivr.net/gh/iamport-intl/portone-devx-chatbot-widget@production/public/chat-intro1.svg)