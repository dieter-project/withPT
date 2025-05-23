import React from "react";
import type { Metadata } from "next";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import AuthContext from "@/components/common/AuthContext";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import { Providers } from "../redux/provider";
import ReactQueryProviders from "@/utils/react-query-provider";
import { ModalProvider } from "@/context/trainer/ModalContext";
import { KakaoMapProvider } from "@/context/trainer/KaKaoMapContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "WithPT",
  description: "Generated by withPT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <ReactQueryProviders>
          <QueryErrorResetBoundary>
            <Providers>
              <AuthContext>
                <StyledComponentsRegistry>
                  <KakaoMapProvider>
                    <ModalProvider>{children}</ModalProvider>
                  </KakaoMapProvider>
                </StyledComponentsRegistry>
              </AuthContext>
            </Providers>
          </QueryErrorResetBoundary>
        </ReactQueryProviders>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
