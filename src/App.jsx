import { useEffect, useRef, useState } from 'react'
import './App.css'

const API_KEY = 'c7a33ec5d9e47c3e58af2976fbb65e87'

function App() {
  const [zipcode, setZipcode] = useState("60559")
  const [weather, setWeather] = useState({})
  const displayRef = useRef(null)

  // SHOULD NOT USE USEEFFECT: TOO MANY UNNECESSARY CALLs TO API
  // useEffect(() => {
  //   async function getWeather() {
  //     try {
  //       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${API_KEY}`)

  //       const data = await response.json()
  //       setWeather(data)
  //       console.log(data)
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   }

  //   getWeather();

  // }, [])


  async function handleSearch() {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${API_KEY}&units=metric`)

      if(response.ok) {
        const data = await response.json()
        setWeather(data)
        console.log(data)
      }
      else {
        setWeather({})
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <h1>The Weather App</h1>
      <h2>United States</h2>

      <div className='zipcode-input'>
        <input onChange={(e) => setZipcode(e.target.value)} type="text" placeholder='Enter your zipcode' />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Check if we have the data to display */}

      <div ref={displayRef} className='weather-display'>
      {typeof weather.main == 'undefined' ? (
        <div>
          <p>No data to display, please enter your zipcode</p>
        </div>)
        :
        (
          <>
          <h3>The current weather at {weather.name}, USA</h3>
          <p><b>Temperature:</b> {weather.main.temp} Celcius</p>
          <p><b>Feels like: </b> {weather.main.feels_like} Celcius</p>

          <p><b>Descriptions:</b> {weather.weather[0].main}, {weather.weather[0].description} </p>
          
          <p><b>Humidity: </b> {weather.main.humidity}%</p>
          </>
        )
      }
      </div>
    </>
  )
}

export default App
