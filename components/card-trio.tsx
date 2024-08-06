import type { NextPage } from "next";
import PRICEPERMONTH from "./p-r-i-c-e-p-e-r-m-o-n-t-h";
import Button from "./button";
import Card from "./card";

export type CardTrioType = {
  className?: string;
};

const CardTrio: NextPage<CardTrioType> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-center justify-start gap-14 max-w-full text-left text-5xl text-primary font-heading-2 gap-7 mq1350:flex-wrap ${className}`}
    >
      <div className="w-[364px] rounded-3xs bg-main-background overflow-hidden shrink-0 flex flex-row flex-wrap items-start justify-start py-4 px-[42px] box-border gap-x-[23px] gap-y-7 min-h-[670px] max-w-full mq1350:pl-[21px] mq1350:pr-[21px] mq1350:box-border">
        <PRICEPERMONTH
          propAlignSelf="stretch"
          propPadding="0px 0px 0px 0px"
          prop="Priced"
          propDisplay="inline-block"
          propMinWidth="76px"
          propColor="#003061"
          propMargin="0"
          propFontWeight="700"
          month="/Hourly"
          text="Regular Price"
          text1={false}
          propHeight="unset"
          textWidth="unset"
          textAlignSelf="stretch"
        />
        <div className="h-[50px] w-[124px] hidden flex-col items-start justify-start">
          <div className="self-stretch flex-1 flex flex-row items-end justify-start gap-[13px]">
            <b className="self-stretch relative leading-[120%] whitespace-nowrap mq450:text-lgi mq450:leading-[23px]">
              $50
            </b>
            <div className="relative text-base tracking-[-0.03em] leading-[160%] font-medium text-accent">
              /Month
            </div>
          </div>
          <div className="self-stretch relative text-smi tracking-[-0.03em] leading-[160%] font-medium text-text">
            Discount Price
          </div>
        </div>
        <div className="w-[265px] flex flex-col items-start justify-start py-0 pl-0 pr-px box-border gap-2.5 text-13xl">
          <div className="self-stretch flex flex-row items-center justify-center">
            <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.02em] leading-[120%] font-bold font-inherit mq800:text-7xl mq800:leading-[31px] mq450:text-lgi mq450:leading-[23px]">{`SEO & Custom Services`}</h1>
          </div>
          <div className="w-[184px] hidden flex-col items-start justify-center gap-1 text-base text-text">
            <div className="w-[117px] flex flex-row items-center justify-center">
              <b className="h-[26px] flex-1 relative tracking-[-0.03em] leading-[160%] inline-block">
                Starter Website
              </b>
            </div>
            <div className="self-stretch h-[19px] relative text-xs tracking-[-0.03em] leading-[160%] font-medium inline-block">
              *One-Time Cost: $2400 (optional)
            </div>
          </div>
        </div>
        <div className="h-px w-[265px] relative border-border-2 border-t-[1px] border-solid box-border" />
        <div className="w-[264px] flex flex-col items-start justify-start gap-6 text-xs">
          <div className="self-stretch h-[184px] hidden flex-col items-start justify-start gap-3.5">
            <div className="relative tracking-[0.15em] leading-[120%] uppercase font-medium shrink-0">
              Includes
            </div>
            <div className="self-stretch relative text-lg tracking-[-0.03em] leading-[160%] text-text shrink-0">
              <ul className="m-0 font-inherit text-inherit pl-6">
                <li className="mb-0">Email campaign sent to 80-100 contacts</li>
                <li className="mb-0"> 1 follow-up email after 3 months</li>
                <li>Full Campaign review at the end</li>
              </ul>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-3.5">
            <div className="relative tracking-[0.15em] leading-[120%] uppercase font-medium inline-block min-w-[107px]">
              Key Features:
            </div>
            <div className="self-stretch relative text-lg tracking-[-0.62px] leading-[160%] text-text inline-block min-h-[348px]">
              <ul className="m-0 font-inherit text-inherit pl-6">
                <li className="mb-0">
                  Improve search engine rankings and visibility
                </li>
                <li className="mb-0">
                  Drive targeted organic traffic and increase conversions
                </li>
                <li className="mb-0">
                  Optimize content, keywords, and backlinks
                </li>
                <li>
                  We offer custom services tailored to meet all your unique
                  business needs, ensuring efficient solutions and optimal
                  results across various areas.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Button
          propAlignSelf="unset"
          propPadding="24px 20px"
          propFlex="1"
          propMinWidth="266px"
          propBackgroundColor="#050509"
          getAQuote="Get Started"
          propMinWidth1="90px"
          propColor="#fff"
          buttonBorder="none"
          getAQuoteDisplay="inline-block"
        />
      </div>
      <div className="w-[364px] rounded-3xs bg-variant-background overflow-hidden shrink-0 flex flex-row flex-wrap items-start justify-start pt-4 px-[42px] pb-9 box-border gap-x-[23px] gap-y-7 min-h-[670px] max-w-full text-main-background mq450:pt-5 mq450:pb-[23px] mq450:box-border mq1350:pl-[21px] mq1350:pr-[21px] mq1350:box-border">
        <PRICEPERMONTH
          propAlignSelf="stretch"
          propPadding="0px 0px 0px 0px"
          prop="Priced"
          propDisplay="inline-block"
          propMinWidth="76px"
          propColor="#fff"
          propMargin="0"
          propFontWeight="700"
          month="/Hourly"
          text="Regular Price"
          text1={false}
          propHeight="unset"
          textWidth="unset"
          textAlignSelf="stretch"
        />
        <div className="h-[50px] w-[124px] hidden flex-col items-start justify-start">
          <div className="self-stretch flex-1 flex flex-row items-end justify-start gap-[13px]">
            <b className="self-stretch relative leading-[120%] whitespace-nowrap mq450:text-lgi mq450:leading-[23px]">
              $50
            </b>
            <div className="relative text-base tracking-[-0.03em] leading-[160%] font-medium text-accent">
              /Month
            </div>
          </div>
          <div className="self-stretch relative text-smi tracking-[-0.03em] leading-[160%] font-medium text-text">
            Discount Price
          </div>
        </div>
        <div className="w-[265px] flex flex-col items-start justify-start py-0 pl-0 pr-px box-border gap-2.5 text-13xl text-white">
          <div className="self-stretch flex flex-row items-center justify-center">
            <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.02em] leading-[120%] font-bold font-inherit whitespace-pre-wrap mq800:text-7xl mq800:leading-[31px] mq450:text-lgi mq450:leading-[23px]">{`Brand Development  & Social Media`}</h1>
          </div>
          <div className="w-[184px] hidden flex-col items-start justify-center gap-1 text-base text-text">
            <div className="w-[117px] flex flex-row items-center justify-center">
              <b className="h-[26px] flex-1 relative tracking-[-0.03em] leading-[160%] inline-block">
                Starter Website
              </b>
            </div>
            <div className="self-stretch h-[19px] relative text-xs tracking-[-0.03em] leading-[160%] font-medium inline-block">
              *One-Time Cost: $2400 (optional)
            </div>
          </div>
        </div>
        <div className="h-px w-[265px] relative border-border-2 border-t-[1px] border-solid box-border" />
        <div className="w-[264px] flex flex-col items-start justify-start gap-6 text-xs">
          <div className="self-stretch hidden flex-col items-start justify-start gap-3.5">
            <div className="h-3.5 relative tracking-[0.15em] leading-[120%] uppercase font-medium inline-block">
              Includes
            </div>
            <div className="self-stretch h-[87px] relative text-lg tracking-[-0.03em] leading-[160%] text-gray-1 inline-block">
              <ul className="m-0 font-inherit text-inherit pl-6">
                <li className="mb-0">Google Ads account setup</li>
                <li className="mb-0">Campaign with $50 ad credit</li>
                <li>Basic campaign assets</li>
              </ul>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-3.5 text-white">
            <div className="relative tracking-[0.15em] leading-[120%] uppercase font-medium inline-block min-w-[107px]">
              Key Features:
            </div>
            <div className="self-stretch relative text-lg tracking-[-0.03em] leading-[160%] text-gray-1">
              <ul className="m-0 font-inherit text-inherit pl-6">
                <li className="mb-0">Unique Brand Identity</li>
                <li className="mb-0">
                  Tailored social media strategies for brand growth
                </li>
                <li className="mb-0">Create and manage engaging content</li>
                <li className="mb-0">Consistent Messaging</li>
                <li className="mb-0">
                  Customer engagement and online presence
                </li>
                <li> Run targeted advertising campaigns</li>
              </ul>
            </div>
          </div>
        </div>
        <Button
          propAlignSelf="unset"
          propPadding="24px 20px"
          propFlex="1"
          propMinWidth="266px"
          propBackgroundColor="#f3f5fc"
          getAQuote="Get Started"
          propMinWidth1="90px"
          propColor="#050509"
          buttonBorder="none"
          getAQuoteDisplay="inline-block"
        />
      </div>
      <Card />
    </div>
  );
};

export default CardTrio;
