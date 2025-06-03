import "./globals.css";

export const metadata = {
  title: "Musaned Platform",
  description: "Official Musaned website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-ibm">{children}</body>
    </html>
  );
}



