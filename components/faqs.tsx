import type { NextPage } from "next";
import Faq from "./faq";

export type FaqsType = {
  className?: string;
};

const Faqs: NextPage<FaqsType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-white overflow-hidden flex flex-col items-center justify-center py-[120px] px-5 box-border gap-20 max-w-full text-left text-mid text-secondary font-heading-2 mq750:pt-[51px] mq750:pb-[51px] mq750:box-border mq1050:pt-[78px] mq1050:pb-[78px] mq1050:box-border ${className}`}
    >
      <div className="w-[1140px] flex flex-row flex-wrap items-center justify-center py-0 pl-0 pr-[329px] box-border gap-10 max-w-full lg:pr-[164px] lg:box-border mq750:pr-[82px] mq750:box-border mq450:pr-5 mq450:box-border">
        <div className="h-px w-[291px] relative border-border-2 border-t-[1px] border-solid box-border" />
        <div className="flex-1 flex flex-col items-start justify-start gap-3.5 min-w-[312px] max-w-full">
          <div className="relative tracking-[0.15em] leading-[120%] uppercase font-medium inline-block min-w-[53px]">
            Faqs
          </div>
          <h1 className="m-0 self-stretch relative text-29xl leading-[120%] font-bold font-inherit text-primary mq1050:text-19xl mq1050:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
            Answers to Your Questions
          </h1>
        </div>
      </div>
      <div className="w-[1140px] flex flex-col items-center justify-start gap-5 max-w-full text-5xl text-variant-background">
        <Faq
          question="What services do you recommend for my small business?"
          answer="We offer a wide range of comprehensive services that will assist you in your business operations, saving you time and making you money. We recommend our basic starter website, phone transcription, business phone number and system, as well as basic Google ads and content for your digital platforms."
          plusIcon="/pluscircle.svg"
          minusIcon="/minuscircle.svg" // Assuming you have a minus icon at this path
          faqWidth="802px"
          iconListAlignSelf="stretch"
          iconListGap="20px"
          questionMargin="0"
          questionFontWeight="700"
          textWidth="100%"
          textAlignSelf="stretch"
        />

        <Faq
          question="I’ve been promised SEO leads, what does this mean?"
          answer="Promising SEO leads means we help increase your website’s visibility on search engines to attract potential customers actively searching for your services. At Kisstech, we focus on delivering high-quality, relevant traffic that boosts your chances of engagement and sales. Our strategies are continuously optimized to ensure they meet the latest market trends and search engine criteria, guaranteeing effective results."
          plusIcon="/pluscircle.svg"
          minusIcon="/minuscircle.svg" // Assuming you have a minus icon at this path
          faqWidth="802px"
          iconListAlignSelf="stretch"
          iconListGap="20px"
          questionMargin="0"
          questionFontWeight="bold"
          textWidth="100%"
          textAlignSelf="stretch"
        />
        
        <Faq
          question="What are the different types of phone systems you offer?"
          answer={
            <>
              <p>We offer a versatile, internet-connected auto-attendant business phone system that supports multiple users. This system is ideal for both internal team communications and external customer interactions, ensuring seamless integration with your existing setup.</p>
              <p>Key features include:</p>
              <ul>
                <li>Voicemail to email service: Receive voicemails directly in your email for quick access and response.</li>
                <li>Call transcription: Automatically transcribe all your calls, simplifying record-keeping and review processes.</li>
              </ul>
              <p>You can use your existing cell phone number with our system, eliminating the need to switch providers or lose contacts, making it a completely additive solution for your organizational communication needs.</p>
            </>
          }
          plusIcon="/pluscircle.svg"
          minusIcon="/minuscircle.svg" // Assuming you have a minus icon at this path
          faqWidth="802px"
          iconListAlignSelf="stretch"
          iconListGap="20px"
          questionMargin="0"
          questionFontWeight="bold"
          textWidth="100%"
          textAlignSelf="stretch"
        />
        <Faq
          question="Can I change my pricing plan option?"
          answer="Yes, you can change your pricing plan option to better suit your needs. We offer flexible pricing with the ability to adjust your service choices and take advantage of discounts for selecting multiple services. If you’re looking to maximize value, consider joining our membership club for a minimum of two years, which includes additional benefits such as a professional website at no extra cost, excluding web hosting and premium custom features. Please contact our support team to discuss your specific requirements and explore the best options for your situation."
          plusIcon="/pluscircle.svg"
          minusIcon="/minuscircle.svg" // Assuming you have a minus icon at this path
          faqWidth="802px"
          iconListAlignSelf="stretch"
          iconListGap="20px"
          questionMargin="0"
          questionFontWeight="bold"
          textWidth="100%"
          textAlignSelf="stretch"
        />
      </div>
    </section>
  );
};

export default Faqs;
