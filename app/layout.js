import { Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "next-themes";
import Providers from "./providers"; // <-- import the provider you create

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "LifeToday",
  description: "A Blog App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ubuntu.className} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Providers>
            <div className="container">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
