import clsx from "clsx";

/**
 * @param {{
 * label?: string,
 * required?: boolean,
 * }} props
 */

export function UiFieldLabel({ label, required }) {
  return (
    <label
      for="example2"
      className={clsx(
        required && " after:text-orange-600 after:content-['*']",
        "mb-1 block text-sm font-medium after:ml-0.5",
      )}
    >
      {label}
    </label>
  );
}
