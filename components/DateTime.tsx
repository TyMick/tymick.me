import { format, formatISO } from "date-fns";

type DateTimeProps = {
  /** Date and time in ISO format. */
  date: string;
  formatString: string;
};

export default function DateTime({
  date: dateString,
  formatString,
}: DateTimeProps) {
  const date = new Date(dateString);
  return <time dateTime={formatISO(date)}>{format(date, formatString)}</time>;
}
