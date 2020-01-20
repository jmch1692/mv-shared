export interface Task {
  name: string;
  isCompleted: boolean;
  description: string;
  notes?: string;
  plannedDate?: Date;
  evaluationApproved?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
