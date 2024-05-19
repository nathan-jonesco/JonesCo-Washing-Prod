import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-r from-JonesCo-Blue-500 to-JonesCo-Green-700 text-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-JonesCo-Green-200">
            Meet the Man Behind the Gutters
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            From Mechanic to Nurse to Gutter Expert
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl sm:mt-16 lg:mt-24 lg:max-w-4xl">
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="lg:pr-4">
              <p className="text-xl text-gray-200">
                Jonathan Jones, the founder of JonesCo Gutters, isn&apos;t your typical businessman. Born and raised in the heart of Kentucky, Jonathan started his career as a mechanic, honing his skills in problem-solving and meticulous craftsmanship.
              </p>
              <p className="mt-6 text-xl text-gray-200">
                Driven by a desire to help others, he later transitioned to nursing, where he learned the importance of compassion, empathy, and putting people&apos;s needs first.
              </p>
              <p className="mt-6 text-xl text-gray-200">
                These values are at the core of JonesCo Gutters. Jonathan&apos;s journey taught him that every job, no matter how big or small, deserves the utmost care and attention to detail. He brings the same passion and dedication he had as a mechanic and nurse to every gutter installation and repair.
              </p>
              <p className="mt-6 text-xl text-gray-200">
                When you choose JonesCo Gutters, you&apos;re not just getting a service; you&apos;re becoming part of Jonathan&apos;s commitment to quality, integrity, and customer satisfaction.
              </p>
            </div>
            <div className="mt-10 lg:mt-0 lg:ml-10 relative"> {/* Added relative positioning */}
              <div className="absolute inset-0 bg-black/30 rounded-lg"></div> {/* Dark overlay */}
              <Image
                className="rounded-lg shadow-lg relative z-10"  // Added relative positioning and z-index
                src="/Stock/john.webp"
                alt="Gutter Scene"
                width={400}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
