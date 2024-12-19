import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import { IMAGES } from "../../utils/Images";
import { Products } from "../../utils/DummyData";
import Container from "../../components/Container";
import { fetchProdBrandById, fetchProductById } from "../../api";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [images, setImages] = useState([]);
  const [mainImage, setMainImage] = useState(
    ""
  );
  
       const fetchProduct = async () => {
           
       try {
           const response = await fetchProductById(id);
           const productImages = response?.images?.map((img) => img.path) || [];

           setProduct(response?.product); 
           setImages(productImages);
           setMainImage(response?.product?.imagePath);
              
       } catch (error) {
           console.error("Error fetching products:", error);
       }
       };
       useEffect(() => {
        fetchProduct(); // Fetch brands once
       }, []);
  
  console.log("id================>", id);

  const [isReadMore, setIsReadMore] = useState(true);
  // const [mainImage, setMainImage] = useState(
  //   "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
  // );
  

  const text = "Boba etiam ut bulla tea est potus dilectus singulari compositione saporum et textuum, quae in Taiwan annis 1980 orta sunt. Boba refert ad pilas masticas tapiocas in fundo potus inventas, quae typice lacte tea nigro sapiuntur. Boba phaenomenon.";

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  // const changeMainImage = (src) => {
  //   setMainImage(src);
  // };
  const changeMainImage = (image) => {
    setMainImage(image);
    setCurrentIndex(images.indexOf(image));
  };
  // const images = [
  //   "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
  //   "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080",
  //   "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
  //   "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
  //   "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
  // ];

  // const images = [
  //   IMAGES.PRODUCT1,
  //   IMAGES.PRODUCT2,
  //   IMAGES.PRODUCT3,
  //   IMAGES.PRODUCT4,
  // ];
  const getAvailabilityText = (status) => {
    switch (status) {
      case 'instock':
        return 'Stock Available';
      case 'outofstock':
        return 'Out Of Stock';
      case 'inorder':
        return 'In Order';
      default:
        return 'Status Unknown';
    }
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setMainImage(images[(currentIndex + 1) % images.length]);
  };

  // Handle Previous Image
  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setMainImage(images[(currentIndex - 1 + images.length) % images.length]);
  };
  function categoryFruits(id) {
    return Products?.filter(obj => obj.id === id)
  }
  const [cardData, setCardData] = useState(categoryFruits(id))
  return (
    <Container>
      <div className=" w-[80%] mx-auto px-4 py-8">
        <div className="flex md:flex-row flex-col md:items-start items-center justify-center gap-4 w-full relative">

          {/* Main Image Section */}
          <div className="2xl:w-[40%] w-full px-4 lg:mb-4 relative">
            <img
              draggable={false}
              src={mainImage}
              alt="Product"
              className="w-full md:h-[350px] h-[200px] rounded-lg shadow-md mb-4 cursor-pointer"
              id="mainImage"            
            />
            <div className="absolute top-1/3 md:left-4 left-2 z-10 transform  -translate-y-1/2 ">
              <Button
                btnStyle="flex items-center justify-center heading5  text-backgroundColor2 border font-bold rounded-md  rounded-2xl lg:font-semibold"
                title="<"
                onclick={goToPreviousImage}
              />
            </div>
            <div className="absolute top-1/3 md:right-4 right-2 z-10 transform -translate-y-1/2">
              <Button
                btnStyle="fle items-center justify-center heading5  text-backgroundColor2 border font-bold rounded-md  rounded-2xl lg:font-semibold"
                title=">"
                onclick={goToNextImage}
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-4 items-center justify-evenly overflow-x-auto p-2 w-full">
              {images.map((image, index) => (
                <img
                  key={index}
                  draggable={false}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="md:w-[100px] md:h-[80px] w-[50px] rounded-md cursor-pointer"
                  onClick={() => changeMainImage(image)}
                />
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="2xl:w-[40%] w-full px-4">
            <div className="flex justify-between items-center">
              <h2 className="heading5 mb-2">{product?.name}</h2>
              {/* <p className="heading5 text-backgroundColor1">$28.00</p> */}
            </div>

            <div>
              <img src={IMAGES.PROJECTLOGOONE} alt={IMAGES.PROJECTLOGOONE} className="w-[40px] h-[40px]" />
            </div>
            <div className="my-5">
              <p className="heading7">Model no: <span className="font-semibold">{product?.model}</span></p>
              <p className="heading7">Part no: <span className="font-semibold">{product?.part}</span></p>
              <p className="heading7">Serial no: <span className="font-semibold">{product?.sr_nop}</span></p>
              <p className="heading7">Capacity: <span className="font-semibold">{product?.capacity}</span></p>
              {/* <p className="heading7">Brand Name: <span className="font-semibold">{product?.brandId?.name}</span></p> */}
            </div>
            <div className="w-full border-[1px] border-dashed border-text6 my-5"></div>
            <div className="my-5">
              <p className="heading7 font-semibold">Description:</p>
              {isReadMore ? <p className="text-text7">{product?.detail?.slice(0, 150)}</p> : <p className="text-text7">{product?.detail}</p>}
              <p className="heading7 font-semibold">
                {product?.detail?.length > 150 && (
                  <span
                    className="cursor-pointer underline"
                    onClick={toggleReadMore}
                  >
                    {isReadMore ? "See More..." : "See Less"}
                  </span>
                )}
              </p>

              <Button
                btnStyle="my-5 text1 text-btnColor rounded-full border-btnColor border-[1px] rounded-2xl lg:font-semibold"
                title="Stock Available"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal Section */}
      {/* {isModalOpen && (
        <div
          id="modal"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <img
              src={mainImage}
              alt="Modal Image"
              className="max-w-[80vw] max-h-[80vh] object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-xl"
              onClick={() => setIsModalOpen(false)}
            >
              X
            </button>
          </div>
        </div>
      )} */}
    </Container>
  );
};

export default ProjectDetailPage;