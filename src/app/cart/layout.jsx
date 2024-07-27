import ElementsProvider from "@/lib/elementsprovider"

export const metadata = {
    title: "EMP Store | Cart",
}

export default function CartLayout({ children }) {
    return (
        <ElementsProvider>
            {children}
        </ElementsProvider>
    )
}