import { Link } from "@/i18n/navigation";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link
      href={"/"}
      className="flex items-center gap-x-2 text-green-500 font-bold hover:opacity-70"
    >
      <Image src="/newLogo.png" width={50} height={50} alt="logo" />
      <span>Web Dev</span>
    </Link>
  );
};
