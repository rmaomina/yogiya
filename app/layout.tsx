import "./globals.css";
import { Nunito } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "yogiya website",
  description: "친구들과 가기 좋은 숙소 찾기 웹 사이트",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
