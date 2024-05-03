"use client";

import BgContainer from "@/components/uiKit/BgContainer";
import Text from "@/components/uiKit/Text";
import Title from "@/components/uiKit/Title";
import Form from "@/components/uiKit/Form";
import SecondText from "@/components/uiKit/SecondText";

import { registrationSchema } from "@/helpers/schemas";

import career from "@/data/career.json";

import "./Career.css";
import clsx from "clsx";

export default function Career() {
  const { title, text, subtitle, callText, careers, registrationFormProps } =
    career;
  return (
    <section id="career">
      <div className="career-bg">
        <div className="bg-bgPrimary">
          <BgContainer>
            <div className="career-layout">
              <Title extraProps="mb-6  career-title ">{title}</Title>
              <SecondText extraProps=" ml-auto  mb-9 md:w-50  career-text xl:w-[293px]">
                {text}
              </SecondText>
              <h3 className="text-3xl font-extralight uppercase ml-auto w-45 mb-9 md:text-3xl md:ml-20 xl:ml-[147px] xl:text-4xl xl:leading-[1.08]  career-subtitle xl:mb-[45px]">
                {subtitle}
              </h3>
              <ul className="w-45 md:w-[225px] career-list xl:w-[566px] xl:ml-auto">
                {careers.map(({ careerTitle, careerText }, index) => (
                  <li
                    key={index}
                    className="mb-4 last:mb-0 md:mb-6 xl:flex xl:gap-6 xl:justify-end"
                  >
                    <h4
                      className={clsx(
                        "font-normal text-sm text-right mb-2 md:text-base md:leading-[1.25] xl:text-lg xl:leading-[1.33] ",
                        index === 2 && "md:mb-7 xl:mb-2"
                      )}
                    >
                      {careerTitle}
                    </h4>
                    <p className="font-extralight text-xs text-right md:leading-[1.67] xl:leading-loose xl:w-[285px] xl:text-start">
                      {careerText}
                    </p>
                  </li>
                ))}
              </ul>
              <SecondText extraProps="hidden md:block md:ml-auto  md:mb-6 md:w-50  md:m-0 md:mr-auto md:mb-8 xl:w-[234px] xl:ml-0 career-calltext ">
                {callText}
              </SecondText>
              <div className="hidden md:block career-form">
                <Form
                  formProps={registrationFormProps}
                  schema={registrationSchema}
                />
              </div>
            </div>
          </BgContainer>
        </div>
      </div>
      <div className="career-bg md:hidden">
        <div className="bg-bgPrimary">
          <BgContainer>
            <SecondText extraProps="w-45 ml-auto mb-6">{callText}</SecondText>
            <Form
              formProps={registrationFormProps}
              schema={registrationSchema}
            />
          </BgContainer>
        </div>
      </div>
    </section>
  );
}
