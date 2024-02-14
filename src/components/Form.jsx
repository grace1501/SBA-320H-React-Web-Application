import { useState } from 'react'

export default function Form(props) {
    const [input, setInput] = useState('')

    function handleChange(e) {
        setInput(e.target.value)
    }

    function handleSearch(e) {
        props.weatherSearch(input)
    }

    return (
        <div className='zipcode-input'>
        <input onChange={handleChange} type="number" placeholder='Enter your zipcode' />
        <button onClick={handleSearch}>Search</button>
        </div>
    )
}