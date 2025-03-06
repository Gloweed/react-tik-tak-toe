import clsx from "clsx";

/**
 * @param {{
 * children: any,
 * className: string,
 * size: 'md' | 'lg',
 * variant: 'primary' | 'outline'
 * }} props
 */

export function UiButton({ children, className, size, variant }) {
  const buttonClassName = clsx(
    "cursor-pointer transition-colors",
    className,
    {
      md: "px-6 py-2 text-sm leading-tight rounded",
      lg: "px-5 py-2 text-2xl leading-tight rounded-lg",
    }[size],
    {
      primary: "bg-teal-600 hover:bg-teal-500 text-white",
      outline: "border border-teal-600 text-teal-600 hover:bg-teal-50",
    }[variant],
  );
  return <button className={buttonClassName}>{children}</button>;
}
