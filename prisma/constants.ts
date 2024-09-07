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
        categoryLink: "sushi",
        subcategoryLink: "sushi",
    },
    {
        name: "Рол філадельфія з тунцем та панко",
        imageUrl: "/assets/images/products/roll1.webp",
        categoryLink: "sushi",
        subcategoryLink: "roll",
    },
    {
        name: "Запечений рол з копченим окунем",
        imageUrl: "/assets/images/products/roll2.webp",
        categoryLink: "sushi",
        subcategoryLink: "roll",
    },

    {
        name: "Сет ролів Філадельфія",
        imageUrl: "/assets/images/products/roll1.webp",
        categoryLink: "sushi",
        subcategoryLink: "set",
    },
    {
        name: "Піца португальська",
        imageUrl: "/assets/images/products/portuguese.webp",
        categoryLink: "pizza",
        subcategoryLink: "round",
    },
    {
        name: "Піца кватерона",
        imageUrl: "/assets/images/products/kvaterona.webp",
        categoryLink: "pizza",
        subcategoryLink: "round",
    },
    {
        name: "Party піца BBQ",
        imageUrl: "/assets/images/products/kvaterona.webp",
        categoryLink: "pizza",
        subcategoryLink: "party",
    },
    {
        name: "WOK з куркою",
        imageUrl: "/assets/images/products/kvaterona.webp",
        categoryLink: "hot-dishes",
        subcategoryLink: "wok",
    },
    {
        name: "Суп Том Ям",
        imageUrl: "/assets/images/products/kvaterona.webp",
        categoryLink: "hot-dishes",
        subcategoryLink: "soup",
    },
    {
        name: "Чізбургер",
        imageUrl: "/assets/images/products/roll1.webp",
        categoryLink: "burgers",
    },
];

export const productItems = [
    { price: 150, description: "250г 8шт", productId: 1 },
    { price: 160, description: "245г 8шт", productId: 2 },
    { price: 550, description: "300г 8шт", productId: 3 },
    { price: 550, description: "1100г 32шт", productId: 4 },

    {
        price: 180,
        description: "600г",
        pizzaSize: 32,
        pizzaBorder: 1,
        productId: 5,
    },
    {
        price: 230,
        description: "600г",
        pizzaSize: 32,
        pizzaBorder: 2,
        productId: 5,
    },
    {
        price: 235,
        description: "600г",
        pizzaSize: 32,
        pizzaBorder: 3,
        productId: 5,
    },
    {
        price: 210,
        description: "850г",
        pizzaSize: 42,
        pizzaBorder: 1,
        productId: 5,
    },
    {
        price: 260,
        description: "850г",
        pizzaSize: 42,
        pizzaBorder: 2,
        productId: 5,
    },
    {
        price: 265,
        description: "850г",
        pizzaSize: 42,
        pizzaBorder: 3,
        productId: 5,
    },

    {
        price: 190,
        description: "540г",
        pizzaSize: 32,
        pizzaBorder: 1,
        productId: 6,
    },
    {
        price: 240,
        description: "540г",
        pizzaSize: 32,
        pizzaBorder: 2,
        productId: 6,
    },
    {
        price: 245,
        description: "540г",
        pizzaSize: 32,
        pizzaBorder: 3,
        productId: 6,
    },
    {
        price: 220,
        description: "910г",
        pizzaSize: 42,
        pizzaBorder: 1,
        productId: 6,
    },
    {
        price: 250,
        description: "910г",
        pizzaSize: 42,
        pizzaBorder: 2,
        productId: 6,
    },
    {
        price: 255,
        description: "910г",
        pizzaSize: 42,
        pizzaBorder: 3,
        productId: 6,
    },

    { price: 120, description: "890г", productId: 7 },
    { price: 100, description: "300г", productId: 8 },
    { price: 100, description: "290г", productId: 9 },
    { price: 300, description: "450г", productId: 10 },
];
