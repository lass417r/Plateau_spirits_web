import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Plateau Spirits",
  description: "Local distilleri in Copenhagen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className={inter.className}>
        <header>
          <div>
            <Link href="/">LOGO</Link>
          </div>
          <nav className="topnav">
            <Link href="/shop">SHOP</Link>
            <Link href="/om">OM</Link>
            <Link href="/virksomhed">VIRKSOMHED</Link>
            <Link href="/events">EVENTS</Link>
            <Link href="/kontakt">KONTAKT</Link>
            <Link href="/kurv">KURV</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
