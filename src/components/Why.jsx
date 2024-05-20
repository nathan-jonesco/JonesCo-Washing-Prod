import { CheckCircleIcon } from '@heroicons/react/24/outline';
import Script from 'next/script';

export default function ConvertCTA() {
  return (
    <div className="bg-JonesCo-Blue-900 py-16 px-4 text-white">
      <div className="container mx-auto text-center">
        <CheckCircleIcon className="h-12 w-12 text-green-400 mx-auto mb-6 animate-bounce" />
        <h2 className="text-4xl font-bold mb-4 animate-pulse">
          Don't Wait – Protect and Enhance Your Property Now!
        </h2>
        <p className="text-lg mb-8">
          Join hundreds of satisfied customers who have experienced the JonesCo difference. Request a free, no-obligation quote today!
        </p>
        <div className="relative mx-auto max-w-xl lg:max-w-4xl">
          <div id="1b0129bf-9730-46bf-9d7c-a34501f74690"></div>
          <link rel="stylesheet" href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css" media="screen" />
          <Script 
            src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js" 
            clienthub_id="1b0129bf-9730-46bf-9d7c-a34501f74690" 
            form_url="https://clienthub.getjobber.com/client_hubs/1b0129bf-9730-46bf-9d7c-a34501f74690/public/work_request/embedded_work_request_form" 
          />
        </div>
        <div className="mt-12">
          <a
            href="/contact"
            className="bg-JonesCo-Orange-500 hover:bg-JonesCo-Orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-110"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  );
}
