import React from "react";
import Container from "../../components/Container";
import Card from "./Components/Card";

const Blog = () => {
  return (
    <Container >
      <div className="max-w-[80%] mx-auto py-14 font-poppins">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
          <Card />
        </div>
      </div>
    </Container>
  );
};

export default Blog;
