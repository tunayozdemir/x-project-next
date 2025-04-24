"use client";

import React from "react"
import { useRouter } from "next/navigation"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: "Hata Sayfası | Uygulama Adı",
  description: "Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.",
};

const ErrorBoundary = ({ error }: { error: Error }) => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md bg-white shadow-xl rounded-2xl p-8 text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Bir Hata Oluştu</h1>
        <p className="text-gray-700 text-lg mb-6">{error.message}</p>
        <p className="text-gray-400 text-sm mb-6">
          Lütfen daha sonra tekrar deneyin veya yöneticinizle iletişime geçin.
        </p>
        <button
          onClick={() => router.back()}
          className="mt-4 px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition duration-200"
        >
          Geri Dön
        </button>
      </div>
    </div>
  );
};

export default ErrorBoundary;
