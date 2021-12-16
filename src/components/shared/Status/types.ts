export type StatusType =
  | 'draft'
  | 'active'
  | 'pending'
  | 'blocked'
  | 'inactive'
  | 'executed'
  | 'validated'
  | 'non-agreed'
  | 'not-executed'
  | 'not-validated';

export interface IStatusProps {
  type: StatusType;
  className?: string;
}
