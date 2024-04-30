import React from "react";

type Props = {
  children: React.ReactNode;
  bg: string;
};

export default function BgContainer({ children, bg }: Props) {
  return (
    <div className={`basic-container py-14 h-full md:py-16 ${bg}`}>
      {children}
    </div>
  );
}
