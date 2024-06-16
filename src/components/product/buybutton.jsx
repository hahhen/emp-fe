"use client"

import { Button } from "@medusajs/ui"
import { useAtom } from "jotai"
import { variantsAtom } from "@/components/product/productinfo"

export default function BuyButton({ variantLength, id }) {
    const [variants] = useAtom(variantsAtom)
    var filteredVariants = []
    if (variants[id]) {
        filteredVariants = [...variants[id]].filter((item) => item)
    }
    return (
        <Button variant='primary' disabled={filteredVariants.length != variantLength ? true : false} size='large' className='w-full text-white'>
            Add to cart
        </Button>
    )
}