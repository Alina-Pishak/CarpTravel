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
      <div className="basic-container pt-[105px] pb-14 bg-bgPrimary">
        <h2 className="first-letter:font-medium font-thin text-4xl tracking-[0.04em] text-right">
          {opportunityTitle}
        </h2>
        <h2 className="last-letter:tracking-normal text-xs font-light tracking-[0.79em] text-right mb-6">
          {opportunitySubTitle}
        </h2>

        <h1 className=" font-thin text-l uppercase tracking-1 mb-6">
          <p className="font-medium">{title.split(" ")[0]}</p>
          {title
            .split(" ")
            .slice(1, title.length - 1)
            .join(" ")}
        </h1>
        <p className="text-xxs font-extralight w-[157px] mb-6">{cities}</p>
        <p className=" font-light text-sm text-justify mb-6">{text}</p>
        <HeroButton>{buttonText}</HeroButton>
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
