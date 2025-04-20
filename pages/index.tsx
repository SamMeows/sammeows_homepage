import Image from "next/image";
import RittyMiniIcon from "@/public/ritty-mini-logo.svg";
import BottomHeroGradTextPC from "@/public/bottom-hero-text-grad_PC.svg";
import BottomHeroGradText from "@/public/bottom-hero-text-grad.svg";
import InstagramIcon from "@/public/contact-icons/instagram.svg";
import DiscordIcon from "@/public/contact-icons/discord.svg";
import LinkedInIcon from "@/public/contact-icons/linkedin.svg";
import KakaoTalkIcon from "@/public/contact-icons/kakaotalk.svg";
import MailIcon from "@/public/contact-icons/mail.svg";
import MailMiniIcon from "@/public/link-icons/mail-icon.svg";
import LinkedInMiniIcon from "@/public/link-icons/linkedin-icon.svg";
import DisquietMiniIcon from "@/public/link-icons/disquiet-icon.svg";
import { useState, useEffect } from "react";

// sm: 핸드폰, md: 태블릿, xl: 데스크탑
// sm: 핸드폰, md: 태블릿, xl: 데스크탑
type Section = "" | "about us" | "service" | "team" | "contact";

type Link = {
  type: string;
  label: string;
  url: string;
};

// type PersonalInfo = {
//   name: string;
//   links: Link[];
// };

const PERSONAL_INFO_LINKS = {
  Sojeong: {
    links: [
      {
        type: "LinkedIn",
        label: "sojeong",
        url: "https://www.linkedin.com/in/%EC%86%8C%EC%A0%95%EC%B5%9C-525792231/",
      },
      {
        type: "Disquiet",
        label: "sojeong",
        url: "https://disquiet.io/@daisyhyeseul",
      },
      {
        type: "Mail",
        label: "ceo@sam-meows.com",
        url: "mailto:ceo@sam-meows.com",
      },
    ] as Link[],
  },
  Changjoon: {
    links: [
      {
        type: "LinkedIn",
        label: "ChangJun (문창준) Mun",
        url: "https://www.linkedin.com/in/changjun-mun/",
      },
      {
        type: "Disquiet",
        label: "codeztree",
        url: "https://disquiet.io/@codeztree",
      },
      {
        type: "Mail",
        label: "cto@sam-meows.com",
        url: "mailto:cto@sam-meows.com",
      },
    ] as Link[],
  },
  Jaehoon: {
    links: [
      {
        type: "LinkedIn",
        label: "김재훈",
        url: "https://www.linkedin.com/in/hoon0214/",
      },
      {
        type: "Mail",
        label: "JHoon@sam-meows.com",
        url: "mailto:JHoon@sam-meows.com",
      },
    ] as Link[],
  },
  Kiyeon: {
    links: [
      {
        type: "LinkedIn",
        label: "Kiyeon Kim",
        url: "https://www.linkedin.com/in/kiyeon-kim/",
      },
      {
        type: "Disquiet",
        label: "kiyeon831",
        url: "https://disquiet.io/@kyean831",
      },
      {
        type: "Mail",
        label: "arky02@sam-meows.com",
        url: "mailto:arky02@sam-meows.com",
      },
    ] as Link[],
  },
  Jina: {
    links: [
      {
        type: "LinkedIn",
        label: "송지나",
        url: "https://www.linkedin.com/in/%EC%A7%80%EB%82%98-%EC%86%A1-9a7222336/",
      },
      {
        type: "Mail",
        label: "najina@sam-meows.com",
        url: "mailto:najina@sam-meows.com",
      },
    ] as Link[],
  },
  Sammeows: {
    links: [] as Link[],
  },
} as const;

const LineBreakMobileOnly = () => <br className="block sm:hidden" />;
const LineBreakDesktopOnly = () => <br className="hidden sm:block" />;

const LinkContainer = ({ linkInfo }: { linkInfo: Link }) => {
  return (
    <button
      className="flex items-center gap-[4px] lg:gap-[2px] max-md:gap-[4px] bg-[#3F404D] rounded-[6px] lg:text-[12px] text-[10px] max-md:text-[12px] text-white py-[3px] px-[5px] w-fit h-fit font-normal hover:bg-[#3F404D]/80 transition-all duration-300"
      onClick={() => window.open(linkInfo.url, "_blank")}
    >
      <Image
        src={
          linkInfo.type === "Mail"
            ? MailMiniIcon
            : linkInfo.type === "LinkedIn"
            ? LinkedInMiniIcon
            : DisquietMiniIcon
        }
        alt={linkInfo.label}
        width={12}
        height={12}
      />
      <span>{linkInfo.label}</span>
    </button>
  );
};

export default function Home() {
  const [selectedSection, setSelectedSection] = useState<Section>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section that is most visible
        const mostVisibleSection = entries.reduce((mostVisible, entry) => {
          if (!mostVisible) return entry;
          const currentRatio = entry.intersectionRatio;
          const mostVisibleRatio = mostVisible.intersectionRatio;
          return currentRatio > mostVisibleRatio ? entry : mostVisible;
        }, null as IntersectionObserverEntry | null);

        if (mostVisibleSection && mostVisibleSection.intersectionRatio === 0) {
          setSelectedSection(mostVisibleSection.target.id as Section);
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      }
    );

    // Observe all sections
    const sectionElements = document.querySelectorAll("section[id]");
    sectionElements.forEach((section) => observer.observe(section));

    return () => {
      sectionElements.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleScrollToSection = (section: Section) => {
    setSelectedSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-white">
      {/* Top Navigation Bar */}
      <section className="fixed top-[30px] z-10 flex p-[8px] pl-[20px] font-semibold font-[#9AA2AE] text-[14px] bg-white rounded-full left-1/2 -translate-x-1/2 transition-colors duration-300 shadow-[0_0_20px_#ff616138]">
        <Image
          src={"/sammeows-logo-en.svg"}
          alt="sammeows logo"
          width={107}
          height={16}
          className="-mt-[3px] mr-[15px] hidden md:block"
        />
        <Image
          src={"/sammeows-logo-sm.svg"}
          alt="sammeows logo"
          width={15}
          height={8}
          className="-mt-[3px] mr-[15px] block md:hidden"
        />
        <div className="flex justify-center items-center w-[90px] h-[35px] cursor-pointer whitespace-nowrap">
          <button
            className={
              selectedSection === "about us"
                ? "h-[35px] text-[#FF6161] rounded-full bg-[#FFEFEF] py-[7px] px-[12px] max-sm:px-[8px]"
                : "h-[35px] hover:text-[#FF6161] text-[#9AA2AE]"
            }
            onClick={() => handleScrollToSection("about us")}
          >
            About Us
          </button>
        </div>
        <div className="flex justify-center items-center w-[82px] h-[35px] cursor-pointer">
          <button
            className={
              selectedSection === "service"
                ? "h-[35px] text-[#FF6161] rounded-full bg-[#FFEFEF] py-[7px] px-[12px]"
                : "h-[35px] hover:text-[#FF6161] text-[#9AA2AE]"
            }
            onClick={() => handleScrollToSection("service")}
          >
            Service
          </button>
        </div>
        <div className="flex justify-center items-center w-[82px] h-[35px] cursor-pointer">
          <button
            className={
              selectedSection === "team"
                ? "h-[35px] text-[#FF6161] rounded-full bg-[#FFEFEF] py-[7px] px-[12px]"
                : "h-[35px] hover:text-[#FF6161] text-[#9AA2AE]"
            }
            onClick={() => handleScrollToSection("team")}
          >
            Team
          </button>
        </div>
        <div className="flex justify-center items-center w-[82px] h-[35px] cursor-pointer">
          <button
            className={
              selectedSection === "contact"
                ? "h-[35px] text-[#FF6161] rounded-full bg-[#FFEFEF] py-[7px] px-[12px]"
                : "h-[35px] hover:text-[#FF6161] text-[#9AA2AE]"
            }
            onClick={() => handleScrollToSection("contact")}
          >
            Contact
          </button>
        </div>
      </section>

      {/* About Us Hero Section */}
      <section
        id="about us"
        className="relative w-full flex flex-col lg:items-center md:items-start h-[720px] max-sm:h-[670px] bg-[url('/hero-bg.png')] bg-cover bg-no-repeat bg-[position:65%_-15px] md:bg-[position:65%_0] xl:bg-center"
      >
        {/* <Image src={HeroImg} alt="heroImg" /> */}
        <div className="max-w-[1120px] w-full h-full mx-auto text-white sm:text-[62px] text-[44px] font-semibold pb-[22px] sm:mt-[150px] mt-[30px] pl-[20px] sm:pl-[40px] xl:pl-[0px] leading-[120%] max-sm:mt-[365px] max-sm:leading-[100%]">
          We Build
          <LineBreakMobileOnly /> Friends
          <LineBreakDesktopOnly /> For <LineBreakMobileOnly />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFBC70] via-[#FF7B7B] to-[#FF52F9]">
            Everyone
          </span>
          <div className="md:text-[20px] text-[16px] font-normal leading-[132%] bg-[#ffffff40] backdrop-blur-md rounded-[10px] pr-[15px] pl-[12px] md:py-[4px] py-[5px] w-fit md:mb-[50px] mb-[25px] md:mt-[20px] mt-[14px]">
            Because everyone deserves
            <LineBreakMobileOnly /> a little warmth.
          </div>
          <button
            onClick={() => handleScrollToSection("service")}
            className="flex justify-center items-center gap-[10px] pt-[1px] bg-[#FF6161] md:w-[168px] w-[130px] md:h-[48px] h-[38px] rounded-full text-white font-semibold md:text-[20px] text-[16px] border-[#FF9292] border-[2px] cursor-pointer hover:shadow-[0_0_20px_#FF616180] transition-all duration-300"
          >
            Learn More &gt;
          </button>
        </div>
      </section>
      <section className="flex md:flex-row flex-col md:py-[150px] py-[100px] bg-white items-center justify-center">
        <div className="relative">
          <Image
            src={"/mission-box.png"}
            alt="missionBoxImg"
            width={465}
            height={278}
          />
        </div>
        <div className="relative">
          <Image
            src={"/vision-box.png"}
            alt="visionBoxImg"
            width={465}
            height={278}
          />
        </div>
      </section>
      {/* Service Section */}
      <section
        id="service"
        className="relative w-full h-fit bg-[#F6F7F9] py-[155px] max-sm:py-[145px] flex flex-col items-center gap-[60px] md:gap-[40px] px-[20px] md:px-0"
      >
        <div className="flex flex-col text-center">
          <span className="text-[#9AA2AE] font-medium text-[15px] md:text-[18px]">
            Our Service
          </span>
          <h2 className="font-semibold text-[32px] md:text-[36px] text-[#3F404D] leading-[125%] mt-[30px] md:mt-[25px] mb-[15px] md:mb-[12px]">
            Your Friendly
            <LineBreakMobileOnly /> AI Companion,
            <LineBreakMobileOnly />
            <span className="text-[#716BF8]">Ritty</span>
          </h2>
          <span className="text-[#3F404D] text-[15px] md:text-[18px]">
            Built to chat, care, and grow
            <LineBreakMobileOnly /> with you every day.
          </span>
        </div>
        <Image
          src={"/service-banner.png"}
          alt="service banner"
          width={388}
          height={450}
          className="block md:hidden"
        />
        <Image
          src={"/service-banner_PC.png"}
          alt="service banner"
          width={1120}
          height={500}
          className="hidden md:block"
        />
        <button
          onClick={() => window.open("https://ritty.me", "_blank")}
          className="flex justify-center items-center gap-[10px] bg-[#6B65FF] md:w-[270px] w-[196px] md:h-[58px] h-[46px] rounded-full text-white font-semibold border-[#ffffff9d] border-[2px] cursor-pointer hover:shadow-[0_0_20px_#6B65FF80] transition-all duration-300 text-[14px] md:text-[20px]"
        >
          <Image
            src={RittyMiniIcon}
            alt="ritty mini icon"
            width={16}
            height={14}
          />
          Go and Meet Ritty &gt;
        </button>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="w-full flex flex-col items-center justify-center bg-white pt-[150px] pb-[120px] text-[#9AA2AE] text-[18px]"
      >
        Our Team
        <div className="w-fit h-fit grid md:grid-cols-3 md:grid-rows-2 grid-cols-1 mt-[42px]">
          <div className="w-fit h-full relative">
            <div className="absolute flex flex-col gap-[4px] w-full bottom-[30px] lg:px-[28px] px-[22px] max-md:px-[28px]">
              <span className="text-[#3F404D] lg:text-[20px] text-[18px] max-md:text-[20px] font-medium ">
                Sojeong Choi
              </span>
              <span className="text-[#FF6161] lg:text-[14px] text-[13px] max-md:text-[14px] font-medium -mt-1">
                Co-Founder & CEO
              </span>
              <div className="h-[42px] lg:h-[52px] max-md:h-[52px] flex flex-wrap items-start gap-[4px] w-full lg:mt-[15px] mt-[12px] max-md:mt-[15px]">
                {PERSONAL_INFO_LINKS.Sojeong.links.map((link) => (
                  <LinkContainer key={link.type} linkInfo={link} />
                ))}
              </div>
            </div>
            <Image
              src={"/info-cards/sojeong.png"}
              alt="sojeong's personal info"
              width={337}
              height={404}
            />
          </div>
          <div className="w-fit h-full relative">
            <div className="absolute flex flex-col gap-[4px] w-full bottom-[30px] lg:px-[28px] px-[22px] max-md:px-[28px]">
              <span className="text-[#3F404D] lg:text-[20px] text-[18px] max-md:text-[20px] font-medium ">
                Changjun Mun
              </span>
              <span className="text-[#FF6161] lg:text-[14px] text-[13px] max-md:text-[14px] font-medium -mt-1">
                Co-Founder & CTO
              </span>
              <div className="h-[42px] lg:h-[52px] max-md:h-[52px] flex flex-wrap items-start gap-[4px] w-full lg:mt-[15px] mt-[12px] max-md:mt-[15px]">
                {PERSONAL_INFO_LINKS.Changjoon.links.map((link) => (
                  <LinkContainer key={link.type} linkInfo={link} />
                ))}
              </div>
            </div>
            <Image
              src={"/info-cards/changjun.png"}
              alt="changjoon's personal info"
              width={337}
              height={404}
            />
          </div>
          <div className="w-fit h-full relative hidden md:block">
            <div className="absolute flex flex-col gap-[4px] w-full bottom-[30px] lg:px-[28px] px-[22px] max-md:px-[28px]">
              <span className="text-[#3F404D] lg:text-[20px] text-[18px] max-md:text-[20px] font-semibold">
                삼냥이즈
              </span>
              <span className="text-[#FF6161] lg:text-[14px] text-[13px] max-md:text-[14px] font-medium -mt-1">
                sam-meows
              </span>
              <div className="h-[42px] lg:h-[52px] max-md:h-[52px] flex flex-wrap items-start gap-[4px] w-full lg:mt-[15px] mt-[12px] max-md:mt-[15px]">
                {PERSONAL_INFO_LINKS.Sammeows.links.map((link) => (
                  <LinkContainer key={link.type} linkInfo={link} />
                ))}
              </div>
            </div>
            <Image
              src={"/info-cards/sammeows.png"}
              alt="sammeows's personal info"
              width={337}
              height={404}
            />
          </div>
          <div className="w-fit h-full relative">
            <div className="absolute flex flex-col gap-[4px] w-full bottom-[30px] lg:px-[28px] px-[22px] max-md:px-[28px]">
              <span className="text-[#3F404D] lg:text-[20px] text-[18px] max-md:text-[20px] font-medium">
                Jaehoon Kim
              </span>
              <span className="text-[#FF6161] lg:text-[14px] text-[13px] max-md:text-[14px] font-medium -mt-1">
                BE Engineer
              </span>
              <div className="h-[42px] lg:h-[52px] max-md:h-[52px] flex flex-wrap items-start gap-[4px] w-full lg:mt-[15px] mt-[12px] max-md:mt-[15px]">
                {PERSONAL_INFO_LINKS.Jaehoon.links.map((link) => (
                  <LinkContainer key={link.type} linkInfo={link} />
                ))}
              </div>
            </div>
            <Image
              src={"/info-cards/jaehoon.png"}
              alt="jaehoon's personal info"
              width={337}
              height={404}
            />
          </div>
          <div className="w-fit h-full relative">
            <div className="absolute flex flex-col gap-[4px] w-full bottom-[30px] lg:px-[28px] px-[22px] max-md:px-[28px]">
              <span className="text-[#3F404D] lg:text-[20px] text-[18px] max-md:text-[20px] font-medium">
                Kiyeon Kim
              </span>
              <span className="text-[#FF6161] lg:text-[14px] text-[13px] max-md:text-[14px] font-medium -mt-1">
                FE Engineer
              </span>
              <div className="h-[42px] lg:h-[52px] max-md:h-[52px] flex flex-wrap items-start gap-[4px] w-full lg:mt-[15px] mt-[12px] max-md:mt-[15px]">
                {PERSONAL_INFO_LINKS.Kiyeon.links.map((link) => (
                  <LinkContainer key={link.type} linkInfo={link} />
                ))}
              </div>
            </div>
            <Image
              src={"/info-cards/kiyeon.png"}
              alt="kiyeon's personal info"
              width={337}
              height={404}
            />
          </div>
          <div className="w-fit h-full relative">
            <div className="absolute flex flex-col gap-[4px] w-full bottom-[30px] lg:px-[28px] px-[22px] max-md:px-[28px]">
              <span className="text-[#3F404D] lg:text-[20px] text-[18px] max-md:text-[20px] font-medium">
                Jina Song
              </span>
              <span className="text-[#FF6161] lg:text-[14px] text-[13px] max-md:text-[14px] font-medium -mt-1">
                UX/UI Designer
              </span>
              <div className="h-[42px] lg:h-[52px] max-md:h-[52px] flex flex-wrap items-start gap-[4px] w-full lg:mt-[15px] mt-[12px] max-md:mt-[15px]">
                {PERSONAL_INFO_LINKS.Jina.links.map((link) => (
                  <LinkContainer key={link.type} linkInfo={link} />
                ))}
              </div>
            </div>
            <Image
              src={"/info-cards/jina.png"}
              alt="jina's personal info"
              width={337}
              height={404}
            />
          </div>
          <div className="w-fit h-full relative block md:hidden">
            <div className="absolute flex flex-col gap-[4px] w-full bottom-[30px] lg:px-[28px] px-[22px] max-md:px-[28px]">
              <span className="text-[#3F404D] lg:text-[20px] text-[18px] max-md:text-[20px] font-semibold">
                삼냥이즈
              </span>
              <span className="text-[#FF6161] lg:text-[14px] text-[13px] max-md:text-[14px] font-medium -mt-1">
                sam-meows
              </span>
              <div className="h-[42px] lg:h-[52px] max-md:h-[52px] flex flex-wrap items-start gap-[4px] w-full lg:mt-[15px] mt-[12px] max-md:mt-[15px]">
                {PERSONAL_INFO_LINKS.Sammeows.links.map((link) => (
                  <LinkContainer key={link.type} linkInfo={link} />
                ))}
              </div>
            </div>
            <Image
              src={"/info-cards/sammeows.png"}
              alt="sammeows's personal info"
              width={337}
              height={404}
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center bg-[url('/bottom-hero-grad-bg.svg')] bg-cover bg-center">
        <Image
          src={BottomHeroGradTextPC}
          alt="team introduction"
          className="hidden md:block pb-[150px]"
        />
        <Image
          src={BottomHeroGradText}
          alt="team introduction"
          width={285}
          height={200}
          className="block md:hidden md:pb-[150px] pb-[0px]"
        />

        {/* Contact Section */}
        <section
          id="contact"
          className="flex md:flex-row flex-col-reverse md:items-end items-center py-[150px] max-w-[1120px] w-full mx-auto justify-between px-[20px] lg:px-0 gap-[120px] md:gap-[0px]"
        >
          {/* 왼쪽 텍스트 */}
          <div className="text-center md:text-left">
            <h1 className="text-[#FF6161] md:text-[45px] text-[30px] font-semibold pb-[22px] leading-[120%]">
              Curious to know
              <br />
              more about us?
            </h1>
            <p className="flex flex-col gap-[6px] text-[16px] text-[#3f404d] font-normal leading-[130%] pb-[35px]">
              <span className="">
                If you have any questions,
                <LineBreakMobileOnly />
                feel free to contact <LineBreakDesktopOnly />
                us anytime to <LineBreakMobileOnly />
                the follow mail address!
              </span>
              <span
                className="flex gap-[8px] cursor-pointer hover:underline transition-all duration-300"
                onClick={() =>
                  window.open("mailto:contact@sam-meows.com", "_blank")
                }
              >
                <Image src={MailIcon} alt="mail icon" />
                contact@sam-meows.com
              </span>
            </p>
            <div className="flex flex-col gap-[15px] md:items-start items-center">
              <h5 className="text-[#3F404D] font-semibold text-[16px]">
                Community
              </h5>
              <div className="flex gap-[8px]">
                <Image
                  src={InstagramIcon}
                  alt="instagram icon"
                  className="cursor-pointer hover:opacity-80 transition-all duration-300"
                />
                <Image
                  src={DiscordIcon}
                  alt="discord icon"
                  className="cursor-pointer hover:opacity-80 transition-all duration-300"
                />
                <Image
                  src={LinkedInIcon}
                  alt="linkedin icon"
                  className="cursor-pointer hover:opacity-80 transition-all duration-300"
                />
                <Image
                  src={KakaoTalkIcon}
                  alt="kakao talk icon"
                  className="cursor-pointer hover:opacity-80 transition-all duration-300"
                />
              </div>
            </div>
          </div>
          {/* 오른쪽 폼 */}
          <div className="md:w-[500px] w-full mx-[20px] md:mx-0 flex flex-col gap-[28px] text-[#2E3238] text-[16px] font-medium bg-white rounded-[28px] py-[32px] px-[24px] shadow-[0px_0px_10px_0px_rgba(116,92,101,0.2)]">
            <div className="flex flex-col gap-[8px]">
              <label>Name</label>
              <input
                type="text"
                placeholder="Please enter your name"
                className="bg-[#F6F7F9] rounded-[12px] py-[13px] px-[18px] placeholder:text-[#9AA2AE] placeholder:text-[16px] font-normal"
              />
            </div>
            <div className="flex flex-col gap-[8px]">
              <label>Email</label>
              <input
                type="email"
                placeholder="Please enter your email"
                className="bg-[#F6F7F9] rounded-[12px] py-[13px] px-[18px] placeholder:text-[#9AA2AE] placeholder:text-[16px] font-normal"
              />
            </div>
            <div className="flex flex-col gap-[8px]">
              <label>Is there anything you want to say?</label>
              <textarea
                placeholder="Please enter your message"
                className="bg-[#F6F7F9] rounded-[12px] py-[13px] px-[18px] placeholder:text-[#9AA2AE] placeholder:text-[16px] font-normal resize-none h-[190px]"
              />
            </div>
            <button className="h-[52px] w-full bg-gradient-to-r from-[#FFA374]  to-[#FF7491] text-white rounded-[12px] py-[18px] font-semibold text-[16px] flex justify-center items-center">
              Submit
            </button>
          </div>
        </section>
      </section>
      <footer className="flex md:flex-row flex-col gap-[100px] md:justify-between items-center py-[150px] h-fit w-full max-w-[1120px] mx-auto">
        {/* 왼쪽 텍스트 */}
        <div className="flex flex-col gap-[15px] text-center md:text-left">
          <h4 className="text-[#2E3238] font-semibold">
            Bringing warmth to <LineBreakMobileOnly />
            the world through AI.
          </h4>
          <p className="flex flex-col gap-[10px] text-[#9AA2AE] text-[14px] font-normal md:leading-[136%] leading-[150%]">
            <span>
              <span className="font-semibold">Contact </span>
              <LineBreakMobileOnly />
              contact@sam-meows.com
            </span>
            <span>
              205-1204, Sucheong 1-ro, <LineBreakMobileOnly />
              Dangjin-si, ChungcheongNam-do <LineBreakMobileOnly />
              <LineBreakDesktopOnly />
              Republic of Korea
            </span>
          </p>
        </div>
        {/* 오른쪽 텍스트 */}
        <div className="flex flex-col gap-[41px]">
          <div className="flex flex-col items-end gap-[5px] text-[#9AA2AE] text-[14px] font-medium leading-[136%]">
            <span
              onClick={() =>
                window.open(
                  "https://www.notion.so/project-meow/1bd423ba89b680cc9c4ffaa284da0d85"
                )
              }
              className="cursor-pointer hover:underline"
            >
              Terms of Service
            </span>
            <span
              onClick={() =>
                window.open(
                  "https://www.notion.so/project-meow/1be423ba89b680218e81d5956212eade"
                )
              }
              className="cursor-pointer hover:underlin"
            >
              Privacy Policy
            </span>
          </div>
          <Image
            src={"/sammeows-logo.svg"}
            alt="sammeows logo"
            width={112}
            height={24}
          />
        </div>
      </footer>
    </main>
  );
}
