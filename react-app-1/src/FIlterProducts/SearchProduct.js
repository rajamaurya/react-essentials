import React from "react";
import ProductHeader from "./productsContainer/ProductHeader";
import ProductsList from "./productsContainer/ProductsList";
import SearchInput from "./SearchInput";
import "./SearchProduct.css";
const SearchProduct = (props)=>{

    const searchInputHandler = (e)=>{
        console.log("eText ",e.target.value);
        let searchVal = e.target.value;
        props.searchEventHandler(searchVal);
    }
    return(

        <>
            <div className = "search-product">
                <SearchInput searchInputHandler = {searchInputHandler}/>
            </div>
            
        </>
    )
}
export default SearchProduct;