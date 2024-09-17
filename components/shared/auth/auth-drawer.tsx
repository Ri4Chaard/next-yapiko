import React from "react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "../../ui/sheet";

import { LoginForm } from "./forms/login-form";
import { Button } from "@/components/ui/button";
import { RegisterForm } from "./forms/register-form";
import { signIn } from "next-auth/react";

export const AuthDrawer: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [type, setType] = React.useState<"login" | "register">("login");

    const onSwitchType = () => {
        setType(type === "login" ? "register" : "login");
    };
    return (
        <Sheet>
            <SheetTrigger asChild>{children}</SheetTrigger>

            <SheetContent className="flex flex-col p-0 justify-between border-none">
                <div className={cn("flex flex-col justify-center h-full")}>
                    {type === "login" ? (
                        <LoginForm />
                    ) : (
                        <RegisterForm switchType={onSwitchType} />
                    )}
                </div>
                <SheetFooter>
                    <div className="w-full mb-3">
                        <hr className="mb-3 border-primary w-full" />
                        <div className="flex flex-col items-center justify-center w-72 mx-auto">
                            <div className="flex w-full justify-around">
                                <Button
                                    variant="ghost"
                                    onClick={() =>
                                        signIn("google", {
                                            callbackUrl: "/",
                                            redirect: true,
                                        })
                                    }
                                    type="button"
                                    className="gap-2 h-12 p-2  text-primary"
                                >
                                    <img src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" />
                                    Google
                                </Button>

                                <Button
                                    variant="ghost"
                                    onClick={() =>
                                        signIn("github", {
                                            callbackUrl: "/",
                                            redirect: true,
                                        })
                                    }
                                    type="button"
                                    className="gap-2 h-12 p-2  text-primary"
                                >
                                    <img src="https://github.githubassets.com/favicons/favicon.svg" />
                                    GitHub
                                </Button>
                            </div>
                            <p className="text-center mt-5">
                                {type === "login"
                                    ? "Ще не зареєстровані?"
                                    : "Вже зареєстровані?"}
                            </p>
                            <Button
                                variant="outline"
                                onClick={onSwitchType}
                                type="button"
                                className="h-12 w-full"
                            >
                                {type === "login"
                                    ? "Зареєструватися"
                                    : "Авторизація"}
                            </Button>
                        </div>
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};
