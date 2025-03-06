import { UiFieldInput } from "./ui-field-input";
import { UiFieldLabel } from "./ui-field-label";
import { UiFieldMessage } from "./ui-field-message";

/**
 * @param {{
 * label?: string,
 * required?: boolean,
 * helperText?: string,
 * errorText?: string,
 * className: string,
 * } & import('react').HTMLAttributes<HTMLInputElement>} props
 */

export function UiTextField({
  label,
  required,
  helperText,
  errorText,
  className,
  ...inputProps
}) {
  return (
    <div className={className}>
      {label && <UiFieldLabel label={label} required={required} />}
      <UiFieldInput required={required} errorText={errorText} {...inputProps} />
      {(helperText || errorText) && (
        <UiFieldMessage helperText={helperText} errorText={errorText} />
      )}
    </div>
  );
}
