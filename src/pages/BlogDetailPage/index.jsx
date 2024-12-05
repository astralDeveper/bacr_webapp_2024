import React from "react";
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

const BlogDetailPage = () => {
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
          <img src={IMAGES.BLOG} alt={IMAGES.BLOG} />
        </div>
        <div className="py-6">
          {blogDetailTable.map((item, idx) => (
            <div className="font-poppins" key={idx}>
              <h1 className="heading5 py-2">{item.heading}</h1>
              {item.links.map((item, idx) => (
                <p className="text1 py-1 text-text7" key={idx}>
                  {item.link}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Introduction section start here  */}
        <div className="mt-10 font-poppins">
          <h1 className="heading5 py-2">
            Introduction: Understanding HVAC Systems
          </h1>
          <p className="text1 text-text7">{para}</p>
          <br />
          <p className="text1 text-text7">{para2}</p>
        </div>

        {/* Introduction section start here  */}
        <div className="font-poppins py-8">
          <h1 className="heading5 py-2">What Does HVAC Stand For?</h1>
          <p className="text1 text-text7">{para3}</p>
          <br />
          <div className="text1">
            <li className="text-text7">
              <span className="font-bold">Heating:</span> Typically provided by
              furnaces or heat pumps, heating raises indoor temperatures during
              colder months.
            </li>
            <li className="text-text7">
              <span className="font-bold">Ventilation:</span> Ensures fresh air
              enters a space while removing pollutants, moisture, and odors.
            </li>
            <li className="text-text7">
              <span className="font-bold">Air Conditioning:</span> Cools the air
              during warmer months, often through central AC units or ductless
              systems.
            </li>
          </div>
          <br />
          <p className="text1 text-text7">{para4}</p>
        </div>

        {/* HVAC system section start here  */}
        <div className="font-poppins py-8">
          <h1 className="heading5 py-2">Components of an HVAC System</h1>
          <p className="text1 text-text7">{para5}</p>
          <br />
          <div className="text1 text-text7">
            <p>
              <span className="font-bold">1. Air Conditioner:</span> Used to
              cool the air by removing heat and humidity, especially during the
              summer months.
            </p>
            <p>
              <span className="font-bold">2. Furnace:</span> Generates heat by
              burning a fuel source (usually natural gas or propane) to warm the
              home.
            </p>
            <p>
              <span className="font-bold">3. Heat Pump:</span> An
              energy-efficient alternative to furnaces that can both heat and
              cool the home by transferring heat.
            </p>
            <p>
              <span className="font-bold">4. Ductwork:</span> Distributes
              conditioned air throughout the building.
            </p>
            <p>
              <span className="font-bold">5. Thermostat:</span> The control
              system that allows users to set and regulate the desired
              temperature.
            </p>
            <p>
              <span className="font-bold">6. Humidifier/Dehumidifier:</span>{" "}
              Adjusts moisture levels in the air to improve comfort and health.
            </p>
          </div>
          <br />
          <p className="text1 text-text7">{para6}</p>
        </div>
        {/* HVAC system section end here  */}

        {/* type of HVAC system section start here  */}
        <div className="font-poppins py-8">
          <h1 className="heading5 py-2">Types of HVAC Systems</h1>
          <div>
            {SplitData.map((item, idx) => (
              <div className="mt-4 text-text7" key={idx}>
                <h1 className="font-bold">{item.heading}</h1>
                <p className="text1 pb-3">{item.para}</p>
              </div>
            ))}
          </div>
        </div>
        {/* type of HVAC system section end here  */}

        {/* HVAC system work section start here  */}
        <div className="font-poppins py-8">
          <h1 className="heading5 py-2">How HVAC Systems Work</h1>
          <p className="text1 text-text7">{para7}</p>
          <br />
          <div className="text1 text-text7">
            <p>
              <span className="font-bold">1. Heating Mode:</span> The furnace or
              heat pump heats the air, which is then distributed through
              ductwork or delivered directly via mini-split systems.
            </p>
            <p>
              <span className="font-bold">2. Cooling Mode:</span> The air
              conditioner removes warm air from the inside, transfers it
              outdoors, and circulates cooler air into the space.
            </p>
            <p>
              <span className="font-bold">3. Ventilation:</span> The system
              continuously brings in fresh air from outside while filtering and
              distributing conditioned air inside the building.
            </p>
          </div>
          <br />
          <p className="text1 text-text7">{para8}</p>
        </div>
        {/* HVAC system work section end here  */}

        {/* HVAC Maintenance section start here  */}
        <div className="font-poppins py-8">
          <h1 className="heading5 py-2">
            Why Regular HVAC Maintenance is Crucial
          </h1>
          <p className="text1 text-text7">{para9}</p>
        </div>
        {/* HVAC Maintenance section end here  */}

        {/* HVAC system cost section start here  */}
        <div className="font-poppins py-8">
          <h1 className="heading5 py-2">
            How Much Does a New HVAC System Cost?
          </h1>
          <p className="text1 text-text7">{para10}</p>
          <br />
          <div className="text1 text-text7">
            <li>
              <span className="font-bold">A new HVAC system costs</span> for a
              small residential system might range from $5,000 to $7,000.
            </li>
            <li>
              <span className="font-bold">Commercial HVAC systems</span> can
              cost much more, depending on the scope and complexity of the
              project.
            </li>
          </div>
          <br />
          <p className="text1 text-text7">{para11}</p>
        </div>
        {/* HVAC system cost section end here  */}

        {/* HVAC Essential section start here  */}
        <div className="font-poppins py-8">
          <h1 className="heading5 py-2">Conclusion: Why HVAC is Essential</h1>
          <p className="text1 text-text7">{para12}</p>
          <br />
          <p className="text1 text-text7 pb-6">{para13}</p>
        </div>
        {/* HVAC Essential section end here  */}
      </div>
    </Container>
  );
};

export default BlogDetailPage;
