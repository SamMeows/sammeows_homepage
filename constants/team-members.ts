import { Link, PERSONAL_INFO_LINKS } from "@/constants/personal-info";

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  links: readonly Link[];
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Sojeong Choi",
    role: "Co-Founder & CEO",
    image: "/info-cards/sojeong.png",
    links: PERSONAL_INFO_LINKS.Sojeong.links,
  },
  {
    name: "Changjun Mun",
    role: "Co-Founder & CTO",
    image: "/info-cards/changjun.png",
    links: PERSONAL_INFO_LINKS.Changjoon.links,
  },
  {
    name: "Jaehoon Kim",
    role: "BE Engineer",
    image: "/info-cards/jaehoon.png",
    links: PERSONAL_INFO_LINKS.Jaehoon.links,
  },
];
