'use client'

import { BarsThree } from "@medusajs/icons";
import { IconButton, Drawer } from "@medusajs/ui";

export default function Sidebar() {
    return (
        <Drawer>
            <Drawer.Trigger className="block sm:hidden" asChild>
                <IconButton>
                    <BarsThree />
                </IconButton>
            </Drawer.Trigger>
            <Drawer.Content className="z-50" >
                <Drawer.Header>
                    <Drawer.Title>Drawer Title</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>Body</Drawer.Body>
                <Drawer.Footer>Footer</Drawer.Footer>
            </Drawer.Content>
        </Drawer>
    )
}