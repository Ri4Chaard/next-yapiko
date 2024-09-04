export const categories = [
    { name: "Суші", link: "sushi" },
    { name: "Піца", link: "pizza" },
    { name: "Бургери", link: "burgers" },
    { name: "Гаряче", link: "hot-dishes" },
    { name: "Напої", link: "drinks" },
    { name: "Інше", link: "other" },
];

export const subcategories = [
    {
        name: "Суші",
        link: "sushi",
        imageUrl: "/assets/icons/sushi/sushi.svg",
        categoryId: 1,
    },
    {
        name: "Роли",
        link: "roll",
        imageUrl: "/assets/icons/sushi/roll.svg",
        categoryId: 1,
    },
    {
        name: "Royal",
        link: "royal",
        imageUrl: "/assets/icons/sushi/royal.svg",
        categoryId: 1,
    },
    {
        name: "Сети",
        link: "set",
        imageUrl: "/assets/icons/sushi/set.svg",
        categoryId: 1,
    },
    {
        name: "Кругла",
        link: "round",
        imageUrl: "/assets/icons/sushi/sushi.svg",
        categoryId: 2,
    },
    {
        name: "Party",
        link: "party",
        imageUrl: "/assets/icons/sushi/roll.svg",
        categoryId: 2,
    },
    {
        name: "Супи",
        link: "soup",
        imageUrl: "/assets/icons/sushi/sushi.svg",
        categoryId: 4,
    },
    {
        name: "WOK",
        link: "wok",
        imageUrl: "/assets/icons/sushi/roll.svg",
        categoryId: 4,
    },
    {
        name: "Пасти",
        link: "noodles",
        imageUrl: "/assets/icons/sushi/roll.svg",
        categoryId: 4,
    },
    {
        name: "Безалкогольні напої",
        link: "non-alcohol",
        imageUrl: "/assets/icons/sushi/sushi.svg",
        categoryId: 5,
    },
    {
        name: "Пиво",
        link: "beer",
        imageUrl: "/assets/icons/sushi/roll.svg",
        categoryId: 5,
    },
    {
        name: "Сидр",
        link: "cider",
        imageUrl: "/assets/icons/sushi/roll.svg",
        categoryId: 5,
    },
    {
        name: "Дитяче меню",
        link: "kids",
        imageUrl: "/assets/icons/sushi/sushi.svg",
        categoryId: 6,
    },
    {
        name: "Соуси",
        link: "sauce",
        imageUrl: "/assets/icons/sushi/roll.svg",
        categoryId: 6,
    },
];

export const products = [
    {
        name: "Суші з тунцем",
        imageUrl: "/assets/images/products/roll1.webp",
        description: "Насичений смак тунця.",
        categoryId: 1,
        subcategoryId: 1,
    },
    {
        name: "Рол філадельфія з тунцем та панко",
        imageUrl: "/assets/images/products/roll1.webp",
        description: "Смачні суші з лососем.",
        categoryId: 1,
        subcategoryId: 2,
    },
    {
        name: "Запечений рол з копченим окунем",
        imageUrl: "/assets/images/products/roll2.webp",
        description: "Смачні суші з лососем.",
        categoryId: 1,
        subcategoryId: 2,
    },

    {
        name: "Сет ролів Філадельфія",
        imageUrl: "/assets/images/products/roll1.webp",
        description: "Класичний сет ролів.",
        categoryId: 1,
        subcategoryId: 4,
    },
    {
        name: "Піца португальська",
        imageUrl: "/assets/images/products/portuguese.webp",
        description: "Піца з томатами та сиром.",
        categoryId: 2,
        subcategoryId: 5,
    },
    {
        name: "Піца кватерона",
        imageUrl: "/assets/images/products/kvaterona.webp",
        description: "Піца з томатами та сиром.",
        categoryId: 2,
        subcategoryId: 5,
    },
    {
        name: "Party піца BBQ",
        imageUrl: "/assets/images/products/kvaterona.webp",
        description: "Велика піца для вечірки з BBQ соусом.",
        categoryId: 2,
        subcategoryId: 6,
    },
    {
        name: "WOK з куркою",
        imageUrl: "/assets/images/products/kvaterona.webp",
        description: "WOK з овочами та куркою.",
        categoryId: 4,
        subcategoryId: 8,
    },
    {
        name: "Суп Том Ям",
        imageUrl: "/assets/images/products/kvaterona.webp",
        description: "Гострий тайський суп.",
        categoryId: 4,
        subcategoryId: 7,
    },
];

export const productItems = [
    { price: 150, productId: 1 },
    { price: 160, productId: 2 },
    { price: 550, productId: 3 },
    { price: 550, productId: 4 },

    { price: 180, pizzaSize: 32, pizzaBorder: 1, productId: 5 },
    { price: 230, pizzaSize: 32, pizzaBorder: 2, productId: 5 },
    { price: 235, pizzaSize: 32, pizzaBorder: 3, productId: 5 },
    { price: 210, pizzaSize: 42, pizzaBorder: 1, productId: 5 },
    { price: 260, pizzaSize: 42, pizzaBorder: 2, productId: 5 },
    { price: 265, pizzaSize: 42, pizzaBorder: 3, productId: 5 },

    { price: 190, pizzaSize: 32, pizzaBorder: 1, productId: 6 },
    { price: 240, pizzaSize: 32, pizzaBorder: 2, productId: 6 },
    { price: 245, pizzaSize: 32, pizzaBorder: 3, productId: 6 },
    { price: 220, pizzaSize: 42, pizzaBorder: 1, productId: 6 },
    { price: 250, pizzaSize: 42, pizzaBorder: 2, productId: 6 },
    { price: 255, pizzaSize: 42, pizzaBorder: 3, productId: 6 },

    { price: 120, productId: 7 },
    { price: 100, productId: 8 },
    { price: 100, productId: 9 },
];
