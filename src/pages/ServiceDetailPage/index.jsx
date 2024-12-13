import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import ComfortCooling from "./components/ComfortCooling";
import ProcessCoolong from "./components/ProcessCoolong";
import ColdChainStorage from "./components/ColdChainStorage";
import TurnkeyProjects from "./components/TurnkeyProjects";
import EnergyOptimization from "./components/EnergyOptimization";
import OperationMaintenance from "./components/OperationMaintenance";
import Troubleshooting from "./components/Troubleshooting";
import { useSearchParams } from "react-router-dom";

const ServiceDetailPage = () => {
  const [searchParams] = useSearchParams();
  const [headings, setHeadings] = useState("")


  useEffect(() => {
    // URL se `type` parameter ko read karein
    const heading = localStorage.getItem("title")
    setHeadings(heading)
    const type = searchParams.get("type");
    if (type) {
      setHeadings(type);
    }
  }, [searchParams,headings]);



  return (
    <Container image heading={headings} >
      {
        headings == "Comfort Cooling" ?
          <ComfortCooling /> :
          headings == "Process Cooling" ?
            <ProcessCoolong /> :
            headings == "Cold Chain Storage" ?
              <ColdChainStorage /> :
              headings == "Turnkey Projects" ?
                <TurnkeyProjects /> :
                headings == "Energy Optimization" ?
                  <EnergyOptimization /> :
                  headings == "Operation Maintenance" ?
                    <OperationMaintenance /> :
                    headings == "Troubleshooting" ?
                      <Troubleshooting /> : ""
      }

    </Container>
  );
};

export default ServiceDetailPage;