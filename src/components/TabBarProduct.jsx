import Button from "./Button";

const TabBarProduct = ({
    search,
    tabtext1,
    tabtext2,
    tabtext3,
    handleTabChange,
    tab,
    setBrand,
  }) => {
    return (
      <div className="">
        <div className="md:w-[70%] w-full mx-auto flex items-center justify-around bg-backgroundColor9 rounded-lg">
          <Button
            onclick={() => handleTabChange("new")}
            btnStyle={`${
              tab === "new"
                ? "bg-gradient-to-tl to-backgroundColor3 cursor-default from-backgroundColor4 text-backgroundColor2 transition-all duration-500 ease-linear"
                : "text-text4"
            } w-full rounded-md text2 flex-1`}
            title={tabtext1}
          />
          <Button
            onclick={() => handleTabChange("used")}
            btnStyle={`${
              tab === "used"
                ? "bg-gradient-to-tl to-backgroundColor3 cursor-default from-backgroundColor4 text-backgroundColor2 transition-all duration-500 ease-linear"
                : "text-text4"
            } w-full rounded-md text2 flex-1`}
            title={tabtext2}
          />
          <Button
            onclick={() => handleTabChange("spareParts")}
            btnStyle={`${
              tab === "spareParts"
                ? "bg-gradient-to-tl to-backgroundColor3 cursor-default from-backgroundColor4 text-backgroundColor2 transition-all duration-500 ease-linear"
                : "text-text4"
            } w-full rounded-md text2 flex-1`}
            title={tabtext3}
          />
        </div>
        {search && (
          <div className="md:w-[70%] mt-4 w-full mx-auto">
            <input
              type="text"
              placeholder="Search what you want..."
              className="px-10 border-2 w-full md:py-3 py-3 placeholder:text2 rounded-xl text2 outline-none"
              onChange={setBrand} // Directly pass the search handler
            />
          </div>
        )}
      </div>
    );
  };
  
  export default TabBarProduct;
  