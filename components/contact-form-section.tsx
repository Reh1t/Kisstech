import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import FormField from "./form-field";
import Button from "./button";
import { handleFormSubmit } from "./handleContactForm";

export type ContactFormSectionType = {
  className?: string;
  yourName?: string;
  yourName1?: string;
  enterYourNamePlaceholder?: string;
  enterYourNamePlaceholder1?: string;
  getAQuote?: string;

  /** Style props */
  yourMessageHeight?: CSSProperties["height"];
  yourMessagePadding?: CSSProperties["padding"];
  fieldPadding?: CSSProperties["padding"];
  fieldHeight?: CSSProperties["height"];
  getAQuoteMinWidth?: CSSProperties["minWidth"];
  propMargin?: CSSProperties["margin"];
  propHeight?: CSSProperties["height"];
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
  propHeight1?: CSSProperties["height"];
  propMinWidth?: CSSProperties["minWidth"];
  propMargin1?: CSSProperties["margin"];
  contactFormSectionWidth?: CSSProperties["width"];
  contactFormSectionAlignSelf?: CSSProperties["alignSelf"];
  contactFormSectionGap?: CSSProperties["gap"];
  contactInfoAlignSelf?: CSSProperties["alignSelf"];
  contactInfoPadding?: CSSProperties["padding"];
  contactInfoMinWidth?: CSSProperties["minWidth"];
  readyToTakeMargin?: CSSProperties["margin"];
  readyToTakeFontWeight?: CSSProperties["fontWeight"];
  contactUsMargin?: CSSProperties["margin"];
  contactUsFontWeight?: CSSProperties["fontWeight"];
  headerMargin?: CSSProperties["margin"];
  headerFontWeight?: CSSProperties["fontWeight"];
  lineDivWidth?: CSSProperties["width"];
  lineDivAlignSelf?: CSSProperties["alignSelf"];
  iconBoxWidth?: CSSProperties["width"];
  iconBox1Width?: CSSProperties["width"];
  iconBox1AlignSelf?: CSSProperties["alignSelf"];
  iconBox2Width?: CSSProperties["width"];
  iconBox2AlignSelf?: CSSProperties["alignSelf"];
  contactFormWidth?: CSSProperties["width"];
  contactFormFlex?: CSSProperties["flex"];
  contactFormMinWidth?: CSSProperties["minWidth"];
};

const ContactFormSection: NextPage<ContactFormSectionType> = ({
  className = "",
  yourMessageHeight,
  yourMessagePadding,
  fieldPadding,
  fieldHeight,
  getAQuoteMinWidth,
  propMargin,
  propHeight,
  propPadding,
  propPadding1,
  propHeight1,
  propMinWidth,
  propMargin1,
  yourName,
  yourName1,
  enterYourNamePlaceholder,
  enterYourNamePlaceholder1,
  getAQuote,
  contactFormSectionWidth,
  contactFormSectionAlignSelf,
  contactFormSectionGap,
  contactInfoAlignSelf,
  contactInfoPadding,
  contactInfoMinWidth,
  readyToTakeMargin,
  readyToTakeFontWeight,
  contactUsMargin,
  contactUsFontWeight,
  headerMargin,
  headerFontWeight,
  lineDivWidth,
  lineDivAlignSelf,
  iconBoxWidth,
  iconBox1Width,
  iconBox1AlignSelf,
  iconBox2Width,
  iconBox2AlignSelf,
  contactFormWidth,
  contactFormFlex,
  contactFormMinWidth,
}) => {
  const iconBox11Style: CSSProperties = useMemo(() => {
    return {
      height: yourMessageHeight,
      padding: yourMessagePadding,
      width: iconBox1Width,
      alignSelf: iconBox1AlignSelf,
    };
  }, [yourMessageHeight, yourMessagePadding, iconBox1Width, iconBox1AlignSelf]);

  const iconStyle: CSSProperties = useMemo(() => {
    return {
      padding: fieldPadding,
      height: fieldHeight,
    };
  }, [fieldPadding, fieldHeight]);

  const title3Style: CSSProperties = useMemo(() => {
    return {
      minWidth: getAQuoteMinWidth,
    };
  }, [getAQuoteMinWidth]);

  const phoneNumberStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  const iconBox2Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      padding: propPadding,
      width: iconBox2Width,
      alignSelf: iconBox2AlignSelf,
    };
  }, [propHeight, propPadding, iconBox2Width, iconBox2AlignSelf]);

  const icon1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
      height: propHeight1,
    };
  }, [propPadding1, propHeight1]);

  const title4Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const emailAddressStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin1,
    };
  }, [propMargin1]);

  const contactFormSectionStyle: CSSProperties = useMemo(() => {
    return {
      width: contactFormSectionWidth,
      alignSelf: contactFormSectionAlignSelf,
      gap: contactFormSectionGap,
    };
  }, [
    contactFormSectionWidth,
    contactFormSectionAlignSelf,
    contactFormSectionGap,
  ]);

  const contactInfoStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: contactInfoAlignSelf,
      padding: contactInfoPadding,
      minWidth: contactInfoMinWidth,
    };
  }, [contactInfoAlignSelf, contactInfoPadding, contactInfoMinWidth]);

  const readyToTakeStyle: CSSProperties = useMemo(() => {
    return {
      margin: readyToTakeMargin,
      fontWeight: readyToTakeFontWeight,
    };
  }, [readyToTakeMargin, readyToTakeFontWeight]);

  const contactUsStyle: CSSProperties = useMemo(() => {
    return {
      margin: contactUsMargin,
      fontWeight: contactUsFontWeight,
    };
  }, [contactUsMargin, contactUsFontWeight]);

  const header1Style: CSSProperties = useMemo(() => {
    return {
      margin: headerMargin,
      fontWeight: headerFontWeight,
    };
  }, [headerMargin, headerFontWeight]);

  const lineDiv2Style: CSSProperties = useMemo(() => {
    return {
      width: lineDivWidth,
      alignSelf: lineDivAlignSelf,
    };
  }, [lineDivWidth, lineDivAlignSelf]);

  const iconBoxStyle: CSSProperties = useMemo(() => {
    return {
      width: iconBoxWidth,
    };
  }, [iconBoxWidth]);

  const contactFormStyle: CSSProperties = useMemo(() => {
    return {
      width: contactFormWidth,
      flex: contactFormFlex,
      minWidth: contactFormMinWidth,
    };
  }, [contactFormWidth, contactFormFlex, contactFormMinWidth]);

  return (
    <section
      className={`self-stretch bg-white overflow-hidden flex flex-row items-start justify-start py-[60px] px-[141px] box-border gap-[158px] max-w-full text-left text-mid text-secondary font-heading-2 lg:flex-wrap lg:pl-[70px] lg:pr-[70px] lg:box-border mq750:py-[39px] mq750:px-[35px] mq750:box-border ${className}`}
      style={contactFormSectionStyle}
    >
      <div
        className="w-[480px] flex flex-col items-center justify-center py-[18px] px-0 box-border gap-[50px] min-w-[480px] max-w-full lg:flex-1 mq1050:min-w-full"
        style={contactInfoStyle}
      >
        <div className="self-stretch flex flex-col items-start justify-start gap-3.5">
          <div className="relative tracking-[0.15em] leading-[120%] uppercase font-medium whitespace-nowrap">
            Get Started
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[30px] text-29xl text-primary">
            <h1
              className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq1050:text-19xl mq1050:leading-[46px] mq450:text-10xl mq450:leading-[35px]"
              style={readyToTakeStyle}
            >
              Ready to take your business to the next level?
            </h1>
            <h1
              className="m-0 self-stretch relative text-inherit leading-[58px] font-bold font-inherit mq1050:text-19xl mq1050:leading-[46px] mq450:text-10xl mq450:leading-[35px]"
              style={contactUsStyle}
            >{`Contact Us `}</h1>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-5 max-w-full text-5xl text-primary">
          <h3
            className="m-0 relative text-inherit leading-[120%] font-bold font-inherit mq450:text-lgi mq450:leading-[23px]"
            style={header1Style}
          >
            Contact Info
          </h3>
          <div
            className="self-stretch h-px relative border-border-1 border-t-[1px] border-solid box-border"
            style={lineDiv2Style}
          />
          <div
            className="w-[336px] flex flex-col items-start justify-start gap-5 max-w-full text-xl"
            style={iconBoxStyle}
          >
            <div
              className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-5 mq450:flex-wrap"
              style={iconBox11Style}
            >
              <div
                className="rounded-8xs bg-variant-background overflow-hidden flex flex-row items-center justify-center p-6"
                style={iconStyle}
              >
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/phone1.svg"
                />
              </div>
              <div
                className="flex-1 flex flex-col items-start justify-start gap-1.5 min-w-[159px]"
                style={title3Style}
              >
                <div
                  className="self-stretch relative leading-[120%] font-medium mq450:text-base mq450:leading-[19px]"
                  style={phoneNumberStyle}
                >
                  Phone Number
                </div>
                <div className="self-stretch relative text-base tracking-[-0.03em] leading-[26px] font-medium text-text">
                  (647) 812-4850
                </div>
              </div>
            </div>
            <div
              className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-5 mq450:flex-wrap"
              style={iconBox2Style}
            >
              <div
                className="rounded-8xs bg-variant-background overflow-hidden flex flex-row items-center justify-center p-6"
                style={icon1Style}
              >
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/mail.svg"
                />
              </div>
              <div
                className="flex-1 flex flex-col items-start justify-start gap-1.5 min-w-[159px]"
                style={title4Style}
              >
                <div
                  className="self-stretch relative leading-[120%] font-medium mq450:text-base mq450:leading-[19px]"
                  style={emailAddressStyle}
                >
                  Email Address
                </div>
                <div className="self-stretch relative text-base tracking-[-0.03em] leading-[26px] font-medium text-text whitespace-nowrap">
                  info@kisstech.ca
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleFormSubmit}
        className="flex-1 rounded-xl bg-main-background overflow-hidden flex flex-col items-start justify-start py-[54px] px-16 box-border gap-9 min-w-[338px] max-w-full text-xl text-primary mq750:py-[35px] mq750:px-8 mq750:box-border mq750:min-w-full"
        style={contactFormStyle}
      >
        <div className="self-stretch flex flex-col items-start justify-start gap-5">
          <div className="self-stretch flex flex-col items-start justify-start gap-3.5">
            <div className="self-stretch relative leading-[120%] font-medium mq450:text-base mq450:leading-[19px]">
              Your Name
            </div>
            <input
              className="border-border-1 border-[1px] border-solid bg-white h-auto w-auto [outline:none] self-stretch rounded-mini box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-3.5 px-[30px] font-heading-2 font-medium text-sm text-gray-1"
              placeholder="Enter Your Name"
              type="text"
              id="name"
              defaultValue={""}
              required
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-3.5">
            <div className="self-stretch relative leading-[120%] font-medium mq450:text-base mq450:leading-[19px]">
              Your Email
            </div>
            <input
              className="border-border-1 border-[1px] border-solid bg-white h-auto w-auto [outline:none] self-stretch rounded-mini box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-3.5 px-[30px] font-heading-2 font-medium text-sm text-gray-1"
              placeholder="Enter Your Email"
              id="email"
              type="email"
              defaultValue={""}
              required
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-3.5">
            <div className="self-stretch relative leading-[120%] font-medium mq450:text-base mq450:leading-[19px]">
              Your Message
            </div>
            <textarea
              className="border-border-1 border-[1px] border-solid bg-white h-40 w-auto [outline:none] self-stretch rounded-mini box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-3.5 px-[30px] font-heading-2 font-medium text-sm text-gray-1"
              placeholder="Enter Your Message"
              rows={8}
              cols={20}
              id="message"
              defaultValue={""}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="self-stretch rounded-full bg-black overflow-hidden flex flex-row items-center justify-center p-4 min-w-28 max-w-full text-xl text-main-background"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactFormSection;
