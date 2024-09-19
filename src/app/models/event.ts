import { Product } from "./product";

export interface Event {
    id?: string,
    uuid: string;
    name: string,
    description: string,
    date: Date,
    location: string,
    price: number,
    products?: Product [],
    organizerId: number,
    capacity: number,
    imageUrl: string,
    category: string,
    createdAt: string,
    status?: string,
}