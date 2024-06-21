"use client"

import { Button } from "@medusajs/ui"
import { useAtom, atom } from "jotai"
import { variantsAtom } from "@/components/product/productinfo"
import { cartAtom } from "@/components/cart/cart"

export default function BuyButton({ variantLength, product }) {
    const [cart, setCart] = useAtom(cartAtom)

    function addToCart(item) {
        setCart([...cart, item])
    }

    const [variants] = useAtom(variantsAtom)
    var filteredVariants = []
    if (variants[product.id]) {
        filteredVariants = [...variants[product.id]].filter((item) => item)
    }
    return (
        <Button onClick={() => addToCart(
            {
                id: product.id,
                name: product.name,
                variant: filteredVariants,
                price: product.price,
                picture: product.picture[0],
            }
        )} variant='primary' disabled={filteredVariants.length != variantLength ? true : false} size='large' className='w-full text-white'>
            Add to cart
        </Button>
    )
}