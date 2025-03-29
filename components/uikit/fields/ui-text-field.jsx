import { UiFieldInput } from "./ui-field-input";
import { UiFieldLabel } from "./ui-field-label";
import { UiFieldMessage } from "./ui-field-message";

/**
 * @param {{
 * id?: string,
 * label?: string,
 * required?: boolean,
 * helperText?: string,
 * errorText?: string,
 * className: string,
 * } & import('react').HTMLAttributes<HTMLInputElement>} props
 */

export function UiTextField({
  id,
  label,
  required,
  helperText,
  errorText,
  className,
  ...inputProps
}) {
  return (
    <div className={className}>
      {label && <UiFieldLabel id={id} label={label} required={required} />}
      <UiFieldInput
        id={id}
        required={required}
        errorText={errorText}
        {...inputProps}
      />
      {(helperText || errorText) && (
        <UiFieldMessage helperText={helperText} errorText={errorText} />
      )}
    </div>
  );
}
