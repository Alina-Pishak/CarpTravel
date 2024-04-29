"use client";

import { useState } from "react";

import clsx from "clsx";
import { Link } from "react-scroll";

import Logo from "@/components/uiKit/Logo";
import HeaderButton from "@/components/uiKit/HeaderButton";

import menu from "@/data/menu.json";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <header className="basic-container pt-9  w-full  absolute left-0 md:pt-6">
        <div className="flex justify-between items-center md:block">
          <nav className="md:flex md:justify-between md:items-center">
            <Logo />
            <ul className="hidden md:flex md:gap-6 xl:gap-14">
              {menu.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    duration={700}
                    className="text-xs font-normal tracking-[0.1em] "
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <HeaderButton open={open} setOpen={setOpen}>
            Menu
          </HeaderButton>
        </div>
      </header>

      <div
        className={clsx(
          !open && "sr-only translate-x-[500px] translate-y-0",
          open &&
            "basic-container has-[body]:overflow-hidden w-full h-screen absolute z-50 left-0 backdrop-blur-xl bg-bgMobileMenu pt-[46px] translate-x-0 translate-y-0 transition-transform duration-300"
        )}
      >
        <HeaderButton open={open} setOpen={setOpen}>
          Close
        </HeaderButton>
        <ul className="mt-[110px] flex flex-col gap-12 items-center">
          {menu.map((item, index) => (
            <li key={index}>
              <Link
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                duration={700}
                className="text-lg font-normal tracking-[0.1em] "
                onClick={() => {
                  document.body.classList.remove("overflow-hidden");
                  setOpen(false);
                }}
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
