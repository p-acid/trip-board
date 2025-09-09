"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTripSchema, type CreateTripFormData } from "../lib/schema";
import { Button } from "@/shared/ui";
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
    <div className="mx-auto max-w-md p-6">
      <h1 className="mb-6 text-2xl font-bold">여행 생성</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="title" className="mb-1 block text-sm font-medium">
            일정명
          </label>
          <input
            id="title"
            type="text"
            {...register("title")}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="여행 일정명을 입력하세요"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="destination"
            className="mb-1 block text-sm font-medium"
          >
            여행지
          </label>
          <input
            id="destination"
            type="text"
            {...register("destination")}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="여행지를 입력하세요"
          />
          {errors.destination && (
            <p className="mt-1 text-sm text-red-500">
              {errors.destination.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="startDate" className="mb-1 block text-sm font-medium">
            여행 시작일
          </label>
          <input
            id="startDate"
            type="date"
            {...register("startDate")}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.startDate && (
            <p className="mt-1 text-sm text-red-500">
              {errors.startDate.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="endDate" className="mb-1 block text-sm font-medium">
            여행 종료일
          </label>
          <input
            id="endDate"
            type="date"
            {...register("endDate")}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.endDate && (
            <p className="mt-1 text-sm text-red-500">
              {errors.endDate.message}
            </p>
          )}
        </div>

        <Button type="submit" disabled={isSubmitting} className="mt-4 w-full">
          {isSubmitting ? "생성 중..." : "여행 생성"}
        </Button>
      </form>
    </div>
  );
};
