/*
Note: to getStartDate we need to keep the order match status
 according to the business logic order.
 */
export enum MatchStatusEnum {
  INTERESTED = 'Interested',
  EVALUATING = 'Evaluating',
  RESERVED = 'Reserved',
  CONTRACTED = 'Contracted',
  ENROLLED = 'Enrolled',
  UNENROLLED = 'Unenrolled',
  ABANDONED = 'Abandoned',
  OSA = 'Osa',
  UNQUALIFIED = 'Unqualified',
  UNRESPONSIVE = 'Unresponsive',
  LEAD_WAITLIST = 'Lead Waitlist',
}
