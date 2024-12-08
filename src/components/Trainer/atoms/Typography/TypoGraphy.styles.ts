import styled from "styled-components";

interface TypographyStylesProps {
  variant:
    | "title1"
    | "title2"
    | "title3"
    | "heading1"
    | "heading2"
    | "heading3"
    | "body1"
    | "body2"
    | "body3"
    | "label1"
    | "label2"
    | "label3"
    | "caption1"
    | "caption2"
    | "caption3";
  color?: "primary" | "black" | string;
  fw?: 400 | 500 | 600 | 700;
  ta?: "left" | "center" | "right";
  ls?: number;
  th?: boolean;
  disabled?: boolean;
  wb?: "keep-all" | "normal" | "break-all";
}

const typographyStyles = {
  title1: `
    font-size: var(--font-xl);
  `,
  title2: `
    font-size: var(--font-l);
  `,
  title3: `
    font-size: var(--font-s);
  `,
  heading1: `
    font-size: 22px;
    line-height: 135%;
    letter-spacing: -0.44px;
  `,
  heading2: `
    font-size: 20px;
    line-height: 135%;
    letter-spacing: -0.4px;
    font-weight: 600;
  `,
  heading3: `
    font-size: 18px;
    line-height: 135%;
    letter-spacing: -0.36px;
  `,
  body1: `
    font-size: 16px;
    line-height: 140%;
  `,
  body2: `
    font-size: 15px;
    line-height: 140%;
  `,
  body3: `
    font-size: 14px;
    line-height: 140%;
  `,
  label1: `
    font-size: 14px;
    line-height: 140%;
  `,
  label2: `
    font-size: 13px;
    line-height: 140%;
    letter-spacing: 0.13px;
  `,
  label3: `
    font-size: 11px;
    line-height: 130%;
    letter-spacing: 0.33px;
  `,
  caption1: `
    font-size: 13px;
    line-height: 140%;
    letter-spacing: 0.13px;
  `,
  caption2: `
    font-size: 12px;
    line-height: 140%;
    letter-spacing: 0.24px;
  `,
  caption3: `
    font-size: 10px;
    line-height: 130%;
    letter-spacing: 0.3px;
  `,
} as const;

export const Typography = styled.span<TypographyStylesProps>`
  font-family: var(--font);
  font-style: normal;
  font-weight: ${({ fw = 400 }) => fw};

  color: ${({ theme, color, disabled }) =>
    disabled
      ? "var(--gray-80, #C7CBD1)"
      : color === "primary"
      ? theme.colors.primary
      : color || "var(--black)"};

  word-break: ${({ wb = "keep-all" }) => wb};

  ${({ th }) =>
    th &&
    `
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}

  ${({ ta }) => ta && `text-align: ${ta};`}
  ${({ ls }) => ls && `letter-spacing: ${ls}px;`}
  ${({ variant = "body1" }) => typographyStyles[variant]}
`;
