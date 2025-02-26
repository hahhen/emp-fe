import ProductFeed from "@/components/product/productfeed";
import { ArrowUpRightMini } from "@medusajs/icons";
import { Button, Container, Heading, Label } from "@medusajs/ui";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADRESS}/products`, {cache: "default"});
  const products = await response.json();
  return (
    <>
      <section className="h-[550px] relative w-full flex flex-col justify-center items-center">
        <Image src={"https://yrdhniebzjazignetisf.supabase.co/storage/v1/object/public/emp/collections/2560px-Ali_Inay_2014-10-28__Unsplash_.jpg?t=2024-06-14T17%3A37%3A21.239Z"} draggable={false} width={2000} height={1000} className="absolute top-0 left-0 object-cover w-full h-full" quality={100} />
        <Heading className="text-4xl z-10 font-normal text-black tracking-tighter">
          DROP 0
        </Heading>
        <Heading level="h3" className="text-2xl z-10 font-normal text-gray-700 tracking-tighter">
          By founders, for founders
        </Heading>
        <Button variant="secondary" className="mt-5" asChild><Link href={"/collections/drop-0"}>Shop Now</Link></Button>
      </section>
      <section className="flex flex-col w-full py-12 px-8">
        <div className="flex flex-col w-full gap-4">
          <div className="flex w-full justify-between items-baseline">
            <Heading className="font-normal">
              Shop now
            </Heading>
            <Link className="flex group text-sm text-ui-fg-interactive hover:text-ui-fg-interactive-hover" href={"/products"}>
              Explore all
              <ArrowUpRightMini className="group-hover:rotate-45 transition-all" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <ProductFeed products={products.product} />
          </div>
        </div>
      </section>
    </>
  );
}
