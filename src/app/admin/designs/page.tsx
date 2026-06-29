//src/app/admin/designs/page.tsx

import Link from "next/link";
import { prisma } from "@/lib/prisma";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminGuard from "@/components/admin/AdminGuard";
import DesignTable from "@/components/designs/DesignTable";

async function getDesigns() {
  return await prisma.design.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export default async function DesignsPage() {
  const designs = await getDesigns();

  return (
    <AdminGuard>
      <div className="flex min-h-screen bg-[#FAF7F2]">
        <AdminSidebar />

        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-5xl font-bold text-[#7A1C1C]">
                Designs
              </h1>

              <p className="text-neutral-500 mt-1">
                Manage packing box designs.
              </p>
            </div>

            <Link
              href="/admin/designs/add"
              className="
                bg-[#7A1C1C]
                hover:bg-[#611515]
                text-white
                px-5
                py-3
                rounded-xl
              "
            >
              Add Design
            </Link>
          </div>

          <DesignTable designs={designs} />
        </main>
      </div>
    </AdminGuard>
  );
}