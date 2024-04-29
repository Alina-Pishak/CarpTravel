import HeroButton from "@/components/uiKit/HeroButton";
import Text from "@/components/uiKit/Text";

import hero from "@/data/hero.json";

import "./Hero.css";

export default function Hero() {
  const {
    opportunityTitle,
    opportunitySubTitle,
    title,
    cities,
    text,
    buttonText,
  } = hero;
  return (
    <section id="hero" className="hero-bg ">
      <div className="basic-container pt-[105px] pb-14 bg-bgPrimary md:flex md:gap-12 md:pt-[121px] xl:gap-[281px] xl:pt-[130px]">
        <p className="first-letter:font-medium font-thin text-4xl tracking-[0.04em] text-right md:text-6xl md:tracking-[0.13em] md:text-left md:hidden">
          {opportunityTitle}
        </p>
        <p className="block text-xs font-light tracking-[0.79em] text-right mb-6 md:tracking-[1.85em] md:text-left md:hidden">
          {opportunitySubTitle}
        </p>
        <div>
          <h1 className=" font-thin text-l uppercase tracking-1 mb-6 md:text-6xl md:mb-[68px] xl:text-8xl xl:mb-[148px]">
            <p className="font-medium">{title.split(" ")[0]}</p>
            {title
              .split(" ")
              .slice(1, title.length - 1)
              .join(" ")}
          </h1>
          <p className="text-xxs font-extralight w-[157px] mb-6 md:text-sm md:leading-[1.1] md:tracking-[0.09em] md:w-[263px] xl:text-base xl:leading-[1.5] xl:w-[608px]">
            {cities}
          </p>
        </div>
        <div>
          <div className="hidden md:block md:mb-14 xl:mb-[181px]">
            <p className="first-letter:font-medium font-thin  text-right  md:text-6xl md:tracking-[0.13em] md:text-left xl:text-8xl xl:tracking-normal">
              {opportunityTitle}
            </p>
            <p className=" text-sm font-light  text-right mb-6 md:tracking-[1.85em] md:text-left xl:text-base xl:tracking-[2.28em]">
              {opportunitySubTitle}
            </p>
          </div>
          <Text extraProps=" text-justify mb-6 md:mb-7 md:w-[230px]  xl:w-[294px] ">
            {text}
          </Text>
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
