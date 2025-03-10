import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import styled from "styled-components";

interface MemberChartProps {
  monthOnly: string;
  statsData: any;
}

const ChartWrapper = styled.div`
  background-color: #ffffff;
  padding: 0.94rem 0.8rem;
  margin: 0.75rem 0;
`;

const MonthMemberWrap = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`;

const MonthMemberMonth = styled.span`
  font-size: var(--font-xs);
  font-weight: bold;
  color: gray;
  margin-right: 0.5rem;
  padding-top: 0.3rem;
`;

const MonthMemberNum = styled.span`
  color: var(--black);
  font-size: var(--font-xxl);
  font-weight: bold;
`;

const MemberNumberWrap = styled.div`
  margin-top: 0.3rem;
  font-size: var(--font-s);
  text-align: center;
`;

const MemberNumber = styled.span`
  color: var(--primary);
`;

export const MemberChart = ({ monthOnly, statsData }: MemberChartProps) => {
  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "line",
      zoom: { enabled: false },
      toolbar: { show: false },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "12px",
        colors: ["var(--primary)"],
      },
      background: {
        enabled: true,
        foreColor: "#fff",
        padding: 4,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "var(--primary)",
      },
    },
    markers: {
      size: 6,
      colors: ["#fff"],
      strokeColors: "var(--primary)",
      strokeWidth: 2,
      hover: {
        size: 8,
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    xaxis: {
      categories:
        statsData?.statistics?.slice(0, 5).map(item => item.date) || [],
    },
  };

  const chartData = {
    series: [
      {
        name: "Members",
        data: statsData?.statistics?.slice(0, 5).map(item => item.total) || [],
        color: "var(--primary)",
      },
    ],
  };

  return (
    <ChartWrapper>
      <MonthMemberWrap>
        <MonthMemberMonth>{monthOnly}월 회원수 </MonthMemberMonth>
        <MonthMemberNum>31명</MonthMemberNum>
      </MonthMemberWrap>
      <div>
        <ReactApexChart
          options={options}
          series={chartData.series}
          type="line"
          height="120%"
        />
      </div>
      <MemberNumberWrap>
        기존 회원 <MemberNumber>6</MemberNumber>명 | 재등록회원{" "}
        <MemberNumber>5</MemberNumber>명 | 신규 회원{" "}
        <MemberNumber>6</MemberNumber>명
      </MemberNumberWrap>
    </ChartWrapper>
  );
};
