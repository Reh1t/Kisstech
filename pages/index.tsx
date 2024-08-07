import type { NextPage } from "next";
import { useCallback } from "react";
import Header from "../components/header";
import Body from "../components/body";
import Right from "../components/right";
import Banner from "../components/banner";
import Button from "../components/button";
import ServiceCard from "../components/service-card";
import { useRouter } from "next/router";
import WhyUs1 from "../components/why-us1";
import Testimonials from "../components/testimonials";
import ContactFormSection from "../components/contact-form-section";
import Footer from "../components/footer";

const Home: NextPage = () => {
  const router = useRouter();

  const onTextLinkClick = useCallback(() => {
    router.push("/service-details");
  }, [router]);

  return (
    <div className="w-full relative flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Header
        group1="/group-1.svg"
        getAQuote="Contact Us"
        headerTop="0"
        headerPosition="sticky"
        headerGap="20px"
        frameDivWidth="296px"
        frameFlex="1"
        groupIconAlignSelf="stretch"
        groupIconOverflow="hidden"
        menuMargin="0"
        menuWidth="359px"
        homeDisplay="inline-block"
        homeMinWidth="46px"
        aboutUsFlex="1"
        aboutUsDisplay="inline-block"
        aboutUsMinWidth="71px"
        servicesFlex="1"
        servicesDisplay="inline-block"
        servicesMinWidth="70px"
        moreDisplay="inline-block"
        moreMinWidth="40px"
        helpDisplay="inline-block"
        helpMinWidth="36px"
      />
      <section className="self-stretch bg-main-background overflow-hidden flex flex-row items-start justify-start [row-gap:20px] max-w-full lg:flex-wrap">
        <div className="w-[680px] overflow-hidden shrink-0 flex flex-row items-center justify-end py-[43px] px-2 box-border min-w-[680px] max-w-full lg:flex-1 mq750:min-w-full mq1050:pt-7 mq1050:pb-7 mq1050:box-border mq450:pt-5 mq450:pb-5 mq450:box-border">
          <Body />
        </div>
        <Right />
      </section>
      <Banner
        bannerAlignSelf="stretch"
        containerGap="20px"
        funFact1Width="296px"
        eMPOWERYOURBUSINESSContaiMargin="0"
        eMPOWERYOURBUSINESSContaiAlignSelf="stretch"
        eMPOWERYOURBUSINESSContaiFontWeight="700"
        kisstechSolutionsWidth="131px"
        kisstechSolutionsDisplay="inline-block"
        operateMargin="0"
        operateFontWeight="700"
        innovateMargin="0"
        innovateFontWeight="700"
        thriveMargin="0"
        thriveFontWeight="700"
      />
      <section className="self-stretch bg-white overflow-hidden flex flex-row flex-wrap items-start justify-center py-[61px] px-5 box-border max-w-full text-left text-5xl text-gray-100 font-heading-2 mq750:pt-10 mq750:pb-10 mq750:box-border">
        <div className="w-[1240px] flex flex-row flex-wrap items-start justify-center py-0 px-0 box-border gap-[21px] min-h-[623px] max-w-full">
          <div className="w-[1272px] flex flex-row items-start justify-center py-0 px-[27px] box-border gap-[97px] max-w-full gap-12 mq1050:flex-wrap gap-6">
            <div className="w-[537.4px] flex flex-col items-start justify-start gap-[27px] min-w-[537.4px] max-w-full mq750:min-w-full mq1050:flex-1">
              <div className="self-stretch flex flex-row items-center justify-start gap-px mq750:flex-wrap">
                <div className="flex-1 flex flex-row items-center justify-start p-2.5 box-border min-w-[181px]">
                  <img
                    className="h-[388px] flex-1 relative rounded-3xs max-w-full overflow-hidden object-cover"
                    loading="lazy"
                    alt=""
                    src="/beachhappyandportraitofabigfamilyonavac20231127050445utc-1@2x.png"
                  />
                </div>
                <div className="h-[391px] w-[257px] flex flex-col items-start justify-start gap-5 min-w-[257px] mq750:flex-1">
                  <img
                    className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
                    loading="lazy"
                    alt=""
                    src="/herattitudeshinesthroughtherain20240228150752utc-1@2x.png"
                  />
                  <img
                    className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
                    loading="lazy"
                    alt=""
                    src="/image-3@2x.png"
                  />
                </div>
              </div>
              <h3 className="m-0 h-[58px] relative text-inherit leading-[120%] font-bold font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[23px]">
                <p className="m-0">Say Goodbye to Scams,</p>
                <p className="m-0">Say Hello to Smart Business Solutions</p>
              </h3>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[30px] min-w-[378px] max-w-full text-mid text-secondary mq750:min-w-full">
              <div className="w-[516px] flex flex-col items-start justify-start gap-3.5 max-w-full">
                <div className="relative tracking-[0.15em] leading-[120%] uppercase font-medium inline-block max-w-full">
                  All-in-one business solutions
                </div>
                <h1 className="m-0 self-stretch relative text-29xl leading-[120%] font-bold font-inherit text-tomato mq1050:text-19xl mq1050:leading-[46px] mq450:text-10xl mq450:leading-[35px]">{`Unleash the power of technology without breaking the bank `}</h1>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0 pr-5 gap-3.5 text-5xl text-gray-100">
                <h3 className="m-0 relative text-inherit leading-[120%] font-bold font-inherit mq450:text-lgi mq450:leading-[23px]">
                  Why Choose Kisstech?
                </h3>
                <div className="self-stretch relative text-base tracking-[-0.03em] leading-[160%] font-medium text-primary">
                  <p className="m-0">Transparent Pricing</p>
                  <ul className="m-0 font-inherit text-inherit pl-[21px] text-text">
                    <li className="mb-0">
                      <span>{`No hidden fees, no surprises. `}</span>
                    </li>
                    <li className="mb-0">
                      <span>Straightforward monthly subscription</span>
                    </li>
                  </ul>
                  <p className="m-0">Result-Driven Approach</p>
                  <ul className="m-0 font-inherit text-inherit pl-[21px] text-text">
                    <li className="mb-0">
                      <span>We deliver results</span>
                    </li>
                    <li className="mb-0">
                      <span>Increase online presence</span>
                    </li>
                    <li className="mb-0">
                      <span>Drive sales</span>
                    </li>
                  </ul>
                  <p className="m-0">Time, Money and Energy Savings</p>
                  <ul className="m-0 font-inherit text-inherit pl-[21px] text-text">
                    <li>
                      <span>Your business elevated, your time saved</span>
                    </li>
                  </ul>
                </div>
              </div>
              <Button
                propPadding="20px 30px"
                propBackgroundColor="#050509"
                getAQuote="Learn More"
                propMinWidth1="86px"
                propColor="#fff"
                buttonBorder="none"
                getAQuoteDisplay="inline-block"
              />
            </div>
          </div>
          <div className="h-0 w-[1140px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-full">
            <div className="self-stretch h-px relative border-border-1 border-t-[1px] border-solid box-border" />
          </div>
        </div>
      </section>
      <section className="self-stretch bg-white overflow-hidden flex flex-row flex-wrap items-start justify-center py-20 px-5 box-border max-w-full text-left text-mid text-secondary font-heading-2 lg:pt-[52px] lg:pb-[52px] lg:box-border mq750:pt-[34px] mq750:pb-[34px] mq750:box-border">
        <div className="w-[1240px] flex flex-row flex-wrap items-start justify-start gap-[60px] min-h-[963px] max-w-full gap-[30px]">
          <div className="w-[518px] flex flex-row flex-wrap items-start justify-start py-0 pl-0 pr-[18px] box-border min-h-[78px] max-w-full">
            <div className="relative tracking-[0.15em] leading-[120%] uppercase font-medium shrink-0">
              Our Services
            </div>
            <h1 className="m-0 h-[58px] relative text-29xl leading-[120%] font-bold font-inherit text-primary inline-block shrink-0 mq1050:text-19xl mq1050:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
              Our Service Offerings
            </h1>
          </div>
          <div className="w-[1240px] flex flex-row flex-wrap items-center justify-center py-0 px-[50px] box-border gap-x-[60px] gap-y-[5px] min-h-[825px] max-w-full text-13xl text-primary lg:pl-[25px] lg:pr-[25px] lg:box-border">
            <div className="w-[1140px] flex flex-row flex-wrap items-center justify-center gap-x-[30px] gap-y-9 min-h-[728px] max-w-full gap-[18px]">
              <ServiceCard
                heading={`Web Design & Hosting`}
                propDisplay="inline-block"
                paragraph="Create a powerful online presence with our expert web design and hosting services. Our team crafts visually appealing and user-friendly websites, ensuring your business stands out in the crowded digital landscape."
                serviceCardWidth="550px"
                titleFlex="1"
                titleMinWidth="221px"
                headingMargin="0"
                headingFontWeight="700"
                paragraphAlignSelf="stretch"
              />
              <ServiceCard
                heading="AI-Integrated Systems"
                propDisplay="inline-block"
                paragraph="Embrace the future with artificial intelligence. Our AI-integrated systems enhance efficiency, automate processes, and provide valuable insights for informed decision-making."
                serviceCardWidth="550px"
                titleFlex="1"
                titleMinWidth="221px"
                headingMargin="0"
                headingFontWeight="700"
                paragraphAlignSelf="stretch"
              />
              <ServiceCard
                heading="Sales Support "
                paragraph="Empower your sales team with our sales support services. From CRM integration to lead generation strategies, we enhance your sales processes for improved performance."
                serviceCardWidth="550px"
                titleFlex="1"
                titleMinWidth="221px"
                headingMargin="0"
                headingFontWeight="700"
                paragraphAlignSelf="stretch"
              />
              <ServiceCard
                heading={`Phone Systems & 
                  Transcription`}
                paragraph="Experience seamless communication with our advanced phone
                    systems. From VoIP solutions to integrated communication
                    platforms, we provide the tools to keep your business
                    connected."
                serviceCardWidth="550px"
                titleFlex="1"
                titleMinWidth="221px"
                headingMargin="0"
                headingFontWeight="700"
                paragraphAlignSelf="stretch"
              />
              <ServiceCard
                heading={`Marketing Material & 
                  Strategies`}
                paragraph="Unlock the full potential of digital marketing with our
                    comprehensive strategies. From content creation to SEO
                    optimization, we help you reach you drive results."
                serviceCardWidth="550px"
                titleFlex="1"
                titleMinWidth="221px"
                headingMargin="0"
                headingFontWeight="700"
                paragraphAlignSelf="stretch"
              />

              <ServiceCard
                heading="Social Media "
                paragraph="We offer expert social media services designed to elevate your brand’s presence, engage audiences, and drive conversions across all major platforms."
                serviceCardWidth="550px"
                titleFlex="1"
                titleMinWidth="221px"
                headingMargin="0"
                headingFontWeight="700"
                paragraphAlignSelf="stretch"
              />
              <div className="rounded-3xs bg-main-background border-border-1 border-[1px] border-solid box-border overflow-hidden hidden flex-row items-center justify-center py-3 px-[49px] gap-9 max-w-full mq750:flex-wrap">
                <div className="rounded-8xs bg-variant-background overflow-hidden flex flex-row items-center justify-start py-[34px] px-7">
                  <img
                    className="h-5 w-[18px] relative"
                    alt=""
                    src="/vector-11.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-2.5 max-w-full">
                  <b className="h-[38px] relative tracking-[-0.02em] leading-[120%] inline-block mq1050:text-7xl mq1050:leading-[31px] mq450:text-lgi mq450:leading-[23px]">{`Social Media `}</b>
                  <div className="w-[340px] h-[104px] relative text-base tracking-[-0.03em] leading-[160%] font-medium text-text inline-block max-w-full">
                    We offer expert social media services designed to elevate
                    your brand’s presence, engage audiences, and drive
                    conversions across all major platforms.
                  </div>
                </div>
              </div>
              <div className="rounded-3xs bg-main-background border-border-1 border-[1px] border-solid box-border overflow-hidden hidden flex-row items-center justify-center py-3 px-[49px] gap-9 max-w-full mq750:flex-wrap">
                <div className="rounded-8xs bg-variant-background overflow-hidden flex flex-row items-center justify-start py-[34px] px-7">
                  <img
                    className="h-5 w-[18px] relative"
                    alt=""
                    src="/vector-11.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-2.5 max-w-full">
                  <b className="h-[38px] relative tracking-[-0.02em] leading-[120%] inline-block mq1050:text-7xl mq1050:leading-[31px] mq450:text-lgi mq450:leading-[23px]">{`Social Media `}</b>
                  <div className="w-[340px] h-[104px] relative text-base tracking-[-0.03em] leading-[160%] font-medium text-text inline-block max-w-full">
                    We offer expert social media services designed to elevate
                    your brand’s presence, engage audiences, and drive
                    conversions across all major platforms.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center p-2.5 text-mid text-accent">
              <div
                className="relative tracking-[-0.03em] leading-[100%] font-medium inline-block min-w-[119px] cursor-pointer"
                onClick={onTextLinkClick}
              >
                See All Services
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhyUs1 />
      <Testimonials />
      <ContactFormSection
        fieldPadding="24px"
        getAQuoteMinWidth="159px"
        propPadding1="24px"
        propMinWidth="159px"
        yourName="Your Name"
        yourName1="Your Email"
        enterYourNamePlaceholder="Enter Your Name"
        enterYourNamePlaceholder1="Enter Your Email"
        getAQuote="Send Message"
        contactFormSectionAlignSelf="stretch"
        contactFormSectionGap="158px"
        contactInfoPadding="18px 0px"
        contactInfoMinWidth="480px"
        readyToTakeMargin="0"
        readyToTakeFontWeight="700"
        contactUsMargin="0"
        contactUsFontWeight="700"
        headerMargin="0"
        headerFontWeight="700"
        lineDivAlignSelf="stretch"
        iconBoxWidth="336px"
        iconBox1AlignSelf="stretch"
        iconBox2AlignSelf="stretch"
        contactFormFlex="1"
        contactFormMinWidth="338px"
      />
      <Footer
        kissTech="/kisstech.svg"
        footerAlignSelf="stretch"
        containerWidth="1177px"
        allLinksAlignSelf="stretch"
        allLinksPadding="0px 2px 0px 0px"
        allLinksGap="20px"
        phoneSpaceDisplay="inline-block"
        phoneSpaceMinWidth="112px"
        navigationPadding="0px 3px 0px 0px"
        phoneSystemsDisplay="inline-block"
        phoneSystemsMinWidth="111px"
        salesSupportDisplay="inline-block"
        salesSupportMinWidth="100px"
        companyEmailDisplay="inline-block"
        companyEmailMinWidth="113px"
        socialMediaDisplay="inline-block"
        socialMediaMinWidth="91px"
        headingDisplay="inline-block"
        headingMinWidth="36px"
        knowledgeBaseDisplay="inline-block"
        knowledgeBaseMinWidth="117px"
        dataPrivacyDisplay="inline-block"
        dataPrivacyMinWidth="90px"
        fAQDisplay="inline-block"
        fAQMinWidth="30px"
        headingDisplay1="inline-block"
        headingMinWidth1="63px"
        phoneIconMinHeight="18px"
        divDisplay="inline-block"
        divMinWidth="112px"
        lineHeight="0px"
        linePadding="0px 18px 0px"
        lineDivFlex="1"
        copyrightPadding="0px 20px"
        designedByTokoTemaAlignSelf="stretch"
      />
    </div>
  );
};

export default Home;
