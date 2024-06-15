import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import { clx } from "@medusajs/ui";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EMP Store",
  description: "Black it out.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={clx(inter.className, "bg-ui-bg-base")}>
        <Header />
        <main className="flex pt-14 min-h-screen bg-ui-bg-base flex-col items-center justify-between">
          {children}
        </main>
      </body>
    </html>
  );
}
