import Footer from "./components/Footer";
import JoinUsBanner from "./components/JoinUsBanner";
import LabourPriceList from "./components/LabourPriceList";
import Navbar from "./components/NavBar";
import RSAPackages from "./components/RSAPackages";
import ServiceGrid from "./components/ServiceGrid";
import ServicePackages from "./components/ServicePackages";
import ServiceRequestCard from "./components/ServiceRequestCard";
import WhyChooseUs from "./components/WhyChooseUs";

export default function App() {
  return (
    <>
    <Navbar />
    <ServiceRequestCard />
    <WhyChooseUs />
    <ServiceGrid />
    <ServicePackages />
    <RSAPackages />
    <LabourPriceList />
    <JoinUsBanner />
    <Footer />
    </>
  );
}
