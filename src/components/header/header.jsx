import Image from "next/image";
import { Input, Label } from "@medusajs/ui";
import Link from "next/link";
import Cart from "@/components/header/cartbutton";
import Account from "@/components/header/accountbutton";
import Sidebar from "@/components/header/sidebar";
import SearchBar from "@/components/header/searchbar";

export function Logo(){
    return <Image src={'https://sphppjbkztubyvdobqvz.supabase.co/storage/v1/object/public/emp/general/favicon.png'} className="dark:invert" width={30} height={30} />
}

export default function Header() {
    return (
        <header className="flex z-20 bg-ui-bg-base fixed left-0 right-0 border-b justify-between px-8 h-14 items-center">
            <div className="flex gap-5 items-center text-xs text-ui-fg-subtle">
                <Sidebar />
                <Link href="/" className="flex items-center">
                    <Logo />
                </Link>
                <Link className="hidden sm:block hover:text-ui-fg-base transition-all" href="/">Home</Link>
                <Link className="hidden sm:block hover:text-ui-fg-base transition-all" href="/collections">Collections</Link>
                <Link className="hidden sm:block hover:text-ui-fg-base transition-all" href="/products">Products</Link>
            </div>
            <div className="max-w-[300px] items-center flex gap-5">
                <div className="hidden sm:block">
                    <Input placeholder="Search" id="search-input" type="search" />
                </div>
                <SearchBar className={"sm:hidden"} />
                <Cart />
                <Account />
            </div>
        </header>
    )
}