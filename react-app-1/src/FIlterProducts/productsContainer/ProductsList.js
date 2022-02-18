import { useContext } from "react";
import { useState } from "react/cjs/react.development";
import {Data} from "../../DataProvider";
import { SearchContext } from "../../SearchContext";
import ProductSubHeader from "./ProductSubHeader";
import equalIgnoreCase from "./Utils";
const ProductsList = (props)=>{
    const context  = useContext(SearchContext);
    let category = {};
    for(let i = 0; i< Data.length; i++){
        !category[Data[i]['category']]
        ?category[Data[i]['category']] = [Data[i]]
        : category[Data[i]['category']].push(Data[i])
    }
    
    let filteredObj = {};
    if(context !== undefined){
        Object.keys(category).forEach(ctg=>{
            const temp = category[ctg].filter(cat=> cat['name'].equalIgnoreCase(context));
            if(temp.length){
               filteredObj[ctg] = temp;
            }
       })
    }
    if(Object.keys(filteredObj).length){
        category = {...filteredObj};
    }
    
     return (

        <>
       
        {
            Object.keys(category).map((cat,i)=>{
                 return <div key= {i}>
                     <ProductSubHeader header = {cat} category = {category}/>
                     </div>   
            })
            
        }
        
        </>
        )
}

export default ProductsList;