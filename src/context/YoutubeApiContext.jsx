import {createContext, useContext} from "react";
import FakeYoutubeClient from "../api/fakeYoutbueClient";
import Youtube from "../api/youtube";
import RealYoutubeClient from "../api/realYoutbueClient";

export const YoutubeApiContext = createContext();

// const client = new FakeYoutubeClient();
const client = new RealYoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
    return (
        <YoutubeApiContext.Provider value={{youtube}}>
            {children}
        </YoutubeApiContext.Provider>
    );
}

export function useYoutubeApi() {
    return useContext(YoutubeApiContext);
}
