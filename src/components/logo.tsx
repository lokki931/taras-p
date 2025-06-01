import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href={"/"}
      className="flex items-center gap-x-2 text-green-500 font-bold hover:opacity-70"
    >
      <Image src={"./logo.svg"} width={32} height={32} alt="logo" />
      <span>Taras P.</span>
    </Link>
  );
};
