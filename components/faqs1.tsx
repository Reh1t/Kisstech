import type { NextPage } from "next";
import Faq from "./faq";

export type Faqs1Type = {
  className?: string;
};

const Faqs1: NextPage<Faqs1Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-white overflow-hidden flex flex-col items-center justify-center py-[120px] px-5 box-border gap-20 max-w-full text-left text-mid text-secondary font-heading-2 gap-10 gap-5 mq750:pt-[51px] mq750:pb-[51px] mq750:box-border mq1050:pt-[78px] mq1050:pb-[78px] mq1050:box-border ${className}`}
    >
      <div className="w-[1140px] flex flex-row flex-wrap items-center justify-start py-0 pl-0 pr-[329px] box-border gap-10 max-w-full lg:pr-[164px] lg:box-border mq450:pr-5 mq450:box-border gap-5 mq750:pr-[82px] mq750:box-border">
        <div className="h-px w-[291px] relative border-border-2 border-t-[1px] border-solid box-border" />
        <div className="flex-1 flex flex-col items-start justify-start gap-3.5 min-w-[312px] max-w-full">
          <div className="relative tracking-[0.15em] leading-[120%] uppercase font-medium inline-block min-w-[53px]">
            Faqs
          </div>
          <h1 className="m-0 self-stretch relative text-29xl leading-[120%] font-bold font-inherit text-primary mq450:text-10xl mq450:leading-[35px] mq1050:text-19xl mq1050:leading-[46px]">
            Answers to Your Questions
          </h1>
        </div>
      </div>
      <div className="w-[1140px] flex flex-col items-center justify-start gap-5 max-w-full text-5xl text-variant-background">
        <Faq
          whatServicesDoYouRecommen="What services do you recommend for my small business?"
          propColor="#3aa9e9"
          plusCircle="/pluscircle.svg"
          fAQAnswers="We offer a wide range of comprehensive services that will assist you in your business operations, saving you time and making you money. We recommend our basic starter website, phone transcription, business phone number and system, as well as basic Google ads and content for your digital platforms."
          showFAQ
          propHeight="unset"
          faq1Width="802px"
          iconListWidth="unset"
          iconListAlignSelf="stretch"
          iconListGap="20px"
          whatServicesDoMargin="0"
          whatServicesDoFontWeight="700"
          textWidth="unset"
          textAlignSelf="stretch"
        />
        <Faq
          whatServicesDoYouRecommen="I’ve been promised SEO leads, what does this mean?"
          propColor="#003061"
          plusCircle="/pluscircle-1.svg"
          fAQAnswers="Magnis ac phasellus elit sed tellus condimentum. Egestas massa consectetur id vestibulum convallis velit. Vitae nibh neque ipsum morbi vel condimentum. Cras tincidunt tellus eu elit porttitor blandit."
          showFAQ={false}
          propHeight="unset"
          faq1Width="802px"
          iconListWidth="unset"
          iconListAlignSelf="stretch"
          iconListGap="20px"
          whatServicesDoMargin="unset"
          whatServicesDoFontWeight="bold"
          textWidth="unset"
          textAlignSelf="stretch"
        />
        <div className="w-[802px] rounded-3xs border-border-2 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[18px] px-[39px] gap-4 max-w-full">
          <div className="self-stretch flex flex-row items-center justify-center py-0 px-[42px] box-border max-w-full gap-[79px] gap-[159px] mq750:pl-[21px] mq750:pr-[21px] mq750:box-border">
            <h3 className="m-0 flex-1 relative text-inherit leading-[120%] font-bold font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[23px]">
              What are the different types of phone systems you offer?
            </h3>
          </div>
          <div className="self-stretch relative text-base tracking-[-0.03em] leading-[160%] font-medium text-text hidden">
            Magnis ac phasellus elit sed tellus condimentum. Egestas massa
            consectetur id vestibulum convallis velit. Vitae nibh neque ipsum
            morbi vel condimentum. Cras tincidunt tellus eu elit porttitor
            blandit.
          </div>
        </div>
        <Faq
          whatServicesDoYouRecommen="Can I change my pricing plan option?"
          propColor="#003061"
          plusCircle="/pluscircle-1.svg"
          fAQAnswers="Magnis ac phasellus elit sed tellus condimentum. Egestas massa consectetur id vestibulum convallis velit. Vitae nibh neque ipsum morbi vel condimentum. Cras tincidunt tellus eu elit porttitor blandit."
          showFAQ={false}
          propHeight="unset"
          faq1Width="802px"
          iconListWidth="unset"
          iconListAlignSelf="stretch"
          iconListGap="20px"
          whatServicesDoMargin="unset"
          whatServicesDoFontWeight="bold"
          textWidth="unset"
          textAlignSelf="stretch"
        />
      </div>
    </section>
  );
};

export default Faqs1;
