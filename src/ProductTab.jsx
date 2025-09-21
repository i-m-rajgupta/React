import Product from "./Product";

function ProductTab(){
    return(
        <>
        <Product title="Phone" price="20,000" features={["hi-tech","durable","smart"]}/>
         <Product title="Laptop" price="40,000" features={["Compatible","Light-Weight"]}/>
         <Product title="Pen" price="20" features={["Smooth"]}/>
        </>
    );
}

export default ProductTab;