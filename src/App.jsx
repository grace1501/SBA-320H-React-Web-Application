import { useEffect, useRef, useState } from 'react'
import './App.css'
import Form from './components/Form'
import WeatherDisplay from './components/WeatherDisplay'

const API_KEY = 'c7a33ec5d9e47c3e58af2976fbb65e87'

function App() {
  const [weather, setWeather] = useState({})

  async function getWeather(zipcode) {
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

    useEffect(()=>{
      getWeather('60601')
    }, [])

  return (
    <>
      <h1>The Weather App</h1>
      <h2>United States</h2>
      <Form weatherSearch={getWeather} />
      <WeatherDisplay weather={weather}/>
    </>
  )
}

export default App
