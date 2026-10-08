"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "@heroui/react";

import { authClient } from "../lib/auth-client";
import AuthSocialButtons from "../components/AuthSocialButtons";

const SignInPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("ইমেইল এবং পাসওয়ার্ড দিন");
      return;
    }

    setLoading(true);

    try {
      const { error } = await authClient.signIn.email({
        email: formData.email,
        password: formData.password,
        callbackURL: "/",
      });

      if (error) {
        toast.error(error.message || "লগইন করা যায়নি");
        setLoading(false);
        return;
      }

      toast.success("সফলভাবে লগইন হয়েছে");

      router.push("/");
      router.refresh();
    } catch (error) {
      toast.error("কিছু একটা সমস্যা হয়েছে");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-[calc(100vh-150px)] bg-[#f3f8f3] px-4 py-12 flex items-center justify-center">
      <div className="w-full max-w-[390px]">

        <div className="text-center mb-5">
          <h1 className="text-2xl font-bold text-gray-800">
            সাইন ইন
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            আপনার অ্যাকাউন্টে প্রবেশ করুন
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">

          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="block text-sm font-medium mb-1">
                ইমেইল
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="আপনার ইমেইল"
                className="w-full h-11 px-3 border border-gray-200 rounded-md outline-none focus:border-[#009b4d]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                পাসওয়ার্ড
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="আপনার পাসওয়ার্ড"
                className="w-full h-11 px-3 border border-gray-200 rounded-md outline-none focus:border-[#009b4d]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-11 rounded-md bg-[#009b4d] text-white font-semibold hover:bg-[#008641] transition disabled:opacity-60"
            >
              {loading ? "লগইন হচ্ছে..." : "সাইন ইন"}
            </button>

          </form>

          <div className="flex items-center gap-3 my-5">
            <div className="h-px bg-gray-200 flex-1" />
            <span className="text-xs text-gray-400">অথবা</span>
            <div className="h-px bg-gray-200 flex-1" />
          </div>

          <AuthSocialButtons />

          <p className="text-center text-sm text-gray-500 mt-5">
            অ্যাকাউন্ট নেই?{" "}
            <Link
              href="/signup"
              className="text-[#009b4d] font-semibold hover:underline"
            >
              রেজিস্টার করুন
            </Link>
          </p>

        </div>
      </div>
    </main>
  );
};

export default SignInPage;