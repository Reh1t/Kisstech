import type { NextPage } from "next";
import Article from "./article";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[90px] pl-[21px] pr-5 box-border max-w-full text-left text-base text-dark-blue font-body-body-2 mq450:pb-[38px] mq450:box-border mq1050:pb-[58px] mq1050:box-border ${className}`}
    >
      <div className="w-[1241px] flex flex-col items-start justify-start gap-8 max-w-full mq750:gap-4">
        <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-5 mq750:flex-wrap">
          <div className="flex flex-col items-start justify-start gap-4 min-w-[335px] max-w-full mq750:flex-1">
            <div className="flex flex-row items-center justify-center">
              <div className="relative tracking-[0.3em] leading-[24px] inline-block min-w-[58px]">
                BLOG
              </div>
            </div>
            <div className="flex flex-row items-center justify-center text-25xl font-heading-heading-4">
              <h1 className="m-0 relative text-inherit leading-[60px] font-normal font-inherit mq450:text-7xl mq450:leading-[36px] mq1050:text-16xl mq1050:leading-[48px]">
                Our latest news
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-end justify-start pt-0 px-0 pb-2.5 font-heading-heading-4">
            <div className="border-dark-blue border-b-[2px] border-solid flex flex-row items-start justify-start pt-0 px-0 pb-[5px] gap-2">
              <b className="relative leading-[24px] inline-block min-w-[115px]">
                See all articles
              </b>
              <div className="flex flex-row items-start justify-start pt-1 px-0 pb-0">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/icon.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pl-0 pr-1 box-border gap-x-10 gap-y-[38px] max-w-full mq750:gap-[19px]">
          <Article
            photo="/photo@2x.png"
            propPadding="unset"
            mAY2024="14JULY 2024"
            propDisplay="inline-block"
            propMinWidth="102px"
            author="Miles Redwood"
            propMinWidth1="116px"
            celebratingCreativityAtEd="AI Technology in Business: Navigating Legality and Enhancing Performance"
          />
          <Article
            photo="/photo-1@2x.png"
            propPadding="unset"
            mAY2024="29 MARCH 24"
            propDisplay="inline-block"
            propMinWidth="108px"
            author="Ivy Sterling"
            propMinWidth1="85px"
            celebratingCreativityAtEd="The Crucial Role of a Robust Online Presence for Modern Businesses"
          />
          <Article
            photo="/photo-2@2x.png"
            mAY2024="05 JANUARY 2024"
            author="Eliot Vale"
            celebratingCreativityAtEd="Innovative Digital Marketing Services: Staying Ahead in a Competitive Market"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
