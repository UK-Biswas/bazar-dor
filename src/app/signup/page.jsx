"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { authClient } from "../lib/auth-client";
import AuthSocialButtons from "../components/AuthSocialButtons";

const SignUpPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
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

    if (!formData.name || !formData.email || !formData.password) {
      toast.danger("সবগুলো তথ্য পূরণ করুন");
      return;
    }

    if (formData.password.length < 8) {
      toast.error("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে");
      return;
    }

    setLoading(true);

    try {
      const { error } = await authClient.signUp.email({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        toast.error(error.message || "রেজিস্ট্রেশন করা যায়নি");
        setLoading(false);
        return;
      }

      toast.success("রেজিস্ট্রেশন সফল হয়েছে");

      router.push("/signin");
    } catch (error) {
      toast.error("কিছু একটা সমস্যা হয়েছে");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-[calc(100vh-150px)] bg-[#f3f8f3] px-4 py-10 flex items-center justify-center">
      <div className="w-full max-w-[400px]">

        <div className="text-center mb-5">
          <h1 className="text-2xl font-bold text-gray-800">
            নতুন অ্যাকাউন্ট তৈরি করুন
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Bazar Dor-এ আপনার অ্যাকাউন্ট খুলুন
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">

          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="block text-sm font-medium mb-1">
                নাম
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="আপনার নাম"
                className="w-full h-11 px-3 border border-gray-200 rounded-md outline-none focus:border-[#009b4d]"
              />
            </div>

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
                placeholder="কমপক্ষে ৮ অক্ষর"
                className="w-full h-11 px-3 border border-gray-200 rounded-md outline-none focus:border-[#009b4d]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-11 rounded-md bg-[#009b4d] text-white font-semibold hover:bg-[#008641] transition disabled:opacity-60"
            >
              {loading ? "রেজিস্টার হচ্ছে..." : "রেজিস্টার"}
            </button>

          </form>

          <div className="flex items-center gap-3 my-5">
            <div className="h-px bg-gray-200 flex-1" />
            <span className="text-xs text-gray-400">অথবা</span>
            <div className="h-px bg-gray-200 flex-1" />
          </div>

          <AuthSocialButtons />

          <p className="text-center text-sm text-gray-500 mt-5">
            আগে থেকেই অ্যাকাউন্ট আছে?{" "}
            <Link
              href="/signin"
              className="text-[#009b4d] font-semibold hover:underline"
            >
              সাইন ইন করুন
            </Link>
          </p>

        </div>
      </div>
    </main>
  );
};

export default SignUpPage;