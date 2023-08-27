# API Proxy Server
API proxy server to hide the API key used to make a call to a third-party API using Node.js. Added rate limiting to avoid spamming and caching for improved performance 

Generally, when we make a call to a public API (like the Open Weather API in this case), we can see the API key on the client side, like this:

![image](https://user-images.githubusercontent.com/50912134/230177324-e0711a24-d707-40dd-9a28-10087597ed40.png)

By making an API proxy server, we hide the API key & store it on the client side. So our client side looks something like this: 

![image](https://user-images.githubusercontent.com/50912134/230177856-c6d7d5af-a51a-4213-a3ac-5efa976b1d2b.png)

## Rate Limiting
Rate limiting is used to limit network traffic. It puts a cap on how often someone can repeat an action within a certain time period – in this example, trying to hit the weather API. Rate limiting can help stop certain kinds of malicious bot activity.

## Caching
Caching refers to storing frequently accessed data in a cache to reduce the need for expensive computations or external API calls, resulting in faster response times and lower server loads.

### Hosted on Vercel.
