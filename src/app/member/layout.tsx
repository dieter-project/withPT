"use client";
import BottomNav from "@/components/common/layout/BottomNav";
import { usePathname } from "next/navigation";

export default function MemberLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const notNavRoute = ["signup", "login", "room"];
  const navRoute = notNavRoute.some(element => pathname.includes(element));

  return (
    <section>
      {children}
      {!navRoute && <BottomNav role="member" />}
    </section>
  );
}
