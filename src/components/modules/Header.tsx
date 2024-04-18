"use client";

import { useState } from "react";
import clsx from "clsx";

import menu from "@/data/menu.json";

import Logo from "@/components/uiKit/Logo";
import HeaderButton from "@/components/uiKit/HeaderButton";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <header className="basic-container pt-9  w-full  absolute left-0 ">
        <div className="flex justify-between items-center">
          <Logo />
          <HeaderButton open={open} setOpen={setOpen}>
            Menu
          </HeaderButton>
        </div>
      </header>

      <div
        className={clsx(
          !open && "hidden",
          open &&
            "basic-container w-full h-screen absolute z-50 left-0 backdrop-blur-xl bg-[rgba(1, 10, 5, 0.75)] pt-11 "
        )}
      >
        <HeaderButton open={open} setOpen={setOpen}>
          Close
        </HeaderButton>
        <ul className="mt-27 flex flex-col gap-12 items-center">
          {menu.map((item) => (
            <li key={item.toLowerCase()}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-lg font-normal tracking-[0.1em]"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

// font-family: var(--font-family);
// font-weight: 400;
// font-size: 14px;
// letter-spacing: 0.1em;
// color: #fff;
