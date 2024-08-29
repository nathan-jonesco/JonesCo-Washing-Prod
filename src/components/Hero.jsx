'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'
import dynamic from 'next/dynamic'

const LoadScript = dynamic(
  () => import('@react-google-maps/api').then((mod) => mod.LoadScript),
  { ssr: false },
)
const Autocomplete = dynamic(
  () => import('@react-google-maps/api').then((mod) => mod.Autocomplete),
  { ssr: false },
)

const libraries = ['places']

export default function StickyButtonWithModal() {
  const [showModal, setShowModal] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [addressSelected, setAddressSelected] = useState(false);
  
  const autocompleteRef = useRef(null);

  const [formData, setFormData] = useState({
    Name: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    county: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!addressSelected) {
      alert('Please select a valid address from the suggestions.');
      return;
    }

    const zapierWebhookUrl = 'https://hooks.zapier.com/hooks/catch/19076579/2tufknd/';
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
          Name: '',
          email: '',
          phone: '',
          street: '',
          city: '',
          state: '',
          zip: '',
          county: '',
          address: '',
        });
        setShowModal(false);
        setShowThankYouModal(true);
        setAddressSelected(false);
      } else {
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  const onPlaceChanged = () => {
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
        if (types.includes('administrative_area_level_2')) acc.county = component.long_name;
        return acc;
      }, {});

      setFormData((prevData) => ({
        ...prevData,
        street: `${addressComponents.street_number || ''} ${addressComponents.route || ''}`.trim(),
        city: addressComponents.city || '',
        state: addressComponents.state || '',
        zip: addressComponents.zip || '',
        county: addressComponents.county || '',
        address: place.formatted_address,
      }));

      setAddressSelected(true);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    setFormData({
      Name: '',
      email: '',
      phone: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      county: '',
      address: '',
    });
    setAddressSelected(false);
  };

  return (
    <>
      <button
        className="fixed bottom-8 right-8 z-20 rounded-full bg-orange-900 p-4 text-white shadow-lg focus:outline-none"
        onClick={() => setShowModal(true)}
      >
        Request Estimate
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-950 bg-opacity-70">
          <div className="relative z-10 w-full max-w-lg rounded-lg bg-white p-8 shadow-lg mx-5">
            <button
              className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
              onClick={handleModalClose} // Close the modal using this handler
            >
              &times;
            </button>
            <h2 className="mb-4 text-center text-2xl font-black tracking-tight text-blue-950 sm:text-3xl">
              Request a Free Estimate
            </h2>
            <p className="mb-4 text-center text-gray-700">
              Complete this form, we'll do the rest!
            </p>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label
                    htmlFor="Name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    name="Name"
                    id="Name"
                    autoComplete="name"
                    value={formData.Name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 bg-neutral-100 text-blue-950 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
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
                    className="mt-1 block w-full rounded-md border-gray-300 bg-neutral-100 text-blue-950 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
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
                    className="mt-1 block w-full rounded-md border-gray-300 bg-neutral-100 text-blue-950 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
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
                        className="mt-1 block w-full rounded-md border-gray-300 bg-neutral-100 text-blue-950 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </Autocomplete>
                  </LoadScript>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-orange-900 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showThankYouModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative z-10 w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
            <button
              className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowThankYouModal(false)}
            >
              &times;
            </button>
            <h2 className="mb-4 text-center text-2xl font-black tracking-tight text-blue-950 sm:text-3xl">
              Thank You!
            </h2>
            <p className="mb-4 text-center text-gray-700">
              Your request has been submitted. We will reach out to you as soon as possible.
            </p>
            <button
              className="mx-auto mt-4 block rounded-md bg-orange-900 px-4 py-2 text-white hover:bg-blue-700"
              onClick={() => setShowThankYouModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
