import React from 'react'

const Weather = (props) => {
  return (
    <>
    <h1>Weather Info</h1>
    <section>{props.weatherInfo > 25 ?props.weatherInfo > 15?props.weatherInfo > 10 ? <h1>Cool Day</h1>:<h1>Very Cool Day</h1>:<h1>Rain Day</h1>:<h1>Hot Day</h1>}</section>
    </>
  )
}

export default Weather