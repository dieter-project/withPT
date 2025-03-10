import Wrapper from "@/components/trainer/molecules/Wrapper/Wrapper";
import { Icon } from "@/components/trainer/atoms/SvgIcon/SvgIcon";
import { Typography } from "@/components/trainer/atoms/Typography/TypoGraphy.styles";

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
