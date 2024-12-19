// import React, { useEffect, useState } from "react";
// import Container from "../../components/Container";
// import ComfortCooling from "./components/ComfortCooling";
// import ProcessCoolong from "./components/ProcessCoolong";
// import ColdChainStorage from "./components/ColdChainStorage";
// import TurnkeyProjects from "./components/TurnkeyProjects";
// import EnergyOptimization from "./components/EnergyOptimization";
// import OperationMaintenance from "./components/OperationMaintenance";
// import Troubleshooting from "./components/Troubleshooting";
// import { useSearchParams } from "react-router-dom";

// const ServiceDetailPage = () => {
//   const [searchParams] = useSearchParams();
//   const [headings, setHeadings] = useState("");

//   useEffect(() => {
//     // URL se `type` parameter ko read karein
//     const heading = localStorage.getItem("title");
//     setHeadings(heading);
//     const type = searchParams.get("type");
//     if (type) {
//       setHeadings(type);
//     }
//   }, [searchParams, headings]);

//   return (
//     <Container image heading={headings}>
//       {headings == "Comfort Cooling" ? (
//         <ComfortCooling />
//       ) : headings == "Process Cooling" ? (
//         <ProcessCoolong />
//       ) : headings == "Cold Chain Storage" ? (
//         <ColdChainStorage />
//       ) : headings == "Turnkey Projects" ? (
//         <TurnkeyProjects />
//       ) : headings == "Energy Optimization" ? (
//         <EnergyOptimization />
//       ) : headings == "Operation Maintenance" ? (
//         <OperationMaintenance />
//       ) : headings == "Troubleshooting" ? (
//         <Troubleshooting />
//       ) : (
//         ""
//       )}
//     </Container>
//   );
// };

// export default ServiceDetailPage;


import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "../../components/Container";
import ComfortCooling from "./components/ComfortCooling";
import ProcessCoolong from "./components/ProcessCoolong";
import ColdChainStorage from "./components/ColdChainStorage";
import TurnkeyProjects from "./components/TurnkeyProjects";
import EnergyOptimization from "./components/EnergyOptimization";
import OperationMaintenance from "./components/OperationMaintenance";
import Troubleshooting from "./components/Troubleshooting";

const ServiceDetailPage = () => {
  const location = useLocation();
  const [headings, setHeadings] = useState("");

  useEffect(() => {
    // Debugging logs
    console.log("Location changed:", location.search);

    const searchParams = new URLSearchParams(location.search);
    const type = searchParams.get("type");

    // Set headings based on the `type` parameter from URL
    if (type) {
      setHeadings(type);
    } else {
      // Fallback to `localStorage` if `type` is not in the URL
      const storedHeading = localStorage.getItem("title");
      if (storedHeading) {
        setHeadings(storedHeading);
      }
    }
  }, [location.search]); // Only depend on `location.search`

  const renderComponent = () => {
    switch (headings) {
      case "Comfort Cooling":
        return <ComfortCooling />;
      case "Process Cooling":
        return <ProcessCoolong />;
      case "Cold Chain Storage":
        return <ColdChainStorage />;
      case "Turnkey Projects":
        return <TurnkeyProjects />;
      case "Energy Optimization":
        return <EnergyOptimization />;
      case "Operation Maintenance":
        return <OperationMaintenance />;
      case "Troubleshooting":
        return <Troubleshooting />;
      default:
        return <div>No component to display</div>;
    }
  };

  return (
    <Container image heading={headings} key={headings}>
      {renderComponent()}
    </Container>
  );
};

export default ServiceDetailPage;
