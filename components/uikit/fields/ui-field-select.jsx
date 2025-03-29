import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";
import { ArrowDownIcon } from "../../header/icons/arrow-down-icon";

/**
 * @param {{
 * errorText?: string,
 * objectParam: object,
 * }} props
 */

export function UiFieldSelect({ errorText, objectParams }) {
  const [selected, setSelected] = useState(objectParams[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <ListboxButton
        className={clsx(
          errorText
            ? "focus:border-orange-600 focus:ring-orange-600/20 border-orange-600"
            : "focus:border-teal-600 focus:ring-teal-600/20 border-slate-200",
          "relative flex items-center justify-between gap-2 w-full rounded px-6 py-2 text-sm leading-tight border",
          "focus:ring focus:ring-opacity-50 shadow-sm outline-0  transition-colors truncate",
        )}
      >
        {selected.value}
        <ArrowDownIcon />
      </ListboxButton>
      <ListboxOptions
        anchor="bottom"
        transition
        className={clsx(
          "w-[var(--button-width)] p-1 rounded border text-sm [--anchor-gap:4px]",
          "border-slate-200 shadow-sm outline-0 bg-white",
        )}
      >
        {objectParams.map((param) => (
          <ListboxOption
            key={param.id}
            value={param}
            className={clsx(
              "transition-colors group rounded px-6 py-2 select-none",
              "hover:bg-teal-600 hover:text-white data-[focus]:bg-teal-600 data-[focus]:text-white",
            )}
          >
            <div>{param.value}</div>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}
