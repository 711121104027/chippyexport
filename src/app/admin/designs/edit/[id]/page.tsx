//src/app/admin/designs/edit/[id]/page.tsx

import { prisma } from "@/lib/prisma";
import DesignForm from "@/components/designs/DesignForm";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminGuard from "@/components/admin/AdminGuard";

async function getDesign(id: string) {
  return await prisma.design.findUnique({
    where: {
      id,
    },
  });
}

export default async function EditDesignPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const design = await getDesign(id);

  return (
    <AdminGuard>
      <div className="flex min-h-screen bg-[#FAF7F2]">
        <AdminSidebar />

        <main className="flex-1 p-8">
          <h1 className="text-5xl font-bold text-[#7A1C1C] mb-8">
            Edit Design
          </h1>

          <div className="bg-white p-8 rounded-3xl shadow">
            <DesignForm initialData={design || undefined} />
          </div>
        </main>
      </div>
    </AdminGuard>
  );
}