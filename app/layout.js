import localFont from "next/font/local";
import "./globals.css";

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
      </body>
    </html>
  );
}
