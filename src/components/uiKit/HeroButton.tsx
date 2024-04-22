type Props = {
  children: string;
};

export default function HeroButton({ children }: Props) {
  return (
    <button
      type="button"
      className='w-full h-13.2 relative font-bold text-lg text-center bg-btn leading-[2.67] uppercase border border-transparent  hover:bg-bgHeaderBtnHover focus:bg-bgHeaderBtnHover transition-colors duration-300 after:content-[url("/img/right-btn-frame-icon.svg")] after:w-10.5 after:h-13.2 after:fill-primary after:absolute after:top-0 after:right-0 before:content-[url("/img/left-btn-frame-icon.svg")] before:w-10.5 before:h-13.2 before:fill-primary before:absolute before:top-0 before:left-0'
    >
      {children}
    </button>
  );
}
