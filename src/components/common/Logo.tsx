//src/components/common/Logo.tsx
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center gap-5"
    >
      <Image
        src="/images/logo.png"
        alt="Chippy Export"
        width={80}
        height={80}
        priority
      />

      <h1
        className="
          font-company
          whitespace-nowrap
          text-[18px] xl:text-[26px]
          text-[#8B0000]
          leading-none
          translate-y-2
        "
      >
        Chippy Export
      </h1>
    </Link>
  );
}