import { WebsiteType, AppType } from "../data/types";

type Param = string | number | undefined;

const Validator = {
  websiteType: (path: Param) => {
    const validValues = Object.values(WebsiteType).map((value) => value.toLowerCase());

    if (validValues.includes(path as string)) {
      return true;
    }

    return false;
  },
  appType: (path: Param) => {
    const validValues = Object.values(AppType).map((value) => value.toLowerCase());

    if (validValues.includes(path as string)) {
      return true;
    }

    return false;
  },
};

export default Validator;
