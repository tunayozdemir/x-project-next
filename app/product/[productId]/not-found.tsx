export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Sayfa Bulunamadı</h2>
      <p className="text-gray-600 mb-6">Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
      <a href="/" className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition" >
        Ana Sayfaya Dön
      </a>
    </div>
  );
}