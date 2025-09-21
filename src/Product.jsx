import "./Product.css";

// Props : In React, “props” (short for properties) are used to pass data from a parent component 
// to a child component.Props are read-only objects that allow components to be dynamic and reusable
//  by passing in values from the outside.


function Product({title,price}){
    return(
        <div className = "Product">
        <h3>{title}</h3>
        <h5>{price}</h5>
        </div>
    );
}

export default Product;