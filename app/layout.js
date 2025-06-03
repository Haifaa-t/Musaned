// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Musaned",
  description: "Government Services Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

