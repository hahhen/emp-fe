"use client"

import { ShoppingCart } from "@medusajs/icons";
import { DropdownMenu, Badge, IconButton } from "@medusajs/ui";
import CartDialog, { cartAtom } from "@/components/cart/cart";
import { useAtom } from "jotai";

export default function Cart() {
    const [cart] = useAtom(cartAtom)
    return (
        <DropdownMenu>
            <DropdownMenu.Trigger asChild>
                <div className="relative">
                    <IconButton >
                        <ShoppingCart />
                    </IconButton>
                    {cart.length > 0 &&
                        <Badge size="2xsmall" className="absolute flex justify-center items-center -right-2 -bottom-2">
                            {cart.length}
                        </Badge>
                    }
                </div>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="p-2 w-screen max-w-xl overflow-auto">
                <CartDialog />
            </DropdownMenu.Content>
        </DropdownMenu>

    )
}