'use client'

import { cartAtom } from "@/components/cart/cart";
import { MinusMini, PlusMini } from "@medusajs/icons";
import { Button, DropdownMenu, Heading, IconButton, Input, usePrompt, Table } from "@medusajs/ui";
import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
    const [cart, setCart] = useAtom(cartAtom)
    const subtotal = cart.length > 0 ? cart.reduce((acc, item) => acc + parseFloat(item.total()), 0) : 0
    const shipping = 0
    const total = subtotal + shipping
    const dialog = usePrompt()
    const deleteEntity = async (idx) => {
        const userHasConfirmed = await dialog({
            title: "Remove product from cart?",
            description: "This will remove this product from your cart. Is this right?",
        })
        if (userHasConfirmed) {
            var newCart = [...cart]
            newCart.splice(idx, 1)
            setCart(newCart)
        }
    }
    return (
        <div className="flex flex-col w-full py-12 px-8">
            <Heading level="h1" className="text-2xl mb-2 z-10 font-normal tracking-tighter">
                Cart
            </Heading>
            <section className="grid grid-cols-10 gap-4 w-full ">
                <div className="col-span-7">
                    {cart.length > 0 ?
                        <Table>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Product</Table.HeaderCell>
                                    <Table.HeaderCell>Quantity</Table.HeaderCell>
                                    <Table.HeaderCell>Price</Table.HeaderCell>
                                    <Table.HeaderCell>Total</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {cart.map((item, idx) => (
                                    <Table.Row key={idx} className="text-ui-fg-base">
                                        <Table.Cell>
                                            <div className="flex gap-4 items-center">
                                                <Image src={item.picture} className="rounded" width={100} height={100} />
                                                <div className="flex flex-col">
                                                    {item.name}
                                                    {item.variant.map((variant) => (
                                                        <span key={idx} className="text-xs text-ui-fg-secondary text-ui-fg-subtle">
                                                            {variant.label}: {variant.value}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <div className="flex items-center">
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
                                                }} className="scale-50"><MinusMini /></IconButton>
                                            </div>
                                        </Table.Cell>
                                        <Table.Cell>
                                            ${item.price}
                                        </Table.Cell>
                                        <Table.Cell>
                                            ${item.total()}
                                        </Table.Cell>
                                    </Table.Row>
                                ))
                                }
                            </Table.Body>
                        </Table>
                        :
                        <div className="flex flex-col items-center justify-center h-96">
                            <Heading level="h3" className="text-2xl text-ui-fg-base">
                                Your cart is empty
                            </Heading>
                            <Button className="mt-4" variant="primary" asChild>
                                <a href={'/'}>Go shopping</a>
                            </Button>
                        </div>
                    }
                </div>
                <div className="bg-ui-bg-subtle col-span-3 rounded-md">
                    <div className="p-4">
                        <Heading level="h1" className="text-xl mb-2 z-10 font-normal tracking-tighter">
                            Summary
                        </Heading>
                        <div className="flex flex-col text-sm text-ui-fg-subtle gap-1">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>${subtotal}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>${shipping}</span>
                            </div>
                            <hr className="my-4" />
                            <div className="flex text-lg text-ui-fg-base justify-between">
                                <span>Total</span>
                                <span>${total}</span>
                            </div>
                            <hr className="my-4" />
                            <Button className="w-full" variant="secondary" asChild>
                                <Link href={'/cart'}>Checkout</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section >
        </div>
    );
}