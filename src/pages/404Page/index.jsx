import React from "react";
import { IMAGES } from "../../utils/Images";

const ErrorPage = () => {
  const para = ` We’re working on securing the treasures behind this page. Stay
            tuned! In the meantime, feel free to explore other sections of our
            website.`;

  return (
    <div className="w-full h-screen p-10">
      <div>
        <h1>Error 404</h1>
        <h1>
          Oops....
          <h3>Page not found </h3>
          <p>{para}</p>
          <button><img src={IMAGES.LEFTARROW} alt={IMAGES.LEFTARROW} />Back to home</button>
        </h1>
      </div>
    </div>
  );
};

export default ErrorPage;
