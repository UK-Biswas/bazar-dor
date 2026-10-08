// import ProductDetails from "../../components/products/ProductDetails";

// const ProductDetailsPage = async ({ params }) => {
//   const { slug } = await params;

//   const res = await fetch(
//     "https://api.abcz.workers.dev/api/bazardor/products",
//     {
//       cache: "no-store",
//     }
//   );

//   const products = await res.json();

//   const product = products.find(
//     (item) => item.slug === slug
//   );

//   if (!product) {
//     return (
//       <main className="min-h-screen bg-[#f3f8f3] px-4 py-16">
//         <div className="mx-auto max-w-4xl rounded-xl bg-white p-10 text-center shadow-sm">
//           <div className="mb-3 text-5xl">
//             😔
//           </div>

//           <h1 className="text-xl font-bold text-gray-800">
//             পণ্য পাওয়া যায়নি
//           </h1>

//           <p className="mt-2 text-sm text-gray-500">
//             আপনি যে পণ্যটি খুঁজছেন সেটি বর্তমানে পাওয়া যাচ্ছে না।
//           </p>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#f3f8f3]">
//       <ProductDetails product={product} />
//     </main>
//   );
// };

// export default ProductDetailsPage;


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

  // তোমার existing product fetch code নিচে থাকবে

  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products",
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