import React from 'react';
import "./Product.css";
//adding props 'title' and 'price' where we set 10k as the default price.
function Product({ title, price, features }) {
  //dynamic component styling where background should be pink only if price is >60k
  let styles={backgroundColor:price>60000 ? "pink": ""};
  return (
    <div className="Product" style ={styles}>
      <h3>{title}</h3>
      <h5>Price : {price}</h5>
      <p>
        {features.map((feature) => (
          <li>{feature}</li>
        ))}
      </p>
      {price>50000? <p>Discount of = 10%</p> : null}
    </div>
  );
}
export default Product;
