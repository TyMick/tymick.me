import clsx from "clsx";

export default function ThematicBreak({
  className,
  ...props
}: React.ComponentProps<"hr">) {
  return (
    <hr
      className={clsx(className, "border-secondary my-4")}
      css={{ width: "5rem" }}
      {...props}
    />
  );
}
