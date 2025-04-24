// app/products/page.tsx

import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components";

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
    <div className=" bg-gray-100 py-10 px-4 flex">
      {products.map((product) => (
        <Link
          href={`/product/${product.id}`}
          key={product.id}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <Card
            src={product.imageUrl}
            alt={product.title}
          />
        </Link>
      ))}
    </div>
  );
}
