import NavBar from "../component/layouts/NavBar";
import MortigoResort from "../component/MortigoResort";
import AboutTheResort from "../component/AboutTheResort";
import ThingsToDo from "../component/ThingsToDo";
import HappyFamily from "../component/HappyFamily";
import Footer from "../component/Footer";
const About = () => {
  return (
    <>
      <NavBar />
      <main className="mt-10 m-auto max-w-[1141px] px-5">
        <MortigoResort />
        <AboutTheResort />
        <ThingsToDo />
        <HappyFamily />
      </main>
      <Footer />
    </>
  );
};

export default About;
