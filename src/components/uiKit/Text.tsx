import { chooseSomeWords } from "@/helpers/chooseSomeWords";

type Props = {
  children: string;
  extraProps?: string;
  wordCount?: number;
};

export default function Text({ children, extraProps, wordCount }: Props) {
  return wordCount ? (
    <p
      className={`font-extralight text-sm w-45 md:text-base md:leading-[1.2] xl:text-lg xl:leading-[1.33] ${extraProps}`}
    >
      <span className="font-normal">
        {chooseSomeWords(children, 0, wordCount)}&nbsp;
      </span>
      {chooseSomeWords(children, wordCount, children.length - 1)}
    </p>
  ) : (
    <p
      className={`font-extralight text-sm w-45 md:text-base md:leading-[1.2] xl:text-lg xl:leading-[1.33] ${extraProps}`}
    >
      {children}
    </p>
  );
}
