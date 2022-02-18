import * as React from 'react';
import { useState } from "react";
import TemparatureInput from './temparatureInput';
import BoilingDetails from "./boilingDetails";

const  scales = {
    celcius: 'C',
    fahrenheight: 'F'
}

const Calculator = ()=>{
    const [temprature, SetTemprature] = useState('');
    const [isValidInput, setIsValidInput]  = useState(false);
    const [tempType, SetTempType]  = useState(scales['celcius']);
   const convertToC=  (val)=>{
    console.log("val received: ", val)
       return (val -32)* 5/9;
    }
    const convertToF=  (val)=>{
       return (val + 32)* 9/5;
    }
   const tempCChangeHandler = (tempType, tempVal)=>{
       console.log("type: ", tempType, tempVal)
        handleFChange(tempType, tempVal);  
   }
   const tempFChangeHandler = (tempType, tempVal)=>{
     console.log("type: ", tempType, tempVal)
     handleCChange(tempType, tempVal);
    }

   const handleFChange = (tempType, tempVal)=>{
      return convertToF(tempVal);
   }
   const handleCChange = (tempType, tempVal)=>{
      return convertToC(tempVal);
 }
 let celcius = tempType == 'C'?handleFChange(tempType,temprature):temprature;
 let fahrenheight = tempType == 'F'?handleCChange(tempType,temprature):temprature;
 
    return(
       <>
           <TemparatureInput 
                scale = {celcius} 
                temprature = {temprature} 
                onTempChange ={tempCChangeHandler}
            />
            <TemparatureInput 
                scale = {fahrenheight} 
                temprature = {temprature} 
                onTempChange ={tempFChangeHandler}
            />
            {
            temprature !== '' && temprature !== null
            ?<BoilingDetails tempInCels = {temprature} />
            :''
                
            }
           

        </>
    )
}

export default Calculator;