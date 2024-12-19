import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import { IMAGES } from "../../utils/Images";
import {
  blogDetailTable,
  para,
  para10,
  para11,
  para12,
  para13,
  para2,
  para3,
  para4,
  para5,
  para6,
  para7,
  para8,
  para9,
} from "../../utils/DummyData";
import { fetchBlogById } from "../../api";
import { useParams } from "react-router-dom";

const BlogDetailPage = () => {
const [blog, setBlog] = useState([]);
const { id } = useParams(); 
     const fetchBlog = async () => {
         
     try {
         const response = await fetchBlogById(id);
         setBlog(response);     
            
     } catch (error) {
         console.error("Error fetching products:", error);
     }
     };
     useEffect(() => {
         fetchBlog(); // Fetch brands once
     }, []);

  const SplitData = [
    {
      heading: "1. Split Systems",
      para: `A split system is the most common type, featuring separate units for heating and cooling. It typically includes an outdoor air conditioner and an indoor furnace or air handler.`,
    },
    {
      heading: "2. Ductless Mini-Split Systems",
      para: `Ideal for homes without ductwork, ductless mini splits use small indoor units connected to an outdoor compressor. This system is energy efficient and provides zoned cooling or heating for individual rooms.`,
    },
    {
      heading: "3. Hybrid Systems",
      para: `Hybrid systems combine a furnace and heat pump, allowing the user to switch between the two for greater energy efficiency depending on the weather conditions.`,
    },
    {
      heading: "4. Packaged Systems",
      para: `Packaged HVAC systems contain all heating and cooling components in one cabinet, making them suitable for smaller spaces where a split system is not practical.`,
    },
  ];

  return (
    <Container
      image
      heading={"What is HVAC? HVAC Definition, Components, and How It Works?"}
    >
      <div className="max-w-[80%] mx-auto">
        <div className="py-8">
          <img src={blog?.imagePath ? blog?.imagePath: IMAGES.THUMBNAIL} alt={IMAGES.BLOG} />
        </div>
        <div
    className="blog-description"
    dangerouslySetInnerHTML={{ __html: blog.description }}
  />
      </div>
    </Container>
  );
};

export default BlogDetailPage;
