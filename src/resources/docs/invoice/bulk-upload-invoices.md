---
url: "https://docs.portone.cloud/docs/bulk-upload-invoices"
title: "Bulk Upload Invoices"
---

## Overview   [Skip link to Overview](https://docs.portone.cloud/docs/bulk-upload-invoices\#overview)

The Bulk Upload feature in the PortOne Admin Console allows merchants to create multiple invoices simultaneously by uploading an Excel sheet containing invoice data. This simplifies the invoicing process for businesses that handle large volumes of transactions, saving time and effort.

Bulk\_Upload\_Invocies

![](https://cdn.loom.com/avatars/default-avatar.svg)

[Bulk\_Upload\_Invocies](https://www.loom.com/share/8d08564fb580429db87711238e3f61b8?source=embed_watch_on_loom_cta "Bulk_Upload_Invocies")

3 min

0 views

0

[Open video in Loom](https://www.loom.com/share/8d08564fb580429db87711238e3f61b8?source=embed_watch_on_loom_cta "Open video in Loom")

1.2×

2 min 54 sec⚡️3 min 38 sec2 min 54 sec2 min 25 sec1 min 56 sec1 min 42 sec1 min 27 sec1 min 9 sec

Your user agent does not support the HTML5 Video element.

![](https://cdn.loom.com/avatars/default-avatar.svg)

[Bulk\_Upload\_Invocies](https://www.loom.com/share/8d08564fb580429db87711238e3f61b8?source=embed_watch_on_loom_cta "Bulk_Upload_Invocies")

3 min

0 views

0

[Open video in Loom](https://www.loom.com/share/8d08564fb580429db87711238e3f61b8?source=embed_watch_on_loom_cta "Open video in Loom")

1.2×

2 min 54 sec⚡️3 min 38 sec2 min 54 sec2 min 25 sec1 min 56 sec1 min 42 sec1 min 27 sec1 min 9 sec

## Steps to Create Bulk Invoices   [Skip link to Steps to Create Bulk Invoices](https://docs.portone.cloud/docs/bulk-upload-invoices\#steps-to-create-bulk-invoices)

Scribe \| Embed Bulk\_uploading\_Invoices\_from\_PortOne\_Admin\_Console\_\_X FjmEMdSqKiy JdvnRuyg

![extension logo](https://scribehow.com/images/extensionLogo.svg)

# Welcome to Scribe

### Hi there! To view embedded content, Scribe needs your permission to access cross-site cookies.

Approve

### Login to PortOne Admin Console   [Skip link to Login to PortOne Admin Console](https://docs.portone.cloud/docs/bulk-upload-invoices\#login-to-portone-admin-console)

- Log in using your merchant credentials
- Navigate to the `Invoices` section from the side menu.

### Select the Bulk Upload Option   [Skip link to Select the Bulk Upload Option](https://docs.portone.cloud/docs/bulk-upload-invoices\#select-the-bulk-upload-option)

- Click on the `Create New Invoice` button.
- From the dropdown, select the `Import Invoices` option.

### Download the Template   [Skip link to Download the Template](https://docs.portone.cloud/docs/bulk-upload-invoices\#download-the-template)

- To ensure proper formatting, download the pre-configured Excel template by clicking the `Download a sample XLSX file` button.
- The template contains the necessary columns required to configure invoice details.

### Configuring the Invoice Data in the Excel Template   [Skip link to Configuring the Invoice Data in the Excel Template](https://docs.portone.cloud/docs/bulk-upload-invoices\#configuring-the-invoice-data-in-the-excel-template)

You can download the sample Excel Sheet from the PortOne admin console - [LINK](https://prod-sample-files.s3.ap-southeast-1.amazonaws.com/bulk_invoice_sample_final_with_templateref.xlsx)

![](https://files.readme.io/c79bd076e6b95eaf9c0c86d22869cfd451fa8e65437d6de7c5525426ea131a6d-Screenshot_2024-12-02_at_1.28.16_PM.png)

Open the downloaded template and populate the required fields for each invoice. Below are the key fields:

### Mandatory Fields   [Skip link to Mandatory Fields](https://docs.portone.cloud/docs/bulk-upload-invoices\#mandatory-fields)

1. **Invoice Number \[InvoiceNumber\]**: A unique identifier for each invoice.
2. **Invoice Date \[InvoiceDate\]**: The date when the invoice is issued.
3. **Due Date \[InvoiceDueDate\]**: The date by which the payment is due.
4. **Customer Name \[CustomerName\]**: Name of the customer.
5. **Customer Email \[CustomerEmail\]**: Email address to send the invoice to.
6. **Currency \[Currency\]**: The currency of the Invoice payment
7. **Line Items**: Description of products or services, quantity, rate, and subtotal.

1. **LineItem\_ID**: Unique Identified for the Line Item
2. **LineItem\_Detail**: Details of the Line Item. e.g. Name or description
3. **LineItem\_Quantity**: The quantity of the Line Item, must be numeric
4. **LineItem\_Rate**: The price rate of the Line Item, must be numeric

### Optional Fields   [Skip link to Optional Fields](https://docs.portone.cloud/docs/bulk-upload-invoices\#optional-fields)

01. **TemplateName**: The name of the template to use for the invoice.
02. **CustomerPhone**: The phone number of the customer receiving the invoice.
03. **InvoiceDescription**: A brief description or purpose of the invoice.
04. Custom Fields details
    1. **CustomFields\_Key**: The key or name for a custom field in the invoice.
    2. **CustomFields\_Value**: The value corresponding to the custom field key.
    3. **CustomFields\_Show**: Indicates whether the custom field should be displayed on the invoice.
05. Additional Invoice Notes details
    1. **AdditionalInvoiceNotes\_Title**: The title or header for additional notes on the invoice.
    2. **AdditionalInvoiceNotes\_Description**: A detailed description of the additional notes.
06. Additional Charges details
    1. **AdditionalCharges\_Title**: The title or label for the additional charges.
    2. **AdditionalCharges\_Type**: The type of additional charge (allowed values - CHARGE, DISCOUNT).
    3. **AdditionalCharges\_Amount**: The monetary value of the additional charge.
    4. **AdditionalCharges\_Nature**: The nature or description of the charge (allowed values - FLAT, PERCENT).
07. Reminder details
    1. **Reminder\_Time**: The time before payment is due to send a reminder.
    2. **Reminder\_TimeUnit**: The unit of time for the reminder (allowed values - hours\_before\_due\_date, hours\_after\_due\_date, days\_after\_due\_date, days\_before\_due\_date).
08. **NotifyBySMS**: Whether to send invoice notifications via SMS (TRUE/FALSE).
09. **NotifyByEmail**: Whether to send invoice notifications via email (TRUE/FALSE).
10. **SendEmailConfirmation**: Whether to send an email confirmation upon invoice creation (TRUE/FALSE).
11. Customer Note details
    1. **CustomerNoteTitle**: The title or subject of a note for the customer.
    2. **CustomerNoteValue**: The content or message of the customer note.
12. Billing Address details
    1. **BillingAddress\_Line1**: The first line of the billing address.
    2. **BillingAddress\_Line2**: The second line of the billing address (optional).
    3. **BillingAddress\_City**: The city for the billing address.
    4. **BillingAddress\_State**: The state for the billing address.
    5. **BillingAddress\_CountryCode**: The country code for the billing address.
    6. **BillingAddress\_ZipCode**: The ZIP or postal code for the billing address.
13. Shipping Address details
    1. **ShippingAddress\_Line1**: The first line of the shipping address.
    2. **ShippingAddress\_Line2**: The second line of the shipping address (optional).
    3. **ShippingAddress\_City**: The city for the shipping address.
    4. **ShippingAddress\_State**: The state for the shipping address.
    5. **ShippingAddress\_CountryCode**: The country code for the shipping address.
    6. **ShippingAddress\_ZipCode**: The ZIP or postal code for the shipping address.

### Upload the Bulk upload Invoice sheet   [Skip link to Upload the Bulk upload Invoice sheet](https://docs.portone.cloud/docs/bulk-upload-invoices\#upload-the-bulk-upload-invoice-sheet)

Review the Excel file content and Submit the file for processing.

### Download the error sheet (If anything fails)   [Skip link to Download the error sheet (If anything fails)](https://docs.portone.cloud/docs/bulk-upload-invoices\#download-the-error-sheet-if-anything-fails)

Once the upload process is completed, a modal will display the following:

- Success Count: Number of invoices successfully uploaded.
- Failed Count: Number of invoices that failed to upload.

If any invoices fail to upload, you can:

- Click Download Error Sheet to review the failed entries.
- Check the error details provided (e.g., missing fields, incorrect data format).
- Correct the errors in the original file and re-upload the corrected sheet.

### View bulk uploaded Invoices in the Invoices table   [Skip link to View bulk uploaded Invoices in the Invoices table](https://docs.portone.cloud/docs/bulk-upload-invoices\#view-bulk-uploaded-invoices-in-the-invoices-table)

Once the upload is completed successfully:

- Navigate to the Invoices Table.
- Use the Search or Filter options to locate the uploaded invoices.
- Review the status and details of the uploaded invoices (e.g., Pending, Paid, Overdue).

### Tips for a Successful Bulk Upload:   [Skip link to Tips for a Successful Bulk Upload:](https://docs.portone.cloud/docs/bulk-upload-invoices\#tips-for-a-successful-bulk-upload)

- Always use the provided template for formatting.
- Ensure all mandatory fields (e.g., Customer Name, Amount) are filled in.
- Double-check tax rates and payment terms for accuracy.
- Resolve errors promptly using the error sheet to minimize delays.

By following these steps, you can efficiently upload, manage, and track bulk invoices in PortOne!

Updated6 months ago

* * *

Did this page help you?

Yes

No

![Help](https://cdn.jsdelivr.net/gh/iamport-intl/portone-devx-chatbot-widget@production/public/chat-intro1.svg)