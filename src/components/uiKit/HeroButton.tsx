type Props = {
  children: string;
};

export default function HeroButton({ children }: Props) {
  return (
    <button
      type="button"
      className='w-full h-13.2 relative font-bold text-lg text-center bg-btn leading-[2.67] uppercase border border-transparent after:content-[url("/img/icon-right-btn-frame.svg")] after:w-10.5 after:h-13.2 after:fill-primary after:absolute after:top-0 after:right-0 before:content-[url("/img/icon-left-btn-frame.svg")] before:w-10.5 before:h-13.2 before:fill-primary before:absolute before:top-0 before:left-0'
    >
      {children}
    </button>
  );
}
