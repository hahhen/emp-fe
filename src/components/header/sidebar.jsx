'use client'

import { BarsThree } from "@medusajs/icons";
import { IconButton, Drawer, Label } from "@medusajs/ui";
import { Logo } from "./header";
import Link from "next/link";

export default function Sidebar() {
    return (
        <Drawer>
            <Drawer.Trigger className="block sm:hidden" asChild>
                <IconButton>
                    <BarsThree />
                </IconButton>
            </Drawer.Trigger>
            <Drawer.Content className="z-50 flex flex-col" >
                <Drawer.Header>
                    <div className="flex gap-1 items-center">
                        <Logo />
                        <Label className="tracking-tight font-times text-lg">emp</Label>
                    </div>
                </Drawer.Header>
                <Drawer.Body className="flex flex-col gap-4">
                    <Link className="hover:text-ui-fg-base transition-all" href="/">Home</Link>
                    <Link className="hover:text-ui-fg-base transition-all" href="/collections">Collections</Link>
                    <Link className="hover:text-ui-fg-base transition-all" href="/products">Products</Link>
                </Drawer.Body>
                <Drawer.Footer className="text-xs">
                    © EMP, 2024. All rights reserved.
                </Drawer.Footer>
            </Drawer.Content>
        </Drawer>
    )
}