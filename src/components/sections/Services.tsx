import Slider from "@/components/modules/Slider";
import services from "@/data/services.json";

export default function Services() {
  return (
    <section id="services">
      <Slider data={services.slidersData} />
    </section>
  );
}
