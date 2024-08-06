import type { NextPage } from "next";
import PRICEPERMONTH from "./p-r-i-c-e-p-e-r-m-o-n-t-h";
import Features from "./features";
import Button from "./button";

export type CardType = {
  className?: string;
};

const Card: NextPage<CardType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[364px] rounded-3xs bg-main-background overflow-hidden shrink-0 flex flex-row flex-wrap items-start justify-start pt-4 px-[42px] pb-10 box-border gap-x-[23px] gap-y-7 min-h-[670px] max-w-full text-left text-5xl text-primary font-heading-2 mq450:pt-5 mq450:pb-[26px] mq450:box-border mq1350:pl-[21px] mq1350:pr-[21px] mq1350:box-border ${className}`}
    >
      <PRICEPERMONTH
        prop="$2,000 up to $5,000"
        month="/Month"
        text="Regular Price"
        text1
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
          <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.02em] leading-[120%] font-bold font-inherit mq800:text-7xl mq800:leading-[31px] mq450:text-lgi mq450:leading-[23px]">{`Premium Custom Website Development `}</h1>
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
        <div className="self-stretch h-[184px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-3.5">
          <div className="relative tracking-[0.15em] leading-[120%] uppercase font-medium inline-block min-w-[71px]">
            Includes
          </div>
          <div className="self-stretch relative text-lg tracking-[-0.03em] leading-[160%] text-text">
            <ul className="m-0 font-inherit text-inherit pl-6">
              <li className="mb-0">
                Custom Website Design tailored to your business needs
              </li>
              <li className="mb-0">
                Custom Content Creation (blogs, videos, infographics)
              </li>
              <li>Personalized Google Ads and social media campaigns</li>
            </ul>
          </div>
        </div>
        <Features
          heading="Key Features:"
          dedicatedAccountManager="Dedicated account manager"
          regularPerformanceConsula="Regular performance consulations"
        />
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
  );
};

export default Card;
