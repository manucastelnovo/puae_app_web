export type FoodId = string;

export interface Food {
    foodName: string;
    profit: number;
    productionCost: number;
    description: string;
    foodType: string;
}

export interface FoodWithId extends Food {
    id: string
}

export interface CreateFood extends Omit<Food, "id"> {}
  
export interface UpdateFood extends Partial<Food> {}
  
export interface DeleteFood {
    id: number;
  }