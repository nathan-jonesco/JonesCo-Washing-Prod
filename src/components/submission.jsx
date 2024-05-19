import { CheckCircleIcon } from '@heroicons/react/24/solid'; // Import the icon

export default function EstimateConfirmation() {
  return (
    <div className="bg-JonesCo-Green-100 py-24 px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <CheckCircleIcon className="mx-auto h-16 w-16 text-JonesCo-Green-500 mb-6" />
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Thank You!</h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Your request for a free estimate has been submitted successfully.
        </p>
        <p className="mt-6 text-lg text-gray-600">
          A member of our team will be in touch with you shortly to schedule a convenient time for your consultation.
        </p>
        <p className="mt-8 text-lg text-gray-600">
          In the meantime, feel free to explore our website to learn more about our services or check out our social media pages for tips and inspiration!
        </p>
      </div>
    </div>
  );
}
