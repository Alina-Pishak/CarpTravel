import { chooseSomeWords } from "@/helpers/chooseSomeWords";

type Props = {
  children: string;
  extraProps?: string;
};

export default function Title({ children, extraProps }: Props) {
  return (
    <h2
      className={`font-medium text-l uppercase tracking-1 md:text-6xl  xl:text-8xl ${extraProps}`}
    >
      <span className="font-thin">{children.split(" ")[0]}&nbsp;</span>
      {chooseSomeWords(children, 1, children.length - 1)}
    </h2>
  );
}
