export async function generateMetadata({params}) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADRESS}/collections/${params.slug}`, { cache: "default" });
    const collection = await response.json();
    return {
        title: `EMP Store | ${collection.collection[0].name}`,
        description: `Shop ${collection.collection[0].name} at EMP`,
    }
}

export default function CollectionLayout({children}) {
    return children
}