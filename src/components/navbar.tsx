"use client";
import { useIsMobile } from "@/hooks/is-mobile";

export const Navbar = () => {
  const isMobile = useIsMobile();
  if (isMobile) return <div>Navbar mobile</div>;
  return <div>Navbar</div>;
};
