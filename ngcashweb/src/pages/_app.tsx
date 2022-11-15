import "../styles/globals.css";
import type { AppProps } from "next/app";
import GlobalProvider from "context/globalStates";
import UserProvider from "context/user";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <GlobalProvider>
            <UserProvider>
                <Component {...pageProps} />
            </UserProvider>
        </GlobalProvider>
    );
}
