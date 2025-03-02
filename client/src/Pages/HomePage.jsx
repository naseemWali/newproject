import Category from "../Components/Category"
import Contact from "../Components/Contact"
import HeroSection from "../Components/HeroSection"
import Navbar from "../Components/Navbar"
import RealEstateAgents from "../Components/RealEstateAgents"
import RecentProperties from "../Components/RecentProperties"
import ToolsResources from "../Components/ToolsResources"

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Category/>
      <RecentProperties/>
      <ToolsResources/>
      <RealEstateAgents/>
      <Contact/>
    </div>
  )
}

export default HomePage
