"use client";

import { useState } from "react";
import clsx from "clsx";
import { Link } from "react-scroll";

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
          !open && "sr-only translate-x-[500px] translate-y-0",
          open &&
            "basic-container has-[body]:overflow-hidden w-full h-screen absolute z-50 left-0 backdrop-blur-xl bg-bgMobileMenu pt-11.5 translate-x-0 translate-y-0 transition-transform duration-300"
        )}
      >
        <HeaderButton open={open} setOpen={setOpen}>
          Close
        </HeaderButton>
        <ul className="mt-27 flex flex-col gap-12 items-center">
          {menu.map((item) => (
            <li key={item.toLowerCase()}>
              <Link
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                duration={500}
                className="text-lg font-normal tracking-[0.1em] scroll-smooth"
                onClick={() => setOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
