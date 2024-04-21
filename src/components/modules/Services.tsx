import services from "@/data/services.json";

import Title from "@/components/uiKit/Title";
import BgContainer from "@/components/uiKit/BgContainer";
import Slider from "@/components/uiKit/Slider";

export default function Services() {
  return (
    <section id="services" className=" bg-slider">
      <BgContainer>
        <Title>{services.title}</Title>
        <Slider data={services.slidersData} />
      </BgContainer>
    </section>
  );
}
