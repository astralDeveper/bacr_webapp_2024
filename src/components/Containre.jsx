import Footer from "./Footer";
import Navbar from "./Navbar";


const Container = ({ children, mainStyle, name }) => {
    return (
      <>
        <div className="w-full h-full">
          <Navbar />
          <div className="w-full lg:w-full">
            <div className={`${mainStyle} bg-BackgroundColor `}>{children}</div>
          </div>
          <Footer/>
        </div>
      </>
    );
  };
  
  export default Container;