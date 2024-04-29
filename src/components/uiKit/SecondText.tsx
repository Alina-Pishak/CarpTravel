type Props = {
  children: string;
  extraProps?: string;
};

export default function SecondText({ children, extraProps }: Props) {
  return (
    <p
      className={`font-extralight text-sm w-45 md:text-[13px] md:leading-[1.56]  xl:text-lg xl:leading-[1.33] ${extraProps}`}
    >
      {children}
    </p>
  );
}
