---
url: "https://docs.portone.cloud/docs/ingestion"
title: "Ingestion"
---

## Efficient Data Ingestion for Accurate Reconciliation   [Skip link to Efficient Data Ingestion for Accurate Reconciliation](https://docs.portone.cloud/docs/ingestion\#efficient-data-ingestion-for-accurate-reconciliation)

The Ingestion screen is a key part of our Reconciliation Feature, designed to make data management easier by letting businesses upload and manage multiple data sources at once. This tool is perfect for businesses that deal with large volumes of transactions across different platforms, ensuring that all necessary data is collected and ready for reconciliation.

With the ability to upload multiple files at the same time, track upload status, view detailed metadata, and apply filters, our Ingestion tool gives full control and visibility over the data ingestion process. This ensures that your reconciliation is based on accurate and up-to-date data, reducing the risk of errors and mismatches.

## Data Ingestion Walkthrough   [Skip link to Data Ingestion Walkthrough](https://docs.portone.cloud/docs/ingestion\#data-ingestion-walkthrough)

This guide offers a straightforward, step-by-step process for ingesting data for reconciliation on the Portone platform.

Scribe \| Embed Ingest\_Data\_for\_Reconciliation\_\_v0nzAwyBRkCa8Pa\_G6cT\_g

![backdrop](https://scribehow.com/images/embedBackdrop.svg)

![Portone logo](https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://portone.io&size=64)

![](https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://portone.io&size=64)

# Ingest Data for Reconciliation

This guide provides a, step-by-step process for ingesting data for reconciliation on the Portone platform. Users will learn how to efficiently upload and verify their data, access the Data Ingestion screen, select time periods, and check upload statuses. The walkthrough also includes instructions for viewing detailed summaries of ingested records and tracking reconciliations linked to their data sources. This process is crucial for ensuring accurate and timely reconciliation.

20 Steps

3 minutes

![Portone](https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://portone.io&size=64)Portone

Step 0 of 20

Get Started

Made with
![Scribe](https://scribehow.com/images/logo-slate.svg)

[open scrolling step version in new tab for improved accessibility](https://scribehow.com/shared/Ingest_Data_for_Reconciliation__v0nzAwyBRkCa8Pa_G6cT_g)

In this walkthrough, users will:

- **Upload and Verify Data**: Learn how to efficiently upload data for reconciliation.
- **Access the Data Ingestion Screen**: Navigate to the appropriate section for managing data sources.
- **Select time range**: Choose relevant time frames to filter the data ingestion list.
- **Check Upload Status**: Monitor the status of uploaded files to ensure successful ingestion.
- **View Detailed Summaries**: Access summaries of ingested records and track reconciliations related to data sources.

This process is essential for maintaining accurate and timely reconciliation, helping users streamline their operations.

## Data Ingestion Sequence Diagram   [Skip link to Data Ingestion Sequence Diagram](https://docs.portone.cloud/docs/ingestion\#data-ingestion-sequence-diagram)

The Reconciliation Ingestion Flow in PortOne is designed to handle data uploads seamlessly and provide visibility into the status of each ingestion.

![](https://files.readme.io/4dc00f8dfa16767d7102763f221c051c5ce72b0c7678c6aac8b4bef994823f5f-Recon_Ingestion_Flow.png)

The key steps in this process include:

1. **Select Data Source and Upload File:**


Users begin by selecting the relevant data source from the list of configured sources.


Files can be uploaded manually or ingested through alternative channels like:

   - **SFTP**: Securely transfer files via SFTP for automated ingestion.
   - **Email Auto-forwarding**: Set up email forwarding to automatically process files received via email.
   - **API Integration**: If APIs are available, data can be fetched directly from the source, allowing for real-time ingestion.
2. **Create Ingestion Record:**


Once the file is uploaded, the system generates an ingestion record that logs key metadata such as the file name, source, upload time, and user details.
3. **Display List of Ingestions:**


The ingestion screen displays a list of all ingested files with the following information:

   - **Ingestion Status**: Indicates the current processing stage:

     - **Initiated**: The system has initiated data processing.
     - **Validation Failed**: Issues identified during the validation step, requiring user intervention.
     - **Ingestion Failed**: Issues occurred during ingestion, PortOne team will be notified and the issue will be resolved on priority.
     - **Success**: Data is successfully ingested and ready for reconciliation.
   - **Metadata**: Shows relevant details like file size, upload date, data source, and number of records.
4. **Validate and Ingest Data:**


The system performs data validation checks to ensure the uploaded files meet the required format and standards.


If validation is successful, the data is ingested into the reconciliation system. Errors during validation are highlighted for user review and correction.
5. **Update Ingestion Status:**


The status of each ingestion record is updated in real time to reflect the current state.

## Key Features   [Skip link to Key Features](https://docs.portone.cloud/docs/ingestion\#key-features)

- **Bulk File Uploads:** Easily upload multiple files from different sources at once. This is especially useful for businesses needing to reconcile data from various platforms like payment gateways, marketplaces, and internal systems.
- **Real-Time Status Tracking:** Track the progress of each file upload in real-time, allowing you to quickly identify and fix any issues during the ingestion process.
- **Detailed Metadata:** Get detailed information for each file, including the source, upload status, and any filters applied. This ensures you know the context of each data source, helping with reconciliation.
- **Error Handling and Resolution:** Detect and fix errors like missing data or formatting issues during ingestion. Our tool provides notifications and guides you on how to resolve these issues, ensuring your data is ready for reconciliation.

## Data Ingestion Functionalities   [Skip link to Data Ingestion Functionalities](https://docs.portone.cloud/docs/ingestion\#data-ingestion-functionalities)

The Data Ingestion screen is key for managing and preparing data for reconciliation. It helps businesses handle large amounts of different data sources by allowing bulk uploads, tracking progress in real-time, and providing detailed insights for each file. This ensures that all transaction data from payment gateways, e-commerce platforms, or internal records is accurately collected and ready for reconciliation.

![Screenshot 2024-08-14 at 4.51.20 PM.png](https://files.readme.io/b1ac9f7-Screenshot_2024-08-14_at_4.51.20_PM.png)

### Bulk Uploads from Multiple Sources   [Skip link to Bulk Uploads from Multiple Sources](https://docs.portone.cloud/docs/ingestion\#bulk-uploads-from-multiple-sources)

1. **Upload Multiple Files**: Quickly upload several files from different sources like PSPs, marketplaces, and accounting systems, perfect for businesses that deal with many data files each day.
2. **Support for Various File Types**: Accepts different file formats, making it easy to gather data from diverse platforms.

### Real-Time Tracking   [Skip link to Real-Time Tracking](https://docs.portone.cloud/docs/ingestion\#real-time-tracking)

1. **Live Status Updates**: Monitor the progress of each upload in real-time, with clear indicators showing if the upload is Pending, Successful, or Failed.
2. **Detailed Progress Reports**: See real-time updates on total files, processed records, successful uploads, and any failures, helping you handle issues proactively.

### Detailed Metadata Information   [Skip link to Detailed Metadata Information](https://docs.portone.cloud/docs/ingestion\#detailed-metadata-information)

1. **File Metadata Display**: Each upload shows important details like the upload date, source, and validation status for transparency and context.
2. **Automatic File Labels**: Categorizes metadata to help you quickly identify the source of each file, distinguishing between settlement files and transaction records.

### Error Handling and Validation   [Skip link to Error Handling and Validation](https://docs.portone.cloud/docs/ingestion\#error-handling-and-validation)

1. **Automatic Error Detection**: The tool checks for formatting errors, missing information, or unsupported file types.
2. **Validation Feedback**: Files are validated to meet reconciliation standards. If errors are found, users receive detailed feedback and suggestions to fix them before reconciliation.

### Date Range and Source Filters   [Skip link to Date Range and Source Filters](https://docs.portone.cloud/docs/ingestion\#date-range-and-source-filters)

1. **Custom Filters**: Filter data by date range, source, or validation status for a focused view of specific transactions or periods.
2. **Search Functionality**: Quickly find specific files or data sources to speed up data verification and management.

### Flexible Ingestion Options   [Skip link to Flexible Ingestion Options](https://docs.portone.cloud/docs/ingestion\#flexible-ingestion-options)

1. **Multiple Ingestion Options**: Upload files directly or fetch them from secure FTP sources, API integrations, cloud drive support, via email etc, allowing for different workflows.
2. **Scheduled Uploads**: Set up regular upload schedules for recurring data sources, making it easier to manage frequent reconciliations.

### Benefits of the Data Ingestion Screen   [Skip link to Benefits of the Data Ingestion Screen](https://docs.portone.cloud/docs/ingestion\#benefits-of-the-data-ingestion-screen)

1. **Centralized Data Management**: Manage large amounts of data from various sources with clear visibility and control.
2. **Reduced Errors**: Proactive error handling lowers the chances of discrepancies during reconciliation, improving accuracy.
3. **Increased Efficiency**: Bulk uploads, real-time tracking, and custom filters save time and enhance productivity for teams handling reconciliation.

The Data Ingestion screen provides the control, flexibility, and accuracy needed to ensure that reconciliation data is complete and timely, forming a solid foundation for financial reliability.

## Practical Applications   [Skip link to Practical Applications](https://docs.portone.cloud/docs/ingestion\#practical-applications)

- **Multi-Platform Businesses:** Reconcile data from multiple platforms like payment gateways, e-commerce sites, and internal systems.
- **Large Volume Transactions:** Efficiently manage and reconcile large volumes of transactions without the risk of overload or missed data.
- **Custom Filters:** Apply filters to focus on specific data sets, such as transactions from certain dates, sources, or types.

## Conclusion   [Skip link to Conclusion](https://docs.portone.cloud/docs/ingestion\#conclusion)

Effective data ingestion is the backbone of successful reconciliation. Our Ingestion tool gives you the power to handle large amounts of data from various sources, ensuring all the important information is captured, organized, and ready for accurate reconciliation. With real-time tracking, detailed metadata, and strong error handling, you can be confident that your reconciliation process uses the most accurate and complete data.

Updated7 months ago

* * *

Did this page help you?

Yes

No

![Help](https://cdn.jsdelivr.net/gh/iamport-intl/portone-devx-chatbot-widget@production/public/chat-intro1.svg)