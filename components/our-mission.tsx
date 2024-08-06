import type { NextPage } from "next";

export type OurMissionType = {
  className?: string;
};

const OurMission: NextPage<OurMissionType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-white overflow-hidden flex flex-row items-center justify-between py-7 px-[138px] box-border max-w-full gap-5 text-left text-mid text-secondary font-heading-2 lg:pt-5 lg:pb-5 lg:box-border mq825:pl-[34px] mq825:pr-[34px] mq825:box-border mq1400:flex-wrap mq1400:justify-center mq1400:pl-[69px] mq1400:pr-[69px] mq1400:box-border ${className}`}
    >
      <div className="w-[580px] flex flex-col items-start justify-start gap-[90px] min-w-[580px] max-w-full lg:min-w-full gap-[45px] gap-[22px] mq1400:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-0 box-border gap-3.5 max-w-full">
          <div className="relative tracking-[0.15em] leading-[120%] uppercase font-medium">
            Our Mission
          </div>
          <h1 className="m-0 w-[616px] relative text-29xl leading-[58px] font-bold font-inherit text-primary inline-block max-w-[107%] shrink-0 mq825:text-19xl mq825:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
            Operate. Innovate. Thrive
          </h1>
        </div>
        <div className="w-[464px] flex flex-col items-start justify-start gap-[30px] max-w-full text-5xl text-variant-background">
          <div className="w-[430px] flex flex-row items-start justify-start gap-10 max-w-full shrink-0 mq450:flex-wrap gap-5">
            <b className="w-10 relative leading-[29px] inline-block shrink-0 mq450:text-lgi mq450:leading-[23px]">
              01
            </b>
            <div className="flex-1 flex flex-col items-start justify-start gap-2.5 min-w-[227px] max-w-full">
              <h3 className="m-0 w-[300px] relative text-inherit leading-[29px] font-bold font-inherit inline-block mq450:text-lgi mq450:leading-[23px]">
                Customer-Centric Focus
              </h3>
              <div className="self-stretch relative text-base tracking-[-0.53px] leading-[160%] font-medium text-text inline-block min-h-[130px]">{`Tailored solutions for what matters to you and your business. Choose products that are meaningful and relevant to improving the success of your business, without breaking the bank. `}</div>
            </div>
          </div>
          <div className="self-stretch h-px relative border-border-1 border-t-[1px] border-solid box-border" />
          <div className="w-[430px] flex flex-row items-start justify-start gap-10 max-w-full shrink-0 mq450:flex-wrap gap-5">
            <b className="w-10 relative leading-[29px] inline-block shrink-0 mq450:text-lgi mq450:leading-[23px]">
              02
            </b>
            <div className="flex-1 flex flex-col items-start justify-start gap-2.5 min-w-[227px] max-w-full">
              <h3 className="m-0 relative text-inherit leading-[29px] font-bold font-inherit mq450:text-lgi mq450:leading-[23px]">
                Commitment to Integrity
              </h3>
              <div className="self-stretch relative text-base tracking-[-0.03em] leading-[160%] font-medium text-text">
                We prioritize transparency, efficeincy and genuine value
                delivery. Say goodbye to the confusion, and let us show you how
                innovative technology can both cut costs and wasted time and
                drive profits for your business.
              </div>
            </div>
          </div>
          <div className="self-stretch h-px relative border-border-1 border-t-[1px] border-solid box-border" />
          <div className="w-[430px] flex flex-row items-start justify-start gap-10 max-w-full shrink-0 mq450:flex-wrap gap-5">
            <b className="w-10 relative leading-[29px] inline-block shrink-0 mq450:text-lgi mq450:leading-[23px]">
              03
            </b>
            <div className="flex-1 flex flex-col items-start justify-start gap-2.5 min-w-[227px] max-w-full">
              <h3 className="m-0 self-stretch relative text-inherit leading-[29px] font-bold font-inherit mq450:text-lgi mq450:leading-[23px]">
                Innovation and Adaptability
              </h3>
              <div className="self-stretch relative text-base tracking-[-0.03em] leading-[160%] font-medium text-text">
                <p className="m-0">{`Stay ahead with cutting-edge technology solutions tailored to elevate your business. `}</p>
                <p className="m-0">
                  Foster creativity and adapt to the latest advancements in the
                  digital landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[716px] w-[520px] rounded-3xs bg-secondary overflow-hidden shrink-0 flex flex-col items-start justify-start min-w-[520px] max-w-full lg:min-w-full mq1400:flex-1">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover mq1400:self-stretch mq1400:w-auto"
          loading="lazy"
          alt=""
          src="/individualsholdingsmallumbrellasandmodelhome20231127052253utc-1@2x.png"
        />
      </div>
    </section>
  );
};

export default OurMission;
