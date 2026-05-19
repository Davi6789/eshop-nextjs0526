// src/app/layout.tsx

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'eShop - Your Store',
  description: 'High-quality products',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">eShop</h1>
            <div className="flex gap-6">
              <a href="/" className="hover:text-blue-600 transition">Home</a>
              <a href="/products" className="hover:text-blue-600 transition">Shop</a>
              <a href="/login" className="hover:text-blue-600 transition">Login</a>
            </div>
          </nav>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-8">
          {children}
        </main>

        <footer className="bg-gray-100 mt-12">
          <div className="max-w-7xl mx-auto px-4 py-8 text-center text-gray-600">
            <p>&copy; 2024 eShop. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}