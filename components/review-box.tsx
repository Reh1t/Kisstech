import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ReviewBoxType = {
  className?: string;
  angusAClient?: string;
  text?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const ReviewBox: NextPage<ReviewBoxType> = ({
  className = "",
  angusAClient,
  propMinWidth,
  text,
}) => {
  const angusAClientStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`flex-1 rounded-3xs bg-white border-border-1 border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start py-5 px-[29px] gap-[23px] min-w-[300px] max-w-full text-left text-sm text-primary font-heading-2 ${className}`}
    >
      <div className="flex flex-row items-center justify-start">
        <div className="flex flex-col items-start justify-start gap-1">
          <div className="flex flex-row items-start justify-start">
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
          <div
            className="relative tracking-[-0.03em] leading-[160%] font-medium inline-block min-w-[92px]"
            style={angusAClientStyle}
          >
            {angusAClient}
          </div>
        </div>
      </div>
      <div className="w-[285px] h-px relative border-border-1 border-t-[1px] border-solid box-border" />
      <div className="self-stretch flex flex-row items-center justify-center p-2.5 text-base text-text">
        <blockquote className="m-0 flex-1 relative tracking-[-0.03em] leading-[160%] font-medium">
          {text}
        </blockquote>
      </div>
    </div>
  );
};

export default ReviewBox;
