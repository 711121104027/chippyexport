//src/app/admin/products/add/page.tsx

import AdminSidebar from "@/components/admin/AdminSidebar";
import ProductForm from "@/components/admin/ProductForm";
import AdminGuard from "@/components/admin/AdminGuard";

export default function AddProductPage() {
  return (
    <AdminGuard>
    <div className="flex min-h-screen bg-[#FAF7F2]">
        
      <AdminSidebar />

      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold text-[#7A1C1C] mb-8">
          Add Product
        </h1>

        <div className="bg-white p-8 rounded-3xl shadow">
          <ProductForm />
        </div>
      </main>
      
    </div>
    </AdminGuard>
  );
}