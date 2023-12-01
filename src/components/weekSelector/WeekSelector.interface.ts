export interface IWeekSelectorProps {
  selectedDate: string;

  dateRange: string;

  onWeekPress?: () => void;

  setSelectedWeek: (week: Array<string>) => void;

  setSelectedDate: (date: string) => void;
}
