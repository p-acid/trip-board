import { PropsWithChildren } from "react";

import "@/app/styles/globals.css";

export const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
};
