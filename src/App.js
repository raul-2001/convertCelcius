import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TempratureInput from './TempratureInput'





function App() {
  const [temprature, setTemprature] = useState('') 
  const [scale, setScale] = useState("c")

  console.log("app.js")




  const handleCelsiusChange = (temp) => {

    // console.log("temp>>>",temp)
    setScale("c")
    setTemprature(temp)
    // console.log("after setTemprature>>>", temp)
  }

  const handleFahrenheitChange = (temp) => {
    setScale("f")
    setTemprature(temp)
  }


    // Conversion functions
  function toCelsius(fahrenheit) {
    // console.log("toCelsius>>>", fahrenheit, ((fahrenheit - 32) * 5) / 9)
    return ((fahrenheit - 32) * 5) / 9;
  }

  function toFahrenheit(celsius) {
    // console.log("toFahrenheit>>>", celsius, (celsius * 9) / 5 + 32)

    return (celsius * 9) / 5 + 32;
  }


  function tryConvert(temperature, convert) {
    // console.log("tryConvertfunction>>>", temprature)
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) return "";
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }



  const celsius = scale === "f" ? tryConvert(temprature, toCelsius): temprature;
  // console.log("scale_value>>>>", scale)
  const fahrenheit = scale === "c" ? tryConvert(temprature, toFahrenheit) : temprature;
  // console.log("fahrenheit_value>>>>", fahrenheit)


  // const handleChange = (event) => {

  //   console.log(typeof event.target.value)

  //   if (typeof event.target.value != 'number') {
  //     return 'Please enter a number'
  //   }

  //   console.log(event.target.value)
  //   const value = event.target.value;
  //   // Allow empty string or only digits
  //   if (value === '' || /^[0-9]*$/.test(value)) {
  //     setConverter(value * 9/5 + 32);
  //   }
    
  // }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Temprature converter</h2>
      <TempratureInput 
        scale = "c"
        value={scale}
        temprature = {celsius}
        onTempratureChange = {handleCelsiusChange}
      /> 
      <TempratureInput 
        scale = "f"
        value={scale}
        temprature = {fahrenheit}
        onTempratureChange = {handleFahrenheitChange}
      /> 
    </div>
  );
}

export default App;
