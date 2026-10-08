const ProductLoading = () => {
  return (
    <main className="min-h-screen bg-[#f3f8f3] px-4 py-16">
      <div className="max-w-5xl mx-auto bg-white rounded-xl p-6 md:p-10 animate-pulse">

        <div className="grid md:grid-cols-2 gap-10">

          <div className="h-[350px] bg-gray-200 rounded-lg" />

          <div className="space-y-5">

            <div className="h-9 w-3/4 bg-gray-200 rounded" />

            <div className="h-5 w-full bg-gray-200 rounded" />
            <div className="h-5 w-5/6 bg-gray-200 rounded" />

            <div className="h-9 w-32 bg-gray-200 rounded" />

            <div className="h-12 w-full bg-gray-200 rounded" />

          </div>

        </div>

      </div>
    </main>
  );
};

export default ProductLoading;