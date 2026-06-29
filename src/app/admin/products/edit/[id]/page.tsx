//src/app/admin/products/edit/[id]/page.tsx

import ProductForm from "@/components/admin/ProductForm";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminGuard from "@/components/admin/AdminGuard";

async function getProduct(id: string) {
  const res = await fetch(
    `http://localhost:3000/api/products/${id}`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await getProduct(id);

  return (
     <AdminGuard>
    <div className="flex min-h-screen bg-[#FAF7F2]">
       
      <AdminSidebar />

      <main className="flex-1 p-8">
        <h1 className="text-5xl font-bold text-[#7A1C1C] mb-8">
          Edit Product
        </h1>

        <div className="bg-white p-8 rounded-3xl shadow">
          <ProductForm
            initialData={product}
            productId={id}
          />
        </div>
      </main>
      
    </div>
    </AdminGuard>
  );
}