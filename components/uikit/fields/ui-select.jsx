import { UiFieldSelect } from "./ui-field-select";
import { UiFieldLabel } from "./ui-field-label";
import { UiFieldMessage } from "./ui-field-message";

/**
 * @param {{
 * label?: string,
 * required?: boolean,
 * helperText?: string,
 * errorText?: string,
 * objectParams: object,
 * className?: string,
 * } & import('react').HTMLAttributes<HTMLInputElement>} props
 */

export function UiSelect({
  label,
  required,
  helperText,
  errorText,
  objectParams,
  className,
}) {
  return (
    <div className={className}>
      {label && <UiFieldLabel label={label} required={required} />}
      <UiFieldSelect errorText={errorText} objectParams={objectParams} />
      {(helperText || errorText) && (
        <UiFieldMessage helperText={helperText} errorText={errorText} />
      )}
    </div>
  );
}
