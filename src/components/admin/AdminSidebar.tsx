//src/components/admin/AdminSidebar.tsx

"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  Plus,
  LogOut,
  ImageIcon,
  FolderPlus,
} from "lucide-react";

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-[#7A1C1C] text-white min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-10">
        Bruty Admin
      </h2>

      <nav className="space-y-3">
        <Link
          href="/admin/dashboard"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          href="/admin/product"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10"
        >
          <Package size={20} />
          Products
        </Link>

        <Link
          href="/admin/products/add"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10"
        >
          <Plus size={20} />
          Add Product
        </Link>

        <Link
  href="/admin/designs"
  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10"
>
  <ImageIcon size={20} />
  Designs
</Link>

<Link
  href="/admin/designs/add"
  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10"
>
  <FolderPlus size={20} />
  Add Design
</Link>

        <button
        onClick={() => {
  localStorage.removeItem(
    "admin-token"
  );

  window.location.href =
    "/admin/login";
}}
          className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/10"
        >
          <LogOut size={20} />
          Logout
        </button>
      </nav>
    </aside>
  );
}