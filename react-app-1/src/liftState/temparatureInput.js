const TemparatureInput = (props)=>{

    const handleTemprature = (e)=>{
        
        props.onTempChange(props.scale, e.target.value)
    }
    const validateInput = (e)=>{
       // props.validateInputHandler(e)
    }
    return (

        <>
          <fieldset>
              <legend>Temprature</legend>
          <input  
            value = {props.temprature} 
            //onKeyPress = {validateInput}
            onChange={handleTemprature} 
            
          />
          </fieldset>
        </>
    )
}

export default TemparatureInput;