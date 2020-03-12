import React from "react"
import './Product.css';

export default ({ product }) => (
    <section className="product">
        <h3 className="product__name">{product.name}</h3>
        <div className="__product">Flavor: {product.flavor}</div>
        <div className="__product">ProductType: {product.productTypeId}</div>
    </section>
)
