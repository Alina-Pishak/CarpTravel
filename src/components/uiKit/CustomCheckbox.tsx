import clsx from "clsx";

type Props = {
  checked: boolean;
  setChecked: (value: boolean) => void;
};

export default function CustomCheckbox({ checked, setChecked }: Props) {
  return (
    <div
      onClick={() => setChecked(!checked)}
      className={clsx("custom-checkbox ", checked ? "checked" : "not-checked")}
    ></div>
  );
}
