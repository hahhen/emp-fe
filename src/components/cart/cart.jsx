"use client"

import { DropdownMenu, Heading } from "@medusajs/ui";
import { atom, useAtom } from "jotai";
import Image from "next/image";

export const cartAtom = atom([])

// export function AddToCart(item){
//     const [cart, setCart] = useAtom(cartAtom);
//     setCart(...cart, item);
//     console.log(item)
// }

export default function CartDialog() {
    const [cart, setCart] = useAtom(cartAtom)
    return (
        <div className="flex flex-col gap-2">
            <Heading level="h1">Cart ({cart.length})</Heading>
            {cart.map((item) => (
                <div className="grid grid-cols-10 gap-4">
                    <div className="col-span-2">
                        <Image src={item.picture} className="rounded" width={200} height={200} />
                    </div>
                    <div className="col-span-8 flex flex-col W-full">
                        <div className="flex flex-col">
                            <span className="text-sm">
                                {item.name}
                            </span>
                            {item.variant.map((variant) => (
                                <span className="text-xs text-ui-fg-secondary text-ui-fg-subtle">
                                    {variant.label}: {variant.value}
                                </span>
                            ))}
                        </div>
                        <span className="text-sm font-medium">
                            ${item.price}
                        </span>
                    </div>
                </div>
            ))}

        </div>
    )
}