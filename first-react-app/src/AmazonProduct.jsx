import "./Product.css";
import Price from "./Price.jsx"
export default function AmazonProduct({title, index}){
    let oldPrice=[50000, 60000, 60000, 78000];
    let newPrice=[45000, 50000, 57000, 74000];
    let description=[
        ["InfinityEdge Display","Intel Core Processor"],
        ["Multi-Touch Display","1 GHz single-core ARM Cortex-A8 processor"],
        ["Stainless Steel Frame","Spatial Audio with Dynamic Head Tracking"],
        ["Titanium Frame","Super Retina XDR Display"]
    ];
    return(
        <>
        <div className="Product">
        <h3>{title}</h3>
        <p>{description[index][0]}</p>
        <p>{description[index][1]}</p>
        <p>{description[index][2]}</p>
        <p>{description[index][3]}</p>
        <Price oldPrice={oldPrice[index]} newPrice={newPrice[index]}/>
        </div>
        </>
    )
}