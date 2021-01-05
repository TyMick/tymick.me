import { format, formatISO } from "date-fns";

type DateTimeProps = {
  date: Date | string;
  formatString: string;
};

export default function DateTime({ date, formatString }: DateTimeProps) {
  const jsDate = new Date(date);
  return (
    <time dateTime={formatISO(jsDate)}>{format(jsDate, formatString)}</time>
  );
}
