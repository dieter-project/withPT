import styled from "styled-components";

interface LabelProps {
  display?: string;
  height?: string;
  lineHeight?: string;
  margin?: string;
  borderRadius?: string;
  textAlign?: string;
}

export const Label = styled.label.withConfig({
  shouldForwardProp: prop =>
    ![
      "lineHeight",
      "margin",
      "textAlign",
      "borderRadius",
      "display",
      "height",
    ].includes(prop),
})<LabelProps>`
  display: ${({ display = "block" }) => display};
  height: ${({ height = "auto" }) => height};
  line-height: ${({ lineHeight = "normal" }) => lineHeight};
  margin: ${({ margin = "0" }) => margin};
  border-radius: ${({ borderRadius = "0" }) => borderRadius};
  text-align: ${({ textAlign = "left" }) => textAlign};
`;
