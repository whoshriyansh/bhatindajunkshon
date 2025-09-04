import AwardsSection from "./components/AwardsSection";
import DishesSection from "./components/DishesSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MenuSection from "./components/MenuSection";
import Navbar from "./components/Navbar";
import ReviewSection from "./components/ReviewSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MenuSection />
      <AwardsSection />
      <ReviewSection />
      <DishesSection />
      <Footer />
    </>
  );
}

export default App;
