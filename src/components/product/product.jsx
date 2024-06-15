import Image from "next/image"
import { Label, Container } from "@medusajs/ui"
import Link from "next/link"

export default function Product({product}) {
    return (
        <Link href={`products/${product.slug}`} key={product.id} className="flex flex-col gap-4">
            <Container className="aspect-[11/14] p-0 overflow-hidden">
                <Image className="object-cover h-full w-full" src={product.picture[0]} width={500} height={500} draggable={false} />
            </Container>
            <div className="flex">
                <Label className="text-sm text-ui-fg-base cursor-pointer">{product.name}</Label>
                <Label className="text-sm ml-auto text-ui-fg-subtle cursor-pointer">${product.price}</Label>
            </div>
        </Link>
    )
}