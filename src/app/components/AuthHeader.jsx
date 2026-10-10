
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { authClient } from "../lib/auth-client";

const AuthHeader = () => {
  const router = useRouter();
  const menuRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  console.log("User data:", session?.user);
console.log("Google image:", session?.user?.image);

  useEffect(() => {
    if (!isPending && session) {
      router.refresh();
    }
  }, [session, isPending, router]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  if (isPending) {
    return <div className="h-9 w-20 animate-pulse rounded bg-gray-100" />;
  }

  if (!user) {
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
          className="rounded-md bg-[#009b4d] px-4 py-2 text-sm font-semibold text-white hover:bg-[#008641]"
        >
          রেজিস্টার
        </Link>
      </div>
    );
  }

  const initial = user.name?.trim()?.charAt(0)?.toUpperCase() || "U";

  const handleLogout = async () => {
    if (loggingOut) return;

    setLoggingOut(true);

    try {
      const { error } = await authClient.signOut();

      if (error) {
        toast.error(error.message || "Logout করা যায়নি");
        return;
      }

      setOpen(false);
      toast.success("সফলভাবে Logout হয়েছে");
      router.replace("/signin");
      router.refresh();
    } catch {
      toast.error("Logout করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setLoggingOut(false);
    }
  };

  return (
    <div className="relative" ref={menuRef}>
      {/* Profile button */}
      <button
        type="button"
        onClick={() => setOpen((previous) => !previous)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="flex items-center gap-2 rounded-md px-2 py-2 transition hover:bg-gray-50"
      >
        <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-100">
          {/* {user.image ? (
            <Image
              src={user.image}
              alt={user.name || "Profile"}
              width={32}
              height={32}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-sm font-bold text-gray-600">
              {initial}
            </span>
          )} */}

          {user.image ? (
            <Image
              src={user.image}
              alt={user.name || "Profile"}
              width={32}
              height={32}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-sm font-bold text-gray-600">
              {user.name?.charAt(0)?.toUpperCase() || "U"}
            </span>
          )}

        </div>

        <span className="hidden max-w-28 truncate text-sm font-medium text-gray-800 md:block">
          {user.name || "ব্যবহারকারী"}
        </span>

        <svg
          className={`h-3 w-3 text-gray-500 transition-transform ${open ? "rotate-180" : ""
            }`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.09 1.03l-4.25 4.52a.75.75 0 01-1.1 0L5.21 8.27a.75.75 0 01.02-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* User dropdown */}
      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-2 w-64 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg"
        >
          <div className="border-b border-gray-100 px-4 py-4">
            <p className="truncate text-sm font-semibold text-gray-900">
              {user.name || "ব্যবহারকারী"}
            </p>

            <p className="mt-1 break-all text-xs text-gray-500">
              {user.email}
            </p>
          </div>

          <div className="p-2">
            <Link
              href="/profile"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-[#009b4d]"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                aria-hidden="true"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21v-2a8 8 0 0116 0v2" />
              </svg>
              আমার প্রোফাইল
            </Link>

            <button
              type="button"
              role="menuitem"
              onClick={handleLogout}
              disabled={loggingOut}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-red-500 hover:bg-red-50 disabled:opacity-60"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                aria-hidden="true"
              >
                <path d="M10 17l5-5-5-5" />
                <path d="M15 12H3" />
                <path d="M12 3h6a2 2 0 012 2v14a2 2 0 01-2 2h-6" />
              </svg>

              {loggingOut ? "Logout হচ্ছে..." : "Logout"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthHeader;



