import React from "react";
import { FormInput } from "../form/form-input";
import { FormTextarea } from "../form/form-textarea";
import { AddressInput } from "../address-input";
import { BordersBlock } from "../borders-block";

interface Props {
    className?: string;
}

export const CheckoutPersonalInfoForm: React.FC<Props> = ({ className }) => {
    return (
        <BordersBlock title="Контактна інформація" className={className}>
            <div className="grid grid-cols-2 gap-5">
                <FormInput
                    required
                    label="Ім'я"
                    name="firstName"
                    className="text-base"
                />
                <FormInput
                    required
                    label="Прізвище"
                    name="lastName"
                    className="text-base"
                />
                <FormInput
                    required
                    label="E-Mail"
                    name="email"
                    className="text-base"
                />
                <FormInput
                    required
                    label="Телефон"
                    name="phone"
                    className="text-base"
                />
                <div className="grid grid-cols-4 gap-4">
                    <AddressInput
                        required
                        label="Адреса"
                        name="address"
                        className="text-base  col-span-4"
                    />
                    <FormInput
                        required
                        label="Будинок"
                        name="house"
                        className="text-base"
                    />
                    <FormInput
                        label="Під'їзд"
                        name="entrance"
                        className="text-base"
                    />
                    <FormInput
                        label="Поверх"
                        name="floor"
                        className="text-base"
                    />
                    <FormInput
                        label="Квартира"
                        name="appartment"
                        className="text-base"
                    />
                </div>
                <FormTextarea
                    label="Коментар"
                    name="comment"
                    className="text-base"
                />
            </div>
        </BordersBlock>
    );
};
