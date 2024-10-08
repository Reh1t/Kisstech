import type { NextPage } from "next";
import IconBox from "./icon-box";

export type WhyUs1Type = {
  className?: string;
};

const WhyUs1: NextPage<WhyUs1Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-variant-background overflow-hidden flex flex-row flex-wrap items-center justify-center py-[67px] pl-[159px] pr-[161px] box-border gap-x-[120px] gap-y-[118px] max-w-full text-left text-mid text-border-1 font-heading-2 gap-[59px] lg:pl-[79px] lg:pr-20 lg:box-border mq750:py-[29px] mq750:pl-[39px] mq750:pr-10 mq750:box-border mq1050:pt-11 mq1050:pb-11 mq1050:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-[22px] px-0 pb-0 box-border min-w-[335px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[60px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-5 max-w-full">
            <div className="flex flex-row items-start justify-start">
              <div className="relative tracking-[0.15em] leading-[120%] uppercase font-medium">
                your success,simplified
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start max-w-full text-29xl text-white">
              <h1 className="m-0 flex-1 relative text-inherit leading-[120%] font-bold font-inherit inline-block max-w-full mq1050:text-19xl mq1050:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
                <p className="m-0">Don’t Just Survive,</p>
                <p className="m-0">Thrive with Kisstech</p>
              </h1>
            </div>
          </div>
          <div className="w-[490px] flex flex-col items-start justify-start gap-[30px] max-w-full text-5xl text-white">
            <IconBox
              propHeight="unset"
              costEffectiveSolutions="Operate: Experience and Expertise"
              text="Streamline your operations with our comprehensive suite of business solutions. From integrated technology systems to custom software development, we optimize your processes for seamless day-to-day operations."
              propColor="#9f9f9f"
              iconBox1AlignSelf="stretch"
              iconBox1Padding="unset"
              titleWidth="unset"
              costEffectiveSolutionsMargin="0"
              costEffectiveSolutionsFontWeight="700"
              textWidth="unset"
              textDisplay="unset"
              textAlignSelf="stretch"
              image="/gear.png"
            />
            <IconBox
              propHeight="unset"
              costEffectiveSolutions="Innovate: Comprehensive Coverage"
              text="Stay ahead with cutting-edge technology solutions tailored
                    to elevate your business.Foster creativity and adapt to the latest advancements in
                    the digital landscape."
              propColor="#9f9f9f"
              iconBox1AlignSelf="stretch"
              iconBox1Padding="unset"
              titleWidth="unset"
              costEffectiveSolutionsMargin="0"
              costEffectiveSolutionsFontWeight="700"
              textWidth="unset"
              textDisplay="unset"
              textAlignSelf="stretch"
              image="/gear.png"
            />
            <IconBox
              propHeight="unset"
              costEffectiveSolutions="Thrive: Customer-Centric Approach"
              text="Your success is our mission. We provide the tools and strategies needed for your business to thrive in the digital landscape. From digital marketing strategies to robust cybersecurity solutions, Kisstech is your partner in achieving sustained growth."
              propColor="#9f9f9f"
              iconBox1AlignSelf="stretch"
              iconBox1Padding="unset"
              titleWidth="unset"
              costEffectiveSolutionsMargin="0"
              costEffectiveSolutionsFontWeight="700"
              textWidth="unset"
              textDisplay="unset"
              textAlignSelf="stretch"
              image="/gear.png"
            />
          </div>
        </div>
      </div>
      <div className="h-auto w-auto flex flex-row items-center max-w-full">
        <img
          className="relative top-[0px] left-[0px] w-[450px] h-[700px] min-w-[324px] min-h-[400px] object-cover items-center rounded-3xl"
          alt=""
          src="/Networking.png"
        />
      </div>
    </section>
  );
};

export default WhyUs1;
