"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { authClient } from "../lib/auth-client";

const AuthSocialButtons = ({ callbackUrl = "/" }) => {
  const [loading, setLoading] = useState("");

  const handleSocialLogin = async (provider) => {
    try {
      setLoading(provider);

      const { error } = await authClient.signIn.social({
        provider,
        callbackURL: callbackUrl,
      });

      if (error) {
        toast.error(error.message || "Social login failed");
        setLoading("");
      }
    } catch (error) {
      toast.error("কিছু একটা সমস্যা হয়েছে");
      setLoading("");
    }
  };

  return (
    <div className="space-y-3">

      <button
        type="button"
        onClick={() => handleSocialLogin("google")}
        disabled={loading !== ""}
        className="w-full h-11 border border-gray-300 rounded-md flex items-center justify-center gap-3 bg-white hover:bg-gray-50 transition disabled:opacity-60"
      >
        <span className="font-semibold text-red-500">
          G
        </span>

        {loading === "google"
          ? "Google হচ্ছে..."
          : "Google দিয়ে চালিয়ে যান"}
      </button>

      <button
        type="button"
        onClick={() => handleSocialLogin("github")}
        disabled={loading !== ""}
        className="w-full h-11 border border-gray-300 rounded-md flex items-center justify-center gap-3 bg-white hover:bg-gray-50 transition disabled:opacity-60"
      >
        <span className="font-semibold text-gray-800">
          GitHub
        </span>

        {loading === "github"
          ? "GitHub হচ্ছে..."
          : "GitHub দিয়ে চালিয়ে যান"}
      </button>

    </div>
  );
};

export default AuthSocialButtons;