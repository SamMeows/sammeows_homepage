"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/constants/personal-info";
import MailMiniIcon from "@/public/link-icons/mail-icon.svg";
import LinkedInMiniIcon from "@/public/link-icons/linkedin-icon.svg";
import DisquietMiniIcon from "@/public/link-icons/disquiet-icon.svg";

function LinkButton({ linkInfo }: { linkInfo: Link }) {
  return (
    <button
      className="flex items-center gap-[4px] bg-[#3F404D] rounded-[6px] lg:text-[12px] text-[10px] max-md:text-[12px] text-white py-[3px] px-[5px] w-fit h-fit font-normal cursor-pointer hover:bg-[#3F404D]/80 transition-all duration-300"
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
}

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  links: readonly Link[];
  delay?: number;
}

export default function TeamCard({
  name,
  role,
  image,
  links,
  delay = 0,
}: TeamCardProps) {
  return (
    <motion.div
      className="w-fit h-full relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
      whileHover={{ y: -8 }}
    >
      <div className="absolute z-10 flex flex-col gap-[4px] w-full bottom-[30px] lg:px-[28px] px-[22px] max-md:px-[28px]">
        <span className="text-[#3F404D] lg:text-[20px] text-[18px] max-md:text-[20px] font-medium">
          {name}
        </span>
        <span className="text-[#FF6161] lg:text-[14px] text-[13px] max-md:text-[14px] font-medium -mt-1">
          {role}
        </span>
        <div className="h-[42px] lg:h-[52px] max-md:h-[52px] flex flex-wrap items-start gap-[4px] w-full lg:mt-[15px] mt-[12px] max-md:mt-[15px]">
          {links.map((link) => (
            <LinkButton key={link.type} linkInfo={link} />
          ))}
        </div>
      </div>
      <Image
        src={image}
        alt={`${name} - ${role}`}
        width={337}
        height={404}
      />
    </motion.div>
  );
}
