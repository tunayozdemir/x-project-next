
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hata Sayfası | Uygulama Adı",
  description: "Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.",
};

export default function NotFound() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md bg-white shadow-xl rounded-2xl p-8 text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Sayfa Bulunamadı</h1>
        <p className="text-gray-700 text-lg mb-6">
          Aradığınız sayfa bulunamadı. Lütfen URL'yi kontrol edin.
        </p>
      </div>
    </div>
  );
}
