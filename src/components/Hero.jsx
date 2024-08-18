'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import Image from 'next/legacy/image';
import MaggieCleaning from '@/images/Team/Maggie_Cleaning.webp';


const LoadScript = dynamic(() => import('@react-google-maps/api').then(mod => mod.LoadScript), { ssr: false });
const Autocomplete = dynamic(() => import('@react-google-maps/api').then(mod => mod.Autocomplete), { ssr: false });

const libraries = ['places'];

const Hero = () => {
  const router = useRouter();
  const autocompleteRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    street: '',
    city: '',
    state: '',
    country: '',
    zip: '',
  });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onPlaceChanged = useCallback(() => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();
      if (place.address_components) {
        const addressComponents = place.address_components.reduce((acc, component) => {
          const types = component.types;
          if (types.includes('street_number')) acc.street_number = component.long_name;
          if (types.includes('route')) acc.route = component.long_name;
          if (types.includes('locality')) acc.city = component.long_name;
          if (types.includes('administrative_area_level_1')) acc.state = component.short_name;
          if (types.includes('country')) acc.country = component.long_name;
          if (types.includes('postal_code')) acc.zip = component.long_name;
          return acc;
        }, {});
  
        setFormData((prevData) => ({
          ...prevData,
          address: place.formatted_address,
          street: `${addressComponents.street_number || ''} ${addressComponents.route || ''}`.trim(),
          city: addressComponents.city || '',
          state: addressComponents.state || '',
          country: addressComponents.country || '',
          zip: addressComponents.zip || '',
        }));
      }
    }
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const zapierWebhookUrl = 'https://hooks.zapier.com/hooks/catch/19076579/2386szr/';
    const urlEncodedData = new URLSearchParams(formData).toString();

    try {
      const response = await fetch(zapierWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: urlEncodedData,
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          street: '',
          city: '',
          state: '',
          country: '',
          zip: '',
        });
        router.push('/submitted');
      } else {
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div className="relative z-10 flex  items-center justify-center overflow-hidden py-12 ">
      {isDesktop && (
        <Image
          className="object-cover absolute top-0 left-0 w-full h-full"
          src={MaggieCleaning}
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      )}
      <div className="absolute top-0 left-0 pb-2 w-full h-full bg-blue-900 md:opacity-60"></div>
      <div className="relative z-10 mx-4 w-full max-w-7xl sm:mx-auto">
        <div className={`rounded-lg bg-white p-6 shadow-lg ${isDesktop ? 'grid grid-cols-2 gap-8' : 'mx-auto max-w-md'}`}>
          {isDesktop && (
            <div className="flex flex-col justify-between items-center px-10 h-full rounded-xl bg-blue-100">
              <div className="flex-grow">
                <h2 className="mt-8 mb-8 text-2xl font-black tracking-tight text-center text-blue-950 sm:text-3xl">
                  Done Right, The First Time.
                </h2>
                {[
                  'Quality and precision with every project',
                  'Experienced team',
                  'Best materials and techniques',
                  'Meticulous attention to detail',
                  'Solutions tailored to your needs',
                  'Commitment to customer satisfaction',
                  'Trusted by homeowners across Eastern Tennessee',
                ].map((text, index) => (
                  <div key={index} className="flex items-center mb-4">
                    <svg
                      className="mr-4 w-6 h-6 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <p className="text-lg text-gray-700">{text}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col mt-6 mb-4 w-full">
                <div className="hidden flex-col justify-end w-full md:flex">
                  <div className="flex space-x-4">
                    <a
                      href="tel:423.207.2734"
                      className="py-3 w-1/2 text-base font-medium text-center text-white rounded-md border border-transparent shadow-sm animate-pulse bg-blue-600 hover:bg-blue-700"
                    >
                      423.207.2734
                    </a>
                    <a
                      href="mailto:hey@jonescowashing.com"
                      className="py-3 w-1/2 text-base font-medium text-center text-white rounded-md border border-transparent shadow-sm animate-pulse bg-blue-600 hover:bg-blue-700"
                    >
                      hey@jonescowashing.com
                    </a>
                  </div>
                </div>
                <div className="flex flex-col mt-6 space-y-4 md:hidden">
                  <button
                    type="button"
                    className="inline-flex justify-center items-center px-4 py-2 w-full text-base font-medium text-white rounded-md border border-transparent shadow-sm animate-pulse bg-blue-600 hover:bg-blue-700"
                    onClick={() => (window.location.href = 'tel:423-207-3325')}
                  >
                    Call Us
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center items-center px-4 py-2 w-full text-base font-medium text-white rounded-md border border-transparent shadow-sm animate-pulse bg-blue-600 hover:bg-blue-700"
                    onClick={() => (window.location.href = 'mailto:hey@jonescowashing.com')}
                  >
                    Email Us
                  </button>
                </div>
              </div>
            </div>
          )}
          <div>
  <h2 className="mb-4 text-2xl font-black tracking-tight text-center text-blue-950 sm:text-3xl">
    Request a Free Estimate
  </h2>
  <p className="mb-4 text-center text-gray-700">
    Complete this form, we'll do the rest!
  </p>
  <form onSubmit={handleSubmit}>
  <div className="grid grid-cols-1 gap-6">
    <div>
      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
        Full Name <span aria-hidden="true">*</span>
      </label>
      <input
        type="text"
        name="fullName"
        id="fullName"
        autoComplete="name"
        value={formData.fullName}
        onChange={handleChange}
        required
        className="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm text-blue-950 bg-neutral-50"
      />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email Address <span aria-hidden="true">*</span>
      </label>
      <input
        type="email"
        name="email"
        id="email"
        autoComplete="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm text-blue-950 bg-neutral-50"
      />
    </div>
    <div>
      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
        Phone Number <span aria-hidden="true">*</span>
      </label>
      <input
        type="tel"
        name="phone"
        id="phone"
        autoComplete="tel"
        value={formData.phone}
        onChange={handleChange}
        required
        className="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm text-blue-950 bg-neutral-50"
      />
    </div>
    <div>
      <label htmlFor="address" className="block text-sm font-medium text-gray-700">
        Street Address <span aria-hidden="true">*</span>
      </label>
      <LoadScript
        googleMapsApiKey="AIzaSyAgGO-4UJ1-wS6aua__cpo1uVcefrlPaGg"
        libraries={libraries}
        loadingElement={<div>Loading...</div>}
        id="script-loader"
        async
        defer
      >
        <Autocomplete
          onLoad={(ref) => (autocompleteRef.current = ref)}
          onPlaceChanged={onPlaceChanged}
        >
          <input
            type="text"
            name="address"
            id="address"
            autoComplete="street-address"
            value={formData.address}
            onChange={handleChange}
            required
            className="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm text-blue-950 bg-neutral-50"
          />
        </Autocomplete>
      </LoadScript>
    </div>
  </div>
  <div className="mt-6 text-center">
    <button
      type="submit"
      className="inline-flex justify-center items-center px-6 py-3 w-full text-base font-medium text-white rounded-md border border-transparent shadow-sm bg-orange-900 hover:bg-blue-700"
    >
      Submit Request
    </button>
  </div>
</form>

            {!isDesktop && (
              <div className="mt-6 text-center">
                <div className="flex justify-center space-x-4">
                  <button
                    type="button"
                    className="inline-flex justify-center items-center px-4 py-2 w-full text-base font-medium text-white rounded-md border border-transparent shadow-sm animate-pulse bg-blue-600 hover:bg-blue-700"
                    onClick={() => (window.location.href = 'tel:423-207-3325')}
                  >
                    Call Us
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center items-center px-4 py-2 w-full text-base font-medium text-white rounded-md border border-transparent shadow-sm animate-pulse bg-blue-600 hover:bg-blue-700"
                    onClick={() => (window.location.href = 'mailto:hey@jonescowashing.com')}
                  >
                    Email Us
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
