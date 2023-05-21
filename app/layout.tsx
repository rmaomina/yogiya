import "./globals.css";
import { Nunito } from "next/font/google";
// import Client from "./components/Client";
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modals/Modal";

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
        <Modal
          actionLabel="Submit"
          title="Common Modal"
          isOpen
          onSubmit={() => {}}
          onClose={() => {}}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
