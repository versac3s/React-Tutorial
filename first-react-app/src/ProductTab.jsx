import Product from "./Product.jsx";
function ProductTab(){
    let features2 = ["Durable","Slim"];
    let features3 = ["High sound","Water resistant"];
    
    //JSX tag with their props
    return(
        <>
        <Product title="Phone" price={50000} features={{a:"high-tech"}}/>
        <Product title="Laptop" price={80000} features={features2}/>
        <Product title="Headset" price={85000} features={features3}/>
        </>
    );
}

export default ProductTab;