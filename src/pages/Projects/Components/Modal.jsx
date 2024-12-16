import React, { useState } from "react";
import { IMAGES } from "../../../utils/Images";

const Modal = ({isModalOpen,setIsModalOpen}) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const [mainImage, setMainImage] = useState(
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
  );

  const text =
    "Boba etiam ut bulla tea est potus dilectus singulari compositione saporum et textuum, quae in Taiwan annis 1980 orta sunt. Boba refert ad pilas masticas tapiocas in fundo potus inventas, quae typice lacte tea nigro sapiuntur. Boba phaenomenon.";

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const changeMainImage = (src) => {
    setMainImage(src);
  };

  const images = [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setMainImage(images[(currentIndex + 1) % images.length]);
  };

  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setMainImage(images[(currentIndex - 1 + images.length) % images.length]);
  };

  return (
    <div className="w-[80%] mx-auto px-4 py-8 border">
      {/* Modal Trigger Button */}

      {/* Modal Structure */}
     
        <div className="fixed inset-0 bg-gray-500 bg-opacity-55 overflow-auto flex justify-center items-center z-50">
          <div className="bg-white w-full md:w-[90%]  md:p-6 p-2 rounded-lg shadow-lg lg:mt-0 mt-24 ">
            {/* Close Modal Button */}
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-text6 p-2 rounded-full"
              >
                <img src={IMAGES.CROSSICON} alt="" className="md:w-[12px] w-[6px]" />
              </button>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              {/* Main Image Section */}
              <div className="w-full md:w-[40%]">
                <img
                  draggable={false}
                  src={mainImage}
                  alt="Product"
                  className="md:w-full w-[200px] h-auto rounded-lg shadow-md mb-4 mx-auto"
                />
                <div className="flex gap-4 items-center md:justify-evenly justify-center overflow-x-auto p-2 w-full">
                  {/* Thumbnail Images */}
                  {images.map((img, index) => (
                    <img
                      key={index}
                      draggable={false}
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="md:w-[114px] md:h-[114px] w-[50px] rounded-md cursor-pointer"
                      onClick={() => changeMainImage(img)}
                    />
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex md:flex-col md:justify-start justify-center items-center gap-6">
                <button
                  onClick={goToPreviousImage}
                  className="text-black p-2  rounded-full bg-gray-300 hover:bg-gray-400 transition-all"
                >
                    {"<"}
                  {/* &lt; */}
                </button>
                <button
                  onClick={goToNextImage}
                  className="text-black p-2  rounded-full bg-gray-300 hover:bg-gray-400 transition-all"
                >
                  &gt;
                </button>
              </div>

              {/* Product Info Section */}
              <div className="w-full md:w-[40%]">
                <img src={IMAGES.PROJECTLOGOONE} alt="" className="md:w-[80px] w-[40px] border p-2 bg-backgroundColor2 rounded-full object-contain" />
                <h2 className="text-2xl font-semibold mb-2">Product Name</h2>
                <div className="my-5">
                  <p className="font-semibold">Description:</p>
                    <p className="text-gray-700">{text}</p>
    
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Modal;
