import "@/styles/globals.css";
import { Outfit, DM_Sans } from "next/font/google";
import Layout from "@/components/layout/Layout";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${outfit.variable} ${dmSans.variable} font-body min-h-screen w-full overflow-x-hidden bg-brand-white text-brand-black dark:bg-brand-black dark:text-brand-white transition-colors duration-500`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
