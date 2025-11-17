import { useState } from "react";

export default function RandomColor() {
const[typeOfColor,setTypeOfColor]=useState('hex');
const[color,setColor]=useState("#000000");

function randomColorUtility(length) {
    return Math.floor(Math.random()*length);
}

function handleCreateRandomHexColor() {
    // #102345
    const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let hexColor="#";
    for (let i = 0; i < 6; i++) {
        hexColor +=hex[randomColorUtility(hex.length)];
    }

        console.log(hexColor);
}
function handleCreateRandomRgbColor() {
    
}

  return (
    <div className="container"
        style={{
            width:'100vw',
            height:'100vh',
            background:color
        }}
    >
      <button onClick={()=> setTypeOfColor('hex')}>create HEX color</button>
      <button onClick={()=> setTypeOfColor('rgb')}>create RGB color</button>
      {/* first we will create these buttons */}
      <button onClick={typeOfColor === 'hex'? handleCreateRandomHexColor: handleCreateRandomRgbColor}>Generate Random color</button>
    </div>
  );
}
