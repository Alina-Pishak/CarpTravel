import about from "@/data/about.json";

import Title from "@/components/uiKit/Title";
import Text from "@/components/uiKit/Text";
import BgContainer from "@/components/uiKit/BgContainer";

export default function About() {
  const { title, description, goal, subtitle, opportunity, methods } = about;
  return (
    <section id="about" className="bg-aboutMobile xs:bg-aboutMobileSmall">
      <BgContainer>
        <Title extraProps="mb-2">{title}</Title>
        <Text extraProps="mb-5" wordCount={4}>
          {description}
        </Text>
        <Text extraProps="mb-10" wordCount={2}>
          {goal}
        </Text>
        <div className="mb-10 ml-auto w-45">
          <h4 className="font-normal text-sm uppercase text-right ">
            <p className="text-left">
              {subtitle.slice(0, subtitle.indexOf("to"))}
            </p>
            {subtitle.slice(subtitle.indexOf("to"), subtitle.length - 1)}
          </h4>
          <Text>{opportunity}</Text>
        </div>
        <Text extraProps="w-70" wordCount={3}>
          {methods}
        </Text>
      </BgContainer>
    </section>
  );
}
