import Link from "next/link";

export const metadata = {
  title: "الصفحة الرئيسية | My Shop",
  description:
    "مرحباً بك في متجرنا الإلكتروني. اكتشف منتجات رائعة بأسعار مناسبة.",
};

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-10 bg-gradient-to-br from-blue-50 to-white text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
        👋 أهلاً بك في متجرنا
      </h1>

      <p className="text-lg text-gray-600 max-w-xl mb-8">
        اكتشف تشكيلتنا الواسعة من المنتجات الرائعة المصنفة حسب الفئات والأسعار.
        تصفح، فلتر، واستمتع!
      </p>

      <Link
        href="/products"
        className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
      >
        استعرض المنتجات
      </Link>
    </main>
  );
}
