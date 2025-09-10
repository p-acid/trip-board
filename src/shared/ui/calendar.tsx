"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/shared/utils/cn";
import dayjs, { Dayjs } from "dayjs";

interface CalendarProps {
  startDate?: Date;
  endDate?: Date;
  onDateSelect?: (startDate: Date | null, endDate: Date | null) => void;
  className?: string;
}

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];
const MONTHS = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
];

export const Calendar = ({
  startDate,
  endDate,
  onDateSelect,
  className,
}: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedStart, setSelectedStart] = useState<Dayjs | null>(
    startDate ? dayjs(startDate) : null,
  );
  const [selectedEnd, setSelectedEnd] = useState<Dayjs | null>(
    endDate ? dayjs(endDate) : null,
  );
  const [isSelectingEnd, setIsSelectingEnd] = useState(false);

  const year = currentDate.year();
  const month = currentDate.month();

  const firstDayOfMonth = currentDate.startOf("month");
  const lastDayOfMonth = currentDate.endOf("month");
  const startDay = firstDayOfMonth.day();
  const daysInMonth = lastDayOfMonth.date();

  const prevMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };

  const nextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };

  const handleDateClick = (day: number) => {
    const clickedDate = dayjs().year(year).month(month).date(day);

    if (!selectedStart || (selectedStart && selectedEnd)) {
      // 첫 번째 날짜 선택
      setSelectedStart(clickedDate);
      setSelectedEnd(null);
      setIsSelectingEnd(true);
      onDateSelect?.(clickedDate.toDate(), null);
    } else if (isSelectingEnd) {
      // 두 번째 날짜 선택
      if (clickedDate.isBefore(selectedStart)) {
        // 시작일보다 이른 날짜를 선택한 경우, 시작일을 변경
        setSelectedStart(clickedDate);
        setSelectedEnd(selectedStart);
      } else {
        setSelectedEnd(clickedDate);
      }
      setIsSelectingEnd(false);
      onDateSelect?.(
        selectedStart.toDate(),
        clickedDate.isBefore(selectedStart)
          ? selectedStart.toDate()
          : clickedDate.toDate(),
      );
    }
  };

  const isDateInRange = (day: number) => {
    if (!selectedStart || !selectedEnd) return false;
    const date = dayjs().year(year).month(month).date(day);
    return (
      (date.isAfter(selectedStart) || date.isSame(selectedStart)) &&
      (date.isBefore(selectedEnd) || date.isSame(selectedEnd))
    );
  };

  const isStartDate = (day: number) => {
    if (!selectedStart) return false;
    const date = dayjs().year(year).month(month).date(day);
    return date.isSame(selectedStart, "day");
  };

  const isEndDate = (day: number) => {
    if (!selectedEnd) return false;
    const date = dayjs().year(year).month(month).date(day);
    return date.isSame(selectedEnd, "day");
  };

  const isToday = (day: number) => {
    const today = dayjs();
    const date = dayjs().year(year).month(month).date(day);
    return date.isSame(today, "day");
  };

  const isPastDate = (day: number) => {
    const today = dayjs().startOf("day");
    const date = dayjs().year(year).month(month).date(day).startOf("day");
    return date.isBefore(today);
  };

  const renderCalendarDays = () => {
    const days = [];

    // 이전 달의 빈 칸들
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-12" />);
    }

    // 현재 달의 날짜들
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = isStartDate(day) || isEndDate(day);
      const isInRange = isDateInRange(day);
      const isDisabled = isPastDate(day);
      const isTodayDate = isToday(day);

      days.push(
        <button
          key={day}
          type="button"
          onClick={() => !isDisabled && handleDateClick(day)}
          disabled={isDisabled}
          className={cn(
            "h-12 w-full rounded-lg text-sm font-medium transition-colors",
            "focus:ring-brand-500 hover:bg-brand-50 focus:outline-none focus:ring-2",
            {
              "bg-brand-500 hover:bg-brand-500 text-white": isSelected,
              "bg-brand-100 text-brand-800": isInRange && !isSelected,
              "cursor-not-allowed text-gray-400 hover:bg-transparent":
                isDisabled,
              "text-brand-400 font-bold":
                isTodayDate && !isSelected && !isDisabled,
              "text-foreground":
                !isSelected && !isInRange && !isTodayDate && !isDisabled,
            },
          )}
        >
          {day}
        </button>,
      );
    }

    return days;
  };

  return (
    <div className={cn("rounded-xl bg-white", className)}>
      <div className="mb-6 flex items-center justify-between">
        <button
          type="button"
          onClick={prevMonth}
          className="rounded-lg p-2 transition-colors hover:bg-gray-100"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <h2 className="text-foreground text-lg font-semibold">
          {year}년 {MONTHS[month]}
        </h2>

        <button
          type="button"
          onClick={nextMonth}
          className="rounded-lg p-2 transition-colors hover:bg-gray-100"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mb-2 grid grid-cols-7 gap-1">
        {WEEKDAYS.map((day) => (
          <div
            key={day}
            className="flex h-10 items-center justify-center text-sm font-medium text-gray-500"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">{renderCalendarDays()}</div>
    </div>
  );
};
