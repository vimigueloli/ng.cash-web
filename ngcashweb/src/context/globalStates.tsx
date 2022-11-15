import { createContext, ReactNode, useState, useEffect } from "react";

interface UserProps {
    page?: "login";
}

interface UpdaterProps {
    update?: Function;
}

export const Global = createContext<UserProps>({});
export const GlobalUpdater = createContext<UpdaterProps>({});

interface ProviderProps {
    children: ReactNode;
}

export default function GlobalProvider({ children }: ProviderProps) {
    const [globalState, setGlobalState] = useState<UserProps>({});

    return (
        <Global.Provider value={globalState}>
            <GlobalUpdater.Provider value={{ update: setGlobalState }}>
                {children}
            </GlobalUpdater.Provider>
        </Global.Provider>
    );
}
