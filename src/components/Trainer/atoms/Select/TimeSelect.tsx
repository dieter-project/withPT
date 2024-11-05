import { styled } from "styled-components";
import { generateTimeOptions } from "@/utils/Trainer/timeOptions";

interface TimeSelectProps {
  selectedTime: string;
  startTime: string;
  endTime: string;
  placeholderTime: string;
  onTimeChange: (time: string) => void;
}

export const TimeSelect = ({
  selectedTime,
  startTime,
  endTime,
  placeholderTime,
  onTimeChange,
}: TimeSelectProps) => {
  const timeOptions = generateTimeOptions(startTime, endTime);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onTimeChange(e.target.value);
  };

  return (
    <StyledSelect
      value={selectedTime}
      onChange={handleChange}
      isSelected={!!selectedTime}
    >
      <option value="" disabled>
        {placeholderTime}
      </option>
      {timeOptions?.map((timeOption, index) => (
        <option key={index} value={timeOption}>
          {timeOption}
        </option>
      ))}
    </StyledSelect>
  );
};

const StyledSelect = styled.select<{ isSelected: boolean }>`
  background-color: var(--purple50);
  color: ${props => (props.isSelected ? "black" : "var(--font-gray400)")};
  margin-right: 1.81rem;
  padding: 0.62rem;
`;
