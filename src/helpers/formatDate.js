import { intlFormat } from "date-fns";

export function formatDate(dateString) {
  const result = intlFormat(dateString, {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  return result;
}
