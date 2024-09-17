const cities = ['Indore', 'Jabalpur', 'Ujjain', 'Bhopal', 'Sehore', 'Satna', 'Rewa'];

async function fetchWeather(city, index) {
    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=' + city;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '277b74bad8msh93df7961bab9405p120cd8jsne8bbf5b0e76f',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result)

        // Extract the relevant data
        const is_day = result.current.is_day ? "Yes" : "No";
        const condition = result.current.condition.text;
        const wind_degree = result.current.wind_degree;
        const wind_dir = result.current.wind_dir;
        const humidity = result.current.humidity;
        const cloud = result.current.cloud;
        const feelslike_c = result.current.feelslike_c;
        const temp_c = result.current.temp_c;
        const temp_f = result.current.temp_f;
        const wind_mph = result.current.wind_mph;
        const heatindex_c = result.current.heatindex_c;
        const dewpoint_c = result.current.dewpoint_c;

        // Update the HTML elements with the fetched data
        if (index === 0) {
            document.getElementById('cityName').innerText = city;
            document.getElementById('is_day').innerText = is_day;
            document.getElementById('temp_c').innerText = temp_c;
            document.getElementById('temp_f').innerText = temp_f;
            document.getElementById('condition').innerText = condition;
            document.getElementById('wind_degree').innerText = wind_degree;
            document.getElementById('wind_dir').innerText = wind_dir;
            document.getElementById('humidity').innerText = humidity;
            document.getElementById('wind_mph').innerText = wind_mph;
            document.getElementById('cloud').innerText = cloud;
            document.getElementById('feelslike_c').innerText = feelslike_c;
            document.getElementById('heatindex_c').innerText = heatindex_c;
            document.getElementById('dewpoint_c').innerText = dewpoint_c;
        } else {
            document.getElementById(`is_day_${index}`).innerText = is_day;
            document.getElementById(`temp_c_${index}`).innerText = temp_c;
            document.getElementById(`temp_f_${index}`).innerText = temp_f;
            document.getElementById(`condition_${index}`).innerText = condition;
            document.getElementById(`wind_degree_${index}`).innerText = wind_degree;
            document.getElementById(`wind_mph_${index}`).innerText = wind_mph;
            document.getElementById(`humidity_${index}`).innerText = humidity;
            document.getElementById(`cloud_${index}`).innerText = cloud;
            document.getElementById(`feelslike_c_${index}`).innerText = feelslike_c;
            document.getElementById(`heatindex_c_${index}`).innerText = heatindex_c;
            document.getElementById(`dewpoint_c_${index}`).innerText = dewpoint_c;
            // Update other elements as needed
        }

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Fetch weather data for all cities
cities.forEach((city, index) => fetchWeather(city, index));

// Event listener for the search button
document.getElementById('submit').addEventListener("click", (e) => {
    e.preventDefault();
    const searchCity = document.getElementById('city').value;
    fetchWeather(searchCity, 0); // Fetch for the searched city as the first city
});