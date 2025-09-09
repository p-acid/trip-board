"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTripSchema, type CreateTripFormData } from "../lib/schema";
import { FixedBottomButton, Input } from "@/shared/ui";
import { useRouter } from "next/navigation";
import { PAGE_ROUTES } from "@/shared/constants/page-routes";
import { ChevronLeft } from "lucide-react";

const STEPS = {
  TITLE: 0,
  DESTINATION: 1,
  DATES: 2,
} as const;

const STEP_TITLES = {
  [STEPS.TITLE]: "일정명을 입력해주세요",
  [STEPS.DESTINATION]: "여행지를 입력해주세요",
  [STEPS.DATES]: "여행 일정을 선택해주세요",
};

export const CreatePage = () => {
  const { push, back } = useRouter();
  const [currentStep, setCurrentStep] = useState<number>(STEPS.TITLE);

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<CreateTripFormData>({
    resolver: zodResolver(createTripSchema),
    mode: "onSubmit",
  });

  const watchedValues = watch();

  const onSubmit = async (data: CreateTripFormData) => {
    try {
      console.log("여행 생성 데이터:", data);
      // TODO: API 호출 로직 구현
      push(PAGE_ROUTES.GATHER);
    } catch (error) {
      console.error("여행 생성 실패:", error);
    }
  };

  const handleNext = async () => {
    const fieldsToValidate: (keyof CreateTripFormData)[] = [];

    switch (currentStep) {
      case STEPS.TITLE:
        fieldsToValidate.push("title");
        break;
      case STEPS.DESTINATION:
        fieldsToValidate.push("destination");
        break;
      case STEPS.DATES:
        fieldsToValidate.push("startDate", "endDate");
        break;
    }

    const isValid = await trigger(fieldsToValidate);

    if (isValid) {
      if (currentStep < STEPS.DATES) {
        setCurrentStep(currentStep + 1);
        // 다음 단계로 넘어갈 때 에러 상태 초기화
        clearErrors();
      }
    }
  };

  const handleBack = () => {
    if (currentStep > STEPS.TITLE) {
      setCurrentStep(currentStep - 1);
      // 이전 단계로 돌아갈 때 에러 상태 초기화
      clearErrors();
    } else {
      back();
    }
  };

  const getButtonText = () => {
    if (currentStep === STEPS.DATES) {
      return isSubmitting ? "생성 중..." : "여행 생성";
    }
    return "다음";
  };

  const isStepValid = () => {
    switch (currentStep) {
      case STEPS.TITLE:
        return watchedValues.title && watchedValues.title.trim().length > 0;
      case STEPS.DESTINATION:
        return (
          watchedValues.destination &&
          watchedValues.destination.trim().length > 0
        );
      case STEPS.DATES:
        return watchedValues.startDate && watchedValues.endDate;
      default:
        return false;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case STEPS.TITLE:
        return (
          <div key={currentStep} className="space-y-6">
            <Input
              id="title"
              type="text"
              placeholder="예: 제주도 힐링 여행"
              error={errors.title?.message}
              {...register("title")}
              autoFocus
            />
          </div>
        );

      case STEPS.DESTINATION:
        return (
          <div key={currentStep} className="space-y-6">
            <Input
              id="destination"
              type="text"
              placeholder="예: 제주도, 부산, 서울"
              error={errors.destination?.message}
              {...register("destination")}
              autoFocus
            />
          </div>
        );

      case STEPS.DATES:
        return (
          <div className="space-y-6">
            <Input
              id="startDate"
              type="date"
              label="시작일"
              error={errors.startDate?.message}
              {...register("startDate")}
            />

            <Input
              id="endDate"
              type="date"
              label="종료일"
              error={errors.endDate?.message}
              {...register("endDate")}
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center px-4 py-3">
        <button
          type="button"
          onClick={handleBack}
          className="-ml-2 cursor-pointer p-2 text-gray-600 transition-colors hover:text-gray-900"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <div className="flex-1 text-center text-base font-semibold text-gray-700">
          여행 생성하기
        </div>
        <div className="w-10" />
      </div>

      <div className="flex-1 px-6 pt-6">
        <h1 className="mb-8 text-2xl font-bold text-gray-900">
          {STEP_TITLES[currentStep as keyof typeof STEP_TITLES]}
        </h1>

        <form>
          {renderStepContent()}
          <FixedBottomButton
            type="submit"
            onClick={
              currentStep === STEPS.DATES ? handleSubmit(onSubmit) : handleNext
            }
            disabled={
              !isStepValid() || (currentStep === STEPS.DATES && isSubmitting)
            }
            className="w-full"
          >
            {getButtonText()}
          </FixedBottomButton>
        </form>
      </div>
    </div>
  );
};
