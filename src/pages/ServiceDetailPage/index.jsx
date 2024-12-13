import React from "react";
import { IMAGES } from "../../utils/Images";
import Container from "../../components/Container";
import ComfortCooling from "./components/ComfortCooling";
import { head } from "motion/react-client";
import ProcessCoolong from "./components/ProcessCoolong";
import ColdChainStorage from "./components/ColdChainStorage";
import TurnkeyProjects from "./components/TurnkeyProjects";
import EnergyOptimization from "./components/EnergyOptimization";
import OperationMaintenance from "./components/OperationMaintenance";
import Troubleshooting from "./components/Troubleshooting";

const ServiceDetailPage = () => {
  const headings = localStorage.getItem("title")
  return (
    <Container image heading={headings} >
      {
        headings=="Comfort Cooling"?
        <ComfortCooling />:
        headings=="Process Cooling"?
        <ProcessCoolong/>:
        headings=="Cold Chain Storage"?
        <ColdChainStorage/>:
        headings=="Turnkey Projects"?
        <TurnkeyProjects/>:
        headings=="Energy Optimization"?
        <EnergyOptimization/>:
        headings=="Operation Maintenance"?
        <OperationMaintenance/>:
        headings=="Troubleshooting"?
        <Troubleshooting/>:""
      }

    </Container>
  );
};

export default ServiceDetailPage;