import "./Product.css";

// Props : In React, “props” (short for properties) are used to pass data from a parent component 
// to a child component.Props are read-only objects that allow components to be dynamic and reusable
//  by passing in values from the outside.

// Conditionals : Adding elements on the basis of some condtion 


function Product({title,price,features}){
    return(
        <div className = "Product">
        <h3>{title}</h3>
        <h5>Price : {price}</h5>
        <p> <ol>
            {features.map((ele)=>(
            <li>{ele}</li>
            ))}
            </ol>
            </p>
        </div>
    );
}

export default Product;