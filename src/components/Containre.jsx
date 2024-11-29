import Navbar from "./Navbar";

const Container = ({ children, mainStyle, heading,para }) => {
    return (
      <>
        <div className="w-full h-full">
          <Navbar headind={heading} para={para} />
          <div className="w-full lg:w-full">
            <div className={`${mainStyle} bg-BackgroundColor `}>{children}</div>
          </div>
        </div>
      </>
    );
  };
  
  export default Container;