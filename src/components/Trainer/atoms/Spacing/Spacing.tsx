import React from "react";
import { Spacer } from "./Spacing.styles";

interface SpacingProps {
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  children?: React.ReactNode;
}

function Spacing({
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  children,
}: SpacingProps) {
  return (
    <Spacer
      mt={marginTop}
      mr={marginRight}
      mb={marginBottom}
      ml={marginLeft}
      pt={paddingTop}
      pr={paddingRight}
      pb={paddingBottom}
      pl={paddingLeft}
    >
      {children}
    </Spacer>
  );
}

export default Spacing;
