'use client'

import { cartAtom } from "@/components/cart/cart";
import { MinusMini, PlusMini } from "@medusajs/icons";
import { Button, DropdownMenu, Heading, IconButton, Input, usePrompt, Table } from "@medusajs/ui";
import { atom, useAtom } from "jotai";
import { atomWithStorage } from 'jotai/utils'
import Image from "next/image";

export default function CartPage() {
    const [cart, setCart] = useAtom(cartAtom)
    return (
        <section className="grid grid-cols-10 gap-4 w-full py-12 px-8">
            <div className="col-span-7">
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>#</Table.HeaderCell>
                            <Table.HeaderCell>Product</Table.HeaderCell>
                            <Table.HeaderCell>Price</Table.HeaderCell>
                            <Table.HeaderCell>Quantity</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {cart.map((item, idx) => (
                            <Table.Row key={idx}>
                                <Table.Cell>
                                    <Image src={item.picture} className="rounded" width={100} height={100} />
                                </Table.Cell>
                                <Table.Cell>
                                    {item.name}
                                </Table.Cell>
                                <Table.Cell>
                                    {item.price}
                                </Table.Cell>
                                <Table.Cell>
                                <div className="flex items-center -ml-2 mt-auto">
                                    <IconButton onClick={() => {
                                        var newCart = [...cart]
                                        newCart[idx].quantity++
                                        setCart(newCart)
                                    }} className="scale-50"><PlusMini />
                                    </IconButton>
                                    <Input id="qt" value={item.quantity} maxLength={3} className="w-8 h-4 text-center text-xs" />
                                    <IconButton onClick={() => {
                                        var newCart = [...cart]
                                        if (newCart[idx].quantity > 1) {
                                            newCart[idx].quantity--
                                            setCart(newCart)
                                        } else {
                                            deleteEntity(idx)
                                        }
                                    }} className="scale-50 -mt-0.5"><MinusMini /></IconButton>
                                </div>
                                </Table.Cell>
                            </Table.Row>
                        ))
                        }
                    </Table.Body>
                </Table>
            </div>
            <div className="bg-ui-bg-subtle col-span-3 rounded-md">

            </div>
        </section >
    );
}