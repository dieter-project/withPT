export interface WeightRecord {
  bmi: number,
  bodyFatPercentage: number,
  skeletalMuscle: number,
  weight: number,
  bodyRecordDate: string
}

export interface MealRecord {
  uploadDate: string,
  mealCategory: string,
  mealTime: string,
  dietFoods: DietFood[]
}

interface MealFoodItems {
  food: {
    id: number,
    name: string,
    totalGram: string,
    calories: string,
    carbohydrate: string,
    protein: string,
    province: string,
    sugars: string
  },
  gram: number
}

export interface DietFood {
  name: string | null,
  capacity: number | null,
  units: string | null,
  calories: number | null,
  carbohydrate: number | null,
  protein: number | null,
  fat: number | null
}
