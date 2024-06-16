import Image from "next/image"
import { Container, Heading } from "@medusajs/ui"
import Link from "next/link"

export default function Collection({ collection }) {
    return (
        <Link href={`collections/${collection.slug}`} key={collection.id} className="flex flex-col gap-4">
            <Container className="aspect-[11/14] p-0 overflow-hidden relative">
                <Heading className="peer tracking-tight z-10 text-lg text-ui-fg-base cursor-pointer absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">{collection.name}</Heading>
                <Image className="object-cover h-full w-full blur-sm hover:brightness-75 peer-hover:brightness-75 brightness-50 transition-all" src={collection.banner} width={500} height={500} draggable={false} />                
            </Container>
        </Link>
    )
}