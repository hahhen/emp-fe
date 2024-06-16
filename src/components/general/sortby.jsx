"use client"

import { Label, RadioGroup, DropdownMenu, IconButton, Heading } from "@medusajs/ui"
import { Funnel } from "@medusajs/icons"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function SortBy({searchParams}) {
    const sortBy = searchParams || "created_at"
    const pathname = usePathname()
    return (
        <RadioGroup value={sortBy} className="text-ui-fg-subtle">
            <div className="flex has-[[data-state='checked']]:text-ui-fg-base">
                <RadioGroup.Item id="created" value="created_at" className="hidden" /><Label className="text-xs hover:text-ui-fg-base" htmlFor="created"><Link scroll={false} href={`${pathname}?sortBy=created_at`}>Latest arrivals</Link></Label>
            </div>
            <div className="flex has-[[data-state='checked']]:text-ui-fg-base">
                <RadioGroup.Item id="priceup" value="priceUp" className="hidden" /><Label className="text-xs hover:text-ui-fg-base" htmlFor="priceup"><Link scroll={false} href={`${pathname}?sortBy=priceUp`}> Price: Low &#8594; High</Link></Label>
            </div>
            <div className="flex has-[[data-state='checked']]:text-ui-fg-base">
                <RadioGroup.Item id="pricedown" value="priceDown" className="hidden" /><Label className="text-xs hover:text-ui-fg-base" htmlFor="pricedown"><Link scroll={false} href={`${pathname}?sortBy=priceDown`}>Price: High &#8594; Low</Link></Label>
            </div>
        </RadioGroup>
    )
}

export function SortByButton({ searchParams }) {
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
                        <SortBy searchParams={searchParams} />
                    </div>
                </DropdownMenu.Content>
            </DropdownMenu>
        </div>
    )
}

export function SortCollectionByButton({ searchParams }) {
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
                        <SortCollectionBy searchParams={searchParams} />
                    </div>
                </DropdownMenu.Content>
            </DropdownMenu>
        </div>
    )
}

export function SortCollectionBy({searchParams}) {
    const sortBy = searchParams || "created_at"
    return (
        <RadioGroup value={sortBy} className="text-ui-fg-subtle">
            <div className="flex has-[[data-state='checked']]:text-ui-fg-base">
                <RadioGroup.Item id="created" value="created_at" className="hidden" /><Label className="text-xs hover:text-ui-fg-base" htmlFor="created"><Link href={"/collections?sortBy=created_at"}>Latest arrivals</Link></Label>
            </div>
            <div className="flex has-[[data-state='checked']]:text-ui-fg-base">
                <RadioGroup.Item id="priceup" value="alphaAsc" className="hidden" /><Label className="text-xs hover:text-ui-fg-base" htmlFor="alphaasc"><Link href={"/collections?sortBy=alphaAsc"}> Alphabetical: A &#8594; Z</Link></Label>
            </div>
            <div className="flex has-[[data-state='checked']]:text-ui-fg-base">
                <RadioGroup.Item id="pricedown" value="alphaDesc" className="hidden" /><Label className="text-xs hover:text-ui-fg-base" htmlFor="alphadesc"><Link href={"/collections?sortBy=alphaDesc"}>Alphabetical: Z &#8594; A</Link></Label>
            </div>
        </RadioGroup>
    )
}