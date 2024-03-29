import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const headingFont = localFont({ src: "../public/fonts/font.woff2" });

const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition min-w-28 flex items-center gap-x-2 max-sm:hidden">
        <Image className="" src="/logo.svg" alt="Logo" height={30} width={30} />
        <p
          className={cn(
            "text-lg text-neutral-700 sm:mt-1",
            headingFont.className
          )}
        >
          Taskify
        </p>
      </div>
    </Link>
  );
};

export default Logo;
