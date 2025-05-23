import { forwardRef } from "react";
import type { IconProps } from "@/types/common/icon";
import { icons } from "./constants";
import { SvgIcon } from "./SvgIcon.styles";

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 24, color, className, pd, ...props }, ref) => {
    const IconComponent = icons[name];

    if (!IconComponent) {
      if (process.env.NODE_ENV === "development") {
        console.error(
          `Icon "${name}" not found. Available icons: ${Object.keys(icons).join(
            ", ",
          )}`,
        );
      }
      return null;
    }

    return (
      <SvgIcon
        $size={size}
        $color={color}
        $pd={pd}
        className={`icon-base ${className || ""}`}
      >
        <IconComponent
          ref={ref}
          role="img"
          aria-label={`${name} icon`}
          {...props}
        />
      </SvgIcon>
    );
  },
);
Icon.displayName = "Icon";
