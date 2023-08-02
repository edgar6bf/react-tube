import React from "react";
import {useYoutubeApi} from "../context/YoutubeApiContext";
import {useQuery} from "@tanstack/react-query";

export default function ChannelInfo({ id, name }) {
    const { youtube } = useYoutubeApi();
    const { data: url } = useQuery(
        ['channel', id],
        () => youtube.channelImageUrl(id)
    );

    return (
        <>
            {url && <img src={url} alt={name} />}
            <p>{name}</p>
        </>
    );
}
