export default function WeatherDisplay({weather}) {
    function loaded() {
        return (
            <>
            <h3>The current weather at {weather.name}, USA</h3>
            <p><b>Temperature:</b> {weather.main.temp} Celcius</p>
            <p><b>Feels like: </b> {weather.main.feels_like} Celcius</p>

            <p><b>Descriptions:</b> {weather.weather[0].main}, {weather.weather[0].description} </p>

            <p><b>Humidity: </b> {weather.main.humidity}%</p>
            </>
        )
    }

    function loading() {
        return (
            <p>No data to display, please enter your zipcode</p>
        )
    }
    return (
        <div className='weather-display'>
        {typeof weather.main !== 'undefined' ?
        loaded()
        :
        loading()}
        </div>
    )
}

