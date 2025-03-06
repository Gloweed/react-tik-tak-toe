import clsx from "clsx";

/**
 * @param {{
 * required?: boolean,
 * errorText?: string,
 * } & import('react').HTMLAttributes<HTMLInputElement>} props
 */

export function UiFieldInput({ required, errorText, ...inputProps }) {
  return (
    <input
      type="email"
      id="example2"
      required={required}
      className={clsx([
        errorText
          ? "focus:border-orange-600 focus:ring-orange-600/20 border-orange-600"
          : "focus:border-teal-600 focus:ring-teal-600/20 border-slate-200",
        `
              py-2 px-2 leading-tight outline-0 border
              block w-full rounded-md  shadow-sm
              focus:ring  focus:ring-opacity-50"
              disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500
              `,
      ])}
      {...inputProps}
    />
  );
}
