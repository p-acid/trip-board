import { PropsWithChildren } from "react";

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full bg-neutral-50">
      <div className="bg-background mx-auto min-h-screen w-full max-w-md">
        {children}
      </div>
    </div>
  );
};
