import { createContext, ReactNode, useState, useEffect } from "react";

interface UserProps {
    name?: string;
    token?: string;
}

interface UpdaterProps {
    update?: Function;
}

export const User = createContext<UserProps>({});
export const UserUpdater = createContext<UpdaterProps>({});

interface ProviderProps {
    children: ReactNode;
}

export default function UserProvider({ children }: ProviderProps) {
    const [globalUser, setGlobalUser] = useState<UserProps>({});

    return (
        <User.Provider value={globalUser}>
            <UserUpdater.Provider value={{ update: setGlobalUser }}>
                {children}
            </UserUpdater.Provider>
        </User.Provider>
    );
}
