import { Heading, Container } from "@medusajs/ui";
import Link from "next/link";
import Details from "@/components/product/details";
import Image from "next/image";
import ProductInfo from "@/components/product/productinfo";
import BuyButton from "@/components/product/buybutton";

export default async function ProductPage({ params }) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADRESS}/products/${params.slug}`, { cache: "default" });
    const products = await response.json();
    const product = products.product[0];
    const collection = products.collection[0];
    return (
        <section className="w-full py-12 px-8 flex gap-4 relative">
            <div className="flex flex-col gap-2 sticky top-48 h-min w-full max-w-[350px]">
                <Link href={`/collections/${collection.slug}`} className={"transition-all text-ui-fg-muted hover:text-ui-fg-subtle"}>
                    <Heading className="font-normal text-md">{collection.name}</Heading>
                </Link>
                <Heading className="text-3xl leading-10 mb-6">
                    {product.name}
                </Heading>
                <Details details={product.details.details} />
            </div>
            <div className="flex gap-4 flex-col">
                {product.picture.map((picture, index) => (
                    <Container key={index} className="aspect-[29/34] p-0 overflow-hidden">
                        <Image className="object-cover h-full w-full" src={picture} width={1000} height={1000} draggable={false} quality={100} />
                    </Container>
                ))}
            </div>
            <div className="flex flex-col sticky h-min top-48 gap-6 w-full max-w-[350px]">
                <ProductInfo variant={product.variant.variant} />
                <BuyButton />
            </div>

        </section>
    )
}