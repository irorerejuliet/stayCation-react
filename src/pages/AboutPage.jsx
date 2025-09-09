import AboutTheResort from "../component/AboutTheResort"
import Footer from "../component/Footer"
import HappyFamily from "../component/HappyFamily"
import NavBar from "../component/layouts/NavBar"
import MortigoResort from "../component/MortigoResort"
import ThingsToDo from "../component/ThingsToDo"

const AboutPage = () => {
  return (
   <>
   <header className="w-full py-5">
    <NavBar/>
    </header>
    <main className="mt-10 m-auto max-w-[1141px] px-5">
      <MortigoResort/>
      <AboutTheResort/>
       <ThingsToDo/>
       <HappyFamily/>
        <Footer/>
    </main>  
 </>
  )
}

export default AboutPage
