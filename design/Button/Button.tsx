import clsx from "clsx";

export type ButtonProps = {
  children: React.ReactNode;
  type?: "success" | "error" | "transparent";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  type = "transparent",
  size = "medium",
  onClick,
}) => {
  return (
    <button
      className={clsx(
        "w-full font-semibold border-2 rounded-xl",
        type === "success" &&
          "bg-green-200 hover:bg-green-300 text-green-900 border-green-500",
        type === "error" &&
          "bg-red-200 hover:bg-red-300 text-red-900 border-red-500",
        type === "transparent" &&
          "hover:bg-blue-100 text-blue-900 border-blue-600",
        size === "small" && "text-sm p-1",
        size === "medium" && "p-2",
        size === "large" && "text-lg p-4"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
