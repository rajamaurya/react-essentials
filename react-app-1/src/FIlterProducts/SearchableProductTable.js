import "./ProductTable.css";
const SearchableProductTable = (props)=>{

    return (
        <>
            <div className = "product-table" >
                {props.children}
            </div>
        </>
       
    )
}

export default SearchableProductTable;