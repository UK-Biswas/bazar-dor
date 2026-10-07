import ProductSection from "../../components/products/ProductSection";

const CategoryPage = async ({ params }) => {
  const { category } = await params;

  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
    {
      cache: "no-store",
    }
  );

  const products = await res.json();

  const categoryProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <main>
      <ProductSection
        title={categoryProducts[0]?.categoryNameBn || category}
        products={categoryProducts}
      />
    </main>
  );
};

export default CategoryPage;