import Image from "next/image";
import Hero from "./Hero";
import ProductSection from "./components/products/ProductSection";

export default async function Home() {
    const res = await fetch(
        "https://api.api-store.workers.dev/api/bazardor/products",
        {
            cache: "no-store",
        }
    );

    const products = await res.json();

    const increasedProducts = products
        .filter((product) => product.change.dir === "up")
        .sort((a, b) => b.change.pct - a.change.pct)
        .slice(0, 6);

    const decreasedProducts = products
        .filter((product) => product.change.dir === "down")
        .sort((a, b) => a.change.pct - b.change.pct)
        .slice(0, 6);


    return (
        <div>
            <Hero></Hero>
            <main>
                <ProductSection
                    title="আজ দাম বেড়েছে"
                    products={increasedProducts}
                />

                <ProductSection
                    title="আজ দাম কমেছে"
                    products={decreasedProducts}
                />

                <section id="all-products">
                    <ProductSection
                        title="সব পণ্য"
                        products={products}
                    />
                </section>
            </main>

        </div>
    );
}

