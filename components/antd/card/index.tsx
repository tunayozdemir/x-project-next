// app/product/[productId]/page.tsx

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
];

interface Props {
  params: {
    productId: string;
  };
}

export default function ProductDetail({ params }: Props) {
  const product = products.find((item) => item.id === params.productId);

  if (!product) throw new Error("Ürün bulunamadı");

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
        <Image
          src={product.imageUrl}
          alt={product.title}
          width={300}
          height={300}
          className="rounded-lg shadow-md mb-6"
        />
        <p className="text-gray-600 text-lg mb-4">{product.description}</p>
        <div className="p-4 bg-gray-100 rounded-md text-gray-700">{product.text}</div>
      </div>
    </div>
  );
}
