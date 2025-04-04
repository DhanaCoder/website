"use client";
import Navbar from "./component/navbar";
import Hero from "./component/hero";
import Feature from "./component/feature";
import Reviews from "./component/reviews";
import About from "./component/about";
import Footer from "./component/footer";
import ScrollTimeline from "./component/ScrollTimeline";

const Page = () => {
  return (
    <>
      <ScrollTimeline />

      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="feature">
        <Feature />
      </section>
      <section id="reviews">
        <Reviews />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
};

export default Page;
