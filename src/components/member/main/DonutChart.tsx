import dynamic from 'next/dynamic'
import React, { useState } from 'react'
const ReactApexChart = dynamic(() => import('react-apexcharts'), {ssr: false})

const DonutChart = () => {
  const [nutrient, setNutrient] = useState({
    carbohydrate: 60,
    protein: 20,
    fat: 20,
  })

  
  return (
    <ReactApexChart
      type="donut"
      series={[nutrient.carbohydrate, nutrient.protein, nutrient.fat]}
      options={{
        labels: ['탄수화물', '단백질', '지방'],
        colors: ['#AE9AFF', '#7BCEFC', '#342EB8'],
        dataLabels: {
          enabled: false,
          dropShadow: {
            enabled: false,
          }
        },
        legend: {
          show: false,
        }, 
        plotOptions: {
          pie: {
            donut: {
              size: "55%"
            }
          }
        }
      }}
      
    />
  )
}

export default DonutChart