export const imageUrls = [
  "company_onboarding_first",
  "company_onboarding_second",
  "company_onboarding_third",
  "company_onboarding_fourth",
];
const info = [
  {
    title: "Tell us about your Organisation",
    paragraph: "We'd love to learn more about your organization. ",
    link: undefined,
  },
  {
    title: "What are your goals and interest?",
    paragraph:
      "Tell us  about your interest so so we can personalize your experience on",
    link: { title: "Zeedeo", href: "https://www.zeedeo.com/home" },
  },
  {
    title: "Upload your Organisation logo",
    paragraph: "Time to add your logo. Just click below and upload it.",
    link: undefined,
  },
  {
    title: "You are all set and ready ! ",
    paragraph: "Your journey starts NOW on Zeedeo !  Happy Start!",
    link: undefined,
  },
];

export const getTitleAndText = (step: number = 0) => {
  if (Number(step) > 0 && Number(step) < imageUrls.length) {
    return info[Number(step)];
  }
  return info[0];
};

export const getImageUrl = (step: number = 0) => {
  if (Number(step) > 0 && Number(step) < imageUrls.length) {
    return imageUrls[Number(step)];
  }
  return imageUrls[0];
};

export const getStep = (step: number = 0) => {
  if (Number(step) > 0 && Number(step) < imageUrls.length) {
    return Number(step);
  }
  return 0;
};
