import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import FriendSuggestions from "./components/FriendSuggestions"; // Import the new component
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Facebook Clone",
  description: "A simple Facebook clone with posting functionality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar />
          <div className="flex">
            <Sidebar />
            <main className="ml-72 mt-16 p-4 flex-1">
              {/* Main Content Area */}
              <div className="flex justify-between gap-6">
                <div className="flex-1">{children}</div>
                <div className="w-72">
                  <FriendSuggestions /> {/* Add the FriendSuggestions component */}
                </div>
              </div>
            </main>
          </div>
          <footer className="bg-gray-800 text-gray-400 text-center py-4 mt-8">
          <p className="text-sm">
            <strong>NOTE:</strong> This site is a clone website. It is not the real,
            official site. Its purpose is to look like the official site for portfolio
            purposes. This site is not for active use. Do <strong>NOT</strong> enter your
            credentials or share any personal information.
          </p>
        </footer>
        </body>
      </html>
    </ThemeProvider>
  );
}
