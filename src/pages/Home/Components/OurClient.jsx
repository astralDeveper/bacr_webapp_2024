import React, { useEffect, useState } from "react";
import { fetchClients } from "../../../api";

export default function OurClient(props) {
const [clients, setClients] = useState([]);
const [clientsb, setClientsb] = useState([]);
  const { title, images } = props;

const fetchClientsb = async () => {
        
    try {
        const response = await fetchClients();
        setClients(response);     
        setClientsb(response.reverse());
           
    } catch (error) {
        console.error("Error fetching products:", error);
    }
    };
    useEffect(() => {
        fetchClientsb(); // Fetch brands once
    }, []);

  return (
    <section className="mx-auto px-6 ">
      {title && (
        <h2 className="outfit-font text-[18px] sm:text-[26px] lg:text-[34px] font-bold text-center text-[#031019] mb-4">
          {title}
        </h2>
      )}
      <div className="py-2 w-full ">
        <div className="relative overflow-hidden">
          <div
            x-data="{}"
            // x-init="$nextTick(() => {
            //             let ul = $refs.logos;
            //             ul.insertAdjacentHTML('afterend', ul.outerHTML);
            //             ul.nextSibling.setAttribute('aria-hidden', 'true');
            //         })"
            className="w-full gap-4  flex-nowrap overflow-hidden flex flex-col"
          // className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
          >
            <ul
              x-ref="logos"
              className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll-fast md:animate-infinite-scroll"
            >
              {clients.map((item,index) => (
                <li key={`ltr-${index}`} >
                  <div className="p-4 rounded-md md:w-[200px]">
                    <img
                      src={item.imagePath}
                      alt={item.name}
                      className="md:h-[100px] md:w-[100px] h-[80px] w-[80px] mx-auto object-contain"
                    />
                  </div>
                </li>
              ))}
              {/* Duplicate content */}
              {clients.map((item, index) => (
                <li key={`ltr-duplicate-${index}`} className="mx-2">
                  <div className="p-4 rounded-md md:w-[200px]">
                    <img
                      src={item.imagePath}
                      alt={item.name}
                      className="md:h-[100px] md:w-[100px] h-[80px] w-[80px] mx-auto object-contain"
                    />
                  </div>
                </li>
              ))}
            </ul>

            {/* // right one */}
            <ul
              x-ref="logos"
              className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll-ltr-fast md:animate-infinite-scroll-ltr"
            >
              {clientsb.map((item,index) => (
                <li key={`rtl-${index}`}>
                  <div className="   p-4 rounded-md md:w-[200px]">
                    <img
                      src={item.imagePath}
                      alt={item.name}
                      className="md:h-[100px] md:w-[100px] h-[80px] w-[80px] mx-auto object-contain"
                    />
                  </div>
                </li>
              ))}
              {/* Duplicate content */}
              {clientsb.map((item, index) => (
                <li key={`rtl-duplicate-${index}`} className="mx-2">
                  <div className="p-4 rounded-md md:w-[200px]">
                    <img
                      src={item.imagePath}
                      alt={item.name}
                      className="md:h-[100px] md:w-[100px] h-[80px] w-[80px] object-contain mx-auto"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
