import { StudentActivityType, Student } from '..';

export interface StudentActivityInterface {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  studentId?: string;
  studentActivityTypeId?: string;
  student?: Student;
  studentActivityType?: StudentActivityType;
  startDate?: string;
  endDate?: string;
  notes?: string;
}
