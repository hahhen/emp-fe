export async function generateMetadata({params}) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADRESS}/products/${params.slug}`, { cache: "default" });
    const product = await response.json();
    return {
        title: `EMP Store | ${product.product[0].name}`,
        description: `Shop ${product.product[0].name} for $${product.product.price} at EMP`,
    }
}

export default function ProductLayout({children}) {
    return children
}