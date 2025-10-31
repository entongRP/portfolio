import { DayPicker } from "react-day-picker";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "./utils";

interface CalendarProps {
  className?: string;
  classNames?: any;
  showOutsideDays?: boolean;
  [key: string]: any;
}

export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const components: any = {
    IconLeft: (props: { className?: string }) => (
      <ChevronLeft className={cn("size-4", props.className)} />
    ),
    IconRight: (props: { className?: string }) => (
      <ChevronRight className={cn("size-4", props.className)} />
    ),
  };

  return (
    <DayPicker
      className={className}
      classNames={classNames}
      showOutsideDays={showOutsideDays}
      components={components}
      {...props}
    />
  );
}
