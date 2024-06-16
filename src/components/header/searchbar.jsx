'use client'

import { MagnifyingGlass } from "@medusajs/icons";
import { IconButton } from "@medusajs/ui";

export default function SearchBar({className}) {
    return (
        <IconButton className={className}>
            <MagnifyingGlass />
        </IconButton>
    )
}