import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type BannerType = {
  className?: string;

  /** Style props */
  bannerWidth?: CSSProperties["width"];
  bannerAlignSelf?: CSSProperties["alignSelf"];
  containerGap?: CSSProperties["gap"];
  funFact1Width?: CSSProperties["width"];
  eMPOWERYOURBUSINESSContaiMargin?: CSSProperties["margin"];
  eMPOWERYOURBUSINESSContaiAlignSelf?: CSSProperties["alignSelf"];
  eMPOWERYOURBUSINESSContaiFontWeight?: CSSProperties["fontWeight"];
  kisstechSolutionsWidth?: CSSProperties["width"];
  kisstechSolutionsDisplay?: CSSProperties["display"];
  operateMargin?: CSSProperties["margin"];
  operateFontWeight?: CSSProperties["fontWeight"];
  innovateMargin?: CSSProperties["margin"];
  innovateFontWeight?: CSSProperties["fontWeight"];
  thriveMargin?: CSSProperties["margin"];
  thriveFontWeight?: CSSProperties["fontWeight"];
};

const Banner: NextPage<BannerType> = ({
  className = "",
  bannerWidth,
  bannerAlignSelf,
  containerGap,
  funFact1Width,
  eMPOWERYOURBUSINESSContaiMargin,
  eMPOWERYOURBUSINESSContaiAlignSelf,
  eMPOWERYOURBUSINESSContaiFontWeight,
  kisstechSolutionsWidth,
  kisstechSolutionsDisplay,
  operateMargin,
  operateFontWeight,
  innovateMargin,
  innovateFontWeight,
  thriveMargin,
  thriveFontWeight,
}) => {
  const bannerStyle: CSSProperties = useMemo(() => {
    return {
      width: bannerWidth,
      alignSelf: bannerAlignSelf,
    };
  }, [bannerWidth, bannerAlignSelf]);

  const containerStyle: CSSProperties = useMemo(() => {
    return {
      gap: containerGap,
    };
  }, [containerGap]);

  const funFact1Style: CSSProperties = useMemo(() => {
    return {
      width: funFact1Width,
    };
  }, [funFact1Width]);

  const eMPOWERYOURBUSINESSContainerStyle: CSSProperties = useMemo(() => {
    return {
      margin: eMPOWERYOURBUSINESSContaiMargin,
      alignSelf: eMPOWERYOURBUSINESSContaiAlignSelf,
      fontWeight: eMPOWERYOURBUSINESSContaiFontWeight,
    };
  }, [
    eMPOWERYOURBUSINESSContaiMargin,
    eMPOWERYOURBUSINESSContaiAlignSelf,
    eMPOWERYOURBUSINESSContaiFontWeight,
  ]);

  const kisstechSolutionsStyle: CSSProperties = useMemo(() => {
    return {
      width: kisstechSolutionsWidth,
      display: kisstechSolutionsDisplay,
    };
  }, [kisstechSolutionsWidth, kisstechSolutionsDisplay]);

  const operateStyle: CSSProperties = useMemo(() => {
    return {
      margin: operateMargin,
      fontWeight: operateFontWeight,
    };
  }, [operateMargin, operateFontWeight]);

  const innovateStyle: CSSProperties = useMemo(() => {
    return {
      margin: innovateMargin,
      fontWeight: innovateFontWeight,
    };
  }, [innovateMargin, innovateFontWeight]);

  const thriveStyle: CSSProperties = useMemo(() => {
    return {
      margin: thriveMargin,
      fontWeight: thriveFontWeight,
    };
  }, [thriveMargin, thriveFontWeight]);

  return (
    <section
      className={`self-stretch bg-variant-background overflow-hidden flex flex-row flex-wrap items-start justify-center py-[17px] px-[107px] box-border max-w-full text-center text-37xl text-white font-heading-2 mq800:pl-[53px] mq800:pr-[53px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
      style={bannerStyle}
    >
      <div
        className="flex-1 flex flex-row flex-wrap items-center justify-between max-w-full gap-5"
        style={containerStyle}
      >
        <div
          className="w-[296px] flex flex-col items-center justify-start gap-4"
          style={funFact1Style}
        >
          <h1
            className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq800:text-26xl mq800:leading-[54px] mq450:text-15xl mq450:leading-[40px]"
            style={eMPOWERYOURBUSINESSContainerStyle}
          >
            <p className="m-0">{`EMPOWER `}</p>
            <p className="m-0">{`YOUR `}</p>
            <p className="m-0">BUSINESS</p>
          </h1>
          <div
            className="w-[131px] relative text-base tracking-[-0.03em] leading-[26px] font-medium text-main-background inline-block"
            style={kisstechSolutionsStyle}
          >
            Kisstech Solutions
          </div>
        </div>
        <div className="h-[61px] w-px relative border-border-1 border-r-[1px] border-solid box-border" />
        <div className="flex flex-col items-center justify-start">
          <h1
            className="m-0 relative text-inherit leading-[120%] font-bold font-inherit mq800:text-26xl mq800:leading-[54px] mq450:text-15xl mq450:leading-[40px]"
            style={operateStyle}
          >
            Operate
          </h1>
        </div>
        <div className="h-[61px] w-px relative border-border-1 border-r-[1px] border-solid box-border" />
        <div className="flex flex-col items-center justify-start">
          <h1
            className="m-0 relative text-inherit leading-[120%] font-bold font-inherit mq800:text-26xl mq800:leading-[54px] mq450:text-15xl mq450:leading-[40px]"
            style={innovateStyle}
          >
            Innovate
          </h1>
        </div>
        <div className="h-[61px] w-px relative border-border-1 border-r-[1px] border-solid box-border" />
        <div className="flex flex-col items-center justify-start">
          <h1
            className="m-0 relative text-inherit leading-[120%] font-bold font-inherit mq800:text-26xl mq800:leading-[54px] mq450:text-15xl mq450:leading-[40px]"
            style={thriveStyle}
          >
            Thrive
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
