import React, { useContext } from "react"
import { ProductTypeContext } from "./ProductTypeProvider"
import ProductType from "./ProductType"
import "./ProductType"

export default () => {
    const { productTypes } = useContext(ProductTypeContext)

    return (
        <div className="productTypes">
            {
                productTypes.map(pr => <ProductType key={pr.id} productType={pr} />)
            }
        </div>
    )
}
