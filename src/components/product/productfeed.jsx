'use client'

import Product from './product';
import dayjs from 'dayjs';

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