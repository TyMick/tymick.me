import { parseISO, format } from "date-fns";

export default function DateTime({ isoString, formatString }) {
  const date = parseISO(isoString);
  return <time dateTime={isoString}>{format(date, formatString)}</time>;
}
