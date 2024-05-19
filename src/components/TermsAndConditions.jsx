// TermsAndConditions.js
import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-white text-gray-800 p-8 max-w-4xl mx-auto my-10 shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Terms & Conditions</h1>

      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p className="text-gray-600">
            Welcome to JonesCo Seamless Gutter Systems. By using our website,
            booking estimates, or scheduling jobs, you agree to abide by the
            terms and conditions outlined below.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">2. Booking Estimates and Jobs</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>
              Free Estimates: Our complimentary estimates are provided
              without any obligation.
            </li>
            <li>
              Booking Confirmation: Once an estimate or job is booked, we
              will confirm your appointment via email or phone.
            </li>
            <li>
              Cancellations: Please provide a minimum of 24 hours notice to
              cancel or reschedule your appointment.
            </li>
            <li>
              Scope of Work: Any changes to the original scope of work must
              be agreed upon by both parties.
            </li>
            <li>
              Payment Terms: Payment terms will be outlined in the estimate
              or job contract and must be adhered to.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">3. Data Collection and Use</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>
              Personal Information: We collect your personal information
              (name, contact details) only to provide estimates or book jobs.
            </li>
            <li>
              Data Usage: Your data will be used solely for the purposes of
              providing our services and marketing.
            </li>
            <li>
              Data Sharing: We do not sell or share your data with
              third-party companies without your consent, except as required by
              law.
            </li>
            <li>
              Cookies: Our website uses cookies to enhance your browsing
              experience and gather analytics.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">4. Website Usage</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>
              Content Ownership: All content on the JonesCo Seamless Gutter
              Systems website, including text, images, and logos, is our
              property.
            </li>
            <li>
              Third-Party Links: Our website may contain links to third-party
              websites. We are not responsible for their content or privacy
              practices.
            </li>
            <li>
              User Conduct: You agree not to use our website for any unlawful
              purpose or to disrupt its normal operations.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">5. Liability and Disclaimers</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>
              Service Quality: We strive to provide the best service
              possible. However, we cannot guarantee perfection in every aspect
              of the job.
            </li>
            <li>
              Website Accuracy: We endeavor to keep the information on our
              website accurate but do not guarantee its completeness or
              reliability.
            </li>
            <li>
              Indemnification: You agree to indemnify and hold harmless
              JonesCo Seamless Gutter Systems from any claims arising from your
              use of our website or services.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">6. Changes to Terms</h2>
          <p className="text-gray-600">
            We reserve the right to update these terms and conditions at any
            time. Please review this page regularly for any changes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">7. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions or concerns regarding these terms and
            conditions, please contact us at:
          </p>
          <p className="text-gray-600">
            JonesCo Seamless Gutter Systems <br />
            Parrottsville, TN <br />
            423.900.7901 <br />
            admin@jonescogutters.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
