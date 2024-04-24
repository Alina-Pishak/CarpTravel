import Image from "next/image";

import BgContainer from "@/components/uiKit/BgContainer";
import Title from "@/components/uiKit/Title";

import gallery from "@/data/gallery.json";

export default function Gallery() {
  return (
    <section id="gallery" className="gallery-bg">
      <BgContainer>
        <Title extraProps="mb-6">{gallery.title}</Title>
        {gallery.images.map((img, index) => (
          <Image
            src={img}
            alt=""
            width={280}
            height={187}
            key={index}
            className="mb-6 shadow-image ml-auto mr-auto"
          />
        ))}
      </BgContainer>
    </section>
  );
}
