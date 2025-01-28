import { cn } from "@tx/util-helpers";
import * as React from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

// import { cn } from "@/lib/utils"
// import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      captionLayout="dropdown"
      className={cn("p-3 ", className)}
      classNames={{
        months:
          "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 ",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_dropdowns: "flex gap-2 focus:border-none",
        vhidden: "hidden",
        caption_label: "text-sm hidden font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        dropdown: "focus:outline-none",
        cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          // buttonVariants({ variant: "ghost" }),
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
          "hover:bg-gray-200",
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
        ),
        day_selected:
          "bg-primary text-white hover:bg-primary hover:text-primary focus:bg-primary focus:text-white",
        day_today: "bg-slate-100 text-accent-foreground",
        day_outside: "text-muted-foreground opacity-50",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <BiChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <BiChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
