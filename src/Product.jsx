import "./Product.css";

// Props : In React, “props” (short for properties) are used to pass data from a parent component 
// to a child component.Props are read-only objects that allow components to be dynamic and reusable
//  by passing in values from the outside.

// Conditionals : Adding elements on the basis of some condtion 

// Simple method for write the conditionals
// function Product({title,price,features}){
//     if(price > 3000){
// return(
//         <div className = "Product">
//         <h3>{title}</h3>
//         <h5>Price : {price}</h5>
//         <p>Discount of 5%</p>
//         <p>
//             <ol>{features.map((el)=>(
//             <li>{el}</li>
//             ))
//             }
//             </ol>
//             </p>
//         </div>
// );
//     } else {
//         return(
//         <div className = "Product">
//         <h3>{title}</h3>
//         <h5>Price : {price}</h5>
//         <p>No Discount</p>
//          <p>
//             <ol>{features.map((el)=>(
//             <li>{el}</li>
//             ))
//             }
//             </ol>
//             </p>
//         </div>
//         );
//     }
// }

// using the another variable
// function Product({title,price,features}){
//     let isDiscount = (price > 3000) ? "Discount of 5%" : "";
//     return(
//     <div className="Product">
//         <h3>{title}</h3>
//         <h5>Price : {price}</h5>
//         <p>
//             <ol>{features.map((el)=>(
//             <li>{el}</li>
//             ))}</ol>
//             </p>
//             <p>{isDiscount}</p>
//     </div>
//     );
// }

// "Dynamic Styling Component" in React means:
// A React component whose visual styles (CSS) change based on data, props, state, or user
//  interaction — rather than being fixed.

// using a single statement 
// function Product({title,price,features}){
//     let styles = {backgroundColor : (price>4000) ? "olive" : "" } ;

//     return(
//         <div className="Product" style={styles}>
//             <h3>{title}</h3>
//             <h5>Price : {price}</h5>
//             <ol>{features.map((el)=>(
//                 <li>{el}</li>
//             ))}</ol>
//             {(price > 3000) ? <p>"Discount of 5%"</p> : <a href="/">Get Discount</a> }
//         </div>
//     )
// }

// using and operator
function Product({title,price,features}){
let  isDiscount = price> 3000;
let styles = {backgroundColor : isDiscount ? "olive" :""};
    return (
        <div className="Product" style={styles}>
            <h1>{title}</h1>
            <h3>Price :{price}</h3>
            <ol>{features.map((el)=>(
                <li>{el}</li>
                ))}</ol>
                {isDiscount && <p>Discount of 50%</p>}
        </div>
    );
}

export default Product;