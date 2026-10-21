import ArrowSvg from "../../assets/ArrowSvg";
import { cn } from "../../lib/utils";

export default function Button({ className }: { className?: string }) {
  return (
    <button
      className={cn(
        "inline-flex items-center text-primary-foreground bg-primary border-0 py-1 px-3 focus:outline-none hover:bg-pink-900 rounded text-base mt-4 md:mt-0 cursor-pointer transition-all",
        className,
      )}
    >
      GitHub
      <ArrowSvg className="w-4 h-4 ml-1 -rotate-45" />
    </button>
  );
}
