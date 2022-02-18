import "../productsContainer/Products.css";

const Products = (props)=>{
    return (
        <div className = "product-container">
            {props.children}
        </div>
    )
}

export default Products;