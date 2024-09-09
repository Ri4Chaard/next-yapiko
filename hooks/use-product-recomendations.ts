import { ProductWithRelations } from "@/@types/prisma";
import { Api } from "@/services/api-client";
import React from "react";

export const useProductRecomendations = (category: string) => {
    const [products, setProducts] = React.useState<ProductWithRelations[]>([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        async function fetchProducts(category: string) {
            try {
                setLoading(true);
                const data = await Api.products.getRecomendations({
                    category,
                });
                setProducts(data);
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts(category);
    }, []);

    return { products, loading };
};
