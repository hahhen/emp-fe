"use client"

import { User } from "@medusajs/icons";
import { Button, DropdownMenu, IconButton, Text } from "@medusajs/ui";
import Link from "next/link";

export default function Account() {
    return (
        <DropdownMenu>
            <DropdownMenu.Trigger asChild><IconButton><User /></IconButton></DropdownMenu.Trigger>
            <DropdownMenu.Content className="flex w-64 text-center p-5 flex-col gap-3 items-center">
                <Text className="text-xs">To access your account and see your orders, please sign in.</Text>
                <DropdownMenu.Item className="hover:bg-ui-bg-base focus-visible:bg-ui-bg-base">
                    <Button asChild>
                        <Link href="/sign-in">
                            Sign in
                        </Link>
                    </Button>
                </DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu>
    )
}