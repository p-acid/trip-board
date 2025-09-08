import { PropsWithChildren } from "react";

import { MainLayout } from "@/widgets/main-layout";

import "@/app/styles/globals.css";

export const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="ko">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
};
