import { styled } from "styled-components";
import { UseFormRegister } from "react-hook-form";
import { Label } from "@/components/trainer/atoms/label/Label.styles";
import Wrapper from "@/components/trainer/molecules/wrapper/Wrapper";
import LabelField from "../../LabelField";

interface GenderFieldProps {
  register: UseFormRegister<any>;
}

export const GenderField = ({ register }: GenderFieldProps) => (
  <LabelField type="columnDefault" label="성별">
    <Wrapper type="spaceBetween" gap="10px">
      <OptionWrapper>
        <input id="gender-male" type="radio" value="MAN" {...register("sex")} />
        <Label
          display="block"
          height="-webkit-fill-available"
          lineHeight="45px"
          margin="0 auto"
          borderRadius="10px"
          textAlign="center"
          htmlFor="gender-male"
        >
          남자
        </Label>
      </OptionWrapper>
      <OptionWrapper>
        <input
          id="gender-female"
          type="radio"
          value="WOMAN"
          {...register("sex")}
        />
        <Label
          display="block"
          height="-webkit-fill-available"
          lineHeight="45px"
          margin="0 auto"
          borderRadius="10px"
          textAlign="center"
          htmlFor="gender-female"
        >
          여자
        </Label>
      </OptionWrapper>
    </Wrapper>
  </LabelField>
);

export const OptionWrapper = styled.div`
  width: 100%;
  height: 48px;
  border: none;
  background-color: var(--purple50);
  border-radius: 0.5rem;

  input[type="radio"] {
    display: none;
  }

  input[type="radio"]:checked + label {
    border: 1px solid var(--primary);
    background: var(--purple75);
    color: var(--primary);
  }
`;
