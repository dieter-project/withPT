import { icons } from "@/components/common/svgIcon/constants";

export type IconName = keyof typeof icons;

export interface IconProps {
  name: IconName;
  size?: number | string;
  color?: string;
  className?: string;
  pd?: string;
}

export interface FooterIconProps {
  href: string;
  icon: IconName;
  activeIcon: IconName;
  text: string;
}
