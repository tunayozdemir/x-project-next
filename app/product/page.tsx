// app/products/page.tsx

import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: "1",
    title: "title 1",
    imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    description: "aaa",
    text: "deneme",
  },
  {
    id: "2",
    title: "title 2",
    imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    description: "bbb",
    text: "denmeler",
  },
  {
    id: "3",
    title: "title 3",
    imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    description: "bbb",
    text: "denmeler",
  },
];


export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-full h-64 relative">
              <Image
                src={product.imageUrl}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
