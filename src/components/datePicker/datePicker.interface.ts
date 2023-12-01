export interface IDatePickerInterProps {
  onPressClose: () => void;

  selectedDate: string;

  selectedWeek: Array<string>;

  setSelectedWeek: (week: Array<string>) => void;

  setSelectedDate: (date: string) => void;
}
