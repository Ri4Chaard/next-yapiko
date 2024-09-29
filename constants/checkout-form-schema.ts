import { boolean, z } from "zod";

export const checkoutFormSchema = z.object({
    firstName: z
        .string()
        .min(2, { message: "Ім'я повинно містити не менше 2-х символів" }),
    lastName: z
        .string()
        .min(2, { message: "Прізвище повинно містити не менше 2-х символів" }),
    email: z.string().email({ message: "Введіть коректну пошту" }),
    phone: z.string().min(10, { message: "Введіть правильний номер телефону" }),
    address: z.string().min(5, { message: "Введіть правильну адресу" }),
    house: z.string().min(1, { message: "Введіть правильну номер будинку" }),
    entrance: z.string().optional(),
    apartment: z.string().optional(),
    floor: z.string().optional(),
    comment: z.string().optional(),
    bonuses: z.string().or(boolean()).optional(),
});

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;
