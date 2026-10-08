"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Image from "next/image";

import { authClient } from "../lib/auth-client";

const AuthHeader = () => {
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending && session) {
      router.refresh();
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="w-20 h-9 bg-gray-100 rounded animate-pulse" />
    );
  }

  if (!session) {
    return (
      <div className="flex items-center gap-2">

        <Link
          href="/signin"
          className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#009b4d]"
        >
          সাইন ইন
        </Link>

        <Link
          href="/signup"
          className="px-4 py-2 text-sm font-semibold bg-[#009b4d] text-white rounded-md hover:bg-[#008641]"
        >
          রেজিস্টার
        </Link>

      </div>
    );
  }

  const handleLogout = async () => {
    const { error } = await authClient.signOut();

    if (error) {
      toast.error(error.message || "Logout করা যায়নি");
      return;
    }

    toast.success("সফলভাবে Logout হয়েছে");

    router.push("/signin");
    router.refresh();
  };

  return (
    <div className="flex items-center gap-3">

      <Link
        href="/profile"
        className="flex items-center gap-2"
      >

        <div className="w-8 h-8 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center">

          {session.user.image ? (
            <Image
              src={session.user.image}
              alt={session.user.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-sm font-bold text-gray-600">
              {session.user.name?.charAt(0)?.toUpperCase()}
            </span>
          )}

        </div>

        <span className="hidden md:block text-sm font-medium">
          {session.user.name}
        </span>

      </Link>

      <button
        onClick={handleLogout}
        className="text-sm text-red-500 hover:text-red-600"
      >
        Logout
      </button>

    </div>
  );
};

export default AuthHeader;