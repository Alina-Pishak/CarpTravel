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
    <section className="basic-container pt-26 pb-14 bg-heroMobile bg-cover ">
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
      <p className="text-xxs font-extralight w-38 mb-6">{cities}</p>
      <p className=" font-light text-sm text-justify mb-6">{text}</p>
      <button
        type="button"
        className="w-full h-13 relative font-bold text-lg text-center bg-btn leading-[2.67] uppercase border border-transparent"
      >
        <svg
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
        </svg>
        {buttonText}
      </button>
    </section>
  );
}

// background: rgba(255, 255, 255, 0.1);
// border: 1px dashed #fff;
// padding: 18px 64px;
// width: 280px;
// height: 53px;
// font-family: var(--font-family);
// font-weight: 700;
// font-size: 18px;
// line-height: 267%;
// text-align: center;
// color: #fff;
