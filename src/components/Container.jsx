import Footer from "./Footer";
import Navbar from "./Navbar";

const Container = ({ children, mainStyle, heading, para, home }) => {
  return (
    <>
      <div className="w-full h-full">
        <Navbar heading={heading} para={para} mainStyle={mainStyle} home={home} />
        <div className="w-full lg:w-full">
          <div className={` bg-BackgroundColor `}>{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Container;