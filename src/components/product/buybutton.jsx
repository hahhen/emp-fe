"use client"

import { Button } from "@medusajs/ui"
import { useAtom, atom } from "jotai"
import { variantsAtom } from "@/components/product/productinfo"
import { cartAtom } from "@/components/cart/cart"

export default function BuyButton({ variantLength, product }) {
    const [cart, setCart] = useAtom(cartAtom)

    function compareArrayOfObjects(array1, array2) {
        if (array1.length !== array2.length) return false;
    
        const serializeAndSort = (arr) => 
            arr.map(item => JSON.stringify(item))
               .sort((a, b) => a.localeCompare(b));
    
        const sortedArray1 = serializeAndSort(array1);
        const sortedArray2 = serializeAndSort(array2);
    
        return sortedArray1.every((item, index) => item === sortedArray2[index]);
    }

    function addToCart(item) {
        const index = cart.findIndex((cartItem) => cartItem.id === item.id && compareArrayOfObjects(cartItem.variant, item.variant));
        if (index !== -1) {
            // Item found, update its quantity
            console.log(cart[index].variant == item.variant)
            const updatedCart = cart.map((cartItem, idx) =>
                idx === index ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            );
            setCart(updatedCart);
        } else {
            // Item not found, add it to the cart
            setCart([...cart, { ...item, quantity: 1 }]);
        }
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
                quantity: 1
            }
        )} variant='primary' disabled={filteredVariants.length != variantLength ? true : false} size='large' className='w-full text-white'>
            Add to cart
        </Button>
    )
}