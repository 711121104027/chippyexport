//src/app/admin/dashboard/page.tsx

"use client";

import { useEffect, useState } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminGuard from "@/components/admin/AdminGuard";

export default function DashboardPage() {
  const [stats, setStats] = useState({
    total: 0,
    men: 0,
    women: 0,
    kids: 0,
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    const res = await fetch("/api/dashboard");
    const data = await res.json();

    setStats(data);
  };

  return (
    <AdminGuard>
    <div className="flex min-h-screen bg-[#FAF7F2]">
        
      <AdminSidebar />

      <main className="flex-1 p-8">
        <h1 className="text-5xl font-bold text-[#7A1C1C] mb-10">
          Dashboard
        </h1>

        <div className="grid grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl p-6 shadow">
            <h3 className="text-gray-500">
              Total Products
            </h3>

            <p className="text-4xl font-bold mt-3">
              {stats.total}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow">
            <h3 className="text-gray-500">
              Men
            </h3>

            <p className="text-4xl font-bold mt-3">
              {stats.men}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow">
            <h3 className="text-gray-500">
              Women
            </h3>

            <p className="text-4xl font-bold mt-3">
              {stats.women}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow">
            <h3 className="text-gray-500">
              Kids
            </h3>

            <p className="text-4xl font-bold mt-3">
              {stats.kids}
            </p>
          </div>
        </div>
      </main>
    </div>
    </AdminGuard>
  );
}