export type SearchProps = {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  filterSearch: (e: string) => void;
};
