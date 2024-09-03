import {
    categories,
    _ingredients,
    products,
    productItems,
    extraIngredients,
} from "./constants";
import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";

async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: "User",
                email: "user@test.com",
                password: hashSync("111111", 10),
                verified: new Date(),
                role: "USER",
            },
            {
                fullName: "Admin",
                email: "admin@test.com",
                password: hashSync("111111", 10),
                verified: new Date(),
                role: "ADMIN",
            },
        ],
    });
    await prisma.category.createMany({
        data: categories,
    });

    //create по одному
    await prisma.ingredient.createMany({
        data: [
            {
                name: "Норі",
                imageUrl: "/assets/images/ingredients/_1__2_7.webp",
            },
            {
                name: "Омлет",
                imageUrl: "/assets/images/ingredients/_1__2_7.webp",
            },
            {
                name: "Рис",
                imageUrl: "/assets/images/ingredients/_1__2_7.webp",
            },
            {
                name: "Сир філадельфія",
                imageUrl: "/assets/images/ingredients/_1__2_7.webp",
            },
            {
                name: "Соус унагі",
                imageUrl: "/assets/images/ingredients/_1__2_7.webp",
            },
            {
                name: "Сухарі панко",
                imageUrl: "/assets/images/ingredients/_1__2_7.webp",
            },
            {
                name: "Тунець",
                imageUrl: "/assets/images/ingredients/_1__2_7.webp",
            },
            {
                name: "Огірок",
                imageUrl: "/assets/images/ingredients/_1__2_7.webp",
            },
            {
                name: "Окунь копчений",
                imageUrl: "/assets/images/ingredients/_1__2_7.webp",
            },
            {
                name: "Сир чеддер",
                imageUrl: "/assets/images/ingredients/_1__2_7.webp",
            },
            {
                name: "Майонез",
                imageUrl: "/assets/images/ingredients/_1__2_7.webp",
            },
        ],
    });

    const ingredientUpdates = [
        { name: "Норі", categories: [1], subcategories: [2] },
        { name: "Омлет", categories: [1], subcategories: [2] },
        { name: "Рис", categories: [1], subcategories: [2] },
        { name: "Сир філадельфія", categories: [1], subcategories: [2] },
        { name: "Соус унагі", categories: [1], subcategories: [2] },
        { name: "Сухарі панко", categories: [1], subcategories: [2] },
        { name: "Тунець", categories: [1], subcategories: [2] },
        { name: "Огірок", categories: [1], subcategories: [2] },
        { name: "Окунь копчений", categories: [1], subcategories: [2] },
        { name: "Сир чеддер", categories: [1, 2], subcategories: [2, 5] },
        { name: "Майонез", categories: [1], subcategories: [2] },
    ];

    for (const { name, categories, subcategories } of ingredientUpdates) {
        const ingredient = await prisma.ingredient.findFirst({
            where: { name },
        });

        if (ingredient) {
            await prisma.ingredient.update({
                where: { id: ingredient.id },
                data: {
                    categories: { connect: categories.map((id) => ({ id })) },
                    subcategories: {
                        connect: subcategories.map((id) => ({ id })),
                    },
                },
            });
        }
    }

    await prisma.extraIngredient.createMany({
        data: extraIngredients,
    });

    await prisma.product.createMany({
        data: products,
    });

    await prisma.productItem.createMany({
        data: productItems,
    });

    await prisma.cart.createMany({
        data: [
            {
                userId: 1,
                totalAmount: 0,
                token: "111111",
            },
            {
                userId: 2,
                totalAmount: 0,
                token: "222222",
            },
        ],
    });

    await prisma.cartItem.create({
        data: {
            productItemId: 1,
            cartId: 1,
            quantity: 2,
            extraIngredients: {
                connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
            },
        },
    });
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "ExtraIngredient" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
}

async function main() {
    try {
        await down();
        await up();
    } catch (e) {
        console.log(e);
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.log(e);
        await prisma.$disconnect();
        process.exit(1);
    });
