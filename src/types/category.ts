import type { Product } from "./product";

export interface Category {
    id: string;
    name: string;
    products?: Product[]; 
    createdAt: Date;   
    updatedAt: Date;     
}