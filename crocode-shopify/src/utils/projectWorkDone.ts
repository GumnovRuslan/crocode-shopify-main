import type { TProjectWorkDone } from "../types/templates/project";

export function formatProjectWorkDone(workDone: TProjectWorkDone | undefined): string {
  if (typeof workDone === "string") return workDone;
  return (workDone ?? []).map((category) => category.categoryName).filter(Boolean).join(", ");
}
