// Renders the weather status for a city.
(function ($) {
    // Process the form on page load.
    $(document).ready(function () {
        processForm();
        $('.big').addClass('animated fadeIn');
    });
    // Callback to process form.

    function processForm() {
        // Fetches data from API.

        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/forecast?id=2643743&APPID=a9508773417434f367d4e3a786c10458&units=metric',
            jsonp: 'callback',
            dataType: 'jsonp',
            cache: false,
            // Works with the response
            success: function (response) {
                var icon = ("<img src='images/" + response.list[0].weather[0].icon + ".svg'>"),
                    icon2 = ("<img src='images/" + response.list[8].weather[0].icon + ".svg'>"),
                    icon3 = ("<img src='images/" + response.list[16].weather[0].icon + ".svg'>"),
                    icon4 = ("<img src='images/" + response.list[24].weather[0].icon + ".svg'>"),
                    icon5 = ("<img src='images/" + response.list[32].weather[0].icon + ".svg'>"),
                    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    d = new Date(response.list[0].dt_txt.slice([0], [10])),
                    d2 = new Date(response.list[8].dt_txt.slice([0], [10])),
                    d3 = new Date(response.list[16].dt_txt.slice([0], [10])),
                    d4 = new Date(response.list[24].dt_txt.slice([0], [10])),
                    d5 = new Date(response.list[32].dt_txt.slice([0], [10])),
                    dayName = days[d.getDay()],
                    dayName2 = days[d2.getDay()],
                    dayName3 = days[d3.getDay()],
                    dayName4 = days[d4.getDay()],
                    dayName5 = days[d5.getDay()],
                    monthName = months[d.getMonth()],
                    monthName2 = months[d2.getMonth()],
                    monthName3 = months[d3.getMonth()],
                    monthName4 = months[d4.getMonth()],
                    monthName5 = months[d5.getMonth()];
                // Adds "nth" (st, nd, th) to date
                function nth1() {
                    if (response.list[0].dt_txt.slice([8], [10]) > 3 && response.list[0].dt_txt.slice([8], [10]) < 21) return 'th'; // 
                    switch (response.list[0].dt_txt.slice([8], [10]) % 10) {
                        case 1:
                            return "st";
                        case 2:
                            return "nd";
                        case 3:
                            return "rd";
                        default:
                            return "th";
                    }
                }

                function nth2() {
                    if (response.list[8].dt_txt.slice([8], [10]) > 3 && response.list[8].dt_txt.slice([8], [10]) < 21) return 'th'; // 
                    switch (response.list[8].dt_txt.slice([8], [10]) % 10) {
                        case 1:
                            return "st";
                        case 2:
                            return "nd";
                        case 3:
                            return "rd";
                        default:
                            return "th";
                    }
                }

                function nth3() {
                    if (response.list[16].dt_txt.slice([8], [10]) > 3 && response.list[16].dt_txt.slice([8], [10]) < 21) return 'th'; // 
                    switch (response.list[16].dt_txt.slice([8], [10]) % 10) {
                        case 1:
                            return "st";
                        case 2:
                            return "nd";
                        case 3:
                            return "rd";
                        default:
                            return "th";
                    }
                }

                function nth4() {
                    if (response.list[24].dt_txt.slice([8], [10]) > 3 && response.list[24].dt_txt.slice([8], [10]) < 21) return 'th'; // 
                    switch (response.list[24].dt_txt.slice([8], [10]) % 10) {
                        case 1:
                            return "st";
                        case 2:
                            return "nd";
                        case 3:
                            return "rd";
                        default:
                            return "th";
                    }
                }

                function nth5() {
                    if (response.list[32].dt_txt.slice([8], [10]) > 3 && response.list[32].dt_txt.slice([8], [10]) < 21) return 'th'; // 
                    switch (response.list[32].dt_txt.slice([8], [10]) % 10) {
                        case 1:
                            return "st";
                        case 2:
                            return "nd";
                        case 3:
                            return "rd";
                        default:
                            return "th";
                    }
                }
                $('.weather_description').text(response.list[0].weather[0].description.charAt(0).toUpperCase() + response.list[0].weather[0].description.slice(1));
                $('.weather_humidity').text(response.list[0].main.humidity);
                $('.weather_mintemp').text(response.list[0].main.temp_min);
                $('.weather_windspeed').text(response.list[0].wind.speed);
                // Rounds temp value
                $('#weather_temp').text(Math.round(response.list[0].main.temp));
                $('#weather_temp-2').text(Math.round(response.list[8].main.temp));
                $('#weather_temp-3').text(Math.round(response.list[16].main.temp));
                $('#weather_temp-4').text(Math.round(response.list[24].main.temp));
                $('#weather_temp-5').text(Math.round(response.list[32].main.temp));
                // Gets day name, adds "nth" (st, nd, th), removes first 0 if present and adds month name
                $('#date-1').text(dayName + " " + response.list[0].dt_txt.slice([8], [10]).replace(/\b0/g, '') + nth1() + " " + monthName);
                $('#date-2').text(dayName2 + " " + response.list[8].dt_txt.slice([8], [10]).replace(/\b0/g, '') + nth2() + " " + monthName2);
                $('#date-3').text(dayName3 + " " + response.list[16].dt_txt.slice([8], [10]).replace(/\b0/g, '') + nth3() + " " + monthName3);
                $('#date-4').text(dayName4 + " " + response.list[24].dt_txt.slice([8], [10]).replace(/\b0/g, '') + nth4() + " " + monthName4);
                $('#date-5').text(dayName5 + " " + response.list[32].dt_txt.slice([8], [10]).replace(/\b0/g, '') + nth5() + " " + monthName5);
                // Adds weather icon
                $('#display-0').html(icon);
                $('#display-1').html(icon2);
                $('#display-2').html(icon3);
                $('#display-3').html(icon4);
                $('#display-4').html(icon5);
            },
        });
    }
})(jQuery);
