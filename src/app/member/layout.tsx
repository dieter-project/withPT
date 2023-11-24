'use client'
import MemberBottomNav from "@/components/MemberBottomNav"
import { usePathname } from "next/navigation"

export default function MemberLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const notNavRoute = ['signup', 'login']
  const navRoute = notNavRoute.some(element => pathname.includes(element))

  return (
    <section>
      {children}
      {!navRoute && <MemberBottomNav />}
    </section>
  )
}