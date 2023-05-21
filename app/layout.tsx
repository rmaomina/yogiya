import "./globals.css";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "yogiya website",
  description: "친구들과 가기 좋은 숙소 찾기 요기야!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
