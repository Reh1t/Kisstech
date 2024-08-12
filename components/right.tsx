import type { NextPage } from "next";

export type RightType = {
  className?: string;
};

const Right: NextPage<RightType> = ({ className = "" }) => {
  return (
    <div
      className={`h-[794px] flex-1 overflow-hidden flex flex-row flex-wrap items-start justify-start py-[86px] px-0 box-border relative min-w-[494px] max-w-full text-left text-sm text-primary font-heading-2 mq750:min-w-full ${className}`}
    >
      <div className="h-60 w-80 absolute !m-[0] top-[86px] left-[0px] overflow-hidden shrink-0 mq750:hidden">
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
      
      <div className="!m-[0] absolute top-[334px] left-[155px] rounded-3xs bg-steelblue flex flex-row items-start justify-start pt-[53px] pb-[52.6px] pl-[37px] pr-[27px] mq750:hidden">
        <div className="h-[171px] w-[152px] relative rounded-3xs bg-steelblue hidden" />
        <img
          className="h-[65.4px] w-[87.4px] relative z-[1]"
          loading="lazy"
          alt=""
          src="/13.png"
        />
      </div>
    </div>
  );
};

export default Right;
