"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { notFound } from "next/navigation";

interface Product {
  id: string
  title: string
  imageUrl: string
  description?: string
  text?: string
}

const fakeDB: Product[] = [
  { id: "1", title: "title 1", imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", description: "aaa", text: "deneme" },
  { id: "2", title: "title 2", imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", description: "bbb", text: "denmeler" },
];

const ProductDetail = ({ params }: { params: Promise<{ productId: string }> }) => {
  const actualParams = React.use(params);

  const productId = actualParams.productId
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (productId) {
      const found = fakeDB.find((item) => item.id === productId);
      if (found) setProduct(found);
      else throw new Error("Ürün bulunamadı")
    }
  }, [productId]);

  useEffect(() => {
    if (product) {
      document.title = `${product.title} | Ürün Detayı`;
    }
  }, [product]);

  if (!product) return <div className="text-center py-20 text-gray-500">Yükleniyor...</div>;
  if (!product) notFound()

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title} {product.id}</h1>
        <Image
          src={product.imageUrl}
          alt={product.title}
          width={400}
          height={300}
          className="w-full max-w-md mx-auto rounded-lg shadow-md mb-6 object-cover"
        />
        <p className="text-gray-600 text-lg mb-4">{product.description}</p>
        <div className="p-4 bg-gray-100 rounded-md text-gray-700">{product.text}</div>
      </div>
    </div>
  )
}

export default ProductDetail;
