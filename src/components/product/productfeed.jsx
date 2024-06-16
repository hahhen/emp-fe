'use client'

import Product from './product';

export default function ProductFeed({ products }) {
    return (
        <>
            {
                products.map((product) => (
                    <Product key={product.id} product={product} />
                ))
            }
        </>
    )
}