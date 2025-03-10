import NavBar from "../component/layouts/NavBar";
import ShowCase from "../component/ShowCase";
import MostPicked from "../component/MostPicked";
import HouseBacyard from "../component/HouseBacyard";
import HotelRoom from "../component/HotelRoom";
import KitchenApartment from "../component/KitchenApartment";
import HappyFamily from "../component/HappyFamily";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <>
      <NavBar />
      <main className="mt-10 mx-auto max-w-[1141px] md:px-0 px-5">
        <ShowCase />
        <MostPicked />
        <HouseBacyard />
        <HotelRoom />
        <KitchenApartment />
        <HappyFamily />
      </main>
      <Footer />
    </>
  );
};

export default Home;
