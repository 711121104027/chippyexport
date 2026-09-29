//src/app/admin/products/edit/[id]/page.tsx

import { prisma } from "@/lib/prisma";
import ProductForm from "@/components/admin/ProductForm";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminGuard from "@/components/admin/AdminGuard";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
export const revalidate = 0;

async function getProduct(id: string) {
  try {
    return await prisma.product.findUnique({
      where: {
        id,
      },
    });
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return null;
  }
}

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await getProduct(id);

  if (!product) {
    return notFound();
  }

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