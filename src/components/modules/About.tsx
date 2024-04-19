import {
  title,
  description,
  goal,
  subtitle,
  opportunity,
  methods,
} from "@/data/about.json";

import Title from "@/components/uiKit/Title";
import Text from "@/components/uiKit/Text";
import BgContainer from "@/components/uiKit/BgContainer";

export default function About() {
  return (
    <section id="about" className=" bg-aboutMobile bg-cover">
      <BgContainer>
        <Title extraProps="mb-2">{title}</Title>
        <Text extraProps="mb-5">{description}</Text>
        <Text extraProps="mb-10">{goal}</Text>
        <div className="mb-10 ml-auto w-45">
          <h4 className="font-normal text-sm uppercase text-right ">
            <p className="text-left">
              {subtitle.slice(0, subtitle.indexOf("to"))}
            </p>
            {subtitle.slice(subtitle.indexOf("to"), subtitle.length - 1)}
          </h4>
          <Text>{opportunity}</Text>
        </div>
        <Text extraProps="w-70">{methods}</Text>
      </BgContainer>
    </section>
  );
}
