import type { NextPage } from "next";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start box-border max-w-full text-center text-5xl text-primary font-heading-2 mq750:pb-[58px] mq750:box-border ${className}`}
    >
      <div className="flex-1 bg-white overflow-hidden flex flex-col items-center justify-center py-5 px-14 box-border max-w-full mq750:pl-7 mq750:pr-7 mq750:box-border">
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 px-[47px] box-border gap-[30px] max-w-full lg:pl-[23px] lg:pr-[23px] lg:box-border mq750:gap-[15px]">
          <img
            className="h-[530px] flex-1 max-w-full overflow-hidden object-cover min-w-[360px]"
            loading="lazy"
            alt=""
            src="/KBImage.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
