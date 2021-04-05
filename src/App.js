import './App.css';
import React, { useState, } from 'react';
import { HiLightBulb } from "react-icons/hi";
import { GoLightBulb } from "react-icons/go";
function App() {

  let width = window.innerWidth;
  let height = window.innerHeight;

  const [light, lightValue] = useState(false);

  const handleClick = () => {
    lightValue(!light)
  }

  


  

  return (

    <div className="App" style={{backgroundColor: "#51E1ED", width:width, height: height}}>

      <span style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>

        {light ? <button style={{backgroundColor: 'orange'}} onClick={handleClick}>Turn light Off</button> : <button style={{backgroundColor: 'orange'}} onClick={handleClick}>Turn light On</button> }
        
        {light ? <p style={{color: '#5A20CB'}}>Light is Turned On right now </p> : <p style={{color: 'red'}}>Light is Turned Off right now </p>}

        {light ? <HiLightBulb /> : <GoLightBulb /> }

      </span>
    </div>
  );
}

export default App;



  // button: {
  //   backgroundColor: 'orange',
  //   marginLeft: 30,
  //   marginRight: 30,
  //   marginTop: 20,
  //   height: 58,
  //   borderRadius: 200,
  //   alignItems: "center",
  //   justifyContent: 'center',
  //   flexDirection: "row"
  // }
