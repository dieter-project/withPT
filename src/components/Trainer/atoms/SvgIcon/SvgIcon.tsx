import { forwardRef } from "react";
import { icons } from "./constants";
import { SvgIcon } from "./SvgIcon.styles";
import type { IconProps } from "@/types/common/icon";

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 24, color, className, ...props }, ref) => {
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
