import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "react-hot-toast";
import Provider from "@/components/provider";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const montserrat = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title:
    "Find escorts and adult providers anywhere in the world - Skip the Games. Get Satisfaction",
  description:
    "The world's largest listing of independent escorts, agency escorts and other adult service providers. Posts updated constantly. Skip the games. Get satisfaction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(montserrat.className)}>
        <Provider>
          <Header />
          {children}
          <Footer />
          <Toaster position="top-center" reverseOrder={false} />
        </Provider>
      </body>
    </html>
  );
}
