export const imageUrls = [
  "user_onboarding_first",
  "user_onboarding_second",
  "user_onboarding_third",
  "user_onboarding_fourth",
  "user_onboarding_fifth",
  "user_onboarding_sixth",
];

const info = [
  {
    title: "Tell us a little about yourself",
    paragraph:
      "We'd love to learn more about you  so we can make your experience even better!",
  },
  {
    title: "Share Your Professional Status",
    paragraph:
      "We’re eager to understand your current professional statues so  we can match you with the right opportunity",
  },
  {
    title: "What jobs are you interested  in ?",
    paragraph: undefined,
  },
  {
    title: "What are your goals and interest?",
    paragraph: undefined,
  },
  {
    title: "Upload your best profile  picture",
    paragraph: undefined,
  },
  {
    title: "",
    paragraph: undefined,
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
