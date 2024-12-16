import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import { IMAGES } from "../../utils/Images";
import { Products } from "../../utils/DummyData";
import Container from "../../components/Container";

const ProjectDetailPage = () => {
  const { id } = useParams();
  console.log("id================>", id);

  const [isReadMore, setIsReadMore] = useState(true);
  const [mainImage, setMainImage] = useState(
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
  );
  

  const text = "Boba etiam ut bulla tea est potus dilectus singulari compositione saporum et textuum, quae in Taiwan annis 1980 orta sunt. Boba refert ad pilas masticas tapiocas in fundo potus inventas, quae typice lacte tea nigro sapiuntur. Boba phaenomenon.";

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const changeMainImage = (src) => {
    setMainImage(src);
  };
  console.log(IMAGES.PRODUCT1);

  const images = [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
  ];

  // const images = [
  //   IMAGES.PRODUCT1,
  //   IMAGES.PRODUCT2,
  //   IMAGES.PRODUCT3,
  //   IMAGES.PRODUCT4,
  // ];


  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images?.length);
    setMainImage(images[(currentIndex + 1) % images?.length]);
  };

  const goToPreviousImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    setMainImage(images[(currentIndex - 1 + images.length) % images.length]);
  };

  function categoryFruits(id) {
    return Products.filter(obj => obj.id === id)
  }
  const [cardData, setCardData] = useState(categoryFruits(id))

  console.log(cardData);

  return (
    <Container>
      <div className=" w-[80%] mx-auto px-4 py-8">
        <div className="flex md:flex-row flex-col md:items-start items-center  justify-center gap-4  w-full">
          {/* Main Image Section */}
          <div className="2xl:w-[40%] w-full px-4 lg:mb-4">
            <img
              draggable={false}
              src={mainImage}
              alt="Product"
              className="w-full h-auto rounded-lg shadow-md mb-4"
              id="mainImage"
            />
            <div className="flex gap-4 items-center justify-evenly overflow-x-auto p-2 w-full">
              {/* Thumbnail Images */}
              <img
                draggable={false}
                src="https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Thumbnail 1"
                className="md:w-[100px] md:h-[80px]  w-[50px]  rounded-md cursor-pointer"
                onClick={() =>
                  changeMainImage(
                    "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080"
                  )
                }
              />
              <img
                draggable={false}
                src="https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Thumbnail 2"
                className="md:w-[100px] md:h-[80px]  w-[50px]  rounded-md cursor-pointer"
                onClick={() =>
                  changeMainImage(
                    "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                  )
                }
              />
              <img
                draggable={false}
                src="https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Thumbnail 3"
                className="md:w-[100px] md:h-[80px]  w-[50px]  rounded-md cursor-pointer"
                onClick={() =>
                  changeMainImage(
                    "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                  )
                }
              />
              <img
                draggable={false}
                src="https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Thumbnail 4"
                className="md:w-[100px] md:h-[80px]  w-[50px]  rounded-md cursor-pointer"
                onClick={() =>
                  changeMainImage(
                    "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                  )
                }
              />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center flex-row  md:flex-col gap-6 w-full sm:w-[5%] mb-2">
            <Button
              btnStyle="flex items-center justify-center text1 text-black rounded-md bg-backgroundColor11 rounded-2xl lg:font-semibold"
              title="<"
              onclick={goToPreviousImage}
            />
            <Button
              btnStyle="flex p-[20px] items-center justify-center text1 text-black rounded-md bg-backgroundColor11 rounded-2xl lg:font-semibold"
              title=">"
              onclick={goToNextImage}
            />
          </div>

          {/* Product Info Section */}
          

          <div className="2xl:w-[40%] w-full  px-4">
            <div className="flex justify-between items-center">
              <h2 className="heading5 mb-2">Product Name</h2>
              <p className="heading5 text-backgroundColor1" >$28.00</p>
            </div>
            <div className="my-5">
              <p className="heading7" >Model No: <span className="font-semibold">5647</span></p>
              <p className="heading7">Brand Name: <span className="font-semibold">Name of Brand</span></p>
            </div>
            <div className="w-full border-[1px] border-dashed border-text6  my-5"></div>
            <div className="my-5">
              <p className="heading7 font-semibold " >Description:</p>
              {isReadMore ? <p className="text-text7">{text.slice(0, 150)}</p> : <p className="text-text7">{text}</p>}
              <p className="heading7 font-semibold" >
                {text.length > 150 && (
                  <span
                    className="cursor-pointer underline"
                    onClick={toggleReadMore}
                  >
                    {isReadMore ? "See More..." : "See Less"}
                  </span>
                )}
              </p>

              <Button
                btnStyle="my-5 text1 text-btnColor rounded-full   border-btnColor border-[1px] rounded-2xl lg:font-semibold "
                title="Stock Available"
              />
            </div>
          </div>

        </div>
      </div>
    </Container>
  );
};

export default ProjectDetailPage;