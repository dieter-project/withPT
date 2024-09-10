export interface WeightRecord {
  weight: number,
  uploadDate: string
}

export interface BodyInfoRecord {
  bmi: number,
  bodyFatPercentage: number,
  skeletalMuscle: number,
  uploadDate: string
}

export type WorkoutType = {
  id: number,
  title: string,
  weight: number,
  exerciseSet: number,
  times: number,
  exerciseTime: number,
  bodyParts: string,
  exerciseType: string
}

export interface DietRecord {
  uploadDate: string,
  dietCategory: string,
  dietTime: string,
  dietFoods: DietFood[]
}

interface DietFoodItems {
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
