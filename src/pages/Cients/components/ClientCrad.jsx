import React from "react";
import { IMAGES } from "../../../utils/Images";
const clients = [
    { id: 1, imageUrl: IMAGES.CLIENTLOGO1, altText: "Client 1" },
    { id: 2, imageUrl: IMAGES.CLIENTLOGO2, altText: "Client 2" },
    { id: 3, imageUrl: IMAGES.CLIENTLOGO3, altText: "Client 3" },
    { id: 4, imageUrl: IMAGES.CLIENTLOGO4, altText: "Client 4" },
    { id: 5, imageUrl: IMAGES.CLIENTLOGO5, altText: "Client 5" },
    { id: 6, imageUrl: IMAGES.CLIENTLOGO6, altText: "Client 6" },
    { id: 7, imageUrl: IMAGES.CLIENTLOGO7, altText: "Client 7" },
    { id: 8, imageUrl: IMAGES.CLIENTLOGO8, altText: "Client 8" },
    { id: 9, imageUrl: IMAGES.CLIENTLOGO9, altText: "Client 9" },
    { id: 10, imageUrl: IMAGES.CLIENTLOGO10, altText: "Client 10" },
    { id: 11, imageUrl: IMAGES.CLIENTLOGO11, altText: "Client 11" },
    { id: 12, imageUrl: IMAGES.CLIENTLOGO12, altText: "Client 12" },
    { id: 13, imageUrl: IMAGES.CLIENTLOGO13, altText: "Client 13" },
    { id: 14, imageUrl: IMAGES.CLIENTLOGO14, altText: "Client 14" },
    { id: 15, imageUrl: IMAGES.CLIENTLOGO15, altText: "Client 15" },
    { id: 16, imageUrl: IMAGES.CLIENTLOGO16, altText: "Client 16" },
    { id: 17, imageUrl: IMAGES.CLIENTLOGO17, altText: "Client 17" },
    { id: 18, imageUrl: IMAGES.CLIENTLOGO18, altText: "Client 18" },
    { id: 19, imageUrl: IMAGES.CLIENTLOGO19, altText: "Client 19" },
    { id: 20, imageUrl: IMAGES.CLIENTLOGO20, altText: "Client 20" }
];


const ClientCrad = () => {
    return (
        <div className=" md:w-[80%] w-full mx-auto p-6 flex flex-wrap gap-4 items-center justify-center">
            {clients.map((client, ind) => (
                <div key={ind} className=" border rounded-lg overflow-hidden shadow-lg">
                    <img
                        src={client.imageUrl}
                        alt={client.altText}
                        className="md:h-56 h-[32] md:p-6 p-4 md:w-56 w-32 object-contain"
                    />
                </div>
            ))}
        </div>
    );
};

export default ClientCrad;
