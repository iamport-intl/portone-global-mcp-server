---
url: "https://docs.portone.cloud/docs/jwt-authentication"
title: "JWT Authentication"
---

## What is a JWT?   [Skip link to What is a JWT?](https://docs.portone.cloud/docs/jwt-authentication\#what-is-a-jwt)

JWT (JSON Web Token) generation involves creating a secure token that encodes user or system authentication details. The process typically starts with the frontend requesting the token from the backend, which generates or retrieves the token using a secret key.

![](https://files.readme.io/2988095ea416f7eb238807cb4091340249ef8cc99f8d095af399c8a1be35e30f-JWT-Generation-Flow-Diagram.png)

_This JWT is then used for authentication when interacting with PortOne APIs._

## JWT Generation Flow   [Skip link to JWT Generation Flow](https://docs.portone.cloud/docs/jwt-authentication\#jwt-generation-flow)

### 1\. JWT via Code:   [Skip link to 1. JWT via Code:](https://docs.portone.cloud/docs/jwt-authentication\#1-jwt-via-code)

- Frontend requests JWT from backend.
- Backend generates JWT and returns it to the frontend.

### 2\. JWT via PortOne Server API:   [Skip link to 2. JWT via PortOne Server API:](https://docs.portone.cloud/docs/jwt-authentication\#2-jwt-via-portone-server-api)

- Frontend requests JWT from backend.
- Backend calls PortOne API to generate JWT.
- PortOne API returns JWT to backend, which passes it to the frontend.

## Generate JWT token via API   [Skip link to Generate JWT token via API](https://docs.portone.cloud/docs/jwt-authentication\#generate-jwt-token-via-api)

Use this API to generate the token without code. You will receive a token valid for the next 6 hours and can be used in subsequent APIs until it expires.

🔑

Create JWT using API

Open Recipe

## Generate JWT token via Code   [Skip link to Generate JWT token via Code](https://docs.portone.cloud/docs/jwt-authentication\#generate-jwt-token-via-code)

1. Use PortOne secret key to generate JWT token

2. Algorithm used for generating token - "HS256"

3. Payload/claims to encode for generating token



JSON





```rdmd-code lang-json theme-light

{
       "iss": "PORTONE",
       "sub": "SglffyyZgojEdXWL",
       "iat": 1516239022,
       "exp": 1516239122
}

```










| Parameter | Description | Values |
| --- | --- | --- |
| iss | Issuer | Default Value: "PORTONE" |
| sub | Subject | PortOne Key |
| iat | Issued Timestamp in sec | Timestamp in sec |
| exp | Expiry Timestamp in sec | Timestamp in sec+100 |

4. Add following Headers in request as shown in below request -


```rdmd-code lang- theme-light
X-Portone-Client-Key:  PortOne_Client_Key
Authorization: Bearer token

```

5. Sample curl request



cURL





```rdmd-code lang-curl theme-light

curl --request GET \
     --url https://api.portone.cloud/api/transaction/MERCHANT1647433108462/status \
     --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjI2NDk3NjU5MDEsImlhdCI6MTY0OTc2NTkwMSwiaXNzIjoiQ0hBSVBBWSIsInN1YiI6Ik5QU2taWlllZkd5S3ZCeGkifQ.VHicuV4dvfp8skktlcRVJNS_WwsD_MtKB4JLBbLWOcQ' \
     --header 'X-Portone-Client-Key: ShgshjhgHdg' \
     --header 'accept: application/json'

```


### Sample code to generate JWT token   [Skip link to Sample code to generate JWT token](https://docs.portone.cloud/docs/jwt-authentication\#sample-code-to-generate-jwt-token)

GoJavaScriptPHPNodeC#JavaPython

```rdmd-code lang-go theme-light

package main

import (
	"fmt"
	"time"

	"github.com/golang-jwt/jwt"
)

func GenerateJWTToken1(portOneKey, portOneSecret string) string {
	cur := time.Now()
	expirationTime := cur.Add(100 * time.Second)

	// Create the JWT claims, which includes the username and expiry time
	claims := jwt.StandardClaims{
		// In JWT, the expiry time is expressed as unix milliseconds
		Issuer:    "PORTONE",
		Subject:   portOneKey,
		IssuedAt:  cur.Unix(),
		ExpiresAt: expirationTime.Unix(),
	}

	// Declare the token with the algorithm used for signing, and the claims
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	// Create the JWT string
	tokenString, _ := token.SignedString([]byte(portOneSecret))
	return tokenString

}

func main() {
	portOneKey := "PORTONE_KEY"
	portOneSecret := "PORTONE_SECRET"
	token := GenerateJWTToken(portOneKey, portOneSecret)
	fmt.Printf("The JWT Token is: %v\n", token)
}

```

```rdmd-code lang-javascript theme-light

<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js"></script>

<script>
    function base64url(source) {
        return CryptoJS.enc.Base64.stringify(source).replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');
    }

    function main() {
        let portOneKey = "PORTONE_KEY";
        let portOneSecret = "PORTONE_SECRET";
        const jwtToken = jwtTokenGenerator(portOneKey, portOneSecret);
        console.log(`The JWT Token is: ${jwtToken}\n`);
    }

    function jwtTokenGenerator(portOneKey, portOneSecret) {
        const header = {
            alg: "HS256",
            typ: "JWT"
        };
        const stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
        const encodedHeader = base64url(stringifiedHeader);
        const timeNow = parseInt(new Date().getTime()/1000);

        const data = {
            sub: portOneKey,
            iss: "PORTONE",
            iat: timeNow,
            exp: timeNow+100,
        };

        const stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(data));
        const encodedData = base64url(stringifiedData);

        const token = `${encodedHeader}.${encodedData}`;
        const signature = CryptoJS.HmacSHA256(token, portOneSecret);
        const encodedSignature = base64url(signature);

        const jwtToken = `${token}.${encodedSignature}`;
        return jwtToken;
    }
    main()
</script>

```

```rdmd-code lang-php theme-light

<?php
function base64url($source) {
    // Encode in classical base64
    $encodedSource = base64_encode($source);

    // Remove padding equal characters
    $encodedSource = rtrim($encodedSource, '=');

    // Replace characters according to base64url specifications
    $encodedSource = str_replace(['+', '/'], ['-', '_'], $encodedSource);

    return $encodedSource;
}

function generateJWTToken() {
    $key = "PORTONE_KEY";
    $secret_key = "PORTONE_SECRET";

    $header = [\
        'alg' => 'HS256',\
        'typ' => 'JWT'\
    ];
    $stringifiedHeader = json_encode($header);
    $encodedHeader = base64url($stringifiedHeader);

    $timeNow = time();

    $data = [\
        'iss' => 'PORTONE',\
        'sub' => $key,\
        'iat' => $timeNow,\
        'exp' => $timeNow + 100\
    ];
    $stringifiedData = json_encode($data);
    $encodedData = base64url($stringifiedData);

    $token = $encodedHeader . "." . $encodedData;
    $signature = base64url(hash_hmac('sha256', $token, $secret_key, true));

    $signedToken = $token . "." . $signature;

    return $signedToken;
}

function main() {
    $jwtToken = generateJWTToken();
    echo "JWT Token: " . $jwtToken;
}

main()
?>

```

```rdmd-code lang-node theme-light

import CryptoJS from 'crypto-js';

function base64url(source) {
    // Encode in classical base64
    let encodedSource = CryptoJS.enc.Base64.stringify(source)

    // Remove padding equal characters
    encodedSource = encodedSource.replace(/=+$/, '')

    // Replace characters according to base64url specifications
    encodedSource = encodedSource.replace(/\+/g, '-')
    encodedSource = encodedSource.replace(/\//g, '_')

    return encodedSource
}

function getJWTToken(portOnekey,portOneSecret){
    const header = {
        "alg": "HS256",
        "typ": "JWT"
    };

    const stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
    const encodedHeader = base64url(stringifiedHeader);

    const timeNow = parseInt(new Date().getTime() / 1000);

    const data = {
        "sub": portOnekey,
        "iss": "PORTONE",
        "iat": timeNow,
        "exp": timeNow + 100,
    };

    const stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(data));
    const encodedData = base64url(stringifiedData);

    const token = encodedHeader + "." + encodedData;

    let signature = CryptoJS.HmacSHA256(token, portOneSecret);
    signature = base64url(signature);

    return token + "." + signature;
}
let portOneKey = "PORTONE_KEY";
let portOneSecret = "PORTONE_SECRET";
let token = getJWTToken(portOneKey, portOneSecret );
console.log(`The JWT Token is: ${token}\n`);

```

```rdmd-code lang-csharp theme-light

using System;
using System.Text;
using System.Security.Cryptography;
using Newtonsoft.Json;

public class Base64Url
{
    public static string Encode(byte[] source)
    {
        // Encode in classical base64
        string encodedSource = Convert.ToBase64String(source);

        // Remove padding equal characters
        encodedSource = encodedSource.TrimEnd('=');

        // Replace characters according to base64url specifications
        encodedSource = encodedSource.Replace('+', '-');
        encodedSource = encodedSource.Replace('/', '_');

        return encodedSource;
    }
}

public class JWTGenerator
{
    public static string GetJWTToken(string portOnekey, string portOneSecret)
    {
        var header = new
        {
            alg = "HS256",
            typ = "JWT"
        };

        var stringifiedHeader = Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(header));
        var encodedHeader = Base64Url.Encode(stringifiedHeader);

        var timeNow = (long)(DateTime.UtcNow - new DateTime(1970, 1, 1)).TotalSeconds;

        var data = new
        {
            sub = portOnekey,
            iss = "PORTONE",
            iat = timeNow,
            exp = timeNow + 100,
        };

        var stringifiedData = Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(data));
        var encodedData = Base64Url.Encode(stringifiedData);

        var token = encodedHeader + "." + encodedData;

        var secret = Encoding.UTF8.GetBytes(portOneSecret);

        using (var hmac = new HMACSHA256(secret))
        {
            var signatureBytes = hmac.ComputeHash(Encoding.UTF8.GetBytes(token));
            var signature = Base64Url.Encode(signatureBytes);

            var signedToken = token + "." + signature;
            return signedToken;
        }
    }
}

class Program
{
    static void Main(string[] args)
    {
        string key = "PORTONE_KEY";
        string secret = "PORTONE_SECRET";
        string jwtToken = JWTGenerator.GetJWTToken(key, secret);
        Console.WriteLine("JWT Token:",+ jwtToken);
    }
}

```

```rdmd-code lang-java theme-light

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

public class JWTGenerator {

    public static String base64url(byte[] source) {
        // Encode in classical base64
        String encodedSource = Base64.getEncoder().encodeToString(source);

        // Remove padding equal characters
        encodedSource = encodedSource.replaceAll("=+$", "");

        // Replace characters according to base64url specifications
        encodedSource = encodedSource.replace("+", "-");
        encodedSource = encodedSource.replace("/", "_");

        return encodedSource;
    }

    public static String generateJWTToken() {
        String key = "PORTONE_KEY";
        String secretKey = "PORTONE_SECRET";

        // Header
        String header = "{\"alg\":\"HS256\",\"typ\":\"JWT\"}";
        byte[] stringifiedHeader = header.getBytes(StandardCharsets.UTF_8);
        String encodedHeader = base64url(stringifiedHeader);

        // Payload
        long timeNow = System.currentTimeMillis() / 1000;

        String payload = "{\"iss\":\"PORTONE\",\"sub\":\"" + key + "\",\"iat\":" + timeNow + ",\"exp\":" + (timeNow + 1000000) + "}";
        byte[] stringifiedPayload = payload.getBytes(StandardCharsets.UTF_8);
        String encodedData = base64url(stringifiedPayload);

        // Token
        String token = encodedHeader + "." + encodedData;

        // Signature
        try {
            Mac sha256_HMAC = Mac.getInstance("HmacSHA256");
            SecretKeySpec secret_key = new SecretKeySpec(secretKey.getBytes(StandardCharsets.UTF_8), "HmacSHA256");
            sha256_HMAC.init(secret_key);

            byte[] signatureBytes = sha256_HMAC.doFinal(token.getBytes(StandardCharsets.UTF_8));
            String signature = base64url(signatureBytes);

            // Signed Token
            return token + "." + signature;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public static void main(String[] args) {
        String jwtToken = generateJWTToken();
        System.out.println("JWT Token: " + jwtToken);
    }
}

```

```rdmd-code lang-python theme-light

import base64
import json
import hashlib
import hmac
import time

def base64url(source):
    # Remove padding equal characters
    encoded_source = base64.b64encode(source).decode().rstrip("=")

    # Replace characters according to base64url specifications
    encoded_source = encoded_source.replace("+", "-").replace("/", "_")

    return encoded_source

def generate_jwt_token():
    key = "PORTONE_KEY"
    secret_key = "PORTONE_SECRET"

    # Header
    header = {
        'alg': 'HS256',
        'typ': 'JWT'
    }
    stringified_header = json.dumps(header)
    encoded_header = base64url(stringified_header.encode())

    # Payload
    time_now = int(time.time())
    data = {
        'iss': 'PORTONE',
        'sub': key,
        'iat': time_now,
        'exp': time_now + 100
    }
    stringified_data = json.dumps(data)
    encoded_data = base64url(stringified_data.encode())

    # Token
    token = f"{encoded_header}.{encoded_data}"

    # Signature
    signature = base64url(hmac.new(secret_key.encode(), token.encode(), hashlib.sha256).digest())

    # Signed Token
    signed_token = f"{token}.{signature}"

    return signed_token

def main():
    jwt_token = generate_jwt_token()
    print("JWT Token:", jwt_token)

if __name__ == "__main__":
    main()

```

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