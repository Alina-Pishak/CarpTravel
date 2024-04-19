import clsx from "clsx";

type Props = {
  children: string;
  extraProps?: string;
};

export default function Text({ children, extraProps }: Props) {
  return (
    <p className={`font-extralight text-sm w-45 ${extraProps}`}>{children}</p>
  );
}
