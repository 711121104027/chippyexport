//src/app/page.tsx
import HeroSlider from "@/components/home/HeroSlider";
import BrandHighlights from "@/components/home/BrandHighlights";
import BrandPromise from "@/components/home/BrandPromise";
import ProductCategories from "@/components/home/ProductCategories";
import WhyChooseBruty from "@/components/home/WhyChooseBruty";
import HomeCTA from "@/components/home/HomeCTA";

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      <BrandHighlights />

      <BrandPromise />

      <ProductCategories />

      <WhyChooseBruty />

      <HomeCTA />
    </>
  );
}