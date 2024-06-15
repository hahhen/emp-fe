import SortBy, { SortByButton } from "@/components/general/sortby";
import ProductFeed from "@/components/product/productfeed";
import { ArrowUpRightMini } from "@medusajs/icons";
import { Button, Container, Heading, Label, RadioGroup } from "@medusajs/ui";

export default async function Products({searchParams}) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADRESS}/products`, { cache: "default" });
    const products = await response.json();
    var items = [...products.product]
    if (searchParams.sortBy === "priceUp") items.sort((a, b) => a.price - b.price)
    if (searchParams.sortBy === "priceDown") items.sort((a, b) => b.price - a.price)
    if (searchParams.sortBy === "created_at") items.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    return (
        <section className="grid grid-cols-5 w-full py-12 px-8">
            <div className="flex-col gap-4 hidden sm:flex">
                <Heading level="h3" className="font-normal text-md text-ui-fg-muted">Sort by</Heading>
                <SortBy searchParams={searchParams.sortBy} />
            </div>
            <div className="col-span-5 sm:col-span-4 flex flex-col w-full gap-4">
                <div className="flex w-full justify-between items-center">
                    <Heading className="font-normal">
                        All products
                    </Heading>
                    <SortByButton />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <ProductFeed products={items}/>
                </div>
            </div>
        </section>
    );
}
