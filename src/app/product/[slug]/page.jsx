
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "../../lib/auth";
import ProductDetails from "../../components/products/ProductDetails";

const ProductDetailsPage = async ({ params }) => {
  const { slug } = await params;

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect(`/signin?callbackUrl=/product/${slug}`);
  }

  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
    {
      cache: "no-store",
    }
  );

  const products = await res.json();

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <main className="min-h-screen bg-[#f3f8f3] px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-xl p-10 text-center">
          <h1 className="text-2xl font-bold">
            Product পাওয়া যায়নি
          </h1>
        </div>
      </main>
    );
  }

  return (
    <ProductDetails product={product} />
  );
};

export default ProductDetailsPage;