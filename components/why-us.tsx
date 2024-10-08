import type { NextPage } from "next";
import IconBox from "./icon-box";

export type WhyUsType = {
  className?: string;
};

const WhyUs: NextPage<WhyUsType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-variant-background overflow-hidden flex flex-row items-start justify-center py-11 px-[100px] box-border gap-16 max-w-full text-left text-mid text-border-1 font-heading-2 mq800:pl-[50px] mq800:pr-[50px] mq800:box-border mq450:p-5 mq450:box-border mq1125:flex-wrap mq1125:pt-[29px] mq1125:pb-[29px] mq1125:box-border ${className}`}
    >
      <div className="w-[516px] flex flex-col items-start justify-start pt-[73.5px] px-0 pb-0 box-border min-w-[516px] max-w-full mq800:pt-12 mq800:box-border mq800:min-w-full mq1125:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-16 max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-5">
            <div className="relative tracking-[0.15em] leading-[120%] uppercase font-medium">
              Why Choose Us
            </div>
            <h1 className="m-0 self-stretch relative text-29xl leading-[120%] font-bold font-inherit text-white mq800:text-19xl mq800:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
              Kisstech Solutions Committment to You
            </h1>
          </div>
          <div className="w-[490px] flex flex-col items-start justify-start gap-[30px] max-w-full text-5xl text-white">
            <IconBox
              costEffectiveSolutions="Cost-Effective Solutions"
              text="We offer competitive pricing that ensures you get the best value for your investment."
              image="/gear.png"
            />
            <IconBox
              costEffectiveSolutions="Transparency"
              text="Trust is the foundation of our client relationships, built on transparency and reliability. "
              image="/gear.png"
            />
            <IconBox
              costEffectiveSolutions={`Comprehensive Services
                & Customization`}
              text="Trust is the foundation of our client relationships, built on transparency and reliability. "
              image="/gear.png"
            />
            
          </div>
        </div>
      </div>
      <div className="h-[757px] flex-1 flex flex-row items-center justify-start relative gap-2.5 min-w-[429px] max-w-full text-13xl text-accent mq800:min-w-full">
        <div className="w-full !m-[0] absolute top-[0px] left-[0px] rounded-21xl bg-secondary overflow-hidden shrink-0 flex flex-row items-center justify-center opacity-[0.8] max-w-full h-full">
          <img
            className="h-[757px] flex-1 relative max-w-full overflow-hidden object-cover"
            alt=""
            src="/individualsholdingsmallumbrellasandmodelhome20231127045620utc-1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
