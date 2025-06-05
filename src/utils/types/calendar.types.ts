export interface CalendarEvent {
  id: number;
  title: string;
  day: number;
  startTime: string;
  endTime: string;
  color: string;
}

export interface TimeSlot {
  value: string;
  display: string;
}

export interface MonthDay {
  date: Date;
  isCurrentMonth: boolean;
}

export interface EventPosition {
  top: string;
  height: string;
}

export interface SelectedSlot {
  day: number;
  time: string;
}

export interface NewEventForm {
  title: string;
  startTime: string;
  endTime: string;
}

export type ViewType = "Week" | "Month";

export interface CalendarProps {
  initialDate?: Date;
  initialView?: ViewType;
  initialEvents?: CalendarEvent[];
  onEventAdd?: (event: CalendarEvent) => void;
  onEventClick?: (event: CalendarEvent) => void;
  onDateChange?: (date: Date) => void;
  onViewChange?: (view: ViewType) => void;
  className?: string;
}

export interface Items {
  page: string;
  link: string;
  icons: string;
}
[];
