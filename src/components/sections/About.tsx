import Title from "@/components/uiKit/Title";
import Text from "@/components/uiKit/Text";
import BgContainer from "@/components/uiKit/BgContainer";

import about from "@/data/about.json";

export default function About() {
  const { title, description, goal, subtitle, opportunity, methods } = about;
  return (
    <section id="about" className="about-bg">
      <BgContainer>
        <div className="hidden sm:grid sm:grid-cols-[408px_220px] sm:gap-x-[76px] sm:gap-y-4 sm:mb-16">
          <Title extraProps="mb-2">{title}</Title>
          <Text extraProps="mb-5" wordCount={4}>
            {description}
          </Text>
          <Text extraProps="mb-10 sm:col-start-2" wordCount={2}>
            {goal}
          </Text>
          <div className="mb-10 ml-auto w-45 sm:row-start-2 sm:col-start-1 sm:mb-16 sm:w-55 sm:m-0 sm:mt-auto">
            <h4 className="font-normal text-sm uppercase text-right sm:text-base sm:leading-[1.2]">
              <p className="text-left">
                {subtitle.slice(0, subtitle.indexOf("to"))}
              </p>
              {subtitle.slice(subtitle.indexOf("to"), subtitle.length - 1)}
            </h4>
            <Text extraProps=" sm:w-55">{opportunity}</Text>
          </div>
        </div>
        <Text extraProps=" w-70 sm:w-[463px] sm:ml-auto" wordCount={3}>
          {methods}
        </Text>
      </BgContainer>
    </section>
  );
}
