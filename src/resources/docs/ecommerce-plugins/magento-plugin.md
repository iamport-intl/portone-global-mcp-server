---
url: "https://docs.portone.cloud/docs/magento-plugin"
title: "Magento Plugin"
---

This extension adds a new payment option to your Magento store's checkout page, offering customers a variety of payment methods through PortOne.

## Installation Guide   [Skip link to Installation Guide](https://docs.portone.cloud/docs/magento-plugin\#installation-guide)

### Upload the Extension to Magento   [Skip link to Upload the Extension to Magento](https://docs.portone.cloud/docs/magento-plugin\#upload-the-extension-to-magento)

#### **Option 1: Download Directly**   [Skip link to [object Object]](https://docs.portone.cloud/docs/magento-plugin\#option-1-download-directly)

1. Navigate to the Magento root directory:



bash





```rdmd-code lang-bash theme-light

cd $ROOT

```

2. Change to the app/code directory:

**Note**: If the code directory does not exist, create it.



bash





```rdmd-code lang-Text theme-light

cd app/code

```

3. Download the extension zip file:



bash





```rdmd-code lang-Text theme-light

wget <extension_url>

```

4. Unzip the downloaded extension file:



bash





```rdmd-code lang-Text theme-light

tar -xf <extension_file>

```


#### **Option 2: Upload via FTP**   [Skip link to [object Object]](https://docs.portone.cloud/docs/magento-plugin\#option-2-upload-via-ftp)

Use an FTP client to upload the extension folder to the app/code directory within the Magento root directory.

### Install the Plugin   [Skip link to Install the Plugin](https://docs.portone.cloud/docs/magento-plugin\#install-the-plugin)

After uploading the extension, follow these steps to install the plugin:

bash

```rdmd-code lang-Text theme-light

# Navigate back to the Magento root directory
cd $ROOT

# Enable the PortOne_Payment module
php bin/magento module:enable PortOne_Payment

# Upgrade the setup
php bin/magento setup:upgrade

# Compile the dependency injection configurations
php bin/magento setup:di:compile

# Deploy static content
php bin/magento setup:static-content:deploy -f

```

### Supported Magento Versions   [Skip link to Supported Magento Versions](https://docs.portone.cloud/docs/magento-plugin\#supported-magento-versions)

- 2.3.4
- 2.4.2
- 2.4.3

### Configuration Instructions   [Skip link to Configuration Instructions](https://docs.portone.cloud/docs/magento-plugin\#configuration-instructions)

1. Log in to the Magento Admin Panel.
2. Navigate to Stores > Configuration.
3. In the Sales section, click on Payment Methods.
4. Scroll down and locate the PortOne payment method.
5. Enter your PortOne API Key and Secure Secret.

#### Configuring the Webhook   [Skip link to Configuring the Webhook](https://docs.portone.cloud/docs/magento-plugin\#configuring-the-webhook)

1. Create a new webhook in the PortOne Admin Dashboard.
2. Copy the webhook path provided in the Magento plugin settings.
3. Add your domain as a prefix to the webhook path.


Example:



bash





```rdmd-code lang-Text theme-light

{{base_url}}/portonepg/standard/update

```


### Miscellaneous   [Skip link to Miscellaneous](https://docs.portone.cloud/docs/magento-plugin\#miscellaneous)

#### Updating the Payment Logo   [Skip link to Updating the Payment Logo](https://docs.portone.cloud/docs/magento-plugin\#updating-the-payment-logo)

To update the payment logo, follow these steps:

1. Copy the new logo image to the following path:


```rdmd-code lang- theme-light
app/code/PortOne/Payment/view/frontend/web/images/portone-logo.png

```

2. Then paste the image inside the following directory:


```rdmd-code lang- theme-light
pub/media/portone/portone-logo.png

```


Updated10 months ago

* * *

Did this page help you?

Yes

No

![Help](https://cdn.jsdelivr.net/gh/iamport-intl/portone-devx-chatbot-widget@production/public/chat-intro1.svg)