import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Button from "./button";

export type PhotoGridAndInfoSectionType = {
  className?: string;
  beachHappyAndPortraitOfAB?: string;
  frameDiv?: boolean;
  herAttitudeShinesThroughT?: string;
  image3?: string;
  allInOneBusinessSolutions?: string;
  unleashThePowerOfTechnolo?: string;
  whyChooseKisstech?: boolean;
  text?: string;
  getAQuote?: string;

  /** Style props */
  propMinHeight?: CSSProperties["minHeight"];
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
  propMinWidth2?: CSSProperties["minWidth"];
  propWidth1?: CSSProperties["width"];
  propMinWidth3?: CSSProperties["minWidth"];
  propFlex?: CSSProperties["flex"];
  propDisplay?: CSSProperties["display"];
  propMinWidth4?: CSSProperties["minWidth"];
  propWidth2?: CSSProperties["width"];
  propMargin?: CSSProperties["margin"];
  propHeight?: CSSProperties["height"];
  propFontWeight?: CSSProperties["fontWeight"];
  propFontWeight1?: CSSProperties["fontWeight"];
  photoGridAndInfoSectionAlignSelf?: CSSProperties["alignSelf"];
  photoGridAndInfoSectionWidth?: CSSProperties["width"];
  frameDivPadding?: CSSProperties["padding"];
  frameDivPadding1?: CSSProperties["padding"];
  frameDivAlignSelf?: CSSProperties["alignSelf"];
  frameDivFlex?: CSSProperties["flex"];
  beachHappyAndPortraitOfAIFlex?: CSSProperties["flex"];
  beachHappyAndPortraitOfAIOverflow?: CSSProperties["overflow"];
  beachHappyAndPortraitOfAIWidth?: CSSProperties["width"];
  frameDivHeight?: CSSProperties["height"];
  herAttitudeShinesThroughTFlex?: CSSProperties["flex"];
  herAttitudeShinesThroughTMaxHeight?: CSSProperties["maxHeight"];
  herAttitudeShinesThroughTHeight?: CSSProperties["height"];
  image3IconFlex?: CSSProperties["flex"];
  image3IconMaxHeight?: CSSProperties["maxHeight"];
  image3IconHeight?: CSSProperties["height"];
  titleWidth?: CSSProperties["width"];
  unleashThePowerMargin?: CSSProperties["margin"];
  unleashThePowerAlignSelf?: CSSProperties["alignSelf"];
  unleashThePowerFontWeight?: CSSProperties["fontWeight"];
  unleashThePowerWidth?: CSSProperties["width"];
  unleashThePowerDisplay?: CSSProperties["display"];
};

const PhotoGridAndInfoSection: NextPage<PhotoGridAndInfoSectionType> = ({
  className = "",
  propMinHeight,
  propWidth,
  propMinWidth,
  propMinWidth1,
  beachHappyAndPortraitOfAB,
  frameDiv,
  propMinWidth2,
  herAttitudeShinesThroughT,
  image3,
  propWidth1,
  propMinWidth3,
  propFlex,
  allInOneBusinessSolutions,
  propDisplay,
  propMinWidth4,
  unleashThePowerOfTechnolo,
  whyChooseKisstech,
  propWidth2,
  propMargin,
  propHeight,
  propFontWeight,
  text,
  propFontWeight1,
  getAQuote,
  photoGridAndInfoSectionAlignSelf,
  photoGridAndInfoSectionWidth,
  frameDivPadding,
  frameDivPadding1,
  frameDivAlignSelf,
  frameDivFlex,
  beachHappyAndPortraitOfAIFlex,
  beachHappyAndPortraitOfAIOverflow,
  beachHappyAndPortraitOfAIWidth,
  frameDivHeight,
  herAttitudeShinesThroughTFlex,
  herAttitudeShinesThroughTMaxHeight,
  herAttitudeShinesThroughTHeight,
  image3IconFlex,
  image3IconMaxHeight,
  image3IconHeight,
  titleWidth,
  unleashThePowerMargin,
  unleashThePowerAlignSelf,
  unleashThePowerFontWeight,
  unleashThePowerWidth,
  unleashThePowerDisplay,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight,
      padding: frameDivPadding,
    };
  }, [propMinHeight, frameDivPadding]);

  const photoSectionStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
      flex: frameDivFlex,
    };
  }, [propMinWidth1, frameDivFlex]);

  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
      height: frameDivHeight,
    };
  }, [propMinWidth2, frameDivHeight]);

  const informationSectionStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      minWidth: propMinWidth3,
      flex: propFlex,
    };
  }, [propWidth1, propMinWidth3, propFlex]);

  const allInOneBusinessSolutionsStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth4,
    };
  }, [propDisplay, propMinWidth4]);

  const whyChooseKisstechStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
      margin: propMargin,
      height: propHeight,
      fontWeight: propFontWeight,
    };
  }, [propWidth2, propMargin, propHeight, propFontWeight]);

  const text4Style: CSSProperties = useMemo(() => {
    return {
      fontWeight: propFontWeight1,
    };
  }, [propFontWeight1]);

  const photoGridAndInfoSectionStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: photoGridAndInfoSectionAlignSelf,
      width: photoGridAndInfoSectionWidth,
    };
  }, [photoGridAndInfoSectionAlignSelf, photoGridAndInfoSectionWidth]);

  const frameDiv5Style: CSSProperties = useMemo(() => {
    return {
      padding: frameDivPadding1,
    };
  }, [frameDivPadding1]);

  const frameDiv6Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivAlignSelf]);

  const beachHappyAndPortraitOfAIconStyle: CSSProperties = useMemo(() => {
    return {
      flex: beachHappyAndPortraitOfAIFlex,
      overflow: beachHappyAndPortraitOfAIOverflow,
      width: beachHappyAndPortraitOfAIWidth,
    };
  }, [
    beachHappyAndPortraitOfAIFlex,
    beachHappyAndPortraitOfAIOverflow,
    beachHappyAndPortraitOfAIWidth,
  ]);

  const herAttitudeShinesThroughThIconStyle: CSSProperties = useMemo(() => {
    return {
      flex: herAttitudeShinesThroughTFlex,
      maxHeight: herAttitudeShinesThroughTMaxHeight,
      height: herAttitudeShinesThroughTHeight,
    };
  }, [
    herAttitudeShinesThroughTFlex,
    herAttitudeShinesThroughTMaxHeight,
    herAttitudeShinesThroughTHeight,
  ]);

  const image3IconStyle: CSSProperties = useMemo(() => {
    return {
      flex: image3IconFlex,
      maxHeight: image3IconMaxHeight,
      height: image3IconHeight,
    };
  }, [image3IconFlex, image3IconMaxHeight, image3IconHeight]);

  const title2Style: CSSProperties = useMemo(() => {
    return {
      width: titleWidth,
    };
  }, [titleWidth]);

  const unleashThePowerStyle: CSSProperties = useMemo(() => {
    return {
      margin: unleashThePowerMargin,
      alignSelf: unleashThePowerAlignSelf,
      fontWeight: unleashThePowerFontWeight,
      width: unleashThePowerWidth,
      display: unleashThePowerDisplay,
    };
  }, [
    unleashThePowerMargin,
    unleashThePowerAlignSelf,
    unleashThePowerFontWeight,
    unleashThePowerWidth,
    unleashThePowerDisplay,
  ]);

  return (
    <section
      className={`self-stretch bg-white overflow-hidden flex flex-row flex-wrap items-start justify-center py-[61px] px-5 box-border max-w-full text-left text-5xl text-gray-100 font-heading-2 mq825:pt-10 mq825:pb-10 mq825:box-border ${className}`}
      style={photoGridAndInfoSectionStyle}
    >
      <div
        className="w-[1240px] flex flex-row flex-wrap items-start justify-center py-0 px-0 box-border gap-[21px] min-h-[429px] max-w-full"
        style={frameDiv2Style}
      >
        <div
          className="w-[1272px] flex flex-row items-start justify-center py-0 px-[156px] box-border gap-[97px] max-w-full lg:flex-wrap gap-12 mq825:pl-[39px] mq825:pr-[39px] mq825:box-border gap-6 mq1400:pl-[78px] mq1400:pr-[78px] mq1400:box-border"
          style={frameDiv5Style}
        >
          <div
            className="w-[279.4px] flex flex-col items-start justify-start gap-[27px] min-w-[279.4px] lg:flex-1"
            style={photoSectionStyle}
          >
            <div
              className="self-stretch flex flex-row items-center justify-start gap-px"
              style={frameDiv6Style}
            >
              <div
                className="flex-1 flex flex-row items-center justify-start p-2.5"
                style={frameDiv3Style}
              >
                <img
                  className="h-[388px] flex-1 relative rounded-3xs max-w-full overflow-hidden object-cover"
                  alt=""
                  src={beachHappyAndPortraitOfAB}
                  style={beachHappyAndPortraitOfAIconStyle}
                />
              </div>
              {!frameDiv && (
                <div
                  className="h-[391px] w-[257px] hidden flex-col items-start justify-start gap-5"
                  style={frameDiv4Style}
                >
                  <img
                    className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src={herAttitudeShinesThroughT}
                    style={herAttitudeShinesThroughThIconStyle}
                  />
                  <img
                    className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src={image3}
                    style={image3IconStyle}
                  />
                </div>
              )}
            </div>
            <b className="w-[435px] relative leading-[120%] hidden max-w-full mq450:text-lgi mq450:leading-[23px]">
              <p className="m-0">Say Goodbye to Scams,</p>
              <p className="m-0">Say Hello to Smart Business Solutions</p>
            </b>
          </div>
          <div
            className="flex-1 flex flex-col items-start justify-start gap-[30px] min-w-[378px] max-w-full text-mid text-secondary mq825:min-w-full"
            style={informationSectionStyle}
          >
            <div
              className="w-[516px] flex flex-col items-start justify-start gap-3.5 max-w-full"
              style={title2Style}
            >
              <div
                className="relative tracking-[0.15em] leading-[120%] uppercase font-medium whitespace-nowrap"
                style={allInOneBusinessSolutionsStyle}
              >
                {allInOneBusinessSolutions}
              </div>
              <h1
                className="m-0 self-stretch relative text-29xl leading-[120%] font-bold font-inherit text-primary mq825:text-19xl mq825:leading-[46px] mq450:text-10xl mq450:leading-[35px]"
                style={unleashThePowerStyle}
              >
                {unleashThePowerOfTechnolo}
              </h1>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-3.5 max-w-full text-5xl text-variant-background">
              {!whyChooseKisstech && (
                <b
                  className="w-[346px] relative leading-[120%] max-w-full mq450:text-lgi mq450:leading-[23px]"
                  style={whyChooseKisstechStyle}
                >
                  All-in-One Business Solutions
                </b>
              )}
              <div
                className="self-stretch relative text-lg tracking-[-0.03em] leading-[160%] text-text"
                style={text4Style}
              >
                {text}
              </div>
            </div>
            <Button getAQuote={getAQuote} />
          </div>
        </div>
        <div className="h-0 w-[1140px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-full">
          <div className="self-stretch h-px relative border-border-1 border-t-[1px] border-solid box-border" />
        </div>
      </div>
    </section>
  );
};

export default PhotoGridAndInfoSection;
