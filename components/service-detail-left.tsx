import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Button1 from "./button1";

export type ServiceDetailLeftType = {
  className?: string;
  digitalMarketingServices?: string;
  text?: string;
  grandparentsParentsOrPort?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propHeight?: CSSProperties["height"];
};

const ServiceDetailLeft: NextPage<ServiceDetailLeftType> = ({
  className = "",
  propGap,
  propWidth,
  propMinWidth,
  propAlignSelf,
  digitalMarketingServices,
  propHeight,
  text,
  grandparentsParentsOrPort,
}) => {
  const serviceDetailLeftStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const leftSideStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  const textLineStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const digitalMarketingServicesStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <section
      className={`self-stretch bg-white flex flex-row items-start justify-between py-5 px-[165px] box-border max-w-full gap-5 text-left text-17xl text-primary font-heading-2 mq825:pl-[82px] mq825:pr-[82px] mq825:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1425:flex-wrap ${className}`}
      style={serviceDetailLeftStyle}
    >
      <div
        className="w-[513px] flex flex-col items-center justify-start gap-6 min-w-[513px] max-w-full lg:min-w-full mq1425:flex-1"
        style={leftSideStyle}
      >
        <div className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full">
          <div
            className="self-stretch flex flex-row items-center justify-start gap-5 max-w-full mq825:flex-wrap"
            style={textLineStyle}
          >
            <div className="h-px w-[91px] relative border-border-2 border-t-[1px] border-solid box-border" />
            <h1
              className="m-0 relative text-inherit tracking-[-0.02em] leading-[120%] font-bold font-inherit inline-block max-w-full mq825:text-10xl mq825:leading-[35px] mq450:text-3xl mq450:leading-[26px]"
              style={digitalMarketingServicesStyle}
            >
              {digitalMarketingServices}
            </h1>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-lg text-text">
            <div className="self-stretch relative tracking-[-0.55px] leading-[160%]">
              {text}
            </div>
          </div>
        </div>
        <Button1 />
      </div>
      <div className="h-[338px] w-[482px] rounded-xl bg-secondary overflow-hidden shrink-0 flex flex-col items-start justify-start min-w-[482px] max-w-full lg:min-w-full mq1425:flex-1">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover mq1425:self-stretch mq1425:w-auto"
          alt=""
          src={grandparentsParentsOrPort}
        />
      </div>
    </section>
  );
};

export default ServiceDetailLeft;
