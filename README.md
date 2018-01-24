FreeCodeCamp Backend Challenge #1
=================================

Timestamp Microservice
----------------------

## Objective ## 

Build a full stack JavaScript app that is functionally similar to this: https://timestamp-ms.herokuapp.com/ and deploy it to Glitch.

Here are the specific user stories you should implement for this project:

1. I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).

2. If it does, it returns both the Unix timestamp and the natural language form of that date.

3. If it does not contain a date or Unix timestamp, it returns null for those properties.


### Example usage:
`````url
https://fcc-api-1.glitch.me/December%2015,%202015
https://fcc-api-1.glitch.me/1450137600
`````
### Example output:
`````json
{ "unix": 1450137600, "natural": "December 15, 2015" }
`````