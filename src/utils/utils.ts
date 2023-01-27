import { ContactNumber, ContactObj, SocialUrl } from "../models/models";

type EasyContact = {
  id: number;
  pageName: string;
  firstName: string;
  middleName: string;
  lastName: string;
  jobTitle: string;
  description: string;
  email: string;
  urls: SocialUrl[];
  numbers: ContactNumber[];
};

export const convertEasyContactToTSContact = (inputCon: EasyContact): ContactObj => {
  return {
    contact: {
      id: inputCon.id,
      pageName: inputCon.pageName,
      firstName: inputCon.firstName,
      middleName: inputCon.middleName,
      lastName: inputCon.lastName,
      jobTitle: inputCon.jobTitle,
      description: inputCon.description,
      email: inputCon.email,
    },
    socials: inputCon.urls,
    contactNumbers: inputCon.numbers,
  };
};
