import { PropsWithChildren } from "react";

import { MainLayout } from "@/widgets/main-layout";

import "@/app/styles/globals.css";

export const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="ko" className="h-full">
      <body className="h-full">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
};
