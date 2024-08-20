'use client'
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Feature = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          delay: i * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <section className="py-12 bg-gray-900 text-gray-100 sm:py-12 lg:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">
            We are just getting started!
          </h2>
          <p className="mb-4">
            We are creating a tool that helps you be more productive and
            efficient when building websites and webapps.
          </p>
        </div>
        <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-8 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
          {[
            {
              title: "Realtime Collaboration",
              description:
                "Collaborate in realtime with other editors in a project. See what other editors are doing and edit even a simple text together.",
              icon: (
                <svg
                  className="w-12 h-12 mx-auto text-gray-400 sm:mx-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 8L20 8"
                    stroke="#111827"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M4 16L14 16"
                    stroke="#111827"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                  <ellipse
                    cx="7"
                    cy="8"
                    rx="3"
                    ry="3"
                    transform="rotate(90 7 8)"
                    stroke="#111827"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></ellipse>
                  <ellipse
                    cx="17"
                    cy="16"
                    rx="3"
                    ry="3"
                    transform="rotate(90 17 16)"
                    stroke="#111827"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></ellipse>
                </svg>
              ),
            },
            {
              title: "History of Edits",
              description:
                "Go back and forth through your history of changes and restore your designs to any point in time.",
              icon: (
                <svg
                  className="w-12 h-12 mx-auto text-gray-400 sm:mx-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="13"
                    y="14"
                    width="10"
                    height="2"
                    rx="1"
                    fill="#111827"
                  ></rect>
                  <rect
                    x="7"
                    y="11"
                    width="10"
                    height="6"
                    rx="1"
                    fill="#111827"
                  ></rect>
                  <rect
                    x="11"
                    y="13"
                    width="10"
                    height="6"
                    rx="1"
                    transform="rotate(90 11 13)"
                    fill="#111827"
                  ></rect>
                  <rect
                    x="16"
                    y="12"
                    width="10"
                    height="2"
                    rx="1"
                    fill="#111827"
                  ></rect>
                  <path
                    d="M14 8V8C14 7.58326 14 7.37488 13.9655 7.19144C13.8455 6.5546 13.4245 6.01534 12.8358 5.74455C12.6662 5.66654 12.464 5.616 12.0597 5.51493L12 5.5C11.5388 5.3847 11.3082 5.32706 11.1171 5.233C10.5686 4.96315 10.1737 4.45731 10.0449 3.85979C10 3.65151 10 3.41382 10 2.93845V2"
                    stroke="#111827"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M3 14C3 11.4412 3 10.1618 3.61994 9.28042C3.77954 9.05351 3.96572 8.85041 4.17372 8.6763C4.98164 8 6.15442 8 8.5 8H15.5C17.8456 8 19.0184 8 19.8263 8.6763C20.0343 8.85041 20.2205 9.05351 20.3801 9.28042C21 10.1618 21 11.4412 21 14C21 16.5588 21 17.8382 20.3801 18.7196C20.2205 18.9465 20.0343 19.1496 19.8263 19.3237C19.0184 20 17.8456 20 15.5 20H8.5C6.15442 20 4.98164 20 4.17372 19.3237C3.96572 19.1496 3.77954 18.9465 3.61994 18.7196C3 17.8382 3 16.5588 3 14Z"
                    stroke="#111827"
                    strokeWidth="2"
                  ></path>
                </svg>
              ),
            },
            {
              title: "Integrations",
              description:
                "Step up your designs and workflow with integrations with your favorite tools such as Mailchimp, Slack, Jira, etc.",
              icon: (
                <svg
                  className="w-12 h-12 mx-auto text-gray-400 sm:mx-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 8L20 8"
                    stroke="#111827"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M4 16L14 16"
                    stroke="#111827"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                  <ellipse
                    cx="7"
                    cy="8"
                    rx="3"
                    ry="3"
                    transform="rotate(90 7 8)"
                    stroke="#111827"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></ellipse>
                  <ellipse
                    cx="17"
                    cy="16"
                    rx="3"
                    ry="3"
                    transform="rotate(90 17 16)"
                    stroke="#111827"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></ellipse>
                </svg>
              ),
            },
            {
              title: "Customizable Templates",
              description:
                "Choose from a variety of templates and customize them to match your brand identity.",
              icon: (
                <svg
                  className="w-12 h-12 mx-auto text-gray-400 sm:mx-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 14V16C20 18.2091 18.2091 20 16 20H8C5.79086 20 4 18.2091 4 16V14"
                    stroke="#111827"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M12 12V12C10.2929 12 9 10.7071 9 9C9 7.29289 10.2929 6 12 6V6C13.7071 6 15 7.29289 15 9C15 10.7071 13.7071 12 12 12Z"
                    stroke="#111827"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M7 6H6C4.89543 6 4 6.89543 4 8V14"
                    stroke="#111827"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M16.0042 5.98419C17.1167 5.99908 18.2108 6.0608 19.293 6.16855C19.666 6.2078 19.8999 6.57799 19.8064 6.94649C19.2541 9.12307 17.4908 10.7807 15.3003 11.4364C15.0196 11.5228 14.7208 11.4496 14.5262 11.2416L12.4208 9.00194C12.307 8.87726 12.2687 8.69288 12.3226 8.52763C12.3765 8.36238 12.5157 8.2415 12.6817 8.2143C13.4952 8.08047 14.2155 7.69125 14.7701 7.10484C15.0906 6.77124 15.6614 6.63269 16.0042 5.98419Z"
                    stroke="#111827"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
              ),
            },
            {
              title: "Design System",
              description:
                "Build your own design system with components that can be reused throughout your projects.",
              icon: (
                <svg
                  className="w-12 h-12 mx-auto text-gray-400 sm:mx-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 3V21M3 12H21"
                    stroke="#111827"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="#111827"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></circle>
                </svg>
              ),
            },
            {
              title: "Accessibility",
              description:
                "Ensure your designs are accessible to all users, regardless of their abilities.",
              icon: (
                <svg
                  className="w-12 h-12 mx-auto text-gray-400 sm:mx-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21V16M12 8V3M5 8H19M8 5H16"
                    stroke="#111827"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="#111827"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></circle>
                </svg>
              ),
            },
          ].map((feature, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="flex flex-col p-8 transition-all transform bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto sm:mx-0">
                {feature.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900 sm:mt-10">
                {feature.title}
              </h3>
              <p className="mt-6 text-base text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
