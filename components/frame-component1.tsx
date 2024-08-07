import type { NextPage } from "next";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[90px] box-border max-w-full text-center text-5xl text-primary font-heading-2 mq750:pb-[58px] mq750:box-border ${className}`}
    >
      <div className="flex-1 bg-white overflow-hidden flex flex-col items-center justify-center py-5 px-14 box-border max-w-full mq750:pl-7 mq750:pr-7 mq750:box-border">
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 px-[47px] box-border gap-[30px] max-w-full lg:pl-[23px] lg:pr-[23px] lg:box-border mq750:gap-[15px]">
          <img
            className="h-[530px] flex-1 max-w-full overflow-hidden object-cover min-w-[360px]"
            loading="lazy"
            alt=""
            src="/video-section@2x.png"
          />
          <div className="w-[304px] rounded-3xs bg-main-background flex flex-col items-center justify-start py-5 px-0 box-border gap-[26px]">
            <div className="rounded-8xs bg-variant-background overflow-hidden flex flex-row items-center justify-start p-5">
              <img
                className="h-[18px] w-5 relative"
                loading="lazy"
                alt=""
                src="/vector2.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-center justify-start py-0 px-5 gap-2.5">
              <h3 className="m-0 self-stretch relative text-inherit leading-[29px] font-bold font-inherit mq450:text-lgi mq450:leading-[23px]">
                Knowledge Base
              </h3>
              <div className="self-stretch relative text-base tracking-[-0.03em] leading-[160%] font-medium text-text">
                We are passionate about education and while we learn, we want to
                be able to share that with you.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
