import { debounce } from "@mui/material";
import { ChangeEvent } from "react";
export function useDebounce(
  func: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  wait: number
) {
  debounce(func, wait);
}
