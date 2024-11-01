# Simple (subscription) calendar transformation service

This NodeJS (Express) project will take the contents of a subscribed calendar (usually a URL that ends in `.ics`) using the built-in Fetch API, and (currently) transform all instances of `America/New_York` to `America/Edmonton`

## Getting started

1. Check out project and run `npm install`
1. Create a `.env` file with the URL of your calendar like so:
    ```
    CAL_URL="https://www.calendarservice.com/ical/appointments.ics"
    ```
1. Run `node app.js`

## Useful resources

* Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
* Response interface of the Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Response
* Regular Expression playground: https://regexr.com
* Express Hello world example: https://expressjs.com/en/starter/hello-world.html
* dotenv: https://www.npmjs.com/package/dotenv
