export interface CartItemProps {
    id: number;
    imageUrl: string;
    description: string;
    details: string;
    name: string;
    price: number;
    quantity: number;
    disabled?: boolean;
}
