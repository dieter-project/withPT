import React from "react";
import { NoIconSelect } from "@/styles/TrainerInput";
import styled from "styled-components";
interface TimeSelectorProps {
  selectedMonth: number;
  handleMonthChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedYear: number;
  handleYearChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectIconWrap = styled.div`
  width: 100%;
  margin-bottom: "1rem";
`;

const TimeSelector: React.FC<TimeSelectorProps> = ({
  selectedMonth,
  handleMonthChange,
  selectedYear,
  handleYearChange,
}) => {
  const months: number[] = [];
  const years: number[] = [];

  for (let month = 1; month <= 12; month++) {
    months.push(month);
  }

  const currentYear = new Date().getFullYear();
  for (let year = currentYear - 50; year <= currentYear; year++) {
    years.push(year);
  }

  return (
    <div>
      <SelectIconWrap>
        <NoIconSelect
          id="year"
          value={selectedYear}
          onChange={handleYearChange}
        >
          {years?.map(year => (
            <option key={year} value={year}>
              {year}년
            </option>
          ))}
        </NoIconSelect>
        <NoIconSelect
          id="month"
          value={selectedMonth}
          onChange={handleMonthChange}
        >
          {months.map(month => (
            <option key={month} value={month}>
              {month}월
            </option>
          ))}
        </NoIconSelect>
      </SelectIconWrap>
      <SelectIconWrap>
        <NoIconSelect
          id="year"
          value={selectedYear}
          onChange={handleYearChange}
        >
          {years?.map(year => (
            <option key={year} value={year}>
              {year}년
            </option>
          ))}
        </NoIconSelect>
        <div style={{ display: "flex" }}>
          <NoIconSelect
            id="month"
            value={selectedMonth}
            onChange={handleMonthChange}
          >
            {months.map(month => (
              <option key={month} value={month}>
                {month}월
              </option>
            ))}
          </NoIconSelect>
          <input type="checkbox"></input>
        </div>
      </SelectIconWrap>
    </div>
  );
};

export default TimeSelector;
