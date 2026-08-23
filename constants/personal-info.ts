export type Link = {
  type: string;
  label: string;
  url: string;
};

export const PERSONAL_INFO_LINKS = {
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
        label: "changjun.mun@sam-meows.com",
        url: "mailto:changjun.mun@sam-meows.com",
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
        label: "jaehoon.kim@sam-meows.com",
        url: "mailto:jaehoon.kim@sam-meows.com",
      },
    ] as Link[],
  },
} as const;
