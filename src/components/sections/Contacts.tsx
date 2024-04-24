"use client";

import BgContainer from "@/components/uiKit/BgContainer";
import Form from "@/components/uiKit/Form";
import Title from "@/components/uiKit/Title";

import { contactSchema } from "@/helpers/schemas";

import contacts from "@/data/contacts.json";

export default function Contacts() {
  const { title, contactsInfo, contactFormProps } = contacts;
  return (
    <section id="contacts" className="contacts-bg ">
      <BgContainer>
        <Title extraProps="mb-9">{title}</Title>
        <ul>
          {contactsInfo.map(({ title, text }, index) => (
            <li
              key={index}
              className="flex gap-5 mb-6 justify-start flex-row-reverse items-baseline	 last:flex-row last:justify-end last:mb-2"
            >
              <p className="font-extralight text-xs leading-[1.6]">{title}</p>
              <ul>
                {text.map(({ name, link }, index) => (
                  <li key={index}>
                    <a
                      href={link}
                      className="font-normal leading-[1.7] text-sm"
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
      </BgContainer>
    </section>
  );
}
