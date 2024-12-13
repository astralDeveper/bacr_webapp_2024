import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import { projectCardData } from "../../../utils/DummyData";

const ProjectsCardComponent = ({setIsModalOpen,isModalOpen}) => {
  const navigation = useNavigate();

  return (
    <div>
      <div className="bg-Navbar">
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projectCardData.map((item, ind) => {
              return (
                <div
                  key={ind}
                  className="rounded-lg overflow-hidden shadow-md flex flex-col"
                >
                  <div className="relative">
                    <img
                      className="w-full h-[224px] rounded-t-2xl object-cover"
                      src={item.image}
                      alt={item.image}
                      draggable={false}
                    />

                    {/* centered Text */}
                    {/* <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[100%] mx-auto rounded-xl text-white heading4">
                      {item.text}
                    </p> */}

                    {/* Logo positioned half on the image and half below it */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex items-center justify-center bg-white rounded-xl shadow-black shadow-xs">
                      <img
                        className="rounded-lg p-2 object-contain w-[70px] h-[70px]"
                        src={item.logo}
                        alt={item.logo}
                        draggable={false}
                      />
                    </div>
                  </div>

                  <div className="p-3 bg-BackgroundColor1 pt-14">
                  <p className=" w-[100%] mx-auto rounded-xl  text-black heading7">
                      {item.text}
                    </p>

                    <p className="text-text6 text-sm ">
                      {item.description}
                    </p>
                    <div className="mt-10 flex items-center justify-center  rounded-md">
                      <div className=" w-full">
                        {/* <Link
                          to={{
                            pathname: `/detail/${item?.id}`,   
                          }}
                        >
                          
                        </Link> */}
                        <Button
                            btnStyle="bg-backgroundColor1 w-full  text1 text-backgroundColor6 group-hover:bg-backgroundColor2 group-hover:text-backgroundColor1 lg:font-semibold "
                            title="Learn More"
                            onclick={()=>{setIsModalOpen(!isModalOpen)}}
                          />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCardComponent;