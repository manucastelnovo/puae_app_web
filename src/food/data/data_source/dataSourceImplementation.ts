import { Food, CreateFood, DeleteFood } from "../../domain/model";
import { FoodsRepositories } from "../../domain/repository";


export class FoodRepository implements FoodsRepositories {
    private static instance: FoodRepository | null = null;
    private apiUrl: string;

    private constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    static getInstance(apiUrl: string): FoodRepository {
        if (FoodRepository.instance === null) {
            FoodRepository.instance = new FoodRepository(apiUrl);
        }
        return FoodRepository.instance;
    }


    async createFood(data: CreateFood): Promise<Food> {
        const options: RequestInit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        return this.fetchData<Food>(`${this.apiUrl}/foods`, options);
    }

    async getAllFood(userId: number): Promise<Food[]> {
        const options: RequestInit = {
            method: 'GET'
        };
        return this.fetchData<Food[]>(`${this.apiUrl}/foods?userId=${userId}`, options);
    }

    async deleteFood(data: DeleteFood): Promise<Food> {
        const options: RequestInit = {
            method: 'DELETE'
        };
        return this.fetchData<Food>(`${this.apiUrl}/foods/${data.id}`, options);
    }
    private async fetchData<T>(url: string, options: RequestInit): Promise<T> {
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Fetch error:', error);
            throw new Error('Error during fetch operation');
        }
    }
}
