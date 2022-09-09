import { Frameworks } from "./../data/frameworks";
import type { Framework, WebsiteType, AppType } from "./../data/types";

// need to better type this with the enums!!

type FrameworkOptions = {
  websiteType: string | number | undefined;
  appType: string | number | undefined;
};

const FrameworkSelector = (options: FrameworkOptions): Framework[] => {
  if (options.appType !== undefined && options.websiteType !== undefined) {
    // first we filter by websiteType
    const currentOptions = Frameworks[options.websiteType];

    // then we filter those options by appType
    const filteredOptions = currentOptions.filter((option) => option.appTypes.includes(options.appType as AppType));

    return filteredOptions;
  }

  if (options.websiteType !== undefined) {
    return Frameworks[options.websiteType];
  }

  return [];
};

export default FrameworkSelector;
