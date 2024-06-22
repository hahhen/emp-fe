"use client"

import { MinusMini, PlusMini } from "@medusajs/icons";
import { DropdownMenu, Heading, IconButton, Input, usePrompt } from "@medusajs/ui";
import { atom, useAtom } from "jotai";
import { atomWithStorage } from 'jotai/utils'
import Image from "next/image";

export const cartAtom = atomWithStorage('cart', [])

export default function CartDialog() {
    const dialog = usePrompt()
    const deleteEntity = async () => {
        const userHasConfirmed = await dialog({
            title: "Remove product from cart?",
            description: "This will remove this product from your cart. Is this right?",
        })
        if (userHasConfirmed) {
            newCart.splice(idx, 1)
            setCart(newCart)
        }
    }

    const [cart, setCart] = useAtom(cartAtom)
    return (
        <div className="flex flex-col gap-2">
            <Heading level="h2">Cart ({cart.length})</Heading>
            {cart.map((item, idx) => (
                <div key={idx} className="grid grid-cols-10 gap-4">
                    <div className="col-span-2">
                        <Image src={item.picture} className="rounded" width={200} height={200} />
                    </div>
                    <div className="col-span-8 flex flex-col W-full">
                        <div className="flex flex-col">
                            <span className="text-sm">
                                {item.name}
                            </span>
                            {item.variant.map((variant) => (
                                <span key={idx} className="text-xs text-ui-fg-secondary text-ui-fg-subtle">
                                    {variant.label}: {variant.value}
                                </span>
                            ))}
                        </div>
                        <span className="text-sm font-medium">
                            ${item.price}
                        </span>
                        <div className="flex items-bottom -ml-2 mt-auto">
                            <IconButton onClick={() => {
                                var newCart = [...cart]
                                newCart[idx].quantity++
                                setCart(newCart)
                            }} className="scale-50 -mt-0.5"><PlusMini /></IconButton>
                            <Input id="qt" value={item.quantity} maxLength={3} className="w-8 h-4 text-center text-xs" />
                            <IconButton onClick={() => {
                                var newCart = [...cart]
                                if (newCart[idx].quantity > 1) {
                                    newCart[idx].quantity--
                                    setCart(newCart)
                                } else {
                                    deleteEntity()
                                }
                            }} className="scale-50 -mt-0.5"><MinusMini /></IconButton>
                        </div>
                    </div>
                </div>
            ))
            }
        </div >
    )
}