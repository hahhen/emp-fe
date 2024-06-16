import SortBy, { SortByButton } from "@/components/general/sortby";
import Image from "next/image";
import ProductFeed from "@/components/product/productfeed";
import { ArrowUpRightMini } from "@medusajs/icons";
import { Button, Heading} from "@medusajs/ui";

export default async function Products({ searchParams, params }) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADRESS}/collections/${params.slug}`, { cache: "default" });
    const collectionp = await response.json();
    const items = [...collectionp.items]
    const collection = collectionp.collection[0]
    if (searchParams.sortBy === "priceUp") items.sort((a, b) => a.price - b.price)
    if (searchParams.sortBy === "priceDown") items.sort((a, b) => b.price - a.price)
    if (searchParams.sortBy === "created_at") items.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    return (
        <>
            <section className="h-[200px] relative w-full flex flex-col justify-center items-center">
                <Image src={collection.banner} draggable={false} width={2000} height={1000} className="absolute top-0 left-0 object-cover w-full h-full" quality={100} />
                <Heading className="text-4xl z-10 font-normal tracking-tighter">
                    {collection.name}
                </Heading>
            </section>
            <section className="grid grid-cols-5 w-full py-12 px-8">
                <div className="flex-col gap-4 hidden sm:flex">
                    <Heading level="h3" className="font-normal text-md text-ui-fg-muted">Sort by</Heading>
                    <SortBy searchParams={searchParams.sortBy} />
                </div>
                <div className="col-span-5 sm:col-span-4 flex flex-col w-full gap-4">
                    <div className="flex w-full justify-between items-center">
                        <Heading className="font-normal">
                            Products
                        </Heading>
                        <SortByButton searchParams={searchParams.sortBy} />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <ProductFeed products={items} />
                    </div>
                </div>
            </section>
        </>
    );
}
