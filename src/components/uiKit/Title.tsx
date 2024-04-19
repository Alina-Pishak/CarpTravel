type Props = {
  children: string;
  extraProps?: string;
};

export default function Title({ children, extraProps }: Props) {
  return (
    <h2
      className={`font-medium text-l uppercase tracking-1 mb-6 ${extraProps}`}
    >
      <span className="font-thin">{children.split(" ")[0]}&nbsp;</span>
      {children
        .split(" ")
        .slice(1, children.length - 1)
        .join(" ")}
    </h2>
  );
}
