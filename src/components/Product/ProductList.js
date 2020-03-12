import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider"
import Product from "./Product"
import "./Product"

export default () => {
    const { products } = useContext(ProductContext)

    return (
        <div className="products">
            {
                products.map(pr => <Product key={pr.id} product={pr} />)
            }
        </div>
    )
}
