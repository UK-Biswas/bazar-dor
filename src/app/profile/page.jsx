import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import ProfileActions from "@/app/components/ProfileActions";

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/signin");
  }

  const user = session.user;

  return (
    <main className="min-h-[calc(100vh-150px)] bg-[#f3f8f3] px-4 py-12">

      <div className="max-w-[720px] mx-auto">

        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gray-200 mx-auto mb-3 overflow-hidden flex items-center justify-center">
            {user.image ? (
              <img
                src={user.image}
                alt={user.name || "Profile"}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-2xl font-bold text-gray-500">
                {user.name?.charAt(0)?.toUpperCase()}
              </span>
            )}
          </div>

          <h1 className="text-2xl font-bold text-gray-800">
            আমার প্রোফাইল
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            আপনার অ্যাকাউন্টের তথ্য
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">

          <div className="flex items-center gap-4 border-b pb-5">

            <div className="w-14 h-14 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center shrink-0">
              {user.image ? (
                <img
                  src={user.image}
                  alt={user.name || "Profile"}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="font-bold text-gray-500">
                  {user.name?.charAt(0)?.toUpperCase()}
                </span>
              )}
            </div>

            <div className="flex-1">
              <h2 className="font-bold text-gray-800">
                {user.name}
              </h2>

              <p className="text-sm text-gray-500">
                {user.email}
              </p>
            </div>

            <span className="text-xs bg-green-50 text-green-600 px-3 py-1 rounded-full">
              Active
            </span>

          </div>

          <div className="mt-6">

            <h3 className="font-semibold text-gray-800 mb-3">
              অ্যাকাউন্ট তথ্য
            </h3>

            <div className="space-y-3">

              <div className="flex justify-between border rounded-md px-4 py-3">
                <span className="text-gray-500">নাম</span>
                <span className="font-medium">{user.name}</span>
              </div>

              <div className="flex justify-between border rounded-md px-4 py-3">
                <span className="text-gray-500">ইমেইল</span>
                <span className="font-medium">{user.email}</span>
              </div>

            </div>

          </div>

          <ProfileActions />

        </div>

      </div>

    </main>
  );
};

export default ProfilePage;