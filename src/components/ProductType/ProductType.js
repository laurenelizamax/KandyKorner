import React from "react"
import './ProductType.css';

export default ({ productType }) => (
    <section className="productType">
        <h3 className="productType__name">{productType.type}</h3>
        <div className="productTypes">Id: {productType.id}</div>
    </section>
)
