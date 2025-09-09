"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTripSchema, type CreateTripFormData } from "../lib/schema";
import { Button, FixedBottomButton, Input } from "@/shared/ui";
import { useRouter } from "next/navigation";
import { PAGE_ROUTES } from "@/shared/constants/page-routes";

export const CreatePage = () => {
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateTripFormData>({
    resolver: zodResolver(createTripSchema),
  });

  const onSubmit = async (data: CreateTripFormData) => {
    try {
      console.log("여행 생성 데이터:", data);
      // TODO: API 호출 로직 구현
      push(PAGE_ROUTES.GATHER);
    } catch (error) {
      console.error("여행 생성 실패:", error);
    }
  };

  return (
    <div className="h-full px-6 pt-8">
      <h1 className="mb-2 text-2xl font-bold">여행 생성</h1>
      <p className="mb-8 text-sm text-gray-600">
        함께할 여행의 기본 정보를 입력해주세요
      </p>

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="title"
          type="text"
          label="일정명"
          placeholder="여행 일정명을 입력하세요"
          error={errors.title?.message}
          {...register("title")}
        />

        <Input
          id="destination"
          type="text"
          label="여행지"
          placeholder="여행지를 입력하세요"
          error={errors.destination?.message}
          {...register("destination")}
        />

        <Input
          id="startDate"
          type="date"
          label="여행 시작일"
          error={errors.startDate?.message}
          {...register("startDate")}
        />

        <Input
          id="endDate"
          type="date"
          label="여행 종료일"
          error={errors.endDate?.message}
          {...register("endDate")}
        />

        <FixedBottomButton
          type="submit"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? "생성 중..." : "여행 생성"}
        </FixedBottomButton>
      </form>
    </div>
  );
};
