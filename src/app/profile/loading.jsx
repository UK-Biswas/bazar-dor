const ProfileLoading = () => {
  return (
    <main className="min-h-screen bg-[#f3f8f3] px-4 py-12">
      <div className="max-w-[720px] mx-auto animate-pulse">

        <div className="w-16 h-16 rounded-full bg-gray-200 mx-auto" />

        <div className="h-7 w-40 bg-gray-200 rounded mx-auto mt-4" />

        <div className="bg-white rounded-lg p-6 mt-6">

          <div className="flex gap-4">
            <div className="w-14 h-14 rounded-full bg-gray-200" />

            <div className="space-y-2">
              <div className="h-5 w-32 bg-gray-200 rounded" />
              <div className="h-4 w-48 bg-gray-200 rounded" />
            </div>
          </div>

          <div className="space-y-4 mt-8">
            <div className="h-12 bg-gray-200 rounded" />
            <div className="h-12 bg-gray-200 rounded" />
          </div>

        </div>
      </div>
    </main>
  );
};

export default ProfileLoading;