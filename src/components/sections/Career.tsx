"use client";

import BgContainer from "@/components/uiKit/BgContainer";
import Text from "@/components/uiKit/Text";
import Title from "@/components/uiKit/Title";
import Form from "@/components/uiKit/Form";

import { registrationSchema } from "@/helpers/schemas";

import career from "@/data/career.json";

export default function Career() {
  const { title, text, subtitle, callText, careers, registrationFormProps } =
    career;
  return (
    <section id="career">
      <div className="career-bg">
        <BgContainer>
          <div className="hidden sm:grid">
            <Title extraProps="mb-6">{title}</Title>
            {/* <div className="ml-auto w-45 mb-9"> */}
            <Text extraProps="ml-auto w-45 mb-9 sm:w-50">{text}</Text>
            <h3 className="text-3xl font-extralight uppercase ml-auto w-45 mb-9">
              {subtitle}
            </h3>
            {/* </div> */}
          </div>
          <div className="hidden sm:flex gap-5">
            <ul className="w-45 sm:w-50 ">
              {careers.map(({ careerTitle, careerText }, index) => (
                <li key={index} className="mb-4 last:mb-0 sm:mb-6">
                  <h4 className="font-normal text-sm text-right mb-2 sm:text-base sm:leading-[1.25]">
                    {careerTitle}
                  </h4>
                  <p className="font-extralight text-xs text-right sm:leading-[1.67]">
                    {careerText}
                  </p>
                </li>
              ))}
            </ul>
            <div>
              <Text extraProps="w-45 ml-auto mb-6 sm:w-50 sm:m-0 sm:mr-auto sm:mb-8">
                {callText}
              </Text>
              <Form
                formProps={registrationFormProps}
                schema={registrationSchema}
              />
            </div>
          </div>
        </BgContainer>
      </div>
      <div className="career-bg sm:hidden">
        <BgContainer>
          <Text extraProps="w-45 ml-auto mb-6">{callText}</Text>
          <Form formProps={registrationFormProps} schema={registrationSchema} />
        </BgContainer>
      </div>
    </section>
  );
}
