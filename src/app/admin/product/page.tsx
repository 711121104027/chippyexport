import ProductTable from "@/components/admin/ProductTable";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminGuard from "@/components/admin/AdminGuard";

export default function ProductPage() {
  return (
    <AdminGuard>
    <div className="flex min-h-screen bg-[#FAF7F2]">
        
      <AdminSidebar />

      <main className="flex-1 p-8">
        <h1 className="text-5xl font-bold text-[#7A1C1C] mb-8">
          Products
        </h1>

        <ProductTable />
      </main>
      
    </div>
    </AdminGuard>
  );
}