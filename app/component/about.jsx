import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="sm:flex items-center max-w-screen-xl ">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <Image
              src="https://i.imgur.com/WbQnbas.png"
              alt="About Our Company" // Added alt attribute here
              layout="responsive"
              width={700} // Provide width and height to maintain aspect ratio
              height={475}
            />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
              About us
            </span>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">
              About <span className="text-indigo-600">Our Company</span>
            </h2>
            <p className="text-gray-700">
              Zero.com is a forward-thinking organization dedicated to building
              seamless digital experiences that empower individuals and
              businesses to do more with less. We believe in simplicity,
              innovation, and creating value through smart, intuitive
              technology. Founded with a vision to eliminate digital noise and
              streamline workflows, Zero.com offers tools and solutions designed
              to reduce complexity, enhance productivity, and unlock potential.
              Whether youare a startup, enterprise, or individual creator, weare
              here to help you focus on what truly matters—zero distractions,
              maximum impact. At Zero.com, weare not just building
              products—weare designing a movement toward clarity, efficiency,
              and purpose-driven progress.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
