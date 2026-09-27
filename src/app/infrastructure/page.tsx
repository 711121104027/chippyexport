import InfrastructureIntro from "@/components/infrastructure/InfrastructureIntro";
import AdminOfficeSection from "@/components/infrastructure/AdminOfficeSection";
import CuttingSection from "@/components/infrastructure/CuttingSection";
import AssemblySection from "@/components/infrastructure/AssemblySection";
import QualitySection from "@/components/infrastructure/QualitySection";
import LogisticsSection from "@/components/infrastructure/LogisticsSection";
import ProductionVideo from "@/components/infrastructure/ProductionVideo";

export default function InfrastructurePage() {
  return (
    <main>
      <InfrastructureIntro />
      <AdminOfficeSection />
      <CuttingSection />
      <AssemblySection />
      <QualitySection />
      <LogisticsSection />
      <ProductionVideo />
    </main>
  );
}