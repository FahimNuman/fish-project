import { twMerge } from "tailwind-merge";

function TopHeading({
  text,
  color = "text-primary",
  className,
}: {
  text: string;
  color?: "text-white" | "text-primary" | "text-secondary";
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        color,
        "text-md flex items-center gap-2 z-20",
        className
      )}
    >
      <p className="text-sm md:text-base">{text}</p>
    </div>
  );
}

export default TopHeading;
