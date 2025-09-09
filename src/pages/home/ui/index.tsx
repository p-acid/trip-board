"use client";

import { PAGE_ROUTES } from "@/shared/constants/page-routes";
import { Button } from "@/shared/ui";
import { useRouter } from "next/navigation";

export const HomePage = () => {
  const { push } = useRouter();

  return (
    <main className="h-full">
      <div className="p-4">
        <Button
          size="default"
          variant="brand"
          className="w-full"
          onClick={() => push(PAGE_ROUTES.PLANING)}
        >
          시작하기
        </Button>
      </div>
    </main>
  );
};
