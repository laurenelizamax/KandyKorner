import React from "react"
import './Product.css';

export default ({ product, productType }) => (
    <section className="product">
        <h3 className="product__name">{product.name}</h3>
        <div className="product__flavor">Flavor: {product.flavor}</div>
        <div className="productType__type">ProductType: {productType.type}</div>
    </section>
)
