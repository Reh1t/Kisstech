import type { NextPage } from "next";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-center justify-start py-6 px-5 box-border gap-[30px] max-w-full text-left text-mid text-secondary font-heading-2 mq800:pt-5 mq800:pb-5 mq800:box-border ${className}`}
    >
      <div className="flex flex-row flex-wrap items-end justify-center py-0 pl-0 pr-0.5 box-border gap-x-[51px] gap-y-[49px] max-w-full gap-6">
        <div className="flex flex-col items-start justify-start gap-3.5 max-w-full">
          <div className="relative tracking-[0.15em] leading-[120%] uppercase font-medium">
            Pricing Plans
          </div>
          <h1 className="m-0 h-[58px] relative text-29xl leading-[120%] font-bold font-inherit text-primary inline-block mq800:text-19xl mq800:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
            Choose the Perfect Plan for Your Business
          </h1>
        </div>
        <div className="flex flex-row items-end justify-start gap-3 text-accent mb-3">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/phone2.svg"
          />
          <div className="relative tracking-[0.15em] leading-[120%] uppercase font-medium whitespace-nowrap">
            +647 812 4850
          </div>
        </div>
      </div>
      <div className="w-[1103px] flex flex-row flex-wrap items-center justify-center py-0 pl-0 pr-0.5 box-border gap-x-10 gap-y-[38px] max-w-full text-17xl text-variant-background gap-[19px]">
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[45px] min-w-[335px] max-w-full">
          <div className="w-[511px] flex flex-col items-start justify-start py-0 pl-0 pr-4 box-border gap-3.5 max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[120%] font-bold font-inherit mq800:text-10xl mq800:leading-[35px] mq450:text-3xl mq450:leading-[26px]">
              Welcome to our Products Packages Page
            </h1>
            <h3 className="m-0 self-stretch relative text-5xl leading-[120%] text-text font-inherit mq450:text-lgi mq450:leading-[23px]">
              <p className="m-0">{`We offer a variety of services to help you establish and grow your online presence. Our pricing is designed to be flexible, with discounts available when you choose multiple services. `}</p>
              <p className="m-0">
                Join our membership club for a minimum of two years to get the
                best value and build a long-lasting partnership with us.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">&nbsp;</p>
            </h3>
          </div>
          <div className="[border:none] bg-goldenrod h-[135px] w-auto [outline:none] self-stretch flex flex-col items-start justify-start font-heading-2 font-bold text-7xl text-primary rounded">
            {`Special Offer:
Choose at least three services to qualify
 for our discounted rates!`}
          </div>
        </div>
        <div className="flex-1 rounded-61xl flex flex-col items-start justify-start min-w-[335px] max-w-full">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/rectangle@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
