"use client";

import FadeInView from "@/components/ui/FadeInView";
import TeamCard from "@/components/cards/TeamCard";
import { TEAM_MEMBERS } from "@/constants/team-members";

export default function TeamSection() {
  return (
    <section
      id="team"
      className="w-full min-h-screen py-[80px] md:py-[120px] flex flex-col items-center justify-center bg-[#F6F7F9]"
    >
      <div className="flex flex-col text-center px-[20px] md:px-0">
        <FadeInView>
          <span className="text-[#9AA2AE] font-medium text-[15px] md:text-[18px]">
            Our Team
          </span>
        </FadeInView>

        <FadeInView delay={0.1}>
          <h2 className="font-semibold text-[28px] md:text-[36px] text-[#3F404D] leading-[125%] mt-[15px] mb-[40px] md:mb-[50px]">
            삼냥이즈를 만드는 <span className="text-[#FF6161]">사람들</span>
          </h2>
        </FadeInView>
      </div>

      <div className="w-fit h-fit grid md:grid-cols-3 grid-cols-1 gap-y-[10px] px-[20px] md:px-0">
        {TEAM_MEMBERS.map((member, index) => (
          <TeamCard
            key={member.name}
            name={member.name}
            role={member.role}
            image={member.image}
            links={member.links}
            delay={index * 0.1}
          />
        ))}
      </div>
    </section>
  );
}
