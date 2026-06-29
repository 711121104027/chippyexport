//src/app/admin/page.tsx

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    const token =
      localStorage.getItem(
        "admin-token"
      );

    if (token) {
      router.replace(
        "/admin/dashboard"
      );
    } else {
      router.replace(
        "/admin/login"
      );
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      Loading...
    </div>
  );
}