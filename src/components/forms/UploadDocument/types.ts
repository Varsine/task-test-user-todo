export interface TransferedFile {
  id?: string;
  name: string;
  size: string;
  source: string;
}

export interface ISelectedFile extends File {
  id: string;
}
