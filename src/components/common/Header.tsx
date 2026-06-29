//src/components/common/Header.tsx
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
      <div className="mx-auto flex h-[100px] max-w-[1440px] items-center justify-between px-6 xl:px-10">
        <Logo />

        <DesktopNav />

        <MobileNav />
      </div>
    </header>
  );
}