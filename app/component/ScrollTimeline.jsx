"use client";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sections = ["hero", "feature", "reviews", "about", "footer"];

const ScrollTimeline = () => {
  useEffect(() => {
    sections.forEach((id) => {
      const dot = document.querySelector(`#dot-${id}`);

      gsap.to(dot, {
        scale: 1.6,
        backgroundColor: "#eed70b",
        duration: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: `#${id}`,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      });
    });
  }, []);

  return (
    <div className="fixed top-1/2 left-8 -translate-y-1/2 flex flex-col gap-5 z-50 pointer-events-none">
      {sections.map((id) => (
        <div
          key={id}
          id={`dot-${id}`}
          className="w-5 h-5 bg-white rounded-full transition-transform duration-300"
        />
      ))}
    </div>
  );
};

export default ScrollTimeline;
