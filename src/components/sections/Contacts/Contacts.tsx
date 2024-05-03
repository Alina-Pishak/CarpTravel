"use client";

import BgContainer from "@/components/uiKit/BgContainer";
import Form from "@/components/uiKit/Form";
import Title from "@/components/uiKit/Title";

import { contactSchema } from "@/helpers/schemas";

import contacts from "@/data/contacts.json";

import "./Contacts.css";

export default function Contacts() {
  const { title, contactsInfo, contactFormProps } = contacts;
  return (
    <section id="contacts" className="contacts-bg ">
      <div className="bg-bgPrimary">
        <BgContainer>
          <Title extraProps="mb-9 xl:mb-[71px]">{title}</Title>
          <div className="block: xl:flex xl:gap-[230px] xl:justify-end">
            <ul className="contacts-layout justify-items-center md:mb-16	">
              {contactsInfo.map(({ title, text }, index) => (
                <li
                  key={index}
                  className={`flex gap-5 mb-6 justify-start flex-row-reverse items-baseline last:flex-row last:justify-end last:mb-2 contacts-item-${index}`}
                >
                  <p className="font-extralight text-xs leading-[1.67]  md:w-20">
                    {title}
                  </p>
                  <ul>
                    {text.map(({ name, link }, index) => (
                      <li key={index}>
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="font-normal leading-[1.7] cursor-pointer text-sm md:text-base md:text-right md:leading-[1.5] xl:text-lg xl:leading-[1.33] decoration-transparent transition-colors duration-300 hover:underline hover:decoration-primary  focus:underline focus:decoration-primary"
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <Form formProps={contactFormProps} schema={contactSchema} />
          </div>
        </BgContainer>
      </div>
    </section>
  );
}
