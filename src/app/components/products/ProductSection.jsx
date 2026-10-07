import ProductCard from "./ProductCard";

const ProductSection = ({ title, products }) => {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-xl font-bold">
        {title}
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;