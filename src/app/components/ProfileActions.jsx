"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "@heroui/react";

import { authClient } from "@/lib/auth-client";

const ProfileActions = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);

    try {
      const { error } = await authClient.signOut();

      if (error) {
        toast.error(error.message || "Logout করা যায়নি");
        setLoading(false);
        return;
      }

      toast.success("সফলভাবে Logout হয়েছে");

      router.push("/signin");
      router.refresh();
    } catch (error) {
      toast.error("Logout করার সময় সমস্যা হয়েছে");
      setLoading(false);
    }
  };

  return (
    <div className="mt-6">
      <button
        onClick={handleLogout}
        disabled={loading}
        className="w-full h-11 rounded-md bg-[#009b4d] text-white font-semibold hover:bg-[#008641] transition disabled:opacity-60"
      >
        {loading ? "Logout হচ্ছে..." : "Logout"}
      </button>
    </div>
  );
};

export default ProfileActions;