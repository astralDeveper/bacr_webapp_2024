import React,{ useEffect,useState } from "react";
import { IMAGES } from "../../../utils/Images";
import { fetchClients } from "../../../api";



const ClientCrad = () => {
const [clients, setClients] = useState([]);
    const fetchClientsb = async () => {
        
        try {
            const response = await fetchClients();
            setClients(response);     
               
        } catch (error) {
            console.error("Error fetching products:", error);
        }
        };
        useEffect(() => {
            fetchClientsb(); // Fetch brands once
        }, []);
    
    return (
        <div className=" md:w-[80%] w-full mx-auto p-6 flex flex-wrap gap-4 items-center justify-center">
            {clients.map((client, ind) => (
                <div key={ind} className=" border rounded-lg overflow-hidden shadow-lg">
                    <img
                        src={client.imagePath}
                        alt={client.name}
                        className="md:h-56 h-[32] md:p-6 p-4 md:w-56 w-32 object-contain"
                    />
                </div>
            ))}
        </div>
    );
};

export default ClientCrad;
