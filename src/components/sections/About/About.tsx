import Title from "@/components/uiKit/Title";
import Text from "@/components/uiKit/Text";
import BgContainer from "@/components/uiKit/BgContainer";

import about from "@/data/about.json";

import "./About.css";

export default function About() {
  const { title, description, goal, subtitle, opportunity, methods } = about;
  return (
    <section id="about" className="about-bg">
      <div className="bg-bgPrimaryLight">
        <BgContainer>
          <div className="about-layout">
            <Title extraProps="mb-2 about-title">{title}</Title>
            <Text
              extraProps="mb-5 about-description md:w-50 xl:w-[292px]"
              wordCount={4}
            >
              {description}
            </Text>
            <Text
              extraProps="mb-10 md:col-start-2 about-goal md:w-50 xl:w-[292px]"
              wordCount={2}
            >
              {goal}
            </Text>
            <div className="mb-10 ml-auto w-45 md:row-start-2 md:col-start-1 md:mb-16 md:w-50 md:m-0 md:mt-auto about-subtitle xl:w-[296px]">
              <h4 className="font-normal text-sm uppercase text-right md:text-base md:leading-[1.2] xl:text-lg xl:leading-[1.33]">
                <span className="block text-left">
                  {subtitle.slice(0, subtitle.indexOf("to"))}
                </span>
                {subtitle.slice(subtitle.indexOf("to"), subtitle.length - 1)}
              </h4>
              <Text extraProps=" md:w-50 xl:w-[297px] xl:tracking-[0.12em]">
                {opportunity}
              </Text>
            </div>
            <Text
              extraProps=" w-70 md:w-[463px] md:ml-auto about-methods xl:w-[605px] xl:m-0"
              wordCount={3}
            >
              {methods}
            </Text>
          </div>
        </BgContainer>
      </div>
    </section>
  );
}
