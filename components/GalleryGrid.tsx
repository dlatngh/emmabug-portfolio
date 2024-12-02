"use client"

import {useEffect, useState} from "react";
import Link from "next/link";


const lol = [
    {
        url: "https://media.discordapp.net/attachments/874613623794855936/1312688340172148816/Untitled_Artwork.jpg?ex=674e1088&is=674cbf08&hm=1f256a3388938456937e172066f93f12b513fc0974fced679d6012b7fafee808&=&format=webp&width=950&height=700",
    },
    {
        url: "https://media.discordapp.net/attachments/874613623794855936/1312703686224642058/Untitled_Artwork.jpg?ex=674d7613&is=674c2493&hm=2d43593e5a7a3d84846930b3b3e4be3f3b272f70dbc4480aec59183bd8b78b5e&=&format=webp&width=1554&height=1462",
    },
    {
        url: "https://media.discordapp.net/attachments/874613623794855936/1312703686736220223/Untitled_Artwork.jpg?ex=674d7613&is=674c2493&hm=890873b233f7bf9c179363fa3c7913ce25775ff1ae9b07eedc19ea7570c61669&=&format=webp&width=2520&height=1462",
    },
    {
        url: "https://media.discordapp.net/attachments/874613623794855936/1312663458617098351/Untitled_Artwork.jpg?ex=674df95c&is=674ca7dc&hm=aa9f9e7531dbe7ec58748cb837c0af5b77e1e06d9f3cf309c1e221e08e355470&=&format=webp&width=1912&height=1462",
    },
    {
        url: "https://media.discordapp.net/attachments/874613623794855936/1312663352950132736/Untitled_Artwork.jpg?ex=674df943&is=674ca7c3&hm=3dc9a50802df96db84605cea81e3a9bc85a20832828b05e87fb8fa94f0e3b13f&=&format=webp&width=2398&height=1462",
    },
    {
        url: "https://media.discordapp.net/attachments/874613623794855936/1312663459292254238/Untitled_Artwork.jpg?ex=674df95c&is=674ca7dc&hm=77db88c90859df234f0ea091532b499f71aa7f81eb539aab1fb8c04c84530a1d&=&format=webp&width=1118&height=1462",
    },
    {
        url: "https://media.discordapp.net/attachments/874613623794855936/1312663458961166347/Untitled_Artwork.jpg?ex=674df95c&is=674ca7dc&hm=93deb5ddf2cec8f579bf1a737b8bdc78d75e550d763b42e101d27035d2d41a39&=&format=webp&width=1298&height=1462",
    },
];

export default function GalleryGrid() {
    const [artList, setArtList] = useState([]);

    useEffect(() => {
        fetchArtList(() => {

        })
    }, []);

    return (
        <div className="gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-10 sm:px-28 lg:px-48">
            {lol.map((item, index) => (
                <Link
                    href={`/art/${index}`}
                    key={index}
                    className="w-full h-auto aspect-square flex justify-center items-center hover:opacity-50 transition-opacity hover:cursor-pointer"
                >
                    <img
                        src={item.url}
                        alt={`Meme ${index + 1}`}
                        className="object-cover h-full w-full "
                    />
                </Link>
            ))}
        </div>
    );
}