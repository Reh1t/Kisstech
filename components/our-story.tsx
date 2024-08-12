import type { NextPage } from "next";
import VideoBox from "./video-box";

export type OurStoryType = {
  className?: string;
};

const OurStory: NextPage<OurStoryType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-variant-background overflow-hidden flex flex-col items-center justify-start py-[81px] px-0 box-border gap-[55px] max-w-full text-left text-mid text-border-1 font-heading-2 mq825:pt-[53px] mq825:pb-[53px] mq825:box-border mq450:pt-[34px] mq450:pb-[34px] mq450:box-border ${className}`}
    >
      <div className="w-[850px] flex flex-row flex-wrap items-center justify-start py-0 px-5 box-border gap-10 max-w-full ">
        <div className="h-px w-[291px] relative border-border-2 border-t-[1px] border-solid box-border" />
        <div className="flex-1 flex flex-col items-start justify-start gap-3.5 min-w-[312px] max-w-full">
          <div className="relative tracking-[0.15em] leading-[120%] uppercase font-medium inline-block min-w-[115px]">
            Our STory
          </div>
          <h1 className="m-0 self-stretch relative text-29xl leading-[120%] font-bold font-inherit text-white mq825:text-19xl mq825:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
            Our Story of Innovation and Trust
          </h1>
        </div>
      </div>
      <div className="self-stretch grid flex-row items-center justify-center py-0 px-[150px] box-border gap-[30px] max-w-full grid-cols-[repeat(3,_minmax(270px,_1fr))] text-xl text-white lg:justify-center lg:grid-cols-[repeat(2,_minmax(270px,_468px))] mq825:pl-[75px] mq825:pr-[75px] mq825:box-border mq825:grid-cols-[minmax(270px,_1fr)] mq450:pl-5 mq450:pr-5 mq450:box-border">
        <VideoBox
          realEstateAgentsExplainMo="/realestateagentsexplainmodelsofhousingestat20231127045215utc-1@2x.png"
          foundingVision="Founding Vision"
          propColor="#fff"
          colr="bg-slate-800"
        />
        <VideoBox
          realEstateAgentsExplainMo="/realestateagentsexplainmodelsofhousingestat20231127045215utc-1-1@2x.png"
          foundingVision="Journey of Growth"
          propColor="#050509"
        />
        <VideoBox
          realEstateAgentsExplainMo="/realestateagentsexplainmodelsofhousingestat20231127045215utc-1-2@2x.png"
          foundingVision="Adaptation to Change"
          colr="bg-red-600"
        />
      </div>
      <div className="w-[602px] flex flex-row items-center justify-center p-2.5 box-border max-w-full text-center text-lg text-gray-1">
        <div className="flex-1 relative tracking-[-0.03em] leading-[160%] inline-block max-w-full">
          <p className="m-0">{`Kisstech was funded by experienced entrepreneurs who saw a need for reliable and innovative technology solutions tailored to small businesses. `}</p>
          <p className="m-0">{`We bridge the gap between complex technology and practical business needs, ensuring you can thrive in a digital world. `}</p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
