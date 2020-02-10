import { DaysOfWeekEnum } from '..';

export interface CareNeeds {
    days: DaysOfWeekEnum[];
    end: string;
    start: string;
    type: string;
    studentId?: string;
}
