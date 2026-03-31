import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

const macan = localFont({
  src: [
    { path: "../public/assets/fonts/MacanPanWeb-Thin.ttf", weight: "100", style: "normal" },
    { path: "../public/assets/fonts/MacanPanWeb-Light.ttf", weight: "300", style: "normal" },
    { path: "../public/assets/fonts/MacanPanWeb-Book.ttf", weight: "400", style: "normal" },
    { path: "../public/assets/fonts/MacanPanWeb-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/assets/fonts/MacanPanWeb-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/assets/fonts/MacanPanWeb-Semibold.ttf", weight: "600", style: "normal" },
    { path: "../public/assets/fonts/MacanPanWeb-Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/assets/fonts/MacanPanWeb-Extrabold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-macan",
  display: "swap",
});

export const metadata = {
  title: "Johnson & Co. Creative",
  description: "Professional logo designer and developer portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${macan.variable} antialiased`} suppressHydrationWarning>
        {children}
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/69cc43405ef5631c3b55280b/1jl2uddct';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
