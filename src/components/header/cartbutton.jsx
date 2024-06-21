"use client"

import { ShoppingCart } from "@medusajs/icons";
import { DropdownMenu, IconButton } from "@medusajs/ui";
import Link from "next/link";
import CartDialog from "../cart/cart";

export default function Cart() {
    return (

        <DropdownMenu>
            <DropdownMenu.Trigger asChild>
                <IconButton asChild>
                    <Link href="/cart"><ShoppingCart /></Link>
                </IconButton>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="z-50 p-2 w-screen max-w-xl">
                <CartDialog />
            </DropdownMenu.Content>
        </DropdownMenu>

    )
}