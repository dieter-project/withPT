import Wrapper from "@/components/trainer/molecules/wrapper/Wrapper";
import { Icon } from "@/components/common/svgIcon/SvgIcon";
import { Typography } from "@/components/trainer/atoms/typography/TypoGraphy.styles";

export const SearchBarButton = () => {
  return (
    <Wrapper type="flexStartCenter">
      <Icon name="search" size={18} />
      <Typography
        variant="heading2"
        color="var(--font-gray400)"
        pd="0 0 0 0.2rem"
      >
        검색
      </Typography>
    </Wrapper>
  );
};
