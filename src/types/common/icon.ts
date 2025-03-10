import { icons } from "@/components/trainer/atoms/SvgIcon/constants";

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
