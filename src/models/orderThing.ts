export type OrderColor = 'red' | 'green' | 'blue';

export interface OrderThing {
    id: number;
    name: string;
    color: OrderColor;
    order?: number;
}