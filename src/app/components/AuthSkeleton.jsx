const AuthSkeleton = () => {
  return (
    <div className="min-h-[420px] bg-[#f3f8f3] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-[400px] rounded-lg bg-white p-6 shadow-sm animate-pulse">
        <div className="mx-auto mb-5 h-7 w-40 rounded bg-gray-200" />

        <div className="space-y-4">
          <div className="h-11 rounded border bg-gray-200" />
          <div className="h-11 rounded border bg-gray-200" />
          <div className="h-11 rounded bg-gray-200" />
        </div>

        <div className="mt-5 h-4 w-48 mx-auto rounded bg-gray-200" />
      </div>
    </div>
  );
};

export default AuthSkeleton;