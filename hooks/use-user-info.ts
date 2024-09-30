import { Api } from "@/services/api-client";
import { User } from "@prisma/client";
import React from "react";

export const useUserInfo = () => {
    const [loading, setLoading] = React.useState(true);
    const [user, setUser] = React.useState<User>();

    React.useEffect(() => {
        async function fetchUserInfo() {
            try {
                setLoading(true);
                const user = await Api.auth.getMe();
                setUser(user);
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        }
        fetchUserInfo();
    }, []);

    return { user, loading };
};
