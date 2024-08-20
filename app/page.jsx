import Hero from "./component/hero"
import Feature from "./component/feature"
import Reviews from "./component/reviews"
import Footer from "./component/footer"
import About from "./component/about"
import Navbar from "./component/navbar"
const page = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <Feature/>
      <Reviews />
      <About/>
      <Footer/>
    </>
  )
}

export default page
