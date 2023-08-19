import { SetStateAction } from "react";

export interface IQueryInput {
  query: string;
  setQuery: React.Dispatch<SetStateAction<string>>;
  onSendMes: () => void;
}