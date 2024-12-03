import React from "react";
import Container from "../../components/Container";
import { Card } from "flowbite-react";

const Blog = () => {
  return (
    <Container>
      <div className="max-w-[80%] mx-auto py-12">
        <div>
          <Card
            className="max-w-sm"
            imgSrc="/images/blog/image-4.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Name of the Blog
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Trust us to deliver reliable solutions, exceptional service, and
              peace of mind for all your HVAC needs.
            </p>
            <button>Continue reading</button>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Blog;
