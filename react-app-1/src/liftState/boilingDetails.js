const BoilingDetails = (props)=>{
    if(props.tempInCels > 100){
        return "Enough temp to boil the water"
    }else{
        return "Increase the temparature min of 100 to boil the water"
    }
}

export default BoilingDetails;