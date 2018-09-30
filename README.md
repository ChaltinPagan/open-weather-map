# Weather Forecast

Get a 5-day forecast by city.

## Features

* Search by city
* Temperature Units (Celsius or Fahrenheit)
* Humidity
* Responsive Web Design 

## Technologies

* React JS
* Bootstrap
* Font Awesome
* Node
* Express
* [OpenWeatherMap API](https://openweathermap.org/api)

## Installation

1. Clone the master branch of this repository.
2. Open a terminal for the server.
    * `npm start`
3. Open a second terminal for the client side.
    * `cd client`
    * `npm start`

## Thought Process

1. Read the docs for the OpenWeatherMap API.
    * Chose the 5 day/3 hour API over the 16 day API because it's free.
    * Use Postman to test the API and see JSON data.
2. Chose to have users search by city name.
    * This is the easiest query for users to search by, in comparsion to coordinates or zipcode.
3. Chose data from the API request.
    * Decided on the most needed info for the day.
    * Since API response give forecast data for every 3 hours of the 5-day period and uses UTC time, decided to display forecast at 12:00:00 UTC.
4. Chose to have a default city (New York) on website load.
    * When users vist the site, that will be the forecast they see. 
5. Determined error messages.
    * Included a loading page.
    * Included a techincal difficulties page.
    * Included an alert if a forecast is not found
6. Determined technologies and architecture of single page app.
    * Chose a full stack app.
    * Chose frameworks and libraries.
7. Used GitHub to track coding history and for version control.
8. Deployed to Heroku.

## Tradeoffs 

1. API
    * Open Weather Map's 16-day API returns data for daily weather forecasts, but is a paid subscription. The 5 day/3 hour API gives forecast data for every 3 hours of a 5-day period and does not give a daily forecast. While the 5 day API has more data to sort, it is a free API.
2. Forecast
    * Due to time limits, I chose to display the forecast for UTC time 12:00:00, which is how the 5-day API time stamps the data.
3. City Search
    * The API has a list of cities and their IDs. Searching by city ID is more accurate and by city name. The JSON list is very large. Due to time limits, I could not implement search by city ID.

## Future Implementations

1. Only the 5-day forecast part of the page should reload. Not the whole page.
2. Use SASS for easier implementation of CSS.
3. Separate more of the features into separate, functional components.
    * Will make the code easier to read.
4. Show more data from the 5 day API.
    * Implement a dropdown for users to select a time of day in 3-hour increments.
    * Implement a graph to show temperature change over the day.
5. Search by city ID for a more accurate response from OpenWeatherMap API.
6. Mulitlingual support for weather descriptions.
    * The API offers translation of the weather secription.