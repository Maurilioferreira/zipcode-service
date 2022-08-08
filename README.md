# Zipcode Service

The Zipcode service is a Fullstack application.

You can search for the zip code and the system will return city and state data.

The system displays the last 5 codes searched, and allows the user to clear this history.

![Zipcode service](https://github.com/Maurilioferreira/zipcode-service/blob/main/zipcode.png)

## Pre-Requisites

Docker, NodeJS v14.20.0


## Installation
To run the app just:
```
$ docker-compose up
```

[Access frontend](http://localhost:3000)

[Access Graphql](http://localhost:4000)

Search for the zipcode

## Test
with node v14.20.0
```
$ cd frontend
$ yarn test
```


## Future Improvements
- I need to improve the typescript with this for example:
https://www.apollographql.com/docs/react/development-testing/static-typing
- I need to create test in the backend.
- To improve performance I need to measure with a load test. Using a tool like https://k6.io/
