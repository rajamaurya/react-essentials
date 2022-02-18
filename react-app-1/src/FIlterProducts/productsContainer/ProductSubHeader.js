import "../productsContainer/Products.css";
import { useContext } from "react";
const ProductSubHeader = (props)=>{
    return (
        <>
        <div className = "product-subheader"><span>{props.header}</span></div>
         {
          props.category[props.header].map((product,idx)=>{
                    
                    return <li key={idx}>
                        <div className="header">
                            <span className="left-panel">{product['name']}</span>
                            <span className="right-panel">{product['price']}</span>
                        </div>
                   </li>
                   
                })
        }
        </>
    )
}

export default ProductSubHeader;