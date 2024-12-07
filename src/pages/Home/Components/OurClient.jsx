import React from "react";

export default function OurClient(props) {
  const { title, images } = props;

  return (
    <section className="sm:max-w-[80%] sm:mx-auto px-6 ">
      {title && (
        <h2 className="outfit-font text-[18px] sm:text-[26px] lg:text-[34px] font-bold text-center text-[#031019] mb-4">
          {title}
        </h2>
      )}
      <div className="py-2 w-full ">
        <div className="relative overflow-hidden">
          <div
            x-data="{}"
            x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
            className="w-full inline-flex flex-nowrap overflow-hidden "
            // className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
          >
            <ul
              x-ref="logos"
              className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll"
            >
              {images.map((item) => (
                <li>
                  <div className="border border-gray-400 p-4 rounded-md w-[200px]">
                    <img
                      src={item}
                      alt="Facebook"
                      className="h-[60px] w-[75px] mx-auto"
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
