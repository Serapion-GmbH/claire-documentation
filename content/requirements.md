---
title: "Requirements"
---

Before you can effectively use our app and integrate chatbots into your platforms, it's essential to obtain and configure an API key. API keys are crucial for authenticating requests and accessing various services, including AI models from providers like OpenAI, Azure, and others. This guide outlines the prerequisites for obtaining an API key, the process to acquire one, and the necessary steps to get started.

## 1. Importance of API Keys

API keys are unique identifiers used to authenticate and authorize requests made to API services. They ensure that only authorized users or applications can access the resources and functionalities provided by the service. In the context of our app, API keys are required to integrate AI capabilities and utilize chatbot functionalities.

### Key Points:
- **Authentication**: API keys validate the identity of the requester.
- **Authorization**: They grant access to specific services and resources.
- **Security**: They help prevent unauthorized access and usage of API services.

## 2. Obtaining an API Key

### 2.1 Choosing a Provider

Depending on the AI services you wish to use, you may need to obtain an API key from one or more of the following providers:

- **OpenAI**: Provides access to advanced language models such as GPT-4.
- **Azure Cognitive Services**: Offers various AI and machine learning services, including language understanding and text analytics.
- **Other Providers**: Depending on your needs, you may also consider other AI service providers.

### 2.2 Steps to Obtain an API Key

#### 2.2.1 OpenAI

1. **Sign Up**: Visit the [OpenAI website](https://www.openai.com) and create an account if you don’t have one.
2. **Access API Keys**: Log in to your OpenAI account and navigate to the API section in your dashboard.
3. **Create an API Key**: Generate a new API key from the dashboard. Copy the key and securely store it.

#### 2.2.2 Azure Cognitive Services

1. **Sign Up**: Go to the [Azure Portal](https://portal.azure.com) and create an Azure account if you don’t have one.
2. **Create a Resource**: In the Azure Portal, create a new resource for Cognitive Services or a specific AI service you wish to use.
3. **Obtain API Key**: Once the resource is created, navigate to the resource’s “Keys and Endpoint” section to find your API key. Copy the key and keep it safe.

#### 2.2.3 Other Providers

1. **Visit Provider’s Website**: Go to the website of the chosen AI service provider.
2. **Sign Up and Create Account**: Register for an account if required.
3. **Generate API Key**: Follow the provider’s process to create and retrieve your API key. Ensure you copy and securely store it.

## 3. Configuring the API Key

Once you have obtained your API key, you need to configure it in the app to enable integration with the AI services.

### 3.1 Entering the API Key

1. **Access App Settings**: Log in to the app and navigate to the settings or configuration section where API keys are managed.
2. **Add API Key**: Enter the API key you obtained from your chosen provider into the appropriate field.
3. **Save Settings**: Save your changes to ensure the API key is properly configured and applied.

### 3.2 Testing the Integration

1. **Verify Connectivity**: Check if the app can successfully connect to the AI services using the provided API key.
2. **Perform Test Queries**: Conduct test queries or interactions to ensure that the AI capabilities are working as expected.

## 4. Security and Management

### 4.1 Key Management

- **Keep Keys Secure**: Do not share your API keys publicly. Treat them as sensitive information.
- **Rotate Keys**: Regularly rotate your API keys to enhance security.
- **Monitor Usage**: Keep track of API usage to detect any unusual activity.

### 4.2 Handling Issues

- **Expired Keys**: If you encounter issues related to API key expiration, regenerate the key and update it in the app.
- **Access Denied**: If you receive access errors, verify that the API key is correctly configured and has the necessary permissions.

## 6. Required Network Endpoints

In order for the application to function properly, the following endpoints must be accessible:

- `serapion-gmbh.github.io (Claire Docs)`
- `www.google.com (ReCaptcha)`
- `www.gstatic.com`
- `serapion-demo.eu.auth0.com`
- `cdn.auth0.com`
- `serapion.net`
- `platform.nova-ai.de`
- `store.nova-ai.de`
- `demo-chat.nova-ai.de`
- `api-core.nova-ai.de`
- `api-store.nova-ai.de`
- `api-crawler.nova-ai.de`
- `crawler.nova-ai.de`

> **Note:** Ensure these endpoints are reachable and not blocked by any firewall, proxy, or browser restrictions. Blocking any of these may result in limited or broken functionality within the app.

## 5. Conclusion

Obtaining and configuring an API key is a crucial step for integrating AI services into your application. By following the steps outlined in this guide, you can ensure that you have the necessary credentials to access and utilize AI capabilities effectively. 

In addition to proper API key setup, make sure your network allows access to all required endpoints to ensure full functionality of the app.

Securely manage your API keys and regularly monitor their usage to maintain the integrity and security of your integrations.

For further assistance with API keys, integration issues, or connectivity problems, refer to the documentation provided by your AI service provider or contact their support team for help.

