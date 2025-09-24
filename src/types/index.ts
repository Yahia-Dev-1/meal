export interface Macro {
  protein: number;
  carbs: number;
  fat: number;
  calories: number;
}

export interface Meal {
  id: number;
  name: string;
  ingredients: string[];
  macros: Macro;
}