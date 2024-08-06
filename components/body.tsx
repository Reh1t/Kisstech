import type { NextPage } from "next";
import Button2 from "./button2";

export type BodyType = {
  className?: string;
};

const Body: NextPage<BodyType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[539px] flex flex-col items-start justify-start py-0 pl-5 pr-0 box-border gap-[26px] max-w-full text-left text-mid text-text font-heading-2 ${className}`}
    >
      <div className="flex flex-row items-center justify-start py-0 pl-0 pr-5 gap-[9px] text-gray-200">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/lock-icon.svg"
        />
        <div className="relative tracking-[0.15em] leading-[120%] uppercase font-medium">
          Welcome to kisstech
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center max-w-full text-37xl text-tomato">
        <h1 className="m-0 flex-1 relative text-inherit leading-[120%] font-bold font-inherit inline-block max-w-full mq1050:text-26xl mq1050:leading-[54px] mq450:text-15xl mq450:leading-[40px]">
          SIMPLIFYING DIGITAL SUCCESS
        </h1>
      </div>
      <div className="w-[504px] flex flex-row items-center justify-center py-0 pl-0 pr-5 box-border max-w-full text-base">
        <div className="h-[338px] flex-1 relative tracking-[-0.03em] leading-[160%] font-medium inline-block max-w-full">
          <p className="m-0">
            Are you fed up with excessive fees for essential business services
            like websites and phone systems, with no transparency on what you're
            getting? Had enough of empty promises regarding boosting website
            traffic and SEO miracles? It's time for a change.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">{`Introducing KISSTECH: Your Transarent Business Partner. `}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            We understand the frustration of being in the dark about your
            business expenditures and the lack of tangible results. We
            prioritize transparency, efficiency, and genuine value delivery. Say
            goodbye to the confusion and let us show you how new innovative
            technology can cut both costs and wasted time as well as drive
            profits for your business.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center p-2.5 text-base">
        <div className="relative tracking-[-0.03em] leading-[26px] font-medium">{`See how we can help you. `}</div>
      </div>
      <div className="w-[398.9px] flex flex-row items-center justify-between py-0 pl-0 pr-5 box-border max-w-full gap-5 text-secondary mq450:flex-wrap mq450:justify-center">
        <Button2 />
        <div className="flex flex-row items-center justify-center gap-3">
          <img
            className="h-[19.9px] w-[19.9px] relative min-h-[20px]"
            alt=""
            src="/phone-icon.svg"
          />
          <div className="relative tracking-[0.15em] leading-[120%] uppercase font-medium whitespace-nowrap">
            +613 812 4850
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
