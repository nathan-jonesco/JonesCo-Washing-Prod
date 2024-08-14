import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zipCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Zapier Webhook URL
    const zapierWebhookUrl = 'https://hooks.zapier.com/hooks/catch/19076579/2386szr/';

    // Convert formData to URL-encoded string
    const urlEncodedData = new URLSearchParams(formData).toString();

    try {
      const response = await fetch(zapierWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: urlEncodedData,
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        // Reset form data
        setFormData({
          name: '',
          email: '',
          phone: '',
          zipCode: '',
        });
      } else {
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div className="bg-JonesCo-Blue-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-black tracking-tight text-JonesCo-Blue-100 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg leading-6 text-JonesCo-Green-300">
            Request a free estimate by filling out the form below. Join the growing list of JonesCo customers.
          </p>
        </div>

        <div className="mt-12">
          <form onSubmit={handleSubmit} className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                  Zip Code
                </label>
                <input
                  type="text"
                  name="zipCode"
                  id="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="mt-6 text-center">
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-JonesCo-Green-600 hover:bg-JonesCo-Blue-700"
              >
                Request Free Estimate
              </button>
            </div>
          </form>
        </div>

        <div className="mt-12 text-center text-JonesCo-Blue-100">
          <p>You can also reach us at:</p>
          <p>
            <a href="tel:423-207-3325" className="text-JonesCo-Green-300 hover:text-JonesCo-Green-500">423-207-3325</a> || 
            <a href="mailto:hey@jonescogutters.com" className="text-JonesCo-Green-300 hover:text-JonesCo-Green-500"> hey@jonescogutters.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
