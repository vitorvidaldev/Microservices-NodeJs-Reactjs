# Blog

The front-end of this application uses ReactJs, and the back-end was developed NodeJs.

## npm packages

- express - Resposable for endpoint routing
- nodemon - Auto-restarts the server (development dependency)
- cors - Enables cross-origin resource sharing within Nodejs
- axios - Makes HTTP request between applications

## Components

### Client

Basic React App that enables the creation and visualization of posts and comments.

### Comments

Creates comments for the post with the given id.

### Posts

Enables the creation and fetching of posts, composed by an 32 hexidecimal characters id and a title.

### Query

Stores an object with the posts and comments data. The application can still retrieve data when this service is working.

### Moderation

A moderation service to filter comments that contain given words.

## What's a message broker/event bus?

Message brokers are an inter-application communication technology to help build a common integration mechanism to support cloud native, microservices-based, serverless and hybrid cloud architectures. [IBM] <https://www.ibm.com/cloud/learn/message-brokers>.

The Message Broker used was implemented by hand for learning purposes. There are 3rd party solutions that are commonly used in production, such as Kafka and RabbitMQ.

## How to run each component

Every service can be run with the following command.

```
npm run start
```

## Author

Vitor Vidal. You can learn more about me [here](https://github.com/vitorvidaldev)

## License

This project uses the MIT License. It is available in the `LICENSE.md` file.