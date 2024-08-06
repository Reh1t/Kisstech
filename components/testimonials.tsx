import type { NextPage } from "next";
import ReviewBox from "./review-box";

export type TestimonialsType = {
  className?: string;
};

const Testimonials: NextPage<TestimonialsType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-main-background overflow-hidden flex flex-row flex-wrap items-start justify-start py-[120px] px-[150px] box-border gap-16 min-h-[684px] max-w-full text-left text-mid text-secondary font-heading-2 lg:pl-[75px] lg:pr-[75px] lg:box-border gap-8 mq750:py-[78px] mq750:px-[37px] mq750:box-border gap-4 ${className}`}
    >
      <div className="w-[517px] flex flex-row flex-wrap items-start justify-start py-0 pl-0 pr-[23px] box-border gap-x-3.5 gap-y-3 min-h-[92px] max-w-full">
        <div className="relative tracking-[0.15em] leading-[120%] uppercase font-medium shrink-0">
          Testimonials
        </div>
        <h1 className="m-0 h-[58px] relative text-29xl leading-[120%] font-bold font-inherit text-primary inline-block shrink-0 mq1050:text-19xl mq1050:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
          What Our Clients Say
        </h1>
      </div>
      <div className="w-[1140px] flex flex-row flex-wrap items-start justify-center gap-x-6 gap-y-[22px] max-w-full text-sm text-primary">
        <ReviewBox
          angusAClient="Angus A., Client"
          propMinWidth="97px"
          text="“Working with Kisstech has been a game-changer for our business. Their innovative solutions and responsive support have boosted our efficiency and made things so much easier. ”"
        />
        <ReviewBox
          angusAClient="Mark L., Client"
          propMinWidth="87px"
          text="“Kisstech delivered beyond my expectations. Their team understood my needs as a small business owner, and I am so happy I enlisted their services”"
        />
        <ReviewBox
          angusAClient="Ryan W., Client"
          text="“Choosing Kisstech was one of the best decisions we’ve made. We’ve seen remarkable growth and productivity since partnering with them. “"
        />
      </div>
    </section>
  );
};

export default Testimonials;
