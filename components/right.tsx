import type { NextPage } from "next";

export type RightType = {
  className?: string;
};

const Right: NextPage<RightType> = ({ className = "" }) => {
  return (
    <div
      className={`h-[794px] flex-1 overflow-hidden flex flex-row flex-wrap items-start justify-start py-[86px] px-0 box-border relative min-w-[494px] max-w-full text-left text-sm text-primary font-heading-2 mq750:min-w-full ${className}`}
    >
      <div className="h-60 w-80 absolute !m-[0] top-[86px] left-[0px] overflow-hidden shrink-0">
        <div className="absolute h-full top-[0px] right-[0px] bottom-[0px] rounded-t-3xs rounded-b-none bg-accent w-[185px]" />
        <img
          className="absolute top-[-81.7px] left-[82.1px] w-[339.3px] h-[382.3px] object-contain z-[1]"
          alt=""
          src="/friendlyyoungafricanamericanpsychologistwith20231127051705utc-1@2x.png"
        />
      </div>
      <div className="w-[321px] !m-[0] absolute top-[86px] right-[60px] rounded-3xs bg-accent overflow-hidden shrink-0 flex flex-row items-start justify-end max-w-full">
        <img
          className="h-[607.9px] flex-1 relative max-w-full overflow-hidden object-cover"
          loading="lazy"
          alt=""
          src="/personwithstackofcoinsandpiggybanksaving20231127045606utc-1@2x.png"
        />
      </div>
      <div className="!m-[0] absolute top-[536px] left-[117.4px] shadow-[0px_20px_90px_rgba(0,_0,_0,_0.25)] rounded-tl-3xs rounded-tr-980xl rounded-br-980xl rounded-bl-3xs bg-white flex flex-row items-end justify-start py-4 px-[30px] gap-[27px] z-[1]">
        <div className="h-[45px] w-[45px] rounded-980xl bg-white border-border-1 border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-center justify-start">
          <img
            className="h-[89px] w-[89px] relative object-cover shrink-0"
            alt=""
            src="/businesspeopleandteambuildinginrowinoffic20231127050924utc-1@2x.png"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-1">
          <div className="flex flex-row items-center justify-center">
            <div className="relative tracking-[-0.03em] leading-[160%] font-medium">
              All-In-One Business Solutions
            </div>
          </div>
          <div className="flex flex-row items-start justify-start">
            <img
              className="h-[22px] w-[22px] relative min-h-[22px]"
              loading="lazy"
              alt=""
              src="/star-1.svg"
            />
            <img
              className="h-[22px] w-[22px] relative min-h-[22px]"
              loading="lazy"
              alt=""
              src="/star-1.svg"
            />
            <img
              className="h-[22px] w-[22px] relative min-h-[22px]"
              alt=""
              src="/star-1.svg"
            />
            <img
              className="h-[22px] w-[22px] relative min-h-[22px]"
              alt=""
              src="/star-1.svg"
            />
            <img
              className="h-[22px] w-[22px] relative min-h-[22px]"
              alt=""
              src="/star-1.svg"
            />
          </div>
        </div>
      </div>
      <div className="!m-[0] absolute top-[334px] left-[155px] rounded-3xs bg-steelblue flex flex-row items-start justify-start pt-[53px] pb-[52.6px] pl-[37px] pr-[27px]">
        <div className="h-[171px] w-[152px] relative rounded-3xs bg-steelblue hidden" />
        <img
          className="h-[65.4px] w-[87.4px] relative z-[1]"
          loading="lazy"
          alt=""
          src="/vector1.svg"
        />
      </div>
    </div>
  );
};

export default Right;
