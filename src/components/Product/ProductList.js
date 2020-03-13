import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider"
import Product from "./Product"
import "./Product"
import { ProductTypeContext } from "../ProductType/ProductTypeProvider"

export default () => {
    const { products } = useContext(ProductContext)
    const { productTypes } = useContext(ProductTypeContext)
    return (
        products.map(product => {
            const type = productTypes.find(p => p.id === product.productTypeId)

            return <Product key={product.id}
                productType={type}
                product={product} />
        })
    )
}

