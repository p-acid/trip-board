import { z } from "zod";
import dayjs from "dayjs";

export const createTripSchema = z
  .object({
    title: z
      .string()
      .min(1, "일정명을 입력해주세요")
      .max(50, "일정명은 50자 이하로 입력해주세요"),
    destination: z
      .string()
      .min(1, "여행지를 입력해주세요")
      .max(100, "여행지는 100자 이하로 입력해주세요"),
    startDate: z
      .string()
      .min(1, "여행 시작일을 선택해주세요")
      .refine((date) => dayjs(date).isValid(), "올바른 날짜 형식이 아닙니다"),
    endDate: z
      .string()
      .min(1, "여행 종료일을 선택해주세요")
      .refine((date) => dayjs(date).isValid(), "올바른 날짜 형식이 아닙니다"),
  })
  .refine(
    (data) => {
      const startDate = dayjs(data.startDate);
      const endDate = dayjs(data.endDate);
      return startDate.isBefore(endDate) || startDate.isSame(endDate);
    },
    {
      message: "여행 종료일은 시작일 이후여야 합니다",
      path: ["endDate"],
    },
  );

export type CreateTripFormData = z.infer<typeof createTripSchema>;
