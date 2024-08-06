import type { NextPage } from "next";
import { useCallback } from "react";
import ServiceCard from "./service-card";
import { useRouter } from "next/router";

export type ServicesType = {
  className?: string;
};

const Services: NextPage<ServicesType> = ({ className = "" }) => {
  const router = useRouter();

  const onTextLinkClick = useCallback(() => {
    router.push("/service-details");
  }, [router]);

  return (
    <section
      className={`self-stretch bg-white overflow-hidden flex flex-row flex-wrap items-start justify-center py-20 px-5 box-border max-w-full text-left text-mid text-secondary font-heading-2 mq800:pt-[34px] mq800:pb-[34px] mq800:box-border mq1350:pt-[52px] mq1350:pb-[52px] mq1350:box-border ${className}`}
    >
      <div className="w-[1240px] flex flex-row flex-wrap items-start justify-start gap-[60px] min-h-[1052px] max-w-full">
        <div className="w-[518px] flex flex-row flex-wrap items-start justify-start py-0 px-0 box-border min-h-[78px] max-w-full">
          <div className="relative tracking-[0.15em] leading-[120%] uppercase font-medium shrink-0">
            Our Services
          </div>
          <h1 className="m-0 h-auto w-[1120px] relative text-29xl leading-[120%] font-bold font-inherit text-primary inline-block max-w-full shrink-0 mq800:text-19xl mq800:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
            Our Range of Comprehensive Business Solutions
          </h1>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center py-0 px-[50px] box-border gap-x-[60px] gap-y-[5px] max-w-full text-13xl text-primary mq1350:pl-[25px] mq1350:pr-[25px] mq1350:box-border">
          <div className="w-[1140px] flex flex-row flex-wrap items-center justify-center gap-x-[30px] gap-y-9 min-h-[914px] max-w-full gap-[18px]">
            <ServiceCard
              heading={`Web Design & Hosting`}
              propDisplay="inline-block"
              propHeight="unset"
              paragraph="Create a powerful online presence with our expert web design and hosting services. Our team crafts visually appealing and user-friendly websites, ensuring your business stands out in the crowded digital landscape."
              propDisplay1="unset"
              propMinHeight="unset"
              serviceCardWidth="550px"
              titleFlex="1"
              titleMinWidth="221px"
              headingMargin="0"
              headingFontWeight="700"
              paragraphWidth="unset"
              paragraphAlignSelf="stretch"
            />
            <ServiceCard
              heading="AI-Integrated Systems"
              propDisplay="inline-block"
              propHeight="38px"
              paragraph="Embrace the future with artificial intelligence. Our AI-integrated systems enhance efficiency, automate processes, and provide valuable insights for informed decision-making."
              propDisplay1="unset"
              propMinHeight="unset"
              serviceCardWidth="550px"
              titleFlex="1"
              titleMinWidth="221px"
              headingMargin="0"
              headingFontWeight="700"
              paragraphWidth="unset"
              paragraphAlignSelf="stretch"
            />
            <ServiceCard
              heading="Phone Systems "
              propDisplay="unset"
              propHeight="unset"
              paragraph="Experience seamless communication with our advanced phone systems. From VoIP solutions to integrated communication platforms, we provide the tools to keep your business connected."
              propDisplay1="unset"
              propMinHeight="unset"
              serviceCardWidth="550px"
              titleFlex="1"
              titleMinWidth="221px"
              headingMargin="0"
              headingFontWeight="700"
              paragraphWidth="unset"
              paragraphAlignSelf="stretch"
            />
            <ServiceCard
              heading="Phone Transcription"
              propDisplay="unset"
              propHeight="unset"
              paragraph="Effortlessly convert spoken words into text with our phone transcription services. Save time on note-taking and ensure accurate documentation of important conversations."
              propDisplay1="unset"
              propMinHeight="unset"
              serviceCardWidth="550px"
              titleFlex="1"
              titleMinWidth="221px"
              headingMargin="0"
              headingFontWeight="700"
              paragraphWidth="unset"
              paragraphAlignSelf="stretch"
            />
            <ServiceCard
              heading="Marketing Support"
              propDisplay="unset"
              propHeight="unset"
              paragraph="Unlock the full potential of digital marketing with our comprehensive strategies. From content creation to SEO optimization, we help you reach your target audience and drive results."
              propDisplay1="inline-block"
              propMinHeight="130px"
              serviceCardWidth="550px"
              titleFlex="1"
              titleMinWidth="221px"
              headingMargin="0"
              headingFontWeight="700"
              paragraphWidth="unset"
              paragraphAlignSelf="stretch"
            />
            <ServiceCard
              heading="Sales Support"
              propDisplay="unset"
              propHeight="unset"
              paragraph="Empower your sales team with our sales support services. From CRM integration to lead generation strategies, we enhance your sales processes for improved performance."
              propDisplay1="unset"
              propMinHeight="unset"
              serviceCardWidth="550px"
              titleFlex="1"
              titleMinWidth="221px"
              headingMargin="0"
              headingFontWeight="700"
              paragraphWidth="unset"
              paragraphAlignSelf="stretch"
            />
            <ServiceCard
              heading="Google Ads Support"
              propDisplay="unset"
              propHeight="unset"
              paragraph="Maximize your online visibility with our Google Ads management services. We tailor campaigns to target your audience effectively, driving traffic and boosting your online presence."
              propDisplay1="inline-block"
              propMinHeight="130px"
              serviceCardWidth="550px"
              titleFlex="1"
              titleMinWidth="221px"
              headingMargin="0"
              headingFontWeight="700"
              paragraphWidth="unset"
              paragraphAlignSelf="stretch"
            />
            <ServiceCard
              heading="Company Email"
              paragraph="Communicate professionally with our secure and reliable company email solutions. Enjoy seamless communication within your organization and with clients."
            />
          </div>
          <div className="h-[37px] hidden flex-row flex-wrap items-center justify-center p-2.5 box-border text-mid text-accent">
            <div
              className="self-stretch relative tracking-[-0.03em] leading-[100%] font-medium cursor-pointer"
              onClick={onTextLinkClick}
            >
              See All Services
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
