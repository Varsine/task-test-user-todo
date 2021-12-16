export type CommentFile = {
  id: number;
  name: string;
  source: string;
};

export interface IUserApproval {
  name: string;
  date: string;
  event: string;
  files?: CommentFile[];
}
