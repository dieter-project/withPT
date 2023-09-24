import AuthContext from '@/components/AuthContext'
import './globals.css'
import type { Metadata } from 'next'
import { Providers } from '../redux/provider'
import StyledComponentsRegistry from '@/lib/StyledComponentsRegistry'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <Providers>
            <AuthContext>
              <StyledComponentsRegistry>
                {children}
              </StyledComponentsRegistry>
            </AuthContext>
        </Providers>
      </body>
    </html>
  )
}
