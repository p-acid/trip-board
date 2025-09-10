"use client";

import { MapPinCheck } from "lucide-react";
import { useRouter } from "next/navigation";

import { PAGE_ROUTES } from "@/shared/constants/page-routes";
import { Button, FixedBottomButton } from "@/shared/ui";

export const HomePage = () => {
  const { push } = useRouter();

  return (
    <main className="flex h-full flex-col justify-center bg-white px-4">
      <div className="mb-12 text-center">
        <div className="mb-6 flex justify-center text-6xl">
          <MapPinCheck className="size-12" />
        </div>
        <h1 className="mb-4 text-4xl font-bold text-gray-900">트립 보드</h1>
        <p className="text-brand-500 mb-4 text-lg font-medium">
          함께 만드는 여행 계획
        </p>
        <p className="px-4 text-sm leading-relaxed text-gray-600">
          친구들과 여행 아이디어를 공유하고
          <br />
          투표해서 완벽한 일정을 만들어보세요
        </p>
      </div>

      <div className="mb-14 space-y-6">
        <div className="flex items-start space-x-4">
          <div className="bg-brand-100 text-brand-600 mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold">
            1
          </div>
          <div>
            <p className="mb-1 font-semibold text-gray-900">아이디어 수집</p>
            <p className="text-sm text-gray-600">
              여행지, 맛집, 활동을 자유롭게 추가
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-brand-100 text-brand-600 mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold">
            2
          </div>
          <div>
            <p className="mb-1 font-semibold text-gray-900">투표로 결정</p>
            <p className="text-sm text-gray-600">
              팀원들과 함께 최고의 선택지를 결정
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-brand-100 text-brand-600 mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold">
            3
          </div>
          <div>
            <p className="mb-1 font-semibold text-gray-900">타임라인 완성</p>
            <p className="text-sm text-gray-600">
              선택된 계획을 시간순으로 정리
            </p>
          </div>
        </div>
      </div>

      <FixedBottomButton
        size="default"
        variant="brand"
        className="w-full"
        onClick={() => push(PAGE_ROUTES.CREATE)}
      >
        여행 계획 시작하기
      </FixedBottomButton>
    </main>
  );
};
