import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="http://localhost:3000/" className="flex ">
      <div className="flex flex-col ">
        <div className="lg:hidden">
          <Image
            src="/img/logo-mobile-1x.png"
            alt="Logotype"
            width={59}
            height={21}
          />
        </div>
        <div className="hidden lg:block ">
          <Image
            src="/img/logo-desktop-1x.png"
            alt="Logotype"
            width={61}
            height={22}
          />
        </div>
        <p className="font-secondary text-sm tracking-2 font-normal">
          CarpTravel
        </p>
      </div>
    </Link>
  );
}

// font-family: var(--second-family);
// font-weight: 400;
// font-size: 14px;
// letter-spacing: 0.18em;
// color: #fff;