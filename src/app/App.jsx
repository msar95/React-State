import React from "react";
import { ImageChanger } from "./ImageChanger";

const images = [
    {
        src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flivewallp.com%2Fwp-content%2Fuploads%2F2021%2F07%2FOne-Piece-Zoro.jpg&f=1&nofb=1',
        alt: 'Zoro in Wano Kuni'
    },
    {
        src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2793401.jpg&f=1&nofb=1',
        alt: 'Zoro in der neuen Welt'
    },
    {
        src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F5d%2F3f%2F5b%2F5d3f5bd94b6d017a7e900dfe95790d7a--zoro-roronoa-one-piece-anime.jpg&f=1&nofb=1',
        alt: 'Zoro auf der Grand Line'
    }
]


export class App extends React.Component {
    render() {
        return (
            <div>
                <ImageChanger images = {images} interval = {3000} />
            </div>
        )
    };
};