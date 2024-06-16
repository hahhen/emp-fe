import CollectionFeed from "@/components/collections/collectionsfeed";
import { SortCollectionBy, SortCollectionByButton } from "@/components/general/sortby";
import { Heading } from "@medusajs/ui";

export default async function Products({searchParams}) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADRESS}/collections`, { cache: "default" });
    const products = await response.json();
    var items = [...products.collection]
    if (searchParams.sortBy === "alphaAsc") items.sort((a, b) => a.name - b.name)
    if (searchParams.sortBy === "alphaDesc") items.sort((a, b) => b.name - a.name)
    if (searchParams.sortBy === "created_at") items.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    return (
        <section className="grid grid-cols-5 w-full py-12 px-8">
            <div className="flex-col gap-4 hidden sm:flex">
                <Heading level="h3" className="font-normal text-md text-ui-fg-muted">Sort by</Heading>
                <SortCollectionBy searchParams={searchParams.sortBy} />
            </div>
            <div className="col-span-5 sm:col-span-4 flex flex-col w-full gap-4">
                <div className="flex w-full justify-between items-center">
                    <Heading className="font-normal">
                        All collections
                    </Heading>
                    <SortCollectionByButton searchParams={searchParams.sortBy} />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <CollectionFeed collections={items}/>
                </div>
            </div>
        </section>
    );
}
