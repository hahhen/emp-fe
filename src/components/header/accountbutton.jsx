"use client"

import { ArrowRightOnRectangle, ShoppingCart, User } from "@medusajs/icons";
import { Avatar, Button, DropdownMenu, IconButton, Text } from "@medusajs/ui";
import { SignIn, SignOut } from "@/lib/auth-actions";
import { useSession, SessionProvider } from 'next-auth/react';

export default function Account() {
    const session = useSession()
    console.log(session)
    return (
        <DropdownMenu>
            <DropdownMenu.Trigger asChild><IconButton><User /></IconButton></DropdownMenu.Trigger>
            <DropdownMenu.Content className="flex w-64 text-center p-5 flex-col gap-3 items-center">
                {session.data ?
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <Avatar src={session?.data?.user?.image} />
                            <Text className="text-md font-semibold ml-2">{session?.data?.user?.name}</Text>
                        </div>
                        <DropdownMenu.Separator />
                        <DropdownMenu.Item className="gap-x-2">
                            <User className="text-ui-fg-subtle"/>My account
                        </DropdownMenu.Item>
                        <DropdownMenu.Item className="gap-x-2">
                            <ShoppingCart className="text-ui-fg-subtle"/>My purchases
                        </DropdownMenu.Item>
                        <DropdownMenu.Item onClick={e => SignOut()} className="gap-x-2">
                            <ArrowRightOnRectangle className="text-ui-fg-subtle"/>Sign out
                        </DropdownMenu.Item>
                    </div>
                    :
                    <>
                        <Text className="text-xs">To access your account and see your orders, please sign in.</Text>
                        <DropdownMenu.Item className="hover:bg-ui-bg-base focus-visible:bg-ui-bg-base">
                            <Button onClick={e => SignIn({})}>
                                Sign in
                            </Button>
                        </DropdownMenu.Item>
                    </>
                }
            </DropdownMenu.Content>
        </DropdownMenu>
    )
}

export const getServerSideProps = async (context) => {
    const session = await getSession(context);

    return {
        props: {
            session,
        },
    };
};