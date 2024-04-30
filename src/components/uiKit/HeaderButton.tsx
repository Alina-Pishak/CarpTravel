"use client";

type Props = {
  children: string;
  open: boolean;
  setOpen: (value: boolean) => void;
};

export default function HeaderButton({ children, open, setOpen }: Props) {
  const toggleMenu = () => {
    document.body.classList.toggle("overflow-y-hidden");
    setOpen(!open);
  };
  return (
    <button
      type="button"
      className="md:hidden font-primary font-normal text-sm tracking-[0.1em] uppercase  block ml-auto"
      onClick={toggleMenu}
    >
      {children}
    </button>
  );
}
