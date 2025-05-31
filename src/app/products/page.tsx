import ProductList from "@/components/ProductList";

export const metadata = {
  title: "Product Listing | My Shop",
  description:
    "Browse and filter the latest products by category, price, and more.",
  keywords: ["products", "ecommerce", "categories", "price filters"],
  openGraph: {
    title: "Product Listing | My Shop",
    description:
      "Explore products from various categories with our intuitive filters.",
    url: "",
    siteName: "My Shop",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Listing | My Shop",
    description: "Filter and browse latest products.",
  },
};

export default function ProductsPage() {
  return (
    <main className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <ProductList />
    </main>
  );
}
