
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "../lib/auth-client";

const ProfileActions = ({ initialName = "" }) => {
  const router = useRouter();
  const [name, setName] = useState(initialName);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    setName(initialName);
  }, [initialName]);

  const handleSave = async (event) => {
    event.preventDefault();
    setMessage("");
    setError("");

    const cleanName = name.trim();

    if (!cleanName) {
      setError("আপনার নাম লিখুন।");
      return;
    }

    if (cleanName.length > 100) {
      setError("নাম ১০০ অক্ষরের মধ্যে রাখুন।");
      return;
    }

    setSaving(true);

    try {
      const result = await authClient.updateUser({
        name: cleanName,
      });

      if (result.error) {
        setError(result.error.message || "নাম পরিবর্তন করা যায়নি।");
        return;
      }

      setMessage("আপনার নাম সফলভাবে পরিবর্তন হয়েছে।");
      router.refresh();
    } catch {
      setError("সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    setLoggingOut(true);
    setError("");

    try {
      const result = await authClient.signOut();

      if (result.error) {
        setError(result.error.message || "লগ আউট করা যায়নি।");
        return;
      }

      router.replace("/signin");
      router.refresh();
    } catch {
      setError("লগ আউট করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setLoggingOut(false);
    }
  };

  return (
    <div className="mt-6">
      <h3 className="mb-4 text-base font-bold text-gray-800">
        তথ্য পরিবর্তন
      </h3>

      <form onSubmit={handleSave} className="space-y-3">
        <label
          htmlFor="profile-name"
          className="block text-sm font-medium text-gray-700"
        >
          নাম
        </label>

        <input
          id="profile-name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          maxLength={100}
          required
          className="w-full rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
          placeholder="আপনার নাম লিখুন"
        />

        {message && (
          <p role="status" className="text-sm text-green-700">
            {message}
          </p>
        )}

        {error && (
          <p role="alert" className="text-sm text-red-600">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={saving || loggingOut}
          className="w-full rounded-md bg-green-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {saving ? "সেভ হচ্ছে..." : "আপডেট"}
        </button>
      </form>

      <div className="mt-5 border-t border-gray-100 pt-5">
        <button
          type="button"
          onClick={handleLogout}
          disabled={saving || loggingOut}
          className="w-full rounded-md border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50 disabled:opacity-60"
        >
          {loggingOut ? "লগ আউট হচ্ছে..." : "লগ আউট"}
        </button>
      </div>
    </div>
  );
};

export default ProfileActions;