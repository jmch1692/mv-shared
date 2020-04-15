import { IPreferredStartWindow } from "..";

const PreferredStartWindowObject: IPreferredStartWindow = {
  name: "",
  startWindow: ""
};
export enum PreferredStartWindowEnum {
  NONE = "None",
  RIGHT_AWAY = "Right away",
  IN_THE_NEXT_1_3_MONTHS = "In the next 1-3 months",
  IN_THE_NEXT_3_6_MONTHS = "In the next 3-6 months",
  MORE_THAN_6_MONTHS_FROM_NOW = "More than 6 months from now"
}

export function getPreferredStartWindow(
  preferredStartWindow: PreferredStartWindowEnum
): IPreferredStartWindow {
  switch (preferredStartWindow) {
    case PreferredStartWindowEnum.NONE:
      return {
        ...PreferredStartWindowObject,
        name: "None",
        startWindow: "+7 days from today"
      };
    case PreferredStartWindowEnum.RIGHT_AWAY:
      return {
        ...PreferredStartWindowObject,
        name: "Right away",
        startWindow: "+7 days from today"
      };
    case PreferredStartWindowEnum.IN_THE_NEXT_1_3_MONTHS:
      return {
        ...PreferredStartWindowObject,
        name: "In the next 1-3 months",
        startWindow: "+30 days from today"
      };
    case PreferredStartWindowEnum.IN_THE_NEXT_3_6_MONTHS:
      return {
        ...PreferredStartWindowObject,
        name: "In the next 3-6 months",
        startWindow: "+90 days from today"
      };
    case PreferredStartWindowEnum.MORE_THAN_6_MONTHS_FROM_NOW:
      return {
        ...PreferredStartWindowObject,
        name: "More than 6 months from now",
        startWindow: "+180 days from today"
      };
    default:
      throw new Error("Invalid preferred start window enumeration");
  }
}
