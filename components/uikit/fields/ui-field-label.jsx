import clsx from "clsx";

/**
 * @param {{
 * id?: string,
 * label?: string,
 * required?: boolean,
 * }} props
 */

export function UiFieldLabel({ id, label, required }) {
  return (
    <label
      for={id}
      className={clsx(
        required && " after:text-orange-600 after:content-['*']",
        "mb-1 block text-sm font-medium after:ml-0.5",
      )}
    >
      {label}
    </label>
  );
}
