import { categories, products, productItems, subcategories } from "./constants";
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

    await prisma.subcategory.createMany({
        data: subcategories,
    });

    await prisma.product.createMany({
        data: products,
    });

    await prisma.productItem.createMany({
        data: productItems,
    });

    //Основні інгредієнти
    await prisma.ingredient.create({
        data: {
            name: "Норі",
            imageUrl: "/assets/images/ingredients/_1__2_7.webp",
            categories: { connect: [{ id: 1 }] },
            subcategories: { connect: [{ id: 2 }] },
            products: { connect: [{ id: 2 }, { id: 3 }] },
        },
    });

    await prisma.ingredient.create({
        data: {
            name: "Омлет",
            imageUrl: "/assets/images/ingredients/_1__2_7.webp",
            categories: { connect: [{ id: 1 }] },
            subcategories: { connect: [{ id: 2 }] },
            products: { connect: [{ id: 2 }] },
        },
    });
    await prisma.ingredient.create({
        data: {
            name: "Рис",
            imageUrl: "/assets/images/ingredients/_1__2_7.webp",
            categories: { connect: [{ id: 1 }] },
            subcategories: { connect: [{ id: 2 }] },
            products: { connect: [{ id: 2 }, { id: 3 }] },
        },
    });
    await prisma.ingredient.create({
        data: {
            name: "Сир філадельфія",
            imageUrl: "/assets/images/ingredients/_1__2_7.webp",
            categories: { connect: [{ id: 1 }] },
            subcategories: { connect: [{ id: 2 }] },
            products: { connect: [{ id: 2 }, { id: 3 }] },
        },
    });
    await prisma.ingredient.create({
        data: {
            name: "Соус унагі",
            imageUrl: "/assets/images/ingredients/_1__2_7.webp",
            categories: { connect: [{ id: 1 }] },
            subcategories: { connect: [{ id: 2 }] },
            products: { connect: [{ id: 2 }, { id: 3 }] },
        },
    });
    await prisma.ingredient.create({
        data: {
            name: "Сухарі панко",
            imageUrl: "/assets/images/ingredients/_1__2_7.webp",
            categories: { connect: [{ id: 1 }] },
            subcategories: { connect: [{ id: 2 }] },
            products: { connect: [{ id: 2 }, { id: 3 }] },
        },
    });
    await prisma.ingredient.create({
        data: {
            name: "Тунець",
            imageUrl: "/assets/images/ingredients/_1__2_7.webp",
            categories: { connect: [{ id: 1 }] },
            subcategories: { connect: [{ id: 2 }] },
            products: { connect: [{ id: 2 }] },
        },
    });
    await prisma.ingredient.create({
        data: {
            name: "Огірок",
            imageUrl: "/assets/images/ingredients/_1__2_7.webp",
            categories: { connect: [{ id: 1 }, { id: 3 }] },
            subcategories: { connect: [{ id: 2 }] },
            products: { connect: [{ id: 3 }, { id: 10 }] },
        },
    });
    await prisma.ingredient.create({
        data: {
            name: "Окунь копчений",
            imageUrl: "/assets/images/ingredients/_1__2_7.webp",
            categories: { connect: [{ id: 1 }, { id: 3 }] },
            subcategories: { connect: [{ id: 2 }] },
            products: { connect: [{ id: 3 }] },
        },
    });
    await prisma.ingredient.create({
        data: {
            name: "Сир чеддер",
            imageUrl: "/assets/images/ingredients/_1__2_7.webp",
            categories: { connect: [{ id: 1 }, { id: 2 }, { id: 3 }] },
            subcategories: { connect: [{ id: 2 }, { id: 5 }] },
            products: { connect: [{ id: 3 }, { id: 5 }, { id: 10 }] },
        },
    });
    await prisma.ingredient.create({
        data: {
            name: "Майонез",
            imageUrl: "/assets/images/ingredients/_1__2_7.webp",
            categories: { connect: [{ id: 1 }] },
            subcategories: { connect: [{ id: 2 }] },
            products: { connect: [{ id: 3 }] },
        },
    });

    //Додаткові інгредієнти
    await prisma.extraIngredient.create({
        data: {
            name: "Соус теріякі",
            price: 20,
            imageUrl: "/assets/images/ingredients/_1__2_7.webp",
            products: { connect: [{ id: 5 }, { id: 6 }] },
        },
    });
    await prisma.extraIngredient.create({
        data: {
            name: "Соус спайсі",
            price: 25,
            imageUrl: "/assets/images/ingredients/_1__2_7.webp",
            products: { connect: [{ id: 5 }] },
        },
    });
    await prisma.extraIngredient.create({
        data: {
            name: "Додатковий сир",
            price: 30,
            imageUrl: "/assets/images/ingredients/_1__2_7.webp",
            products: { connect: [{ id: 6 }] },
        },
    });
    await prisma.extraIngredient.create({
        data: {
            name: "Креветки",
            price: 40,
            imageUrl: "/assets/images/ingredients/_1__2_7.webp",
            products: { connect: [{ id: 5 }, { id: 6 }] },
        },
    });
    await prisma.extraIngredient.create({
        data: {
            name: "Гриби",
            price: 15,
            imageUrl: "/assets/images/ingredients/_1__2_7.webp",
            products: { connect: [{ id: 5 }] },
        },
    });
    await prisma.extraIngredient.create({
        data: {
            name: "Бекон",
            price: 35,
            imageUrl: "/assets/images/ingredients/_1__2_7.webp",
            products: { connect: [{ id: 6 }] },
        },
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
            productItemId: 5,
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
