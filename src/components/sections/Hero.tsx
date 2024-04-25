import HeroButton from "@/components/uiKit/HeroButton";

import {
  opportunityTitle,
  opportunitySubTitle,
  title,
  cities,
  text,
  buttonText,
} from "@/data/hero.json";

export default function Hero() {
  return (
    <section id="hero" className="hero-bg ">
      <div className="basic-container pt-[105px] pb-14 bg-bgPrimary sm:flex sm:gap-12 sm:pt-[121px]">
        <p className="first-letter:font-medium font-thin text-4xl tracking-[0.04em] text-right sm:text-6xl sm:tracking-[0.13em] sm:text-left sm:hidden">
          {opportunityTitle}
        </p>
        <p className="block text-xs font-light tracking-[0.79em] text-right mb-6 sm:tracking-[1.85em] sm:text-left sm:hidden">
          {opportunitySubTitle}
        </p>
        <div>
          <h1 className=" font-thin text-l uppercase tracking-1 mb-6 sm:text-6xl sm:mb-[68px]">
            <p className="font-medium">{title.split(" ")[0]}</p>
            {title
              .split(" ")
              .slice(1, title.length - 1)
              .join(" ")}
          </h1>
          <p className="text-xxs font-extralight w-[157px] mb-6 sm:text-sm sm:leading-[1.1] sm:tracking-[0.09em] sm:w-[263px]">
            {cities}
          </p>
        </div>
        <div>
          <div className="hidden sm:block sm:mb-14">
            <p className="first-letter:font-medium font-thin  text-right  sm:text-6xl sm:tracking-[0.13em] sm:text-left ">
              {opportunityTitle}
            </p>
            <p className=" text-sm font-light  text-right mb-6 sm:tracking-[1.85em] sm:text-left">
              {opportunitySubTitle}
            </p>
          </div>
          <p className=" font-light text-sm text-justify mb-6 sm:font-extralight sm:text-base sm:leading-[1.2] sm:mb-7">
            {text}
          </p>
          <HeroButton>{buttonText}</HeroButton>
        </div>
      </div>
    </section>
  );
}

{
  /* <svg
          className="absolute top-0 left-0 fill-primary"
          width={42}
          height={53}
        >
          <use href="/img/symbol-defs.svg#icon-left-btn-frame"></use>
        </svg>{" "}
        <svg
          className="absolute top-0 right-0 fill-primary"
          width={42}
          height={53}
        >
          <use href="/img/symbol-defs.svg#icon-right-btn-frame"></use>
        </svg> */
}
