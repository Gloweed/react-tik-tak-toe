import clsx from "clsx";

/**
 * @param {{
 * children: any,
 * className: string,
 * size: 'md' | 'lg' | 'lg2',
 * variant: 'primary' | 'outline' | 'disabled'
 * }} props
 */

export function UiButton({
  children,
  className,
  size,
  variant,
  type,
  onClick,
}) {
  const buttonClassName = clsx(
    "cursor-pointer transition-colors",
    className,
    {
      md: "px-6 py-2 text-sm leading-tight rounded",
      lg: "px-5 py-2 text-2xl leading-tight rounded-lg",
      lg2: "px-5 py-4 text-lg rounded-lg",
    }[size],
    {
      primary: "bg-teal-600 hover:bg-teal-500 text-white",
      outline: "border border-teal-600 text-teal-600 hover:bg-teal-50",
      disabled: "bg-gray-200 hover:cursor-not-allowed text-white",
    }[variant],
  );
  return (
    <button
      type={type}
      className={buttonClassName}
      onClick={variant !== "disabled" ? onClick : undefined}
    >
      {children}
    </button>
  );
}
