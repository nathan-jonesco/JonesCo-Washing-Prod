import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us | JonesCo Gutters</title>
        <meta name="description" content="Learn about JonesCo Gutters, our journey, and commitment to quality and customer satisfaction." />
      </Head>
      
      <div className="w-full h-64 bg-center bg-cover" style={{ backgroundImage: "url('https://i.imgur.com/Wiis4b4.jpeg')" }}></div>

      
      <div className="py-8 text-white bg-JonesCo-Blue-900 sm:py-16">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
              Who's John Jones? 💪
            </h1>
            <p className="mt-4 text-lg leading-8 sm:text-xl lg:text-2xl text-JonesCo-Green-200">
              From Mechanic to Nurse to Gutter Expert
            </p>
          </div>
          
          <div className="mt-10 sm:mt-12">
            <div className="sm:grid sm:grid-cols-2 sm:gap-8 sm:items-center">
              <div>
                <p className="text-base leading-7 text-white sm:text-lg lg:text-xl">
                  Johnathan Jones, a co-founder of JonesCo Gutters, isn't your typical businessman. Born and raised in the heart of Kentucky, Johnathan started his career as a mechanic, honing his skills in problem-solving and meticulous craftsmanship. He spent countless hours in the garage, learning the intricacies of machinery and developing a keen eye for detail. This early experience laid the foundation for his future endeavors.
                </p>
                <p className="mt-6 text-base leading-7 text-white sm:text-lg lg:text-xl">
                  Driven by a desire to help others, Johnathan later transitioned to nursing, where he learned the importance of compassion, empathy, and putting people's needs first. As a nurse, he provided care and support to those in need, always going above and beyond to ensure their well-being. This role taught him invaluable lessons about the importance of patience, dedication, and the impact of a helping hand.
                </p>
                <p className="mt-6 text-base leading-7 text-white sm:text-lg lg:text-xl">
                  These values are at the core of JonesCo Gutters. Johnathan's journey taught him that every job, no matter how big or small, deserves the utmost care and attention to detail. He brings the same passion and dedication he had as a mechanic and nurse to every gutter installation and repair. His commitment to excellence is reflected in the quality of work provided by JonesCo Gutters, ensuring that every customer's home is protected from water damage with precision and care.
                </p>
                <p className="mt-6 text-base leading-7 text-white sm:text-lg lg:text-xl">
                  When you choose JonesCo Gutters, you're not just getting a service; you're becoming part of Johnathan's commitment to quality, integrity, and customer satisfaction. Our team is dedicated to delivering top-notch service, using the best materials and techniques to ensure your gutters are durable, efficient, and aesthetically pleasing. We take pride in our work and strive to exceed your expectations with every project we undertake.
                </p>
                <p className="mt-6 text-base leading-7 text-white sm:text-lg lg:text-xl">
                  At JonesCo Gutters, we understand that your home is one of your most significant investments, and we treat it with the respect it deserves. Our meticulous attention to detail, combined with our expertise and experience, guarantees that your gutter system will perform flawlessly for years to come. Whether you need a new gutter installation, repair, or maintenance, we are here to provide reliable and professional services tailored to your specific needs.
                </p>
                <p className="mt-6 text-base leading-7 text-white sm:text-lg lg:text-xl">
                  Our journey doesn't stop at providing exceptional gutter services. We are continually learning and improving to stay ahead of industry trends and offer innovative solutions to our customers. Our commitment to sustainability and eco-friendly practices ensures that we not only protect your home but also contribute to a healthier environment. We believe in building long-lasting relationships with our customers, based on trust, transparency, and exceptional service.
                </p>
                <p className="mt-6 text-base leading-7 text-white sm:text-lg lg:text-xl">
                  Thank you for considering JonesCo Gutters. We look forward to the opportunity to serve you and demonstrate our commitment to excellence. Join our family of satisfied customers and experience the difference that quality craftsmanship and dedicated service can make. From our family to yours, we are here to protect your home and enhance its beauty with seamless gutter solutions.
                </p>
              </div>
              <div className="relative flex justify-center mt-10 sm:mt-0 sm:ml-10">
                <Image
                  className="object-cover rounded-lg shadow-lg"
                  src="/Stock/john.webp"
                  alt="Johnathan Jones"
                  width={400}
                  height={500}
                  quality={90}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}