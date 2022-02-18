import { useRef, useState } from "react";


const SearchInput = (props)=>{

    const [searchText, SetSearchText] = useState('');
    const [isChecked,SetIsChecked] = useState(true);
    const inputRef = useRef("");

    const  inputSearchHandler=(event)=>{
       const value = event.target.value;
       SetSearchText(value);
       props.searchInputHandler(event)
    }
    const  checkboxHandler=(event)=>{
        const flag = event.target.checked;
        SetIsChecked(flag);
    }
    return (
        <div className = "search-input">
                <input type="text" ref={inputRef =>inputRef && inputRef.focus()} placeholder= "Search..." onChange={inputSearchHandler} />
                <br/>
                <input type="checkbox" checked = {isChecked} onChange = {checkboxHandler} />Only show products in stock.
                <p>Status: {isChecked} </p>
                <p>Search Text: {searchText} </p>
        </div>
        
    )
}

export default SearchInput;