import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type PageHeaderType = {
  className?: string;
  aboutUs?: string;
  atKisstechOurRootsRunDeep?: string;
  weValueYourTimeAndPriorit?: string;

  /** Style props */
  propFlexWrap?: CSSProperties["flexWrap"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
  pageHeaderAlignSelf?: CSSProperties["alignSelf"];
  pageHeaderWidth?: CSSProperties["width"];
  headingWidth?: CSSProperties["width"];
  headingPadding?: CSSProperties["padding"];
  headingAlignSelf?: CSSProperties["alignSelf"];
  frameDivHeight?: CSSProperties["height"];
  frameDivPadding?: CSSProperties["padding"];
  lineDivAlignSelf?: CSSProperties["alignSelf"];
  lineDivWidth?: CSSProperties["width"];
  aboutUsMargin?: CSSProperties["margin"];
  aboutUsFontWeight?: CSSProperties["fontWeight"];
  textDisplay?: CSSProperties["display"];
};

const PageHeader: NextPage<PageHeaderType> = ({
  className = "",
  propFlexWrap,
  propFlex,
  propMinWidth,
  propWidth,
  aboutUs,
  propHeight,
  propDisplay,
  atKisstechOurRootsRunDeep,
  weValueYourTimeAndPriorit,
  pageHeaderAlignSelf,
  pageHeaderWidth,
  headingWidth,
  headingPadding,
  headingAlignSelf,
  frameDivHeight,
  frameDivPadding,
  lineDivAlignSelf,
  lineDivWidth,
  aboutUsMargin,
  aboutUsFontWeight,
  textDisplay,
}) => {
  const heading2Style: CSSProperties = useMemo(() => {
    return {
      flexWrap: propFlexWrap,
      width: headingWidth,
      padding: headingPadding,
      alignSelf: headingAlignSelf,
    };
  }, [propFlexWrap, headingWidth, headingPadding, headingAlignSelf]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
      height: frameDivHeight,
      padding: frameDivPadding,
    };
  }, [propFlex, propMinWidth, propWidth, frameDivHeight, frameDivPadding]);

  const aboutUs1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
      margin: aboutUsMargin,
      fontWeight: aboutUsFontWeight,
    };
  }, [propHeight, propDisplay, aboutUsMargin, aboutUsFontWeight]);

  const pageHeaderStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: pageHeaderAlignSelf,
      width: pageHeaderWidth,
    };
  }, [pageHeaderAlignSelf, pageHeaderWidth]);

  const lineDivStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: lineDivAlignSelf,
      width: lineDivWidth,
    };
  }, [lineDivAlignSelf, lineDivWidth]);

  const text3Style: CSSProperties = useMemo(() => {
    return {
      display: textDisplay,
    };
  }, [textDisplay]);

  return (
    <section
      className={`self-stretch bg-main-background overflow-hidden flex flex-col items-center justify-start py-[60px] px-5 box-border gap-5 max-w-full text-left text-37xl text-variant-background font-heading-2 mq825:pt-[39px] mq825:pb-[39px] mq825:box-border ${className}`}
      style={pageHeaderStyle}
    >
      <div
        className="w-[1140px] flex flex-row flex-wrap items-center justify-center py-0 px-[305px] box-border gap-[38px] max-w-full lg:pl-[152px] lg:pr-[152px] lg:box-border gap-[19px] mq825:pl-[76px] mq825:pr-[76px] mq825:box-border mq450:pl-5 mq450:pr-5 mq450:box-border"
        style={heading2Style}
      >
        <div
          className="h-10 flex-1 flex flex-col items-start justify-start py-5 px-0 box-border min-w-[157px]"
          style={frameDiv1Style}
        >
          <div
            className="self-stretch h-px relative border-border-2 border-t-[1px] border-solid box-border"
            style={lineDivStyle}
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          <h1
            className="m-0 relative text-inherit leading-[120%] font-bold font-inherit mq825:text-26xl mq825:leading-[54px] mq450:text-15xl mq450:leading-[40px]"
            style={aboutUs1Style}
          >
            {aboutUs}
          </h1>
        </div>
      </div>
      <div className="w-[602px] flex flex-row flex-wrap items-center justify-center p-2.5 box-border max-w-full text-lg text-text">
        <div
          className="flex-1 relative tracking-[-0.03em] leading-[160%] inline-block max-w-full"
          style={text3Style}
        >
          <p className="m-0">{atKisstechOurRootsRunDeep}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">{weValueYourTimeAndPriorit}</p>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
