import Arrivals from "./components/newArrivals/Arrivals";
import Brands from "./components/brands/Brands";
import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Sale from "./components/sale/Sale";
import Favourite from "./components/favourite/Favourite";
import MobileApp from "./components/mobileApp/MobileApp";
import Community from "./components/community/Community";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Sale />
      <Favourite />
      <MobileApp />
      <Community />
      <Footer />
    </div>
  );
}

export default App;