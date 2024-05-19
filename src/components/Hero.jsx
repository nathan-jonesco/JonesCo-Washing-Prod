// components/Hero.jsx

export default function Hero() {
  return (
    <div className="relative text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-pan-slow"
        style={{
          backgroundImage: `url(/Stock/home-10.webp)`,
          height: '600px'
        }}
      ></div>
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="container mx-auto py-32 px-4 text-center relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg mt-20">
          Got Gutter Problems?
        </h1>
        <p className="text-md md:text-xl mb-8 drop-shadow-md">
          Protect your home and enjoy peace of mind with our professional gutter solutions.
        </p>
        <div className="flex justify-center space-x-4 mt-12">
          <a
            href="tel:4239007901"
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 006.105 6.105l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now
          </a>
          <a
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-JonesCo-Blue-700 hover:bg-JonesCo-Blue-600 text-white font-bold py-3 px-3 rounded-full transform transition-transform duration-300 hover:scale-110 hover:shadow-lg active:scale-95 focus:outline-none focus:ring focus:ring-JonesCo-Blue-300 animate-pulse"
          >
            Book Free Estimate
          </a>
        </div>
      </div>
    </div>
  );
}
