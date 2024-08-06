import type { NextPage } from "next";
import Header from "../components/header";
import Services from "../components/services";
import WhyUs from "../components/why-us";
import Banner from "../components/banner";
import FrameComponent from "../components/frame-component";
import PRICEPERMONTH from "../components/p-r-i-c-e-p-e-r-m-o-n-t-h";
import Button from "../components/button";
import Features from "../components/features";
import CardTrio from "../components/card-trio";
import PhotoGridAndInfoSection from "../components/photo-grid-and-info-section";
import Footer from "../components/footer";

const Products: NextPage = () => {
  return (
    <div className="w-full relative bg-white flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
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
        <div className="flex flex-row items-center justify-center py-0 px-[178px] box-border gap-10 max-w-full gap-5 mq800:pl-11 mq800:pr-11 mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1125:flex-wrap mq1125:pl-[89px] mq1125:pr-[89px] mq1125:box-border">
          <div className="h-10 w-[241px] flex flex-col items-start justify-start py-5 px-0 box-border">
            <div className="self-stretch h-px relative border-border-2 border-t-[1px] border-solid box-border" />
          </div>
          <div className="flex flex-row items-center justify-center max-w-full">
            <h1 className="m-0 h-[67px] relative text-inherit leading-[120%] font-bold font-inherit inline-block mq800:text-26xl mq800:leading-[54px] mq450:text-15xl mq450:leading-[40px]">{`Products & Pricing`}</h1>
          </div>
        </div>
        <div className="w-[602px] flex flex-row flex-wrap items-center justify-center p-2.5 box-border max-w-full text-lg text-text">
          <div className="flex-1 relative tracking-[-0.03em] leading-[160%] inline-block max-w-full">
            At Kisstech, we take pride in offering a diverse range of services
            designed to elevate your business in the digital age. When you
            become part of our membership club, you're opening the door to a
            world of innovative solutions tailored to meet your unique needs.
            Let's delve into the core offerings that set Kisstech apart as your
            trusted digital partner.
          </div>
        </div>
      </section>
      <Services />
      <WhyUs />
      <Banner />
      <FrameComponent />
      <section className="bg-white overflow-hidden flex flex-col items-start justify-start py-0 pl-[108px] pr-32 box-border gap-[49px] max-w-full text-left text-13xl text-primary font-heading-2 gap-6 mq800:pl-[54px] mq800:pr-16 mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="w-[404px] flex flex-col items-start justify-start max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[120%] font-bold font-inherit mq800:text-7xl mq800:leading-[31px] mq450:text-lgi mq450:leading-[23px]">
            Business Service Products
          </h1>
        </div>
        <div className="flex flex-row items-center justify-center gap-14 max-w-full mq1350:flex-wrap">
          <div className="w-[364px] rounded-3xs bg-main-background overflow-hidden shrink-0 flex flex-row flex-wrap items-start justify-start py-4 px-[42px] box-border gap-x-[23px] gap-y-7 min-h-[804px] max-w-full mq1350:pl-[21px] mq1350:pr-[21px] mq1350:box-border">
            <PRICEPERMONTH
              propAlignSelf="unset"
              propPadding="unset"
              prop="$100"
              propDisplay="inline-block"
              propMinWidth="58px"
              propColor="#050509"
              propMargin="unset"
              propFontWeight="unset"
              month="/Month"
              text="Regular Price"
              text1
              propHeight="unset"
              textWidth="unset"
              textAlignSelf="stretch"
            />
            <PRICEPERMONTH
              propAlignSelf="unset"
              propPadding="0px 10px 0px 0px"
              prop="$50"
              propDisplay="inline-block"
              propMinWidth="47px"
              propColor="#050509"
              propMargin="unset"
              propFontWeight="unset"
              month="/Month"
              text="Discount Price"
              text1
              propHeight="unset"
              textWidth="unset"
              textAlignSelf="stretch"
            />
            <div className="w-[265px] flex flex-col items-start justify-start py-0 pl-0 pr-px box-border gap-2.5">
              <div className="self-stretch flex flex-row items-center justify-center">
                <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.02em] leading-[120%] font-bold font-inherit mq800:text-7xl mq800:leading-[31px] mq450:text-lgi mq450:leading-[23px]">
                  Professional Website Development
                </h1>
              </div>
              <div className="flex flex-col items-start justify-center gap-1 text-base text-text">
                <div className="flex flex-row items-center justify-center">
                  <b className="relative tracking-[-0.03em] leading-[160%] inline-block min-w-[117px]">
                    Starter Website
                  </b>
                </div>
                <div className="relative text-xs tracking-[-0.03em] leading-[160%] font-medium">
                  *One-Time Cost: $2400 (optional)
                </div>
              </div>
            </div>
            <div className="h-px w-[265px] relative border-border-2 border-t-[1px] border-solid box-border" />
            <div className="w-[264px] flex flex-col items-start justify-start gap-6 text-xs">
              <div className="self-stretch flex flex-col items-start justify-start gap-3.5">
                <div className="relative tracking-[0.15em] leading-[120%] uppercase font-medium inline-block min-w-[71px]">
                  Includes
                </div>
                <div className="self-stretch relative text-base tracking-[-0.03em] leading-[160%] font-medium text-text">
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li>
                      Ideal for a small business or individual who need a
                      starter website. This provides a sleek, modern design that
                      effectively showcases your services and engages your
                      audience.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-3.5">
                <div className="relative tracking-[0.15em] leading-[120%] uppercase font-medium inline-block min-w-[107px]">
                  Key Features:
                </div>
                <div className="self-stretch relative text-base tracking-[-0.03em] leading-[160%] font-medium text-text">
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li>
                      Ideal for a small business or individual who need a
                      starter website. This provides a sleek, modern design that
                      effectively showcases your services and engages your
                      audience.
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
          <div className="w-[364px] rounded-3xs bg-variant-background overflow-hidden shrink-0 flex flex-row flex-wrap items-start justify-start pt-4 px-[42px] pb-[113px] box-border gap-x-[23px] gap-y-7 min-h-[804px] max-w-full text-white mq800:pt-5 mq800:pb-[73px] mq800:box-border mq1350:pl-[21px] mq1350:pr-[21px] mq1350:box-border">
            <PRICEPERMONTH
              propAlignSelf="unset"
              propPadding="unset"
              prop="$100"
              propDisplay="inline-block"
              propMinWidth="58px"
              propColor="#f3f5fc"
              propMargin="unset"
              propFontWeight="unset"
              month="/Month"
              text="Regular Price"
              text1
              propHeight="unset"
              textWidth="unset"
              textAlignSelf="stretch"
            />
            <PRICEPERMONTH
              propAlignSelf="unset"
              propPadding="0px 10px 0px 0px"
              prop="$50"
              propDisplay="inline-block"
              propMinWidth="47px"
              propColor="#f3f5fc"
              propMargin="unset"
              propFontWeight="unset"
              month="/Month"
              text="Discount Price"
              text1
              propHeight="unset"
              textWidth="unset"
              textAlignSelf="stretch"
            />
            <div className="w-[265px] flex flex-col items-start justify-start py-0 pl-0 pr-px box-border gap-2.5">
              <div className="self-stretch flex flex-row items-center justify-center">
                <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.02em] leading-[120%] font-bold font-inherit mq800:text-7xl mq800:leading-[31px] mq450:text-lgi mq450:leading-[23px]">{`Web Hosting & Email`}</h1>
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
            <div className="w-[264px] flex flex-col items-start justify-start gap-6 text-xs text-main-background">
              <div className="self-stretch flex flex-col items-start justify-start gap-3.5">
                <div className="relative tracking-[0.15em] leading-[120%] uppercase font-medium inline-block min-w-[71px]">
                  Includes
                </div>
                <div className="self-stretch relative text-base tracking-[-0.03em] leading-[160%] font-medium text-text">
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li>
                      Ideal for a small business or individual who need a
                      starter website. This provides a sleek, modern design that
                      effectively showcases your services and engages your
                      audience.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-3.5 text-white">
                <div className="relative tracking-[0.15em] leading-[120%] uppercase font-medium inline-block min-w-[107px]">
                  Key Features:
                </div>
                <div className="self-stretch relative text-base tracking-[-0.03em] leading-[160%] font-medium text-text">
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li>
                      Ideal for a small business or individual who need a
                      starter website. This provides a sleek, modern design that
                      effectively showcases your services and engages your
                      audience.
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
              propBackgroundColor="#f3f5fc"
              getAQuote="Get Started"
              propMinWidth1="90px"
              propColor="#050509"
              buttonBorder="none"
              getAQuoteDisplay="inline-block"
            />
          </div>
          <div className="w-[364px] rounded-3xs bg-main-background overflow-hidden shrink-0 flex flex-row flex-wrap items-start justify-start pt-4 px-[42px] pb-[151px] box-border gap-x-[23px] gap-y-7 min-h-[804px] max-w-full mq800:pt-5 mq800:pb-[98px] mq800:box-border mq1350:pl-[21px] mq1350:pr-[21px] mq1350:box-border">
            <PRICEPERMONTH
              propAlignSelf="unset"
              propPadding="unset"
              prop="$100"
              propDisplay="inline-block"
              propMinWidth="58px"
              propColor="#050509"
              propMargin="unset"
              propFontWeight="unset"
              month="/Month"
              text="Regular Price"
              text1
              propHeight="unset"
              textWidth="unset"
              textAlignSelf="stretch"
            />
            <PRICEPERMONTH
              propAlignSelf="unset"
              propPadding="0px 10px 0px 0px"
              prop="$50"
              propDisplay="inline-block"
              propMinWidth="47px"
              propColor="#050509"
              propMargin="unset"
              propFontWeight="unset"
              month="/Month"
              text="Discount Price"
              text1
              propHeight="unset"
              textWidth="unset"
              textAlignSelf="stretch"
            />
            <div className="w-[265px] flex flex-col items-start justify-start py-0 pl-0 pr-px box-border gap-2.5">
              <div className="self-stretch flex flex-row items-center justify-center">
                <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.02em] leading-[120%] font-bold font-inherit mq800:text-7xl mq800:leading-[31px] mq450:text-lgi mq450:leading-[23px]">
                  Phone Packages
                </h1>
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
              <div className="self-stretch flex flex-col items-start justify-start gap-3.5">
                <div className="relative tracking-[0.15em] leading-[120%] uppercase font-medium inline-block min-w-[71px]">
                  Includes
                </div>
                <div className="self-stretch relative text-base tracking-[-0.03em] leading-[160%] font-medium text-text">
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li>
                      Ideal for a small business or individual who need a
                      starter website. This provides a sleek, modern design that
                      effectively showcases your services and engages your
                      audience.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-3.5">
                <div className="relative tracking-[0.15em] leading-[120%] uppercase font-medium inline-block min-w-[107px]">
                  Key Features:
                </div>
                <div className="self-stretch relative text-base tracking-[-0.03em] leading-[160%] font-medium text-text">
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li>
                      Ideal for a small business or individual who need a
                      starter website. This provides a sleek, modern design that
                      effectively showcases your services and engages your
                      audience.
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
        </div>
        <div className="w-[371px] flex flex-col items-start justify-start max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[120%] font-bold font-inherit mq800:text-7xl mq800:leading-[31px] mq450:text-lgi mq450:leading-[23px]">
            Advertising Products
          </h1>
        </div>
        <div className="flex flex-row items-center justify-start gap-14 max-w-full gap-7 mq1350:flex-wrap">
          <div className="w-[364px] rounded-3xs bg-main-background overflow-hidden shrink-0 flex flex-row flex-wrap items-start justify-start pt-4 px-[42px] pb-[88px] box-border gap-x-[23px] gap-y-7 min-h-[707px] max-w-full mq450:pt-5 mq450:pb-[57px] mq450:box-border mq1350:pl-[21px] mq1350:pr-[21px] mq1350:box-border">
            <PRICEPERMONTH
              propAlignSelf="unset"
              propPadding="unset"
              prop="$100"
              propDisplay="inline-block"
              propMinWidth="58px"
              propColor="#050509"
              propMargin="unset"
              propFontWeight="unset"
              month="/Month"
              text="Regular Price"
              text1
              propHeight="unset"
              textWidth="unset"
              textAlignSelf="stretch"
            />
            <PRICEPERMONTH
              propAlignSelf="unset"
              propPadding="0px 10px 0px 0px"
              prop="$50"
              propDisplay="inline-block"
              propMinWidth="47px"
              propColor="#050509"
              propMargin="unset"
              propFontWeight="unset"
              month="/Month"
              text="Discount Price"
              text1
              propHeight="unset"
              textWidth="unset"
              textAlignSelf="stretch"
            />
            <div className="w-[265px] flex flex-col items-start justify-start py-0 pl-0 pr-px box-border gap-2.5">
              <div className="self-stretch flex flex-row items-center justify-center">
                <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.02em] leading-[120%] font-bold font-inherit mq800:text-7xl mq800:leading-[31px] mq450:text-lgi mq450:leading-[23px]">
                  Email Campaign
                </h1>
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
              <div className="self-stretch flex flex-col items-start justify-start gap-3.5">
                <div className="relative tracking-[0.15em] leading-[120%] uppercase font-medium inline-block min-w-[71px]">
                  Includes
                </div>
                <div className="self-stretch relative text-lg tracking-[-0.03em] leading-[160%] text-text">
                  <ul className="m-0 font-inherit text-inherit pl-6">
                    <li className="mb-0">
                      Email campaign sent to 80-100 contacts
                    </li>
                    <li className="mb-0"> 1 follow-up email after 3 months</li>
                    <li>Full Campaign review at the end</li>
                  </ul>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-3.5">
                <div className="relative tracking-[0.15em] leading-[120%] uppercase font-medium inline-block min-w-[107px]">
                  Key Features:
                </div>
                <div className="self-stretch relative text-base tracking-[-0.03em] leading-[160%] font-medium text-text">
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li className="mb-0">Personalized content and targeting</li>
                    <li className="mb-0"> Automated email sequences</li>
                    <li> Detailed analytics and reporting</li>
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
          <div className="w-[364px] rounded-3xs bg-variant-background overflow-hidden shrink-0 flex flex-row flex-wrap items-start justify-start pt-4 px-[42px] pb-[85px] box-border gap-x-[23px] gap-y-7 min-h-[707px] max-w-full text-white mq450:pt-5 mq450:pb-[55px] mq450:box-border mq1350:pl-[21px] mq1350:pr-[21px] mq1350:box-border">
            <PRICEPERMONTH
              propAlignSelf="unset"
              propPadding="unset"
              prop="$100"
              propDisplay="inline-block"
              propMinWidth="58px"
              propColor="#f3f5fc"
              propMargin="unset"
              propFontWeight="unset"
              month="/Month"
              text="Regular Price"
              text1
              propHeight="unset"
              textWidth="unset"
              textAlignSelf="stretch"
            />
            <PRICEPERMONTH
              propAlignSelf="unset"
              propPadding="0px 10px 0px 0px"
              prop="$50"
              propDisplay="inline-block"
              propMinWidth="47px"
              propColor="#f3f5fc"
              propMargin="unset"
              propFontWeight="unset"
              month="/Month"
              text="Discount Price"
              text1
              propHeight="unset"
              textWidth="unset"
              textAlignSelf="stretch"
            />
            <div className="w-[265px] flex flex-col items-start justify-start py-0 pl-0 pr-px box-border gap-2.5">
              <div className="self-stretch flex flex-row items-center justify-center">
                <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.02em] leading-[120%] font-bold font-inherit mq800:text-7xl mq800:leading-[31px] mq450:text-lgi mq450:leading-[23px]">
                  Google Ads Campaign
                </h1>
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
            <div className="w-[264px] flex flex-col items-start justify-start gap-6 text-xs text-main-background">
              <div className="self-stretch flex flex-col items-start justify-start gap-3.5">
                <div className="relative tracking-[0.15em] leading-[120%] uppercase font-medium inline-block min-w-[71px]">
                  Includes
                </div>
                <div className="self-stretch relative text-lg tracking-[-0.03em] leading-[160%] text-gray-1">
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
                <div className="self-stretch relative text-base tracking-[-0.03em] leading-[160%] font-medium text-gray-1">
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li className="mb-0">
                      Targeted ad campaigns with specific keywords
                    </li>
                    <li className="mb-0">
                      {" "}
                      Detailed performance tracking and reporting
                    </li>
                    <li> Budget management and optimization</li>
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
          <div className="w-[364px] rounded-3xs bg-main-background overflow-hidden shrink-0 flex flex-row flex-wrap items-start justify-start py-4 px-[42px] box-border gap-x-[23px] gap-y-7 min-h-[707px] max-w-full mq1350:pl-[21px] mq1350:pr-[21px] mq1350:box-border">
            <PRICEPERMONTH
              propAlignSelf="unset"
              propPadding="unset"
              prop="$100"
              propDisplay="inline-block"
              propMinWidth="58px"
              propColor="#050509"
              propMargin="unset"
              propFontWeight="unset"
              month="/Month"
              text="Regular Price"
              text1
              propHeight="unset"
              textWidth="unset"
              textAlignSelf="stretch"
            />
            <PRICEPERMONTH
              propAlignSelf="unset"
              propPadding="0px 10px 0px 0px"
              prop="$50"
              propDisplay="inline-block"
              propMinWidth="47px"
              propColor="#050509"
              propMargin="unset"
              propFontWeight="unset"
              month="/Month"
              text="Discount Price"
              text1
              propHeight="unset"
              textWidth="unset"
              textAlignSelf="stretch"
            />
            <div className="w-[265px] flex flex-col items-start justify-start py-0 pl-0 pr-px box-border gap-2.5">
              <div className="self-stretch flex flex-row items-center justify-center">
                <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.02em] leading-[120%] font-bold font-inherit mq800:text-7xl mq800:leading-[31px] mq450:text-lgi mq450:leading-[23px]">
                  <p className="m-0">Facebook Ads</p>
                  <p className="m-0">Campaign</p>
                </h1>
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
              <Features
                propFlex="unset"
                heading="Includes"
                propMinWidth="71px"
                propFontWeight="unset"
                propDisplay="unset"
                propMinHeight="unset"
                dedicatedAccountManager="	1 ad campaign with basic assets"
                regularPerformanceConsula="Set-up Facebook Business Page (if applicable)"
                featuresHeight="unset"
                featuresPadding="0px 0px 40px"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-3.5">
                <div className="relative tracking-[0.15em] leading-[120%] uppercase font-medium inline-block min-w-[107px]">
                  Key Features:
                </div>
                <div className="self-stretch relative text-base tracking-[-0.53px] leading-[160%] font-medium text-text inline-block min-h-[156px]">
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li className="mb-0">
                      Custom audience targeting and segmentation
                    </li>
                    <li className="mb-0"> Engaging ad creatives and formats</li>
                    <li> Comprehensive performance analysis and reporting</li>
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
        </div>
        <CardTrio />
      </section>
      <PhotoGridAndInfoSection
        propMinHeight="429px"
        propWidth="279.4px"
        propMinWidth="279.4px"
        propMinWidth1="unset"
        beachHappyAndPortraitOfAB="/beachhappyandportraitofabigfamilyonavac20231127050445utc-12@2x.png"
        frameDiv={false}
        propMinWidth2="unset"
        herAttitudeShinesThroughT="/herattitudeshinesthroughtherain20240228150752utc-1@2x.png"
        image3="/image-3@2x.png"
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

export default Products;
