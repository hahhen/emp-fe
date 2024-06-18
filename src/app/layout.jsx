import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import { clx } from "@medusajs/ui";
import { Provider } from "jotai"
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EMP Store",
  description: "Black it out.",
};

export function Providers({ children }) {
  return (
    <SessionProvider>
      <Provider>
        {children}
      </Provider>
    </SessionProvider>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={clx(inter.className, "bg-ui-bg-base")}>
        <Providers>
          <Header />
          <main className="flex pt-14 min-h-screen bg-ui-bg-base flex-col items-center justify-between">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
