export interface ContactObj {
  contact: ContactInfo;
  socials: SocialUrl[];
  contactNumbers: ContactNumber[];
}
export type ContactInfo = {
  id?: number;
  pageName: string;
  firstName: string;
  middleName?: string;
  lastName?: string;
  jobTitle?: string;
  description?: string;
  email?: string;
};
export type SocialUrl = {
  platform: string;
  url: string;
};
export type ContactNumber = {
  type: string;
  number: string;
};

export type SocialMedia = {
  name: string;
  path: string;
};
export const SOCIAL_MEDIAS: SocialMedia[] = [
  {
    name: "Custom",
    path: "./assets/ico/social/custom.png",
  },
  {
    name: "Facebook",
    path: "./assets/ico/social/facebook.png",
  },
  {
    name: "Instagram",
    path: "./assets/ico/social/instagram.png",
  },
  {
    name: "LinkedIn",
    path: "./assets/ico/social/linkedin.png",
  },
  {
    name: "Twitter",
    path: "./assets/img/ico/social/twitter.png",
  },
];
