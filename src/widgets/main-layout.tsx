import { PropsWithChildren } from "react";

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-full min-h-screen w-full bg-neutral-50">
      <div className="bg-background mx-auto h-full w-full max-w-md">
        {children}
      </div>
    </div>
  );
};
