import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ServiceCardType = {
  className?: string;
  heading?: string;
  paragraph?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propHeight?: CSSProperties["height"];
  propDisplay1?: CSSProperties["display"];
  propMinHeight?: CSSProperties["minHeight"];
  serviceCardWidth?: CSSProperties["width"];
  titleFlex?: CSSProperties["flex"];
  titleMinWidth?: CSSProperties["minWidth"];
  headingMargin?: CSSProperties["margin"];
  headingFontWeight?: CSSProperties["fontWeight"];
  paragraphWidth?: CSSProperties["width"];
  paragraphAlignSelf?: CSSProperties["alignSelf"];
};

const ServiceCard: NextPage<ServiceCardType> = ({
  className = "",
  heading,
  propDisplay,
  propHeight,
  paragraph,
  propDisplay1,
  propMinHeight,
  serviceCardWidth,
  titleFlex,
  titleMinWidth,
  headingMargin,
  headingFontWeight,
  paragraphWidth,
  paragraphAlignSelf,
}) => {
  const headingStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      height: propHeight,
      margin: headingMargin,
      fontWeight: headingFontWeight,
    };
  }, [propDisplay, propHeight, headingMargin, headingFontWeight]);

  const paragraphStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay1,
      minHeight: propMinHeight,
      width: paragraphWidth,
      alignSelf: paragraphAlignSelf,
    };
  }, [propDisplay1, propMinHeight, paragraphWidth, paragraphAlignSelf]);

  const serviceCardStyle: CSSProperties = useMemo(() => {
    return {
      width: serviceCardWidth,
    };
  }, [serviceCardWidth]);

  const titleStyle: CSSProperties = useMemo(() => {
    return {
      flex: titleFlex,
      minWidth: titleMinWidth,
    };
  }, [titleFlex, titleMinWidth]);

  return (
    <div
      className={`w-[550px] rounded-3xs bg-main-background border-border-1 border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-3 px-[49px] gap-9 max-w-full text-left text-13xl text-primary font-heading-2 mq800:flex-wrap mq800:pl-6 mq800:pr-6 mq800:box-border ${className}`}
      style={serviceCardStyle}
    >
      <div className="rounded-8xs bg-variant-background overflow-hidden flex flex-row items-center justify-start py-[34px] px-7">
        <img className="h-5 w-[18px] relative" alt="" src="/vector-11.svg" />
      </div>
      <div
        className="flex-1 flex flex-col items-start justify-start gap-2.5 min-w-[221px] max-w-full"
        style={titleStyle}
      >
        <h1
          className="m-0 relative text-inherit tracking-[-0.02em] leading-[120%] font-bold font-inherit mq800:text-7xl mq800:leading-[31px] mq450:text-lgi mq450:leading-[23px]"
          style={headingStyle}
        >
          {heading}
        </h1>
        <div
          className="self-stretch relative text-base tracking-[-0.03em] leading-[160%] font-medium text-text"
          style={paragraphStyle}
        >
          {paragraph}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
