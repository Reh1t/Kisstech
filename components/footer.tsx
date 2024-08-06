import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import { useRouter } from "next/router";

export type FooterType = {
  className?: string;
  kissTech?: string;

  /** Style props */
  footerAlignSelf?: CSSProperties["alignSelf"];
  footerWidth?: CSSProperties["width"];
  containerWidth?: CSSProperties["width"];
  allLinksAlignSelf?: CSSProperties["alignSelf"];
  allLinksPadding?: CSSProperties["padding"];
  allLinksGap?: CSSProperties["gap"];
  allLinksWidth?: CSSProperties["width"];
  phoneSpaceDisplay?: CSSProperties["display"];
  phoneSpaceMinWidth?: CSSProperties["minWidth"];
  navigationPadding?: CSSProperties["padding"];
  navigationAlignSelf?: CSSProperties["alignSelf"];
  phoneSystemsDisplay?: CSSProperties["display"];
  phoneSystemsMinWidth?: CSSProperties["minWidth"];
  salesSupportDisplay?: CSSProperties["display"];
  salesSupportMinWidth?: CSSProperties["minWidth"];
  companyEmailDisplay?: CSSProperties["display"];
  companyEmailMinWidth?: CSSProperties["minWidth"];
  socialMediaDisplay?: CSSProperties["display"];
  socialMediaMinWidth?: CSSProperties["minWidth"];
  headingDisplay?: CSSProperties["display"];
  headingMinWidth?: CSSProperties["minWidth"];
  knowledgeBaseDisplay?: CSSProperties["display"];
  knowledgeBaseMinWidth?: CSSProperties["minWidth"];
  dataPrivacyDisplay?: CSSProperties["display"];
  dataPrivacyMinWidth?: CSSProperties["minWidth"];
  fAQDisplay?: CSSProperties["display"];
  fAQMinWidth?: CSSProperties["minWidth"];
  headingDisplay1?: CSSProperties["display"];
  headingMinWidth1?: CSSProperties["minWidth"];
  phoneIconMinHeight?: CSSProperties["minHeight"];
  divDisplay?: CSSProperties["display"];
  divMinWidth?: CSSProperties["minWidth"];
  lineHeight?: CSSProperties["height"];
  linePadding?: CSSProperties["padding"];
  lineDivFlex?: CSSProperties["flex"];
  lineDivWidth?: CSSProperties["width"];
  copyrightPadding?: CSSProperties["padding"];
  designedByTokoTemaAlignSelf?: CSSProperties["alignSelf"];
};

const Footer: NextPage<FooterType> = ({
  className = "",
  kissTech,
  footerAlignSelf,
  footerWidth,
  containerWidth,
  allLinksAlignSelf,
  allLinksPadding,
  allLinksGap,
  allLinksWidth,
  phoneSpaceDisplay,
  phoneSpaceMinWidth,
  navigationPadding,
  navigationAlignSelf,
  phoneSystemsDisplay,
  phoneSystemsMinWidth,
  salesSupportDisplay,
  salesSupportMinWidth,
  companyEmailDisplay,
  companyEmailMinWidth,
  socialMediaDisplay,
  socialMediaMinWidth,
  headingDisplay,
  headingMinWidth,
  knowledgeBaseDisplay,
  knowledgeBaseMinWidth,
  dataPrivacyDisplay,
  dataPrivacyMinWidth,
  fAQDisplay,
  fAQMinWidth,
  headingDisplay1,
  headingMinWidth1,
  phoneIconMinHeight,
  divDisplay,
  divMinWidth,
  lineHeight,
  linePadding,
  lineDivFlex,
  lineDivWidth,
  copyrightPadding,
  designedByTokoTemaAlignSelf,
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: footerAlignSelf,
      width: footerWidth,
    };
  }, [footerAlignSelf, footerWidth]);

  const container1Style: CSSProperties = useMemo(() => {
    return {
      width: containerWidth,
    };
  }, [containerWidth]);

  const allLinksStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: allLinksAlignSelf,
      padding: allLinksPadding,
      gap: allLinksGap,
      width: allLinksWidth,
    };
  }, [allLinksAlignSelf, allLinksPadding, allLinksGap, allLinksWidth]);

  const phoneSpaceStyle: CSSProperties = useMemo(() => {
    return {
      display: phoneSpaceDisplay,
      minWidth: phoneSpaceMinWidth,
    };
  }, [phoneSpaceDisplay, phoneSpaceMinWidth]);

  const navigationStyle: CSSProperties = useMemo(() => {
    return {
      padding: navigationPadding,
      alignSelf: navigationAlignSelf,
    };
  }, [navigationPadding, navigationAlignSelf]);

  const phoneSystemsStyle: CSSProperties = useMemo(() => {
    return {
      display: phoneSystemsDisplay,
      minWidth: phoneSystemsMinWidth,
    };
  }, [phoneSystemsDisplay, phoneSystemsMinWidth]);

  const salesSupportStyle: CSSProperties = useMemo(() => {
    return {
      display: salesSupportDisplay,
      minWidth: salesSupportMinWidth,
    };
  }, [salesSupportDisplay, salesSupportMinWidth]);

  const companyEmailStyle: CSSProperties = useMemo(() => {
    return {
      display: companyEmailDisplay,
      minWidth: companyEmailMinWidth,
    };
  }, [companyEmailDisplay, companyEmailMinWidth]);

  const socialMediaStyle: CSSProperties = useMemo(() => {
    return {
      display: socialMediaDisplay,
      minWidth: socialMediaMinWidth,
    };
  }, [socialMediaDisplay, socialMediaMinWidth]);

  const heading3Style: CSSProperties = useMemo(() => {
    return {
      display: headingDisplay,
      minWidth: headingMinWidth,
    };
  }, [headingDisplay, headingMinWidth]);

  const knowledgeBaseStyle: CSSProperties = useMemo(() => {
    return {
      display: knowledgeBaseDisplay,
      minWidth: knowledgeBaseMinWidth,
    };
  }, [knowledgeBaseDisplay, knowledgeBaseMinWidth]);

  const dataPrivacyStyle: CSSProperties = useMemo(() => {
    return {
      display: dataPrivacyDisplay,
      minWidth: dataPrivacyMinWidth,
    };
  }, [dataPrivacyDisplay, dataPrivacyMinWidth]);

  const fAQStyle: CSSProperties = useMemo(() => {
    return {
      display: fAQDisplay,
      minWidth: fAQMinWidth,
    };
  }, [fAQDisplay, fAQMinWidth]);

  const heading4Style: CSSProperties = useMemo(() => {
    return {
      display: headingDisplay1,
      minWidth: headingMinWidth1,
    };
  }, [headingDisplay1, headingMinWidth1]);

  const phoneIconStyle: CSSProperties = useMemo(() => {
    return {
      minHeight: phoneIconMinHeight,
    };
  }, [phoneIconMinHeight]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      display: divDisplay,
      minWidth: divMinWidth,
    };
  }, [divDisplay, divMinWidth]);

  const lineStyle: CSSProperties = useMemo(() => {
    return {
      height: lineHeight,
      padding: linePadding,
    };
  }, [lineHeight, linePadding]);

  const lineDiv1Style: CSSProperties = useMemo(() => {
    return {
      flex: lineDivFlex,
      width: lineDivWidth,
    };
  }, [lineDivFlex, lineDivWidth]);

  const copyrightStyle: CSSProperties = useMemo(() => {
    return {
      padding: copyrightPadding,
    };
  }, [copyrightPadding]);

  const designedByTokoTemaStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: designedByTokoTemaAlignSelf,
    };
  }, [designedByTokoTemaAlignSelf]);

  const router = useRouter();

  const onKnowledgeBaseTextClick = useCallback(() => {
    router.push("/knowledge-base");
  }, [router]);

  const onDataPrivacyTextClick = useCallback(() => {
    router.push("/data-privacy");
  }, [router]);

  const onFAQTextClick = useCallback(() => {
    router.push("/help-center");
  }, [router]);

  const onSupportkisstechcaTextClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  return (
    <footer
      className={`self-stretch bg-variant-background flex flex-row flex-wrap items-start justify-center py-11 pl-5 pr-[59px] box-border max-w-full text-left text-lg text-white font-heading-2 mq450:pt-[29px] mq450:pb-[29px] mq450:box-border mq1400:pr-[29px] mq1400:box-border ${className}`}
      style={footerStyle}
    >
      <div
        className="w-[1177px] flex flex-col items-start justify-center gap-12 max-w-full gap-6"
        style={container1Style}
      >
        <div
          className="self-stretch flex flex-row flex-wrap items-center justify-between py-0 pl-0 pr-0.5 box-border max-w-full gap-5"
          style={allLinksStyle}
        >
          <div className="w-[215px] flex flex-col items-center justify-start gap-[51px]">
            <img
              className="w-[203.9px] h-[34px] relative"
              loading="lazy"
              alt=""
              src={kissTech}
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[17px]">
              <div className="self-stretch relative tracking-[-0.03em] leading-[29px]">
                Your Digital Partner
              </div>
              <div className="self-stretch relative text-base tracking-[-0.03em] leading-[160%] font-medium text-gray-1">
                Simplifying Digital Success. Operate. Innovate. Thrive.
              </div>
              <div className="flex flex-row items-center justify-start gap-3.5 text-mid text-border-2">
                <img
                  className="h-[14.9px] w-[14.9px] relative"
                  loading="lazy"
                  alt=""
                  src="/phone.svg"
                />
                <div
                  className="relative tracking-[-0.03em] leading-[100%] font-medium inline-block min-w-[112px] whitespace-nowrap"
                  style={phoneSpaceStyle}
                >
                  +647 812 4850
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap items-start justify-center gap-x-[71px] gap-y-[69.7px] max-w-full text-mid gap-[35px] gap-[17px]">
            <div className="w-[162px] flex flex-col items-start justify-start gap-[29px]">
              <div className="self-stretch relative tracking-[-0.03em] leading-[100%] font-medium">
                Products
              </div>
              <div
                className="flex flex-col items-start justify-start py-0 pl-0 pr-[3px] gap-4 text-base text-gray-1"
                style={navigationStyle}
              >
                <div
                  className="relative tracking-[-0.03em] leading-[26px] font-medium inline-block min-w-[111px]"
                  style={phoneSystemsStyle}
                >
                  Phone Systems
                </div>
                <div className="relative tracking-[-0.03em] leading-[26px] font-medium">{`Web Design & Hosting`}</div>
                <div className="relative tracking-[-0.03em] leading-[26px] font-medium">
                  AI Integrated Systems
                </div>
                <div
                  className="relative tracking-[-0.03em] leading-[26px] font-medium inline-block min-w-[100px]"
                  style={salesSupportStyle}
                >
                  Sales Support
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-4 text-base text-gray-1">
              <div
                className="relative tracking-[-0.03em] leading-[26px] font-medium inline-block min-w-[113px]"
                style={companyEmailStyle}
              >
                Company Email
              </div>
              <div
                className="relative tracking-[-0.03em] leading-[26px] font-medium inline-block min-w-[91px]"
                style={socialMediaStyle}
              >
                Social Media
              </div>
              <div className="relative tracking-[-0.03em] leading-[26px] font-medium">
                Phone Transcription
              </div>
              <div className="relative tracking-[-0.03em] leading-[26px] font-medium">
                Google Ads Support
              </div>
              <div className="relative tracking-[-0.03em] leading-[26px] font-medium">{`Marketing Strategies `}</div>
            </div>
            <div className="flex flex-col items-start justify-start gap-8">
              <div
                className="relative tracking-[-0.03em] leading-[100%] font-medium inline-block min-w-[36px]"
                style={heading3Style}
              >
                Help
              </div>
              <div className="flex flex-col items-start justify-start gap-4 text-base text-gray-1">
                <div
                  className="relative tracking-[-0.03em] leading-[26px] font-medium inline-block min-w-[117px] cursor-pointer"
                  onClick={onKnowledgeBaseTextClick}
                  style={knowledgeBaseStyle}
                >
                  Knowledge Base
                </div>
                <div
                  className="relative tracking-[-0.03em] leading-[26px] font-medium inline-block min-w-[90px] cursor-pointer"
                  onClick={onDataPrivacyTextClick}
                  style={dataPrivacyStyle}
                >
                  Data Privacy
                </div>
                <div
                  className="relative tracking-[-0.03em] leading-[26px] font-medium inline-block min-w-[30px] cursor-pointer"
                  onClick={onFAQTextClick}
                  style={fAQStyle}
                >
                  FAQ
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-8">
              <div
                className="relative tracking-[-0.03em] leading-[100%] font-medium inline-block min-w-[63px]"
                style={heading4Style}
              >{`Contact `}</div>
              <div className="flex flex-col items-start justify-start gap-4 text-base text-gray-1">
                <div className="flex flex-row items-center justify-start gap-3.5">
                  <img
                    className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/send.svg"
                  />
                  <div
                    className="relative tracking-[-0.03em] leading-[26px] font-medium whitespace-nowrap cursor-pointer"
                    onClick={onSupportkisstechcaTextClick}
                  >
                    support@kisstech.ca
                  </div>
                </div>
                <div
                  className="flex flex-row items-center justify-start gap-3.5 cursor-pointer text-mid text-border-2"
                  onClick={onSupportkisstechcaTextClick}
                >
                  <img
                    className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px]"
                    alt=""
                    src="/phone-1.svg"
                    style={phoneIconStyle}
                  />
                  <div
                    className="relative tracking-[-0.03em] leading-[100%] font-medium inline-block min-w-[112px] whitespace-nowrap"
                    style={divStyle}
                  >
                    +647 812 4850
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="self-stretch h-0 flex flex-row flex-wrap items-center justify-center pt-0 px-[18px] pb-0 box-border max-w-full"
          style={lineStyle}
        >
          <div
            className="h-px flex-1 relative border-border-1 border-t-[1px] border-solid box-border max-w-full"
            style={lineDiv1Style}
          />
        </div>
        <div
          className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 px-5 gap-[828px] text-base text-gray-1"
          style={copyrightStyle}
        >
          <div className="relative tracking-[-0.03em] leading-[26px] font-medium">
            Copyright © 2024 Kisstech
          </div>
          <div
            className="self-stretch w-[102px] relative tracking-[-0.03em] leading-[160%] font-medium hidden"
            style={designedByTokoTemaStyle}
          >
            Kisstech 2024
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
