import clsx from "clsx";

type Props = {
  checked: boolean;
  setChecked: (value: boolean) => void;
};

export default function CustomCheckbox({ checked, setChecked }: Props) {
  return (
    <div
      onClick={() => setChecked(!checked)}
      className={clsx(
        " after:w-6 after:h-6 after:absolute after:top-0 after:left-0 ",
        checked
          ? "after:content-[url('/img/checkbox-checked.svg')]"
          : "after:content-[url('/img/checkbox.svg')]"
      )}
    ></div>
  );
}
