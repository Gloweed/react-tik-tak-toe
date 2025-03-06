import clsx from "clsx";

/**
 * @param {{
 * helperText?: string,
 * errorText?: string,
 * }} props
 */

export function UiFieldMessage({ helperText, errorText }) {
  return (
    <p
      className={clsx(
        errorText ? "text-orange-600" : "text-slate-400",
        "mt-1 text-sm",
      )}
    >
      {errorText ?? helperText}
    </p>
  );
}
