export const categories = [
    { name: "Суші" },
    { name: "Піца" },
    { name: "Бургери" },
    { name: "Гаряче" },
    { name: "Напої" },
    { name: "Інше" },
];

export const subcategories = [
    {
        name: "Суші",
        imageUrl: "/assets/icons/sushi/sushi.svg",
        categoryId: 1,
    },
    {
        name: "Роли",
        imageUrl: "/assets/icons/sushi/roll.svg",
        categoryId: 1,
    },
    {
        name: "Royal",
        imageUrl: "/assets/icons/sushi/royal.svg",
        categoryId: 1,
    },
    {
        name: "Сети",
        imageUrl: "/assets/icons/sushi/set.svg",
        categoryId: 1,
    },
    {
        name: "Кругла",
        imageUrl: "/assets/icons/sushi/sushi.svg",
        categoryId: 2,
    },
    {
        name: "Party",
        imageUrl: "/assets/icons/sushi/roll.svg",
        categoryId: 2,
    },
    {
        name: "Супи",
        imageUrl: "/assets/icons/sushi/sushi.svg",
        categoryId: 4,
    },
    {
        name: "WOK",
        imageUrl: "/assets/icons/sushi/roll.svg",
        categoryId: 4,
    },
    {
        name: "Пасти",
        imageUrl: "/assets/icons/sushi/roll.svg",
        categoryId: 4,
    },
    {
        name: "Безалкогольні напої",
        imageUrl: "/assets/icons/sushi/sushi.svg",
        categoryId: 5,
    },
    {
        name: "Пиво",
        imageUrl: "/assets/icons/sushi/roll.svg",
        categoryId: 5,
    },
    {
        name: "Сидр",
        imageUrl: "/assets/icons/sushi/roll.svg",
        categoryId: 5,
    },
    {
        name: "Дитяче меню",
        imageUrl: "/assets/icons/sushi/sushi.svg",
        categoryId: 6,
    },
    {
        name: "Соуси",
        imageUrl: "/assets/icons/sushi/roll.svg",
        categoryId: 6,
    },
];

export const _ingredients = [
    {
        name: "Норі",
        imageUrl: "/assets/images/ingredients/_1__2_7.webp",
        categories: [{ id: 1 }],
        subcategories: [{ id: 2 }],
    },
    {
        name: "Омлет",
        imageUrl: "/assets/images/ingredients/_1__2_7.webp",
        categories: [{ id: 1 }],
        subcategories: [{ id: 2 }],
    },
    {
        name: "Рис",
        imageUrl: "/assets/images/ingredients/_1__2_7.webp",
        categories: [{ id: 1 }],
        subcategories: [{ id: 2 }],
    },
    {
        name: "Сир філадельфія",
        imageUrl: "/assets/images/ingredients/_1__2_7.webp",
        categories: [{ id: 1 }],
        subcategories: [{ id: 2 }],
    },
    {
        name: "Соус унагі",
        imageUrl: "/assets/images/ingredients/_1__2_7.webp",
        categories: [{ id: 1 }],
        subcategories: [{ id: 2 }],
    },
    {
        name: "Сухарі панко",
        imageUrl: "/assets/images/ingredients/_1__2_7.webp",
        categories: [{ id: 1 }],
        subcategories: [{ id: 2 }],
    },
    {
        name: "Тунець",
        imageUrl: "/assets/images/ingredients/_1__2_7.webp",
        categories: [{ id: 1 }],
        subcategories: [{ id: 2 }],
    },
    {
        name: "Огірок",
        imageUrl: "/assets/images/ingredients/_1__2_7.webp",
        categories: [{ id: 1 }],
        subcategories: [{ id: 2 }],
    },
    {
        name: "Окунь копчений",
        imageUrl: "/assets/images/ingredients/_1__2_7.webp",
        categories: [{ id: 1 }],
        subcategories: [{ id: 2 }],
    },
    {
        name: "Сир чеддер",
        imageUrl: "/assets/images/ingredients/_1__2_7.webp",
        categories: [{ id: 1 }, { id: 2 }],
        subcategories: [{ id: 2 }, { id: 5 }],
    },
    {
        name: "Майонез",
        imageUrl: "/assets/images/ingredients/_1__2_7.webp",
        categories: [{ id: 1 }],
        subcategories: [{ id: 2 }],
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
        name: "Кругла кватерона",
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

export const extraIngredients = [
    {
        name: "Соус теріякі",
        price: 20,
        imageUrl: "/assets/images/ingredients/_1__2_7.webp",
        products: [{ id: 4 }, { id: 5 }],
    },
    {
        name: "Соус спайсі",
        price: 25,
        imageUrl: "/assets/images/ingredients/_1__2_7.webp",
        products: [{ id: 4 }],
    },
    {
        name: "Додатковий сир",
        price: 30,
        imageUrl: "/assets/images/ingredients/_1__2_7.webp",
        products: [{ id: 5 }],
    },
    {
        name: "Креветки",
        price: 40,
        imageUrl: "/assets/images/ingredients/_1__2_7.webp",
        products: [{ id: 4 }, { id: 5 }],
    },
    {
        name: "Гриби",
        price: 15,
        imageUrl: "/assets/images/ingredients/_1__2_7.webp",
        products: [{ id: 4 }],
    },
    {
        name: "Бекон",
        price: 35,
        imageUrl: "/assets/images/ingredients/_1__2_7.webp",
        products: [{ id: 5 }],
    },
];
