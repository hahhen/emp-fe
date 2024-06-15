"use client"

import { Label, RadioGroup, DropdownMenu, IconButton, Heading } from "@medusajs/ui"
import { Funnel } from "@medusajs/icons"
import Link from "next/link"

export default function SortBy({searchParams}) {
    console.log(searchParams)
    const sortBy = searchParams || "created_at"
    return (
        <RadioGroup value={sortBy} className="text-ui-fg-subtle">
            <div className="flex has-[[data-state='checked']]:text-ui-fg-base">
                <RadioGroup.Item id="created" value="created_at" className="hidden" /><Label className="text-xs hover:text-ui-fg-base" htmlFor="created"><Link href={"/products?sortBy=created_at"}>Latest arrivals</Link></Label>
            </div>
            <div className="flex has-[[data-state='checked']]:text-ui-fg-base">
                <RadioGroup.Item id="priceup" value="priceUp" className="hidden" /><Label className="text-xs hover:text-ui-fg-base" htmlFor="priceup"><Link href={"/products?sortBy=priceUp"}> Price: Low &#8594; High</Link></Label>
            </div>
            <div className="flex has-[[data-state='checked']]:text-ui-fg-base">
                <RadioGroup.Item id="pricedown" value="priceDown" className="hidden" /><Label className="text-xs hover:text-ui-fg-base" htmlFor="pricedown"><Link href={"/products?sortBy=priceDown"}>Price: High &#8594; Low</Link></Label>
            </div>
        </RadioGroup>
    )
}

export function SortByButton({ className }) {
    return (
        <div className="block sm:hidden">
            <DropdownMenu>
                <DropdownMenu.Trigger asChild>
                    <IconButton>
                        <Funnel />
                    </IconButton>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content className="p-3">
                    <div className="flex flex-col gap-2">
                        <Heading className="text-ui-fg-muted text-sm">Sort by</Heading>
                        <SortBy />
                    </div>
                </DropdownMenu.Content>
            </DropdownMenu>
        </div>
    )
}