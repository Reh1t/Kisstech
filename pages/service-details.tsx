import type { NextPage } from "next";
import { useCallback } from "react";
import Header from "../components/header";
import ServiceDetailLeft from "../components/service-detail-left";
import { useRouter } from "next/router";
import ServiceDetailRight from "../components/service-detail-right";
import ServiceCard from "../components/service-card";
import PhotoGridAndInfoSection from "../components/photo-grid-and-info-section";
import Footer from "../components/footer";

const ServiceDetails: NextPage = () => {
  const router = useRouter();

  const onButtonContainerClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  const onTextLinkClick = useCallback(() => {
    router.push("/service-details");
  }, [router]);

  return (
    <div className="w-full relative bg-white flex flex-col items-end justify-start leading-[normal] tracking-[normal]">
      <Header
        group1="/group-1.svg"
        getAQuote="Contact Us"
        headerTop="0"
        headerPosition="sticky"
        headerGap="20px"
        frameDivWidth="296px"
        frameWidth="unset"
        frameFlex="1"
        frameWidth1="unset"
        groupIconAlignSelf="stretch"
        groupIconOverflow="hidden"
        groupIconWidth="unset"
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
      <section className="self-stretch bg-main-background overflow-hidden flex flex-col items-center justify-start py-[60px] px-5 box-border gap-5 max-w-full text-left text-37xl text-variant-background font-heading-2 mq450:pt-[39px] mq450:pb-[39px] mq450:box-border">
        <div className="flex flex-row items-center justify-center py-0 px-[220px] box-border gap-10 max-w-full lg:flex-wrap lg:pl-[110px] lg:pr-[110px] lg:box-border mq825:pl-[55px] mq825:pr-[55px] mq825:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="h-10 w-[241px] flex flex-col items-start justify-start py-5 px-0 box-border">
            <div className="self-stretch h-px relative border-border-2 border-t-[1px] border-solid box-border" />
          </div>
          <div className="flex flex-row items-center justify-center max-w-full">
            <h1 className="m-0 h-[67px] relative text-inherit leading-[120%] font-bold font-inherit inline-block mq825:text-26xl mq825:leading-[54px] mq450:text-15xl mq450:leading-[40px]">
              Product Details
            </h1>
          </div>
        </div>
        <div className="w-[602px] flex flex-row flex-wrap items-center justify-center p-2.5 box-border max-w-full text-lg text-text">
          <div className="flex-1 relative tracking-[-0.03em] leading-[160%] inline-block max-w-full">
            At Kisstech, we specialize in enhancing your brand’s visibility and
            efficiency. Some of our services include advanced digital marketing,
            Google Ads, seamless print media campaigns, comprehensive phone
            solutions, and dynamic website development. Partner with us for
            integrated strategies that deliver real results.
          </div>
        </div>
      </section>
      <ServiceDetailLeft
        digitalMarketingServices="Digital Marketing Services"
        text="We understand that marketing and sales support are crucial for small businesses to gain visibility and attract customers. However,  we also know that many existing services overcharge without delivering commensurate value. Here’s how our approach aims to provide cost-effective and impactful marketing solutions."
        grandparentsParentsOrPort="/grandparentsparentsorportraitofhappychildre20231127052659utc-1@2x.png"
      />
      <section className="self-stretch bg-white overflow-hidden flex flex-row items-center justify-between py-0 px-[150px] box-border max-w-full gap-[18px] text-left text-lg text-text font-heading-2 mq825:pl-[75px] mq825:pr-[75px] mq825:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1425:flex-wrap">
        <div className="w-[640px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border min-w-[640px] max-w-full lg:min-w-full mq1425:flex-1 mq1425:pr-0 mq1425:box-border">
          <div className="w-[580px] relative tracking-[-0.03em] leading-[160%] inline-block max-w-full">
            <b>{`Our Approach: `}</b>
            <span>
              We help create and manage high-quality content that drives traffic
              and improves your search engine rankings. We can assist with blog
              posts, social media updates, and more to ensure your online
              presence is robust and engaging.
            </span>
          </div>
        </div>
        <div className="w-[482px] flex flex-col items-start justify-start gap-5 min-w-[482px] max-w-full text-5xl text-black lg:min-w-full mq1425:flex-1">
          <h3 className="m-0 self-stretch relative text-inherit leading-[29px] font-bold font-inherit mq450:text-lgi mq450:leading-[23px]">
            Content Creation and Management
          </h3>
          <div className="self-stretch relative text-lg tracking-[-0.03em] leading-[160%] text-text">
            Content is key to successful digital marketing. This includes blogs,
            articles, videos, and social media posts that attract and engage
            your audience.
          </div>
        </div>
      </section>
      <section className="self-stretch bg-white flex flex-row items-start justify-between py-5 px-[156px] box-border max-w-full gap-5 text-left text-17xl text-primary font-heading-2 mq825:pl-[78px] mq825:pr-[78px] mq825:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1425:flex-wrap">
        <div className="h-[338px] w-[482px] rounded-xl bg-secondary overflow-hidden shrink-0 flex flex-col items-start justify-start min-w-[482px] max-w-full lg:min-w-full mq1425:flex-1">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover mq1425:self-stretch mq1425:w-auto"
            alt=""
            src="/grandparentsparentsorportraitofhappychildre20231127052659utc-1-1@2x.png"
          />
        </div>
        <div className="w-[531px] flex flex-col items-center justify-start min-w-[531px] max-w-full lg:min-w-full mq1425:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full">
            <div className="self-stretch flex flex-row items-center justify-start gap-4 max-w-full mq825:flex-wrap">
              <div className="h-px w-[91px] relative border-border-2 border-t-[1px] border-solid box-border" />
              <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[120%] font-bold font-inherit inline-block max-w-full mq825:text-10xl mq825:leading-[35px] mq450:text-3xl mq450:leading-[26px]">
                Google Ads Management
              </h1>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-lg text-text">
              <div className="self-stretch relative tracking-[-0.03em] leading-[160%]">
                <p className="m-0">
                  Many companies charge exorbitant fees for managing Google Ads,
                  sometimes as high as $599 per month, excluding the actual ad
                  spend. Our service aims to cut through the unnecessary costs
                  by offering transparent and efficient management.
                </p>
                <p className="m-0">
                  <b className="font-heading-2">{`Our Approach: `}</b>
                  <span>
                    We set up and manage your Google Ads campaigns, ensuring you
                    get maximum value from your ad spend. Our pricing is
                    straightforward, with a base fee and a small percentage of
                    your ad spend as a management fee.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch bg-white flex flex-row items-start justify-between py-5 px-[143px] box-border max-w-full gap-5 text-left text-17xl text-primary font-heading-2 mq825:pl-[71px] mq825:pr-[71px] mq825:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1425:flex-wrap">
        <div className="w-[557px] flex flex-col items-center justify-start gap-6 min-w-[557px] max-w-full lg:min-w-full mq1425:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full">
            <div className="self-stretch flex flex-row items-center justify-start gap-5 max-w-full mq825:flex-wrap">
              <div className="w-[91px] relative border-border-2 border-t-[1px] border-solid box-border" />
              <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[120%] font-bold font-inherit inline-block max-w-full mq825:text-10xl mq825:leading-[35px] mq450:text-3xl mq450:leading-[26px]">
                Print and traditional media
              </h1>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-lg text-text">
              <div className="self-stretch relative tracking-[-0.03em] leading-[160%]">
                <p className="m-0">
                  <span>
                    <span>
                      Despite the digital shift, print media remains a valuable
                      marketing tool.
                    </span>
                  </span>
                </p>
                <p className="m-0">
                  <span>
                    <b className="font-heading-2">{`Our Approach: `}</b>
                    <span>
                      We design and manage print campaigns, including brochures,
                      flyers, and business cards.
                    </span>
                  </span>
                </p>
                <p className="m-0">
                  <span>
                    <span>&nbsp;</span>
                  </span>
                </p>
                <p className="m-0 text-primary">
                  <b>
                    <span>Branding and Merchandise</span>
                  </b>
                </p>
                <p className="m-0">
                  <span>
                    <b>&nbsp;</b>
                  </span>
                </p>
                <p className="m-0">
                  <span>
                    <span>
                      Strong branding helps differentiate your business.
                    </span>
                  </span>
                </p>
                <p className="m-0">
                  <span>
                    <b className="font-heading-2">{`Our Approach: `}</b>
                    <span>
                      We offer branding services, including logo design, brand
                      guidelines, and promotional merchandise such as t-shirts
                      and hats. Our goal is to help you build a cohesive and
                      recognizable brand.
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div
            className="w-[150px] rounded-80xl bg-primary hidden flex-row items-center justify-center py-5 px-[30px] box-border whitespace-nowrap cursor-pointer text-mid text-white"
            onClick={onButtonContainerClick}
          >
            <div className="flex-1 relative tracking-[-0.03em] leading-[100%] font-medium">
              Get Started
            </div>
          </div>
        </div>
        <div className="h-[338px] w-[482px] rounded-xl bg-secondary overflow-hidden shrink-0 flex flex-col items-start justify-start min-w-[482px] max-w-full mq825:min-w-full mq1425:flex-1">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover mq1425:self-stretch mq1425:w-auto"
            alt=""
            src="/grandparentsparentsorportraitofhappychildre20231127052659utc-1-2@2x.png"
          />
        </div>
      </section>
      <section className="self-stretch flex flex-row items-center justify-center py-[30px] px-5 box-border gap-5 max-w-full text-left text-17xl text-primary font-heading-2 lg:flex-wrap">
        <div className="h-px w-[91px] relative border-border-2 border-t-[1px] border-solid box-border" />
        <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[120%] font-bold font-inherit inline-block max-w-full mq825:text-10xl mq825:leading-[35px] mq450:text-3xl mq450:leading-[26px]">{`AI Services and Their Benefits for Businesses `}</h1>
      </section>
      <ServiceDetailLeft
        digitalMarketingServices="Overview of Ai Adoption"
        text="Artificial Intelligence (AI) is a rapidly evolving field, with improvements and advancements occurring daily. While AI's adoption is widespread in larger corporations, it also offers significant benefits for small businesses and sole proprietors. and it can greatly enhance daily operations and introduce efficiencies."
        grandparentsParentsOrPort="/grandparentsparentsorportraitofhappychildre20231127052659utc-1-3@2x.png"
      />
      <ServiceDetailRight />
      <section className="self-stretch bg-white overflow-hidden flex flex-row flex-wrap items-start justify-center py-20 px-5 box-border max-w-full text-left text-mid text-secondary font-heading-2 lg:pt-[52px] lg:pb-[52px] lg:box-border mq450:pt-[34px] mq450:pb-[34px] mq450:box-border">
        <div className="w-[1240px] flex flex-row flex-wrap items-start justify-start gap-[60px] min-h-[689px] max-w-full">
          <div className="w-[518px] flex flex-row flex-wrap items-start justify-start py-0 pl-0 pr-[9px] box-border min-h-[78px] max-w-full">
            <div className="relative tracking-[0.15em] leading-[120%] uppercase font-medium shrink-0">
              Other Services
            </div>
            <h1 className="m-0 h-[58px] relative text-29xl leading-[120%] font-bold font-inherit text-primary inline-block shrink-0 mq825:text-19xl mq825:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
              Our Range of Services
            </h1>
          </div>
          <div className="w-[1240px] flex flex-row flex-wrap items-center justify-center py-0 px-[50px] box-border gap-x-[60px] gap-y-[5px] min-h-[551px] max-w-full text-13xl text-primary mq1425:pl-[25px] mq1425:pr-[25px] mq1425:box-border">
            <div className="w-[1140px] flex flex-row flex-wrap items-center justify-center gap-x-[30px] gap-y-9 min-h-[454px] max-w-full gap-[18px]">
              <ServiceCard
                heading="Company Email"
                propDisplay="unset"
                propHeight="unset"
                paragraph="Communicate professionally with our secure and reliable company email solutions. Enjoy seamless communication within your organization and with clients."
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
              <div className="rounded-3xs bg-main-background border-border-1 border-[1px] border-solid box-border overflow-hidden hidden flex-row items-center justify-center py-3 px-[49px] gap-9 max-w-full mq825:flex-wrap">
                <div className="rounded-8xs bg-variant-background overflow-hidden flex flex-row items-center justify-start py-[34px] px-7">
                  <img
                    className="h-5 w-[18px] relative"
                    alt=""
                    src="/vector-11.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-2.5 max-w-full">
                  <b className="h-[76px] relative tracking-[-0.02em] leading-[120%] inline-block mq825:text-7xl mq825:leading-[31px] mq450:text-lgi mq450:leading-[23px]">
                    <p className="m-0">{`Phone Systems & `}</p>
                    <p className="m-0">Transcription</p>
                  </b>
                  <div className="w-[340px] h-[130px] relative text-base tracking-[-0.03em] leading-[160%] font-medium text-text inline-block max-w-full">
                    Experience seamless communication with our advanced phone
                    systems. From VoIP solutions to integrated communication
                    platforms, we provide the tools to keep your business
                    connected.
                  </div>
                </div>
              </div>
              <div className="w-[550px] rounded-3xs bg-main-background border-border-1 border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-3 px-[49px] gap-9 max-w-full mq825:flex-wrap mq825:pl-6 mq825:pr-6 mq825:box-border">
                <div className="rounded-8xs bg-variant-background overflow-hidden flex flex-row items-center justify-start py-[34px] px-7">
                  <img
                    className="h-5 w-[18px] relative"
                    alt=""
                    src="/vector-11.svg"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-2.5 min-w-[221px] max-w-full">
                  <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[120%] font-bold font-inherit mq825:text-7xl mq825:leading-[31px] mq450:text-lgi mq450:leading-[23px]">
                    <p className="m-0">{`Marketing Material & `}</p>
                    <p className="m-0">Strategies</p>
                  </h1>
                  <div className="self-stretch relative text-base tracking-[-0.03em] leading-[160%] font-medium text-text">
                    Unlock the full potential of digital marketing with our
                    comprehensive strategies. From content creation to SEO
                    optimization, we help you reach you drive results.
                  </div>
                </div>
              </div>
              <div className="rounded-3xs bg-main-background border-border-1 border-[1px] border-solid box-border overflow-hidden hidden flex-row items-center justify-center py-3 px-[49px] gap-9 max-w-full mq825:flex-wrap">
                <div className="rounded-8xs bg-variant-background overflow-hidden flex flex-row items-center justify-start py-[34px] px-7">
                  <img
                    className="h-5 w-[18px] relative"
                    alt=""
                    src="/vector-11.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-2.5 max-w-full">
                  <b className="h-[38px] relative tracking-[-0.02em] leading-[120%] inline-block mq825:text-7xl mq825:leading-[31px] mq450:text-lgi mq450:leading-[23px]">{`Social Media `}</b>
                  <div className="w-[340px] h-[104px] relative text-base tracking-[-0.03em] leading-[160%] font-medium text-text inline-block max-w-full">
                    We offer expert social media services designed to elevate
                    your brand’s presence, engage audiences, and drive
                    conversions across all major platforms.
                  </div>
                </div>
              </div>
              <div className="rounded-3xs bg-main-background border-border-1 border-[1px] border-solid box-border overflow-hidden hidden flex-row items-center justify-center py-3 px-[49px] gap-9 max-w-full mq825:flex-wrap">
                <div className="rounded-8xs bg-variant-background overflow-hidden flex flex-row items-center justify-start py-[34px] px-7">
                  <img
                    className="h-5 w-[18px] relative"
                    alt=""
                    src="/vector-11.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-2.5 max-w-full">
                  <b className="h-[38px] relative tracking-[-0.02em] leading-[120%] inline-block mq825:text-7xl mq825:leading-[31px] mq450:text-lgi mq450:leading-[23px]">{`Social Media `}</b>
                  <div className="w-[340px] h-[104px] relative text-base tracking-[-0.03em] leading-[160%] font-medium text-text inline-block max-w-full">
                    We offer expert social media services designed to elevate
                    your brand’s presence, engage audiences, and drive
                    conversions across all major platforms.
                  </div>
                </div>
              </div>
              <div className="rounded-3xs bg-main-background border-border-1 border-[1px] border-solid box-border overflow-hidden hidden flex-row items-center justify-center py-3 px-[49px] gap-9 max-w-full mq825:flex-wrap">
                <div className="rounded-8xs bg-variant-background overflow-hidden flex flex-row items-center justify-start py-[34px] px-7">
                  <img
                    className="h-5 w-[18px] relative"
                    alt=""
                    src="/vector-11.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-2.5 max-w-full">
                  <b className="h-[38px] relative tracking-[-0.02em] leading-[120%] inline-block mq825:text-7xl mq825:leading-[31px] mq450:text-lgi mq450:leading-[23px]">{`Social Media `}</b>
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
      <section className="self-stretch overflow-hidden flex flex-col items-end justify-center py-[242px] px-[167px] box-border bg-[url('/3-review@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-13xl text-border-1 font-heading-2 lg:pl-[83px] lg:pr-[83px] lg:box-border mq825:py-[157px] mq825:px-[41px] mq825:box-border mq450:pt-[102px] mq450:pb-[102px] mq450:box-border">
        <div className="w-[640px] flex flex-col items-start justify-start max-w-full">
          <h1 className="m-0 self-stretch h-[304px] relative text-inherit tracking-[-0.02em] leading-[120%] inline-block font-inherit mq825:text-7xl mq825:leading-[31px] mq450:text-lgi mq450:leading-[23px]">
            <p className="m-0 text-main-background">
              <span>
                <span>
                  Join our membership club for a minimum of two years to get the
                  best value and build a long-lasting partnership with us.
                </span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span>&nbsp;</span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <b>Special Offer:</b>
              </span>
            </p>
            <p className="m-0">
              <span>
                <b>&nbsp;</b>
              </span>
            </p>
            <p className="m-0">Choose at least three services to qualify</p>
            <p className="m-0"> for our discounted rates!</p>
          </h1>
        </div>
      </section>
      <PhotoGridAndInfoSection
        propMinHeight="429px"
        propWidth="279.4px"
        propMinWidth="279.4px"
        propMinWidth1="unset"
        beachHappyAndPortraitOfAB="/beachhappyandportraitofabigfamilyonavac20231127050445utc-11@2x.png"
        frameDiv={false}
        propMinWidth2="unset"
        herAttitudeShinesThroughT="/herattitudeshinesthroughtherain20240228150752utc-11@2x.png"
        image3="/image-31@2x.png"
        propWidth1="unset"
        propMinWidth3="378px"
        propFlex="1"
        allInOneBusinessSolutions="Get Started"
        propDisplay="unset"
        propMinWidth4="unset"
        unleashThePowerOfTechnolo="Get Started with Kisstech Solutions"
        whyChooseKisstech={false}
        propWidth2="346px"
        propMargin="unset"
        propHeight="unset"
        propFontWeight="unset"
        text="Our mission is to help you succeed. We are excited about our services, and want you to start benefiting from them right away, but we understand you want to get to know us better and what we’re all about. With all of our customizable options, we know we have a solution that’s right for you."
        propFontWeight1="unset"
        getAQuote="Get Started"
        photoGridAndInfoSectionAlignSelf="stretch"
        photoGridAndInfoSectionWidth="unset"
        frameDivPadding="0px 0px"
        frameDivPadding1="0px 156px"
        frameDivAlignSelf="stretch"
        frameDivFlex="1"
        beachHappyAndPortraitOfAIFlex="1"
        beachHappyAndPortraitOfAIOverflow="hidden"
        beachHappyAndPortraitOfAIWidth="unset"
        frameDivHeight="391px"
        herAttitudeShinesThroughTFlex="1"
        herAttitudeShinesThroughTMaxHeight="100%"
        herAttitudeShinesThroughTHeight="unset"
        image3IconFlex="1"
        image3IconMaxHeight="100%"
        image3IconHeight="unset"
        titleWidth="516px"
        unleashThePowerMargin="0"
        unleashThePowerAlignSelf="stretch"
        unleashThePowerFontWeight="700"
        unleashThePowerWidth="unset"
        unleashThePowerDisplay="unset"
      />
      <Footer
        kissTech="/kisstech.svg"
        footerAlignSelf="stretch"
        footerWidth="unset"
        containerWidth="1177px"
        allLinksAlignSelf="stretch"
        allLinksPadding="0px 2px 0px 0px"
        allLinksGap="20px"
        allLinksWidth="unset"
        phoneSpaceDisplay="inline-block"
        phoneSpaceMinWidth="112px"
        navigationPadding="0px 3px 0px 0px"
        navigationAlignSelf="unset"
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
        lineDivWidth="unset"
        copyrightPadding="0px 20px"
        designedByTokoTemaAlignSelf="stretch"
      />
    </div>
  );
};

export default ServiceDetails;
