type Props = {
  children: string;
  onClick: () => void;
};

export default function NavigationButton({ children, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="font-thin text-[33px] leading-none"
    >
      {children}
    </button>
  );
}
