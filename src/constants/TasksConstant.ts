import { Task } from '..';

const TaskObject: Task = {
  name: '',
  isCompleted: false,
  description: '',
  notes: '',
  plannedDate: undefined,
  createdAt: undefined,
  updatedAt: undefined,
  evaluationApproved: false,
};

/**
 * Evaluating Tasks
 */
export enum EvaluatingTasks {
  SCHEDULE_TOUR = 'SCHEDULE_TOUR',
  EDUCATOR_TOUR_EVALUATION = 'EDUCATOR_TOUR_EVALUATION',
  FAMILY_TOUR_EVALUATION = 'FAMILY_TOUR_EVALUATION',
}

/**
 * Reserved Tasks
 */
export enum ReservedTasks {
  RECEIVE_DEPOSIT_INVOICE = 'RECEIVE_DEPOSIT_INVOICE',
  PAY_DEPOSIT = 'PAY_DEPOSIT',
  SIGN_CONTRACT = 'SIGN_CONTRACT',
  RECEIVE_CONTRACT = 'RECEIVE_CONTRACT',
  RECEIVE_ENROLLMENT_FORMS = 'RECEIVE_ENROLLMENT_FORMS',
}

/**
 * Contracted Tasks
 */
export enum ContractedTasks {
  RECEIVE_INVOICE_FOR_FIRST_SERVICE_PERIOD = 'RECEIVE_INVOICE_FOR_FIRST_SERVICE_PERIOD',
  PAY_INVOICE_FOR_FIRST_SERVICE_PERIOD = 'PAY_INVOICE_FOR_FIRST_SERVICE_PERIOD',
  RECURRING_INVOICE_SET_UP = 'RECURRING_INVOICE_SET_UP',
}
export function getEvaluatingTask(evaluatingTask: EvaluatingTasks): Task {
  switch (evaluatingTask) {
    case EvaluatingTasks.SCHEDULE_TOUR:
      return {
        ...TaskObject,
        name: 'Schedule Tour',
        description: 'Enter Tour time and date',
      };
    case EvaluatingTasks.EDUCATOR_TOUR_EVALUATION:
      return {
        ...TaskObject,
        name: 'Educator Tour Evaluation',
        description: 'Update Evaluation Results',
      };
    case EvaluatingTasks.FAMILY_TOUR_EVALUATION:
      return {
        ...TaskObject,
        name: 'Family Tour Evaluation',
        description: 'Update Evaluation Results',
      };
    default:
      return TaskObject;
  }
}

export function getReservedTask(reservedTask: ReservedTasks): Task {
  switch (reservedTask) {
    case ReservedTasks.RECEIVE_DEPOSIT_INVOICE:
      return {
        ...TaskObject,
        name: 'Receive Deposit Invoice',
        description:
          'Mark complete once you\'ve sent the Deposit Invoice to the family.',
      };
    case ReservedTasks.PAY_DEPOSIT:
      return {
        ...TaskObject,
        name: 'Pay Deposit',
        description: 'Mark complete once the family has paid the deposit.',
      };
    case ReservedTasks.SIGN_CONTRACT:
      return {
        ...TaskObject,
        name: 'Sign Contract',
        description: 'Mark complete once the family has signed the contract.',
      };
    case ReservedTasks.RECEIVE_CONTRACT:
      return {
        ...TaskObject,
        name: 'Receive Contract',
        description:
          'Mark complete once you\'ve sent the Contract to the family.',
      };
    case ReservedTasks.RECEIVE_ENROLLMENT_FORMS:
      return {
        ...TaskObject,
        name: 'Receive Enrollment Forms',
        description:
          'Mark complete once you\'ve sent the Enrollment Forms to the family.',
      };
    default:
      return TaskObject;
  }
}

export function getContractedTask(contractedTask: ContractedTasks): Task {
  switch (contractedTask) {
    case ContractedTasks.RECEIVE_INVOICE_FOR_FIRST_SERVICE_PERIOD:
      return {
        ...TaskObject,
        name: 'Receive Invoice For First Service Period',
        description:
          'Mark complete once you\'ve sent the Invoice For First Service Period to the family.',
      };
    case ContractedTasks.PAY_INVOICE_FOR_FIRST_SERVICE_PERIOD:
      return {
        ...TaskObject,
        name: 'Pay Invoice For First Service Period',
        description:
          'Mark complete once the family has paid the Invoice For First Service Period.',
      };
    case ContractedTasks.RECURRING_INVOICE_SET_UP:
      return {
        ...TaskObject,
        name: 'Recurring Invoice Set Up',
        description:
          'Mark complete once the Recurring Invoice has been set.',
      };
    default:
      return TaskObject;
  }
}
