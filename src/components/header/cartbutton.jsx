import { ShoppingCart } from "@medusajs/icons";
import { IconButton } from "@medusajs/ui";
import Link from "next/link";

export default function Cart() {
    return (
        <IconButton asChild>
            <Link href="/cart"><ShoppingCart /></Link>
        </IconButton>
    )
}