import Category from "../Components/Category"
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
    </div>
  )
}

export default HomePage
