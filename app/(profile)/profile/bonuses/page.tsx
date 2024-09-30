"use client";

import { BordersBlock } from "@/components/shared/borders-block";
import { ProfileBonusesInfo } from "@/components/shared/profile/profile-bonuses-info";
import { useUserInfo } from "@/hooks/use-user-info";
import { Coins } from "lucide-react";

export default function BonusesPage() {
    const { user, loading } = useUserInfo();

    return (
        <BordersBlock title="Мої бонуси" className="flex-1 basis-3/4">
            <ProfileBonusesInfo user={user!!} loading={loading} />

            <h2 className="mt-5 text-xl">
                Бонуси прив'язуються до профіля користувача
            </h2>
            <div className="w-[500px] flex flex-col justify-around rounded-md bg-secondary p-5 mt-2">
                <div>
                    <h3 className="flex items-center font-bold">
                        1 <Coins className="mr-2" />
                        дорівнює
                    </h3>
                    <p className="mt-2">1 гривні</p>
                </div>
                <div className="mt-5">
                    <h3 className="font-bold">Бонуси дійсні</h3>
                    <p className="mt-2">
                        1 місяць з моменту останнього їх нарахування на бонусну
                        карту
                    </p>
                </div>
                <div className="mt-5">
                    <h3 className="font-bold">Бонусами можно оплатити</h3>
                    <p className="mt-2">До 100% замовлення</p>
                </div>
            </div>

            <h2 className="mt-5 text-xl">Як почати користуватися?</h2>
            <p className="mt-2">
                Просто зробіть перше замовлення і бонуси будуть нараховуватися!
            </p>
            <p className="font-bold">
                Щоб отримати можливість оплачувати замовлення на сайті бонусами
                необхідно підтвердити електрону пошту. Після підтвердження пошти
                вам також стане доступний особистий кабінет, в якому можна
                дізнатися стан бонусного рахунку та поточний відсоток кешбеку.
            </p>
        </BordersBlock>
    );
}
