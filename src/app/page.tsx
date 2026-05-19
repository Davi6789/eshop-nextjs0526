// src/app/page.tsx


import { prisma } from '@/lib/db';
import Link from 'next/link';

export default async function Home() {
  const products = await prisma.product.findMany({
    take: 6,
    include: { category: true, inventory: true },
  });

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 rounded-lg">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to eShop</h2>
          <p className="text-xl mb-6">Find amazing products</p>
          <Link
            href="/products"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 inline-block"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured */}
      <section>
        <h3 className="text-2xl font-bold mb-6">Featured Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`}>
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden cursor-pointer">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-2">{product.name}</h4>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">
                      €{product.price.toFixed(2)}
                    </span>
                    <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded">
                      {product.inventory?.stock || 0} left
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}