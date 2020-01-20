export interface SlotAvailability {
  totalSlots: number;
  isAvailable: boolean;
  isMatchedNumberOfKids: boolean;
  isMatchedHoursOfDay: boolean;
  isMatchedDaysOfWeek: boolean;
  isMatchedPreferredStartDate: boolean;
}
