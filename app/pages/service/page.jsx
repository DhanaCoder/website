"use client";

import React from "react";
import Link from "next/link";

const services = [
  {
    title: "Web Development",
    description:
      "Custom web applications tailored to your business needs. We use cutting-edge technologies to deliver fast, responsive, and scalable solutions.",
    delay: 0.1,
    iconPath:
      "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Mobile App Development",
    description:
      "Innovative mobile applications for iOS and Android. We create user-friendly apps that engage your audience and drive business growth.",
    delay: 0.2,
    iconPath:
      "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    title: "Data Analytics",
    description:
      "Turn your data into actionable insights. Our analytics services help you make informed decisions and optimize your business processes.",
    delay: 0.3,
    iconPath:
      "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your digital assets with our comprehensive cybersecurity solutions. We offer threat detection, risk assessment, and security consulting services.",
    delay: 0.4,
    iconPath:
      "M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01",
  },
  {
    title: "Cloud Solutions",
    description:
      "Leverage the power of cloud computing for your business. We provide cloud migration, management, and optimization services to enhance your IT infrastructure.",
    delay: 0.5,
    iconPath:
      "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Harness the power of artificial intelligence and machine learning. We develop smart solutions that automate processes and provide valuable predictions.",
    delay: 0.6,
    iconPath:
      "M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5",
  },
];

const Service = () => {
  return (
    <main className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-center text-black dark:text-white mb-12 animate-fade-in">
        Our Services
      </h1>

      <div className="mb-5 text-center">
        <Link href="/" passHref>
          <button className="px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
            Home
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 animate-fade-in"
            style={{ animationDelay: `${service.delay}s` }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-indigo-800 dark:text-indigo-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={service.iconPath}
              />
            </svg>
            <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-2">
              {service.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Service;
