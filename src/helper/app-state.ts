import { signal } from "@preact/signals";
import type { AppStateType } from "@models/index";

export const createAppState = (): AppStateType => {
  const firstString = signal<string>("0");
  const secondString = signal<string>("");
  const operator = signal<string>("");

  return {
    firstString,
    secondString,
    operator,
  };
};
