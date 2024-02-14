import { useEffect, useState } from 'react'
import './App.css'

const API_KEY = 'c7a33ec5d9e47c3e58af2976fbb65e87'

function App() {
  const [zipcode, setZipcode] = useState("60559")
  const [weather, setWeather] = useState({})
  
  useEffect(() => {
    async function getWeather() {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${API_KEY}`)

        const data = await response.json()
        setWeather(data)
        console.log(data)
      } catch (e) {
        console.log(e)
      }
    }

    getWeather();

  }, [zipcode])

  return (
    <>
      <h1>The Weather App</h1>
      <h2>United States</h2>

      <div className='zipcode-input'>
        <input onChange={(e) => setZipcode(e.target.value)} type="text" placeholder='Enter your zipcode' />
      </div>

      <div className='weather-display'>
        {/* <pre>{weather}</pre> */}
      </div>
    </>
  )
}

export default App
