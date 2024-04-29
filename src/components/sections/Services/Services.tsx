import Slider from "@/components/modules/Slider/index";

import services from "@/data/services.json";

import "./Services.css";

export default function Services() {
  return (
    <section id="services">
      <Slider data={services.slidersData} title={services.title} />
    </section>
  );
}
