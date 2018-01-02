# Responsive 5-day Weather Forecast

This is a weather forecast reponsive project that gets weather data from the [OpenWeatherMap Api](https://openweathermap.org/forecast5). The challenge was to create a single responsive single HTML page displaying a 5 day weather forecast.

## Running the project

To work on the build I have used Brackets.io, you can download it [here](http://brackets.io/).

To run the project locally you can simply drag and drop the unzipped folder in Brackets, select index-api.html and click on the live preview mode - the lightning icon at the top right.

There are two html files : [index.html](../master/index.html) and [index-api.html](../master/index-api.html). The first does not use any api data, it is mainly to showcase a variety of icons / svg animation.

## General notes

I have decided to go for a clean, minimal but still enticing UI to quickly immerse the user in the weather forecast theme and rapidly provide the most relevant weather info, considering the visual hierarchy by giving prominence to the most common weather info first. 

To follow that thinking I've focussed on displaying the weather data at the current time and weather data at the same time of the day for the next 4 days. I've also rounded some of the temperature values as by default they have unnecessarily long values with 2 decimals,  considering that most weather apps seem to do the same.

I have used London as the forecast location due to the relevance of the location for this project.

Being not a javascript expert, my main focus here was to create a desirable but still simple and comprehensible UI, and to show some general technical understanding of how to manipulate API data.

## What I would do with more time

* The background image has a subtle animation that mimics a wind effect, strenghening the "weather" type of theme. The background animation is best viewed on mobile or smaller screens, with more time I'd make it more obvious on larger screens.

* Create a variety of  backgrounds that match the current weather.

* Enable the user to switch to a more detailed view showing weather data for each day at a 3h interval (mocked up in the XD file)

* I wasn't sure about the importance of night time temperatures, maybe these could be filtered out

* Finalise icon set as I prioritised the most relevant weather conditions in London (rain, clouds etc) and gather icons in a web font

* Find user location and display weather data accordingly, or allow user to search for location.

## Links

### A few codepens I made for svg animations

Sun:
https://codepen.io/jimmyjmc/pen/rpmprb

Snow:
https://codepen.io/jimmyjmc/pen/ppPpRV

Rain:
https://codepen.io/jimmyjmc/pen/jYmYba

### Designs / detailed view example

[Weather-XD.png](../master/Weather-XD.png)
