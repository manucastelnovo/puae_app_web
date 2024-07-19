import { CreateFood, DeleteFood, Food } from "../../domain/model";

export interface FoodsRepositories{
    getAllFood(userId: number):Promise<Food[]>
    createFood(data: CreateFood): Promise<Food>;
    deleteFood(data: DeleteFood): Promise<Food>;
}
