import { Sora, Work_Sans } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import "@/styles/globals.css";

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
      <main className={`${sora.variable} ${workSans.variable} font-body antialiased`}>
        <Component {...pageProps} />
        <Toaster position="top-right" richColors closeButton />
      </main>
    </ThemeProvider>
  );
}
