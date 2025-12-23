import { useEffect } from "react"


const TempratureInput = ({scale, temprature, onTempratureChange}) => {


    // console.log("first", scale, temprature)
    const scaleNames = {
        c: "Celsius",
        f: "Fahrenheit"
    }
    console.log("tempratureInput.js")



    const handleChange = (e) => {
        // console.log("e.target.value in temprature cons>>>>", e.target.value)
        onTempratureChange(e.target.value)
    }


    return(
        <div style={{ marginBottom: "1rem" }}>
            <label>
                Enter temprature in {scaleNames[scale]}: {" "}
                <input 
                    type="number"
                    value={temprature}
                    onChange={handleChange}
                    style={{padding: "5px, width: 120px"}}
                /> 
            </label>
        </div>
    )

}


export default TempratureInput