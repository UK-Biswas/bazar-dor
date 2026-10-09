// import { headers } from "next/headers";
// import { redirect } from "next/navigation";
// import Image from "next/image";

// import { auth } from "../lib/auth";
// import ProfileActions from "../components/ProfileActions";

// const ProfilePage = async () => {
//   const session = await auth.api.getSession({
//     headers: await headers(),
//   });

//   if (!session) {
//     redirect("/signin");
//   }

//   const user = session.user;

//   return (
//     <main className="min-h-[calc(100vh-150px)] bg-[#f3f8f3] px-4 py-12">

//       <div className="max-w-[720px] mx-auto">

//         <div className="text-center mb-6">
//           <div className="w-16 h-16 rounded-full bg-gray-200 mx-auto mb-3 overflow-hidden flex items-center justify-center">
//             {user.image ? (
//               <Image
//                 src={user.image}
//                 alt={user.name || "Profile"}
//                 className="w-fill h-fill object-cover"
//               />
//             ) : (
//               <span className="text-2xl font-bold text-gray-500">
//                 {user.name?.charAt(0)?.toUpperCase()}
//               </span>
//             )}
//           </div>

//           <h1 className="text-2xl font-bold text-gray-800">
//             আমার প্রোফাইল
//           </h1>

//           <p className="text-sm text-gray-500 mt-1">
//             আপনার অ্যাকাউন্টের তথ্য
//           </p>
//         </div>

//         <div className="bg-white rounded-lg shadow-sm p-6">

//           <div className="flex items-center gap-4 border-b pb-5">

//             <div className="w-14 h-14 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center shrink-0">
//               {user.image ? (
//                 <Image
//                   src={user.image}
//                   alt={user.name || "Profile"}
//                   className="w-full h-full object-cover"
//                 />
//               ) : (
//                 <span className="font-bold text-gray-500">
//                   {user.name?.charAt(0)?.toUpperCase()}
//                 </span>
//               )}
//             </div>

//             <div className="flex-1">
//               <h2 className="font-bold text-gray-800">
//                 {user.name}
//               </h2>

//               <p className="text-sm text-gray-500">
//                 {user.email}
//               </p>
//             </div>

//             <span className="text-xs bg-green-50 text-green-600 px-3 py-1 rounded-full">
//               Active
//             </span>

//           </div>

//           <div className="mt-6">

//             <h3 className="font-semibold text-gray-800 mb-3">
//               অ্যাকাউন্ট তথ্য
//             </h3>

//             <div className="space-y-3">

//               <div className="flex justify-between border rounded-md px-4 py-3">
//                 <span className="text-gray-500">নাম</span>
//                 <span className="font-medium">{user.name}</span>
//               </div>

//               <div className="flex justify-between border rounded-md px-4 py-3">
//                 <span className="text-gray-500">ইমেইল</span>
//                 <span className="font-medium">{user.email}</span>
//               </div>

//             </div>

//           </div>

//           <ProfileActions />

//         </div>

//       </div>

//     </main>
//   );
// };

// export default ProfilePage;



import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "../lib/auth";
import ProfileActions from "../components/ProfileActions";

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/signin");
  }

  const user = session.user;
  const initial = user.name?.trim()?.charAt(0)?.toUpperCase() || "U";

  return (
    <main className="min-h-[calc(100vh-150px)] bg-[#f0f5f0] px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-[540px]">

        {/* Page heading */}
        <div className="mb-6">
          <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">
            আমার প্রোফাইল
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        {/* User information card */}
        <section className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:p-5">
          <div className="flex items-center gap-3 sm:gap-4">

            {user.image ? (
              <img
                src={user.image}
                alt="Profile"
                className="h-12 w-12 shrink-0 rounded-full object-cover sm:h-14 sm:w-14"
              />
            ) : (
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-lg font-bold text-green-800 sm:h-14 sm:w-14">
                {initial}
              </div>
            )}

            <div className="min-w-0 flex-1">
              <h2 className="truncate text-sm font-bold text-gray-800 sm:text-base">
                {user.name || "ব্যবহারকারী"}
              </h2>

              <p className="mt-1 break-all text-xs text-gray-500 sm:text-sm">
                {user.email}
              </p>
            </div>

            <span className="shrink-0 rounded-md border border-red-300 px-2 py-1 text-[10px] font-medium text-red-500 sm:px-3 sm:text-xs">
              প্রোফাইল
            </span>
          </div>
        </section>

        {/* Account details */}
        <section className="mt-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="mb-4 text-base font-bold text-gray-800">
            তথ্য
          </h3>

          <div className="space-y-3">
            <div className="flex flex-col gap-1 rounded-md border border-gray-100 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500">নাম</span>
              <span className="break-words text-sm font-medium text-gray-800">
                {user.name || "নাম দেওয়া হয়নি"}
              </span>
            </div>

            <div className="flex flex-col gap-1 rounded-md border border-gray-100 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500">ইমেইল</span>
              <span className="break-all text-sm font-medium text-gray-800">
                {user.email}
              </span>
            </div>
          </div>

          <ProfileActions initialName={user.name || ""} />
        </section>
      </div>
    </main>
  );
};

export default ProfilePage;